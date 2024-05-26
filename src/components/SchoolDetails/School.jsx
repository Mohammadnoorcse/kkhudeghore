import React from 'react'
import { useLocation } from 'react-router-dom'
import "./School.css"
const School = () => {
 
  const location = useLocation()
  
  const { whereItem } = location.state
  return (
    <div className='school'>
      
      <h1>{whereItem.name}</h1>
      
      <div className="school-gallery">
        {whereItem.Image.map((item)=>{
          return(
            <div className="school-item">
              <img src={item} alt="" />
            </div>
          )
        })}
      </div>
      <div className="school-btn">
      
        <a href={whereItem.l}  target="_blank" rel="noopener noreferrer"><button>School Details</button></a>
        
      
      </div>
    </div>
  )
}

export default School
