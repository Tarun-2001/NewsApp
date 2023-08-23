import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
 
  apiKey =  process.env.REACT_APP_API_KEY
  state = {
    progress : 5,
    
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})    
  }
  render() {
  return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar color='#f11946' progress={this.state.progress} height={5}/>
        <Routes>
          <Route exact path ='/' element= {<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={21} category = "general" />} />
          <Route exact path ='/business' element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={21} category = "business"/>} />
          <Route exact path ='/entertainment' element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={21} category = "entertainment"/>} />
          <Route exact path ='/general'  element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key = "general" pageSize={21} category = "general"/>} />
          <Route exact path ='/health'  element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key = "health" pageSize={21} category = "health" />} />
          <Route exact path ='/science'  element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key = "science" pageSize={21} category = "science"/>} />
          <Route exact path ='/sports'  element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={21} category = "sports"/>} />
          <Route exact path ='/technology'  element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={21} category = "technology"/>}/>
        </Routes> 
        
        </Router>
      </div>
    )
  }
}
