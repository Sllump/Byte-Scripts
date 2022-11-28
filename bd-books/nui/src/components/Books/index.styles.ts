import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    wrapper: {
        top: '0px',
        left: '0px',
        width: '100vh',
        height: '100vh',
        position: 'absolute',
        maxWidth: '100vw',
        maxHeight: '100vh',
        minHeight: '100vh',
        minWidth: '100vw',
        border: 'none',
        margin: '0px',
        outline: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
        
    },
    tickWrapper: {
        width: '3%',
        height: '85%',
        display: 'flex',
    },
    tick: {
        position: 'relative',
        width: '100%',
        height: '50%',
        backgroundColor: '#d8bc8d',
    },
    bookWrapper: {
        position : 'relative',
        width: '85%',
        height: '85%',
        display: 'flex',
        justifyContent: 'center',
    },
    realWrapper: {
        position : 'absolute',
        width: '90%',
        height: '90%',
        backgroundImage: 'url(https://imgur.com/z5opwoh.png)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    lineWrapper: {
        position: 'relative',
        width: '10%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
    },
    drawline : {
        position : 'relative',
        borderLeft: '2px rgba(32, 32, 32, 0.7) solid',
        height: '100%',
        float: 'left',
    },

    dataWrapper: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        float: 'left',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    section: {
        position: 'relative',
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },

    section2: {
        position: 'relative',
        width: '50%',
        height: '110%',
        display: 'flex',
        top: '-1.5%',
        justifyContent: 'center',
    },

    firstImage: {
        position: 'relative',
        width: '95%',
        height: '75%',
        marginTop: '2rem',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'rgb(255 255 255 / 40%) 0px 1px 0px inset, rgb(0 0 0 / 60%) 0px 0px 10px',
    },

    firstImage2: {
        position: 'relative',
        width: '60%',
        height: '45%',
        marginTop: '20%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'rotate(-5deg)',
        boxShadow: 'rgb(255 255 255 / 40%) 0px 1px 0px inset, rgb(0 0 0 / 60%) 0px 0px 10px',
    },

    dataPhoto: {
        position: 'relative',
        width: '95%',
        height: '95%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'flex',
        justifyContent: 'center',
    },
    dataPhoto2: {
        position: 'relative',
        width: '95%',
        height: '95%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'flex',
        justifyContent: 'center',
    },

    tape: {
        position: 'relative',
        width: '300px',
        height: '60px',
        top: '-6%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    },

    tape2: {
        position: 'relative',
        width: '270px',
        height: '60px',
        top: '-10%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    },

    optional: {
        position: 'absolute',
        width: '250px',
        height: '100%',
        top: '20%',
        left: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        transform: 'rotate(10deg)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '100',
    },

    optionalWrapper: {
        position: 'relative',
        width: '70%',
        height: '70%',
    },

    paper: {
        backgroundImage: 'url(https://imgur.com/1i28KuN.png)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: '1',
    },

    center: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        width: 'auto',
        height: 'auto',
    },

    stamp: {
        position: 'relative',
        left: '40px',
        top: '-40px',
        transform: 'rotate(-20deg)',
    },

    hr: {
        position: 'relative',
        width: '95%',
        height: '15vh',
        display: 'flex',
        margin: 'auto',
    },
    zone1: {
        position: 'relative',
        width: '65%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
    },
    zone2: {
        position: 'relative',
        width: '40%',
        height: '100%',
    },
    separation: {
        position: 'relative',
        width: '100%',
        height: '25%',
        marginTop: '3%',
        display: 'flex',
        alignItems: 'center',
    },
    completeInfo: {
        position: 'relative',
        width: '90%',
        height: '36%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        marginTop: 'none',
        overflow: 'hidden',
        overflowY: 'scroll',
    },

    briefingText: {
        fontFamily: 'PT Mono, monospace', 
        fontSize: '1.3rem',
        margin: '10px',
    },


    comicPage: {
        height: '100%',
        width: '100%',
    },

    centerComic: {
        position: 'relative',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

    photoFit: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    }
});
