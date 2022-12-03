import React, { useEffect, useState } from 'react';
import { FormControl, InputAdornment, TextField, Typography } from '@mui/material';
import useStyles from './index.styles';
import { fetchNui } from '../../../../utils/fetchNui';
import { isEnvBrowser } from "../../../../utils/misc";
import { useRecoilState } from 'recoil';
import { businessDataState, employeeCountState, employeeDataState, filteredBusinessDataState, loadingModalState } from '../../../../atoms/atoms';

const Businesses: React.FC = () => {
    const classes = useStyles();

    const [loadingModal, setLoadingModal] = useRecoilState(loadingModalState)
    const [businesses, setBusinesses] = useRecoilState(businessDataState)
    const [filteredBusinesses, setFilteredBusinesses] = useRecoilState(filteredBusinessDataState)
    const [employeeData, setEmployeeData] = useRecoilState(employeeDataState)
    const [employeeDataCached, setEmployeeDataCached] = useState([])
    const [employeeCount, setEmployeeCount] = useRecoilState(employeeCountState)

    useEffect(() => {
        if (!isEnvBrowser()) {
            setEmployeeData([])
            setEmployeeCount(0)
            fetchNui('arp-mdw:fetchBusinesses', {}).then(resData => {
                setBusinesses(resData.data)
                setFilteredBusinesses(resData.data)
            })
        }
    }, []); //setBusinesses, setEmployeeCount, setEmployeeData, setFilteredBusinesses

    const searchBusinesses = (searchValue) => {
        if (searchValue !== '') {
            const filteredBusinesses = businesses.filter((item) => {
                return (
                    item.business_name.toLowerCase().startsWith(searchValue.toLowerCase()) ||
                    item.bank_id.toString().toLowerCase().startsWith(searchValue.toString().toLowerCase())
                )
            })
            setFilteredBusinesses(filteredBusinesses)
        } else {
            setFilteredBusinesses(businesses)
        }
    }

    const searchEmployees = (searchValue) => {
        if (searchValue !== '') {
            const allowed = ['employee_cid', 'employee_name', 'employee_role'];
            const list = employeeDataCached;
            const _searchValue = searchValue.toString().toLowerCase()

            const filtered = list
                .filter(obj =>
                    Object.keys(obj).some(k => allowed.includes(k))
                )
                .filter(obj =>
                    Object.values(obj)
                        .map(v => v.toString().toLocaleLowerCase())
                        .some(v => v.startsWith(_searchValue))
                )

            setEmployeeDataCached(filtered)
        } else {
            setEmployeeDataCached(employeeData)
        }
    }

    const loadBusiness = (value) => {
        setLoadingModal(true)
        fetchNui('arp-mdw:loadBusiness', { value: value }).then(resData => {
            setEmployeeData(resData.data.employees)
            setEmployeeDataCached(resData.data.employees)
            setEmployeeCount(resData.data.count)
            setLoadingModal(false)
        })
    }

    return (
        <>
            <div className={classes.mdwBusinessesOuterContent}>
                <div className={classes.mdwBusinessesInnerContent}>
                    <div className={classes.mdwBusinessesInnerContentLeft}>
                        <div className={classes.mdwBusinessesInnerContentLeftHeader}>
                            <div className="mdw-businesses-inner-content-left-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Business Directory</Typography>
                            </div>
                            <div className={classes.mdwBusinessesInnerContentLeftHeaderTextRight}>
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
                                            onChange={(e) => searchBusinesses(e.target.value)}
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
                        <div className={classes.mdwBusinessesInnerContentLeftBody}>
                            {filteredBusinesses && filteredBusinesses.length > 0 ? (
                                filteredBusinesses.map((business) => (
                                    <div onClick={() => loadBusiness(business.business_id)} key={business.business_id} id={business.business_id} className="component-paper cursor-pointer" style={{ width: '100%', borderBottom: '0px solid #fff', borderRadius: '0px', backgroundColor: '#222831' }}>
                                        <div className="main-container">
                                            <div className="details">
                                                <div className="description">

                                                    <div className="flex-row" style={{ justifyContent: 'space-between' }}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>{business.business_name}</Typography>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>Account ID: {business.bank_id}</Typography>
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
                    <div className={classes.mdwBusinessesInnerContentRight}>
                        <div className={classes.mdwBusinessesInnerContentRightHeader}>
                            <div className="mdw-businesses-inner-content-right-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Employee List ({employeeCount === 0 || employeeCount === undefined ? '0' : employeeCount})</Typography>
                            </div>
                            <div className="mdw-businesses-inner-content-right-header-text-right">
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
                                            onChange={(e) => searchEmployees(e.target.value)}
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
                        <div className={classes.mdwBusinessesInnerContentRightBody}>
                            {employeeDataCached && employeeDataCached.length > 0 ? (
                                employeeDataCached.map((employee) => (
                                    <div key={employee.employee_cid} className="component-paper cursor-pointer" style={{ width: '100%', borderBottom: '0px solid #fff', borderRadius: '0px', backgroundColor: '#222831' }}>
                                        <div className="main-container">
                                            <div className="details">
                                                <div className="description">

                                                    <div className="flex-row" style={{ justifyContent: 'space-between' }}>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>{employee.employee_name}</Typography>
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>Role: {employee.employee_role}</Typography>
                                                    </div>

                                                    <div className="flex-row">
                                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body2" gutterBottom>State ID: {employee.employee_cid}</Typography>
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
                </div>
            </div>
        </>
    );
}

export default Businesses;