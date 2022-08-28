import { Container, Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { AppMenu } from "./components/AppMenu/AppMenu";
import { SettingsButton } from "./components/MenuButton/MenuButton";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { VinylCard } from "./components/VinylCard/VinylCard";
import { Vinyl } from "./components/VinylTypes/Vinyl";
import vinyls from "./vinyls.json";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchTextEnabled, setSearchTextEnabled] = useState(false);
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
    setFilteredVinyls(
      vinyls.filter((vinyl) =>
        vinyl.album.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  return (
    <ThemeProvider theme={theme}>
      <AppMenu setSearchText searchTextEnabled setSearchTextEnabled />
      <CssBaseline />
      <Container maxWidth={false}>
        <div className="AppHeader">
          {searchTextEnabled && <SearchBox setSearchText={setSearchText} />}
        </div>
        <div className="AppBody">
          <Grid container>
            <div className="Cards">
              {filteredVinyls.map((vinyl) => (
                <Grid item xs key={vinyl.id}>
                  <VinylCard {...vinyl} key={vinyl.id} />
                </Grid>
              ))}
            </div>
          </Grid>
        </div>
      </Container>
      <SettingsButton />
    </ThemeProvider>
  );
}

export default App;
