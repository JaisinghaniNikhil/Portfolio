import React from 'react'
import home from '../../assets/foodfiesta.png'
import '../../cssfiles/proprop3.css'

function Proprop3() {
  return (
    <div className='foodcont'>
        <div className='img1'>
            <img src={home} alt='home'/>
        </div>
        <div className='content'>
            <h2>Food Fiesta</h2>
            <h4><b>-A Recipe Website</b></h4>
            <ul>
                <li><b>Appealing User Interface:</b>Modern, user-friendly design that ensures smooth navigation and an engaging experience.</li>
    
                <li><b>User Authentication:</b>Secure sign-up and login to protect user data and enable personalized features.</li>
    
                <li><b>Explore Recipes:</b>Browse a wide range of recipes from top chefs and home cooks across categories.</li>
    
                <li><b>Recipe Reviews:</b>Users can rate and review recipes, helping others discover the best dishes.</li>
    
                <li><b>Add Your Recipe:</b>Share your own culinary creations with the community using a simple recipe upload feature.</li>            
            </ul>   
            <h4>Tech-Stack:- HTML ,CSS, Javascript, Node.js, Express.js, Mongodb</h4>
        </div>
        
    </div>
  )
}

export default Proprop3