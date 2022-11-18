import { AiFillBook, AiOutlineDownload } from "react-icons/ai";
import { BiHistory, BiLike } from "react-icons/bi";
import { MdOutlineVideoSettings, MdOutlineWatchLater } from "react-icons/md";

const sectionTwo = [
  {
    title: "Kitaplık",
    icon: <AiFillBook />,
    link: "/",
  },

  {
    title: "Geçmiş",
    icon: <BiHistory />,
    link: "/",
  },

  {
    title: "Videolarımız",
    icon: <MdOutlineVideoSettings />,
    link: "/",
  },

  {
    title: "Daha sonra izle",
    icon: <MdOutlineWatchLater />,
    link: "/",
  },
  {
    title: "İndirilenler",
    icon: <AiOutlineDownload />,
    link: "/",
  },
  {
    title: "Beğendiğim videolar",
    icon: <BiLike />,
    link: "/",
  },
];
export default sectionTwo;
