import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          title : "Business Website",
          category : "Web design"
        },
        {
          title : "Social App",
          category : "Mobile development"
        },
        {
          title : "E-commerce shopping cart",
          category : "Web development"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
       My App

       <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
