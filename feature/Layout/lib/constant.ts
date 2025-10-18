export const NAVBAR = [
  {
    id: 1,
    item: "Home",
    path: "/",
    type: "link",
  },
  {
    id: 2,
    item: "Services",
    path: "/services",
    type: "sub_menu",
    subMenu: [
      {
        id: 1,
        item: "Mobile Application Development",
        path: "/services/mobile-application-development",
      },
      {
        id: 2,
        item: "Web Application Development",
        path: "/services/web-application-development",
      },
      {
        id: 3,
        item: "AI Development",
        path: "/services/ai-development",
      },
    ],
  },
  {
    id: 3,
    item: "About us",
    path: "/about-us",
    type: "link",
  },
  {
    id: 4,
    item: "Portfolio",
    path: "/portfolio",
    type: "link",
  },
  {
    id: 5,
    item: "Contact us",
    path: "/contact-us",
    type: "link",
  },
];
