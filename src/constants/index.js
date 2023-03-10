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
    title: "UI Designer",
    icon: web,
  },
  {
    title: "Frontend Web Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: backend,
  },
  {
    title: "Video Editor",
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
    title: "Classification of DR using Hybrid Models",
    company_name: "Panimalar Engineering College",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2023 - Present",
    points: [
      "Diabetic Retinopathy is an retinal disease which occur in diabetic patients.Once the sugar level increses the sugar will block the blood cell in the retina",
      "This results in blindness if we don't take proper measures beforehand. We can classify this disease as three different stages milk, moderate & severe",
      "We created a web application using python that detects and classifies the type of diabetic retinopathy",
      "In this project we have used two different models for detection Inception V3 and for classification Xception",
    ],
  },
  {
    title: "Real Time Chat App",
    company_name: "Panimalar Engineering College",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "November 2022 - December 2022",
    points: [
      "Created a real time chat app using node js, socket.io in the backend and react for the front end",
      "Sockets have traditionally been the solution around which most real-time chat systems are architected, providing a bi-directional communication channel between a client and a server.",
      "In this app there will be two pages the join room page and chat page",
      "Once a person joined the room with name and room id he can able to chat with all the remaining people in the lobby in real time",
    ],
  },
  {
    title: "Online Examination System",
    company_name: "Panimalar Engineering College",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2022 - July 2023",
    points: [
      "We created an online examination sysem where the students can easily attend the exam online",
      "We created this website at the time of covid thinking that it will help the students in some way",
      "Here the student can able to attend the test and there will be timer also. They should submit the test within the deadline",
      "Teachers can able to view the students submissions and their mark in the student dashboard",
    ],
  },
  {
    title: "Youtube Clone",
    company_name: "Panimalar Engineering College",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "April 2022 - May 2022",
    points: [
      "Recreated Youtube Web Application",
      "Here instead of creating server to fetch data from the backend to the frontend, We have used an api which is named as YT V3 available on rapid api's hub",
      "This website is completely responsive with all the functionalities that the actual youtube has inaddition to an amazing UI",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but she proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Deepthi does.",
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
    name: "Web App for Detection & Classification of DR",
    description:
      "We created a website using two models for detection and classification of diabetic retinopathy. Here the fundus image is the input which should be uploaded by the end user",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "deeplearning",
        color: "pink-text-gradient",
      },
    ],
    note:"click on the title to watch the demoVideo",
    image: carrent,
    source_code_link: "https://github.com/deepthi308/DR-app.git",
    channelURL:"https://youtu.be/RRUVH7K5UUA"
  },
  {
    name: "Recreated Youtube with Modern UI",
    description:
      "Recreated youtube with an amazing and user friendly interface with all the functionalities that youtube has. We made use of the API from Rapid Api's hub to fetch data from server",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidApi",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
    ],
    note:"click on the title to watch the demoVideo",
    image: jobit,
    source_code_link: "https://github.com/deepthi308/Youtube-Clone.git",
    channelURL:"https://youtu.be/wYvIP77M5xM"
  },
  {
    name: "Real Time Chat App Using Socket.io",
    description:
      "We created a chat app using react for creating the user interfaces, node js to create the server and used socket.io which allows us to create bi-directional communication between the web browsers and the servers",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    note:"click on the title to watch the demoVideo",
    image: tripguide,
    source_code_link: "https://github.com/deepthi308/Real-Time-Chat-App.git",
    channelURL:"https://youtu.be/YW9pQxnkg1M"
  },
];

export { services, technologies, experiences, testimonials, projects };