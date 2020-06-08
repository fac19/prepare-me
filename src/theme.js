import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontWeight: "bold",
        backgroundColor: "yellow",
        margin: "10px",
        "&:hover": {
          backgroundColor: "white",
        },
      },
    },
  },
});
