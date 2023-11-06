"use client"
import React from 'react'
async function getData() {
  const gg= await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // console.log(gg);
  return gg;
}
getData();
const about = async () => {
  
  const gg=await getData();
  // console.log(gg)
  return (
    <div>
    <h1>yoooo no</h1>
    </div>
  );
};

export default about