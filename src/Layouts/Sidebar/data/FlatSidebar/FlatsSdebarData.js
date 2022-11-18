import {
  AiOutlineHome,
  AiFillYoutube,
  AiFillBook,
  AiOutlineDownload,
} from "react-icons/ai";
import { RiVideoFill } from "react-icons/ri";
import { MdVideoLibrary, MdMusicNote } from "react-icons/md";

 const flatside = [
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
  {
    title: "Kitaplık",
    icon: <AiFillBook />,
    link: "/",
  },
  {
    title: "İndirilenler",
    icon: <AiOutlineDownload />,
    link: "/",
  },
];

export default flatside;
