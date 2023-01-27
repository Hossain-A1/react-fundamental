import React from "react";
import SingleParson from "./SingleParson";
import './Parson.css'
const parsons = [
  {
    id: 1,
    name: "Hossain",
    age: 25,
    skill: "react",
  },
  {
    id: 2,
    name: "Miaj",
    age: 23,
    skill: "react",
  },
  {
    id: 3,
    name: "Halia",
    age: 24,
    skill: "Javascript",
  },
  {
    id: 4,
    name: "Nahida",
    age: 26,
    skill: "python",
  },
  {
    id: 5,
    name: "Sahanor",
    age: 13,
    skill: "html",
  },
];

const Parson = () => {
  return (
    <div className="parson-wrapper">
      {
        parsons.map((parson)=>(
        <SingleParson parson={parson} key={parson.id}/>
        ))
      }
    </div>
  );
};

export default Parson;
