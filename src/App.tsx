import {Container, Grid} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useEffect, useMemo, useState} from "react";
import "./App.css";
import {AppMenu} from "./components/AppMenu/AppMenu";
import {SettingsButton} from "./components/MenuButton/MenuButton";
import {VinylCard} from "./components/VinylCard/VinylCard";
import {Vinyl} from "./components/VinylTypes/Vinyl";
import vinyls from "./vinyls.json";
import {firebaseConfig} from "./config/config"
import 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

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
        setFilteredVinyls(
            vinyls.filter((vinyl) =>
                vinyl.album.toLowerCase().includes(searchText.toLowerCase())
            )
        );
    }, [searchText]);

    return (
        <ThemeProvider theme={theme}>
            <AppMenu setSearchText={setSearchText} signInWithGoogle={signInWithGoogle}/>
            <CssBaseline/>
            <Container maxWidth={false}>
                <div className="AppBody">
                    <Grid container>
                        <div className="Cards">
                            {filteredVinyls.map((vinyl) => (
                                <Grid item xs key={vinyl.id}>
                                    <VinylCard {...vinyl} key={vinyl.id}/>
                                </Grid>
                            ))}
                        </div>
                    </Grid>
                </div>
            </Container>
            <SettingsButton/>
        </ThemeProvider>
    );
}

export default App;
