import React from 'react'
import home from '../../assets/tmhome.png'
import addtask from '../../assets/tmadd.png'
import '../../cssfiles/projects.css'

function Proprop2() {
  return (
        <div className='cont'>
            <div className='walkp1'>
                <div className='imgclass'>
                    <img src={home} alt='home' id='img1'/>
                    <img src={addtask} alt='addtask' id='img2'/>
                </div>
                <div className='contentclass'>
                    <h2>Task Manager</h2>
                    <h4><b>-Daily Activity Tracker</b></h4>
                    <ul>
                        <li><b>User Management:</b>Secure login and registration with personalized task storage and synced user data.</li>
    
                        <li><b>Task Adding:</b>Quickly create tasks with title, priority, and deadlines — saved instantly to MongoDB.</li>
    
                        <li><b> Task Monitoring:</b>Track tasks by status (pending, in-progress, completed with easy-to-use filters.</li>
    
                        <li><b>Task Updation:</b>Edit task details anytime for better planning and flexibility.</li>
    
                        <li><b>Task Deletion:</b>Easily remove tasks with confirmation prompts to avoid accidental deletions.</li>
                        
                        
                    </ul>
                    
                    <h4>Tech-Stack:- React Native,Node.js,Express.js.Mongodb</h4>
                </div>
            </div>
        </div>
  )
}
export default Proprop2