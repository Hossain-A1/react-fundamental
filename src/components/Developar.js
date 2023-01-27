import React from "react";

const Developer = () => {
  const isDeveloper = false;

  return (
    <div>
      {isDeveloper ? (
        <h1>he is a developer</h1>
      ) : (
        <h2>he is a dat scientist</h2>
      )}
      <h1>{
        isDeveloper ? 'He is a wev developer' : 'He is not web developer'
        }</h1>
        <h1> He is {isDeveloper? '' : 'not'} a wev developer</h1>
    </div>
  );
};

export default Developer;
