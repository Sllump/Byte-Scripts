import React, { useEffect, useState } from 'react';
import { Divider, FormControl, InputAdornment, TextField, Typography } from '@mui/material';
import useStyles from './index.styles';
import { fetchNui } from '../../../../utils/fetchNui';
import { isEnvBrowser } from "../../../../utils/misc";
import { useRecoilState } from 'recoil';
import { chargesDataState } from '../../../../atoms/atoms';

const Charges: React.FC = () => {
    const classes = useStyles();

    const [chargesData, setChargesData] = useRecoilState(chargesDataState)
    const [chargeTitleSearch, setChargeTitleSearch] = useState("");

    useEffect(() => {
        if (!isEnvBrowser()) {
            setChargesData([])
            fetchNui('arp-mdw:fetchCharges', {}).then(resData => {
                setChargesData(resData.data)
            })
        }
    }, []); //setChargesData

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

    return (
        <>
            <div className={classes.mdwChargesOuterContent}>
                <div className={classes.mdwChargesInnerContent} style={{ height: '17%', flexDirection: 'column', marginBottom: '0.2%' }}>
                    <div className={classes.mdwChargesInnerContentLeft}>
                        <div className={classes.mdwChargesInnerContentLeftHeader}>
                            <div className="mdw-charges-inner-content-left-header-text-left">
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>Charges</Typography>
                            </div>
                            <div className={classes.mdwChargesInnerContentLeftHeaderTextRight}>
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
                        <div className={classes.mdwChargesInnerContentLeftBody}>
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
                        <div className={classes.mdwChargesInnerContent} style={{ height: 'fit-content', flexDirection: 'column', marginBottom: '0.2%' }}>
                            <div className={classes.mdwChargesInnerContentLeft}>
                                <div className={classes.mdwChargesInnerContentLeftHeader}>
                                    <div className="mdw-charges-inner-content-left-header-text-left">
                                        <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="h6" gutterBottom>{cat.category}</Typography>
                                    </div>
                                    <div className={classes.mdwChargesInnerContentLeftHeaderTextRight}>
                                    </div>
                                </div>
                                <div className={classes.mdwChargesInnerContentLeftBody} style={{ flexDirection: 'row', flexWrap: 'wrap', flex: '0', overflowY: 'unset', paddingLeft: '1.5%' }}>
                                    {cat.charges && cat.charges.length > 0 ? (
                                        cat.charges.filter(c => filterFn(c.title)).map((charge) => (
                                            <div className="component-paper cursor-pointer" style={{ width: '30%', borderBottom: '0px solid #fff', borderRadius: '0px', backgroundColor: `${cat.color}`, border: '1px solid #000', marginRight: '2%', height: 'fit-content' }}>
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
        </>
    );
}

export default Charges;