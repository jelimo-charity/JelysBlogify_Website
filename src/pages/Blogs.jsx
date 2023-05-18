import React from 'react'
import blogData from '../components/blogData'
import sideData from '../components/sideData'
import blog1 from '../assets/images/blog1.jpg'
import './blog.css'
import { useNavigate } from 'react-router-dom'
function Blogs() {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <div className="section1">
        {blogData.map(({title, content})=>{
            return(
                <div className='blogContent'>
                   <h2>{title}</h2>
                   <p>{content}</p>
                   <button onClick={ ()=> navigate('/')}>Read more</button>
                </div>
            )
        })}
     

      </div>
      {/* //section2 */}

      <div className="section2">
        <img src={blog1} alt="blog1" />
      <h1>List of Contents</h1>


        {sideData.map(({heading, headData})=>{
            return(
                <div className="sideData">

                    <h4>{heading}</h4>
                    <p>{headData}</p>
                </div>
            )

        })}
      </div>

        
      
    </div>
  )
}

export default Blogs
