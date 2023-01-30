 import React, { useState } from "react";
// import "./Friendcss.css";
import array from "./Mock/database";
import { Card } from "./Card";

export const FriendComponent = () => {
  
  const [pageSize, setPageSize] = useState(array.slice(0,12));
  const [pageNumber,setPageNumber]=useState(1);
  const [incrementPage,setPageIncrement]=useState(12)
  function changePageNumberIIncrement(event:any)
  {

    setPageSize(array.slice(incrementPage*pageNumber,incrementPage*(pageNumber+1)));
    setPageNumber(pageNumber+1)
  }
  function changePageNumberDecrement(event:any)
  {
    setPageSize(array.slice(incrementPage*pageNumber,event.target.value));
    setPageNumber(event.target.value)
  }
  function dropDown(event:any)
  {
    setPageSize(array.slice(incrementPage*pageNumber,event.target.value));
  }
  return (
    <>
      {
      pageSize.map((element, index)=>
      {
          return (
            <>
            <Card address={element.address} key={index} contactNo={element.contactNo} name={element.name}/>
            </>
          )
      }
      )
    }
    <select onChange={dropDown}>
      <option value="{12}">12</option>
      <option value="{24}">24</option>
      <option value="{36}">36</option>
    </select>
    <button onClick={changePageNumberDecrement}>prev</button>
    <button>{pageNumber}</button>
    <button onClick={changePageNumberIIncrement}>next</button>
    
    </>
  )
};
