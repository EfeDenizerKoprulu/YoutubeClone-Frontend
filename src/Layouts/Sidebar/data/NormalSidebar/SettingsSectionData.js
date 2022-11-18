import { FiHelpCircle } from "react-icons/fi";
import { AiOutlineSetting, AiOutlineFlag } from "react-icons/ai";
import { MdOutlineFeedback } from "react-icons/md"

const SettingsSection = [
  {
    title: "Ayarlar",
    icon: <AiOutlineSetting />,
    url: "/",
  },
  {
    title: "İçerik Bildirme",
    icon: <AiOutlineFlag />,
    url: "/",
  },
  {
    title: "Yardım",
    icon: <FiHelpCircle />,
    url: "/",
  },
  {
    title: "Geri Bildirim Gonder",
    icon: <MdOutlineFeedback />,
    url: "/",
  },
];

export default SettingsSection;
