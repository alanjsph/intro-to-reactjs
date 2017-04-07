import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }
  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/photos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({ todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }

    });
  }
  getProjects(){
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
  componentWillMount(){
  }

  componentDidMount(){
    this.getTodos();
    this.getProjects();

  }

  handleAddProject(project){
    let currentProjects = this.state.projects;
    currentProjects.push(project);
    this.setState({projects:currentProjects});
  }

  handleDeleteProject(id){
    console.log(id + " deleted!");
    let currentProjects = this.state.projects;
    let index = currentProjects.findIndex(x => x.id === id);
    currentProjects.splice(index, 1);
    this.setState({projects: currentProjects});
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
