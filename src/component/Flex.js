import React from "react";
import "./Flex.style.css";
import { Link } from "react-router";

const Flex = () => {
  return (
    <div>
      <h1>
      <Link to="/">Home</Link>
      </h1>
      <div className="container1">
        <div className="flex-box">box1</div>
        <div className="container2">
          <div className="flex-box">box2</div>
          <div className="flex-box">box3</div>
        </div>
      </div>

      <div>
        <div className="flex-box">box1</div>
        <div className="d-flex-c"><div className="flex-box">box2</div></div>
        <div className="d-flex-e"><div className="flex-box">box3</div></div>
      </div>

      <div>
        <div className="p-a"><div className="flex-box2">box1</div></div>
        <div className="flex-box p-a2">box2</div>
      </div>
      <div></div>
      <div className="flex-box">box1
        <div className="flex-box3 p-a3" style={{backgroundColor:"gray"}}>box2</div>
      </div>


      <div>
        <div className="flex-box4">
          box1
          <div className="flex-box p-a4">box2</div>
          <div className="flex-box p-a5">box3</div>
        </div>
        
        </div>
      </div>
  );
};

export default Flex;
