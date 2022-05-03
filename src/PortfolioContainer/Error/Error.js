import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
  
    <div className="error-parent">
      <h1>Error</h1>
      <h3>This an Error!</h3> 
      <p>Page does not exist or has been moved.</p>
      <Link to="/"><button>Back to Home Page</button></Link>
    </div>
  )
};

export default Error
