import React from "react";

import "./error-indicator.css";
import someicon from "./err.png";

const ErrorIndicator = () => {
    return (
      <div className="error-indicator">
          <img src={someicon} alt="err-msgi"/>
          <span className="boom">BOOM!</span>
          <span>Something has gone terribly wrong</span>
      </div>
    );
};

export default ErrorIndicator;