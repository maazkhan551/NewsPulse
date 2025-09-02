import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
 import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
  capText(str){
      return str.charAt(0).toUpperCase()+str.slice(1);
  }
  constructor(props){
      super(props);
      this.state = {
        articles : [],
        page:1,
        loading: false,
        totalResults: 0
      }
      document.title = `${this.capText(this.props.category)} - NewsPulse`

    }
  async update(){
    this.props.setProgress(10);
     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=4e53aed4b2244290a5c2a9b968aa97d6&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
     this.props.setProgress(30);
    let data = await fetch(url);
     this.props.setProgress(60);
    let parsed = await data.json();
    this.setState({
        articles: parsed.articles,
        totalResults: parsed.totalResults,
        loading: false
       })
       this.props.setProgress(100);
  }
  async componentDidMount(){
     this.update()
  }
  handleNext = async()=>{
     this.setState({page: this.state.page+1})
     this.update()
  }
  handlePrev = async()=>{
      this.setState({page: this.state.page-1})
      this.update()
  }
  fetchMoreData = async () => {
  let nextPage = this.state.page + 1;  // calculate the next page
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=4e53aed4b2244290a5c2a9b968aa97d6&page=${nextPage}&pageSize=${this.props.pageSize}`;
  
  this.setState({ loading: true });
  let data = await fetch(url);
  let parsed = await data.json();

  this.setState({
    articles: this.state.articles.concat(parsed.articles),
    totalResults: parsed.totalResults,
    page: nextPage,  // update page AFTER fetch
    loading: false,
  });
};

  render() {
    return (
      <>
      <h1 className='font-bold text-3xl m-[20px] text-center'>NewsPulse - Top Headlines on {this.capText(this.props.category)}</h1>
      {/* {this.state.loading && <Spinner/>} */}
      <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}  
        hasMore={this.state.articles.length !== this.state.totalResults}
        loader={<Spinner/>}
      >
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3  gap-2">
       {this.state.articles.map((ele,index)=>{
        return <div key={ele.url || index}>
             <NewsItem 
             title = {ele.title} 
             description = {ele.description}
              imageUrl ={!ele.urlToImage?"https://thumbnails.texastribune.org/iTuIIZwWsKkT8OyoIkilp-h-xUQ=/1200x630/filters:quality(95):focal(0x563:2400x1601)/static.texastribune.org/media/files/faa250033ea336d8c086868d4e28a4a9/0818%20House%20Redistricting%20KG%2021.jpeg":ele.urlToImage}
              newsUrl = {ele.url}
              author = {ele.author}
              date = {ele.publishedAt}
              /> 
        </div>
       })}
       </div>
       </InfiniteScroll>

        
      </>

    )
  }
}

export default News
