import { makeStyles } from '@mui/styles';

export default makeStyles({
    mdwProfilesOuterContent: {
        width: '90%',
        height: '100%',
        padding: '8px'
      },
      mdwProfilesInnerContent: {
        width: '100%',
        height: '100%',
        display: 'flex'
      },
      mdwProfilesInnerContentLeft: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)'
      },
      mdwProfilesInnerContentLeftHeader: {
        width: '100%',
        display: 'flex',
        padding: '8px',
        minHeight: '48px',
        justifyContent: 'space-between'
      },
      mdwProfilesInnerContentMiddle: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)'
      },
      mdwProfilesInnerContentMiddleHeader: {
        width: '100%',
        display: 'flex',
        padding: '8px',
        minHeight: '48px',
        justifyContent: 'space-between'
      },
      mdwProfilesInnerContentRight: {
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)'
      },
      mdwProfilesInnerContentRightHeader: {
        width: '100%',
        display: 'flex',
        padding: '8px',
        minHeight: '48px',
        justifyContent: 'space-between'
      },
      mdwProfilesInnerContentRightHeaderTextRight: {
        maxWidth: '40%',
        paddingRight: '8px'
      },
      mdwCreateImage: {
        marginRight: '8px'
      },
      mdwProfilesContentWrapperRight: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      },
      mdwProfilesLicensesContentRight: {
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)',
        marginBottom: '1.5%'
      },
      mdwProfilesTagsContentRight: {
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)',
        marginBottom: '1.5%'
      },
      mdwProfilesVehiclesContentRight: {
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)',
        marginBottom: '1.5%'
      },
      mdwProfilesHousingContentRight: {
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)',
        marginBottom: '1.5%'
      },
      mdwProfilesHotelsContentRight: {
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)',
        marginBottom: '1.5%'
      },
      mdwProfilesStorageContentRight: {
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)',
        marginBottom: '1.5%'
      },
      mdwProfilesEmploymentContentRight: {
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)',
        marginBottom: '1.5%'
      },
      mdwProfilesPriorsContentRight: {
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(30, 58, 86)',
        marginBottom: '1.5%'
      },
      mdwProfilesInnerContentLeftHeaderTextRight: {
        maxWidth: '40%',
        paddingRight: '8px'
      },
      mdwProfilesInnerContentLeftBody: {
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
      mdwProfilesInnerContentMiddleHeaderTextRight: {
        maxWidth: '40%',
        paddingRight: '8px'
      },
      mdwProfilesInnerContentMiddleBody: {
        flex: '1 1 0%',
        width: '100%',
        height: '100%',
        display: 'flex',
        padding: '8px',
        maxHeight: '100%',
        overflowY: 'auto',
        flexDirection: 'column'
      },
      mdwProfilesInnerContentRightBody: {
        flex: '1 1 0%',
        width: '100%',
        height: '100%',
        display: 'flex',
        padding: '8px',
        maxHeight: '100%',
        overflowY: 'auto',
        flexDirection: 'column'
      },
      checkbox: {
        '&:hover': {
          backgroundColor: 'transparent !important'
        }
      },
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