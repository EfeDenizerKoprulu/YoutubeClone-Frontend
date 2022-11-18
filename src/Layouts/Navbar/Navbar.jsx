import React, { useState } from "react";
import "./navbar.css";
import { ytlogo, avatar } from "../../img/index";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineVideoCamera } from "react-icons/ai";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsSearch, BsMicFill } from "react-icons/bs";
import ProfileTab from "./ProfileTab/ProfileTab";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [profile, setProfile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const HandleOpenProfile = () => {
    setProfile(!profile);
  };
  const HandleOpensidebar = () => {
    const element = document.querySelector("#flat-sidebar");
    const element2 = document.querySelector("#sidebar");
    const element3 = document.querySelector(".sidebar-main");
    const element4 = document.querySelector(".home");
    const element5= document.querySelectorAll(".videoBox");
    console.log(element5);
    


    setSidebar("normal");
    if (sidebar === "normal") {
      element.classList.toggle("close-sidebar");
      element2.classList.toggle("open-sidebar");
      element3.classList.toggle("sidebarV2");
      element4.classList.toggle("padding")


      for (let i = 0; i < element5.length; i++) {
        element5[i].classList.toggle("box-size")
      }

      setSidebar("flat");
    } else if (setSidebar === "flat") {
      element.classList.toggle("open-sidebar");
      element2.classList.toggle("close-sidebar");
      setSidebar("normal");
    }
  };

  return (
    <>
      <header className="navbar">
        <div className="humburger" onClick={HandleOpensidebar}>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <Link to="/">
          <img src={ytlogo} alt="ytlogo" className="logo" />
        </Link>

        <div className="search-main">
          <div className="search-bar">
            <span className="icon-search">
              <BsSearch />
            </span>
            <input
              type="text"
              placeholder="Ara"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search !== "" && (
              <span onClick={() => setSearch("")}>
                <AiOutlineClose />
              </span>
            )}
            <button>
              <BsSearch />
            </button>
          </div>
          <div className="mic">
            <BsMicFill />
          </div>
        </div>
        <div className="profiletab">
          <span>
            <AiOutlineVideoCamera />
          </span>
          <span>
            <MdOutlineNotificationsNone />
          </span>
          <span className="profile" onClick={HandleOpenProfile}>
            <img src={avatar} />
          </span>
        </div>
      </header>
      {profile ? <ProfileTab /> : null}
    </>
  );
}
