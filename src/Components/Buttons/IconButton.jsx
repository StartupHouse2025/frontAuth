import React from 'react';
import './IconButton.css'; // Add this line

const IconButton = ({ text, icon }) => {
  return (
    <button className="icon-button">
      {icon && <span className="icon">{icon}</span>}
      {text}
    </button>
  );
};

export default IconButton;
