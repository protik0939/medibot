"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./Home.css");
var team = [
    {
        id: "0242220005101837",
        name: "Jubair Amin Siyum",
        image: "https://i.ibb.co.com/TDb4fgC1/siyum.webp"
    },
    {
        id: "0242220005101847",
        name: "Ishmak Rahat Rafi",
        image: "https://i.ibb.co.com/j9ppW6g4/rafi.webp"
    },
    {
        id: "0242220005101855",
        name: "Md. Hasan Jarif",
        image: "https://i.ibb.co.com/x8sC8XFW/jarif.webp"
    },
    {
        id: "0242220005101858",
        name: "Md. Sadat Alam Protik",
        image: "https://i.ibb.co.com/4bp7T0s/Sadat-Alam-Protik.webp"
    },
    {
        id: "0242220005101952",
        name: "SHAKIB",
        image: "https://i.ibb.co.com/KzK0kBgZ/shakib.webp"
    },
];
function Home() {
    return (React.createElement("div", { className: "home-container" },
        React.createElement(react_router_dom_1.Link, { to: '/notifications' },
            React.createElement("button", { className: "notify-btn" }, "\uD83D\uDD14 See Notifications")),
        React.createElement("header", { className: "banner" },
            React.createElement("img", { src: "https://i.ibb.co.com/BHLSYYVJ/IMG-20250416-013243-1.jpg", alt: "Banner", className: "banner-img" })),
        React.createElement("section", { className: "video-section" },
            React.createElement("div", { className: "video-wrapper" },
                React.createElement("iframe", { src: "https://www.youtube.com/embed/ehGuwsOPnas", title: "YouTube video", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }))),
        React.createElement("h1", { className: "title" }, "Meet Our Amazing Team"),
        React.createElement("div", { className: "card-container" }, team.map(function (member) { return (React.createElement("div", { className: "card", key: member.id },
            React.createElement("img", { src: member.image, alt: member.name }),
            React.createElement("h2", null, member.name),
            React.createElement("p", null,
                "ID: ",
                member.id))); }))));
}
exports["default"] = Home;
