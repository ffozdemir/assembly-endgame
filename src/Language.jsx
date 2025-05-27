import React from "react";
import "./Language.css";

const Language = ({ name, backgroundColor, color }) => {
  const styles = {
    backgroundColor: backgroundColor,
    color: color,
  };

  return (
    <div style={styles} className="language">
      {name}
    </div>
  );
};

export default Language;
