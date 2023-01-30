import React from "react";
import { IFriend } from "./Friend.types";
import "./Friendcss.css";
export const Card = ({ name, contactNo, address }: IFriend) => {
  return (
      <div className="arrange">
      <h1>{name}</h1>
      <h1>{contactNo}</h1>
      <h1>{address}</h1>
      {/* <button></button> */}
      </div>
  );
};
