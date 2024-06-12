import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./GradeIcon.css";

interface GradeIconProps {
  grade: string;
}

const GradeIcon: React.FC<GradeIconProps> = ({ grade }) => {
  return (
    <div className="icon-container">
      <FontAwesomeIcon icon={faCircle} className="icon-back" />
      <span className="icon-text">{grade}</span>
    </div>
  );
};

export default GradeIcon;
