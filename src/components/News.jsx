import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
 import InfiniteScroll from 'react-infinite-scroll-component';


const News =(props)=> {
  let capText=(str)=>{
      return str.charAt(0).toUpperCase()+str.slice(1);
  }
  const [articles,setArticles] = useState([]);
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0);
  const [hasMore,sethasMore] = useState(true)
  
  const update = async()=>{
    props.setProgress(10);
     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
     props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(60);
    let parsed = await data.json();
    setArticles(parsed.articles || []);
    setTotalResults(parsed.totalResults || 0);
    props.setProgress(100);
  }
  useEffect(()=>{
    // document.title = `${capText(props.category)} - NewsPulse`
      update();
  },[])
  let fetchMoreData = async () => {
  let nextPage = page + 1;  // calculate the next page
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=4e53aed4b2244290a5c2a9b968aa97d6&page=${nextPage}&pageSize=${props.pageSize}`;
  
  let data = await fetch(url);
  let parsed = await data.json();

  if (!parsed.articles || parsed.articles.length === 0) {
      sethasMore(false);
      return;
    }
  setArticles(articles.concat(parsed.articles));
  setTotalResults(parsed.totalResults);
  setPage(nextPage);
  sethasMore(parsed.articles.length === props.pageSize);
};


    return (
      <>
      <h1 className='font-bold text-3xl m-[20px] text-center'>NewsPulse - Top Headlines on {capText(props.category)}</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}  
        hasMore= {hasMore}
        loader={<Spinner/>}
      >
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3  gap-2">
       {articles.map((ele,index)=>{
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

export default News
