import { FaCalendar } from "react-icons/fa";
import { BsCursorFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

export const eventDetails = [
  {
    text: "17 رمضان 1448",
    icon: <FaCalendar />,
  },
  {
    text: "مركز الملك فهد الثقافي للمؤتمرات",
    icon: <BsCursorFill />,
  }
]

export const actionBtns = [
  {
    text: "سجل الآن",
    favourite: false,
    callback: () => {
      console.log("You just clicked me !");
    }
  },
  {
    favourite: true,
    icon: <FaRegHeart size={18} />,
    callback: () => {
      console.log("You just clicked me !");
    }
  },
]

export const cardsDetails = [
  {
    count: 360,
    text: "يوم",
  },
  {
    count: 24,
    text: "ساعة",
  },
  {
    count: 60,
    text: "دقيقة",
  },
  {
    count: 60,
    text: "ثانية",
  },
]

export const leftSideCards = [
  {
    url: "/card-img-1.jpeg",
  },
  {
    url: "/card-img-2.jpeg",
  },
]