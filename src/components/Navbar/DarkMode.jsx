import React, { useEffect, useState } from 'react'
import { AiFillSun } from "react-icons/ai";
import { WiMoonWaxing6 } from "react-icons/wi";

const DarkMode = () => {
    const [theme,setTheme]  = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") :"light"
    );

    const element = document.documentElement;
    useEffect(() =>{
        localStorage.setItem("theme",theme);
        if (theme === "dark"){
            element.classList.add("dark");
        }else{
            element.classList.remove("light");
            element.classList.remove("dark");
        }
    });
  return (
<>
{
    theme === "dark" ? (<AiFillSun onClick={() => setTheme("light")} className='text-2xl'/>):( <WiMoonWaxing6  onClick={() => setTheme("dark")}className='text-2xl' />)
}
</>
  );
};

export default DarkMode
