import './App.css';
import React, { Component } from 'react'
import { Navbar } from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;

  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
      <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="General" pageSize={this.pageSize} country="in" category="General" />} />
            <Route exact path="/Business" element={<News setProgress={this.setProgress} key="Business" pageSize={this.pageSize} country="in" category="Business" />} />
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />} />
            <Route exact path="/General" element={<News setProgress={this.setProgress} key="General" pageSize={this.pageSize} country="in" category="General" />} />
            <Route exact path="/Health" element={<News setProgress={this.setProgress} key="Health" pageSize={this.pageSize} country="in" category="Health" />} />
            <Route exact path="/Science" element={<News setProgress={this.setProgress} key="Science" pageSize={this.pageSize} country="in" category="Science" />} />
            <Route exact path="/Sports" element={<News setProgress={this.setProgress} key="Sports" pageSize={this.pageSize} country="in" category="Sports" />} />
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} key="Technology" pageSize={this.pageSize} country="in" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}