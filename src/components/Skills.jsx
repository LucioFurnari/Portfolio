import javascriptIcon from '../assets/js_icon.svg';
import reactIcon from '../assets/react.svg';
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

function Skills () {
  return (
    <section id='skills' className='bg-zinc-100'>
      <h2 className='text-4xl'>My skills</h2>
      <div className='grid grid-cols-3 gap-12'>
        <Card url={javascriptIcon}/>
        <Card url={reactIcon} />
        <Card url={htmlIcon} />
        <Card url={cssIcon}/>
        <Card url={tailwindIcon}/>
        <Card url={typescriptIcon} />
        <Card url={bootstrapIcon}/>
        <Card url={sassIcon}/>
        <Card url={jestIcon} />
        <Card url={nodejsIcon} />
        <Card url={webpackIcon} />
        <Card url={viteIcon} />
      </div>
    </section>
  )
}

export default Skills

function Card (props) {
  // eslint-disable-next-line react/prop-types
  const { url } = props
  return (
    <div>
      <img src={url} className=' w-24'></img>
      <p></p>
    </div>
  )
}