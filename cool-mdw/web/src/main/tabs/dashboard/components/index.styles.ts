import { makeStyles } from '@mui/styles';

export default makeStyles({
    mdwDashboardOuterContent: {
        width: '90%',
        height: '100%',
        padding: '8px'
      },
      mdwDashboardInnerContent: {
        width: '100%',
        height: '100%',
        display: 'flex'
      },
      mdwDashboardInnerContentLeft: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)'
      },
      mdwDashboardInnerContentLeftHeader: {
        width: '100%',
        display: 'flex',
        padding: '8px',
        minHeight: '48px',
        justifyContent: 'space-between'
      },
      mdwInnerContainer: {
        width: '98vw',
        height: '96vh',
        display: 'flex',
        opacity: '1',
        position: 'absolute',
        transition: 'top 400ms ease-out 0s',
        flexDirection: 'column',
        backgroundColor: 'rgb(48, 71, 94)'
      },
      mdwInnerContentLeftHeaderTextRight: {
        maxWidth: '40%',
        paddingRight: '8px'
      },
      mdwInnerContentLeftBody: {
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
      mdwDashboardInnerContentMiddle: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)'
      },
      mdwDashboardInnerContentMiddleHeader: {
        width: '100%',
        display: 'flex',
        padding: '8px',
        minHeight: '48px',
        justifyContent: 'space-between'
      },
      mdwDashboardInnerContentMiddleHeaderTextRight: {
        maxWidth: '40%',
        paddingRight: '8px'
      },
      mdwDashboardInnerContentMiddleBody: {
        flex: '1 1 0%',
        width: '100%',
        height: '100%',
        display: 'flex',
        padding: '8px',
        maxHeight: '100%',
        overflowY: 'auto',
        flexDirection: 'column'
      },
      mdwDashboardInnerContentRight: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)'
      },
      mdwDashboardInnerContentRightHeader: {
        width: '100%',
        display: 'flex',
        padding: '8px',
        minHeight: '48px',
        justifyContent: 'space-between'
      },
      mdwDashboardInnerContentRightHeaderTextRight: {
        maxWidth: '40%',
        paddingRight: '8px'
      },
      mdwDasboardInnerContentRightBody: {
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