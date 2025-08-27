import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  constructor(){
      super();
      console.log("News constructor.........");
      this.state = {
        articles : [],
        page:1,
        loading: false
      }
    }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4e53aed4b2244290a5c2a9b968aa97d6&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url);
    let parsed = await data.json();
    console.log(parsed)
    this.setState({
        page: this.state.page-1,
        articles: parsed.articles, totalResults: parsed.totalResults,
        loading: false
       })
  }
  handleNext = async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4e53aed4b2244290a5c2a9b968aa97d6&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url);
    let parsed = await data.json();
       this.setState({
        page: this.state.page+1,
        articles: parsed.articles,
        loading: false
       })  
  }
  handlePrev = async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4e53aed4b2244290a5c2a9b968aa97d6&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({loading: false})
    let data = await fetch(url);
    let parsed = await data.json();
       this.setState({
        page: this.state.page-1,
        articles: parsed.articles,
        loading: false 
       })
  }
  render() {
    return (
      <>
      <h1 className='font-bold text-3xl m-[20px] text-center'>NewsPulse - Top Headlines</h1>
      {this.state.loading && <Spinner/>}
      <div className="grid grid-cols-3 gap-2">
       {this.state.articles.map((ele)=>{
        return <div key={ele.url}>
             <NewsItem 
             title = {ele.title} 
             description = {ele.description}
              imageUrl ={!ele.urlToImage?"https://thumbnails.texastribune.org/iTuIIZwWsKkT8OyoIkilp-h-xUQ=/1200x630/filters:quality(95):focal(0x563:2400x1601)/static.texastribune.org/media/files/faa250033ea336d8c086868d4e28a4a9/0818%20House%20Redistricting%20KG%2021.jpeg":ele.urlToImage}
              newsUrl = {ele.url}
              /> 
        </div>
       })}
       </div>
       <div className="flex justify-center">
      <button type="button" disabled = {this.state.page<=1} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 disabled:bg-gray-400" onClick={this.handlePrev}>&laquo; Previous</button>

       <button type="button"  disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 disabled:bg-gray-400" onClick={this.handleNext}>Next &raquo;</button>
       </div>
      </>

    )
  }
}

export default News
