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
    <section id='skills' className='bg-zinc-100 px-10 py-10 flex flex-col items-center'>
      <h2 className='text-4xl mb-6 font-semibold'>My skills</h2>
      <ul className='grid grid-cols-[minmax(100px,_200px)_minmax(100px,_200px)_minmax(100px,_200px)_minmax(100px,_200px)_minmax(100px,_200px)] justify-items-center gap-8'>
            <Card url={reactIcon} altText='React js icon' />
            <Card url={tailwindIcon} altText='Tailwind css icon'/>
            <Card url={bootstrapIcon} altText='Bootstrap icon' />
            <Card url={sassIcon} altText='Sass icon' />
            <Card url={htmlIcon} altText='Html icon' />
            <Card url={cssIcon} altText='Css icon' />
            <Card url={javascriptIcon} altText='Javascript icon' />
            <Card url={nodejsIcon} altText='Node js icon' />
            <Card url={firebaseIcon} altText='Firebase icon' />
            <Card url={typescriptIcon} altText='Typescript icon' />
            <Card url={jestIcon} altText='Jest icon' />
            <Card url={webpackIcon} altText='Webpack icon' />
            <Card url={viteIcon} altText='Vite icon' />
            <Card url={gitIcon} altText='Git icon'/>
      </ul>
    </section>
  )
}

export default Skills

function Card (props) {
  // eslint-disable-next-line react/prop-types
  const { url, altText } = props
  return (
    <li className='bg-white p-4 flex items-center w-full rounded-lg border-2 border-zinc-500'>
      <img src={url} alt={altText} className='w-full h-auto'></img>
      <p></p>
    </li>
  )
}