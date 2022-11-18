import React from "react";
import "./homePage.css";
import { Card } from "../../Components/Card/Card";
import Data from "./Data/CardData";

export default function HomePage() {
  return (
    <>
      <main className="home">
        {Data.map((card) => (
          <Card
            img={card.img}
            duration={card.videoTime}
            logo={card.channelImage}
            title={card.videoTitle}
            channel={card.channelName}
            views={card.TotalViews}
            uploadTime={card.uploadTime}
          />
        ))}
      </main>
    </>
  );
}
