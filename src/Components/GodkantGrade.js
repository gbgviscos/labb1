import React, { useState } from "react";
import "../styles.css";
import Card from "./Card";
import PointCounter from "./PointCounter";

function GodkantGrades() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Sätta upp ett React projekt med create-react-app eller med Vite",
      status: "Ongoing",
      level: "Godkänt",
      comment: "",
      points: 0,
      maxPoints: 1,
    },
    {
      id: 2,
      name: "Minst 3 funktionskomponenter",
      status: "Ongoing",
      level: "Godkänt",
      comment: "",
      points: 0,
      maxPoints: 1,
    },
    {
      id: 3,
      name: "Ta emot och injicera minst en prop",
      status: "Ongoing",
      level: "Godkänt",
      comment: "",
      points: 0,
      maxPoints: 1,
    },
    {
      id: 4,
      name: "Hantera minst ett event",
      status: "Ongoing",
      level: "Godkänt",
      comment: "",
      points: 0,
      maxPoints: 1,
    },
    {
      id: 5,
      name: "Använd ett formulärsfält och spara innehåll till state",
      status: "Ongoing",
      level: "Godkänt",
      comment: "",
      points: 0,
      maxPoints: 1,
    },
    {
      id: 6,
      name: "Använd hooks (på ett korrekt sätt): useState & useEffect",
      status: "Ongoing",
      level: "Godkänt",
      comment: "",
      points: 0,
      maxPoints: 1,
    },
    {
      id: 7,
      name: "Projektet skall starta efter npm/yarn install & npm/yarn start utan några konsoll-fel",
      status: "Ongoing",
      level: "Godkänt",
      comment: "",
      points: 0,
      maxPoints: 1,
    },
    {
      id: 8,
      name: "Använd hooks: useRef",
      status: "Ongoing",
      level: "Väl Godkänt",
      comment: "",
      points: 0,
      maxPoints: 2,
    },
    {
      id: 9,
      name: "Minst 5 komponenter",
      status: "Ongoing",
      level: "Väl Godkänt",
      comment: "",
      points: 0,
      maxPoints: 2,
    },
    {
      id: 10,
      name: "Enhetligt formaterad kod (Använd https://prettier.io/ extension i VS Code)",
      status: "Ongoing",
      level: "Väl Godkänt",
      comment: "",
      points: 0,
      maxPoints: 2,
    },
  ]);

  const approvedG = tasks.filter((task) => task.level === "Godkänt");
  const approvedVG = tasks.filter((task) => task.level === "Väl Godkänt");

  const markDone = (id) => {
    console.log(id);
    const updatedTask = tasks.map((task) => {
      if (task.id === id && task.level === "Godkänt") {
        return {
          ...task,
          status: "Done",
          points: 1,
        };
      }
      if (task.id === id && task.level === "Väl Godkänt") {
        return {
          ...task,
          status: "Done",
          points: 2,
        };
      }
      return task;
    });
    setTasks(updatedTask);
  };

  const addComment = (id, comment) => {
    const updateComment = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          comment: comment,
        };
      }
      return task;
    });
    setTasks(updateComment);
  };

  return (
    <div className="container">
      <div>
        <h1>
          <PointCounter tasks={tasks}></PointCounter>
        </h1>
      </div>
      <div>
        <div className="container">
          <h2>Uppgifter för Godkänt</h2>
          <div className="taskContainer">
            <Card
              tasks={approvedG}
              markdone={markDone}
              addComment={addComment}
            />
          </div>
        </div>
        <div className="container">
          <h2>Uppgifter för Väl Godkänt</h2>
          <div className="taskContainer">
            <Card
              tasks={approvedVG}
              markdone={markDone}
              addComment={addComment}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GodkantGrades;
