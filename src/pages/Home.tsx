import { Link } from "react-router-dom";
import "./Home.css";

const team = [
    {
        id: "0242220005101837",
        name: "Jubair Amin Siyum",
        image: "https://i.ibb.co.com/4bp7T0s/Sadat-Alam-Protik.webp",
    },
    {
        id: "0242220005101847",
        name: "Ishmak Rahat Rafi",
        image: "https://i.ibb.co.com/4bp7T0s/Sadat-Alam-Protik.webp",
    },
    {
        id: "0242220005101855",
        name: "Md. Hasan Jarif",
        image: "https://i.ibb.co.com/4bp7T0s/Sadat-Alam-Protik.webp",
    },
    {
        id: "0242220005101858",
        name: "Md. Sadat Alam Protik",
        image: "https://i.ibb.co.com/4bp7T0s/Sadat-Alam-Protik.webp",
    },
    {
        id: "0242220005101952",
        name: "SHAKIB",
        image: "https://i.ibb.co.com/4bp7T0s/Sadat-Alam-Protik.webp",
    },
];

export default function Home() {
    return (
        <div className="home-container">
            <Link to='/notifications'><button className="notify-btn">🔔 See Notifications</button></Link>
            <h1 className="title">Meet Our Amazing Team</h1>
            <div className="card-container">
                {team.map((member) => (
                    <div className="card" key={member.id}>
                        <img src={member.image} alt={member.name} />
                        <h2>{member.name}</h2>
                        <p>ID: {member.id}</p>
                    </div>
                ))}
            </div>
        </div >
    );
}
