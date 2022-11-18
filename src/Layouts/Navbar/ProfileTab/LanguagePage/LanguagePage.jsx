import React,{useState} from 'react'
import "./languagePage.css"
import { BsArrowLeft } from "react-icons/bs";


export default function LanguagePage() {
    const [goBack, setgoBack] = useState(false)

    const openProfileTab = () => {
        setgoBack(!goBack);
    
        if (!goBack) {
          const box = document.querySelector(".language-main");
         box.setAttribute("id", "hide-language");
         document.querySelector("#hide-language").style.display="none"
         document.querySelector("#hide").style.removeProperty("display")
        }
      };

  return (
    <div className='language-main'>
         <span onClick={openProfileTab}>
        <BsArrowLeft />
      </span>
      Dil
      <hr className="line" />
      <div className="language-options">
        <div>Türkçe</div>
        <div>English</div>
      </div>
    </div>
  )
}
