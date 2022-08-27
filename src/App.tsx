import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { SettingsButton } from "./components/SettingsButton/SettingsButton";
import { VinylCard } from "./components/VinylCard/VinylCard";
import { Vinyl } from "./components/VinylTypes/Vinyl";
import vinyls from "./vinyls.json";

function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredVinyls, setFilteredVinyls] = useState<Vinyl[]>([]);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  useEffect(() => {
    document.title = "Vinyls";
  }, []);

  useEffect(() => {
    setFilteredVinyls(
      vinyls.filter((vinyl) =>
        vinyl.album.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <h1>Vinyls</h1>
        <p>Your go to vinyl tracking application</p>
        <p>{searchText}</p>
        <SearchBox setSearchText={setSearchText} />
        <div className="Cards" style={{ display: "inline-flex" }}>
          {filteredVinyls.map((vinyl) => (
            <VinylCard {...vinyl} />
          ))}
        </div>
        <SettingsButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
