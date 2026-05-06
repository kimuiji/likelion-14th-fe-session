import React from "react";

function StatusCard({ label, value, color }) {
  const cardStyle = {
    borderLeft: `5px solid ${color || "#ccc"}`,
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  };

  return (
    <div style={cardStyle}>
      <span style={{ fontWeight: "bold", fontSize: "14px" }}>{label}</span>
      <p style={{ margin: "5px 0 0 0", color: "#333" }}>{value}</p>
    </div>
  );
}

export default StatusCard;