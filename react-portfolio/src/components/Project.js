import React, {useState} from 'react';

export default function Project(props) {
  return (
    <div>
      <a href='#'>
        <img src='#' alt='Project image'/>
        <p>{props.title}</p>

     </a>
     <a href='#'>Github</a>
    </div>
  )
}
