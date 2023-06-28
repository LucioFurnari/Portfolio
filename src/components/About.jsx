import aboutImg from '../assets/about_img.svg'

function About () {
  return (
    <section id='about' className='flex flex-col justify-center px-10 py-20'>
    <div className=' m-auto'>
        <h2 className='ml-40 text-4xl font-bold mb-4'>About me</h2>
        <p className='ml-40'>Get to know me</p>
      <div className='grid grid-cols-2 gap-14 mx-40'>
        <img src={aboutImg} alt='Men programming in his desktop'></img>
        <div>
          <span className='text-red-700 text-2xl mb-4'>Who am i?</span>
          <h2 className='text-2xl font-bold mb-6'>I&apos;m Lucio Furnari, a Front End developer</h2>
          <p className='pb-10 border-b-[1px] border-slate-400/75'>
            Soy un programador front-end con 1 año de experiencia en el desarrollo web utilizando tecnologías como React y el diseño de páginas responsive con Tailwind CSS.
          </p>
          <div className='mt-10'>
            <div className='grid grid-cols-2 mb-10'>
              <span>From: Argentina</span>
              <span>Email: <a href='mailto:luciofurnari99@gmail.com' className=' text-red-600'>luciofurnari99@gmail.com</a></span>
            </div>
            <button className='bg-red-600/90 text-white px-10 py-2 rounded-full mr-4 text-lg'>My resume</button>
            <button className='px-10 py-2 rounded-full border-slate-400 border-[1px] text-lg'>My projects</button>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default About