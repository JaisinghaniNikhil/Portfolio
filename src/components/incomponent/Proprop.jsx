import React from 'react'
import index from '../../assets/index.jpg'
import walkp from '../../assets/walkp.jpg'
import '../../cssfiles/projects.css'

function Proprop() {
  return (
        <div className='cont'>
            <h2 id='link'>My Projects</h2>
            <div className='walkp1'>
                <div className='imgclass'>
                    <img src={index} alt='logopage' id='img1'/>
                    <img src={walkp} alt='home' id='img2'/>
                </div>
                <div className='contentclass'>
                    <h2>Walkmap-Pro</h2>
                    <h4><b>-Modernised Step-Counter</b></h4>
                    <ul>
                        <li><b>Smart Step Counter:</b>Tracks steps in real-time and converts    them into calories, distance, and fitcoins without using external APIs.</li>
    
                        <li><b>Runner Mode:</b>Calculates running speed using the device’s accelerometer — lightweight and GPS-free.</li>
    
                        <li><b> Live Tracker with Path Marking:</b>Displays the user’s real-time route on a map, marking walked paths with blue lines and calculating accurate distance.</li>
    
                        <li><b>Target Setting:</b>Allows users to set and monitor daily step and calorie goals, stored and managed in MongoDB.</li>
    
                        <li><b>Profile Monitoring:</b>Manages personal user data, progress, and achievements — supports secure login and data sync.</li>
                        
                        
                    </ul>
                    
                    <h4>Tech-Stack:- React Native,Node.js,Express.js.Mongodb,Google Maps API</h4>
                </div>
            </div>
        </div>
  )
}
export default Proprop