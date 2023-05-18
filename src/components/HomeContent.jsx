import React from 'react'
import  blog2 from '../assets/images/blog2.jpg'
import './homecontent.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function HomeContent() {
  const navigate = useNavigate();
 
  return (
       <div className='container'>
      <div className="imageSide">
        <img src={blog2} alt="photo" />
      </div>

      <div className="descriptionHome">
        <h2>Charity's Blogs are Here For You</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro cum nostrum a! 
          Harum blanditiis laboriosam ad laudantium enim, nam itaque praesentium cupiditate 
          autem nesciunt, dignissimos excepturi eveniet deleniti explicabo ipsa?</p>
        <h4 id="myName">by Charity.</h4>
      <button onClick={()=> navigate('/blogs')} >Read Jely's Blogs</button>

      
    
      </div>
      
    </div>
   

    
   
  )
}

export default HomeContent
