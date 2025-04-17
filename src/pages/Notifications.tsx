// src/pages/Notifications.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import "./Notifications.css"; // make sure this path matches your file structure

export default function Notifications() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchNotifications = () => {
            axios
                .get("https://medibot-backend-nine.vercel.app/api/notify")
                .then((res) => {
                    setData(res.data);
                })
                .catch((err) => {
                    console.error("❌ Failed to fetch notifications:", err);
                });
        };

        // Fetch once immediately
        fetchNotifications();

        // Then continue every 500ms
        const interval = setInterval(fetchNotifications, 500);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="notifications-wrapper">
            <div className="notifications-container">
                <h1 className="notifications-title">🛎️ Notifications</h1>
                <ul className="notifications-list">
                    {data.length > 0 ? (
                        data.map((notif: any, idx) => (
                            <li key={idx} className="notification-item">
                                <span className="notification-message">{notif.message}</span>
                                <span className="notification-time">
                                    {new Date(notif.timestamp).toLocaleString()}
                                </span>
                            </li>
                        ))
                    ) : (
                        <p className="no-notifications">No notifications yet.</p>
                    )}
                </ul>
            </div>
        </div>
    );

}
