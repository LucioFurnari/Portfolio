
function Projects () {
  return (
    <section className='p-20'>
      <h2 className='text-4xl relative font-semibold pb-4 after:content-[" "] after:absolute after:bottom-0 after:left-0 after:bg-red-600 after:w-24 after:h-2 '>Projects</h2>
      <div>
        <h3>Online shop</h3>
        <p>A full stack single page application built with React, Tailwind css and Firebase for back end, that allow user to register, login, create 
          a shop cart and buy products.
        </p>
        <div>
          <h3>Tech used</h3>
          <ul>
            <li>React js</li>
            <li>Tailwind css</li>
            <li>Firebase </li>
            <li>React router</li>
            <li>Vite</li>
          </ul>
        </div>
        <button>Live Project</button>
        <button>Source Code</button>
      </div>
    </section>
  )
}

export default Projects