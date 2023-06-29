import onlineShopImage from  '../assets/online_shop.png';
import { onlineShopProject } from './listOfProjects';

function Projects () {
  return (
    <section id='projects' className='py-20 px-40'>
    <h2 className='text-4xl relative font-semibold mb-6 pb-4 after:content-[" "] after:absolute after:bottom-0 after:left-0 after:bg-red-600 after:w-24 after:h-2 '>Projects</h2>
      <ProjectCard {...onlineShopProject}/>
    </section>
  )
}

function ProjectCard (props) {
  // eslint-disable-next-line react/prop-types
  const { projectTitle, projectDescription, arrayOfTech, liveLink, codeLink } = props;
  return (
    <div className='flex justify-around p-12 border-2 border-black'>
      <div className='max-w-2xl'>
        <h3 className='text-3xl mb-6 font-semibold'>{projectTitle}</h3>
        <p className='text-xl py-4 max-w-xl'>{projectDescription}</p>
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
        <div className='my-12'>
          <a href={liveLink} target='_blank' rel='noreferrer' className='bg-red-600/90 hover:bg-red-400 text-white transition-colors px-10 py-2 rounded-full mr-4 text-lg'>Live Project</a>
          <a href={codeLink} target='_blank' rel='noreferrer' className='hover:bg-red-600 hover:text-white transition-colors px-10 py-2 rounded-full border-slate-400 border-[1px] text-lg'>Source Code</a>
        </div>
      </div>
      <div className='max-w-2xl p-8 flex items-center'>
        <img className='w-full h-auto' src={onlineShopImage}></img>
      </div>
    </div>
  )
}

export default Projects