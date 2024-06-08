import { useRef } from "react"
import * as uuid from "uuid";

export default function ProjectEdit({project, onAddTask, onDeleteTask, onDeleteProject}){
    const taskInput = useRef();
    const handleAddTast = function(projectID){
        onAddTask(taskInput.current.value, projectID)
        taskInput.current.value = '';
    }
    return(
        <section className="flex flex-col w-[80%] max-w-full pr-10 pl-10 gap-4">
        <div className="flex justify-between">
            <h1 className="text-header text-2xl font-bold text-wrap break-words max-w-[50%]">{project.title}</h1>
            <button onClick={onDeleteProject} className="hover:text-red-600 font-semibold text-sm">Delete</button>
        </div>
            <p className="text-zinc-400">{project.date}</p>
            <p>{project.description}</p>
            <hr></hr>
            <h1 className="text-header font-bold text-xl text-wrap break-words">Task</h1>
            <div className="flex gap-3">
                <input ref={taskInput} className="input h-6 rounded-sm min-w-[200px] w-[17rem]"/>
                <button onClick={() => handleAddTast(project.id)} className="text-sm font-semibold hover:text-blue-700">Add Task</button>
            </div>
            <ol className="flex flex-col gap-2">
                {project.tasks.map((task, index)=><li key={uuid.v4()} className="flex justify-between w-full rounded py-9 px-4 bg-stone-100">
                <p>{task}</p>
                <button onClick={() => onDeleteTask(index)} className="hover:text-red-600 font-semibold text-sm">Clear</button>
                </li>)}
            </ol>
        </section>
    )
}