import React, { useState, useEffect } from 'react';
import { FormControl, InputAdornment, TextField, Typography, MenuItem, ListItemIcon, Menu, Tooltip } from '@mui/material';
import useStyles from './index.styles';
import { fetchNui } from '../../../../utils/fetchNui';
import { isEnvBrowser } from "../../../../utils/misc";
import moment from 'moment';
import { createWarrantModalState, filteredWarrantsDataState, loadingModalState, warrantsDataState } from '../../../../atoms/atoms';
import { useRecoilState } from 'recoil';

const Dashboard: React.FC = () => {
    const classes = useStyles();

    const [warrants, setWarrants] = useRecoilState(warrantsDataState)
    const [filteredWarrants, setFilteredWarrants] = useRecoilState(filteredWarrantsDataState)
    const [curWarrantId, setCurWarrantId] = useState("")

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const [createWarrantModal, setCreateWarrantModal] = useRecoilState(createWarrantModalState)
    const [loadingModal, setLoadingModal] = useRecoilState(loadingModalState)

    useEffect(() => {
        if (!isEnvBrowser()) {
            fetchNui('arp-mdw:fetchWarrants', {}).then(resData => {
                setWarrants(resData.data)
                setFilteredWarrants(resData.data)
            })
        }
    }, []); //setWarrants, setFilteredWarrants

    const searchWarrants = (searchValue) => {
        if (searchValue !== '') {
            const filteredWarrants = warrants.filter((item) => {
                return (
                    item.id.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.name.toString().toLowerCase().startsWith(searchValue.toString().toLowerCase()) ||
                    item.incident.toString().toLowerCase().startsWith(searchValue.toString().toLowerCase())
                )
            })
            setFilteredWarrants(filteredWarrants)
        } else {
            setFilteredWarrants(warrants)
        }
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
        setAnchorEl(event.currentTarget)
        setCurWarrantId(id)
    };

    const handleClose = () => {
        setAnchorEl(null)
        setCurWarrantId("")
    }

    const handleCreateWarant = () => {
        setAnchorEl(null)
        setCurWarrantId("")
        setCreateWarrantModal(true)
    }

    const handleExtendWarant = () => {
        setAnchorEl(null)
        setCurWarrantId("")
    }

    const handleDeleteWarant = () => {
        setAnchorEl(null)
        setCurWarrantId("")
        setLoadingModal(true)
        fetchNui('arp-mdw:deleteWarrant', { id: curWarrantId }).then(resData => {
            setLoadingModal(false)
            setWarrants(resData.data)
            setFilteredWarrants(resData.data)
        })
    }

    /*
                                    <MenuItem onClick={() => handleExtendWarant()}>
                                    <ListItemIcon>
                                        <i className="fas fa-clock"></i>
                                    </ListItemIcon>
                                    <Typography variant="inherit" style={{ color: '#fff' }}>Extend Warrant</Typography>
                                </MenuItem>
    */

    return (
        <>
            <div className={classes.mdwDashboardOuterContent}>
                <div className={classes.mdwDashboardInnerContent}>
                    <div className={classes.mdwDashboardInnerContentLeft}>
                        <div className={classes.mdwDashboardInnerContentLeftHeader}>
                            <div className="mdw-dashboard-inner-content-left-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Warrants</Typography>
                            </div>
                            <div className={classes.mdwInnerContentLeftHeaderTextRight}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Tooltip title="Create Warrant" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                        <i onClick={handleCreateWarant} className="fas fa-plus fa-w-14" style={{ color: '#fff' }}></i>
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
                                            onChange={(e) => searchWarrants(e.target.value)}
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
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={() => handleCreateWarant()}>
                                    <ListItemIcon>
                                        <i className="fas fa-plus"></i>
                                    </ListItemIcon>
                                    <Typography variant="inherit" style={{ color: '#fff' }}>Create Warrant</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => handleDeleteWarant()}>
                                    <ListItemIcon>
                                        <i className="fas fa-times"></i>
                                    </ListItemIcon>
                                    <Typography variant="inherit" style={{ color: '#fff' }}>Delete Warrant</Typography>
                                </MenuItem>
                            </Menu>
                            {filteredWarrants && filteredWarrants.length > 0 ? (
                                filteredWarrants.map((warrant) => (
                                    <div className="component-paper cursor-pointer" style={{ width: '100%', borderBottom: '0px solid #fff', borderRadius: '0px', backgroundColor: '#222831' }} onClick={(e) => handleClick(e, warrant.id)}>
                                        <div className="main-container">
                                            <div className="image">
                                                <img alt="" src={warrant.image} style={{ height: '150px', maxHeight: '150px', minHeight: '150px' }}></img>
                                            </div>
                                            <div className="details">
                                                <div className="description">

                                                    <div className="flex-row">
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body1" gutterBottom>{warrant.name}</Typography>
                                                    </div>

                                                    <div className="flex-row">
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>{warrant.incident}</Typography>
                                                    </div>

                                                </div>
                                                <div className="align-bottom" style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
                                                    <div className="flex-row" style={{ justifyContent: 'space-between' }}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>ID: {warrant.id}</Typography>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>expires in {moment(moment().valueOf()).diff(Number(warrant.expiry) * 1000, 'days')}</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <>
                                </>
                            )}
                        </div>
                    </div>
                    <div className={classes.mdwInnerContentDivider}></div>
                    <div className={classes.mdwDashboardInnerContentMiddle}>
                        <div className={classes.mdwDashboardInnerContentMiddleHeader}>
                            <div className="mdw-dashboard-inner-content-middle-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>BOLO</Typography>
                            </div>
                            <div className={classes.mdwDashboardInnerContentMiddleHeaderTextRight}>
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
                        <div className={classes.mdwDashboardInnerContentMiddleBody}>
                        </div>
                    </div>
                    <div className={classes.mdwInnerContentDivider}></div>
                    <div className={classes.mdwDashboardInnerContentRight}>
                        <div className={classes.mdwDashboardInnerContentRightHeader}>
                            <div className="mdw-dashboard-inner-content-right-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Bulletin Board</Typography>
                            </div>
                            <div className={classes.mdwDashboardInnerContentRightHeaderTextRight}>
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
                        <div className={classes.mdwDashboardInnerContentRight}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;