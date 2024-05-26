
import "./Blog.css"
import {BlogData} from "../../Data/blog"

import { Link } from 'react-router-dom'


const Blog = () => {
    


    return (
        <div className='blog'>
            <span>Voice  <span>Of</span> Kkhudeghor</span>

            <div className="blog-content">

            {BlogData.map((Item,index)=>{
                return(
                    <div className= "blog-item"
                    key={index}
                    >
                    <h1>{Item.title}</h1>
                    <div class="blog-text ellipsis">
                        <span class="text-concat">
                            {Item.text}
                        </span>
                    </div>
                    

                    <Link className = "Button" to="/blogDetails" state={{ addIndex: Item }}>
                        Read More
                    </Link>

                </div>
                )
            })}

            </div>
        </div>
    )
}

export default Blog
