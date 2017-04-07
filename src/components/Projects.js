import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return(
          <ProjectItem key={project.id} project={project} />
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

export default Projects;
