import React from 'react';
import Project from '../Project';

const projects  = [
  {
    img: './images/Paint Your Mood.png',
    name: 'Paint your mood',
    link: 'https://bryandalton.github.io/Paint-your-mood/',
    github: 'https://github.com/Bryandalton/Paint-your-mood'
  },
  {
    img: './images/Ripened-potatos-screenshot.jpg',
    name: 'Ripened Potatoes',
    link: 'https://ripened-potatos.herokuapp.com/',
    github: 'https://github.com/Bryandalton/Ripened_Potatoes'
  },
  {
    img: './images/WeatherServiceScreenshot.jpg',
    name: 'Weather Service',
    link: 'https://bryandalton.github.io/Weather-service/',
    github: 'https://github.com/Bryandalton/Weather-service'
  },
  {
    img: './images/Bigfootbutton.jpg',
    name: 'Bigfoot Button',
    link: 'https://codepen.io/Iwritebadcode/full/mdXdxpz',
    github: 'https://codepen.io/Iwritebadcode/pen/mdXdxpz'
  }
]




export default function Portfolio() {
  return (
    <div className='container'>
      <h3>Portfolio</h3>
      <div className='project-grid'>
      {projects.map((project) => {
        return <Project link={project.link}
      img={project.img} name={project.name} github={project.github}/>
      })}
      </div>
    </div>
  )
}
