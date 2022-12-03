import { makeStyles } from '@mui/styles';

export default makeStyles({
    mdwPropertiesOuterContent: {
        width: '90%',
        height: '100%',
        padding: '8px'
    },
    mdwPropertiesInnerContent: {
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    mdwPropertiesInnerContentLeft: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)'
    },
    mdwPropertiesInnerContentLeftHeader: {
        width: '100%',
        display: 'flex',
        padding: '8px',
        minHeight: '48px',
        justifyContent: 'space-between'
    },
    mdwPropertiesInnerContentRight: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)'
    },
    mdwPropertiesInnerContentRightHeader: {
        width: '100%',
        display: 'flex',
        padding: '8px',
        minHeight: '48px',
        justifyContent: 'space-between'
    },
    mdwPropertiesInnerContentLeftHeaderTextRight: {
        maxWidth: '40%',
        paddingRight: '8px'
    },
    mdwPropertiesInnerContentLeftBody: {
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
    mdwPropertiesInnerContentRightBody: {
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