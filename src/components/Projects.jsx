import onlineShopImage from  '../assets/online_shop.png';
import reactIcon from '../assets/react_icon.svg';
import tailwindIcon from '../assets/tailwind_icon.svg';
import firebaseIcon from '../assets/firebase_icon.svg';
import reactRouterIcon from '../assets/react-router_icon.svg';
import viteIcon from '../assets/vite_icon.svg';

function Projects () {
  return (
    <section className='py-20 px-40'>
    <h2 className='text-4xl relative font-semibold mb-6 pb-4 after:content-[" "] after:absolute after:bottom-0 after:left-0 after:bg-red-600 after:w-24 after:h-2 '>Projects</h2>
    <div className='flex justify-around p-12 border-2 border-black'>
      <div className='max-w-2xl'>
        <h3 className='text-3xl mb-6 font-semibold'>Online shop</h3>
        <p className='text-xl py-4 max-w-xl'>A full stack single page application built with React, Tailwind css and Firebase for back end, that allow user to register, login, create 
          a shop cart and buy products.
        </p>
        <div className='my-10'>
          <h3 className='text-2xl mb-4 font-semibold'>Tech used</h3>
          <ul className='flex gap-4 flex-wrap '>
            <li className='text-lg text-center'>
              <img src={reactIcon} className='w-12 mx-auto'></img>
              React js
            </li>
            <li className='text-lg text-center'>
              <img src={tailwindIcon} className='w-12 mx-auto'></img>
              Tailwind css
            </li>
            <li className='text-lg text-center'>
              <img src={firebaseIcon} className='w-12 mx-auto'></img>
              Firebase 
            </li>
            <li className='text-lg text-center'>
              <img src={reactRouterIcon} className='w-12 mx-auto'></img>
              React router
            </li>
            <li className='text-lg text-center'>
              <img src={viteIcon} className='w-12 mx-auto'></img>
              Vite
            </li>
          </ul>
        </div>
        <div className='my-12'>
          <a href='https://luciofurnari.github.io/shopping-cart/' target='_blank' rel='noreferrer' className='bg-red-600/90 hover:bg-red-400 text-white transition-colors px-10 py-2 rounded-full mr-4 text-lg'>Live Project</a>
          <a href='https://github.com/LucioFurnari/shopping-cart' target='_blank' rel='noreferrer' className='hover:bg-red-600 hover:text-white transition-colors px-10 py-2 rounded-full border-slate-400 border-[1px] text-lg'>Source Code</a>
        </div>
      </div>
      <div className='max-w-2xl p-8 flex items-center'>
        <img className='w-full h-auto' src={onlineShopImage}></img>
      </div>
    </div>
    </section>
  )
}

export default Projects