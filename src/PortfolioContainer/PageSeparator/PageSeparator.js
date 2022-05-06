import React from 'react'
import './PageSeparator.css';

export default function PageSeparator() {
  return (
    <div className="separator-container">
      <div className="separator-parent">
        <img
          src={require("../../assets/images/shape-bg2.png")}
          alt="error with image bg"
        />
      </div>
    </div>
  );
}
