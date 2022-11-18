import React from "react";
import "./sidebar.css";
import {
  Flatsidebar,
  SidebarSectionOne,
  SidebarSectionTwo,
  Subscriber,
  ExploreSection,
  SettingsSection,
} from "./data/index";
import { Link } from "react-router-dom";

const OneSection = [
  "Hakkımızda",
  "Basın",
  "Telif Hakkı",
  "Bize ulaşın",
  "İçerik Üreticiler",
  "Rekalm Verme",
  "Geliştiriciler",
];
const TwoSection = [
  "Şartlar",
  "Gizlilik",
  "",
  " Politika ve Güvenlik",
  "Youtube Nasıl Çalışıyor?",
  "Yeni Özellikleri Deneyin",
];

export default function Sidebar() {
  return (
    <>
      <section className="sidebar-main">
        <aside id="flat-sidebar">
          {Flatsidebar.map((flat) => (
            <div className="flat-sidebar-item">
              <Link
                className="link-sidebar-item-flat link-sidebar"
                to={flat.link}
              >
                {" "}
                <span>{flat.icon}</span>
                {flat.title}
              </Link>
            </div>
          ))}
        </aside>

        <aside id="sidebar" className="close-sidebar">
          <div>
            {SidebarSectionOne.map((sidebarSectionOne) => (
              <div className="sidebar-item">
                <Link
                  className="link-sidebar-item link-sidebar"
                  to={sidebarSectionOne.link}
                >
                  {" "}
                  <span>{sidebarSectionOne.icon}</span>
                  {sidebarSectionOne.title}
                </Link>
              </div>
            ))}
          </div>
          <div id="horizontal-line"></div>

          <div>
            {SidebarSectionTwo.map((sidebarSectionTwo) => (
              <div className="sidebar-item">
                <Link
                  className="link-sidebar-item link-sidebar"
                  to={sidebarSectionTwo.link}
                >
                  {" "}
                  <span>{sidebarSectionTwo.icon}</span>
                  {sidebarSectionTwo.title}
                </Link>
              </div>
            ))}
          </div>

          <div id="horizontal-line"></div>

          <div>
            <h3>Abonelikler</h3>

            {Subscriber.map((subscriber) => (
              <div className="subs">
                <img src={subscriber.img} alt="/" />
                <h3>{subscriber.title}</h3>
              </div>
            ))}
          </div>

          <div id="horizontal-line"></div>

          <div>
            <h3>Keşfet</h3>

            {ExploreSection.map((exploreSection) => (
              <div className="sidebar-item">
                <Link
                  className="link-sidebar-item link-sidebar"
                  to={exploreSection.link}
                >
                  {" "}
                  <span>{exploreSection.icon}</span>
                  {exploreSection.title}
                </Link>
              </div>
            ))}
          </div>
          <div id="horizontal-line"></div>

          {SettingsSection.map((settingsSection) => (
            <div className="sidebar-item">
              <Link
                className="link-sidebar-item link-sidebar"
                to={settingsSection.link}
              >
                {" "}
                <span>{settingsSection.icon}</span>
                {settingsSection.title}
              </Link>
            </div>
          ))}
          <div id="horizontal-line"></div>
          <ul className="sidebar-buttom-info">
            {OneSection.map((one) => (
              <Link to="/">
                {" "}
                <li>{one}</li>
              </Link>
            ))}
          </ul>

          <ul className="sidebar-buttom-info">
            {TwoSection.map((two) => (
              <Link to="/">
                {" "}
                <li>{two}</li>
              </Link>
            ))}
          </ul>
          <div className="footer">© 2022 Google LLC</div>
        </aside>
      </section>
    </>
  );
}
