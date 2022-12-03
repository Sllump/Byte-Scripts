import React, { useState, useEffect } from 'react';
import { Chip, FormControl, InputAdornment, Stack, TextField, Tooltip, Typography } from '@mui/material';
import useStyles from './index.styles';
import { fetchNui } from '../../../../../utils/fetchNui';
import { isEnvBrowser } from "../../../../../utils/misc";
import { useRecoilState } from 'recoil';
import { assignLoadingState, assignEmsState, assignPersonState, emsInvolvedState, emsState, evidenceState, filteredEmsState, filteredIncidentsEmsSearchDataState, incidentIdState, incidentsEmsSearchDataState, loadingModalState, mdwCallsignState, mdwFirstNameState, mdwLastNameState, mdwRankLabelState, personsInvolvedState } from '../../../../../atoms/atoms';
import RichMarkdownEditor from 'rich-markdown-editor';
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
    const [incidentsEmsSearchData, setIncidentsEmsSearchData] = useRecoilState(incidentsEmsSearchDataState) //new ems state
    const [filteredIncidentsEmsSearchData, setFilteredIncidentsEmsSearchData] = useRecoilState(filteredIncidentsEmsSearchDataState) //new ems state
    const [incidentData, setIncidentData] = useState({} as any)

    const [incidentId, setIncidentId] = useRecoilState(incidentIdState) //new ems state
    const [incidentTitle, setIncidentTitle] = useState("")
    const [incidentInfo, setIncidentInfo] = useState("")
    const [incidentInfoContent, setIncidentInfoContent] = useState("")

    const [evidence, setEvidence] = useRecoilState(evidenceState)
    const [emsInvolved, setEmsInvolved] = useRecoilState(emsInvolvedState)
    const [personsInvolved, setPersonsInvolved] = useRecoilState(personsInvolvedState)

    const [ems, setEms] = useRecoilState(emsState)
    const [filteredEms, setFilteredEms] = useRecoilState(filteredEmsState)

    const [assignLoading, setAssignLoading] = useRecoilState(assignLoadingState)
    const [assignEmsModal, setAssignEmsModal] = useRecoilState(assignEmsState) //new ems state
    const [assignPersonsModal, setAssignPersonsModal] = useRecoilState(assignPersonState) //can be same

    useEffect(() => {
        if (!isEnvBrowser()) {
            fetchNui('arp-mdw:fetchIncidentsEms', {}).then(resData => {
                setIncidentsEmsSearchData(resData.data)
                setFilteredIncidentsEmsSearchData(resData.data)
            })
        }
    }, []); //setIncidentEmsSearchData, setFilteredIncidentEmsSearchData

    const searchIncidents = (searchValue) => {
        setLoading(true)
        if (searchValue !== '') {
            const filteredIncidents = incidentsEmsSearchData.filter((item) => {
                return (
                    item.id.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.title.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.author.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.info.toString().toLowerCase().startsWith(searchValue.toLowerCase())
                )
            })
            setFilteredIncidentsEmsSearchData(filteredIncidents)
            setLoading(false)
        } else {
            setLoading(false)
            setFilteredIncidentsEmsSearchData(incidentsEmsSearchData)
        }
    }

    const loadIncident = (value) => {
        setLoadingModal(true)
        fetchNui('arp-mdw:loadIncidentEms', { value: value }).then(resData => {
            setLoading(false)

            setIncidentData([])
            setIncidentId(0)
            setIncidentTitle("")
            setIncidentInfo("Content goes here...")
            setIncidentInfoContent("Content goes here...")
            setEmsInvolved([])
            setPersonsInvolved([])

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

            if (resData.data.ems !== undefined || resData.data.ems !== null) {
                setEmsInvolved(resData.data.ems)
            }

            if (resData.data.persons !== undefined || resData.data.persons !== null) {
                setPersonsInvolved(resData.data.persons)
            }

            setLoadingModal(false)
        })
    }

    const saveIncident = (shouldCreate) => {
        //when i saved the incidentTitle, and incidentInfo didnt save
        setLoadingModal(true)
        if (shouldCreate) {
            //should create new incident
            //add type to this, so it knows if its pd/ems or make new func, cause it doesnt take as much info
            fetchNui('arp-mdw:saveIncidentEms', { id: 0, title: incidentTitle, info: incidentInfoContent, shouldCreate: shouldCreate }).then(resData => {
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

                if (resData.data.incident.ems !== undefined || resData.data.incident.ems !== null) {
                    setEmsInvolved(resData.data.incident.ems)
                }

                if (resData.data.incident.persons !== undefined || resData.data.incident.persons !== null) {
                    setPersonsInvolved(resData.data.incident.persons)
                }

                //need to load incidents data aswell
                setIncidentsEmsSearchData(resData.data.incidents)
                setFilteredIncidentsEmsSearchData(resData.data.incidents)

                setLoadingModal(false)
            })
        } else {
            //should save incident
            fetchNui('arp-mdw:saveIncidentEms', { id: incidentId, title: incidentTitle, info: incidentInfoContent, evidence: evidence, ems: emsInvolved, persons: personsInvolved, shouldCreate: shouldCreate }).then(resData => {
                setLoadingModal(false)

                //need to load incidents data aswell
                setIncidentsEmsSearchData(resData.data.incidents)
                setFilteredIncidentsEmsSearchData(resData.data.incidents)
            })
        }
    }

    const resetIncidentData = () => {
        setIncidentData([])
        setIncidentId(0)
        setIncidentTitle("")
        setIncidentInfo("**EMS Report** \n" + moment().format('YYYY-MM-DD HH:MM:SS') + "\n **Reporting EMS** \n @" + mdwCallsign + " " + mdwRankLabel + " " + mdwFirstName + " " + mdwLastName + "\n **Assisting Officer/s:** \n **Attending:** \n **Debrief:**")
        setIncidentInfoContent("**EMS Report** \n" + moment().format('YYYY-MM-DD HH:MM:SS') + "\n **Reporting EMS** \n @" + mdwCallsign + " " + mdwRankLabel + " " + mdwFirstName + " " + mdwLastName + "\n **Assisting Officer/s:** \n **Attending:** \n **Debrief:**")
        setEmsInvolved([])
        setPersonsInvolved([])
    }

    const updateIncidentInfo = (e: any) => {
        let func = e
        let value = func()

        setIncidentInfoContent(value)
    }

    const handleRemoveEms = (cid) => {
        setLoadingModal(true)

        let arr = emsInvolved

        let newArr = arr.filter(item => item.cid.toString() !== cid.toString())

        fetchNui('arp-mdw:updateIncidentEms', { id: incidentId, value: newArr, type: "ems", add: false }).then(resData => {
            setLoadingModal(false)
            setEmsInvolved(newArr)
        })
    }

    const handleRemovePerson = (cid) => {
        let arr = personsInvolved

        let newArr = arr.filter(item => item.cid.toString() !== cid.toString())

        fetchNui('arp-mdw:updateIncidentEms', { id: incidentId, value: newArr, type: "persons" }).then(resData => {
            setPersonsInvolved(newArr)
        })
    }

    const handleAssignPerson = () => {
        setAssignPersonsModal(true)
    }

    const handleAssignEms = () => {
        setAssignLoading(true)
        setAssignEmsModal(true)
        fetchNui('arp-mdw:fetchEms', {}).then(resData => {
            setAssignLoading(false)
            setEms(resData.data)
            setFilteredEms(resData.data)
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
                            {filteredIncidentsEmsSearchData && filteredIncidentsEmsSearchData.length > 0 ? (
                                filteredIncidentsEmsSearchData.map((incident) => (
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
                                        disableExtensions={["code_inline", "link", "ordered_list", "checkbox_item", "checkbox_list", "image", "placeholder", "container_notice", "table", "emoji", "td", "th", "tr", "hr", "code_fence", "code_block"]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={classes.mdwIncidentsEmsInvolvedContentMiddle}>
                            <div className={classes.mdwIncidentsInnerContentRightHeader} style={{ display: 'flex', width: '100%', padding: '8px', minHeight: '48px', justifyContent: 'space-between' }}>
                                <div className="mdw-incidents-inner-content-right-header-text-left">
                                    <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>EMS Involved</Typography>
                                </div>
                                <div className={classes.mdwIncidentsInnerContentRightHeaderTextRight} style={{ paddingRight: '0px' }}>
                                    <Stack direction="row" spacing={1}>
                                        <div>
                                            <Tooltip title="Add EMS Involved" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                                <i onClick={handleAssignEms} className="fas fa-plus fa-w-14" style={{ display: incidentId !== 0 ? '' : 'none', color: '#fff' }}></i>
                                            </Tooltip>
                                        </div>
                                    </Stack>
                                </div>
                            </div>
                            <div className={classes.mdwIncidentsInnerContentMiddleBody} style={{ display: incidentId !== 0 ? '' : 'none', flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset' }}>
                                {emsInvolved && emsInvolved.length > 0 ? (
                                    emsInvolved.map((ems) => (
                                        <div style={{ paddingRight: '1.5%', paddingBottom: '1.5%' }}>
                                            <Chip label={`(${ems.callsign}) ${ems.name}`} onDelete={() => handleRemoveEms(ems.cid)} sx={{ backgroundColor: '#fff', color: '#000', "& .MuiChip-deleteIcon": { color: '#000' }, "& .MuiChip-deleteIcon:hover": { color: 'rgba(0, 0, 0, 0.5)' } }} />
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
                                                <i onClick={handleAssignPerson} className="fas fa-plus fa-w-14" style={{ display: incidentId !== 0 ? '' : 'none', color: '#fff' }}></i>
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
                    </div>
                    <div className={classes.mdwInnerContentDivider}></div>
                    <div className={classes.mdwIncidentsContentWrapperRight} style={{ overflowY: 'auto' }}>
                       
                    </div>
                </div>
            </div>
        </>
    );
}

export default Incidents;