import React from "react";
import { TrustedByStyle } from "./trusted-by-style";


import { FaUniversity } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";

const TrustedbyComponent = () => {
  return (
    <TrustedByStyle>
      <h1>Trusted By</h1>

      <div className="parent">
        {/* Colleges */}
        <div className="child turquoise">
          <div className="icon-circle">
            <FaUniversity className="icon" />
          </div>
          <span className="numbers">100+</span>
          <span className="details">Colleges</span>
        </div>

        {/* Trainers */}
        <div className="child blue">
          <div className="icon-circle">
            <FaChalkboardTeacher className="icon" />
          </div>
          <span className="numbers">150</span>
          <span className="details">Professional Trainers</span>
        </div>

        {/* Study Materials */}
        <div className="child orange">
          <div className="icon-circle">
            <GiBookshelf className="icon" />
          </div>
          <span className="numbers">1000+</span>
          <span className="details">Study Materials</span>
        </div>

        {/* Students */}
        <div className="child red">
          <div className="icon-circle">
            <FaUserGraduate className="icon" />
          </div>
          <span className="numbers">1,00,000+</span>
          <span className="details">Students</span>
        </div>
      </div>
    </TrustedByStyle>
  );
};

export default TrustedbyComponent;
