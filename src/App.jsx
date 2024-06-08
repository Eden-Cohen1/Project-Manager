import NoProjects from "./components/NoProjects";
import Sidebar from "./components/Sidebar";
import AddProject from "./components/AddProject";
import { useState } from "react";
import ProjectEdit from "./components/ProjectEdit";

function projecstDeepCopy(projectList){
  return projectList.map(project =>{
    return {
      ...project,
      tasks:[...project.tasks]
    }
  })
}

function App() {
  
  const [idCount, setIdCount] = useState(0)
  const [currentSection, setCurrentSection] = useState('no-project')
  const [projectList, setProjectList] = useState([])
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const openAddProject = function(){
    setCurrentSection('add-project')
  }

  const closeAddProject = function(){
    setCurrentSection('no-project')
  }
  
  const handleAddProject = function(title, description, date){
    setIdCount(id => ++id)
    const newProject = {title: title, description: description, date: date, tasks: [], id:idCount}
    const projects = projecstDeepCopy(projectList, currentProjectIndex)
    setProjectList([...projects, newProject])
  }

  const handleDeleteProject = function(){
      const newProjectsArray = projectList.filter((project) => project.id !== projectList[currentProjectIndex].id)
      setProjectList([...newProjectsArray])
      setCurrentSection('no-project');
  }
  
  const handleSelectProject = function(index){
    setCurrentProjectIndex(index);
    setCurrentSection('project-edit')
  }

  const handleAddTask = function(task){
    const projects = projectList.map(project =>{
      if(project.id === projectList[currentProjectIndex].id){
        return {
          ...project,
          tasks: [...project.tasks, task]
        }
      }
      return project;
    })
    setProjectList(projects);
  }

    const handleDeleteTask = function(taskIndex){
      let currentTasks = [...projectList[currentProjectIndex].tasks]
      currentTasks.splice(taskIndex,1)
      const projects = projectList.map(project =>{
        return {
          ...project,
          tasks:[...project.tasks]
        }
      });
      projects[currentProjectIndex].tasks = [...currentTasks]
      setProjectList(projects)
    }

  return (
    <main className="flex h-full min-h-[100vh] pt-[5%]">
      <Sidebar onSelectProject={handleSelectProject} onAddProjectSection={openAddProject} projectList={projectList} currentProject={projectList && projectList[currentProjectIndex]?.id}/>
      {currentSection === 'add-project' && <section className="w-full flex items-top justify-center mb-[10%] mt-[10%]">
      <AddProject onAddProject={handleAddProject} onCloseAddProject={closeAddProject}/>
      </section>}
        {currentSection === 'no-project' && <NoProjects onAddProjectSection={openAddProject}/>}
      {currentSection === 'project-edit' && <section className="w-full flex items-top mt-[10%] mb-[10%]">
        <ProjectEdit project={projectList && projectList[currentProjectIndex]} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} onDeleteProject={handleDeleteProject}/>
      </section>}
    </main>
  );
}

export default App;
