import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Digital Marketer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: " Founders Hub",
    icon: starbucks,
    iconBg: "#383E56",
    date: " April 2021-May-2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "Malhub",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2022 - May 2023",
    points: [
      "Skilled in troubleshooting and debugging to address issues promptly. Strong adherence to coding standards and best practices to ensure code maintainability and readability.",
      "Strong adherence to coding standards and best practices to ensure code maintainability and readability.",
      " Collaborative mindset, fostering a positive and productive team environment. Detail-oriented with a focus on delivering polished, user-friendly applications. Adaptable to changing project requirements and tight deadlines."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "CodeSquad",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2023 - April 2024 ",
    points: [
      "Collaborating closely with diverse, cross-functional teams comprising designers, product managers, and fellow developers to deliver top-notch products.",
      "Collaborating closely with diverse, cross-functional teams comprising designers, product managers, and fellow developers to deliver top-notch products.",
      "Proficient in implementing responsive design techniques and ensuring cross-browser compatibility for optimal user experience.",
      "Actively involved in the review process, providing constructive feedback to enhance code quality.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D Animation",
    description: " Experience the magic of personalized fashion as you effortlessly change the color of your attire with a simple touch. Embrace versatility and express your unique style every day with this user-friendly, color-changing cloth.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tnm Portal",
    description:

      "Experience seamless education management . Effortlessly navigate through features like intuitive course registration, streamlined course forms, and hassle-free payment processing. Unlock a stress-free learning journey with our user-centric design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "react icons",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio",
    description:"  An innovative digital design portfolio showcasing a versatile array of creative projects, ranging from web design and branding to user interface (UI) and user experience (UX) design.  Crafting visually appealing and intuitive digital experience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Three js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
