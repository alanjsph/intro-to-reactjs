import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return(
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} project={project} />
        );
      });
    }
    return (
      <div className="Projects">
        <h3> New Projects: </h3>
         {projectItems}
      </div>
    );
  }
}

//prop validation
Projects.propTypes = {
  projects : React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Projects;
