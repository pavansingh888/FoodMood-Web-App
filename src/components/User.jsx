import React, { useState } from 'react'

function User({name}) {
    const [count]=useState(0);
    const [count2]=useState(2);
 
  return (
    <div>
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Bhopal</h3>
        <h4>Contact: psinghp888@gmail.com</h4>
    </div>
  )
} 

export default User