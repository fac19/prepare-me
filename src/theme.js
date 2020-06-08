import {createMuiTheme} from "@material-ui/core/styles";

const primaryColor = "#FFFFFF";
// const secondaryColor = "#0FC6CC";
const secondaryColor = "#0EB5BB";

export default createMuiTheme({
    typography: {
        h1: {
            fontSize: "5vh",
            fontWeight: 700,
            lineHeight: 1.5
        },
        h2: {
            fontSize: "3vh"
        },
        h3: {
            fontSize: "2.5vh"
        },
        h4: {
            fontSize: 12
        }
    },
    palette: {
        primary: {
            main: primaryColor,
            dark: "#143C8C",
            contrastText: "#fff"
        },
        secondary: {
            main: "#64B42D",
            dark: "#008732",
            contrastText: "#fff"
        },
        error: {
            main: "#BD0043",
            contrastText: "#fff"
        }
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                html: {
                    background: "red"
                }
            }
        },
        MuiContainer: {
            root: {
                // minHeight: "100vh",
                height: "100vh",
                background: secondaryColor
            }
        },
        MuiButton: {
            root: {
                lineHeight: "2em",
                fontSize: "2.5vh",
                borderRadius: "30px",
                fontWeight: "bold",
                backgroundColor: "white",
                margin: "10px",
                "&:hover": {
                    backgroundColor: "white"
                },
                color: secondaryColor
            }
        }
    }
});
