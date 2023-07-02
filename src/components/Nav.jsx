import homeIcon from '../assets/home_icon.svg';
import aboutIcon from '../assets/about_icon.svg';
import skillsIcon from '../assets/skills_icon.svg';
import projectIcon from '../assets/projects_icon.svg';
import contactIcon from '../assets/contact_icon.svg';

function Nav() {

  return (
    <nav className='overflow-x-scroll flex sm:flex-col items-center justify-evenly bg-stone-900 fixed bottom-0 sm:top-0 left-0 w-full sm:w-auto sm:h-full p-4 z-[2]'>
      <a href="#home" className='flex flex-col xl:flex-row items-center w-full text-slate-100 hover:bg-red-500 transition-colors text-[24px] px-[24px] py-[12px] rounded-full'><img className='w-4 sm:w-6 mb-1 xl:mb-0 xl:w-8 xl:mr-4' src={homeIcon}></img><span className='text-xs xl:text-xl'>Home</span></a>
      <a href="#about" className='flex flex-col xl:flex-row items-center w-full text-slate-100 hover:bg-red-500 transition-colors text-[24px] px-[24px] py-[12px] rounded-full'><img className='w-4 sm:w-6 mb-1 xl:mb-0 xl:w-8 xl:mr-4' src={aboutIcon}></img><span className='text-sm xl:text-xl'>About</span></a>
      <a href="#skills" className='flex flex-col xl:flex-row items-center w-full text-slate-100 hover:bg-red-500 transition-colors text-[24px] px-[24px] py-[12px] rounded-full'><img className='w-4 sm:w-6 mb-1 xl:mb-0 xl:w-8 xl:mr-4' src={skillsIcon}></img><span className='text-sm xl:text-xl'>Skills</span></a>
      <a href="#projects" className='flex flex-col xl:flex-row items-center w-full text-slate-100 hover:bg-red-500 transition-colors text-[24px] px-[24px] py-[12px] rounded-full'><img className='w-4 sm:w-6 mb-1 xl:mb-0 xl:w-8 xl:mr-4' src={projectIcon}></img><span className='text-sm xl:text-xl'>Projects</span></a>
      <a href="#contact" className='flex flex-col xl:flex-row items-center w-full text-slate-100 hover:bg-red-500 transition-colors text-[24px] px-[24px] py-[12px] rounded-full'><img className='w-4 sm:w-6 mb-1 xl:mb-0 xl:w-8 xl:mr-4' src={contactIcon}></img><span className='text-sm xl:text-xl'>Contact</span></a>
    </nav>
  )
}

export default Nav