import { makeStyles } from '@mui/styles';

export default makeStyles({
    mdwChargesOuterContent: {
        width: '90%',
        height: '100%',
        padding: '8px',
        overflow: 'auto'
    },
    mdwChargesInnerContent: {
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    mdwChargesInnerContentLeft: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)'
    },
    mdwChargesInnerContentLeftHeader: {
        width: '100%',
        display: 'flex',
        padding: '8px',
        minHeight: '48px',
        justifyContent: 'space-between'
    },
    mdwChargesInnerContentRight: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)'
    },
    mdwChargesInnerContentRightHeaader: {
        width: '100%',
        display: 'flex',
        padding: '8px',
        minHeight: '48px',
        justifyContent: 'space-between'
    },
    mdwChargesInnerContentLeftHeaderTextRight: {
        maxWidth: '40%',
        paddingRight: '8px'
    },
    mdwChargesInnerContentLeftBody: {
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
});