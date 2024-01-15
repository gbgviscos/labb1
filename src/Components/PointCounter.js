import React, { useEffect, useState } from "react";
import "../styles.css";

function PointCounter(props) {
  const [grade, setGrade] = useState("Ej Godkänt");
  const totalPoints = props.tasks.reduce(
    (total, task) => total + task.points,
    0
  );
  const maxPoints = props.tasks.reduce(
    (total, task) => total + task.maxPoints,
    0
  );

  useEffect(() => {
    const betyg = () => {
      if (totalPoints >= 7) {
        setGrade("Godkänt");
      }
      if (totalPoints === 13) {
        setGrade("Väl Godkänt!");
      }
    };
    betyg();
  }, [totalPoints]);

  return (
    <div className="container">
      <h2>
        Totalpoäng: {totalPoints} / {maxPoints}
      </h2>
      <h3>Betyg: {grade}</h3>
    </div>
  );
}

export default PointCounter;
