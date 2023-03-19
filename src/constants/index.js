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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "NETIS UGANDA",
    icon: meta,
    iconBg: "#383E56",
    date: "Nov 2020 - Current",
    points: [
      "Participated in the full development cycle, end-to-end, from design, implementation, & testing to documentation.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "CAMUSAT UGANDA",
    icon: meta,
    iconBg: "#383E56",
    date: "Feb 2017 - Nov 2020",
    points: [
      "Coordinated the successful deployment of new software applications.",
      "Created training documents for departments to train members on software and web implementations.",
      "Modified existing software to correct errors, allow it to adapt to new hardware.",
      "Gathering the software requirements and consolidations from clients and end users.",
    ],
  },
  {
    title: "Systems Engineer",
    company_name: "QUINTICA UGANDA",
    icon: meta,
    iconBg: "#383E56",
    date: "Jan 2016 - Feb 2017",
    points: [
      "Configured systems to collect and report operational data for management purposes.",
      "Leveraged existing system monitoring and controller tools to send and receive alerts.",
      "Installed, configured and tested system components before deployment to clients.",
      "Completed root cause analysis and reviewed corrective actions to address test failures.",
    ],
  },
  {
    title: "IT & Software Engineer Intern",
    company_name: "FRESH CORNER RESTAURANT",
    icon: meta,
    iconBg: "#383E56",
    date: "Jan 2011 - Jan 2016",
    points: [
      "Configured systems to collect and report operational data for management purposes."
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Edwin proved me wrong.",
    name: "Jackline Pelah",
    designation: "CEO",
    company: "Pelah's Glam",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Edwin does.",
    name: "Fred Muwonge",
    designation: "COO",
    company: "Lion King Eng. Solutions",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Edwin optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Mummy Lulu",
    designation: "CEO",
    company: "Lulu's Beauty Garage",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Netflix Clone",
    description:
      "This is a personal project, a movie website that I developed using HTML, CSS, and JavaScript(using React Library). The app picks data from external APIs(eg Netflix) and allows users to browse movies and TV shows.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "HTML & CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: " https://github.com/thegreatest1ever",
  },
  {
    name: "Business Website",
    description:
      "This is a single-page application that we developed using HTML, CSS, JavaScript(using React Library) for one of my clients. I was responsible for the front-end and worked closely with a  back-end developer to ensure a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "HTML & CSS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: " https://github.com/thegreatest1ever.",
  },
  {
    name: "Landing Page",
    description:
      "This is a landing page that I developed for one of my clients, Lionking Engineering, using HTML, CSS, and JavaScript. The page is designed to showcase their products/services",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: " https://github.com/thegreatest1ever.",
  },
];

export { services, technologies, experiences, testimonials, projects };
