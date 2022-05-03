import React from "react";

import Profile from "./Profile/Profile";

import Divider from "../Divider/Divider";
import "./Home.css";
import "../../assets/buttons/buttons.css";

export default function Home() {
  return (
    <div className="home-container">      
      <Profile />
      <Divider />
     
      
    </div>
  );
};