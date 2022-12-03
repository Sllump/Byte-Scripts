import React, { useEffect } from 'react';
import { FormControl, InputAdornment, TextField, Typography } from '@mui/material';
import useStyles from './index.styles';
import { fetchNui } from '../../../../utils/fetchNui';
import { isEnvBrowser } from "../../../../utils/misc";
import { useRecoilState } from 'recoil';
import { filteredPropertyDataState, propertyDataState } from '../../../../atoms/atoms';

const Properties: React.FC = () => {
    const classes = useStyles();

    const [propertyData, setPropertyData] = useRecoilState(propertyDataState)
    const [filteredPropertyData, setFilteredPropertyData] = useRecoilState(filteredPropertyDataState)

    useEffect(() => {
        if (!isEnvBrowser()) {
            fetchNui('arp-mdw:fetchProperties', {}).then(resData => {
                setPropertyData(resData.data)
                setFilteredPropertyData(resData.data)
            })
        }
    }, []);

    const searchProperties = (searchValue) => {
        if (searchValue !== '') {
            const filteredPropertyData = propertyData.filter((item) => {
                return (
                    item.name.toLowerCase().startsWith(searchValue.toLowerCase())
                )
            })
            setFilteredPropertyData(filteredPropertyData)
        } else {
            setFilteredPropertyData(propertyData)
        }
    }

    return (
        <>
            <div className={classes.mdwPropertiesOuterContent}>
                <div className={classes.mdwPropertiesInnerContent}>
                    <div className={classes.mdwPropertiesInnerContentLeft}>
                        <div className={classes.mdwPropertiesInnerContentLeftHeader}>
                            <div className="mdw-properties-inner-content-left-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Properties</Typography>
                            </div>
                            <div className={classes.mdwPropertiesInnerContentLeftHeaderTextRight}>
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
                                            onChange={(e) => searchProperties(e.target.value)}
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
                        <div className={classes.mdwPropertiesInnerContentLeftBody}>
                            {filteredPropertyData && filteredPropertyData.length > 0 ? (
                                filteredPropertyData.map((property) => (
                                    <div key={property.id} id={property.id} className="component-paper cursor-pointer" style={{ width: '100%', borderBottom: '0px solid #fff', borderRadius: '0px', backgroundColor: '#222831' }}>
                                        <div className="main-container">
                                            <div className="details">
                                                <div className="description">

                                                    <div className="flex-row" style={{ justifyContent: 'space-between' }}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>{property.name}</Typography>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>ID: {property.id}</Typography>
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
                    <div className={classes.mdwPropertiesInnerContentRight}>
                        <div className={classes.mdwPropertiesInnerContentRightHeader}>
                            <div className="mdw-properties-inner-content-right-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Property</Typography>
                            </div>
                            <div className="mdw-properties-inner-content-right-header-text-right">
                            </div>
                        </div>
                        <div className={classes.mdwPropertiesInnerContentRightBody}>
                        </div>
                    </div>
                    <div className={classes.mdwInnerContentDivider}></div>
                    <div className="mdw-properties-inner-content-right" style={{ backgroundColor: 'transparent' }}>
                        <div className="mdw-properties-inner-content-right-header">
                            <div className="mdw-properties-inner-content-right-header-text-left">
                            </div>
                            <div className="mdw-properties-inner-content-right-header-text-right">
                            </div>
                        </div>
                        <div className={classes.mdwPropertiesInnerContentRightBody}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Properties;