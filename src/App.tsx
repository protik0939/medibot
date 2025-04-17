import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import OneSignal from 'react-onesignal';
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (typeof window !== 'undefined' && !(window as any).OneSignalInitialized) {
      (window as any).OneSignalInitialized = true;

      OneSignal.init({
        appId: 'dd6c8262-8c78-4cff-8ed7-1f6cd74ca6ae',
        // allowLocalhostAsSecureOrigin: true,
        notifyButton: {
          enable: true,
          prenotify: true,
          showCredit: false,
          text: {
            'tip.state.unsubscribed': 'Subscribe to notifications',
            'tip.state.subscribed': "You're subscribed to notifications",
            'tip.state.blocked': "You've blocked notifications",
            'message.prenotify': 'Click to subscribe to notifications',
            'message.action.subscribing': 'Subscribing...',
            'message.action.subscribed': "Thanks for subscribing!",
            'message.action.resubscribed': "You're subscribed to notifications",
            'message.action.unsubscribed': "You won't receive notifications again",
            'dialog.main.title': 'Manage Site Notifications',
            'dialog.main.button.subscribe': 'SUBSCRIBE',
            'dialog.main.button.unsubscribe': 'UNSUBSCRIBE',
            'dialog.blocked.title': 'Unblock Notifications',
            'dialog.blocked.message': "Follow these instructions to allow notifications:"
          }
        }
      }).catch(e => {
        console.error("OneSignal init error:", e);
      });
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}
