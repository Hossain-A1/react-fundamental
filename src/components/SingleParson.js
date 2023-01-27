import React from "react";

const SingleParson = ({parson}) => {
  const isHuman = false;

  const parsonSkillStyle = {

    color: isHuman? 'black' : 'red',
    backgroundColor: 'white',
    fontSize: '1.5rem'
  }

  return (
    <div className="parsons">
      <h1 className="parson-name" style={{color: 'black', fontSize:'2.6rem'}}> {parson.name}</h1>
      <p className="parson-age">Age : {new Date().getFullYear() - parson.age}</p>
      <p className="parson-skill" style={parsonSkillStyle}>Skill: {parson.skill}</p>
    </div>
  );
};

export default SingleParson;
