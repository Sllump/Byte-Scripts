import { makeStyles } from '@mui/styles';

//make floating animation

export default makeStyles({
    '@global': {
        '@keyframes pulseheart': {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.15)' },
            '100%': { transform: 'scale(1)' }
        },
        '@keyframes floating': {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
            '100%': { transform: 'translateY(0)' }
        },
        '@keyframes fade': {
            '0%': { opacity: 1 },
            '100%': { opacity: 0 }
        }
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'radial-gradient(50% 50% at 50% 50%, rgba(43, 57, 98, 0.15) 0%, rgba(36, 39, 63, 0.9) 100%)',
        zIndex: 9999,
        flexDirection: 'column'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -2,
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
    slide: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: 'scale(1.2)',
        transition: 'opacity 1s ease',
        opacity: 0
    },
    slideActive: {
        opacity: '1 !important'
    },
    pulse: {
        animation: 'pulseheart',
        animationDuration: '2s',
        animationIterationCount: 'infinite'
    },
    floating: {
        animation: 'floating 3s ease-in-out infinite'
    },
    'MuiPaper-root': {
        marginTop: '0px !important',
        height: '15vh !important',
    }
});