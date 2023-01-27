import React from "react";

const Loading = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{height: "100vh", background: "#e9f9ee"}}>
      <div className="spinner-border text-primary" style={{width: "100px", height: "100px", color: "#17794f"}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;