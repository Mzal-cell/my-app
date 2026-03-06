import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <button onClick={handleLike}>
      <h1>Like ({likes})</h1>
    </button>
  );
}

export default LikeButton;