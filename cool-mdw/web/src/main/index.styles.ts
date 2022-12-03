import { makeStyles } from '@mui/styles';

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
      color: "darkgray"
    },
    "& .MuiInput-underline:after": {
      borderColor: "white",
      color: "darkgray"
    },
    "& .MuiInputLabel-animated": {
      color: "darkgray",
      fontSize: '1.5vmin'
    },
    "& .MuiInputAdornment-root": {
      color: "darkgray",
    },
    "& label.Mui-focused": {
      color: "darkgray"
    },
  },
  input: {
    '& input[type=number]': {
      '-moz-appearance': 'textfield'
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    }
  },
  checkbox: {
    '&:hover': {
      backgroundColor: 'transparent !important'
    }
  },
  mdwOuterContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    zIndex: 100,
    transition: 'visibility 400ms ease-out 0s',
    visibility: 'visible',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mdwHeader: {
    width: '100%',
    height: '17.5%',
    display: 'flex',
    position: 'relative',
    borderBottom: '2px solid rgb(228, 63, 90)',
    backgroundColor: 'rgb(30, 58, 86)'
  },
  mdwHeaderText: {
    top: '0px',
    right: '0px',
    height: '100%',
    display: 'flex',
    padding: '8px',
    position: 'absolute',
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  mdwHeaderFlex: {
    flex: '1 1 0%'
  },
  mdwOuterBody: {
    width: '100%',
    height: '82.5%',
    display: 'flex',
    position: 'relative'
  },
  mdwInnerBody: {
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'absolute'
  },
  mdwTabsOuterContainer: {
    width: '10%',
    height: '100%'
  },
  mdwTabsInnerContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(34, 40, 49)'
  },
  mdwTabsFlexContainer: {
    flrx: '1 1 0%'
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
  mdwInnerContentMiddleHeaderTextRight: {
    maxWidth: '40%',
    paddingRight: '8px'
  },
  mdwInnerContentMiddleBody: {
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
  mdwInnerContentRightBody: {
    flex: '1 1 0%',
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: '8px',
    maxHeight: '100%',
    overflowY: 'auto',
    flexDirection: 'column'
  },
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
  mdwChargesOuterContent: {
    width: '90%',
    height: '100%',
    padding: '8px'
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
  mdwIncidentsOuterContent: {
    width: '90%',
    height: '100%',
    padding: '8px'
  },
  mdwIncidentsInnerContent: {
    width: '100%',
    height: '100%',
    display: 'flex'
  },
  mdwIncidentsInnerContentLeft: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(30, 58, 86)'
  },
  mdwIncidentsInnerContentLeftHeader: {
    width: '100%',
    display: 'flex',
    padding: '8px',
    minHeight: '48px',
    justifyContent: 'space-between'
  },
  mdwIncidentsInnerContentMiddle: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(30, 58, 86)'
  },
  mdwIncidentsInnerContentMiddleHeader: {
    width: '100%',
    display: 'flex',
    padding: '8px',
    minHeight: '48px',
    justifyContent: 'space-between'
  },
  mdwIncidentsInnerContentRight: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(30, 58, 86)'
  },
  mdwIncidentsInnerContentRightHeader: {
    width: '100%',
    display: 'flex',
    padding: '8px',
    minHeight: '48px',
    justifyContent: 'space-between'
  },
  mdwIncidentsInnerContentRightHeaderTextRight: {
    maxWidth: '40%',
    paddingRight: '8px'
  },
  mdwIncidentsContentWrapperRight: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  mdwIncidentsContentWrapperMiddle: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  mdwIncidentsTextContentMiddle: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(30, 58, 86)',
    marginBottom: '1.5%',
    paddingBottom: '1.5%'
  },
  mdwIncidentsAddCriminalContentRight: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(30, 58, 86)',
    marginBottom: '1.5%',
  },
  mdwIncidentsEvidenceContentMiddle: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(30, 58, 86)',
    marginBottom: '1.5%',
  },
  mdwIncidentsOfficersInvolvedContentMiddle: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(30, 58, 86)',
    marginBottom: '1.5%',
  },
  mdwIncidentsPersonsInvolvedContentMiddle: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(30, 58, 86)',
    marginBottom: '1.5%',
  },
  mdwIncidentsTagsContentMiddle: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(30, 58, 86)',
    marginBottom: '1.5%',
  },
  mdwIncidentsVehiclesContentMiddle: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(30, 58, 86)',
    marginBottom: '1.5%',
  },
  mdwIncidentsCriminalContentRight: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(30, 58, 86)',
    marginBottom: '1.5%',
  },
  mdwEvidenceOuterContent: {
    width: '90%',
    height: '100%',
    padding: '8px'
  },
  mdwEvidenceInnerContent: {
    width: '100%',
    height: '100%',
    display: 'flex'
  },
  mdwEvidenceInnerContentLeft: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(30, 58, 86)'
  },
  mdwEvidenceInnerContentLeftHeader: {
    width: '100%',
    display: 'flex',
    padding: '8px',
    minHeight: '48px',
    justifyContent: 'space-between'
  },
  mdwEvidenceInnerContentMiddle: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(30, 58, 86)'
  },
  mdwEvidenceInnerContentMiddleHeader: {
    width: '100%',
    display: 'flex',
    padding: '8px',
    minHeight: '48px',
    justifyContent: 'space-between'
  },
  mdwEvidenceInnerContentRight: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(30, 58, 86)'
  },
  mdwEvidenceInnerContentRightHeader: {
    width: '100%',
    display: 'flex',
    padding: '8px',
    minHeight: '48px',
    justifyContent: 'space-between'
  },
  mdwEvidenceInnerContentRightHeaderTextRight: {
    maxWidth: '40%',
    paddingRight: '8px'
  },
  mdwEvidenceContentWrapperRight: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  mdwEvidenceTagsContentRight: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(30, 58, 86)',
    marginBottom: '1.5%'
  },
  mdwAssignOfficerModalContainer: {
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
  mdwAssignOfficerModalInnerContainer: {
    width: 'calc(50% - 64px)',
    height: 'auto',
    display: 'flex',
    overflow: 'hidden scroll',
    position: 'relative',
    maxHeight: '80%',
    minHeight: '35%',
    backgroundColor: 'rgb(34, 40, 49)'
  },
  mdwAssignOfficerChipWrapper: {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    display: 'flex',
    padding: '8px',
    maxHeight: '100%',
    overflowY: 'auto',
    flexDirection: 'column'
  },
  mdwAssignEmsModalContainer: {
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
  mdwAssignEmsModalInnerContainer: {
    width: 'calc(50% - 64px)',
    height: 'auto',
    display: 'flex',
    overflow: 'hidden scroll',
    position: 'relative',
    maxHeight: '80%',
    minHeight: '35%',
    backgroundColor: 'rgb(34, 40, 49)'
  },
  mdwAssignEmsChipWrapper: {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    display: 'flex',
    padding: '8px',
    maxHeight: '100%',
    overflowY: 'auto',
    flexDirection: 'column'
  },
  mdwAssignPersonModalContainer: {
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
  mdwAssignPersonModalInnerContainer: {
    width: 'calc(50% - 64px)',
    height: 'auto',
    display: 'flex',
    overflow: 'hidden scroll',
    position: 'relative',
    maxHeight: '80%',
    minHeight: '35%',
    backgroundColor: 'rgb(34, 40, 49)'
  },
  mdwAssignEvidenceModalContainer: {
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
  mdwAssignEvidenceModalInnerContainer: {
    width: 'calc(23% - 64px)',
    height: 'auto',
    display: 'flex',
    overflow: 'hidden scroll',
    position: 'relative',
    maxHeight: '80%',
    minHeight: '53%',
    backgroundColor: 'rgb(34, 40, 49)'
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
  mdwAddCriminalModalContainer: {
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
  mdwAddCriminalModalInnerContainer: {
    width: 'calc(50% - 64px)',
    height: 'auto',
    display: 'flex',
    overflow: 'hidden scroll',
    position: 'relative',
    maxHeight: '80%',
    minHeight: '35%',
    backgroundColor: 'rgb(34, 40, 49)'
  },
  mdwAddChargeModalContainer: {
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
  mdwAddChargeModalInnerContainer: {
    width: 'calc(74% - 64px)',
    height: 'auto',
    display: 'flex',
    overflow: 'hidden scroll',
    position: 'relative',
    maxHeight: '74%',
    minHeight: '74%',
    backgroundColor: 'rgb(34, 40, 49)'
  },
  mdwCreateWarrantModalContainer: {
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
  mdwCreateWarrantModalInnerContainer: {
    width: 'calc(23% - 64px)',
    height: 'auto',
    display: 'flex',
    overflow: 'hidden scroll',
    position: 'relative',
    maxHeight: '80%',
    minHeight: '22%',
    backgroundColor: 'rgb(34, 40, 49)'
  },
  mdwHireOfficerModalContainer: {
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
  mdwHireOfficerModalInnerContainer: {
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