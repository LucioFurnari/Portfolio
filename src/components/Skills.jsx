import javascriptIcon from '../assets/js_icon.svg'

function Skills () {
  return (
    <section>
      <h2 className='text-4xl'>My skills</h2>
      <div className='grid grid-cols-3 gap-12'>
        <Card url={javascriptIcon}/>
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