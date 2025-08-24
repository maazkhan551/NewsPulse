import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  artcles = [
    {
      "source": {
        "id": null,
        "name": "Arrowhead Pride"
      },
      "author": "Pete Sweeney",
      "title": "Chiefs-Bears rapid reaction: Suamataia settles in, offense shines - Arrowhead Pride",
      "description": "",
      "url": "https://www.arrowheadpride.com/kansas-city-chiefs-preseason/179608/chiefs-bears-rapid-reaction-suamataia-settles-in-offense-shines",
      "urlToImage": "https://platform.arrowheadpride.com/wp-content/uploads/sites/12/2025/08/gettyimages-2191344298.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
      "publishedAt": "2025-08-23T03:30:00Z",
      "content": "On a last-second play, the Chicago Bears defeated the Kansas City Chiefs 29-27 on Friday night, dropping the Chiefs to 0-3 for the 2025 preseason. But thats not what well remember about the preseason… [+4012 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": null,
      "title": "Ghislaine Maxwell interview transcripts released by US justice department - BBC",
      "description": "Maxwell denied that there is any 'client list' of prominent figures involved in Jeffrey Epstein's crimes.",
      "url": "https://www.bbc.com/news/articles/cdd3pe6189go",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0dad/live/99c0ab30-7f99-11f0-84a2-0722ea84f1f9.jpg",
      "publishedAt": "2025-08-23T02:10:39Z",
      "content": "Bernd Debusmann Jr\r\nGhislaine Maxwell, the convicted associate of sex offender Jeffrey Epstein, told US officials that a highly discussed \"client list\" does not exist, according to a released transcr… [+6888 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NBCSports.com"
      },
      "author": "Charean Williams",
      "title": "Cam Ward completes his preseason by directing a TD drive - NBC Sports",
      "description": "Cam Ward finished his preseason without a touchdown pass but having shown enough to have Titans fans excited.",
      "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/cam-ward-completes-his-preseason-directing-a-touchdown-drive",
      "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/a125832/2147483647/strip/true/crop/4000x2250+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F35%2F11%2F86db8a404f97a6f4218934354705%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D26905455",
      "publishedAt": "2025-08-23T01:32:13Z",
      "content": "Cam Ward finished his preseason without a touchdown pass but having shown enough to have Titans fans excited.\r\nHe played two series in Friday nights preseason game Friday night. Ward led the Titans t… [+693 chars]"
    }
  ];
  constructor(){
      super();
      console.log("News constructor.........");
      this.state = {
        artcles : this.artcles
      }
    }
  render() {
    return (
      <>
      <h1 className='font-bold text-3xl m-[20px] text-center'>NewsPulse - Top Headlines</h1>
      <div className="grid grid-cols-3 gap-2">
       {this.artcles.map((ele)=>{
        return <div key={ele.url}>
             <NewsItem 
             title = {ele.title} 
             description = {ele.description}
              imageUrl ={ele.urlToImage}
              newsUrl = {ele.url}
              /> 
        </div>
       })}
       </div>
      </>
    )
  }
}

export default News
