import React,{useState} from "react";
import "./keyboardshortcutpage.css";
import { globalVideo, main, play, subtitle } from "./data/index";

export default function KeyboardShortcutPage() {

  const [close, setclose] = useState(false)

const HandleClickCloseElement = () => {
  setclose(!close)

  if(!close){
 document.querySelector("#close-keyboard-shortcut").style.display="none"
  }
}

  return (
    <div id="close-keyboard-shortcut" className="keyboardShortcut-main">
      <div className="keyboardShortcut-title">Klavye kısayolları</div>

      <div className="keyboardShortcut">
        <div className="keyboardShortcut-play-section genereal-settings">
          <h4>Oynat</h4>
          {play.map((playdata) => (
            <div>
               <div id="horizontal-line"></div>
              {playdata.name}{" "}
              <div className="keyboardShortcut-key">
                <span>{playdata.shortcut}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="keyboardShortcut-main-section genereal-settings">
          <h4>Genel</h4>
          {main.map((maindata) => (
            <div>
             <div id="horizontal-line"></div>
              {maindata.name}{" "}
              <div className="keyboardShortcut-key">
                <span>{maindata.shortcut}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="keyboardShortcut-subtitle-section genereal-settings">
          <h4>Altyazı</h4>
          {subtitle.map((subtitledata) => (
            <div>
              <div id="horizontal-line"></div>
              {subtitledata.name}{" "}
              <div className="keyboardShortcut-key">
                <span>{subtitledata.shortcut}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="keyboardShortcut-global-video-section genereal-settings">
          <h4>Küresel Videolar</h4>
          {globalVideo.map((globaldata) => (
            <div>
              <div id="horizontal-line"></div>
              {globaldata.name}{" "}
              <div className="keyboardShortcut-key">
                <span>{globaldata.shortcut}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="buttom-bar">
      <div id="horizontal-line"></div>
        <h4 onClick={HandleClickCloseElement}>kapat</h4>
      </div>
    </div>
  );
}
