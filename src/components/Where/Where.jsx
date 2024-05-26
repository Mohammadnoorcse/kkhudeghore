import React from 'react'
import { Link } from 'react-router-dom';
import {whereData} from "../../Data/where";
import "./Where.css"
const Where = () => {
  return (
    <div className='where'>
       
       <div className="where-content">
       <h1>Where We Do Work With Child</h1>
       <div className="where-card">
        {whereData.map((Item)=>{
          return(
            <div className="where-Item">
              <Link to ="/schooldetail" state={{whereItem:Item}}>
                <img src={Item.logo} alt="" />
                <div className="where-text">
                  <span>{Item.name}</span>
                </div>

              </Link>
            </div>
          )
        })}
       </div>
       </div>
    </div>
  )
}

export default Where
