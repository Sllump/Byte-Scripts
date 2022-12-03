import { makeStyles } from '@mui/styles';

export default makeStyles({
    mdwAssignLicenseModalContainer: {
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
    mdwAssignLicenseModalInnerContainer: {
        width: 'calc(23% - 64px)',
        height: 'auto',
        display: 'flex',
        overflow: 'hidden scroll',
        position: 'relative',
        maxHeight: '80%',
        minHeight: '22%',
        backgroundColor: 'rgb(34, 40, 49)'
    },
});