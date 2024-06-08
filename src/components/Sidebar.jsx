export default function Sidebar({ projectList, onAddProjectSection, onSelectProject, currentProject}){
    const plusIcon = <svg className="text-stone-400 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"></path></svg>

return (<aside className="flex flex-col w-1/3 md:w-72 bottom-0 bg-black rounded-r-xl p-8 pt-16 text-wrap break-words">
    <div className="flex flex-col w-full gap-8">
    <h1 className="text-txtLight text-[1.4rem] md:text-xl font-semibold uppercase">Your Projects</h1>
    <button onClick={onAddProjectSection} className="py-3 px-3 bg-zinc-800 rounded flex gap-2 items-center text-center w-fit text-stone-400 hover:bg-zinc-900">{plusIcon} Add Project</button>
    </div>
    <ol className="flex flex-col w-[90%] mt-12 gap-4">
    {projectList && projectList.map((project, index) => <li style={ currentProject === project.id ? {background: "#1C1816", color:"white"} : {}} onClick={() => onSelectProject(index)} key={project.title + project.description} className="bg-zinc-800 w-full px-1 py-1 rounded-sm text-stone-400">{project.title}</li>)}

    </ol>
        </aside>)
        
}