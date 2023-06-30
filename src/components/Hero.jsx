
function Hero() {
  return (
    <section id='home' className={`min-h-screen relative before:bg-black/25 before:w-full before:h-full before:absolute bg-hero-pattern bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center`}>
      <h2 className='text-8xl text-white z-[1] text-center'>Lucio <span className='text-red-600'>Furnari</span></h2>
      <h2 className='text-4xl mt-4 text-white z-[1] text-center'>I am a Frontend Developer</h2>
    </section>
  )
}

export default Hero