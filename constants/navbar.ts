export const authOptions = [
  {
    text: "التسجيل",
    reverseEffect: false,
    callback: () => {
      console.log("You just clicked me !");
    }
  },
  {
    text: "تسجيل الدخول",
    reverseEffect: true,
    callback: () => {
      console.log("You just clicked me !");
    }
  },
]

export const listItems = [
  {
    text: "الرئيسية",
    link: "/",
  },
  {
    text: "الفعاليات",
    link: "/rosnama",
  },
  {
    text: "العضويات",
    link: "/memberships",
  },
  {
    text: "عن مداد",
    link: "/about-us",
  },
]