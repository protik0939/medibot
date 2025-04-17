"use strict";
exports.__esModule = true;
// src/pages/Notifications.tsx
var react_1 = require("react");
var axios_1 = require("axios");
require("./Notifications.css"); // make sure this path matches your file structure
function Notifications() {
    var _a = react_1.useState([]), data = _a[0], setData = _a[1];
    react_1.useEffect(function () {
        var fetchNotifications = function () {
            axios_1["default"]
                .get("https://medibot-backend-nine.vercel.app/api/notify")
                .then(function (res) {
                setData(res.data);
            })["catch"](function (err) {
                console.error("❌ Failed to fetch notifications:", err);
            });
        };
        // Fetch once immediately
        fetchNotifications();
        // Then continue every 500ms
        var interval = setInterval(fetchNotifications, 500);
        // Cleanup interval on component unmount
        return function () { return clearInterval(interval); };
    }, []);
    return (React.createElement("div", { className: "notifications-wrapper" },
        React.createElement("div", { className: "notifications-container" },
            React.createElement("h1", { className: "notifications-title" }, "\uD83D\uDECE\uFE0F Notifications"),
            React.createElement("ul", { className: "notifications-list" }, data.length > 0 ? (data.map(function (notif, idx) { return (React.createElement("li", { key: idx, className: "notification-item" },
                React.createElement("span", { className: "notification-message" }, notif.message),
                React.createElement("span", { className: "notification-time" }, new Date(notif.timestamp).toLocaleString()))); })) : (React.createElement("p", { className: "no-notifications" }, "No notifications yet."))))));
}
exports["default"] = Notifications;
