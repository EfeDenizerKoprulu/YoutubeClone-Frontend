import { AiOutlineHome, AiFillYoutube } from "react-icons/ai";
import { RiVideoFill } from "react-icons/ri";
import { MdVideoLibrary, MdMusicNote } from "react-icons/md";

const SidebarsectionOne = [
  {
    title: "Anasayfa",
    icon: <AiOutlineHome />,
    link: "/",
  },
  {
    title: "Shorts",
    icon: <RiVideoFill />,
    link: "/",
  },
  {
    title: "Abonelikler",
    icon: <MdVideoLibrary />,
    link: "/",
  },
  {
    title: "Originals",
    icon: <AiFillYoutube />,
    link: "/",
  },
  {
    title: "YouTube Music",
    icon: <MdMusicNote />,
    link: "/",
  },
];

export default SidebarsectionOne;
