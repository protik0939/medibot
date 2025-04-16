// src/pages/Home.tsx
import { sendNotification } from "../api";

export default function Home() {
  const handleSend = async () => {
    await sendNotification("Medicine delivered!");
    alert("Notification sent!");
  };

  return (
    <div>
      <h1>Send Notification</h1>
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
