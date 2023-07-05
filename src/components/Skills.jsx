import javascriptIcon from '../assets/js_icon.svg';
import reactIcon from '../assets/react_icon.svg';
import htmlIcon from '../assets/html_icon.svg';
import cssIcon from '../assets/css_icon.svg';
import tailwindIcon from '../assets/tailwind_icon.svg';
import typescriptIcon from '../assets/typescript_icon.svg';
import bootstrapIcon from  '../assets/bootstrap_icon.svg';
import sassIcon from '../assets/sass_icon.svg';
import jestIcon from '../assets/jest_icon.svg';
import nodejsIcon from '../assets/nodeJs_icon.svg';
import webpackIcon from '../assets/webpack_icon.svg';
import viteIcon from '../assets/vite_icon.svg';
import firebaseIcon from '../assets/firebase_icon.svg';
import gitIcon from '../assets/git_icon.svg';

function Skills () {
  return (
    <section id='skills' className='bg-zinc-100 px-4 sm:pl-36 xl:pr-20 xl:pl-64 py-12 flex flex-col items-center '>
      <h2 className='text-4xl my-6 font-semibold'>My skills</h2>
      <ul className='grid grid-cols-3   xl:grid-cols-[minmax(100px,_200px)_minmax(100px,_200px)_minmax(100px,_200px)_minmax(100px,_200px)_minmax(100px,_200px)] justify-items-center gap-8'>
            <Card url={reactIcon} altText='React js icon' imgText='React Js' />
            <Card url={tailwindIcon} altText='Tailwind css icon' imgText='Tailwind Css' />
            <Card url={bootstrapIcon} altText='Bootstrap icon' imgText='Bootstrap' />
            <Card url={sassIcon} altText='Sass icon' imgText='Sass' />
            <Card url={htmlIcon} altText='Html icon' imgText='Html' />
            <Card url={cssIcon} altText='Css icon' imgText='Css' />
            <Card url={javascriptIcon} altText='Javascript icon'  imgText='Javascript' />
            <Card url={nodejsIcon} altText='Node js icon' imgText='Node Js' />
            <Card url={firebaseIcon} altText='Firebase icon' imgText='Firebase' />
            <Card url={typescriptIcon} altText='Typescript icon' imgText='Typescript' />
            <Card url={jestIcon} altText='Jest icon' imgText='Jest' />
            <Card url={webpackIcon} altText='Webpack icon' imgText='Webpack' />
            <Card url={viteIcon} altText='Vite icon' imgText='Vite' />
            <Card url={gitIcon} altText='Git icon' imgText='Git' />
      </ul>
    </section>
  )
}

export default Skills

function Card (props) {
  // eslint-disable-next-line react/prop-types
  const { url, altText, imgText } = props
  return (
    <li className='bg-white p-2 sm:p-4 flex flex-col justify-center items-center w-full rounded-lg border-2 border-zinc-500'>
      <img src={url} alt={altText} className=' w-12 sm:w-full h-auto'></img>
      <p className='mt-2 sm:mt-4 text-lg text-center'>{imgText}</p>
    </li>
  )
}