// src/pages/Notifications.tsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function Notifications() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/notify").then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {data.map((notif: any, idx) => (
          <li key={idx}>{notif.message} - {new Date(notif.timestamp).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
}
