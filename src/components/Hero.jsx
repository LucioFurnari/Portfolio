
function Hero() {
  return (
    <section id='home' className={`relative bg-hero-pattern   min-h-screen -z-[1] before:bg-black/25 before:w-full before:h-full before:absolute  bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center py-20 px-20 sm:px-40 sm:ml-28`}>
      {/* <div className="absolute w-96 h-96 rounded-full bg-red-600 blur-3xl left-1/2 top-0"></div> */}
      <h2 className='text-8xl text-white z-[1] text-center '>Lucio <span className='text-red-600'>Furnari</span></h2>
      <h2 className='text-4xl mt-4 text-white z-[1] text-center'>Frontend Developer</h2>
    </section>
  )
}

export default Hero