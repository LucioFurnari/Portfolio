import { onlineShopProject, weatherAppProject, gameProject } from './listOfProjects';

function Projects () {
  return (
    <section id='projects' className='py-20 px-4 sm:px-40 sm:ml-28'>
      <h2 className='-z-[1] text-4xl relative font-semibold mb-6 pb-4 after:content-[" "] after:-z-[1] after:absolute after:bottom-0 after:left-0 after:bg-red-600 after:w-24 after:h-2 '>Projects</h2>
      <ProjectCard {...onlineShopProject}/>
      <ProjectCard {...weatherAppProject}/>
      <ProjectCard {...gameProject}/>
    </section>
  )
}

function ProjectCard (props) {
  // eslint-disable-next-line react/prop-types
  const { projectTitle, projectDescription, arrayOfTech, liveLink, codeLink, projectImage } = props;
  return (
    <div className='flex flex-col-reverse sm:flex-row justify-around p-12 my-6 border-2 border-black'>
      <div className='max-w-2xl'>
        <h3 className=' text-xl mt-6 sm:mt-0 sm:text-3xl mb-6 font-semibold'>{projectTitle}</h3>
        <p className='text-lg sm:text-xl py-4 max-w-xl'>{projectDescription}</p>
        <div className='my-10'>
          <h3 className='text-2xl mb-4 font-semibold'>Tech used</h3>
          <ul className='flex gap-4 flex-wrap '>
            {
              // eslint-disable-next-line react/prop-types
              arrayOfTech.map((item) => {
              return (
                <li key={item.id} className='text-lg text-center'>
                  <img src={item.url} className='w-12 mx-auto'></img>
                  {item.techName}
                </li>
              )
              })
            }
          </ul>
        </div>
        <div className='my-12 flex flex-col sm:flex-row items-center'>
          <a href={liveLink} target='_blank' rel='noreferrer' className='bg-red-600/90 hover:bg-red-400 text-white transition-colors mb-4 sm:mb-0 px-10 py-3 sm:py-2 rounded-full sm:mr-4 text-base sm:text-lg'>Live Project</a>
          <a href={codeLink} target='_blank' rel='noreferrer' className='hover:bg-red-600 hover:text-white transition-colors  px-10 py-3 sm:py-2 rounded-full border-slate-400 border-[1px] text-base sm:text-lg'>Source Code</a>
        </div>
      </div>
      <div className='max-w-2xl sm:p-8 flex items-center'>
        <img className='w-full h-auto' src={projectImage}></img>
      </div>
    </div>
  )
}

export default Projects