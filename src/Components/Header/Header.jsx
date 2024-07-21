import React, { useRef, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import Nav from './Nav';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useSelector , useDispatch } from 'react-redux';
import { setColor } from '../../Store/Slices/Main';
import { setShowLayer } from "../../Store/Slices/ShowLayer"

const Header = () => {

  const currentMode = useSelector((state) => state.main.currentMode) === "dark";
  const showLayer = useSelector((state) => state.showLayer.layerStatus);

  const dispatch = useDispatch()

  return (
    <header className='flex items-center justify-between mt-[1.2rem] px-9'>
      <div onClick={() => dispatch(setShowLayer(false))} className='p-2 border-[#fcca9e] shadow-icon-shadow duration-500 cursor-pointer border-[1px] md:hidden dark:text-[#fdfdfd] rounded-[50%] hover:border-[#ffa500]'>
        <AiOutlineMenu />
      </div>
      <div />
      <Nav flexLinks="flex" styles="rounded-[55px] hidden md:block"/>
      <div  className='p-2 shadow-icon-shadow border-[#818181] duration-500 cursor-pointer border-[1px] rounded-[50%] hover:border-[#ffa500]'>
      {
        currentMode ?<FiSun onClick={() => dispatch(setColor("light"))} className=' text-[#ffa500] ' /> : <BsFillMoonStarsFill onClick={() => dispatch(setColor("dark"))} className=' text-[#ffa500]'/>
      }
      </div>
      {showLayer ? <div className=' backdrop-blur-sm fixed inset-0 z-50 bg-[#000000de] dark:bg-[#4a4a50b3] block md:hidden '>
        <Nav styles="animate-linksShow w-[80%] mx-auto relative mt-9 rounded-[15px]" link={` border-b-[var(--border-color)]`} border="border-b-[1px]" borderN="border-none" />
      </div> : ""}
    </header>
  )
}

export default Header
