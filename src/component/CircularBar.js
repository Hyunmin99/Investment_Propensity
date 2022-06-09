import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularBar({ Type, Grade }) {
  const MIN = 4;

  return (
    <div>
      <div className="GradeGraph">
        <div style={{ width: 64, height: 64, display: "inline-block" }}>
          <CircularProgressbar
            value={(5 - Grade) * 25}
            text={`${Grade}등급`}
            circleRatio={0.75}
            strokeWidth={14}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              pathColor: "#FFB950",
              trailColor: "#F4F3F4",
              textColor: "#1B1B33",
              textSize: "24px",
            })}
          />
        </div>
        <div style={{ display: "inline-block" }}>
          <b>{Type}</b>
        </div>
      </div>
    </div>
  );
}

export default CircularBar;
