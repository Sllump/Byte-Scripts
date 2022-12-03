import { makeStyles } from '@mui/styles';

export default makeStyles({
    mdwBusinessesOuterContent: {
        width: '90%',
        height: '100%',
        padding: '8px'
    },
    mdwBusinessesInnerContent: {
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    mdwBusinessesInnerContentLeft: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)'
    },
    mdwBusinessesInnerContentLeftHeader: {
        width: '100%',
        display: 'flex',
        padding: '8px',
        minHeight: '48px',
        justifyContent: 'space-between'
    },
    mdwBusinessesInnerContentRight: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)'
    },
    mdwBusinessesInnerContentRightHeader: {
        width: '100%',
        display: 'flex',
        padding: '8px',
        minHeight: '48px',
        justifyContent: 'space-between'
    },
    mdwBusinessesInnerContentLeftHeaderTextRight: {
        maxWidth: '40%',
        paddingRight: '8px'
    },
    mdwBusinessesInnerContentLeftBody: {
        flex: '1 1 0%',
        width: '100%',
        display: 'flex',
        padding: '8px',
        maxHeight: '100%',
        overflowY: 'auto',
        flexDirection: 'column'
    },
    mdwInnerContentDivider: {
        width: '16px'
    },
    mdwBusinessesInnerContentRightBody: {
        flex: '1 1 0%',
        width: '100%',
        height: '100%',
        display: 'flex',
        padding: '8px',
        maxHeight: '100%',
        overflowY: 'auto',
        flexDirection: 'column'
    },
});