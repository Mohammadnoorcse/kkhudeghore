import React from 'react'
import Navbar from "../Navbar/Navbar"
import {TeamData} from "../../Data/team"
import "./Team.css"
import { Link } from 'react-router-dom'
const Team = () => {
  return (
    <>
      <Navbar/>
      <div className="team">
      <span>Member of kkhudeghor</span>
        <div className="team-content">
        {TeamData.map((Item)=>{
          return(
            <div className="team-item">
              <div className="team-img">
                <img src={Item.image} alt="" />
              </div>
              <div className="team-text">
                <span>{Item.name}</span>
                <span>{Item.title}</span>
                <span>Id: {Item.id}</span>
              </div>
              {/* <button>Details</button> */}
              <Link className = "Button" to="/memberdetail" state={{ addIndex: Item }}> Details </Link>
              
            </div>
          )
        })}
        </div>
      </div>
    </>
  )
}

export default Team
