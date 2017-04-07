import React, { Component } from 'react';
import uuid from 'uuid';
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
        id : uuid.v4(),
        title : "Business Website",
        category : "Web design"
      },
      {
        id : uuid.v4(),
        title : "Social App",
        category : "Mobile development"
      },
      {
        id : uuid.v4(),
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
  handleDeleteProject(id){
    console.log(id);
  }
  render() {
    return (
      <div className="App">
       <AddProject addProject={this.handleAddProject.bind(this)}/>
       <Projects onDelete={this.handleDeleteProject.bind(this)}projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
