import { Button, Typography } from '@mui/material';
import React from 'react';
import { useRecoilState } from 'recoil';
import { licenseTypeState } from '../../atoms/atoms';
import '../../index.css';
import Input from '../components/input/input';
import useStyles from "./index.styles";

interface MDWAssignLicenseModalProps {
    close?: () => void;
    confirm?: () => void;
    show?: boolean;
}

const MDWAssignLicenseModal: React.FC<MDWAssignLicenseModalProps> = (props) => {
    const classes = useStyles()

    const [licenseType, setLicenseType] = useRecoilState(licenseTypeState)

    const updateLicenseType = (type: string) => {
        setLicenseType(type)
    }

    return (
        <>
            <div className={classes.mdwAssignLicenseModalContainer} style={{ display: props.show ? '' : 'none' }}>
                <div className={classes.mdwAssignLicenseModalInnerContainer}>

                    <div className="mdw-details" style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between', position: 'relative', justifyContent: 'space-between', flex: '1 1', overflow: 'hidden' }}>

                        <div className="mdw-desc">
                            <div className="flex-row" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start', padding: '15px' }}>
                                <Typography style={{ color: '#fff', wordBreak: 'break-word' }} variant="body1" gutterBottom>Assign License</Typography>
                            </div>
                            <div className="flex-row" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', padding: '8px', paddingBottom: '0px' }}>
                                <div className="input-wrapper" style={{ width: '96%', marginBottom: '5%' }}>
                                    <Input.Select
                                        label="Licenses"
                                        value={licenseType}
                                        onChange={v => updateLicenseType(v)}
                                        items={[
                                            { id: 'Drivers', name: 'Driver License' },
                                            { id: 'Weapon', name: 'Weapon License' },
                                            { id: 'Fishing', name: 'Fishing License' },
                                            { id: 'Hunting', name: 'Hunting License' },
                                            { id: 'Pilot', name: 'Pilot License' },
                                            { id: 'Business', name: 'Business License' },
                                            { id: 'Bar', name: 'Bar License' },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="flex-row" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: '15px' }}>
                                <div>
                                    <Button onClick={props.confirm} size="small" color="success" variant="contained">Save</Button>
                                </div>
                            </div>
                        </div>
                        <div className="mdw-alignbottom" style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'center', padding: '8px', marginTop: '1%' }}>
                            <div>
                                <Button onClick={props.close} size="small" color="warning" variant="contained">Close</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MDWAssignLicenseModal