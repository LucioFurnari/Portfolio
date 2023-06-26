
function Hero() {
  return (
    <section className={`h-[calc(100vh-60px)] relative before:bg-black/25 before:w-full before:h-full before:absolute bg-hero-pattern bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center`}>
      <h2 className='text-8xl text-white z-[1]'>Lucio <span className='text-sky-600'>Furnari</span></h2>
      <h2 className='text-4xl mt-4 text-white z-[1]'>I am a Frontend Developer</h2>
    </section>
  )
}

export default Hero