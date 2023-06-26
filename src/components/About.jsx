import aboutImg from '../assets/about_img.svg'

function About () {
  return (
    <section id='about' className='flex flex-col justify-center px-10 py-20'>
    <div className=' m-auto'>
        <h2 className='ml-40 text-4xl font-bold mb-4'>About me</h2>
        <p className='ml-40'>Get to know me</p>
      <div className='grid grid-cols-2 gap-14 mx-40'>
        <img src={aboutImg}></img>
        <div>
          <span className='text-orange-700 text-2xl mb-4'>Who am i?</span>
          <h2 className='text-2xl font-bold mb-6'>I&apos;m Lucio Furnari, a Front End developer</h2>
          <p className='pb-10 border-b-[1px] border-slate-400/75'>Placeholder Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur culpa iure officiis laborum enim unde corporis id illum! Alias illum praesentium sequi explicabo quod quisquam ea nostrum ab quo.</p>
          <div className='mt-10'>
            <button className='bg-red-600 px-10 py-2 rounded-full mr-4'>My resume</button>
            <button className='px-10 py-2 rounded-full border-slate-400 border-[1px]'>My projects</button>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default About