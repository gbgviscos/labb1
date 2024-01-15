import React, { useRef, useState } from "react";
import "../styles.css";

function AddComment(props) {
  let focusComment = useRef(); 
  const [comment, setComment] = useState("");

  function handleClick() {
    props.addComment(props.id, comment);
    focusComment.current.focus();
  }

  return (
    <div className="container">
      <input
        ref={focusComment}
        placeholder="Kommentar"
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleClick}>Lägg till kommentar</button>
    </div>
  );
}

export default AddComment;
