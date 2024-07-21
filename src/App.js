import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import ContactUs from "./Components/ContactUs/ContactUs";          
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// &&
function App() { 

  const currentMode = useSelector(state => state.main.currentMode)
  useEffect(() => {
    document.documentElement.classList.add(currentMode)
    window.localStorage.setItem("status" , currentMode )
    document.body.classList.add(currentMode)
  }, [])
  

  return (
    <div className=" dark:bg-[#18181b] bg-[#f1f1f1] dark:border-[#27272c] border-solid border-[2px] border-[#cacaca84] container mx-auto lg:px-16 px-7">
      <Header/>
      <Hero/>
      <Main/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
