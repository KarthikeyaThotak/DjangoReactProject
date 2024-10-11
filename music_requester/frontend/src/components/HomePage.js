import React from 'react';
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<p>This is the HomePage</p>} />
        <Route path="/join" element={<RoomJoinPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
      </Routes>
    </Router>
  );
}

export default HomePage;
