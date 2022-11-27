import { makeStyles } from "@mui/styles";

export default makeStyles({
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
        pointerEvents: "none",
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
            color: "blue"
        },
        "& .MuiInput-underline:after": {
            borderColor: "white",
            color: "blue"

        },
        "& .MuiInputLabel-animated": {
            color: "darkgray",
            fontSize: '1.5vmin'

        },
        "& .MuiInputAdornment-root": {
            color: "darkgray",

        }
    },
    checkbox: {
        '&:hover': {
            backgroundColor: 'transparent !important'
        }
    },
    hudOuterContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        zIndex: '50',
        position: 'relative',
        flexDirection: 'column'
    },
    hudInnerContainer: {
        top: '0px',
        left: '0px',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        position: 'absolute',
        alignItems: 'flex-end'
    },
    hudIconWrapper: {
        width: '54px',
        height: '54px',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        maxWidth: '54px'
    },
    hudIcon: {
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconWrapper: {
        width: '34px',
        height: '34px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '100%',
        justifyContent: 'center',
        backgroundColor: 'rgb(33, 33, 33)'
    },
    radioChannelWrapper: {
        color: 'white',
        zIndex: '250',
        position: 'absolute'
    },
    vehicleHudContainer: {
        top: '0px',
        left: '0px',
        width: '100vw',
        height: '100vh',
        position: 'absolute'
    },
    minimapBorder: {
        top: 'calc(74vh - 4px)',
        left: '0.3125vw',
        width: '13.125vw',
        border: '4px solid rgb(189, 189, 189)',
        height: '20vh',
        position: 'absolute',
        boxSizing: 'content-box',
        borderRadius: '100%'
    }
});