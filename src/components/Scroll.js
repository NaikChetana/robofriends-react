import React from "react";

export const Scroll = ({ children }) => {
  return (
    <div
      style={{ height: "800px", border: "5px solid black", overflowY: "auto" }}
    >
      {children}
    </div>
  );
};
