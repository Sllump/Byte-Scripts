import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import './index.css'
import Hud from './hud/components';

const darkTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: '0'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.02)",
          "&.Mui-selected": {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            "&.Mui-focusVisible": { background: "rgba(0, 0, 0, 0.3)" }
          },
          "&.Mui-selected:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }
        }
      }
    },
    MuiCircularProgress: {
      styleOverrides: {
        circle: {
          strokeLinecap: 'butt'
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "& .MuiInput-root": {
            color: "darkgray !important",
            fontSize: '1.3vmin !important'
        },
        "& label.Mui-focused": {
          color: "darkgray !important"
        },
        "& Mui-focused": {
          color: "darkgray !important"
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderColor: "darkgray !important"
        },
        "& .MuiInput-underline:before": {
            borderColor: "darkgray !important",
            color: "darkgray !important"
        },
        "& .MuiInput-underline:after": {
            borderColor: "white !important",
            color: "darkgray !important"
        },
        "& .Mui-focused:after": {
            color: "darkgray !important",
            fontSize: '1.5vmin !important'
        },
        "& .MuiInputAdornment-root": {
            color: "darkgray !important",
        }
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "1em",
          maxWidth: "1000px"
        },
      }
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#95ef77'
    },
    secondary: {
      main: '#424cab'
    },
    success: {
      main: '#95ef77'
    },
    warning: {
      main: '#f2a365'
    },
    error: {
      main: '#ffffff'
    },
    info: {
      main: '#2d465b'
    },
  },
});

const useStyles = makeStyles((darkTheme) => ({
  root: {
    top: "0px",
    left: "0px",
    width: "100vw",
    height: "100vh",
    position: "absolute",
    maxWidth: "100vw",
    minWidth: "100vw",
    maxHeight: "100vh",
    minHeight: "100vh",
    border: "0px",
    margin: "0px",
    outline: "0px",
    padding: "0px",
    overflow: "hidden",
    "& .MuiInput-root": {
      color: "white",
      fontSize: '1.3vmin'
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderColor: "darkgray"
  },
  "& .MuiInput-underline:before": {
      borderColor: "darkgray",
      color: "darkgray"
  },
  "& .MuiInput-underline:after": {
      borderColor: "white",
      color: "darkgray"
  },
  "& .MuiInputLabel-animated": {
      color: "darkgray",
      fontSize: '1.5vmin'
  },
  "& .MuiInputAdornment-root": {
      color: "darkgray",
  },
  "& label.Mui-focused": {
    color: "darkgray"
  },
  },
  input: {
    '& input[type=number]': {
        '-moz-appearance': 'textfield'
    },
    '& input[type=number]::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
    },
    '& input[type=number]::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
    }
},
}));

const App: React.FC = () => {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Hud />
      </ThemeProvider>
    </>
  );
}

export default App;