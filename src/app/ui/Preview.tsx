import React from "react";
import { Button } from "../index";
// import second from '../'
import "./Preview.css"

const Preview = () => {
  return (
    <div>
      <Button />
      <input type="checkbox" className="checkbox" />
      <button className="btn">Button</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <button className="btn btn-accent">Button</button>
      <button className="btn btn-ghost">Button</button>
      <button className="btn btn-link">Button</button>
    </div>
  );
};

export default Preview;
