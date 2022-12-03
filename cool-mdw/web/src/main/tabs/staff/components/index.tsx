import React, { useState, useEffect } from 'react';
import { FormControl, InputAdornment, ListItemIcon, Menu, MenuItem, Stack, TextField, Tooltip, Typography } from '@mui/material';
import useStyles from './index.styles';
import { fetchNui } from '../../../../utils/fetchNui';
import { isEnvBrowser } from "../../../../utils/misc";
import { useRecoilState } from 'recoil';
import { filteredStaffDataState, hireOfficerModalState, loadingModalState, staffDataState } from '../../../../atoms/atoms';

const Staff: React.FC = () => {
    const classes = useStyles();

    //Left Click to load profile
    //Right Click to fire

    const [isLoading, setLoading] = useState(false)
    const [loadingModal, setLoadingModal] = useRecoilState(loadingModalState)
    const [staffData, setStaffData] = useRecoilState(staffDataState)
    const [filteredStaffData, setFilteredStaffData] = useRecoilState(filteredStaffDataState)
    const [hireOfficerModal, setHireOfficerModal] = useRecoilState(hireOfficerModalState)
    const [currentStaff, setCurrentStaff] = useState([] as any)
    const [staffName, setStaffName] = useState("")
    const [staffCID, setStaffCID] = useState("")
    const [staffCallsign, setStaffCallsign] = useState("")
    const [staffRank, setStaffRank] = useState("")
    const [curOfficerCID, setCurOfficerCID] = useState("")

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        if (!isEnvBrowser()) {
            fetchNui('arp-mdw:fetchStaff', {}).then(resData => {
                setStaffData(resData.data)
                setFilteredStaffData(resData.data)
            })
        }
    }, []); //setStaffData, setFilteredStaffData

    const searchStaff = (searchValue) => {
        if (searchValue !== '') {
            const filteredStaff = staffData.filter((item) => {
                return (
                    item.cid?.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.name?.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.callsign?.toString().toLowerCase().startsWith(searchValue.toLowerCase())
                )
            })
            setFilteredStaffData(filteredStaff)
        } else {
            setFilteredStaffData(staffData)
        }
    }

    const loadStaff = (value) => {
        setLoadingModal(true)
        fetchNui('arp-mdw:loadStaff', { value: value }).then(resData => {
            setLoading(false)
            setCurrentStaff(resData.data.staff)

            setStaffName("")
            setStaffCID("")
            setStaffCallsign("")
            setStaffRank("1")

            if (resData.data.staff.name !== undefined || resData.data.staff.name !== null) {
                setStaffName(resData.data.staff.name)
            }

            if (resData.data.staff.cid !== undefined || resData.data.staff.cid !== null) {
                setStaffCID(resData.data.staff.cid)
            }

            if (resData.data.staff.callsign !== undefined || resData.data.staff.callsign !== null) {
                setStaffCallsign(resData.data.staff.callsign)
            }

            if (resData.data.staff.rank !== undefined || resData.data.staff.rank !== null) {
                setStaffRank(resData.data.staff.rank)
            }

            setLoadingModal(false)
        })
    }

    const handleSaveStaff = () => {
        setLoadingModal(true)

        if (currentStaff.id === undefined || currentStaff.id === null) {
            setLoadingModal(false)
            return
        }

        fetchNui('arp-mdw:editStaff', { id: currentStaff.cid, callsign: staffCallsign, rank: staffRank }).then(resData => {
            setLoading(false)
            setCurrentStaff(resData.data.staff)

            setStaffName("")
            setStaffCID("")
            setStaffCallsign("")
            setStaffRank("1")

            if (resData.data.staff.name !== undefined || resData.data.staff.name !== null) {
                setStaffName(resData.data.staff.name)
            }

            if (resData.data.staff.cid !== undefined || resData.data.staff.cid !== null) {
                setStaffCID(resData.data.staff.cid)
            }

            if (resData.data.staff.callsign !== undefined || resData.data.staff.callsign !== null) {
                setStaffCallsign(resData.data.staff.callsign)
            }

            if (resData.data.staff.rank !== undefined || resData.data.staff.rank !== null) {
                setStaffRank(resData.data.staff.rank)
            }

            setLoadingModal(false)
        })
    }

    const handleClickStaff = (e: any, cid: any) => {
        if(e.type === "click") {
            loadStaff(cid)
        } else if(e.type === "contextmenu") {
            setAnchorEl(e.currentTarget);
            setCurOfficerCID(cid)
        }
    }

    const handleFireStaff = () => {
        setAnchorEl(null);
        setLoadingModal(true)
        fetchNui('arp-mdw:fireStaff', { cid: curOfficerCID }).then(resData => {
            setStaffData(resData.data)
            setFilteredStaffData(resData.data)
            setCurOfficerCID("")
            setLoadingModal(false)
        })
    }

    const handleClose = () => {
        setAnchorEl(null)
        setCurOfficerCID("")
    }

    return (
        <>
            <div className={classes.mdwStaffOuterContent}>
                <div className={classes.mdwStaffInnerContent}>
                    <div className={classes.mdwStaffInnerContentLeft}>
                        <div className={classes.mdwStaffInnerContentLeftHeader}>
                            <div className="mdw-staff-inner-content-left-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Staff</Typography>
                            </div>
                            <div className={classes.mdwStaffInnerContentLeftHeaderTextRight}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Tooltip title="Hire" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                        <i onClick={() => setHireOfficerModal(true)} className="fas fa-plus fa-w-14" style={{ color: '#fff' }}></i>
                                    </Tooltip>
                                </div>
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
                                            onChange={(e) => searchStaff(e.target.value)}
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
                        <div className={classes.mdwStaffInnerContentLeftBody}>
                        <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={() => handleFireStaff()}>
                                    <ListItemIcon>
                                        <i className="fas fa-times"></i>
                                    </ListItemIcon>
                                    <Typography variant="inherit" style={{ color: '#fff' }}>Fire</Typography>
                                </MenuItem>
                            </Menu>
                            {filteredStaffData && filteredStaffData.length > 0 ? (
                                filteredStaffData.map((staff) => (
                                    <>
                                        <div onClick={(e) => handleClickStaff(e, staff.cid)} onContextMenu={(e) => handleClickStaff(e, staff.cid)} key={staff.id} id={staff.id} className="component-paper cursor-pointer" style={{ width: '100%', borderBottom: '0px solid #fff', borderRadius: '0px', backgroundColor: '#222831' }}>
                                            <div className="main-container">
                                                <div className="details">
                                                    <div className="description">
                                                        <div className="flex-row">
                                                            <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>({staff.callsign}) {staff.name}</Typography>
                                                        </div>
                                                        <div className="flex-row">
                                                            <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>State ID: {staff.cid}</Typography>
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
                    <div className={classes.mdwStaffInnerContentMiddle}>
                        <div className={classes.mdwStaffInnerContentMiddleHeader}>
                            <div className="mdw-staff-inner-content-middle-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>{currentStaff.id !== undefined ? `Edit Staff (#${currentStaff.id})` : "Staff"}</Typography>
                            </div>
                            <div className={classes.mdwStaffInnerContentMiddleHeaderTextRight} style={{ paddingRight: '0px' }}>
                                <Stack direction="row" spacing={1}>
                                    <div>
                                        <Tooltip title="Save Staff" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                            <i onClick={() => handleSaveStaff()} className="fas fa-save fa-w-14" style={{ display: currentStaff.id !== undefined ? '' : 'none', color: '#fff' }}></i>
                                        </Tooltip>
                                    </div>
                                </Stack>
                            </div>
                        </div>
                        <div className="mdw-inner-content-pre-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className={classes.mdwStaffInnerContentMiddleBody} style={{ flexDirection: 'row' }}>
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
                                                label="Name"
                                                variant="standard"
                                                value={staffName}
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
                                                value={staffCID}
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
                                                label="Callsign"
                                                variant="standard"
                                                value={staffCallsign}
                                                onChange={(e) => setStaffCallsign(e.target.value)}
                                                InputProps={{
                                                    readOnly: staffData.id !== undefined ? false : true,
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
                                            <TextField id="outlined-select-currency" variant='standard' select label="Rank" value={staffRank} onChange={(e) => setStaffRank(e.target.value)} sx={{
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
                            </div>
                        </div>
                    </div>
                    <div className={classes.mdwInnerContentDivider}></div>
                    <div className={classes.mdwStaffContentWrapperRight} style={{ overflowY: 'auto' }}>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Staff;