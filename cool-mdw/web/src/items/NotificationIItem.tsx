import { useEffect, useState } from "react";
import '../main/index.css'
import Typography from '@mui/material/Typography';
import { Chip } from "@mui/material";

interface INotificationItem {
  notification,
  deleteNotification(id: number): void;
}

export default (props: INotificationItem) => {
  const { deleteNotification, notification } = props;
  const { id } = notification;

  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleDelete = () => {
      setFadeOut(true);
      setTimeout(() => {
        deleteNotification(id);
      }, 300);
    };

    const timer = setTimeout(handleDelete, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []); //deleteNotification, id

  return (
    <div className={fadeOut ? "component-paper cursor-pointer top-right-out" : "component-paper cursor-pointer top-right-in"} style={{ width: '100%', borderBottom: '0px solid #fff', borderRadius: '0px', backgroundColor: 'rgba(9, 60, 176, 0.7)', borderRight: '4px solid #227ddf' }}>
      <div className="main-container">
        <div className="details">
          <div className="description">

            <div className="flex-row">
              <div style={{ paddingRight: '1.5%', paddingBottom: '1.5%' }}>
                <Chip size="small" label="411" sx={{ backgroundColor: '#a0ef7d', color: '#000' }} />
              </div>
              <div style={{ paddingRight: '1.5%', paddingBottom: '1.5%' }}>
                <Chip size="small" label="911" sx={{ backgroundColor: '#f6a968', color: '#000' }} />
              </div>
              <Typography style={{ paddingBottom: '2%', textShadow: 'rgb(55, 71, 79) -1px 1px 0px, rgb(55, 71, 79) 1px 1px 0px, rgb(55, 71, 79) 1px -1px 0px, rgb(55, 71, 79) -1px -1px 0px', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0px', fontWeight: 600, textDecoration: 'none', fontStyle: 'normal', fontVariant: 'small-caps', textTransform: 'none', width: '100%' }} variant="body2" gutterBottom>An incoming 911 call!</Typography>
              <i className="fas fa-map-marker-alt fa-w-12 fa-2x fa-fw" style={{ color: '#fff' }}></i>
            </div>

            <div className="flex-row">
              <Typography style={{ textShadow: 'rgb(55, 71, 79) -1px 1px 0px, rgb(55, 71, 79) 1px 1px 0px, rgb(55, 71, 79) 1px -1px 0px, rgb(55, 71, 79) -1px -1px 0px', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0px', fontWeight: 600, textDecoration: 'none', fontStyle: 'normal', fontVariant: 'small-caps', textTransform: 'none', width: '100%' }} variant="body2" gutterBottom>4158497339 - I need medical help down at the tuner shop right now</Typography>
            </div>

            <div className="flex-row">
              <i className="fas fa-clock fa-fw" style={{ color: '#fff', fontSize: '0.875rem', lineHeight: '1.43', marginRight: '1.5%' }}></i>
              <Typography style={{ textShadow: 'rgb(55, 71, 79) -1px 1px 0px, rgb(55, 71, 79) 1px 1px 0px, rgb(55, 71, 79) 1px -1px 0px, rgb(55, 71, 79) -1px -1px 0px', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0px', fontWeight: 600, textDecoration: 'none', fontStyle: 'normal', fontVariant: 'small-caps', textTransform: 'none', width: '100%' }} variant="body2" gutterBottom>A few seconds ago</Typography>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};