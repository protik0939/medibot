import { Link } from "react-router-dom";
import "./Home.css";
import { FaGithub } from "react-icons/fa";

const team = [
    {
        id: "0242220005101837",
        name: "Jubair Amin Siyum",
        image: "https://i.ibb.co.com/TDb4fgC1/siyum.webp",
    },
    {
        id: "0242220005101847",
        name: "Ishmak Rahat Rafi",
        image: "https://i.ibb.co.com/j9ppW6g4/rafi.webp",
    },
    {
        id: "0242220005101855",
        name: "Md. Hasan Jarif",
        image: "https://i.ibb.co.com/x8sC8XFW/jarif.webp",
    },
    {
        id: "0242220005101858",
        name: "Md. Sadat Alam Protik",
        image: "https://i.ibb.co.com/4bp7T0s/Sadat-Alam-Protik.webp",
    },
    {
        id: "0242220005101952",
        name: "SHAKIB",
        image: "https://i.ibb.co.com/KzK0kBgZ/shakib.webp",
    },
];

const GitHubIcon = () => (
    <svg className="github-icon" height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49C3.73 14.91 3.27 13.73 3.27 13.73c-.36-.91-.88-1.15-.88-1.15-.72-.49.05-.48.05-.48.79.06 1.2.81 1.2.81.71 1.2 1.87.85 2.33.65.07-.52.28-.85.5-1.05-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.02A9.58 9.58 0 018 3.47c.85.004 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.41.2 2.45.1 2.71.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
);

export default function Home() {
    return (
        <div className="home-container">
            <Link to='/notifications'>
                <button className="notify-btn">🔔 See Notifications</button>
            </Link>
            <header className="banner">
                <img
                    src="https://i.ibb.co.com/BHLSYYVJ/IMG-20250416-013243-1.jpg"
                    alt="Banner"
                    className="banner-img"
                />
            </header>

            <section className="video-section">
                <div className="video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/ehGuwsOPnas"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

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

            <div className="github-section">
                <h2 className="github-title">Project's Codes on Github</h2>
                <div className="github-links">
                    <Link to="https://github.com/protik0939/Medibot-Arduino-Code" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon /> Arduino Code
                    </Link>
                    <Link to="https://github.com/protik0939/Medibot-esp8266-code" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon /> ESP8266 Code
                    </Link>
                    <Link to="https://github.com/protik0939/medibot" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon /> Frontend Code
                    </Link>
                    <Link to="https://github.com/protik0939/medibot-backend" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon /> Backend Code
                    </Link>
                </div>
            </div>
        </div>
    );
}
