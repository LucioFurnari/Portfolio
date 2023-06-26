
function Nav() {

  return (
    <nav className='flex items-center justify-evenly bg-stone-900'>
      <a href="#home" className=' text-slate-100 text-[24px] px-[24px] py-[12px] rounded-full'>Home</a>
      <a href="#about" className=' text-slate-100 text-[24px] px-[24px] py-[12px] rounded-full'>About</a>
      <a href="#projects" className=' text-slate-100 text-[24px] px-[24px] py-[12px] rounded-full'>Projects</a>
      <a href="#contact" className=' text-slate-100 text-[24px] px-[24px] py-[12px] rounded-full'>Contact</a>
    </nav>
  )
}

export default Nav