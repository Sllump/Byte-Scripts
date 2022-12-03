import { useState } from "react";

const useNotificationManager = () => {
    const [notifications, setNotifications] = useState([]);
  
    const addNotification = (notification) =>
      setNotifications((notifications) => [...notifications, notification]);
  
    const deleteNotification = (id: number) =>
      setNotifications((notifications) =>
        notifications.filter((m) => m.id !== id)
      );
  
    return { notifications, addNotification, deleteNotification };
};

export default useNotificationManager;