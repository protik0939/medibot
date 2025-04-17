import { Link } from "react-router-dom";
import "./Home.css";

const team = [
    {
        id: "0242220005101837",
        name: "Jubair Amin Siyum",
        image: "https://i.ibb.co/QK6vp5N/person1.jpg",
    },
    {
        id: "0242220005101847",
        name: "Ishmak Rahat Rafi",
        image: "https://i.ibb.co/KF3Gyqh/person2.jpg",
    },
    {
        id: "0242220005101855",
        name: "Md. Hasan Jarif",
        image: "https://i.ibb.co/xSpHfsV/person3.jpg",
    },
    {
        id: "0242220005101858",
        name: "Md. Sadat Alam Protik",
        image: "https://i.ibb.co/vZNwDd2/person4.jpg",
    },
    {
        id: "0242220005101952",
        name: "SHAKIB",
        image: "https://i.ibb.co/zr9pWkd/person5.jpg",
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
