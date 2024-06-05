import NoProjects from "./components/NoProjects";
import Sidebar from "./components/Sidebar";
import AddProject from "./components/AddProject";
import { useState } from "react";

function App() {
  const [isAddProject, setIsAddProject] = useState(false)
  const [projectList, setProjectList] = useState([])
  const openAddProject = function(){
    setIsAddProject(true)
  }

  const closeAddProject = function(){
    setIsAddProject(false)
  }
  
  const handleAddProject = function(title, description, date){
    const newProject = {title: title, description: description, date: date}
    setProjectList(oldList => [...oldList, {...newProject}])
  }
console.log(projectList);
  return (
    <main className="flex h-full min-h-[100vh] pt-[5%]">
      <Sidebar onAddProjectSection={openAddProject} projectList={projectList}/>
      {isAddProject && <section className="w-full flex items-center justify-center">
      <AddProject onAddProject={handleAddProject} onCloseAddProject={closeAddProject}/>
      </section>}
      {!isAddProject && <NoProjects onAddProjectSection={openAddProject}/>}
    </main>
  );
}

export default App;
