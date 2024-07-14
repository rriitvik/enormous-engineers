import React,{useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS,SCHEMES } from '../utils/swoldier'
function Header(props){
  const {index,title,description} = props
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-lg sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-xl sm:text-base mx-auto'>{description}</p>
    </div>
  )
}
export default function Generator() {
  const [showModel,setShowModel]=useState(false)
  const[poison,setPoison]=useState('individual')
  const [targets,setTargets]=useState([])
  const [goals,setGoals]=useState('strength_power')
  function toggleModel(){
    setShowModel(!showModel)
  }
  return (
    <SectionWrapper header={"optimize your workout"} title={['Engineers\'','Rush Hour']}>
      <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to enjoy"}/>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
      {Object.keys(WORKOUTS).map((type,typeIndex)=>{
        return (
          <button  className='bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600 px-3 py-4 rounded-lg' key={typeIndex}>
            <p className='capitalize'>
              {type.replace('_',' ')}
            </p>
          </button>
        )
      })}
      </div>
      {/* new header */}
      <Header index={'02'} title={'Lock on targets'} description={"Select the muscles judged for annihalation"}/>
      <div className='bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col'>
      <button onClick={toggleModel} className='relative p-3 flex items-center justify-center'>
      <p>Select muscle groups
      </p>
      <i className="fa-solid absolute right-3 
      top-1/2 -translate-y-1/2 fa-caret-down"></i>
      </button>
      {showModel && (
        <div>model</div>
  )}
      </div>
      {/* new header */}
      <Header index={'03'} title={'Become Juggernaut'} description={"Select your ultimate objective"}/>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
      {Object.keys(SCHEMES).map((scheme,schemeIndex)=>{
        return (
          <button  className='bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600 px-3 py-4 rounded-lg' key={schemeIndex}>
            <p className='capitalize'>
              {scheme.replace('_',' ')}
            </p>
          </button>
        )
      })}
      </div>
    </SectionWrapper>
  )
}
