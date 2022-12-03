import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Chip, Divider, FormControl, FormControlLabel, FormGroup, InputAdornment, Popper, Stack, TextField, Tooltip, Typography } from '@mui/material';
import useStyles from './index.styles';
import { fetchNui } from '../../../../../utils/fetchNui';
import { isEnvBrowser } from "../../../../../utils/misc";
import { useRecoilState } from 'recoil';
import { addChargeState, addCriminalState, assignEvidenceState, assignLoadingState, assignOfficerState, assignPersonState, chargeCIDState, chargesDataState, criminalsState, curChargesState, evidenceState, filteredIncidentsSearchDataState, filteredOfficersState, incidentIdState, incidentsSearchDataState, loadingModalState, mdwCallsignState, mdwFirstNameState, mdwLastNameState, mdwRankLabelState, officersInvolvedState, officersState, personsInvolvedState } from '../../../../../atoms/atoms';
import RichMarkdownEditor from 'rich-markdown-editor';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import moment from 'moment';

const Incidents: React.FC = () => {
    const classes = useStyles();

    //player info
    const [mdwFirstName, setMdwFirstName] = useRecoilState(mdwFirstNameState)
    const [mdwLastName, setMdwLastName] = useRecoilState(mdwLastNameState)
    const [mdwRankLabel, setMdwRankLabel] = useRecoilState(mdwRankLabelState)
    const [mdwCallsign, setMdwCallsign] = useRecoilState(mdwCallsignState)

    const [isLoading, setLoading] = useState(false)
    const [loadingModal, setLoadingModal] = useRecoilState(loadingModalState)
    const [incidentsSearchData, setIncidentsSearchData] = useRecoilState(incidentsSearchDataState)
    const [filteredIncidentsSearchData, setFilteredIncidentsSearchData] = useRecoilState(filteredIncidentsSearchDataState)
    const [incidentData, setIncidentData] = useState({} as any)

    const [incidentId, setIncidentId] = useRecoilState(incidentIdState)
    const [incidentTitle, setIncidentTitle] = useState("")
    const [incidentInfo, setIncidentInfo] = useState("")
    const [incidentInfoContent, setIncidentInfoContent] = useState("")

    const [evidence, setEvidence] = useRecoilState(evidenceState)
    const [officersInvolved, setOfficersInvolved] = useRecoilState(officersInvolvedState)
    const [personsInvolved, setPersonsInvolved] = useRecoilState(personsInvolvedState)
    const [tags, setTags] = useState([]) //global
    const [vehicles, setVehicles] = useState([]) //global
    const [criminals, setCriminals] = useRecoilState(criminalsState)

    const [curCharges, setCurCharges] = useRecoilState(curChargesState)

    const [officers, setOfficers] = useRecoilState(officersState)
    const [filteredOfficers, setFilteredOfficers] = useRecoilState(filteredOfficersState)

    const [assignLoading, setAssignLoading] = useRecoilState(assignLoadingState)
    const [assignEvidenceModal, setAssignEvidenceModal] = useRecoilState(assignEvidenceState)
    const [assignOfficerModal, setAssignOfficerModal] = useRecoilState(assignOfficerState)
    const [assignPersonsModal, setAssignPersonsModal] = useRecoilState(assignPersonState)
    const [addCriminalModal, setAddCriminalModal] = useRecoilState(addCriminalState)
    const [addChargeModal, setAddChargeModal] = useRecoilState(addChargeState)
    const [warrantDate, setWarrantDate] = useState<Date | null>(new Date());

    const [imageHovered, setImageHovered] = useState("")

    const [chargesData, setChargesData] = useRecoilState(chargesDataState)

    const [chargeCID, setChargeCID] = useRecoilState(chargeCIDState)

    useEffect(() => {
        if (!isEnvBrowser()) {
            fetchNui('arp-mdw:fetchIncidents', {}).then(resData => {
                setIncidentsSearchData(resData.data)
                setFilteredIncidentsSearchData(resData.data)
            })
        }
    }, []); //setIncidentsSearchData, setFilteredIncidentsSearchData

    const searchIncidents = (searchValue) => {
        setLoading(true)
        if (searchValue !== '') {
            const filteredIncidents = incidentsSearchData.filter((item) => {
                return (
                    item.id.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.title.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.author.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.info.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.evidence?.toLowerCase().includes(searchValue.toLowerCase()) ||
                    item.officers?.toLowerCase().includes(searchValue.toLowerCase()) ||
                    item.persons?.toLowerCase().includes(searchValue.toLowerCase()) ||
                    item.tags?.toLowerCase().includes(searchValue.toLowerCase()) ||
                    item.vehicles?.toLowerCase().includes(searchValue.toLowerCase()) ||
                    item.criminals?.toLowerCase().includes(searchValue.toLowerCase())
                )
            })
            setFilteredIncidentsSearchData(filteredIncidents)
            setLoading(false)
        } else {
            setLoading(false)
            setFilteredIncidentsSearchData(incidentsSearchData)
        }
    }
    
    const loadIncident = (value) => {
        setLoadingModal(true)
        fetchNui('arp-mdw:loadIncident', { value: value }).then(resData => {
            setLoading(false)

            setIncidentData([])
            setIncidentId(0)
            setIncidentTitle("")
            setIncidentInfo("Content goes here...")
            setIncidentInfoContent("Content goes here...")
            setOfficersInvolved([])
            setPersonsInvolved([])
            setTags([])
            setVehicles([])
            setCriminals([])

            if (resData.data.data !== undefined || resData.data.data !== null) {
                setIncidentData(resData.data.data)
            }

            if (resData.data.id !== undefined || resData.data.id !== null) {
                setIncidentId(resData.data.id)
            }

            if (resData.data.title !== undefined || resData.data.title !== null) {
                setIncidentTitle(resData.data.title)
            }

            if (resData.data.info !== undefined || resData.data.info !== null) {
                setIncidentInfo(resData.data.info)
                setIncidentInfoContent(resData.data.info)
            }

            if (resData.data.officers !== undefined || resData.data.officers !== null) {
                setOfficersInvolved(resData.data.officers)
            }

            if (resData.data.persons !== undefined || resData.data.persons !== null) {
                setPersonsInvolved(resData.data.persons)
            }

            if (resData.data.criminals !== undefined || resData.data.criminals !== null) {
                setCriminals(resData.data.criminals)
            }

            if (resData.data.evidence !== undefined || resData.data.evidence !== null) {
                setEvidence(resData.data.evidence)
            }

            setLoadingModal(false)
        })
    }

    const saveIncident = (shouldCreate) => {
        setLoadingModal(true)
        if (shouldCreate) {
            fetchNui('arp-mdw:saveIncident', { id: 0, title: incidentTitle, info: incidentInfoContent, shouldCreate: shouldCreate }).then(resData => {
                if (resData.data.incident.data !== undefined || resData.data.incident.data !== null) {
                    setIncidentData(resData.data.incident.data)
                }

                if (resData.data.incident.id !== undefined || resData.data.incident.id !== null) {
                    setIncidentId(resData.data.incident.id)
                }

                if (resData.data.incident.title !== undefined || resData.data.incident.title !== null) {
                    setIncidentTitle(resData.data.incident.title)
                }

                if (resData.data.incident.info !== undefined || resData.data.incident.info !== null) {
                    setIncidentInfo(resData.data.incident.info)
                }

                if (resData.data.incident.officers !== undefined || resData.data.incident.officers !== null) {
                    setOfficersInvolved(resData.data.incident.officers)
                }

                if (resData.data.incident.persons !== undefined || resData.data.incident.persons !== null) {
                    setPersonsInvolved(resData.data.incident.persons)
                }

                if (resData.data.incident.criminals !== undefined || resData.data.incident.criminals !== null) {
                    setCriminals(resData.data.incident.criminals)
                }

                if (resData.data.incident.evidence !== undefined || resData.data.incident.evidence !== null) {
                    setEvidence(resData.data.incident.evidence)
                }

                //need to load incidents data aswell
                setIncidentsSearchData(resData.data.incidents)
                setFilteredIncidentsSearchData(resData.data.incidents)

                setLoadingModal(false)
            })
        } else {
            fetchNui('arp-mdw:saveIncident', { id: incidentId, title: incidentTitle, info: incidentInfoContent, evidence: evidence, officers: officersInvolved, persons: personsInvolved, shouldCreate: shouldCreate }).then(resData => {
                setLoadingModal(false)

                setIncidentsSearchData(resData.data.incidents)
                setFilteredIncidentsSearchData(resData.data.incidents)
            })
        }
    }

    const resetIncidentData = () => {
        setIncidentData([])
        setIncidentId(0)
        setIncidentTitle("")
        setIncidentInfo("**LSPD Report** \n" + moment().format('YYYY-MM-DD HH:MM:SS') + "\n **Reporting Officer** \n @" + mdwCallsign + " " + mdwRankLabel + " " + mdwFirstName + " " + mdwLastName + "\n **Assisting Officer/s:** \n **Suspect/s:** \n **Victim/s:** \n **Witnesses:** \n **Location:** \n **Debrief:**")
        setIncidentInfoContent("**LSPD Report** \n" + moment().format('YYYY-MM-DD HH:MM:SS') + "\n **Reporting Officer** \n @" + mdwCallsign + " " + mdwRankLabel + " " + mdwFirstName + " " + mdwLastName + "\n **Assisting Officer/s:** \n **Suspect/s:** \n **Victim/s:** \n **Witnesses:** \n **Location:** \n **Debrief:**")
        setOfficersInvolved([])
        setPersonsInvolved([])
        setTags([])
        setVehicles([])
        setCriminals([])
    }

    const updateIncidentInfo = (e: any) => {
        let func = e
        let value = func()

        setIncidentInfoContent(value)
    }

    const handleRemoveOfficer = (cid) => {
        setLoadingModal(true)

        let arr = officersInvolved

        let newArr = arr.filter(item => item.cid.toString() !== cid.toString())

        fetchNui('arp-mdw:updateIncident', { id: incidentId, value: newArr, type: "officers", add: false }).then(resData => {
            setLoadingModal(false)
            setOfficersInvolved(newArr)
        })
    }

    const handleRemovePerson = (cid) => {
        setLoadingModal(true)

        let arr = personsInvolved

        let newArr = arr.filter(item => item.cid.toString() !== cid.toString())

        fetchNui('arp-mdw:updateIncident', { id: incidentId, value: newArr, type: "persons" }).then(resData => {
            setLoading(false)
            setPersonsInvolved(newArr)
        })
    }

    const handleRemoveEvidence = (id) => {
        setLoadingModal(true)

        let arr = evidence

        let newArr = arr.filter(item => item.id.toString() !== id.toString())

        fetchNui('arp-mdw:updateIncident', { id: incidentId, value: newArr, type: "evidence", add: false }).then(resData => {
            setLoadingModal(false)
            setEvidence(newArr) //should remove from evidence tab
        })
    }

    const handleRemoveCriminal = (cid: number) => {
        setLoadingModal(true)

        let arr = criminals

        let newArr = arr.filter(item => item.cid.toString() !== cid.toString())

        fetchNui('arp-mdw:updateIncident', { id: incidentId, value: newArr, type: "criminals" }).then(resData => {
            setLoadingModal(false)
            setCriminals(newArr)
        })
    }

    const handleSaveCriminal = (cid: number) => {
        setLoadingModal(true)
        fetchNui('arp-mdw:saveCriminal', { id: incidentId, cid: cid, value: criminals }).then(resData => {
            setLoadingModal(false)
        })
    }

    const handleUpdateCriminal = (type, cid, value) => {
        let arr = [...criminals]
        if (type === "warrant") {
            let idx = arr.findIndex((item) => item.cid.toString() === cid.toString())
            arr[idx].warrant = value
            setCriminals(arr)
        } else if (type === "warrantdate") {
            let idx = arr.findIndex((item) => item.cid.toString() === cid.toString())
            arr[idx].warrantdate = moment(value).format("X")
            setCriminals(arr)
            setWarrantDate(value)
        } else if (type === "guilty") {
            let idx = arr.findIndex((item) => item.cid.toString() === cid.toString())
            arr[idx].guilty = value
            setCriminals(arr)
        } else if (type === "processed") {
            let idx = arr.findIndex((item) => item.cid.toString() === cid.toString())
            arr[idx].processed = value
            setCriminals(arr)
        }
    }

    const handleAssignOfficer = () => {
        setAssignLoading(true)
        setAssignOfficerModal(true)
        fetchNui('arp-mdw:fetchOfficers', {}).then(resData => {
            setAssignLoading(false)
            setOfficers(resData.data)
            setFilteredOfficers(resData.data)
        })
    }

    const openAddChargeModal = (cid) => {
        //make some sort of loading thing, when the charges hasnt loaded in middle of charges modal, setChargesLoading(true/false)
        setChargesData([])
        setAddChargeModal(true)
        setChargeCID(cid)
        if (cid !== undefined) {
            let arr = [...criminals]
            let idx = arr.findIndex((item) => item.cid.toString() === cid.toString())
            let charges = arr[idx].charges
            setCurCharges(charges || [])
        }
        fetchNui('arp-mdw:fetchCharges', {}).then(resData => {
            setChargesData(resData.data)
        })
    }

    return (
        <>
            <div className={classes.mdwIncidentsOuterContent}>
                <div className={classes.mdwIncidentsInnerContent}>
                    <div className={classes.mdwIncidentsInnerContentLeft}>
                        <div className={classes.mdwIncidentsInnerContentLeftHeader}>
                            <div className="mdw-incidents-inner-content-left-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Incidents</Typography>
                            </div>
                            <div className={classes.mdwIncidentsInnerContentLeftHeaderTextRight}>
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
                                            onChange={(e) => searchIncidents(e.target.value)}
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
                        <div className={classes.mdwIncidentsInnerContentLeftBody}>
                            {filteredIncidentsSearchData && filteredIncidentsSearchData.length > 0 ? (
                                filteredIncidentsSearchData.map((incident) => (
                                    <div onClick={() => loadIncident(incident.id)} key={incident.id} id={incident.id} className="component-paper cursor-pointer" style={{ width: '100%', borderBottom: '0px solid #fff', borderRadius: '0px', backgroundColor: '#222831' }}>
                                        <div className="main-container">
                                            <div className="details">
                                                <div className="description">

                                                    <div className="flex-row">
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>{incident.title}</Typography>
                                                    </div>

                                                    <div className="flex-row" style={{ justifyContent: 'space-between' }}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>ID: {incident.id}</Typography>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>{incident.author} ─ {moment(incident.unix * 1000).fromNow()}</Typography>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <></>
                            )}
                            <div className="spinner-wrapper" style={{ display: isLoading ? '' : 'none', alignItems: 'baseline', marginTop: '15%' }}>
                                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                            </div>
                            {/*<div style={{ display: filteredIncidentsSearchData.length ? 'flex' : 'none' , justifyContent: 'center'}}>
                                <Button size="small" color="success" variant="contained">Load More</Button>
                            </div>*/}
                        </div>
                    </div>
                    <div className={classes.mdwInnerContentDivider}></div>
                    <div className={classes.mdwIncidentsContentWrapperRight} style={{ overflowY: 'auto' }}>
                        <div className={classes.mdwIncidentsTextContentMiddle}>
                            <div className={classes.mdwIncidentsInnerContentMiddleHeader}>
                                <div className="mdw-incidents-inner-content-middle-header-text-left">
                                    <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>{incidentId !== 0 ? `Edit Incident (#${incidentId})` : 'Create Incident'}</Typography>
                                </div>
                                <div className={classes.mdwIncidentsInnerContentMiddleHeaderTextRight} style={{ paddingRight: '0px' }}>
                                    <Stack direction="row" spacing={1}>
                                        <div>
                                            <Tooltip title="Create New Incident" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                                <i onClick={resetIncidentData} className="fas fa-file-alt fa-w-14" style={{ display: incidentId !== 0 ? '' : 'none', color: '#fff' }}></i>
                                            </Tooltip>
                                        </div>
                                        <div>
                                            <Tooltip title="Save Incident" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                                <i onClick={() => saveIncident(incidentId !== 0 ? false : true)} className="fas fa-save fa-w-14" style={{ color: '#fff' }}></i>
                                            </Tooltip>
                                        </div>
                                    </Stack>
                                </div>
                            </div>
                            <div className="mdw-inner-content-pre-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className={classes.mdwIncidentsInnerContentMiddleBody} style={{ flexDirection: 'row' }}>
                                    <div className="mdw-create-inputs" style={{ width: '100%' }}>
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
                                                    label="Title"
                                                    variant="standard"
                                                    onChange={(e) => setIncidentTitle(e.target.value)}
                                                    value={incidentTitle}
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
                                    </div>
                                </div>
                            </div>
                            <div className="mdw-create-document" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', color: '#fff' }}>
                                <div className="mdw-creat-document-inner-cont" style={{ width: '97%', height: '99%' }}>
                                    <RichMarkdownEditor
                                        dark={true}
                                        onChange={updateIncidentInfo}
                                        value={incidentInfo}
                                        disableExtensions={["code_inline", "link", "ordered_list", "checkbox_item", "checkbox_list", "image", "placeholder", "container_notice", "table", "emoji", "td", "th", "tr", "hr", "code_fence"]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={classes.mdwIncidentsEvidenceContentMiddle}>
                            <div className={classes.mdwIncidentsInnerContentRightHeader} style={{ display: 'flex', width: '100%', padding: '8px', minHeight: '48px', justifyContent: 'space-between' }}>
                                <div className="mdw-incidents-inner-content-right-header-text-left">
                                    <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Evidence</Typography>
                                </div>
                                <div className={classes.mdwIncidentsInnerContentRightHeaderTextRight} style={{ paddingRight: '0px' }}>
                                    <Stack direction="row" spacing={1}>
                                        <div>
                                            <Tooltip title="Add Evidence" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                                <i onClick={() => setAssignEvidenceModal(true)} className="fas fa-plus fa-w-14" style={{ display: incidentId !== 0 ? '' : 'none', color: '#fff' }}></i>
                                            </Tooltip>
                                        </div>
                                    </Stack>
                                </div>
                            </div>
                            <div className={classes.mdwIncidentsInnerContentMiddleBody} style={{ display: incidentId !== 0 ? '' : 'none', flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset' }}>
                                {evidence && evidence.length > 0 ? (
                                    evidence.map((ev) => (
                                        <>
                                            {ev.type === "photo" ? (
                                                <>
                                                    <div id={ev.id} style={{ paddingRight: '1.5%', paddingBottom: '1.5%', maxWidth: '100%' }} onMouseEnter={(e) => setImageHovered(e.currentTarget.id)} onMouseLeave={() => setImageHovered("")}>
                                                        <Chip label={`Photo (${ev.description})`} onDelete={() => handleRemoveEvidence(ev.id)} sx={{ backgroundColor: '#4ea551', color: '#000', "& .MuiChip-deleteIcon": { color: '#000' }, "& .MuiChip-deleteIcon:hover": { color: 'rgba(0, 0, 0, 0.5)' } }} />
                                                    </div>
                                                    <Popper
                                                        open={imageHovered.toString() === ev.id.toString() ? true : false}
                                                        style={{ zIndex: 1000, left: '40%', top: '10%' }}
                                                        placement='bottom-end'
                                                        disablePortal={false}
                                                        modifiers={[
                                                            {
                                                                name: 'flip',
                                                                enabled: false,
                                                                options: {
                                                                    altBoundary: false,
                                                                    rootBoundary: 'document',
                                                                    padding: 8,
                                                                },
                                                            },
                                                            {
                                                                name: 'preventOverflow',
                                                                enabled: false,
                                                                options: {
                                                                    altAxis: false,
                                                                    altBoundary: true,
                                                                    tether: false,
                                                                    rootBoundary: 'document',
                                                                    padding: 8,
                                                                },
                                                            },
                                                        ]}
                                                    >
                                                        <div>
                                                            <img alt="" src={ev.identifier} style={{ maxHeight: '600px', maxWidth: '800px' }}></img>
                                                        </div>
                                                    </Popper>
                                                </>
                                            ) : ev.type === "other" ? ( // this is black?
                                                <>
                                                </>
                                            ) : ev.type === "blood" ? ( // this is red
                                                <>
                                                    <div id={ev.id} style={{ paddingRight: '1.5%', paddingBottom: '1.5%', maxWidth: '100%' }}>
                                                        <Chip label={`${ev.identifier} - (${ev.description})`} onDelete={() => handleRemoveEvidence(ev.id)} sx={{ backgroundColor: '#ef4233', color: '#fff', "& .MuiChip-deleteIcon": { color: '#fff' }, "& .MuiChip-deleteIcon:hover": { color: 'rgba(255, 255, 255, 0.5)' } }} />
                                                    </div>
                                                </>
                                            ) : ev.type === "casing" ? ( // this is light green
                                                <>
                                                    <div id={ev.id} style={{ paddingRight: '1.5%', paddingBottom: '1.5%', maxWidth: '100%' }}>
                                                        <Chip label={`Identifier: ${ev.identifier} - (${ev.description})`} onDelete={() => handleRemoveEvidence(ev.id)} sx={{ backgroundColor: '#81ba64', color: '#000', "& .MuiChip-deleteIcon": { color: '#000' }, "& .MuiChip-deleteIcon:hover": { color: 'rgba(0, 0, 0, 0.5)' } }} />
                                                    </div>
                                                </>
                                            ) : ev.type === "weapon" ? ( // this is white
                                                <>
                                                    <div id={ev.id} style={{ paddingRight: '1.5%', paddingBottom: '1.5%', maxWidth: '100%' }}>
                                                        <Chip label={`${ev.identifier} - (${ev.description})`} onDelete={() => handleRemoveEvidence(ev.id)} sx={{ backgroundColor: '#fff', color: '#000', "& .MuiChip-deleteIcon": { color: '#000' }, "& .MuiChip-deleteIcon:hover": { color: 'rgba(0, 0, 0, 0.5)' } }} />
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                </>
                                            )}
                                        </>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className={classes.mdwIncidentsOfficersInvolvedContentMiddle}>
                            <div className={classes.mdwIncidentsInnerContentRightHeader} style={{ display: 'flex', width: '100%', padding: '8px', minHeight: '48px', justifyContent: 'space-between' }}>
                                <div className="mdw-incidents-inner-content-right-header-text-left">
                                    <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Officers Involved</Typography>
                                </div>
                                <div className={classes.mdwIncidentsInnerContentRightHeaderTextRight} style={{ paddingRight: '0px' }}>
                                    <Stack direction="row" spacing={1}>
                                        <div>
                                            <Tooltip title="Add Officer Involved" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                                <i onClick={handleAssignOfficer} className="fas fa-plus fa-w-14" style={{ display: incidentId !== 0 ? '' : 'none', color: '#fff' }}></i>
                                            </Tooltip>
                                        </div>
                                    </Stack>
                                </div>
                            </div>
                            <div className={classes.mdwIncidentsInnerContentMiddleBody} style={{ display: incidentId !== 0 ? '' : 'none', flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset' }}>
                                {officersInvolved && officersInvolved.length > 0 ? (
                                    officersInvolved.map((officer) => (
                                        <div style={{ paddingRight: '1.5%', paddingBottom: '1.5%' }}>
                                            <Chip label={`(${officer.callsign}) ${officer.name}`} onDelete={() => handleRemoveOfficer(officer.cid)} sx={{ backgroundColor: '#fff', color: '#000', "& .MuiChip-deleteIcon": { color: '#000' }, "& .MuiChip-deleteIcon:hover": { color: 'rgba(0, 0, 0, 0.5)' } }} />
                                        </div>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className={classes.mdwIncidentsPersonsInvolvedContentMiddle}>
                            <div className={classes.mdwIncidentsInnerContentRightHeader} style={{ display: 'flex', width: '100%', padding: '8px', minHeight: '48px', justifyContent: 'space-between' }}>
                                <div className="mdw-incidents-inner-content-right-header-text-left">
                                    <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Persons Involved</Typography>
                                </div>
                                <div className={classes.mdwIncidentsInnerContentRightHeaderTextRight} style={{ paddingRight: '0px' }}>
                                    <Stack direction="row" spacing={1}>
                                        <div>
                                            <Tooltip title="Add Person Involved" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                                <i onClick={() => setAssignPersonsModal(true)} className="fas fa-plus fa-w-14" style={{ display: incidentId !== 0 ? '' : 'none', color: '#fff' }}></i>
                                            </Tooltip>
                                        </div>
                                    </Stack>
                                </div>
                            </div>
                            <div className={classes.mdwIncidentsInnerContentMiddleBody} style={{ display: incidentId !== 0 ? '' : 'none', flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset' }}>
                                {personsInvolved && personsInvolved.length > 0 ? (
                                    personsInvolved.map((person) => (
                                        <div style={{ paddingRight: '1.5%', paddingBottom: '1.5%' }}>
                                            <Chip label={`${person.name}`} onDelete={() => handleRemovePerson(person.cid)} sx={{ backgroundColor: '#fff', color: '#000', "& .MuiChip-deleteIcon": { color: '#000' }, "& .MuiChip-deleteIcon:hover": { color: 'rgba(0, 0, 0, 0.5)' } }} />
                                        </div>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className={classes.mdwIncidentsTagsContentMiddle}>
                            <div className={classes.mdwIncidentsInnerContentRightHeader} style={{ display: 'flex', width: '100%', padding: '8px', minHeight: '48px', justifyContent: 'space-between' }}>
                                <div className="mdw-incidents-inner-content-right-header-text-left">
                                    <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Tags</Typography>
                                </div>
                                <div className={classes.mdwIncidentsInnerContentRightHeaderTextRight} style={{ paddingRight: '0px' }}>
                                    <Stack direction="row" spacing={1}>
                                        <div>
                                            <Tooltip title="Add Tag" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                                <i className="fas fa-plus fa-w-14" style={{ display: incidentId !== 0 ? '' : 'none', color: '#fff' }}></i>
                                            </Tooltip>
                                        </div>
                                    </Stack>
                                </div>
                            </div>
                            <div className={classes.mdwIncidentsInnerContentMiddleBody} style={{ display: incidentId !== 0 ? '' : 'none', flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset' }}>
                            </div>
                        </div>
                        <div className={classes.mdwIncidentsVehiclesContentMiddle}>
                            <div className={classes.mdwIncidentsInnerContentRightHeader} style={{ display: 'flex', width: '100%', padding: '8px', minHeight: '48px', justifyContent: 'space-between' }}>
                                <div className="mdw-incidents-inner-content-right-header-text-left">
                                    <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Vehicles</Typography>
                                </div>
                                <div className={classes.mdwIncidentsInnerContentRightHeaderTextRight} style={{ paddingRight: '0px' }}>
                                    <Stack direction="row" spacing={1}>
                                        <div>
                                            <Tooltip title="Add Vehicle" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                                <i className="fas fa-plus fa-w-14" style={{ display: incidentId !== 0 ? '' : 'none', color: '#fff' }}></i>
                                            </Tooltip>
                                        </div>
                                    </Stack>
                                </div>
                            </div>
                            <div className={classes.mdwIncidentsInnerContentMiddleBody} style={{ display: incidentId !== 0 ? '' : 'none', flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset' }}>
                            </div>
                        </div>
                    </div>
                    <div className={classes.mdwInnerContentDivider}></div>
                    <div className={classes.mdwIncidentsContentWrapperRight} style={{ overflowY: 'auto' }}>
                        <div className={classes.mdwIncidentsAddCriminalContentRight}>
                            <div className={classes.mdwIncidentsInnerContentRightHeader} style={{ display: 'flex', width: '100%', padding: '8px', minHeight: '48px', justifyContent: 'space-between' }}>
                                <div className="mdw-incidents-inner-content-right-header-text-left">
                                    <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Add Criminal Scum</Typography>
                                </div>
                                <div className={classes.mdwIncidentsInnerContentRightHeaderTextRight} style={{ paddingRight: '0px' }}>
                                    <Stack direction="row" spacing={1}>
                                        <div>
                                            <Tooltip title="Add Criminal" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                                <i onClick={() => setAddCriminalModal(true)} className="fas fa-plus fa-w-14" style={{ display: incidentId !== 0 ? '' : 'none', color: '#fff' }}></i>
                                            </Tooltip>
                                        </div>
                                    </Stack>
                                </div>
                            </div>
                        </div>
                        {criminals && criminals.length > 0 ? (
                            criminals.map((criminal) => (
                                <div className={classes.mdwIncidentsCriminalContentRight} style={{ display: incidentId !== 0 ? '' : 'none', }}>
                                    <div className={classes.mdwIncidentsInnerContentRightHeader} style={{ display: 'flex', width: '100%', padding: '8px', minHeight: '48px', justifyContent: 'space-between' }}>
                                        <div className="mdw-incidents-inner-content-right-header-text-left">
                                            <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>{criminal.name} (#{criminal.cid})</Typography>
                                        </div>
                                        <div className={classes.mdwIncidentsInnerContentRightHeaderTextRight} style={{ paddingRight: '0px' }}>
                                            <Stack direction="row" spacing={1}>
                                                <div>
                                                    <Tooltip title="Delete" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                                        <i onClick={() => handleRemoveCriminal(criminal.cid)} className="fas fa-trash fa-w-14" style={{ color: '#fff' }}></i>
                                                    </Tooltip>
                                                </div>
                                                <div>
                                                    <Tooltip title="Save" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                                        <i onClick={() => handleSaveCriminal(criminal.cid)} className="fas fa-save fa-w-14" style={{ color: '#fff' }}></i>
                                                    </Tooltip>
                                                </div>
                                            </Stack>
                                        </div>
                                    </div>
                                    <div className={classes.mdwIncidentsInnerContentRightBody}>
                                        <div className="mdw-inner-content-right-body-wrapper" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset' }}>
                                            <div style={{ paddingRight: '1.5%', paddingBottom: '1.5%' }}>
                                                <Chip onClick={() => openAddChargeModal(criminal.cid)} label="Edit Charges" sx={{ backgroundColor: '#fff', color: '#000' }} />
                                            </div>
                                            {criminal.charges && criminal.charges.length > 0 ? (
                                                criminal.charges.map((charge) => (
                                                    <div style={{ paddingRight: '1.5%', paddingBottom: '1.5%' }}>
                                                        <Chip label={charge.title} sx={{ backgroundColor: '#000', color: '#fff', "& .MuiChip-deleteIcon": { color: '#fff' }, "& .MuiChip-deleteIcon:hover": { color: 'rgba(255, 255, 255, 0.5)' } }} />
                                                    </div>
                                                ))
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                        <div style={{ marginTop: '1%', marginBottom: '0.3%' }}>
                                            <Divider style={{ borderColor: 'rgb(34, 40, 49)' }} variant="fullWidth" />
                                        </div>
                                        <div style={{ flexDirection: 'row', marginBottom: '2%', display: 'flex' }}>
                                            <div style={{ width: '50%', position: 'relative' }}>
                                                <FormGroup>
                                                    <FormControlLabel style={{ color: 'rgba(255, 255, 255, 0.7)' }} control={<Checkbox color="warning" onChange={(e) => handleUpdateCriminal("warrant", criminal.cid, e.target.checked)} disableFocusRipple disableRipple checked={criminal.warrant} classes={{ root: classes.checkbox }} />} label="Warrant for Arrest" />
                                                </FormGroup>
                                            </div>
                                            <div style={{ width: '50%', position: 'relative', display: criminal.warrant ? '' : 'none' }}>
                                                <FormGroup style={{ marginTop: '5%' }}>
                                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                        <MobileDatePicker
                                                            label="Expiration Date"
                                                            value={warrantDate}
                                                            onChange={(newValue) => {
                                                                handleUpdateCriminal("warrantdate", criminal.cid, newValue);
                                                            }}
                                                            renderInput={(params) => <TextField variant="standard" {...params} />}
                                                        />
                                                    </LocalizationProvider>
                                                </FormGroup>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '1%', marginBottom: '0.3%', display: criminal.charges.length > 0 ? '' : 'none' }}>
                                            <Divider style={{ borderColor: 'rgb(34, 40, 49)' }} variant="fullWidth" />
                                        </div>
                                        <div style={{ marginTop: '1%', display: criminal.charges.length > 0 ? '' : 'none' }}>
                                            <div style={{ marginTop: '1%' }}>
                                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h5" gutterBottom>Final</Typography>
                                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>{criminal.months} months (+0 months parole) / {criminal.fine.toLocaleString('en-Us', { style: 'currency', currency: 'USD' })} fine / {criminal.points} point(s)</Typography>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '1%', marginBottom: '0.3%', display: criminal.charges.length > 0 ? '' : 'none' }}>
                                            <Divider style={{ borderColor: 'rgb(34, 40, 49)' }} variant="fullWidth" />
                                        </div>
                                        <div style={{ flexDirection: 'row', marginBottom: '2%', display: criminal.charges.length > 0 ? 'flex' : 'none' }}>
                                            <div style={{ width: '50%', position: 'relative' }}>
                                                <FormGroup>
                                                    <FormControlLabel style={{ color: 'rgba(255, 255, 255, 0.7)' }} control={<Checkbox color="warning" onChange={(e) => handleUpdateCriminal("guilty", criminal.cid, e.target.checked)} disableFocusRipple disableRipple checked={criminal.guilty} classes={{ root: classes.checkbox }} />} label="Pleaded Guilty" />
                                                </FormGroup>
                                            </div>
                                            <div style={{ width: '50%', position: 'relative' }}>
                                                <FormGroup>
                                                    <FormControlLabel style={{ color: 'rgba(255, 255, 255, 0.7)' }} control={<Checkbox color="warning" onChange={(e) => handleUpdateCriminal("processed", criminal.cid, e.target.checked)} disableFocusRipple disableRipple checked={criminal.processed} classes={{ root: classes.checkbox }} />} label="Processed" />
                                                </FormGroup>
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
        </>
    );
}

export default Incidents;