import React from 'react'
import data from "../../db.json"

const Footer = () => {

  const links = ["About" , "Project" , "Speaking" , "Users"]

  return (
    <footer className='flex flex-wrap items-center justify-center md:justify-between py-12 '>
      <ul className='flex gap-4 '>
        {
          links.map((link , index) => {
            return(
              <li key={index}>
                <a href="#" className='py-2 w-full block duration-200 opacity-[0.9] font-bold text-[0.88rem] dark:text-white dark:hover:text-[var(--blue)] hover:text-[var(--blue)]  dark:hover:opacity-100 hover:opacity-100'>{link}</a>
              </li>
            )
          })
        }
      </ul>
      <p className='py-2 text-center dark:text-white font-bold'>
        © 2023 Spencer Sharp. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer