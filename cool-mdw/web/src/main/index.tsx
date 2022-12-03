import React, { useState, useEffect } from 'react';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNuiEvent } from '../hooks/useNuiEvent';
import { useExitListener } from '../hooks/useExitListener';
import { fetchNui } from '../utils/fetchNui';
import { Button, Chip, Divider, FormControl, InputAdornment, Stack, TextField, MenuItem } from '@mui/material';
import { BrowserRouter as Router, Switch, Route, useHistory, Link } from 'react-router-dom';
import { isEnvBrowser } from "../utils/misc";
import { useRecoilState } from 'recoil';
import { addChargeState, addCriminalState, assignEmsState, assignEvidenceState, assignLicenseModalState, createWarrantModalState, hireOfficerModalState, assignLoadingState, assignOfficerState, assignPersonState, businessDataState, chargeCIDState, chargesDataState, criminalsState, curChargesState, curJobState, employeeDataState, emsInvolvedState, emsState, evidenceSearchDataState, evidenceState, filteredBusinessDataState, filteredEmsState, filteredEvidenceSearchDataState, filteredIncidentsSearchDataState, filteredOfficersState, filteredPropertyDataState, incidentIdState, incidentsSearchDataState, licenseDataState, licenseTypeState, loadingModalState, mdwCallsignState, mdwFirstNameState, mdwLastNameState, mdwPublicState, mdwRankLabelState, mdwRankState, officersInvolvedState, officersState, personsInvolvedState, profileIdState, propertyDataState, warrantsDataState, filteredWarrantsDataState, staffDataState, filteredStaffDataState } from '../atoms/atoms';
import Typography from '@mui/material/Typography';
import useStyles from "./index.styles";
import MDWLoadingModal from './mdw-loading-modal';
import MDWAssignLicenseModal from './mdw-assign-license-modal';
import Dashboard from './tabs/dashboard/components';
import Incidents from './tabs/incidents/police/components';
import IncidentsEMS from './tabs/incidents/ems/components';
import Profiles from './tabs/profiles/components';
import DMV from './tabs/dmv/components';
import Evidence from './tabs/evidence/components';
import Properties from './tabs/properties/components';
import Charges from './tabs/charges/components';
import Businesses from './tabs/businesses/components';
import Staff from './tabs/staff/components';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import moment from 'moment';

const darkTheme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    margin: '0'
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    "&.Mui-selected": {
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        "&.Mui-focusVisible": { background: "rgba(0, 0, 0, 0.3)" }
                    },
                    "&.Mui-selected:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                    }
                }
            }
        },
        MuiCircularProgress: {
            styleOverrides: {
                circle: {
                    strokeLinecap: 'butt'
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    "& .MuiInput-root": {
                        color: "white !important",
                        fontSize: '1.3vmin !important'
                    },
                    "& label.Mui-focused": {
                        color: "darkgray !important"
                    },
                    "& Mui-focused": {
                        color: "darkgray !important"
                    },
                    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                        borderColor: "darkgray !important"
                    },
                    "& .MuiInput-underline:before": {
                        borderColor: "darkgray !important",
                        color: "darkgray !important"
                    },
                    "& .MuiInput-underline:after": {
                        borderColor: "white !important",
                        color: "darkgray !important"
                    },
                    "& .Mui-focused:after": {
                        color: "darkgray !important",
                        fontSize: '1.5vmin !important'
                    },
                    "& .MuiInputAdornment-root": {
                        color: "darkgray !important",
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: "1em",
                    maxWidth: "1000px"
                },
            }
        }
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#95ef77'
        },
        secondary: {
            main: '#424cab'
        },
        success: {
            main: '#95ef77'
        },
        warning: {
            main: '#f2a365'
        },
        error: {
            main: '#ffffff'
        },
        info: {
            main: '#2d465b'
        },
    },
});

const App: React.FC = () => {
    const classes = useStyles();

    const [isVisible, setIsVisible] = useState(false)

    //history
    const history = useHistory();

    //player info
    const [mdwFirstName, setMdwFirstName] = useRecoilState(mdwFirstNameState)
    const [mdwLastName, setMdwLastName] = useRecoilState(mdwLastNameState)
    const [mdwRank, setMdwRank] = useRecoilState(mdwRankState)
    const [mdwRankLabel, setMdwRankLabel] = useRecoilState(mdwRankLabelState)
    const [mdwCallsign, setMdwCallsign] = useRecoilState(mdwCallsignState)
    const [mdwPublic, setMdwPublic] = useRecoilState(mdwPublicState)

    const [curTab, setCurTab] = useState(1)
    const [profileSearchData, setProfileSearchData] = useState([])
    const [evidenceSearchData, setEvidenceSearchData] = useRecoilState(evidenceSearchDataState)
    const [filteredEvidenceSearchData, setFilteredEvidenceSearchData] = useRecoilState(filteredEvidenceSearchDataState)
    const [personSearchData, setPersonSearchData] = useState([])
    const [criminalSearchData, setCriminalSearchData] = useState([])
    const [licenseData, setLicenseData] = useRecoilState(licenseDataState)
    const [businesses, setBusinesses] = useRecoilState(businessDataState)
    const [filteredBusinesses, setFilteredBusinesses] = useRecoilState(filteredBusinessDataState)
    const [propertyData, setPropertyData] = useRecoilState(propertyDataState)
    const [filteredPropertyData, setFilteredPropertyData] = useRecoilState(filteredPropertyDataState)
    const [incidentsSearchData, setIncidentsSearchData] = useRecoilState(incidentsSearchDataState)
    const [filteredIncidentsSearchData, setFilteredIncidentsSearchData] = useRecoilState(filteredIncidentsSearchDataState)
    const [officers, setOfficers] = useRecoilState(officersState)
    const [filteredOfficers, setFilteredOfficers] = useRecoilState(filteredOfficersState)
    const [ems, setEms] = useRecoilState(emsState)
    const [filteredEms, setFilteredEms] = useRecoilState(filteredEmsState)
    const [curCharges, setCurCharges] = useRecoilState(curChargesState)
    const [employeeData, setEmployeeData] = useRecoilState(employeeDataState)
    const [chargesData, setChargesData] = useRecoilState(chargesDataState)
    const [profileId, setProfileId] = useRecoilState(profileIdState)
    const [chargeCID, setChargeCID] = useRecoilState(chargeCIDState)

    const [incidentId, setIncidentId] = useRecoilState(incidentIdState)

    const [evidence, setEvidence] = useRecoilState(evidenceState)
    const [officersInvolved, setOfficersInvolved] = useRecoilState(officersInvolvedState)
    const [emsInvolved, setEmsInvolved] = useRecoilState(emsInvolvedState)
    const [personsInvolved, setPersonsInvolved] = useRecoilState(personsInvolvedState)
    const [criminals, setCriminals] = useRecoilState(criminalsState)

    const [isLoading, setLoading] = useState(false)
    const [loadingModal, setLoadingModal] = useRecoilState(loadingModalState)
    const [assignLoading, setAssignLoading] = useRecoilState(assignLoadingState)
    const [assignEvidenceModal, setAssignEvidenceModal] = useRecoilState(assignEvidenceState)
    const [assignOfficerModal, setAssignOfficerModal] = useRecoilState(assignOfficerState)
    const [assignEmsModal, setAssignEmsModal] = useRecoilState(assignEmsState)
    const [assignPersonsModal, setAssignPersonsModal] = useRecoilState(assignPersonState)
    const [addCriminalModal, setAddCriminalModal] = useRecoilState(addCriminalState)
    const [addChargeModal, setAddChargeModal] = useRecoilState(addChargeState)
    const [assignLicenseModal, setAssignLicenseModal] = useRecoilState(assignLicenseModalState)
    const [createWarrantModal, setCreateWarrantModal] = useRecoilState(createWarrantModalState)
    const [hireOfficerModal, setHireOfficerModal] = useRecoilState(hireOfficerModalState)
    const [opacity, setOpacity] = useState(false)

    //evidence
    const [evidenceType, setEvidenceType] = useState("")
    const [evidenceIdentifier, setEvidenceIdentifier] = useState("")
    const [evidenceDescription, setEvidenceDescription] = useState("")
    const [evidenceCID, setEvidenceCID] = useState("")

    //license
    const [licenseType, setLicenseType] = useRecoilState(licenseTypeState)

    //warrant
    const [warrants, setWarrants] = useRecoilState(warrantsDataState)
    const [filteredWarrants, setFilteredWarrants] = useRecoilState(filteredWarrantsDataState)
    const [warrantCid, setWarrantCid] = useState("")
    const [warrantIncidentId, setWarrantIncidentId] = useState("")
    const [warrantExpiry, setWarrantExpiry] = useState<Date | null>(null)

    const [staffData, setStaffData] = useRecoilState(staffDataState)
    const [filteredStaffData, setFilteredStaffData] = useRecoilState(filteredStaffDataState)

    const [hireCid, setHireCid] = useState("")
    const [hireCallsign, setHireCallsign] = useState("")
    const [hireRank, setHireRank] = useState("")

    //charges
    const [chargeTitleSearch, setChargeTitleSearch] = useState("")

    //current job
    const [curJob, setCurJob] = useRecoilState(curJobState)

    useEffect(() => {
        if (isEnvBrowser()) {
            setMdwFirstName("Joe")
            setMdwLastName("Mama")
            setMdwRank("9")
            setMdwRankLabel("Chief of Police")
            setMdwCallsign("123")
        } else {
            fetchNui('fetchUserInfo', {}).then(resData => {
                setMdwFirstName(resData.data.first) //this needa be global
                setMdwLastName(resData.data.last)
                setMdwRank(resData.data.rank)
                setMdwRankLabel(resData.data.label)
                setMdwCallsign(resData.data.callsign)
            })
        }
    })
    
    useNuiEvent<any>('openMDW', (data: any) => {
        if (data.show === true) {
            if (data.publicApp) {
                setCurTab(3)
                history.push('/profiles')
            }
            setOpacity(false)
            setLoading(false)
            setLoadingModal(false)
            setAssignLoading(false)
            setAssignLicenseModal(false)
            setCreateWarrantModal(false)
            setHireOfficerModal(false)
            setAssignEvidenceModal(false)
            setAssignOfficerModal(false)
            setAssignPersonsModal(false)
            setAddCriminalModal(false)
            setAddChargeModal(false)
            setIsVisible(true)
            setMdwPublic(data.publicApp)
            setCurJob(data.job)
            if (!data.publicApp) {
                if (curTab === 1) {
                    history.push('/dashboard')
                }
            }
        } else if (data.show === false) {
            setIsVisible(false)
        }
    })

    const genNumbers = (length) => {
        let result = '';
        let characters = '0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const handleChangeTab = (tab: number) => {
        setCurTab(tab)
        setIncidentsSearchData([])
        setFilteredIncidentsSearchData([])
        setPropertyData([])
        setFilteredPropertyData([])
        setChargesData([])
        setEmployeeData([])
        setBusinesses([])
        setFilteredBusinesses([])
        setProfileSearchData([])
        setEvidenceSearchData([])
        setFilteredEvidenceSearchData([])
        setStaffData([])
        setFilteredStaffData([])
    }

    const searchPersons = (value) => {
        if (value === "" || value === undefined) {
            setPersonSearchData([])
            return
        }
        setPersonSearchData([])
        fetchNui('arp-mdw:searchProfiles', { value: value }).then(resData => {
            setPersonSearchData(resData.data)
        })
    }

    const searchCriminals = (value) => {
        if (value === "" || value === undefined) {
            setCriminalSearchData([])
            return
        }
        setCriminalSearchData([])
        fetchNui('arp-mdw:searchProfiles', { value: value }).then(resData => {
            setCriminalSearchData(resData.data)
        })
    }

    const handleAddOfficer = (cid, name, callsign) => {
        let array = {
            cid: cid,
            name: name,
            callsign: callsign
        }

        let newArray = [...(officersInvolved || []), array]

        setOfficersInvolved(newArray)

        let arr = officers
        let newArr = arr.filter(item => item.id.toString() !== cid.toString())

        setOfficers(newArr)
        setFilteredOfficers(newArr)
    }

    const handleAddEms = (cid, name, callsign) => {
        let array = {
            cid: cid,
            name: name,
            callsign: callsign
        }

        let newArray = [...(emsInvolved || []), array]

        setEmsInvolved(newArray)

        let arr = officers
        let newArr = arr.filter(item => item.id.toString() !== cid.toString())

        setEms(newArr)
        setFilteredEms(newArr)
    }

    const handleAddPerson = (cid, fName, lName) => {
        let name = fName + " " + lName
        let array = {
            cid: cid,
            name: name,
        }

        let newArray = [...(personsInvolved || []), array]

        setPersonsInvolved(newArray)

        //maybe update personSearchData and filter out the cid? just for aesthetics

        let arr = personSearchData

        let newArr = arr.filter(item => item.id.toString() !== cid.toString())

        setPersonSearchData(newArr)
    }

    const handleAddEvidence = () => {
        let randId = genNumbers(4)

        let array = {
            id: randId,
            type: evidenceType,
            identifier: evidenceIdentifier,
            description: evidenceDescription,
            cid: evidenceCID
        }

        let newArray = [...(evidence || []), array]

        //upd incident, and also add into evidence tab
        setAssignLoading(true)
        fetchNui('arp-mdw:updateIncident', { id: incidentId, value: newArray, secondValue: array, type: "evidence", add: true }).then(resData => {
            setAssignLoading(false)
            setEvidence(newArray)
        })//make deleting also insta update (and also remove from evidence tab)
    }

    const searchOfficers = (searchValue) => {
        if (searchValue !== '') {
            const filteredOfficers = officers.filter((item) => {
                return (
                    item.cid.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.name.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.callsign.toString().toLowerCase().startsWith(searchValue.toLowerCase())
                )
            })
            setFilteredOfficers(filteredOfficers)
        } else {
            setFilteredOfficers(officers)
        }
    }

    const searchEms = (searchValue) => {
        if (searchValue !== '') {
            const filteredEms = ems.filter((item) => {
                return (
                    item.cid.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.name.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.callsign.toString().toLowerCase().startsWith(searchValue.toLowerCase())
                )
            })
            setFilteredEms(filteredEms)
        } else {
            setFilteredEms(ems)
        }
    }

    const closeAssignOfficerModal = () => {
        setOfficers([])
        setFilteredOfficers([])
        setAssignOfficerModal(false)
    }

    const closeAssignEmsModal = () => {
        setEms([])
        setFilteredEms([])
        setAssignEmsModal(false)
    }

    const closeAssignPersonModal = () => {
        setPersonSearchData([])
        setAssignPersonsModal(false)
    }

    const closeAddCriminalModal = () => {
        setCriminalSearchData([])
        setAddCriminalModal(false)
    }

    const closeAddChargeModal = () => {
        setChargesData([])
        setAddChargeModal(false)
    }

    const handleAddCrim = (cid, fName, lName) => {
        let name = fName + " " + lName
        let array = {
            cid: cid,
            name: name,
            charges: [],
            months: 0,
            fine: 0,
            points: 0,
            guilty: false,
            processed: false,
            warrant: false,
            warrantdate: 0
        }

        let newArray = [...(criminals || []), array]

        fetchNui('arp-mdw:updateIncident', { id: incidentId, value: newArray, type: "criminals" }).then(resData => {
            setCriminals(newArray)
        })

        let arr = criminalSearchData

        let newArr = arr.filter(item => item.id.toString() !== cid.toString())

        setCriminalSearchData(newArr)
    }

    const handleAddCharge = (name, months, fine, points) => {
        let cid = chargeCID
        let arr = [...criminals]
        let idx = arr.findIndex((item) => item.cid.toString() === cid.toString())
        let charges = arr[idx].charges
        let curMonths = Number(arr[idx].months)
        let curFine = Number(arr[idx].fine)
        let curPoints = Number(arr[idx].points)

        let randId = genNumbers(4)

        let array = {
            id: randId,
            title: name,
            months: Number(months),
            fine: Number(fine),
            points: Number(points)
        }

        let newArray = [...(charges || []), array]

        arr[idx].charges = newArray
        arr[idx].months = curMonths + Number(months)
        arr[idx].fine = curFine + Number(fine)
        arr[idx].points = curPoints + Number(points)

        setCriminals(arr)

        setCurCharges(newArray)
    }

    const handleRemoveCharge = (id, months, fine, points) => {
        let arr = [...criminals]
        let cid = chargeCID
        let idx = arr.findIndex((item) => item.cid.toString() === cid.toString())
        let charges = arr[idx].charges
        let newArr = charges.filter(item => item.id.toString() !== id.toString())

        let curMonths = Number(arr[idx].months) || 0
        let curFine = Number(arr[idx].fine) || 0
        let curPoints = Number(arr[idx].points) || 0

        arr[idx].charges = newArr
        arr[idx].months = curMonths - Number(months)
        arr[idx].fine = curFine - Number(fine)
        arr[idx].points = curPoints - Number(points)

        setCriminals(arr)

        setCurCharges(newArr)
    }

    const loadProfile = (value) => {
        setLoadingModal(true)
        fetchNui('arp-mdw:loadProfile', { value: value }).then(resData => {
            setLicenseData(resData.data.licenses)
            setLoadingModal(false)
        })
    }

    const handleAssignLicense = () => {
        setAssignLicenseModal(false)
        setLoadingModal(true)
        fetchNui('arp-mdw:assignLicense', { cid: profileId, type: licenseType }).then(resData => {
            loadProfile(profileId)
            setLoadingModal(false)
        })
    }

    const handleCreateWarrant = () => {
        setCreateWarrantModal(false)
        setLoadingModal(true)
        let warrantExp: any = warrantExpiry
        if (warrantExpiry !== null) {
            warrantExp = moment(warrantExpiry).format("X")
        }
        fetchNui('arp-mdw:createWarrant', { cid: warrantCid, incidentId: warrantIncidentId, expiry: warrantExp }).then(resData => {
            setWarrantCid("")
            setWarrantIncidentId("")
            setWarrantExpiry(null)
            setWarrants(resData.data)
            setFilteredWarrants(resData.data)
            setLoadingModal(false)
        })
    }

    const handleHireStaff = () => {
        setHireOfficerModal(false)
        setLoadingModal(true)
        fetchNui('arp-mdw:hireStaff', { cid: hireCid, callsign: hireCallsign, rank: hireRank }).then(resData => {
            setHireCid("")
            setHireCallsign("")
            setHireRank("")
            setStaffData(resData.data)
            setFilteredStaffData(resData.data)
            setLoadingModal(false)
        })
    }

    const getChargeFine = (amount: string) => {
        let fine = Number(amount)
        let formated = fine.toLocaleString('en-Us', { style: 'currency', currency: 'USD' })

        return formated
    }

    const filterFn = t => !chargeTitleSearch || t.toString().toLowerCase().includes(chargeTitleSearch.toString().toLowerCase());

    const filterChargeData = chargesData.map(c => {
        return { ...c, charges: c.charges.filter(cc => filterFn(cc.title)) };
    });

    const nonEmptyCategories = filterChargeData.filter(c => c.charges.length)

    useExitListener(setIsVisible)

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <div id="main-app-container">
                    <div className={classes.mdwOuterContainer} style={{ visibility: isVisible ? 'visible' : 'hidden', opacity: opacity ? '0.5' : '1' }}>
                        <div className={classes.mdwInnerContainer} style={{ top: isVisible ? 'calc(8.5% - 72px)' : 'calc(100vh + 32px)' }}>
                            <MDWLoadingModal show={loadingModal} />
                            <MDWAssignLicenseModal show={assignLicenseModal} confirm={handleAssignLicense} close={() => setAssignLicenseModal(false)} />
                            <div className={classes.mdwHireOfficerModalContainer} style={{ display: hireOfficerModal ? '' : 'none' }}>
                                <div className={classes.mdwHireOfficerModalInnerContainer}>
                                    <div className="mdw-details" style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between', position: 'relative', justifyContent: 'space-between', flex: '1 1', overflow: 'hidden' }}>
                                        <div className="mdw-desc">
                                            <div className="flex-row" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start', padding: '15px' }}>
                                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body1" gutterBottom>Hire Staff</Typography>
                                            </div>
                                            <div className="flex-row" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', padding: '8px', paddingBottom: '0px' }}>
                                                <FormControl fullWidth sx={{ width: '96%', marginBottom: '5%' }}>
                                                    <TextField
                                                        sx={{
                                                            "& .MuiInput-root": {
                                                                color: "white !important",
                                                            },
                                                            "& label.Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                borderColor: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:before": {
                                                                borderColor: "darkgray !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:after": {
                                                                borderColor: "white !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .Mui-focused:after": {
                                                                color: "darkgray !important",
                                                            },
                                                            "& .MuiInputAdornment-root": {
                                                                color: "darkgray !important",
                                                            }
                                                        }}
                                                        id="input-with-icon-textfield"
                                                        label="State ID"
                                                        variant="standard"
                                                        value={hireCid}
                                                        onChange={(e) => setHireCid(e.target.value)}
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <i className="fas fa-id-card fa-w-16 fa-fw"></i>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormControl fullWidth sx={{ width: '96%', marginBottom: '5%' }}>
                                                    <TextField
                                                        sx={{
                                                            "& .MuiInput-root": {
                                                                color: "white !important",
                                                            },
                                                            "& label.Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                borderColor: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:before": {
                                                                borderColor: "darkgray !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:after": {
                                                                borderColor: "white !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .Mui-focused:after": {
                                                                color: "darkgray !important",
                                                            },
                                                            "& .MuiInputAdornment-root": {
                                                                color: "darkgray !important",
                                                            }
                                                        }}
                                                        id="input-with-icon-textfield"
                                                        label="Callsign"
                                                        variant="standard"
                                                        value={hireCallsign}
                                                        onChange={(e) => setHireCallsign(e.target.value)}
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <i className="fas fa-clipboard fa-w-16 fa-fw"></i>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormControl fullWidth sx={{ width: '96%', marginBottom: '5%' }}>
                                                    <TextField id="outlined-select-currency" variant='standard' select label="Rank" value={hireRank} onChange={(e) => setHireRank(e.target.value)} sx={{
                                                        "& .MuiInput-root": {
                                                            color: "white !important",
                                                        },
                                                        "& label.Mui-focused": {
                                                            color: "darkgray !important"
                                                        },
                                                        "& Mui-focused": {
                                                            color: "darkgray !important"
                                                        },
                                                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                            borderColor: "darkgray !important"
                                                        },
                                                        "& .MuiInput-underline:before": {
                                                            borderColor: "darkgray !important",
                                                            color: "darkgray !important"
                                                        },
                                                        "& .MuiInput-underline:after": {
                                                            borderColor: "white !important",
                                                            color: "darkgray !important"
                                                        },
                                                        "& .Mui-focused:after": {
                                                            color: "darkgray !important",
                                                        },
                                                        "& .MuiInputAdornment-root": {
                                                            color: "darkgray !important",
                                                        }
                                                    }}>
                                                        <MenuItem key="1" value="1">Cadet</MenuItem>
                                                        <MenuItem key="2" value="2">Officer</MenuItem>
                                                        <MenuItem key="3" value="3">Senior Officer</MenuItem>
                                                        <MenuItem key="4" value="4">Corporal</MenuItem>
                                                        <MenuItem key="5" value="5">Sergeant</MenuItem>
                                                        <MenuItem key="6" value="6">Lieutenant</MenuItem>
                                                        <MenuItem key="7" value="7">Captain</MenuItem>
                                                        <MenuItem key="8" value="8">Deputy Chief Of Police</MenuItem>
                                                        <MenuItem key="9" value="9">Chief Of Police</MenuItem>
                                                    </TextField>
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="mdw-alignbottom" style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'center', padding: '8px', marginTop: '1%' }}>
                                            <Stack direction="row" spacing={1}>
                                                <div>
                                                    <Button onClick={handleHireStaff} size="small" color="success" variant="contained">Save</Button>
                                                </div>
                                                <div>
                                                    <Button onClick={() => setHireOfficerModal(false)} size="small" color="warning" variant="contained">Close</Button>
                                                </div>
                                            </Stack>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.mdwCreateWarrantModalContainer} style={{ display: createWarrantModal ? '' : 'none' }}>
                                <div className={classes.mdwCreateWarrantModalInnerContainer}>
                                    <div className="mdw-details" style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between', position: 'relative', justifyContent: 'space-between', flex: '1 1', overflow: 'hidden' }}>
                                        <div className="mdw-desc">
                                            <div className="flex-row" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start', padding: '15px' }}>
                                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body1" gutterBottom>Create Warrant</Typography>
                                            </div>
                                            <div className="flex-row" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', padding: '8px', paddingBottom: '0px' }}>
                                                <FormControl fullWidth sx={{ width: '96%', marginBottom: '5%' }}>
                                                    <TextField
                                                        sx={{
                                                            "& .MuiInput-root": {
                                                                color: "white !important",
                                                            },
                                                            "& label.Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                borderColor: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:before": {
                                                                borderColor: "darkgray !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:after": {
                                                                borderColor: "white !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .Mui-focused:after": {
                                                                color: "darkgray !important",
                                                            },
                                                            "& .MuiInputAdornment-root": {
                                                                color: "darkgray !important",
                                                            }
                                                        }}
                                                        id="input-with-icon-textfield"
                                                        label="State ID"
                                                        variant="standard"
                                                        value={warrantCid}
                                                        onChange={(e) => setWarrantCid(e.target.value)}
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <i className="fas fa-id-card fa-w-16 fa-fw"></i>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormControl fullWidth sx={{ width: '96%', marginBottom: '5%' }}>
                                                    <TextField
                                                        sx={{
                                                            "& .MuiInput-root": {
                                                                color: "white !important",
                                                            },
                                                            "& label.Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                borderColor: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:before": {
                                                                borderColor: "darkgray !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:after": {
                                                                borderColor: "white !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .Mui-focused:after": {
                                                                color: "darkgray !important",
                                                            },
                                                            "& .MuiInputAdornment-root": {
                                                                color: "darkgray !important",
                                                            }
                                                        }}
                                                        id="input-with-icon-textfield"
                                                        label="Incident ID (0 if none)"
                                                        variant="standard"
                                                        value={warrantIncidentId}
                                                        onChange={(e) => setWarrantIncidentId(e.target.value)}
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <i className="fas fa-pen fa-w-16 fa-fw"></i>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormControl fullWidth sx={{
                                                    width: '96%',
                                                    marginBottom: '5%',
                                                    "& .MuiInput-root": {
                                                        color: "white !important",
                                                    },
                                                    "& label.Mui-focused": {
                                                        color: "darkgray !important"
                                                    },
                                                    "& Mui-focused": {
                                                        color: "darkgray !important"
                                                    },
                                                    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                        borderColor: "darkgray !important"
                                                    },
                                                    "& .MuiInput-underline:before": {
                                                        borderColor: "darkgray !important",
                                                        color: "darkgray !important"
                                                    },
                                                    "& .MuiInput-underline:after": {
                                                        borderColor: "white !important",
                                                        color: "darkgray !important"
                                                    },
                                                    "& .Mui-focused:after": {
                                                        color: "darkgray !important",
                                                    },
                                                    "& .MuiInputAdornment-root": {
                                                        color: "darkgray !important",
                                                    }
                                                }}>
                                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                        <DatePicker
                                                            label="Expiration Date"
                                                            value={warrantExpiry}
                                                            onChange={(newValue) => {
                                                                setWarrantExpiry(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField variant="standard" {...params} />}
                                                        />
                                                    </LocalizationProvider>
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="mdw-alignbottom" style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'center', padding: '8px', marginTop: '1%' }}>
                                            <Stack direction="row" spacing={1}>
                                                <div>
                                                    <Button onClick={handleCreateWarrant} size="small" color="success" variant="contained">Save</Button>
                                                </div>
                                                <div>
                                                    <Button onClick={() => setCreateWarrantModal(false)} size="small" color="warning" variant="contained">Close</Button>
                                                </div>
                                            </Stack>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.mdwAssignOfficerModalContainer} style={{ display: assignOfficerModal ? '' : 'none' }}>
                                <div className={classes.mdwAssignOfficerModalInnerContainer}>
                                    <div className={classes.mdwIncidentsInnerContentLeft} style={{ backgroundColor: 'transparent' }}>
                                        <div className={classes.mdwIncidentsInnerContentLeftHeader} style={{ padding: '13px' }}>
                                            <div className="mdw-incidents-inner-content-left-header-text-left">
                                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>Assign Officer</Typography>
                                            </div>
                                            <div className={classes.mdwInnerContentLeftHeaderTextRight}>
                                            </div>
                                        </div>
                                        <div className={classes.mdwInnerContentLeftBody} style={{ padding: '0px', paddingLeft: '13px', paddingRight: '13px', marginBottom: '1%' }}>
                                            <div className="input-wrapper">
                                                <FormControl fullWidth sx={{ width: '100%' }}>
                                                    <TextField
                                                        sx={{
                                                            "& .MuiInput-root": {
                                                                color: "white !important",
                                                            },
                                                            "& label.Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                borderColor: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:before": {
                                                                borderColor: "darkgray !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:after": {
                                                                borderColor: "white !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .Mui-focused:after": {
                                                                color: "darkgray !important",
                                                            },
                                                            "& .MuiInputAdornment-root": {
                                                                color: "darkgray !important",
                                                            }
                                                        }}
                                                        id="input-with-icon-textfield"
                                                        label="Search"
                                                        variant="standard"
                                                        onChange={(e) => searchOfficers(e.target.value)}
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <i className="fas fa-search fa-w-16 fa-fw"></i>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className={classes.mdwInnerContentLeftBody} style={{ padding: '0px', paddingLeft: '5px', paddingRight: '5px' }}>
                                            <div className={classes.mdwAssignOfficerChipWrapper} style={{ flexDirection: 'row', flexWrap: 'wrap', flex: '0 !important', height: '163px', maxHeight: '163px', overflow: 'auto' }}>
                                                {filteredOfficers && filteredOfficers.length > 0 ? (
                                                    filteredOfficers.map((officer) => (
                                                        <div style={{ paddingRight: '1%', paddingBottom: '1.5%' }}>
                                                            <Chip label={`(${officer.callsign}) ${officer.name}`} onClick={() => handleAddOfficer(officer.cid, officer.name, officer.callsign)} sx={{ backgroundColor: '#fff', color: '#000' }} />
                                                        </div>
                                                    ))
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                        </div>
                                        <div className={classes.mdwIncidentsInnerContentLeftHeader} style={{ padding: '13px', marginTop: '17.1%', justifyContent: 'center', display: assignLoading ? 'none' : '' }}>
                                            <div>
                                                <Button onClick={closeAssignOfficerModal} size="small" color="warning" variant="contained">Close</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.mdwAssignEmsModalContainer} style={{ display: assignEmsModal ? '' : 'none' }}>
                                <div className={classes.mdwAssignEmsModalInnerContainer}>
                                    <div className={classes.mdwIncidentsInnerContentLeft} style={{ backgroundColor: 'transparent' }}>
                                        <div className={classes.mdwIncidentsInnerContentLeftHeader} style={{ padding: '13px' }}>
                                            <div className="mdw-incidents-inner-content-left-header-text-left">
                                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>Assign EMS</Typography>
                                            </div>
                                            <div className={classes.mdwInnerContentLeftHeaderTextRight}>
                                            </div>
                                        </div>
                                        <div className={classes.mdwInnerContentLeftBody} style={{ padding: '0px', paddingLeft: '13px', paddingRight: '13px', marginBottom: '1%' }}>
                                            <div className="input-wrapper">
                                                <FormControl fullWidth sx={{ width: '100%' }}>
                                                    <TextField
                                                        sx={{
                                                            "& .MuiInput-root": {
                                                                color: "white !important",
                                                            },
                                                            "& label.Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                borderColor: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:before": {
                                                                borderColor: "darkgray !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:after": {
                                                                borderColor: "white !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .Mui-focused:after": {
                                                                color: "darkgray !important",
                                                            },
                                                            "& .MuiInputAdornment-root": {
                                                                color: "darkgray !important",
                                                            }
                                                        }}
                                                        id="input-with-icon-textfield"
                                                        label="Search"
                                                        variant="standard"
                                                        onChange={(e) => searchEms(e.target.value)}
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <i className="fas fa-search fa-w-16 fa-fw"></i>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className={classes.mdwInnerContentLeftBody} style={{ padding: '0px', paddingLeft: '5px', paddingRight: '5px' }}>
                                            <div className={classes.mdwAssignEmsChipWrapper} style={{ flexDirection: 'row', flexWrap: 'wrap', flex: '0 !important', height: '163px', maxHeight: '163px', overflow: 'auto' }}>
                                                {filteredEms && filteredEms.length > 0 ? (
                                                    filteredEms.map((ems) => (
                                                        <div style={{ paddingRight: '1%', paddingBottom: '1.5%' }}>
                                                            <Chip label={`(${ems.callsign}) ${ems.name}`} onClick={() => handleAddEms(ems.cid, ems.name, ems.callsign)} sx={{ backgroundColor: '#fff', color: '#000' }} />
                                                        </div>
                                                    ))
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                        </div>
                                        <div className={classes.mdwIncidentsInnerContentLeftHeader} style={{ padding: '13px', marginTop: '17.1%', justifyContent: 'center', display: assignLoading ? 'none' : '' }}>
                                            <div>
                                                <Button onClick={closeAssignEmsModal} size="small" color="warning" variant="contained">Close</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.mdwAssignPersonModalContainer} style={{ display: assignPersonsModal ? '' : 'none' }}>
                                <div className={classes.mdwAssignPersonModalInnerContainer}>
                                    <div className="spinnerwrapper" style={{ display: assignLoading ? '' : 'none', marginLeft: '44%', marginTop: '14%' }}>
                                        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                    </div>
                                    <div className={classes.mdwIncidentsInnerContentLeft} style={{ backgroundColor: 'transparent', display: assignLoading ? 'none' : '' }}>
                                        <div className={classes.mdwInnerContentLeftBody} style={{ padding: '0px', paddingLeft: '13px', paddingRight: '13px', marginBottom: '1%', marginTop: '1%' }}>
                                            <div className="input-wrapper">
                                                <FormControl fullWidth sx={{ width: '100%' }}>
                                                    <TextField
                                                        sx={{
                                                            "& .MuiInput-root": {
                                                                color: "white !important",
                                                            },
                                                            "& label.Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                borderColor: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:before": {
                                                                borderColor: "darkgray !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:after": {
                                                                borderColor: "white !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .Mui-focused:after": {
                                                                color: "darkgray !important",
                                                            },
                                                            "& .MuiInputAdornment-root": {
                                                                color: "darkgray !important",
                                                            }
                                                        }}
                                                        id="input-with-icon-textfield"
                                                        label="Name"
                                                        variant="standard"
                                                        onChange={(e) => searchPersons(e.target.value)}
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <i className="fas fa-user fa-w-16 fa-fw"></i>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="mdw-inner-content-colum-wrap" style={{ display: 'flex', flexDirection: 'column', maxHeight: '250px', overflow: 'auto' }}>
                                            {personSearchData && personSearchData.length > 0 ? (
                                                personSearchData.map((profile) => (
                                                    <div className={classes.mdwInnerContentLeftBody} style={{ padding: '0px', paddingLeft: '13px', paddingRight: '5px', flexDirection: 'row', overflow: 'unset', marginBottom: '1%' }}>
                                                        <div className={classes.mdwCreateImage}>
                                                            <img alt="" src={"https://i.imgur.com/wxNT3y2.jpg"} style={{ height: '163px', width: '185px' }}></img>
                                                        </div>
                                                        <div className="mdw-create-inputs" style={{ width: '76.5%' }}>
                                                            <div className="input-wrapper" style={{ marginBottom: '2.5%' }}>
                                                                <FormControl fullWidth sx={{ width: '100%' }}>
                                                                    <TextField
                                                                        sx={{
                                                                            "& .MuiInput-root": {
                                                                                color: "white !important",
                                                                            },
                                                                            "& label.Mui-focused": {
                                                                                color: "darkgray !important"
                                                                            },
                                                                            "& Mui-focused": {
                                                                                color: "darkgray !important"
                                                                            },
                                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                                borderColor: "darkgray !important"
                                                                            },
                                                                            "& .MuiInput-underline:before": {
                                                                                borderColor: "darkgray !important",
                                                                                color: "darkgray !important"
                                                                            },
                                                                            "& .MuiInput-underline:after": {
                                                                                borderColor: "white !important",
                                                                                color: "darkgray !important"
                                                                            },
                                                                            "& .Mui-focused:after": {
                                                                                color: "darkgray !important",
                                                                            },
                                                                            "& .MuiInputAdornment-root": {
                                                                                color: "darkgray !important",
                                                                            }
                                                                        }}
                                                                        id="input-with-icon-textfield"
                                                                        label="State ID"
                                                                        variant="standard"
                                                                        value={profile.id}
                                                                        InputProps={{
                                                                            readOnly: true,
                                                                            startAdornment: (
                                                                                <InputAdornment position="start">
                                                                                    <i className="fas fa-id-card fa-w-16 fa-fw"></i>
                                                                                </InputAdornment>
                                                                            ),
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                            </div>
                                                            <div className="input-wrapper" style={{ marginBottom: '2.5%' }}>
                                                                <FormControl fullWidth sx={{ width: '100%' }}>
                                                                    <TextField
                                                                        sx={{
                                                                            "& .MuiInput-root": {
                                                                                color: "white !important",
                                                                            },
                                                                            "& label.Mui-focused": {
                                                                                color: "darkgray !important"
                                                                            },
                                                                            "& Mui-focused": {
                                                                                color: "darkgray !important"
                                                                            },
                                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                                borderColor: "darkgray !important"
                                                                            },
                                                                            "& .MuiInput-underline:before": {
                                                                                borderColor: "darkgray !important",
                                                                                color: "darkgray !important"
                                                                            },
                                                                            "& .MuiInput-underline:after": {
                                                                                borderColor: "white !important",
                                                                                color: "darkgray !important"
                                                                            },
                                                                            "& .Mui-focused:after": {
                                                                                color: "darkgray !important",
                                                                            },
                                                                            "& .MuiInputAdornment-root": {
                                                                                color: "darkgray !important",
                                                                            }
                                                                        }}
                                                                        id="input-with-icon-textfield"
                                                                        label="Name"
                                                                        variant="standard"
                                                                        value={`${profile.first_name} ${profile.last_name}`}
                                                                        InputProps={{
                                                                            readOnly: true,
                                                                            startAdornment: (
                                                                                <InputAdornment position="start">
                                                                                    <i className="fas fa-user fa-w-16 fa-fw"></i>
                                                                                </InputAdornment>
                                                                            ),
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                            </div>
                                                            <div>
                                                                <Button onClick={() => handleAddPerson(profile.id, profile.first_name, profile.last_name)} size="small" color="success" variant="contained">Add</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                        <div className={classes.mdwIncidentsInnerContentLeftHeader} style={{ padding: '13px', marginTop: '17.1%', justifyContent: 'center', display: assignLoading ? 'none' : '' }}>
                                            <div>
                                                <Button onClick={closeAssignPersonModal} size="small" color="warning" variant="contained">Close</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.mdwAddCriminalModalContainer} style={{ display: addCriminalModal ? '' : 'none' }}>
                                <div className={classes.mdwAddCriminalModalInnerContainer}>
                                    <div className="spinnerwrapper" style={{ display: assignLoading ? '' : 'none', marginLeft: '44%', marginTop: '14%' }}>
                                        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                    </div>
                                    <div className={classes.mdwIncidentsInnerContentLeft} style={{ backgroundColor: 'transparent', display: assignLoading ? 'none' : '' }}>
                                        <div className={classes.mdwInnerContentLeftBody} style={{ padding: '0px', paddingLeft: '13px', paddingRight: '13px', marginBottom: '1%', marginTop: '1%' }}>
                                            <div className="input-wrapper">
                                                <FormControl fullWidth sx={{ width: '100%' }}>
                                                    <TextField
                                                        sx={{
                                                            "& .MuiInput-root": {
                                                                color: "white !important",
                                                            },
                                                            "& label.Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                borderColor: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:before": {
                                                                borderColor: "darkgray !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:after": {
                                                                borderColor: "white !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .Mui-focused:after": {
                                                                color: "darkgray !important",
                                                            },
                                                            "& .MuiInputAdornment-root": {
                                                                color: "darkgray !important",
                                                            }
                                                        }}
                                                        id="input-with-icon-textfield"
                                                        label="Name"
                                                        variant="standard"
                                                        onChange={(e) => searchCriminals(e.target.value)}
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <i className="fas fa-user fa-w-16 fa-fw"></i>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="mdw-inner-content-colum-wrap" style={{ display: 'flex', flexDirection: 'column', maxHeight: '250px', overflow: 'auto' }}>
                                            {criminalSearchData && criminalSearchData.length > 0 ? (
                                                criminalSearchData.map((criminal) => (
                                                    <div className={classes.mdwInnerContentLeftBody} style={{ padding: '0px', paddingLeft: '13px', paddingRight: '5px', flexDirection: 'row', overflow: 'unset', marginBottom: '1%' }}>
                                                        <div className={classes.mdwCreateImage}>
                                                            <img alt="" src={criminal.profilepic !== undefined ? `${criminal.profilepic}` : "https://i.imgur.com/wxNT3y2.jpg"} style={{ height: '163px', width: '185px' }}></img>
                                                        </div>
                                                        <div className="mdw-create-inputs" style={{ width: '76.5%' }}>
                                                            <div className="input-wrapper" style={{ marginBottom: '2.5%' }}>
                                                                <FormControl fullWidth sx={{ width: '100%' }}>
                                                                    <TextField
                                                                        sx={{
                                                                            "& .MuiInput-root": {
                                                                                color: "white !important",
                                                                            },
                                                                            "& label.Mui-focused": {
                                                                                color: "darkgray !important"
                                                                            },
                                                                            "& Mui-focused": {
                                                                                color: "darkgray !important"
                                                                            },
                                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                                borderColor: "darkgray !important"
                                                                            },
                                                                            "& .MuiInput-underline:before": {
                                                                                borderColor: "darkgray !important",
                                                                                color: "darkgray !important"
                                                                            },
                                                                            "& .MuiInput-underline:after": {
                                                                                borderColor: "white !important",
                                                                                color: "darkgray !important"
                                                                            },
                                                                            "& .Mui-focused:after": {
                                                                                color: "darkgray !important",
                                                                            },
                                                                            "& .MuiInputAdornment-root": {
                                                                                color: "darkgray !important",
                                                                            }
                                                                        }}
                                                                        id="input-with-icon-textfield"
                                                                        label="State ID"
                                                                        variant="standard"
                                                                        value={criminal.id}
                                                                        InputProps={{
                                                                            readOnly: true,
                                                                            startAdornment: (
                                                                                <InputAdornment position="start">
                                                                                    <i className="fas fa-id-card fa-w-16 fa-fw"></i>
                                                                                </InputAdornment>
                                                                            ),
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                            </div>
                                                            <div className="input-wrapper" style={{ marginBottom: '2.5%' }}>
                                                                <FormControl fullWidth sx={{ width: '100%' }}>
                                                                    <TextField
                                                                        sx={{
                                                                            "& .MuiInput-root": {
                                                                                color: "white !important",
                                                                            },
                                                                            "& label.Mui-focused": {
                                                                                color: "darkgray !important"
                                                                            },
                                                                            "& Mui-focused": {
                                                                                color: "darkgray !important"
                                                                            },
                                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                                borderColor: "darkgray !important"
                                                                            },
                                                                            "& .MuiInput-underline:before": {
                                                                                borderColor: "darkgray !important",
                                                                                color: "darkgray !important"
                                                                            },
                                                                            "& .MuiInput-underline:after": {
                                                                                borderColor: "white !important",
                                                                                color: "darkgray !important"
                                                                            },
                                                                            "& .Mui-focused:after": {
                                                                                color: "darkgray !important",
                                                                            },
                                                                            "& .MuiInputAdornment-root": {
                                                                                color: "darkgray !important",
                                                                            }
                                                                        }}
                                                                        id="input-with-icon-textfield"
                                                                        label="Name"
                                                                        variant="standard"
                                                                        value={`${criminal.first_name} ${criminal.last_name}`}
                                                                        InputProps={{
                                                                            readOnly: true,
                                                                            startAdornment: (
                                                                                <InputAdornment position="start">
                                                                                    <i className="fas fa-user fa-w-16 fa-fw"></i>
                                                                                </InputAdornment>
                                                                            ),
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                            </div>
                                                            <div>
                                                                <Button onClick={() => handleAddCrim(criminal.id, criminal.first_name, criminal.last_name)} size="small" color="success" variant="contained">Add</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                        <div className={classes.mdwIncidentsInnerContentLeftHeader} style={{ padding: '13px', marginTop: '17.1%', justifyContent: 'center', display: assignLoading ? 'none' : '' }}>
                                            <div>
                                                <Button onClick={closeAddCriminalModal} size="small" color="warning" variant="contained">Close</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.mdwAddChargeModalContainer} style={{ display: addChargeModal ? '' : 'none' }}>
                                <div className={classes.mdwAddChargeModalInnerContainer}>
                                    <div className="spinnerwrapper" style={{ display: assignLoading ? '' : 'none', marginLeft: '44%', marginTop: '14%' }}>
                                        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                    </div>
                                    <div className={classes.mdwIncidentsInnerContentLeft} style={{ backgroundColor: 'transparent', display: assignLoading ? 'none' : '' }}>
                                        <div className={classes.mdwIncidentsInnerContentLeftHeader}>
                                            <div className="mdw-incidents-inner-content-left-header-text-left">
                                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body1" gutterBottom>Current Charges</Typography>
                                            </div>
                                            <div className={classes.mdwInnerContentLeftHeaderTextRight}>
                                                <Stack direction="row" spacing={2}>
                                                    <Button onClick={closeAddChargeModal} size="small" color="warning" variant="contained">Close</Button>
                                                    <Button onClick={closeAddChargeModal} size="small" color="success" variant="contained">Done</Button>
                                                </Stack>
                                            </div>
                                        </div>
                                        <div className={classes.mdwInnerContentLeftBody}>
                                            <div className={classes.mdwInnerContentMiddleBody} style={{ flexDirection: 'row', flexWrap: 'wrap', flex: '0 1 0%', overflowY: 'unset', paddingLeft: '0px' }}>
                                                {curCharges && curCharges.length > 0 ? (
                                                    curCharges.map((charge) => (
                                                        <div style={{ paddingRight: '0.5%', paddingBottom: '1.5%' }}>
                                                            <Chip label={charge.title} onDelete={() => handleRemoveCharge(charge.id, charge.months, charge.fine, charge.points)} sx={{ backgroundColor: '#000', color: '#fff', "& .MuiChip-deleteIcon": { color: '#fff' }, "& .MuiChip-deleteIcon:hover": { color: 'rgba(255, 255, 255, 0.5)' } }} />
                                                        </div>
                                                    ))
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                            <Divider style={{ borderColor: 'rgb(255, 255, 255)' }} variant="fullWidth" />
                                        </div>
                                        <div className={classes.mdwChargesInnerContent} style={{ height: '17%', flexDirection: 'column', marginBottom: '0.2%', padding: '8px' }}>
                                            <div className={classes.mdwChargesInnerContentLeft}>
                                                <div className={classes.mdwChargesInnerContentLeftHeader}>
                                                    <div className="mdw-charges-inner-content-left-header-text-left">
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Charges</Typography>
                                                    </div>
                                                    <div className={classes.mdwInnerContentLeftHeaderTextRight}>
                                                        <div className="input-wrapper">
                                                            <FormControl fullWidth sx={{ width: '100%' }}>
                                                                <TextField
                                                                    sx={{
                                                                        "& .MuiInput-root": {
                                                                            color: "white !important",
                                                                        },
                                                                        "& label.Mui-focused": {
                                                                            color: "darkgray !important"
                                                                        },
                                                                        "& Mui-focused": {
                                                                            color: "darkgray !important"
                                                                        },
                                                                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                            borderColor: "darkgray !important"
                                                                        },
                                                                        "& .MuiInput-underline:before": {
                                                                            borderColor: "darkgray !important",
                                                                            color: "darkgray !important"
                                                                        },
                                                                        "& .MuiInput-underline:after": {
                                                                            borderColor: "white !important",
                                                                            color: "darkgray !important"
                                                                        },
                                                                        "& .Mui-focused:after": {
                                                                            color: "darkgray !important",
                                                                        },
                                                                        "& .MuiInputAdornment-root": {
                                                                            color: "darkgray !important",
                                                                        }
                                                                    }}
                                                                    id="input-with-icon-textfield"
                                                                    label="Search"
                                                                    variant="standard"
                                                                    onChange={(e) => setChargeTitleSearch(e.target.value)}
                                                                    InputProps={{
                                                                        startAdornment: (
                                                                            <InputAdornment position="start">
                                                                                <i className="fas fa-search fa-w-16 fa-fw"></i>
                                                                            </InputAdornment>
                                                                        ),
                                                                    }}
                                                                />
                                                            </FormControl>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={classes.mdwInnerContentLeftBody}>
                                                    <div className="component-paper cursor-pointer" style={{ width: '100%', borderBottom: '0px solid #fff', borderRadius: '0px', backgroundColor: '#222831', border: '1px solid #000' }}>
                                                        <div className="main-container">
                                                            <div className="details">
                                                                <div className="description">

                                                                    <div className="flex-row">
                                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>An accomplice differs from an accessory in that an accomplice is present at the actual crime, and could be prosecuted even if the main criminal (the principal) is not charged or convicted. An accessory is generally not present at the actual crime, and may be subject to lesser penalties than an accomplice or principal.</Typography>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {nonEmptyCategories && nonEmptyCategories.length > 0 ? (
                                            nonEmptyCategories.map((cat) => (
                                                <div className={classes.mdwChargesInnerContent} style={{ height: 'fit-content', flexDirection: 'column', marginBottom: '0.2%', padding: '8px' }}>
                                                    <div className={classes.mdwChargesInnerContentLeft}>
                                                        <div className={classes.mdwChargesInnerContentLeftHeader}>
                                                            <div className="mdw-charges-inner-content-left-header-text-left">
                                                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>{cat.category}</Typography>
                                                            </div>
                                                            <div className={classes.mdwInnerContentLeftHeaderTextRight}>
                                                            </div>
                                                        </div>
                                                        <div className={classes.mdwInnerContentLeftBody} style={{ flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset', paddingLeft: '5.5%' }}>
                                                            {cat.charges && cat.charges.length > 0 ? (
                                                                cat.charges.filter(c => filterFn(c.title)).map((charge) => (
                                                                    <div onClick={() => handleAddCharge(charge.title, charge.months, charge.fine, charge.points)} className="component-paper cursor-pointer" style={{ width: '30%', borderBottom: '0px solid #fff', borderRadius: '0px', backgroundColor: `${cat.color}`, border: '1px solid #000', marginRight: '2%', height: 'fit-content' }}>
                                                                        <div className="main-container">
                                                                            <div className="details">
                                                                                <div className="description">
                                                                                    <div className="flex-row" style={{ flexDirection: 'column' }}>
                                                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word', textAlign: 'center' }} variant="body1" gutterBottom>{charge.title}</Typography>
                                                                                    </div>
                                                                                    <div className="flex-row" style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word', textAlign: 'center' }} variant="body2" gutterBottom>{charge.months !== undefined ? charge.months : '0'} months</Typography>
                                                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word', textAlign: 'center' }} variant="body2" gutterBottom>{charge.fine !== undefined ? getChargeFine(charge.fine) : '$0.0'}</Typography>
                                                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word', textAlign: 'center' }} variant="body2" gutterBottom>{charge.points !== undefined ? charge.points : '0'} point(s)</Typography>
                                                                                    </div>
                                                                                    <div style={{ marginTop: '1%', marginBottom: '0.3%' }}>
                                                                                        <Divider style={{ borderColor: '#30475e' }} variant="fullWidth" />
                                                                                    </div>
                                                                                    <div className="flex-row" style={{ flexDirection: 'column' }}>
                                                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word', textAlign: 'center' }} variant="body2" gutterBottom>as Accomplice</Typography>
                                                                                    </div>
                                                                                    <div className="flex-row" style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word', textAlign: 'center' }} variant="body2" gutterBottom>{charge.months !== undefined ? charge.months : '0'} months</Typography>
                                                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word', textAlign: 'center' }} variant="body2" gutterBottom>{charge.fine !== undefined ? getChargeFine(charge.fine) : '$0.0'}</Typography>
                                                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word', textAlign: 'center' }} variant="body2" gutterBottom>{charge.points !== undefined ? charge.points : '0'} point(s)</Typography>
                                                                                    </div>
                                                                                    <div style={{ marginTop: '1%', marginBottom: '0.3%' }}>
                                                                                        <Divider style={{ borderColor: '#30475e' }} variant="fullWidth" />
                                                                                    </div>
                                                                                    <div className="flex-row" style={{ flexDirection: 'column' }}>
                                                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word', textAlign: 'center' }} variant="body2" gutterBottom>as Accessory</Typography>
                                                                                    </div>
                                                                                    <div className="flex-row" style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '0.3%' }}>
                                                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word', textAlign: 'center' }} variant="body2" gutterBottom>0 months</Typography>
                                                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word', textAlign: 'center' }} variant="body2" gutterBottom>$0.00</Typography>
                                                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word', textAlign: 'center' }} variant="body2" gutterBottom>0 point(s)</Typography>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <></>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={classes.mdwAssignEvidenceModalContainer} style={{ display: assignEvidenceModal ? '' : 'none' }}>
                                <div className={classes.mdwAssignEvidenceModalInnerContainer}>
                                    <div className="mdw-details" style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between', position: 'relative', justifyContent: 'space-between', flex: '1 1', overflow: 'hidden' }}>
                                        <div className="spinnerwrapper" style={{ display: assignLoading ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', marginTop: '55%' }}>
                                            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                        </div>
                                        <div className="mdw-desc" style={{ display: assignLoading ? 'none' : '' }}>
                                            <div className="flex-row" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start', padding: '15px' }}>
                                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body1" gutterBottom>Assign Evidence</Typography>
                                            </div>
                                            <div className="flex-row" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', padding: '8px', paddingBottom: '0px', paddingTop: '0px' }}>
                                                <div className="input-wrapper" style={{ width: '96%', marginBottom: '5%' }}>
                                                    <FormControl fullWidth sx={{ width: '100%' }}>
                                                        <TextField
                                                            sx={{
                                                                "& .MuiInput-root": {
                                                                    color: "white !important",
                                                                },
                                                                "& label.Mui-focused": {
                                                                    color: "darkgray !important"
                                                                },
                                                                "& Mui-focused": {
                                                                    color: "darkgray !important"
                                                                },
                                                                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                    borderColor: "darkgray !important"
                                                                },
                                                                "& .MuiInput-underline:before": {
                                                                    borderColor: "darkgray !important",
                                                                    color: "darkgray !important"
                                                                },
                                                                "& .MuiInput-underline:after": {
                                                                    borderColor: "white !important",
                                                                    color: "darkgray !important"
                                                                },
                                                                "& .Mui-focused:after": {
                                                                    color: "darkgray !important",
                                                                },
                                                                "& .MuiInputAdornment-root": {
                                                                    color: "darkgray !important",
                                                                }
                                                            }}
                                                            id="input-with-icon-textfield"
                                                            label="Identifier"
                                                            variant="standard"
                                                            InputProps={{
                                                                startAdornment: (
                                                                    <InputAdornment position="start">
                                                                        <i className="fas fa-fingerprint fa-w-16 fa-fw"></i>
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div className="flex-row" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: '15px' }}>
                                                <div>
                                                    <Button size="small" color="success" variant="contained">Assign</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mdw-desc" style={{ display: assignLoading ? 'none' : '' }}>
                                            <div className="flex-row" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start', padding: '15px' }}>
                                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body1" gutterBottom>Add New Evidence</Typography>
                                            </div>
                                            <div className="flex-row" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', padding: '8px', paddingBottom: '0px' }}>
                                                <div className="input-wrapper" style={{ width: '96%', marginBottom: '5%' }}>
                                                    <FormControl fullWidth sx={{ width: '100%' }}>
                                                        <TextField id="outlined-select-currency" variant='standard' select label="Type" defaultValue="other" onChange={(e) => setEvidenceType(e.target.value)} sx={{
                                                            "& .MuiInput-root": {
                                                                color: "white !important",
                                                            },
                                                            "& label.Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& Mui-focused": {
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                borderColor: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:before": {
                                                                borderColor: "darkgray !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .MuiInput-underline:after": {
                                                                borderColor: "white !important",
                                                                color: "darkgray !important"
                                                            },
                                                            "& .Mui-focused:after": {
                                                                color: "darkgray !important",
                                                            },
                                                            "& .MuiInputAdornment-root": {
                                                                color: "darkgray !important",
                                                            }
                                                        }}>
                                                            <MenuItem key="other" value="other">Other</MenuItem>
                                                            <MenuItem key="blood" value="blood">Blood</MenuItem>
                                                            <MenuItem key="casing" value="casing">Casing</MenuItem>
                                                            <MenuItem key="weapon" value="weapon">Weapon</MenuItem>
                                                            <MenuItem key="photo" value="photo">Photo</MenuItem>
                                                        </TextField>
                                                    </FormControl>
                                                </div>
                                                <div className="input-wrapper" style={{ width: '96%', marginBottom: '5%' }}>
                                                    <FormControl fullWidth sx={{ width: '100%' }}>
                                                        <TextField
                                                            sx={{
                                                                "& .MuiInput-root": {
                                                                    color: "white !important",
                                                                },
                                                                "& label.Mui-focused": {
                                                                    color: "darkgray !important"
                                                                },
                                                                "& Mui-focused": {
                                                                    color: "darkgray !important"
                                                                },
                                                                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                    borderColor: "darkgray !important"
                                                                },
                                                                "& .MuiInput-underline:before": {
                                                                    borderColor: "darkgray !important",
                                                                    color: "darkgray !important"
                                                                },
                                                                "& .MuiInput-underline:after": {
                                                                    borderColor: "white !important",
                                                                    color: "darkgray !important"
                                                                },
                                                                "& .Mui-focused:after": {
                                                                    color: "darkgray !important",
                                                                },
                                                                "& .MuiInputAdornment-root": {
                                                                    color: "darkgray !important",
                                                                }
                                                            }}
                                                            id="input-with-icon-textfield"
                                                            label="Identifier"
                                                            variant="standard"
                                                            onChange={(e) => setEvidenceIdentifier(e.target.value)}
                                                            value={evidenceIdentifier}
                                                            InputProps={{
                                                                startAdornment: (
                                                                    <InputAdornment position="start">
                                                                        <i className="fas fa-pen fa-w-16 fa-fw"></i>
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                        />
                                                    </FormControl>
                                                </div>
                                                <div className="input-wrapper" style={{ width: '96%', marginBottom: '5%' }}>
                                                    <FormControl fullWidth sx={{ width: '100%' }}>
                                                        <TextField
                                                            sx={{
                                                                "& .MuiInput-root": {
                                                                    color: "white !important",
                                                                },
                                                                "& label.Mui-focused": {
                                                                    color: "darkgray !important"
                                                                },
                                                                "& Mui-focused": {
                                                                    color: "darkgray !important"
                                                                },
                                                                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                    borderColor: "darkgray !important"
                                                                },
                                                                "& .MuiInput-underline:before": {
                                                                    borderColor: "darkgray !important",
                                                                    color: "darkgray !important"
                                                                },
                                                                "& .MuiInput-underline:after": {
                                                                    borderColor: "white !important",
                                                                    color: "darkgray !important"
                                                                },
                                                                "& .Mui-focused:after": {
                                                                    color: "darkgray !important",
                                                                },
                                                                "& .MuiInputAdornment-root": {
                                                                    color: "darkgray !important",
                                                                }
                                                            }}
                                                            id="input-with-icon-textfield"
                                                            label="Description"
                                                            variant="standard"
                                                            onChange={(e) => setEvidenceDescription(e.target.value)}
                                                            value={evidenceDescription}
                                                            InputProps={{
                                                                startAdornment: (
                                                                    <InputAdornment position="start">
                                                                        <i className="fas fa-clipboard fa-w-16 fa-fw"></i>
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                        />
                                                    </FormControl>
                                                </div>
                                                <div className="input-wrapper" style={{ width: '96%', marginBottom: '5%' }}>
                                                    <FormControl fullWidth sx={{ width: '100%' }}>
                                                        <TextField
                                                            sx={{
                                                                "& .MuiInput-root": {
                                                                    color: "white !important",
                                                                },
                                                                "& label.Mui-focused": {
                                                                    color: "darkgray !important"
                                                                },
                                                                "& Mui-focused": {
                                                                    color: "darkgray !important"
                                                                },
                                                                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                                    borderColor: "darkgray !important"
                                                                },
                                                                "& .MuiInput-underline:before": {
                                                                    borderColor: "darkgray !important",
                                                                    color: "darkgray !important"
                                                                },
                                                                "& .MuiInput-underline:after": {
                                                                    borderColor: "white !important",
                                                                    color: "darkgray !important"
                                                                },
                                                                "& .Mui-focused:after": {
                                                                    color: "darkgray !important",
                                                                },
                                                                "& .MuiInputAdornment-root": {
                                                                    color: "darkgray !important",
                                                                }
                                                            }}
                                                            id="input-with-icon-textfield"
                                                            label="CID"
                                                            variant="standard"
                                                            onChange={(e) => setEvidenceCID(e.target.value)}
                                                            value={evidenceCID}
                                                            InputProps={{
                                                                startAdornment: (
                                                                    <InputAdornment position="start">
                                                                        <i className="fas fa-user fa-w-16 fa-fw"></i>
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div className="flex-row" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: '15px' }}>
                                                <div>
                                                    <Button onClick={handleAddEvidence} size="small" color="success" variant="contained">Create</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mdw-alignbottom" style={{ display: assignLoading ? 'none' : 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'center', padding: '8px', marginTop: '1%' }}>
                                            <div>
                                                <Button onClick={() => setAssignEvidenceModal(false)} size="small" color="warning" variant="contained">Close</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.mdwHeader} onMouseEnter={() => setOpacity(true)} onMouseLeave={() => setOpacity(false)}>
                                <div className="mdw-header-logo"><img alt="" src={curJob === "police" ? "https://gta-assets.nopixel.net/images/mdw-lspd.png" : curJob === "sheriff" ? "https://gta-assets.nopixel.net/images/mdw-bcso.png" : curJob === "state" ? "https://gta-assets.nopixel.net/images/mdw-troopers.png" : curJob === "ranger" ? "https://gta-assets.nopixel.net/images/mdw-ranger.png" : curJob === "judge" ? "https://i.imgur.com/LnMPAZH.png" : "https://gta-assets.nopixel.net/images/mdw-generic.png"} /></div>
                                <div className={classes.mdwHeaderText}>
                                    <div>
                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Random ass fucking quote shit, why is this shit even here?</Typography>
                                        <Typography style={{ color: '#fff', wordBreak: 'break-word', textAlign: 'right' }} variant="body1" gutterBottom>- Bruh Moment</Typography>
                                    </div>
                                    <div className={classes.mdwHeaderFlex}></div>
                                    <div>
                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body1" gutterBottom>{mdwPublic ? 'Profile Not Found' : `${mdwRankLabel} "${mdwLastName}" ${mdwFirstName} ${mdwLastName}`}</Typography>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.mdwOuterBody}>
                                <div className={classes.mdwInnerBody} style={{ zIndex: '100' }}>
                                    <div className={classes.mdwTabsOuterContainer}>
                                        <div className={classes.mdwTabsInnerContainer}>
                                            <div className={classes.mdwTabsFlexContainer}>
                                                <Link to="/dashboard" onClick={() => handleChangeTab(1)} style={{ color: '#fff', textDecoration: 'none' }}>
                                                    <div className={curTab === 1 ? "mdw-tab active-tab" : "mdw-tab"} style={{ display: mdwPublic ? 'none' : '' }}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Dashboard</Typography>
                                                    </div>
                                                </Link>
                                                <Link to="/incidents" onClick={() => handleChangeTab(2)} style={{ color: '#fff', textDecoration: 'none' }}>
                                                    <div className={curTab === 2 ? "mdw-tab active-tab" : "mdw-tab"} style={{ display: mdwPublic || curJob === "ems" ? 'none' : '' }}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Incidents</Typography>
                                                    </div>
                                                </Link>
                                                <Link to="/incidentsems" onClick={() => handleChangeTab(11)} style={{ color: '#fff', textDecoration: 'none' }}>
                                                    <div className={curTab === 11 ? "mdw-tab active-tab" : "mdw-tab"} style={{ display: curJob === "ems" ? '' : 'none' }}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Incidents</Typography>
                                                    </div>
                                                </Link>
                                                <Link to="/profiles" onClick={() => handleChangeTab(3)} style={{ color: '#fff', textDecoration: 'none' }}>
                                                    <div className={curTab === 3 ? "mdw-tab active-tab" : "mdw-tab"}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Profiles</Typography>
                                                    </div>
                                                </Link>
                                                <Link to="/dmv" onClick={() => handleChangeTab(4)} style={{ color: '#fff', textDecoration: 'none' }}>
                                                    <div className={curTab === 4 ? "mdw-tab active-tab" : "mdw-tab"} style={{ display: mdwPublic || curJob === "ems" ? 'none' : '' }}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>DMV</Typography>
                                                    </div>
                                                </Link>
                                                <Link to="/reports" onClick={() => handleChangeTab(5)} style={{ color: '#fff', textDecoration: 'none' }}>
                                                    <div className={curTab === 5 ? "mdw-tab active-tab" : "mdw-tab"} style={{ display: mdwPublic || curJob === "ems" ? 'none' : '' }}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Reports</Typography>
                                                    </div>
                                                </Link>
                                                <Link to="/evidence" onClick={() => handleChangeTab(6)} style={{ color: '#fff', textDecoration: 'none' }}>
                                                    <div className={curTab === 6 ? "mdw-tab active-tab" : "mdw-tab"} style={{ display: mdwPublic || curJob === "ems" ? 'none' : '' }}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Evidence</Typography>
                                                    </div>
                                                </Link>
                                                <Link to="/properties" onClick={() => handleChangeTab(7)} style={{ color: '#fff', textDecoration: 'none' }}>
                                                    <div className={curTab === 7 ? "mdw-tab active-tab" : "mdw-tab"} style={{ display: mdwPublic || curJob === "ems" ? 'none' : '' }}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Properties</Typography>
                                                    </div>
                                                </Link>
                                                <Link to="/charges" onClick={() => handleChangeTab(8)} style={{ color: '#fff', textDecoration: 'none' }}>
                                                    <div className={curTab === 8 ? "mdw-tab active-tab" : "mdw-tab"} style={{ display: mdwPublic || curJob === "ems" ? 'none' : '' }}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Charges</Typography>
                                                    </div>
                                                </Link>
                                                <Link to="/staff" onClick={() => handleChangeTab(9)} style={{ color: '#fff', textDecoration: 'none' }}>
                                                    <div className={curTab === 9 ? "mdw-tab active-tab" : "mdw-tab"} style={{ display: curJob === "police" && mdwRank === "9" ? '' : 'none' }}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Staff</Typography>
                                                    </div>
                                                </Link>
                                                <Link to="/legislation" onClick={() => handleChangeTab(10)} style={{ color: '#fff', textDecoration: 'none' }}>
                                                    <div className={curTab === 10 ? "mdw-tab active-tab" : "mdw-tab"} style={{ display: mdwPublic || curJob === "ems" ? 'none' : '' }}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Legislation</Typography>
                                                    </div>
                                                </Link>
                                                <Link to="/businesses" onClick={() => handleChangeTab(11)} style={{ color: '#fff', textDecoration: 'none' }}>
                                                    <div className={curTab === 11 ? "mdw-tab active-tab" : "mdw-tab"} style={{ display: mdwPublic || curJob === "ems" ? 'none' : '' }}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Businesses</Typography>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Switch>
                                        <Route path='/dashboard' render={() => <Dashboard />} />
                                    </Switch>
                                    <Switch>
                                        <Route path='/incidents' render={() => <Incidents />} />
                                    </Switch>
                                    <Switch>
                                        <Route path='/incidentsems' render={() => <IncidentsEMS />} />
                                    </Switch>
                                    <Switch>
                                        <Route path='/profiles' render={() => <Profiles />} />
                                    </Switch>
                                    <Switch>
                                        <Route path='/dmv' render={() => <DMV />} />
                                    </Switch>
                                    <Switch>
                                        <Route path='/evidence' render={() => <Evidence />} />
                                    </Switch>
                                    <Switch>
                                        <Route path='/properties' render={() => <Properties />} />
                                    </Switch>
                                    <Switch>
                                        <Route path='/charges' render={() => <Charges />} />
                                    </Switch>
                                    <Switch>
                                        <Route path='/businesses' render={() => <Businesses />} />
                                    </Switch>
                                    <Switch>
                                        <Route path='/staff' render={() => <Staff />} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;