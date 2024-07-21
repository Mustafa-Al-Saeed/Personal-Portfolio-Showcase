import React, { useState } from 'react'

import img from "../../Assets/Images/avatar.png"

import { IoIosCheckmarkCircle } from "react-icons/io";
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import {motion} from "framer-motion"

import dev from "../../Assets/Animations/dev.json"
import Lottie from 'lottie-react'

const Hero = () => {

  const links = [<AiOutlineTwitter/> , <AiOutlineInstagram/> , <AiOutlineGithub/> , <AiFillLinkedin/>]

  return (
    <section className='py-12 relative after:absolute lg:after:w-[calc(100%+128px)] after:w-[calc(100%+56px)] after:h-[1px] after:bg-[var(--border-color)] after:bottom-0 lg:after:left-[-64px] after:left-[-28px] '>
      <div className=' flex justify-between items-center'>
        <div className='desc lg:w-[60%]'> 
          <div className="pic flex items-end">
          <motion.div
          initial = {{ scale:(0) }}
          animate = {{ scale:(1) }}
          transition = {{ damping: 6, type: "spring", stiffness: 100 }}
          className="image w-24 border-[2px] border-[#ffa500] rounded-[50%]">
            <img src={img} alt="myPic" />
          </motion.div>
            <IoIosCheckmarkCircle className=' text-[var(--blue)] ml-1 mb-2 text-[20px]'/>
          </div>
          <div className="title my-6 dark:text-[var(--DM-W-T)] text-[45px] font-bold leading-[53px]">
            <motion.h1
              initial = {{ opacity : 0 }}
              animate = {{ opacity : 1 }}
              transition = {{ duration : 2 }}
            >
              Software designer, founder, and amateur astronaut.
            </motion.h1>
          </div>
          <div className="phara  dark:text-[var(--DM-G-T)] text-[black] leading-[20px] mb-8 ">
            <p>
              I’m Ali Hassan, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
            </p>
          </div>
          <div className="icons flex justify-between max-w-[170px] text-[27px] min-h-[30px] ">
            {
              links.map((link , index) => {
                return(
                  <a key={index} href="#" className=' dark:hover:text-[#fff] hover:text-[29px] hover:text-[var(--DM-G-T2)] text-[var(--LM-B-C3)] text-[var(--DM-G-T)] duration-300 '>
                    {link}
                  </a>
                )
              })
            }
          </div>
        </div>
        <div className='ani w-[40%] hidden lg:block'>
          <Lottie loop={true} animationData={dev} />
        </div>
      </div>
    </section>
  )
}

export default Hero