import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }
  componentWillMount(){
    this.setState({projects: [
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
    ]});
  }

  handleAddProject(project){
    let currentProjects = this.state.projects;
    currentProjects.push(project);
    this.setState({projects:currentProjects});
  }
  render() {
    return (
      <div className="App">
       <AddProject addProject={this.handleAddProject.bind(this)}/>
       <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
