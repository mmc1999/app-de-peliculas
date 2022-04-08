import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'dark' 
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#161D2F"
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    display:"flex",
                    flexDirection:"row"
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: 0
                }
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: 0,
                    justifyContent: "center",
                    width:40
                }
            }
        }
    }
})