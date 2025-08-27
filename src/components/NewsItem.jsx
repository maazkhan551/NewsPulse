import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div>
         <div className="border-2 border-red-950 w-[400px] m-[10px] p-[10px] ">
          <img src={imageUrl} alt="newsImage" />
          <div className="card-body">
            <h5 className='font-bold '>{title}</h5>
            <p>{description}...</p>
            <button className='bg-[#001BB7] h-[30px] w-[150px] rounded-2xl cursor-pointer my-1'><a  href = {newsUrl} target='_blank'>Read More</a></button>
          </div>
         </div>
      </div>
    )
  }
}

export default NewsItem

