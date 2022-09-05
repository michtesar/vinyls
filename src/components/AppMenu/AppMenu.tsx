import AlbumIcon from "@mui/icons-material/Album";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import TextField from "@mui/material/TextField";
import {SearchOutlined} from '@material-ui/icons';
import {auth} from "../../App";
import 'firebase/auth';
import firebase from 'firebase/compat/app';


const pages = ["All", "Favorite", "Recent", "Top"];

export const AppMenu = (props: any) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (event: any) => {
        setAnchorElUser(null);
    };

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.setSearchText(event.target.value);
    };

    function handleUserSignOut() {
        firebase.auth().signOut()
            .then(() => {
                props.setLogged(false)
            }).catch(() => console.error("Cannot logout user"))
    }

    function handleUserSignIn() {
        props.signInWithGoogle()
        props.setLogged(true)
    }

    function unpack(s: string | undefined | null) {
        return s ? s : "Unknown"
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AlbumIcon sx={{display: {xs: "flex", md: "none"}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: "flex", md: "none"},
                            flexGrow: 1,
                            fontFamily: "monospace",
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >Vinyls
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: "white", display: "block"}}
                            >{page}
                            </Button>
                        ))}
                    </Box>
                    <TextField
                        fullWidth
                        id="search"
                        variant="outlined"
                        size={"small"}
                        style={{marginRight: 50, marginLeft: 50}}
                        onChange={onChange}
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SearchOutlined/>
                                </IconButton>
                            ),
                        }}
                    />
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar
                                    alt={unpack(auth.currentUser?.displayName)}
                                    src={unpack(auth.currentUser?.photoURL)}
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: "45px"}}
                            id="menu-app-bar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {!props.logged &&
                                <MenuItem key={"menu-login"} onClick={handleUserSignIn}>
                                    <Typography textAlign="center">Login</Typography>
                                </MenuItem>
                            }
                            {props.logged &&
                                <MenuItem key={"menu-logout"} onClick={handleUserSignOut}>
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
