export const projectsList = [
  {
    title: "Kozukai",
    languages: ["React", "Material UI", "RESTful API"],
    links: [
      { label: "view site", link: "https://kozukai.vercel.app" },
      { label: "view code", link: "https://github.com/kaileywaal/kozukai" },
    ],
    description:
      "Reward (AKA bribe) yourself to get the things that matter most done.",
    image: (
      <img
        src={require("../../src/assets/previewImages/kozukai-preview.gif")}
        alt="Screen recording of the responsive web app"
        height="100%"
      />
    ),
  },
  {
    title: "Faith Family Empowerment Center",
    languages: ["HTML", "CSS", "JavaScript"],
    links: [
      { label: "view site", link: "https://ffec.github.io/ffec-site/" },
      { label: "view code", link: "https://github.com/kaileywaal/ffec" },
    ],
    description:
      "Faith Family Empowerment Center is a nonprofit that had a website in need of a little facelift... or an entire overhaul. We sent their old, desktop-only site to the grave and replaced it with a fully responsive site that looks great on any device.",
    image: (
      <img
        src={require("../../src/assets/previewImages/ffec-preview.gif")}
        alt="Screen recording of the mobile-optimized site"
        height="100%"
      />
    ),
  },
  {
    title: "Virtual Stock Market Game",
    languages: ["Vue.js", "ECharts Library", "Java", "PostgreSQL"],
    links: [
      {
        label: "view demo",
        link: "https://drive.google.com/file/d/1vrwgRWeV6iMRiGs8Cm8LpgpCe2_BmE2Z/view",
      },
      {
        label: "view code",
        link: "https://github.com/kaileywaal/virtual-stock-market",
      },
    ],
    description:
      "Compete with your friends to see who can make the most money in the stock market (without any risk of actually losing money in the stock market). Complete with real-time stock data and fun graphs to display progress.",
    image: (
      <img
        src={require("../../src/assets/previewImages/virtual-stock-market-preview.gif")}
        alt="Screenshots of various components found in virutual stock market game."
        height="100%"
      />
    ),
  },
  {
    title: "IP Address Tracker Hub",
    languages: ["HTML", "CSS", "JavaScript", "RESTful API"],
    links: [
      {
        label: "view site",
        link: "https://kaileywaal.github.io/ip-address-tracker-hub/",
      },
      {
        label: "view code",
        link: "https://github.com/kaileywaal/ip-address-tracker-hub",
      },
    ],
    description:
      "Figure out all the dirty details that you need to know based on an IP address or domain. You can see your IP address and location on a map when the page loads (you know, in case you forget where you are) or stalk a company and figure out super interesting information about them like, um, their IP address.",
    image: (
      <img
        src={require("../../src/assets/previewImages/ip-address-tracker-preview.png")}
        alt="Screenshots of site displayed on phone, tablet, and laptop"
        height="100%"
      />
    ),
  },
  {
    title: "Portfolio Site Version 1.0",
    languages: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "view site",
        link: "https://kaileywaal.github.io/kaileywaal/",
      },
      {
        label: "view code",
        link: "https://github.com/kaileywaal/kaileywaal",
      },
    ],
    description:
      "My first ever portfolio site. Admittedly pretty text-heavy, but it deserves a spot because it's cute (and also because I worked very hard to get that light mode toggle working with Vanilla JavaScript. I mean, look at it!).",
    image: (
      <img
        src={require("../../src/assets/previewImages/portfolio-site-preview.gif")}
        alt="A screenshot and video of site displayed on phone and laptop"
        height="100%"
      />
    ),
  },
  {
    title: "To Do List",
    languages: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "view site",
        link: "https://kaileywaal.github.io/todo-app/",
      },
      {
        label: "view code",
        link: "https://github.com/kaileywaal/todo-app",
      },
    ],
    description:
      "Just like your regular to-do list, but make it ~cute~. Easily add items to your list, switch to dark mode to stop blinding yourself at night, view only completed or active tasks, and clear all completed tasks with a click of a button.",
    image: (
      <img
        src={require("../../src/assets/previewImages/todo-list-preview.gif")}
        alt="A screenshot and video of site displayed on phone and laptop"
        height="100%"
      />
    ),
  },
];
