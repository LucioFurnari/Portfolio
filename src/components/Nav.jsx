import homeIcon from '../assets/home_icon.svg';
import aboutIcon from '../assets/about_icon.svg';
import skillsIcon from '../assets/skills_icon.svg';
import projectIcon from '../assets/projects_icon.svg';
import contactIcon from '../assets/contact_icon.svg';

function Nav() {

  return (
    <nav className='flex flex-col items-center justify-evenly bg-stone-900 fixed top-0 left-0 h-full z-20 p-4'>
      <a href="#home" className='flex items-center w-full text-slate-100 hover:bg-red-500 transition-colors text-[24px] px-[24px] py-[12px] rounded-full'><img className='w-8 mr-4' src={homeIcon}></img> Home</a>
      <a href="#about" className='flex items-center w-full text-slate-100 hover:bg-red-500 transition-colors text-[24px] px-[24px] py-[12px] rounded-full'><img className='w-8 mr-4' src={aboutIcon}></img> About</a>
      <a href="#skills" className='flex items-center w-full text-slate-100 hover:bg-red-500 transition-colors text-[24px] px-[24px] py-[12px] rounded-full'><img className='w-8 mr-4' src={skillsIcon}></img> Skills</a>
      <a href="#projects" className='flex items-center w-full text-slate-100 hover:bg-red-500 transition-colors text-[24px] px-[24px] py-[12px] rounded-full'><img className='w-8 mr-4' src={projectIcon}></img> Projects</a>
      <a href="#contact" className='flex items-center w-full text-slate-100 hover:bg-red-500 transition-colors text-[24px] px-[24px] py-[12px] rounded-full'><img className='w-8 mr-4' src={contactIcon}></img> Contact</a>
    </nav>
  )
}

export default Nav