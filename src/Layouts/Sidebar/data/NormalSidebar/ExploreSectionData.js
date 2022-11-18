import { MdLiveTv } from "react-icons/md";
import { HiFire } from "react-icons/hi";
import { TbMusic } from "react-icons/tb";
import { GiConsoleController } from "react-icons/gi";
import { TfiCup } from "react-icons/tfi";

const ExploreSection = [
  {
    title: "Trendler",
    icon: <HiFire />,
    url: "/",
  },
  {
    title: "Müzik",
    icon: <TbMusic />,
    url: "/",
  },
  {
    title: "Canlı",
    icon: <MdLiveTv />,
    url: "/",
  },
  {
    title: "Oyun",
    icon: <GiConsoleController />,
    url: "/",
  },
  {
    title: "Spor",
    icon: <TfiCup />,
    url: "/",
  },
];
export default ExploreSection;
