import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Item from "./pages/Item";
import CreateItem from "./pages/CreateItem";
import "./assets/css/index.css";

export default function App(props) {
  return (
    <div className="min-vh-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home {...props.theme} />} />
          <Route path="/profile" element={<Profile {...props.theme} />} />
          <Route path="/item/:id" element={<Item {...props.theme} />} />
          <Route
            path="/create-item"
            element={<CreateItem {...props.theme} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
