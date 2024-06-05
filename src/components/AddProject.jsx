import { useRef } from "react"

export default function AddProject({onAddProject, onCloseAddProject}){
    const titleInput = useRef();
    const descriptionInput = useRef();
    const dateInput = useRef();

    const handleAddProject = function(e){
        e.preventDefault(); 
        onAddProject(titleInput.current.value, descriptionInput.current.value, dateInput.current.value)
        e.target.reset();
    }

    return(
        <form onSubmit={handleAddProject} className="flex flex-col gap-4 mx-auto w-[80%] text-sm">
        <div className="flex gap-4 justify-end">
        <button onClick={onCloseAddProject} className="text-zinc-600 font-semibold">Cancel</button>
        <button type="submit" className="px-4 py-2 text-stone-200 bg-black rounded-md font-semibold hover:bg-zinc-800">Save</button>
        </div>
            <div className="flex flex-col">
            <label className="text-zinc-600 font-semibold">TITLE</label>
            <input required ref={titleInput} className="rounded-sm bg-stone-200 p-1 outline-none border-b-2 border-stone-200 focus:border-black"/>
            </div>
            <div className="flex flex-col">
            <label className="text-zinc-600 font-semibold">DESCRIPTION</label>
            <textarea required ref={descriptionInput} className="rounded-sm bg-stone-200 p-1 outline-none border-b-2 border-stone-200 focus:border-black"/>
            </div>
            <div className="flex flex-col">
            <label className="text-zinc-600 font-semibold">DUE DATE</label>
            <input required ref={dateInput} type="date" className="rounded-sm bg-stone-200 p-1 outline-none border-b-2 border-stone-200 focus:border-black"/>
            </div>
            
                    </form>
    )
}