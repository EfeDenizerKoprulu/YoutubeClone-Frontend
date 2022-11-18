import React, { useState } from "react";
import "./profiletab.css";
import { avatar } from "../../../img";
import { Link } from "react-router-dom";
import { BiUser, BiShield, BiMoon, BiHelpCircle } from "react-icons/bi";
import {
  MdSwitchAccount,
  MdOutlineExitToApp,
  MdOutlineKeyboardAlt,
  MdFeedback,
} from "react-icons/md";
import {
  HiOutlineAtSymbol,
  HiOutlineMoon,
  HiOutlineTranslate,
} from "react-icons/hi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiShieldUserLine } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowForward, IoIosSettings } from "react-icons/io";
import Theme from "./ThemePage/ThemePage";
import LanguagePage from "./LanguagePage/LanguagePage";
import KeyboardShortcutPage from "./KeyboardShortcuts/KeyboardShortcutPage";

export default function ProfileTab() {
  const [themepage, setthemepage] = useState(false);
  const [language, setlanguage] = useState(false);
  const [keyboardShortcut, setkeyboardShortcut] = useState(false);

  const openThemePage = () => {
    setthemepage(!themepage);

    if (!themepage) {
      const box = document.querySelector(".profile-menu");
      box.setAttribute("id", "hide");
      document.querySelector("#hide").style.display = "none";
    }
  };

  const openLanguagePage = () => {
    setlanguage(!language);

    if (!language) {
      const box = document.querySelector(".profile-menu");
      box.setAttribute("id", "hide");
      document.querySelector("#hide").style.display = "none";
    }
  };

  const openKeyboardShortcutPage = () => {
    setkeyboardShortcut(!keyboardShortcut);

    if (!keyboardShortcut) {
      const box = document.querySelector(".profile-menu");
      box.setAttribute("id", "hide");
      document.querySelector("#hide").style.display = "none";
    }
  };

  return (
    <>
      <div className="profile-menu">
        <div className="avatar">
          <img src={avatar} />
          <div className="avatar-countent">
            <h3>Efe Denizer Köprülü</h3>
            <Link className="avatar-link">Google Hessabınızı Yönetin</Link>
          </div>{" "}
          <div id="horizontal-line"></div>
          <div className="settings">
            <div>
              <span>
                <BiUser />
              </span>{" "}
              Kanalınız
            </div>

            <div>
              <span>
                <HiOutlineAtSymbol />
              </span>{" "}
              Youtube Studio
            </div>

            <div>
              <span>
                <MdSwitchAccount />
              </span>{" "}
              Hesap Değiştir{" "}
              <span id="settings-arrow">
                <IoIosArrowForward />
              </span>{" "}
            </div>

            <div>
              <span>
                <MdOutlineExitToApp />
              </span>{" "}
              Oturum Kapat
            </div>
            <div id="horizontal-line"></div>

            <div>
              <span>
                <AiOutlineDollarCircle />
              </span>{" "}
              Satın Alınanlar ve Üyelikler
            </div>

            <div>
              <span>
                <RiShieldUserLine />
              </span>{" "}
              Youtube'daki Verileriniz
            </div>

            <div id="horizontal-line"></div>

            <div onClick={openThemePage}>
              <span>
                <BiMoon />
              </span>{" "}
              Görünüm
              <span id="settings-arrow">
                <IoIosArrowForward />
              </span>{" "}
            </div>

            <div onClick={openLanguagePage}>
              <span>
                <HiOutlineTranslate />
              </span>{" "}
              Dil{" "}
              <span id="settings-arrow">
                <IoIosArrowForward />
              </span>{" "}
            </div>

            <div>
              <span>
                <BiShield />
              </span>{" "}
              Kısıltı Mod <span id="settings-arrow"></span>{" "}
            </div>

            <div>
              <span>
                <TfiWorld />
              </span>{" "}
              Konum <span id="settings-arrow"></span>{" "}
            </div>

            <div onClick={openKeyboardShortcutPage}>
              <span>
                <MdOutlineKeyboardAlt />
              </span>{" "}
              Klavye kısyolları <span id="settings-arrow"></span>{" "}
            </div>

            <div id="horizontal-line"></div>

            <div>
              <span>
                <IoIosSettings />
              </span>{" "}
              Ayarlar
            </div>

            <div id="horizontal-line"></div>

            <div>
              <span>
                <BiHelpCircle />
              </span>{" "}
              Yardım
            </div>

            <div>
              <span>
                <MdFeedback />
              </span>{" "}
              Geri Bildirim Gönder
            </div>
          </div>
        </div>
      </div>

      {themepage ? <Theme /> : null}
      {language ? <LanguagePage /> : null}
      {keyboardShortcut ? <KeyboardShortcutPage /> : null}
    </>
  );
}
