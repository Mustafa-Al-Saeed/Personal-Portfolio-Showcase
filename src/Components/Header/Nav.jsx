import React from 'react'
import { IoClose } from "react-icons/io5";
import { useSelector , useDispatch } from 'react-redux';
import { setShowLayer } from "../../Store/Slices/ShowLayer"

const Nav = (props) => {

    const showLayer = useSelector((state) => state.showLayer.layerStatus);
    const links = ["About" , "Articles" , "Projects" , "Speaking" , "Contact"]

    const dispatch = useDispatch()
    
    return (
        <nav className={`${props.flexIcon} ${props.styles}  dark:bg-[#27272a] bg-[#ffffff] shadow-ul-shadow py-[0.77rem] px-[1.6rem]  `}> 
            <ul className={`${props.flexLinks} gap-4 `}>
            {
                links.map((link , index) => {
                return(
                    <li key={index} className={`${props.link} ${index === 4 ? props.borderN : props.border}`} >
                        <a onClick={() => dispatch(setShowLayer(true))} className={`py-2 w-full block duration-200 opacity-[0.9] font-bold text-[0.88rem] dark:text-white dark:hover:text-[var(--blue)] hover:text-[var(--blue)] dark:hover:text-[0.9rem] hover:text-[0.9rem] dark:hover:opacity-100 hover:opacity-100`} href="#">
                            {link}
                        </a>
                    </li>
                )
                })
            }
            </ul>
            <IoClose onClick={() => dispatch(setShowLayer(true))} className=' absolute top-3 right-5 block md:hidden  text-[1.5rem] cursor-pointer duration-[0.5s] dark:text-white hover:text-red-800 hover:rotate-[360deg] dark:hover:text-red-800 hover:rotate-[360deg] '/>
        </nav>
    )
}

export default Nav