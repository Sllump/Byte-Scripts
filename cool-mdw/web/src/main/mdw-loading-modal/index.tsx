import React from 'react';
import '../index.css';
import useStyles from "./index.styles";

interface MDWLoadingModalProps {
  close?: () => void;
  confirm?: () => void;
  show?: boolean;
}

const MDWLoadingModal: React.FC<MDWLoadingModalProps> = (props) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.mdwLoadingModalContainer} style={{ display: props.show ? '' : 'none' }}>
        <div className={classes.mdwLoadingModalInnerContainer}>
          <div className="spinner-wrapper">
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MDWLoadingModal;