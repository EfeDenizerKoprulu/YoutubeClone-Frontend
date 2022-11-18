import React, { useState } from "react";
import "./themePage.css";
import { BsArrowLeft } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";
import ProfileTab from "../ProfileTab";

export default function ThemePage() {
  const [isDarkTheme, setisDarkTheme] = useState("dark");
  const [goBack, setgoBack] = useState(false)

  const handleThemes = () => {
    if (isDarkTheme === "dark") {
      const rootElement = document.getElementById("root");
      rootElement.classList.toggle("light-theme");
      setisDarkTheme("light");
      document.getElementById("light").style.zIndex = -1;
      document.getElementById("dark").style.zIndex = 0;
    } else if (isDarkTheme === "light") {
      document.getElementById("dark").style.zIndex = 0;
      const rootElement = document.getElementById("root");
      rootElement.classList.toggle("light-theme");
      setisDarkTheme("dark");
      document.getElementById("dark").style.zIndex = -1;
      document.getElementById("light").style.zIndex = 0;
    }
  };

  const openProfileTab = () => {
    setgoBack(!goBack);

    if (!goBack) {
      const box = document.querySelector(".main-Theme-page");
     box.setAttribute("id", "hide-theme-page");
     document.querySelector("#hide-theme-page").style.display="none"
     document.querySelector("#hide").style.removeProperty("display")
    }
  };

  return (
    <>
    <div className="main-Theme-page">
      <span onClick={openProfileTab}>
        <BsArrowLeft />
      </span>
      Görünüm
      <hr className="line" />
      <span id="text-theme">Ayar yankızca bu özellik için geçerlidir. </span>
      <div className="thame-options">
        <div onClick={handleThemes} id="dark" tabIndex="0">
          {" "}
          <span className="tick">
            <FaThumbsUp />
          </span>{" "}
          Koyu Tema{" "}
        </div>
        <div onClick={handleThemes} id="light" tabIndex="0">
          {" "}
          <span className="tick">
            <FaThumbsUp />
          </span>{" "}
          Açık Tema{" "}
        </div>
      </div>
    </div>
    </>
  );
}
