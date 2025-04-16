// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}
