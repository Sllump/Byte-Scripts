import { makeStyles } from '@mui/styles';

export default makeStyles({
    mdwLoadingModalContainer: {
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        display: 'flex',
        zIndex: '1000',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    mdwLoadingModalInnerContainer: {
        width: 'calc(30% - 64px)',
        height: 'auto',
        display: 'flex',
        padding: '16px',
        overflow: 'hidden scroll',
        position: 'relative',
        maxHeight: '80%',
        minHeight: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(34, 40, 49)'
    },
});