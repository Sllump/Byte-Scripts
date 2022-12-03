import React, { useState, useEffect } from 'react';
import { FormControl, InputAdornment, Stack, TextField, Tooltip, Typography } from '@mui/material';
import useStyles from './index.styles';
import { fetchNui } from '../../../../utils/fetchNui';
import { isEnvBrowser } from "../../../../utils/misc";
import { useRecoilState } from 'recoil';
import { loadingModalState } from '../../../../atoms/atoms';
import RichMarkdownEditor from 'rich-markdown-editor';

const DMV: React.FC = () => {
    const classes = useStyles();

    const [isLoading, setLoading] = useState(false)
    const [vehicleSearchData, setVehicleSearchData] = useState([])
    const [loadingModal, setLoadingModal] = useRecoilState(loadingModalState)
    const [vehicleData, setVehicleData] = useState({} as any)
    const [vehiclePlate, setVehiclePlate] = useState("")
    const [vehicleOwner, setVehicleOwner] = useState("")
    const [vehicleInfo, setVehicleInfo] = useState("")
    const [vehicleImage, setVehicleImage] = useState("")
    const [vehicleInfoContent, setVehicleInfoContent] = useState("")

    useEffect(() => {
        if (!isEnvBrowser()) {
            setVehicleData([])
            setVehicleInfo("")
            setVehicleInfoContent("")
        }
    }, []);

    const searchVehicles = (value) => {
        if (value === "" || value === undefined) {
            setLoading(false)
            setVehicleSearchData([])
            return
        }
        setVehicleSearchData([])
        setLoading(true)
        fetchNui('arp-mdw:searchVehicles', { value: value }).then(resData => {
            setLoading(false)
            setVehicleSearchData(resData.data)
        })
    }

    const loadVehicle = (value) => {
        setLoadingModal(true)
        fetchNui('arp-mdw:loadVehicle', { value: value }).then(resData => {
            setLoading(false)
            setVehicleData(resData.data.vehicle)

            setVehiclePlate("")
            setVehicleOwner("")
            setVehicleImage("")
            setVehicleInfo("Content goes here...")
            setVehicleInfoContent("Content goes here...")

            if (resData.data.vehicle.license_plate !== undefined || resData.data.vehicle.license_plate !== null) {
                setVehiclePlate(resData.data.vehicle.license_plate)
            }

            if (resData.data.vehicle.cid !== undefined || resData.data.vehicle.cid !== null) {
                setVehicleOwner(resData.data.vehicle.cid)
            }

            if (resData.data.vehicle.vehiclepic !== undefined || resData.data.vehicle.vehiclepic !== null) {
                setVehicleImage(resData.data.vehicle.vehiclepic)
            }

            if (resData.data.vehicle.information !== undefined || resData.data.vehicle.information !== null) {
                setVehicleInfo(resData.data.vehicle.information)
            }

            setLoadingModal(false)
        })
    }

    const handleSaveVehicle = () => {
        setLoadingModal(true)

        if(vehicleData.id === undefined || vehicleData.id === null) {
            setLoadingModal(false)
            return
        }

        fetchNui('arp-mdw:editVehicle', { id: vehicleData.id, image: vehicleImage, info: vehicleInfoContent }).then(resData => {            
            setLoading(false)
            setVehicleData(resData.data.vehicle)

            setVehiclePlate("")
            setVehicleOwner("")
            setVehicleImage("")
            setVehicleInfo("Content goes here...")
            setVehicleInfoContent("Content goes here...")

            if (resData.data.vehicle.license_plate !== undefined || resData.data.vehicle.license_plate !== null) {
                setVehiclePlate(resData.data.vehicle.license_plate)
            }

            if (resData.data.vehicle.cid !== undefined || resData.data.vehicle.cid !== null) {
                setVehicleOwner(resData.data.vehicle.cid)
            }

            if (resData.data.vehicle.vehiclepic !== undefined || resData.data.vehicle.vehiclepic !== null) {
                setVehicleImage(resData.data.vehicle.vehiclepic)
            }

            if (resData.data.vehicle.information !== undefined || resData.data.vehicle.information !== null) {
                setVehicleInfo(resData.data.vehicle.information)
            }

            setLoadingModal(false)
        })
    }

    const updateVehicleInfo = (e: any) => {
        let func = e
        let value = func()
        setVehicleInfoContent(value)
    }

    return (
        <>
            <div className={classes.mdwDmvOuterContent}>
                <div className={classes.mdwDmvInnerContent}>
                    <div className={classes.mdwDmvInnerContentLeft}>
                        <div className={classes.mdwDmvInnerContentLeftHeader}>
                            <div className="mdw-dmv-inner-content-left-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Vehicles</Typography>
                            </div>
                            <div className={classes.mdwDmvInnerContentLeftHeaderTextRight}>
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
                                            onChange={(e) => searchVehicles(e.target.value)}
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
                        <div className={classes.mdwDmvInnerContentLeftBody}>
                            {vehicleSearchData && vehicleSearchData.length > 0 ? (
                                vehicleSearchData.map((vehicle) => (
                                    <>
                                        <div onClick={() => loadVehicle(vehicle.id)} key={vehicle.id} id={vehicle.id} className="component-paper cursor-pointer" style={{ width: '100%', borderBottom: '0px solid #fff', borderRadius: '0px', backgroundColor: '#222831' }}>
                                            <div className="main-container">
                                                <div className="details">
                                                    <div className="description">
                                                        <div className="flex-row">
                                                            <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>{vehicle.model} - {vehicle.license_plate}</Typography>
                                                        </div>

                                                        <div className="flex-row">
                                                            <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>ID: {vehicle.id}</Typography>
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
                    <div className={classes.mdwDmvInnerContentMiddle}>
                        <div className={classes.mdwDmvInnerContentMiddleHeader}>
                            <div className="mdw-dmv-inner-content-middle-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>{vehicleData.id !== undefined ? `Edit Vehicle (#${vehicleData.id})` : "Vehicle"}</Typography>
                            </div>
                            <div className={classes.mdwDmvInnerContentMiddleHeaderTextRight} style={{ paddingRight: '0px' }}>
                                <Stack direction="row" spacing={1}>
                                    <div>
                                        <Tooltip title="Save Vehicle" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                            <i onClick={() => handleSaveVehicle()} className="fas fa-save fa-w-14" style={{ display: vehicleData.id !== undefined ? '' : 'none', color: '#fff' }}></i>
                                        </Tooltip>
                                    </div>
                                </Stack>
                            </div>
                        </div>
                        <div className="mdw-inner-content-pre-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className={classes.mdwDmvInnerContentMiddleBody} style={{ flexDirection: 'row' }}>
                                <div className={classes.mdwCreateImage}>
                                    <img alt="" src={vehicleData.length > 0 && vehicleData.vehiclepic !== null || vehicleData.vehiclepic !== undefined ? `${vehicleData.vehiclepic}` : "https://media.discordapp.net/attachments/925804352260685875/969132283846094868/placeholder-single.png"} style={{ height: '163px', width: '185px', maxHeight: '163px', maxWidth: '185px' }}></img>
                                </div>
                                <div className="mdw-create-inputs" style={{ width: '85%' }}>
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
                                                label="License Plate"
                                                variant="standard"
                                                value={vehiclePlate}
                                                InputProps={{
                                                    readOnly: true,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <i className="fas fa-car fa-w-16 fa-fw"></i>
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
                                                value={vehicleOwner}
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
                                                label="Vehicle Image URL"
                                                variant="standard"
                                                value={vehicleImage}
                                                onChange={(e) => setVehicleImage(e.target.value)}
                                                InputProps={{
                                                    readOnly: vehicleData.id !== undefined ? false : true,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <i className="fas fa-clipboard fa-w-16 fa-fw"></i>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </FormControl>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mdw-create-document" style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', color: '#fff' }}>
                            <div className="mdw-creat-document-inner-cont" style={{ width: '97%', height: '99%' }}>
                                <RichMarkdownEditor
                                    placeholder="Document content goes here..."
                                    dark={true}
                                    onChange={updateVehicleInfo}
                                    value={vehicleInfo}
                                    className={classes.checkbox}
                                    disableExtensions={["code_inline", "link", "ordered_list", "checkbox_item", "checkbox_list", "image", "placeholder", "container_notice", "table", "emoji", "td", "th", "tr", "hr", "code_fence", "code_block"]}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={classes.mdwInnerContentDivider}></div>
                    <div className={classes.mdwDmvContentWrapperRight} style={{ overflowY: 'auto' }}>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DMV;