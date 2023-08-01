import aboutImg from '../assets/about_img.svg'
import resume from '../assets/Lucio_Furnari_CV.pdf';

function About () {
  return (
    <section id='about' className='flex flex-col justify-center py-20 px-4 sm:px-40 sm:ml-28'>
    <div className='m-auto px-6 sm:px-0 md:pr-6 lg:pr-8'>
        <h2 className=' text-4xl font-bold mb-4 pb-4 relative after:content-[" "] after:-z-[1] after:absolute after:bottom-0 after:left-0 after:bg-red-600 after:w-24 after:h-2'>About me</h2>
        <p className=''>Get to know me</p>
      <div className='grid md:grid-cols-2 gap-14 sm:ml-40 mt-6'>
        <img className=' hidden md:block md:w-full md:h-auto' src={aboutImg} alt='Men programming in his desktop'></img>
        <div>
          {/* <p className='text-red-700 text-2xl mb-4  font-semibold'>Who am i?</p> */}
          {/* <h2 className='text-2xl font-bold mb-6'>I&apos;m Lucio Furnari, a Front End developer</h2> */}
          <p className='pb-6 mb-6 border-b-[1px] border-slate-400/75'>
            I&apos;m a front-end programmer with 1 year of web development experience using technologies like React and responsive page design with Tailwind CSS.
            I am currently learning backend, using firebase and node js with express.
            And taking a course on databases
          </p>
          <div>
            <div className='flex justify-around mb-6'>
              <span>From: Argentina</span>
              <span>Email: <a href='mailto:luciofurnari99@gmail.com' className=' text-red-600'>luciofurnari99@gmail.com</a></span>
            </div>
            <div className='flex flex-row  items-center justify-center md:justify-normal'>
              <a href={resume} download='Lucio_Furnari_Cv' className='bg-red-600/90 hover:bg-red-400 text-white transition-colors px-6 sm:px-8 md:px-10 py-2 rounded-full mr-4 text-sm md:text-lg'>My resume</a>
              <a href='#projects' className='hover:bg-red-600/90 hover:text-white transition-color rounded-full border-slate-400 border-[1px] px-6 sm:px-8  md:px-10 py-2 text-sm md:text-lg'>My projects</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default About