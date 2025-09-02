import React, { Component } from 'react'
import {Link} from "react-router-dom"
export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div>
         <div className="border-2 border-red-950 w-[300px] m-[10px] p-[10px] ">
          <img src={imageUrl} alt="newsImage" />
          <div className="card-body">
            <h5 className='font-bold '>{title}</h5>
            <p>{description}...</p><br />
            <p className = " text-blue-950">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</p>
            <button className='bg-[#001BB7] h-[30px] w-[150px] rounded-sm cursor-pointer my-1'><Link  to = {newsUrl} target='_blank'>Read More</Link></button>
          </div>
         </div>
      </div>
    )
  }
}

export default NewsItem

