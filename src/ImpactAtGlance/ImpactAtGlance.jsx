import "./ImpactAtGlance.css";
import collegesIcon from "../school.png";
import studentsIcon from "../bag.png";
import materialsIcon from "../books.png";
import trainersIcon from "../people.png";

export default function ImpactAtGlance() {
  const data = [
    {
      title: "Colleges",
      value: "100+",
      color: "#FFE1E6",
      icon: collegesIcon,
    },
    {
      title: "Students",
      value: "1,00,000",
      color: "#E7F1FF",
      icon: studentsIcon,
    },
    {
      title: "Study Materials",
      value: "1000+",
      color: "#E2FFE8",
      icon: materialsIcon,
    },
    {
      title: "Professional Trainers",
      value: "150",
      color: "#FFEAC7",
      icon: trainersIcon,
    },
  ];

  return (
    <div className="impact-container">
      <h1 className="impact-title">
        Impact at a <span>Glance</span>
      </h1>

      <div className="impact-grid">
        {data.map((item, index) => (
          <div
            className="impact-card"
            key={index}
            style={{ backgroundColor: item.color }}
          >
            <div>
              <h3 className="impact-card-title">{item.title}</h3>
              <h2 className="impact-card-value">{item.value}</h2>
            </div>
            <img src={item.icon} alt={item.title} className="impact-card-img" />
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
