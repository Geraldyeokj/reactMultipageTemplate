import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Example extends React.Component {
  createNotification = (type, message) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info(message);
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
        default:
      }
    };
  };

  render() {
    return (
        <NotificationContainer/>
    );
  }
}

export default Example;