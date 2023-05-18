import React from 'react'
import myProfile from '../assets/images/me1.jpeg'
import './aboutcontents.css'
function AboutContent() {
  return (
    <div className='container'>
        {/* <h3>About</h3> */}
        <div className="conts">
            
            <div className="textprof">
                <h3>MEET JELIMO!</h3>
                <p id='loremData'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora saepe,
                     pariatur ducimus alias vero illo temporibus sapiente voluptates aliquid officiis
                      quibusdam laudantium, porro deserunt maxime ratione molestiae non eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora saepe,
                     pariatur ducimus alias vero illo temporibus sapiente voluptates aliquid officiis
                      quibusdam laudantium, porro deserunt maxime ratione molestiae non eaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora saepe,
                     pariatur ducimus alias vero illo temporibus sapiente voluptates aliquid officiis
                      quibusdam laudantium, porro deserunt maxime ratione molestiae non eaque!</p>
            </div>
            <div className="imageprof">
                <img id='imgabout' src={myProfile} alt="profilepic" />
            </div>
        </div>


      
    </div>
  )
}

export default AboutContent
