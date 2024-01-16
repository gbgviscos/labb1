import React from "react";
import "../styles.css";
import AddComment from "./AddComment";

function Card(props) {
  const addComment = props.addComment;

  return (
    <>
      <ul>
        {props.tasks.map((task, index) => (
          // if task.status === "done" render only "Uppgift" and "Uppgift slutförd"
          <li key={index} className="task">
            <strong>Uppgift: {task.name}</strong>
            {task.status === "Done" ? (
              <div className="cardinfo">
              <h2>Uppgift slutförd!</h2>
              </div>
            ) : (
            <div className="cardinfo">
              <p>Status: {task.status}</p>
              <p>Nivå: {task.level}</p>
              <p>Kommentar: {task.comment}</p>
              <AddComment addComment={addComment} id={task.id} />
              <button
                className="doneBtn"
                onClick={() => props.markdone(task.id)}
              >
                Markera som Klar
              </button>
            </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Card;
