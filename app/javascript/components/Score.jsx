import React from "react";

const Score = (props) => {
  const {score, total} = props.results;
  return (
    <p>{`You scored ${score} out of ${total}`}</p>
  );
};

export default Score;