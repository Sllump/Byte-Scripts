import React, { useState, useEffect } from 'react';
import { FormControl, InputAdornment, Stack, TextField, Tooltip, Typography } from '@mui/material';
import useStyles from './index.styles';
import { fetchNui } from '../../../../utils/fetchNui';
import { isEnvBrowser } from "../../../../utils/misc";
import { useRecoilState } from 'recoil';
import { evidenceSearchDataState, filteredEvidenceSearchDataState, loadingModalState } from '../../../../atoms/atoms';
import Input from '../../../components/input/input';

const Evidence: React.FC = () => {
    const classes = useStyles();

    const [isLoading, setLoading] = useState(false)
    const [loadingModal, setLoadingModal] = useRecoilState(loadingModalState)
    const [evidenceSearchData, setEvidenceSearchData] = useRecoilState(evidenceSearchDataState)
    const [filteredEvidenceSearchData, setFilteredEvidenceSearchData] = useRecoilState(filteredEvidenceSearchDataState)
    const [evidenceData, setEvidenceData] = useState({} as any)

    const [evidenceTabId, setEvidenceTabId] = useState(0)
    const [evidenceTabType, setEvidenceTabType] = useState("other")
    const [evidenceTabIdentifier, setEvidenceTabIdentifier] = useState("")
    const [evidenceTabDescription, setEvidenceTabDescription] = useState("")
    const [evidenceTabCID, setEvidenceTabCID] = useState("")

    useEffect(() => {
        if (!isEnvBrowser()) {
            fetchNui('arp-mdw:fetchEvidence', {}).then(resData => {
                setEvidenceSearchData(resData.data)
                setFilteredEvidenceSearchData(resData.data)
            })
        }
    }, []); //setEvidenceSearchData, setFilteredEvidenceSearchData

    const searchEvidence = (searchValue) => {
        setLoading(true)
        if (searchValue !== '') {
            const filteredEvidence = evidenceSearchData.filter((item) => {
                return (
                    item.id.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.type.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.identifier.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.description.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.cid.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.incidentId.toString().toLowerCase().startsWith(searchValue.toLowerCase())
                )
            })
            setFilteredEvidenceSearchData(filteredEvidence)
            setLoading(false)
        } else {
            setLoading(false)
            setFilteredEvidenceSearchData(evidenceSearchData)
        }
    }

    const loadEvidence = (value) => {
        setLoadingModal(true)
        fetchNui('arp-mdw:loadEvidence', { value: value }).then(resData => {
            setLoading(false)

            setEvidenceData(resData.data.data)
            setEvidenceTabId(resData.data.id)
            setEvidenceTabType(resData.data.type)
            setEvidenceTabIdentifier(resData.data.identifier)
            setEvidenceTabDescription(resData.data.description)
            setEvidenceTabCID(resData.data.cid)

            setLoadingModal(false)
        })
    }

    const resetEvidenceData = () => {
        setEvidenceData([])
        setEvidenceTabId(0)
        setEvidenceTabType("other")
        setEvidenceTabIdentifier("")
        setEvidenceTabDescription("")
        setEvidenceTabCID("")
    }

    return (
        <>
            <div className={classes.mdwEvidenceOuterContent}>
                <div className={classes.mdwEvidenceInnerContent}>
                    <div className={classes.mdwEvidenceInnerContentLeft}>
                        <div className={classes.mdwEvidenceInnerContentLeftHeader}>
                            <div className="mdw-evidence-inner-content-left-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Evidence</Typography>
                            </div>
                            <div className={classes.mdwEvidenceInnerContentLeftHeaderTextRight}>
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
                                            onChange={(e) => searchEvidence(e.target.value)}
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
                        <div className={classes.mdwEvidenceInnerContentLeftBody}>
                            {filteredEvidenceSearchData && filteredEvidenceSearchData.length > 0 ? (
                                filteredEvidenceSearchData.map((evidence) => (
                                    <>
                                        <div onClick={() => loadEvidence(evidence.id)} key={evidence.id} id={evidence.id} className="component-paper cursor-pointer" style={{ width: '100%', borderBottom: '0px solid #fff', borderRadius: '0px', backgroundColor: '#222831' }}>
                                            <div className="main-container">
                                                <div className="details">
                                                    <div className="description">
                                                        <div className="flex-row">
                                                            <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>{evidence.identifier} - {evidence.description}</Typography>
                                                        </div>
                                                        <div className="flex-row">
                                                            <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>ID: {evidence.id}</Typography>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
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
                    <div className={classes.mdwEvidenceInnerContentMiddle}>
                        <div className={classes.mdwEvidenceInnerContentMiddleHeader}>
                            <div className="mdw-evidence-inner-content-middle-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>{evidenceTabId !== 0 ? `View Evidence (#${evidenceTabId})` : 'Submit Evidence'}</Typography>
                            </div>
                            <div className={classes.mdwEvidenceInnerContentMiddleHeaderTextRight} style={{ paddingRight: '0px' }}>
                                <Stack direction="row" spacing={1}>
                                    <div>
                                        <Tooltip title="Submit New Evidence" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                            <i onClick={resetEvidenceData} className="fas fa-file-alt fa-w-14" style={{ display: evidenceTabId !== 0 ? '' : 'none', color: '#fff' }}></i>
                                        </Tooltip>
                                    </div>
                                    <div>
                                        <Tooltip title="Save" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                            <i className="fas fa-save fa-w-14" style={{ display: evidenceTabId !== 0 ? 'none' : '', color: '#fff' }}></i>
                                        </Tooltip>
                                    </div>
                                </Stack>
                            </div>
                        </div>
                        <div className="mdw-inner-content-pre-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className={classes.mdwEvidenceInnerContentMiddleBody} style={{ flexDirection: 'row' }}>
                                <div className="mdw-create-inputs" style={{ width: '100%' }}>
                                    <div className="input-wrapper" style={{ marginBottom: '2.5%' }}>
                                        <Input.Select
                                            label="Type"
                                            value={evidenceTabType}
                                            items={[
                                                { id: 'other', name: 'Other' },
                                                { id: 'blood', name: 'Blood' },
                                                { id: 'casing', name: 'Casing' },
                                                { id: 'weapon', name: 'Weapon' },
                                                { id: 'photo', name: 'Photo' },
                                            ]}
                                        />
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
                                                label="Identifier"
                                                variant="standard"
                                                value={evidenceTabIdentifier}
                                                InputProps={{
                                                    readOnly: evidenceTabId !== 0 ? true : false,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <i className="fas fa-pen fa-w-16 fa-fw"></i>
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
                                                label="Description"
                                                variant="standard"
                                                value={evidenceTabDescription}
                                                InputProps={{
                                                    readOnly: evidenceTabId !== 0 ? true : false,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <i className="fas fa-clipboard fa-w-16 fa-fw"></i>
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
                                                label="CID"
                                                variant="standard"
                                                value={evidenceTabCID}
                                                InputProps={{
                                                    readOnly: evidenceTabId !== 0 ? true : false,
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
                            </div>
                        </div>
                    </div>
                    <div className={classes.mdwInnerContentDivider}></div>
                    <div className={classes.mdwEvidenceContentWrapperRight} style={{ overflowY: 'auto' }}>
                        <div className={classes.mdwEvidenceTagsContentRight}>
                            <div className={classes.mdwEvidenceInnerContentRightHeader} style={{ display: 'flex', width: '100%', padding: '8px', minHeight: '48px', justifyContent: 'space-between' }}>
                                <div className="mdw-evidence-inner-content-right-header-text-left">
                                    <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Tags</Typography>
                                </div>
                                <div className={classes.mdwEvidenceInnerContentRightHeaderTextRight}>
                                </div>
                            </div>
                            <div className={classes.mdwEvidenceInnerContentRightBody} style={{ flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset' }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Evidence;