import React, { useState, useEffect } from 'react';
import { Chip, FormControl, InputAdornment, Stack, TextField, Tooltip, Typography } from '@mui/material';
import useStyles from './index.styles';
import { fetchNui } from '../../../../utils/fetchNui';
import { isEnvBrowser } from "../../../../utils/misc";
import { useRecoilState } from 'recoil';
import { assignLicenseModalState, curJobState, licenseDataState, loadingModalState, mdwPublicState, profileIdState } from '../../../../atoms/atoms';
import RichMarkdownEditor from 'rich-markdown-editor';

const Profiles: React.FC = () => {
    const classes = useStyles();

    const [mdwPublic, setMdwPublic] = useRecoilState(mdwPublicState)
    const [isLoading, setLoading] = useState(false)
    const [assignLicenseModal, setAssignLicenseModal] = useRecoilState(assignLicenseModalState)
    const [profileSearchData, setProfileSearchData] = useState([])
    const [loadingModal, setLoadingModal] = useRecoilState(loadingModalState)

    const [profileData, setProfileData] = useState({} as any)
    const [licenseData, setLicenseData] = useRecoilState(licenseDataState)
    const [tagsData, setTagsData] = useState({} as any)
    const [vehiclesData, setVehiclesData] = useState({} as any)
    const [housingData, setHousingData] = useState({} as any)
    const [storagesData, setStoragesData] = useState({} as any)
    const [employmentData, setEmploymentData] = useState({} as any)
    const [priorsData, setPriorsData] = useState({} as any)

    const [profileInfo, setProfileInfo] = useState("")
    const [profileName, setProfileName] = useState("")
    const [profileImage, setProfileImage] = useState("")
    const [profileId, setProfileId] = useRecoilState(profileIdState)
    const [profileInfoContent, setProfileInfoContent] = useState("")
    const [curJob, setCurJob] = useRecoilState(curJobState)

    useEffect(() => {
        if (!isEnvBrowser()) {
            setProfileData([])
            setLicenseData([])
            setTagsData([])
            setVehiclesData([])
            setHousingData([])
            setEmploymentData([])
            setPriorsData([])
            setProfileInfo("")
            setProfileInfoContent("")
            setProfileName("")
            setProfileImage("")
            setProfileId("")
        }
    }, []);

    const searchProfiles = (value) => {
        if (value === "" || value === undefined) {
            setLoading(false)
            setProfileSearchData([])
            return
        }
        setProfileSearchData([])
        setLoading(true)
        fetchNui('arp-mdw:searchProfiles', { value: value }).then(resData => {
            setLoading(false)
            setProfileSearchData(resData.data)
        })
    }

    const loadProfile = (value) => {
        setLoadingModal(true)
        fetchNui('arp-mdw:loadProfile', { value: value }).then(resData => {
            setLoading(false)
            setProfileData(resData.data.profile)
            setLicenseData(resData.data.licenses)
            setVehiclesData(resData.data.vehicles)
            setHousingData(resData.data.housing)
            setStoragesData(resData.data.storages)
            setEmploymentData(resData.data.employment)
            setPriorsData(resData.data.priors)

            setProfileInfo("")
            setProfileName("")
            setProfileImage("")
            setProfileId("")

            if (resData.data.profile.first_name !== undefined || resData.data.profile.first_name !== null && resData.data.profile.last_name !== undefined || resData.data.profile.last_name !== null) {
                setProfileName(`${resData.data.profile.first_name} ${resData.data.profile.last_name} `)
            }

            if (resData.data.profile.profilepic !== undefined || resData.data.profile.profilepic !== null) {
                setProfileImage(resData.data.profile.profilepic)
            }

            if (resData.data.profile.id !== undefined || resData.data.profile.id !== null) {
                setProfileId(resData.data.profile.id)
            }

            if (resData.data.profile.information !== undefined || resData.data.profile.information !== null) {
                setProfileInfo(resData.data.profile.information)
            }

            setLoadingModal(false)
        })
    }

    const handleSaveProfile = (createprofile) => {
        if (!createprofile) {
            setLoadingModal(true)
            fetchNui('arp-mdw:editProfile', { id: profileId, name: profileName, image: profileImage, info: profileInfoContent }).then(resData => {
                setLoading(false)
                setProfileData(resData.data.profile)
                setLicenseData(resData.data.licenses)
                setVehiclesData(resData.data.vehicles)
                setHousingData(resData.data.housing)
                setEmploymentData(resData.data.employment)
                setPriorsData(resData.data.priors)

                setProfileInfo("")
                setProfileName("")
                setProfileImage("")
                setProfileId("")

                if (resData.data.profile.first_name !== undefined || resData.data.profile.first_name !== null && resData.data.profile.last_name !== undefined || resData.data.profile.last_name !== null) {
                    setProfileName(`${resData.data.profile.first_name} ${resData.data.profile.last_name} `)
                }

                if (resData.data.profile.profilepic !== undefined || resData.data.profile.profilepic !== null) {
                    setProfileImage(resData.data.profile.profilepic)
                }

                if (resData.data.profile.id !== undefined || resData.data.profile.id !== null) {
                    setProfileId(resData.data.profile.id)
                }

                if (resData.data.profile.information !== undefined || resData.data.profile.information !== null) {
                    setProfileInfo(resData.data.profile.information)
                }

                setLoadingModal(false)
            })
        }
    }

    const handleRemoveLicense = (type) => {
        fetchNui('arp-mdw:removeLicense', { cid: profileId, type: type }).then(resData => {
            loadProfile(profileId)
        })
    }

    const resetProfileData = () => {
        setProfileData([])
        setLicenseData([])
        setTagsData([])
        setVehiclesData([])
        setHousingData([])
        setEmploymentData([])
        setPriorsData([])
        setProfileInfo("")
        setProfileInfoContent("")
        setProfileName("")
        setProfileImage("")
        setProfileId("")
    }

    const updateProfileInfo = (e: any) => {
        let func = e
        let value = func()

        setProfileInfoContent(value)
    }

    return (
        <>
            <div className={classes.mdwProfilesOuterContent}>
                <div className={classes.mdwProfilesInnerContent}>
                    <div className={classes.mdwProfilesInnerContentLeft}>
                        <div className={classes.mdwProfilesInnerContentLeftHeader}>
                            <div className="mdw-profiles-inner-content-left-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Profiles</Typography>
                            </div>
                            <div className={classes.mdwProfilesInnerContentLeftHeaderTextRight}>
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
                                            onChange={(e) => searchProfiles(e.target.value)}
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
                        <div className={classes.mdwProfilesInnerContentLeftBody}>
                            {profileSearchData && profileSearchData.length > 0 ? (
                                profileSearchData.map((profile) => (
                                    <>
                                        <div onClick={() => loadProfile(profile.id)} key={profile.id} id={profile.id} className="component-paper cursor-pointer" style={{ width: '100%', borderBottom: '0px solid #fff', borderRadius: '0px', backgroundColor: '#222831' }}>
                                            <div className="main-container">
                                                <div className="details">
                                                    <div className="description">

                                                        <div className="flex-row">
                                                            <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>{profile.first_name} {profile.last_name}</Typography>
                                                        </div>

                                                        <div className="flex-row">
                                                            <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>ID: {profile.id}</Typography>
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
                    <div className={classes.mdwProfilesInnerContentMiddle}>
                        <div className={classes.mdwProfilesInnerContentMiddleHeader}>
                            <div className="mdw-profiles-inner-content-middle-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>{profileData.id !== undefined && !mdwPublic ? `Edit Profile (#${profileData.id})` : mdwPublic ? "Profile" : 'Create Profile'}</Typography>
                            </div>
                            <div className={classes.mdwProfilesInnerContentMiddleHeaderTextRight} style={{ paddingRight: '0px' }}>
                                <Stack direction="row" spacing={1}>
                                    <div>
                                        <Tooltip title="Create New Profile" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                            <i onClick={resetProfileData} className="fas fa-file-alt fa-w-14" style={{ display: profileData.id !== undefined && !mdwPublic ? '' : 'none', color: '#fff' }}></i>
                                        </Tooltip>
                                    </div>
                                    <div>
                                        <Tooltip title="Save Profile" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                            <i onClick={() => handleSaveProfile(profileData.id !== undefined ? false : true)} className="fas fa-save fa-w-14" style={{ display: mdwPublic ? 'none' : '', color: '#fff' }}></i>
                                        </Tooltip>
                                    </div>
                                </Stack>
                            </div>
                        </div>
                        <div className="mdw-inner-content-pre-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className={classes.mdwProfilesInnerContentMiddleBody} style={{ flexDirection: 'row' }}>
                                <div className={classes.mdwCreateImage}>
                                    <img alt="" src={profileData.length > 0 && profileData.profilepic !== null || profileData.profilepic !== undefined ? `${profileData.profilepic}` : "https://i.imgur.com/wxNT3y2.jpg"} style={{ height: '163px', width: '185px' }}></img>
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
                                                label="State ID"
                                                variant="standard"
                                                value={profileId}
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
                                                value={profileName}
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
                                    <div className="input-wrapper" style={{ marginBottom: '2.5%', display: mdwPublic ? 'none' : '' }}>
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
                                                label="Profile Image URL"
                                                variant="standard"
                                                value={profileImage}
                                                onChange={(e) => setProfileImage(e.target.value)}
                                                InputProps={{
                                                    readOnly: mdwPublic || curJob === "ems",
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
                        <div className="mdw-create-document" style={{ display: mdwPublic ? 'none' : 'flex', width: '100%', height: '100%', justifyContent: 'center', color: '#fff' }}>
                            <div className="mdw-creat-document-inner-cont" style={{ width: '97%', height: '99%' }}>
                                <RichMarkdownEditor
                                    placeholder="Document content goes here..."
                                    dark={true}
                                    onChange={updateProfileInfo}
                                    value={profileInfo}
                                    className={classes.checkbox}
                                    disableExtensions={["code_inline", "link", "ordered_list", "checkbox_item", "checkbox_list", "image", "placeholder", "container_notice", "table", "emoji", "td", "th", "tr", "hr", "code_fence", "code_block"]}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={classes.mdwInnerContentDivider}></div>
                    <div className={classes.mdwProfilesContentWrapperRight} style={{ overflowY: 'auto' }}>
                        <div className={classes.mdwProfilesLicensesContentRight}>
                            <div className={classes.mdwProfilesInnerContentRightHeader} style={{ display: 'flex', width: '100%', padding: '8px', minHeight: '48px', justifyContent: 'space-between' }}>
                                <div className="mdw-profiles-inner-content-right-header-text-left">
                                    <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Licenses</Typography>
                                </div>
                                <div className={classes.mdwProfilesInnerContentRightHeaderTextRight} style={{ paddingRight: '0px' }}>
                                    <div>
                                        <Tooltip title="Assign License" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                            <i onClick={() => setAssignLicenseModal(true)} className="fas fa-plus fa-w-14" style={{ display: profileData.id !== undefined && !mdwPublic && curJob !== "ems" ? '' : 'none', color: '#fff' }}></i>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.mdwProfilesInnerContentRightBody} style={{ display: licenseData && licenseData.length > 0 ? '' : 'none', flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset' }}>
                                {licenseData && licenseData.length > 0 ? (
                                    licenseData.map((license) => (
                                        <>
                                            {mdwPublic || curJob === "ems" ? (
                                                <>
                                                    <div style={{ paddingRight: '1.5%', paddingBottom: '1.5%' }}>
                                                        <Chip label={`${license.type} License`} sx={{ backgroundColor: '#fff', color: '#000' }} />
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div style={{ paddingRight: '1.5%', paddingBottom: '1.5%' }}>
                                                        <Chip label={`${license.type} License`} onDelete={() => handleRemoveLicense(license.type)} sx={{ backgroundColor: '#fff', color: '#000', "& .MuiChip-deleteIcon": { color: '#000' }, "& .MuiChip-deleteIcon:hover": { color: 'rgba(0, 0, 0, 0.5)' } }} />
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className={classes.mdwProfilesTagsContentRight}>
                            <div className={classes.mdwProfilesInnerContentRightHeader} style={{ display: 'flex', width: '100%', padding: '8px', minHeight: '48px', justifyContent: 'space-between' }}>
                                <div className="mdw-profiles-inner-content-right-header-text-left">
                                    <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Tags</Typography>
                                </div>
                                <div className={classes.mdwProfilesInnerContentRightHeaderTextRight} style={{ paddingRight: '0px' }}>
                                    <div>
                                        <Tooltip title="Add Tag" placement="top" sx={{ backgroundColor: 'rgba(97, 97, 97, 0.9)' }} arrow>
                                            <i className="fas fa-plus fa-w-14" style={{ display: profileData.id !== undefined && !mdwPublic && curJob !== "ems" ? '' : 'none', color: '#fff' }}></i>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.mdwProfilesInnerContentRightBody} style={{ display: 'none', flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset' }}>
                            </div>
                        </div>
                        <div className={classes.mdwProfilesVehiclesContentRight}>
                            <div className={classes.mdwProfilesInnerContentRightHeader} style={{ display: 'flex', width: '100%', padding: '8px', minHeight: '48px', justifyContent: 'space-between' }}>
                                <div className="mdw-profiles-inner-content-right-header-text-left">
                                    <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Vehicles</Typography>
                                </div>
                                <div className={classes.mdwProfilesInnerContentRightHeaderTextRight}>
                                </div>
                            </div>
                            <div className={classes.mdwProfilesInnerContentRightBody} style={{ display: profileData.id !== undefined ? '' : 'none', flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset' }}>
                                {vehiclesData && vehiclesData.length > 0 ? (
                                    vehiclesData.map((vehicle) => (
                                        <div style={{ paddingRight: '1.5%', paddingBottom: '1.5%' }}>
                                            <Chip label={`${vehicle.license_plate} - ${vehicle.model}`} sx={{ backgroundColor: '#fff', color: '#000' }} />
                                        </div>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className={classes.mdwProfilesHousingContentRight}>
                            <div className={classes.mdwProfilesInnerContentRightHeader} style={{ display: 'flex', width: '100%', padding: '8px', minHeight: '48px', justifyContent: 'space-between' }}>
                                <div className="mdw-profiles-inner-content-right-header-text-left">
                                    <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Housing</Typography>
                                </div>
                                <div className={classes.mdwProfilesInnerContentRightHeaderTextRight}>
                                </div>
                            </div>
                            <div className={classes.mdwProfilesInnerContentRightBody} style={{ display: profileData.id !== undefined ? '' : 'none', flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset' }}>
                                {housingData && housingData.length > 0 ? (
                                    housingData.map((house) => (
                                        <div style={{ paddingRight: '1.5%', paddingBottom: '1.5%' }}>
                                            <Chip label={`${house.property_name} (${house.property_category})`} sx={{ backgroundColor: '#fff', color: '#000' }} />
                                        </div>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className={classes.mdwProfilesStorageContentRight}>
                            <div className={classes.mdwProfilesInnerContentRightHeader} style={{ display: 'flex', width: '100%', padding: '8px', minHeight: '48px', justifyContent: 'space-between' }}>
                                <div className="mdw-profiles-inner-content-right-header-text-left">
                                    <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Storage Access</Typography>
                                </div>
                                <div className={classes.mdwProfilesInnerContentRightHeaderTextRight}>
                                </div>
                            </div>
                            <div className={classes.mdwProfilesInnerContentRightBody} style={{ display: profileData.id !== undefined ? '' : 'none', flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset' }}>
                                {storagesData && storagesData.length > 0 ? (
                                    storagesData.map((storage) => (
                                        <div style={{ paddingRight: '1.5%', paddingBottom: '1.5%' }}>
                                            <Chip label={`${storage.storage_id}`} sx={{ backgroundColor: '#fff', color: '#000' }} />
                                        </div>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className={classes.mdwProfilesEmploymentContentRight}>
                            <div className={classes.mdwProfilesInnerContentRightHeader} style={{ display: 'flex', width: '100%', padding: '8px', minHeight: '48px', justifyContent: 'space-between' }}>
                                <div className="mdw-profiles-inner-content-right-header-text-left">
                                    <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Employment</Typography>
                                </div>
                                <div className={classes.mdwProfilesInnerContentRightHeaderTextRight}>
                                </div>
                            </div>
                            <div className={classes.mdwProfilesInnerContentRightBody} style={{ display: profileData.id !== undefined ? '' : 'none', flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset' }}>
                                {employmentData && employmentData.length > 0 ? (
                                    employmentData.map((employed) => (
                                        <div style={{ paddingRight: '1.5%', paddingBottom: '1.5%' }}>
                                            <Chip label={`${employed.business_name} (${employed.business_role})`} sx={{ backgroundColor: '#fff', color: '#000' }} />
                                        </div>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className={classes.mdwProfilesPriorsContentRight}>
                            <div className={classes.mdwProfilesInnerContentRightHeader} style={{ display: 'flex', width: '100%', padding: '8px', minHeight: '48px', justifyContent: 'space-between' }}>
                                <div className="mdw-profiles-inner-content-right-header-text-left">
                                    <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Priors</Typography>
                                </div>
                                <div className={classes.mdwProfilesInnerContentRightHeaderTextRight}>
                                </div>
                            </div>
                            <div className={classes.mdwProfilesInnerContentRightBody} style={{ display: profileData.id !== undefined ? '' : 'none', flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset' }}>
                                {priorsData && priorsData.length > 0 ? (
                                    priorsData.map((prior) => (
                                        <div style={{ paddingRight: '1.5%', paddingBottom: '1.5%' }}>
                                            <Chip label={`(${prior.times}) ${prior.charge}`} sx={{ backgroundColor: '#fff', color: '#000' }} />
                                        </div>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profiles;