import noProjectsImg from '../assets/no-projects.png'
export default function NoProjects({onAddProjectSection}){
    return (<section className='flex flex-col mx-auto mt-32 items-center gap-6'>
    <img className="w-20" src={noProjectsImg} ></img>
    <h1 className='text-header font-bold text-2xl text-center'>No Project Selected</h1>
    <p className='text-zinc-400'>Select a project or get started with a new one</p>
    <button onClick={onAddProjectSection} className='bg-zinc-800 text-stone-400 px-3 py-3 rounded-lg'>Create new project</button>
    </section>)
    
}