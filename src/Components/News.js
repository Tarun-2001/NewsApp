import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {


    static defaultProps = {
          pageSize : 10,
          country : 'in',
          category : 'general'
        }
    static propTypes = {
        category : PropTypes.string,
        pageSize : PropTypes.number,
        country  : PropTypes.string
      }
    
    constructor(props){
        super(props);
        this.state={
            articles : [],
            loading : false,
            page : 1
        }
        document.title=`${this.props.category} - NewsApp`
    }
    capitalise = (str)=>{
      return str.charAt(0).toUpperCase()+str.slice(1)
    }
    // componentDidMount generaly used for fetching the api's . It triggers after the compent is redered
    async componentDidMount(){
      this.props.setProgress(10)
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      this.props.setProgress(40)
      let data = await fetch(url)
      let parseData =await data.json()
      this.props.setProgress(70)
      this.setState(
      {
        articles:parseData.articles,
        totalResults : parseData.totalResults,
        loading: false
      }
    )
      this.props.setProgress(100)
    }
    // This method handles the next button click.
     handleNext = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url)
        let parseData =await data.json()
        this.setState(
          {
            articles:parseData.articles,
            page :this.state.page+1,
            loading: false
          }
        )
    }
    //This method handles the previous button click. 
    handlePreviousClick = async ()=>{

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url)
        let parseData =await data.json()
        this.setState(
          {
            articles:parseData.articles,
            page :this.state.page-1,
            loading:false
          }
        )
    }
    // Added infinite scroll bar .
    fetchMoreData = async() => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url)
        let parseData =await data.json()
        this.setState(
          {
            articles:this.state.articles.concat(parseData.articles),
            page :this.state.page+1,
            loading: false
          }
        )
    }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{margin:'35px 0', marginTop: ' 75px'}}>{`News HeadLines - ${this.capitalise(this.props.category)} -Top News`} </h2>
          <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length!=this.state.totalResults} loader={<Spinner/>}>
            <div className='container'>
              <div className='row'>
                {
                  !this.state.loading&& this.state.articles.map((ele)=>{
                  return <div className='col-md-4' key={ele.url}>
                  <NewsItem title={ele.title!=null?ele.title.slice(0,15)+'...':""} descreption = {ele.description!=null?ele.description.slice(0,45)+'...':""} imgUrl = {ele.urlToImage!=null?ele.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMP2oBFaBVndiRMvq1Lbu76T9xv15H7NIf3A&usqp=CAU"}  newsUrl={ele.url} author = {!ele.author?"Unkown":ele.author} date = {ele.publishedAt} source = {ele.source.name}/>
                  </div>})
                }
                </div>
              </div>
       
          </InfiniteScroll>
        <div className='container d-flex justify-content-between'>
          <button type="button" className="btn btn-primary" onClick={this.handlePreviousClick} disabled={this.state.page<=1?true:false}>Previous</button>
          <button type="button" className="btn btn-primary" onClick={this. handleNext} disabled={(this.state.page+1)>Math.ceil(this.state.totalResults/21)}>Next</button>  
        </div>
      </div>
    )
  }
}
