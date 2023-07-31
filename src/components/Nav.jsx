import homeIcon from '../assets/home_icon.svg';
import aboutIcon from '../assets/about_icon.svg';
import skillsIcon from '../assets/skills_icon.svg';
import projectIcon from '../assets/projects_icon.svg';
import contactIcon from '../assets/contact_icon.svg';
import { useEffect, useState } from 'react';


function Nav() {

  return (
    <nav className='overflow-x-scroll flex sm:flex-col items-center gap-6 bg-stone-900 fixed bottom-0 sm:top-0 left-0 w-full sm:w-auto sm:h-full p-4 z-[2]'>
      <CustomLink linkName='Home' linkHref='#home' linkIcon={homeIcon}/>
      <CustomLink linkName='About' linkHref='#about' linkIcon={aboutIcon} />
      <CustomLink linkName='Skills' linkHref='#skills' linkIcon={skillsIcon} />
      <CustomLink linkName='Projects' linkHref='#projects' linkIcon={projectIcon} />
      <CustomLink linkName='Contact' linkHref='#contact' linkIcon={contactIcon} />
    </nav>
  )
}

export default Nav

// hover:bg-red-500 //

function CustomLink (props) {

  // eslint-disable-next-line react/prop-types
  const { linkName, linkHref, linkIcon } = props
  const [activeLink, setActiveLink] = useState(false);

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      if(window.location.hash == linkHref) {
        setActiveLink(true);
      } else {
        setActiveLink(false)
      }
    })
  }, [linkHref])

  return (
    <a href={linkHref} className={`${activeLink ? 'bg-red-500 ' : 'bg-inherit hover:bg-slate-700/40 '} flex flex-col xl:flex-row items-center w-full text-slate-100  transition-colors text-[24px] px-[24px] py-[12px] rounded-full`}>
      <img className='w-4 sm:w-6 mb-1 xl:mb-0 xl:w-8 xl:mr-4' src={linkIcon}></img>
      <span className='text-xs xl:text-xl'>{linkName}</span>
    </a>
  )
}