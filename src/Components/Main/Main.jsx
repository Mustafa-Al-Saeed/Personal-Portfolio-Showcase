import React, { useEffect, useRef, useState } from 'react'
import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import data from "../../db.json"

const Main = () => {
    const [activeLink, setActiveLink] = useState(null)
    const [currentProjects, setCurrentProjects] = useState([...data.projectDataa.htmlandcss.blogs , ...data.projectDataa.javascript.blogs , ...data.projectDataa.reactandmui.blogs , ...data.projectDataa.nodeandexpress.blogs])
    
    const current = (theIndex) => {
      if(theIndex !== null ){
        setActiveLink(theIndex)
        setCurrentProjects(Object.values(data.projectDataa)[theIndex].blogs)
      }else {
        setActiveLink(null)
        let t = []
        Object.values(data.projectDataa).map((data) => {
          data.blogs.map((data2) => {
            t.push(data2)
          })
        })
        setCurrentProjects(t)
      }
    }

  return (
    <section className='main py-12 flex flex-wrap justify-between relative after:absolute lg:after:w-[calc(100%+128px)] after:w-[calc(100%+56px)] after:h-[1px] after:bg-[var(--border-color)] after:bottom-0 lg:after:left-[-64px] after:left-[-28px]'>
      <div className='w-full md:w-[27%] mb-10'>
        <ul className='w-full text-center'>
            <li className=' mb-[10px] '>
              <button onClick={() => current(null)} className={` py-4 text-[var(--DM-W-T)] font-bold rounded-md bg-[var(--LM-B-C)] opacity-50 w-full ${activeLink === null && "active-article dark:border-[var(--blue)] dark:border-[1px]"}`}>All Project</button>
            </li>
            {
              Object.values(data.projectDataa).map((sec, index) => {
                return(
                  <li className='  mb-[10px] ' key={index}>
                    <button onClick={() => {current(index)}} className={`py-4 text-[var(--DM-W-T)] font-bold rounded-lg bg-[var(--LM-B-C)] opacity-50 w-full ${index == activeLink && "active-article dark:border-[var(--blue)] dark:border-[1px]"}`}>{sec.title}</button>
                  </li>
                )
              })
            }
        </ul>
      </div>
      <div className="flex flex-wrap w-full md:w-[67%]">
        {
          currentProjects.map((blog, index) => {
            return(
              <div className=' rounded-xl overflow-hidden border-[var(--border-color)] border-[1px] mb-10 py-2' key={index}>
                <div className=''>
                  <img className=' h-full w-full' src={blog.image} alt="" />
                </div>
                <div className=' text-xl dark:text-[var(--DM-W-T)] text-black font-bold py-2'>{blog.title}</div>
                <p className=''>{blog.paragraph}</p>
                <div className=' flex justify-between'>
                  <ul className='flex'>
                    <a href={blog.url}><BsLink45Deg/></a>
                    <a href={blog.githuburl}><AiFillGithub/></a>
                  </ul>

                  <a href="#">more plus icon</a>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main

// import React, { useEffect, useRef, useState } from 'react'
// import { BsLink45Deg } from "react-icons/bs";
// import { AiFillGithub } from "react-icons/ai";
// import data from "../../db.json"

// const Main = () => {
//     const [activeLink, setActiveLink] = useState(null)
//     const [currentProjects, setCurrentProjects] = useState([...data.projectDataa.htmlandcss.blogs , ...data.projectDataa.javascript.blogs , ...data.projectDataa.reactandmui.blogs , ...data.projectDataa.nodeandexpress.blogs])
    
//     const current = (theIndex) => {
//       if(theIndex !== null ){
//         setActiveLink(theIndex)
//         setCurrentProjects(Object.values(data.projectDataa)[theIndex].blogs)
//       }else {
//         setActiveLink(null)
//         let t = []
//         Object.values(data.projectDataa).map((data) => {
//           data.blogs.map((data2) => {
//             t.push(data2)
//           })
//         })
//         setCurrentProjects(t)
//       }
//     }

//   return (
//     <section className='main py-12 flex flex-wrap justify-between relative after:absolute lg:after:w-[calc(100%+128px)] after:w-[calc(100%+56px)] after:h-[1px] after:bg-[var(--border-color)] after:bottom-0 lg:after:left-[-64px] after:left-[-28px]'>
//       <div className='  sm:w-[27%] mb-10'>
//         <ul className='flex flex-wrap justify-center'>
//             <li className='md:w-full mx-1 px-1 text-center'>
//               <button onClick={() => current(null)} className={`w-full xs:w-[9rem] md:max-w-[11rem] rounded-md transition text-[var(--DM-W-T)] font-bold bg-[var(--DM-G-T2)] opacity-50 hover:opacity-100 py-3  mb-2 ${activeLink === null && "active-article dark:border-[var(--blue)] dark:border-[1px]"}`}>All Project</button>
//             </li>
//             {
//               Object.values(data.projectDataa).map((sec, index) => {
//                 return(
//                   <li className='md:w-full mx-1 px-1 text-center' key={index}>
//                     <button onClick={() => {current(index)}} className={`w-full xs:w-[9rem] md:max-w-[11rem] rounded-md transition text-[var(--DM-W-T)] font-bold bg-[var(--DM-G-T2)] opacity-50 hover:opacity-100 py-3  mb-2 ${index == activeLink && "active-article dark:border-[var(--blue)] dark:border-[1px]"}`}>{sec.title}</button>
//                   </li>
//                 )
//               })
//             }
//           </ul>
//       </div>
//       <div className="projects sm:w-[67%] mx-auto ">
//         {
//           currentProjects.map((blog, index) => {
//             return(
//               <div className='' key={index}>
//                 <div>
//                   <img className='w-full' src={blog.image} alt="" />
//                 </div>
//                 <div>{blog.title}</div>
//                 <p>{blog.paragraph}</p>
//                 <div>
//                   <ul>
//                     <a href={blog.url}><BsLink45Deg/></a>
//                     <a href={blog.githuburl}><AiFillGithub/></a>
//                   </ul>

//                   <a href="#">more plus icon</a>
//                 </div>
//               </div>
//             )
//           })
//         }
//       </div>
//     </section>
//   )
// }

// export default Main