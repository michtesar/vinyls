import { Grid } from "@mui/material";
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
      <div className="AppHeader">
        <h1>Vinyls</h1>
        <p>Your go to vinyl tracking application</p>
        <SearchBox setSearchText={setSearchText} />
      </div>
      <div className="AppBody">
        <Grid container spacing={2} columns={2}>
          <div className="Cards">
            {filteredVinyls.map((vinyl) => (
              <Grid item xs={8} key={vinyl.id}>
                <VinylCard {...vinyl} key={vinyl.id} />
              </Grid>
            ))}
          </div>
        </Grid>
      </div>
      <SettingsButton />
    </ThemeProvider>
  );
}

export default App;
