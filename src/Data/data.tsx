import {
  TbBrandJavascript,
  TbBrandTypescript,
  TbCloudComputing,
  TbDeviceMobile,
} from "react-icons/tb";
import {
  RiReactjsLine,
  RiNodejsLine,
  RiNextjsFill,
  RiDatabase2Fill,
  RiGithubFill,
} from "react-icons/ri";
import { SiDocker, SiExpress, SiFigma, SiMinds } from "react-icons/si";

export const NavElements: string[] = [
  "About",
  "Gallery",
  "Skills",
  "Projects",
  "Contacts",
];
export const name: string = "Dalel";
export const lastname: string = "Ammar";
export const phoneNumber: string = "50 514 247";
export const email: string = "ammardalel07@gmail.com";
export const portfolioImageURL: string = "/dalel.jpeg";
export const abreviation: string = "AD";
export const aboutTitle: string = "About Me";
export const Aboutparagraphe: string =
  " I'm Dalel Ammar, a passionate software engineering student with a strong interest in web development. \
        I love creating modern, responsive, and user-friendly websites. \
        I’m constantly learning and exploring new technologies to build better and smarter digital experiences.";

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactElement;
}

export const skills: Skill[] = [
  {
    name: "Javascript",
    percentage: 70,
    icon: <TbBrandJavascript color='orange' />,
  },
  {
    name: "Typescript",
    percentage: 60,
    icon: <TbBrandTypescript color='orange' />,
  },
  {
    name: "React js",
    percentage: 75,
    icon: <RiReactjsLine color='orange' />,
  },
  {
    name: "Node js",
    percentage: 60,
    icon: <RiNodejsLine color='orange' />,
  },
  {
    name: "Express js",
    percentage: 60,
    icon: <SiExpress color='orange' />,
  },
  {
    name: "Next js",
    percentage: 30,
    icon: <RiNextjsFill color='orange' />,
  },
  {
    name: "Mobile App",
    percentage: 30,
    icon: <TbDeviceMobile color='orange' />,
  },
  {
    name: "DB : Mysql , MongoDB",
    percentage: 60,
    icon: <RiDatabase2Fill color='orange' />,
  },
  {
    name: "Git , GitHub",
    percentage: 50,
    icon: <RiGithubFill color='orange' />,
  },
  {
    name: "Docker",
    percentage: 40,
    icon: <SiDocker color='orange' />,
  },
  {
    name: "Cloud Computing",
    percentage: 20,
    icon: <TbCloudComputing color='orange' />,
  },
  {
    name: "Figma",
    percentage: 20,
    icon: <SiFigma color='orange' />,
  },
  {
    name: "Problem Solving",
    percentage: 70,
    icon: <SiMinds color='orange' />,
  },
];

export const titleWhiteSkills: string = "My";
export const titleOrangeSkills: string = "Skills";
export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  images: string[];
}

export const paragraphGallery: string =
  " Here are some of the amazing events, conferences,\
                                      and workshops I've been part of, sharing knowledge and\
                                      connecting with the community.";
export const titleWhiteEvents: string = "Events I've";
export const titleOrangeEvents: string = "Participated";

export const events: Event[] = [
  {
    id: 1,
    title: "Violence Detection System – TWISE Night",
    date: "2025",
    location: "ISIMM, Monastir",
    description:
      "Developed a smart surveillance system to detect violence using YOLOv8, MediaPipe, and posture/movement analysis. Worked with a fantastic team and presented the project at TWISE Night.",
    images: [
      "Twise_night1.jpg?height=300&width=400",
      "Twise_night2.jpg?height=300&width=400&text=Collaboration",
      "Twise_night3.jpg?height=300&width=400&text=Design Systems",
    ],
  },
  {
    id: 2,
    title: "Science Month Jury – ARSII & AMED",
    date: "May 2025",
    location: "AMED Sahloul School, Sousse",
    description:
      "Served as a jury member during the Science Festival. Evaluated projects in robotics and AI presented by young students. Celebrated innovation and promoted STEM education with ARSII and AMED.",
    images: [
      "/Amad_event1.jpg?height=300&width=400",
      "/Amad_event2.jpg?height=300&width=400&text=Collaboration",
      "/Amad_event3.jpg?height=300&width=400&text=Design Systems",
      "/Amad_event4.jpg?height=300&width=400&text=Design Systems",
    ],
  },
  {
    id: 3,
    title: "IT Impact - Marketing Assistant – ARSII Club",
    date: "April-2025",
    location: "ISIMM, Monastir",
    description:
      "Worked as Marketing Assistant at ARSII Club ISIMM. Led communication strategies, created visual content, and contributed to IT Impact v1.0 event. Gained hands-on experience in graphic design and team collaboration.",
    images: [
      "/It_Impact1.jpg?height=300&width=400",
      "/It_Impact2.jpg?height=300&width=400&text=Collaboration",
      "/It_Impact3.jpg?height=300&width=400&text=Design Systems",
      "/It_Impact4.jpg?height=300&width=400",
      "/It_Impact5.jpg?height=300&width=400&text=Collaboration",
      "/It_Impact6.jpg?height=300&width=400&text=Design Systems",
    ],
  },
  {
    id: 4,
    title: "Web Dev Training – ARSII Club",
    date: "Jan–Feb 2025",
    location: "ISIMM, Monastir",
    description:
      "Trainer at two web development sessions with ARSII Club ISIMM: Basics of HTML, CSS & JavaScript (Jan 29) and Portfolio mini-project (Feb 1). Helped participants build their first personal websites.",
    images: [
      "/dev_session1.jpg?height=300&width=400",
      "/dev_session2.jpg?height=300&width=400&text=Collaboration",
    ],
  },
  {
    id: 5,
    title: "CSHack 2024 – IEEE ISIMM",
    date: "March 2024",
    location: "ISIMM, Monastir",
    description:
      "Participated in CSHack, organized by IEEE Computer Society Chapter – ISIMM. Attended workshops on problem solving 💡 and cyber security 🔒. A valuable opportunity to deepen my skills and learn alongside experts.",
    images: [
      "/cshack1.jpg?height=300&width=400",
      "/cshack2.jpg?height=300&width=400&text=Collaboration",
    ],
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Baniera Platform",
    description: "Full-stack advertising management platform",
    longDescription:
      "Developed during my internship, Baniera is an innovative platform for centralized management and distribution of advertising banners and carousels. It allows advertisers and website managers to create, schedule, and deliver their visual content with full control. Key features include client management, image upload and cropping, scheduling with calendar, iframe generation for integration, an analytics dashboard with key metrics (views, clicks), as well as a notification and billing system. The architecture is built on Next.js full-stack with tRPC, Prisma, and PostgreSQL, ensuring end-to-end type safety and optimized performance.\n\nThe codebase is well-structured following a scalable architecture with dedicated folders: features (business features), components (reusable UI components), validation (schemas and validation rules), services (business logic), hooks (custom React hooks), and utils (utility functions). This structure improves maintainability, readability, and code reusability.",
    category: "Web Development",
    technologies: [
      "Next.js",
      "React.js",
      "tRPC",
      "PostgreSQL",
      "Drizzle",
      "NextAuth.js",
    ],
    images: [
      "/baniera8.png?height=300&width=500&text=Dashboard",
      "/baniera1.png?height=300&width=500&text=Banner+Management",
      "/baniera2.png?height=300&width=500&text=Analytics",
      "/baniera3.png?height=300&width=500&text=Analytics",
      "/baniera4.png?height=300&width=500&text=Banner+Management",
      "/baniera5.png?height=300&width=500&text=Banner+Management",
      "/baniera6.png?height=300&width=500&text=Analytics",
      "/baniera7.png?height=300&width=500&text=Analytics",
      "/baniera8.png?height=300&width=500&text=Banner+Management",
      "/baniera9.png?height=300&width=500&text=Banner+Management",
      "/baniera10.png?height=300&width=500&text=Analytics",
      "/baniera11.png?height=300&width=500&text=Analytics",
      "/baniera12.png?height=300&width=500&text=Banner+Management",
      "/baniera13.png?height=300&width=500&text=Banner+Management",
      "/baniera14.png?height=300&width=500&text=Analytics",
      "/baniera15.png?height=300&width=500&text=Analytics",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/AmmarDalel/Baniera",
    featured: true,
  },
  {
    id: 1,
    title: "To-Do List App",
    description: "Modern full-stack to-do list web application",
    longDescription:
      "Developed a modern and responsive full-stack task management web application using Next.js (App Router) and TypeScript. The project includes user authentication with NextAuth, task CRUD operations, and a sleek UI built with Shadcn/UI. Data persistence and schema management are handled using PostgreSQL and Drizzle ORM, while tRPC ensures full end-to-end type safety and efficient API communication.\n\nThe architecture follows a clean and modular structure, separating concerns across features, components, hooks, services, and validation layers. This organization enhances maintainability, scalability, and developer experience.",
    category: "Web Development",
    technologies: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "PostgreSQL",
      "Drizzle ORM",
      "NextAuth.js",
      "Shadcn/UI",
    ],
    images: [
      "/todolist1.png?height=300&width=500&text=Dashboard",
      "/todolist2.png?height=300&width=500&text=Task+List",
      "/todolist3.png?height=300&width=500&text=Add+Task+Modal",
      "/todolist4.png?height=300&width=500&text=Authentication+Page",
    ],
    demoUrl: "https://todo-list-nextjs-green.vercel.app/",
    githubUrl: "https://github.com/AmmarDalel/TodoList_Nextjs",
    featured: false,
  },

  {
    id: 2,
    title: "ISIMM Website",
    description: "Modern and responsive university web portal",
    longDescription:
      "Developed a modern and responsive web platform for ISIMM students and teachers. The project provides access to academic information, department details, and resources through an intuitive interface. Built with React.js, ensuring clean design and smooth navigation.",
    category: "Web Development",
    technologies: ["React.js"],
    images: [
      "/isimm5.png?height=300&width=500&text=Home+Page",
      "/isimm1.png?height=300&width=500&text=Departments+Section",
      "/isimm3.png?height=300&width=500&text=Student+Portal",
      "/isimm4.png?height=300&width=500&text=Home+Page",
      "/isimm2.png?height=300&width=500&text=Departments+Section",
    ],
    demoUrl: "https://isimm-web-site.vercel.app/",
    featured: false,
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "Showcasing projects and skills",
    longDescription:
      "Developed several personal portfolio sites to highlight projects, skills, and background. Built with React.js or plain HTML/CSS/JS, fully responsive and well‑structured.",
    category: "Web Design",
    technologies: ["React.js", "HTML", "CSS", "JavaScript"],
    images: [
      "/myportfolio1.png?height=300&width=500&text=Portfolio+Home",
      "/myportfolio2.png?height=300&width=500&text=Projects+Section",
      "/myportfolio3.png",
      "/myportfolio4.png",
    ],
    demoUrl: "https://ammardalel.github.io/deploymentportfolio/",
    githubUrl: "https://github.com/AmmarDalel",
    featured: false,
  },
  {
    id: 4,
    title: "Educational Website",
    description: "Interactive e‑learning platform built freelance",
    longDescription:
      "Developed an interactive educational platform as a freelancer. Features include performance optimization, responsive design, and containerization with Docker. Tech stack: JavaScript, React.js, Node.js, Express.js, MySQL.",
    category: "Web Development",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Docker"],
    images: [
      "/jaweherkouloub1.png?height=300&width=500&text=Educational+Home",
      "/jaweherkouloub2.png?height=300&width=500&text=Interactive+Features",
      "/jaweherkouloub3.png",
    ],

    demoUrl: "https://tadaglobe.com/",
    featured: false,
  },
  {
    id: 5,
    title: "MERN Auth System",
    description: "User & admin roles with JWT‑secure authentication",
    longDescription:
      "Built a full authentication system using MongoDB, Express.js, React.js, Node.js. Integrated Redux for state management, Passport.js, and JWT for secure authentication, with support for multiple roles (admin, user).",
    category: "Web Development",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux",
      "Passport.js",
      "JWT",
    ],
    images: ["/MERN_Auth.png"],
    featured: false,
  },
  {
    id: 6,
    title: "Travel Agency Website",
    description: "Interactive landing page built with React.js",
    longDescription:
      "Created a showcase site for a travel agency featuring a dynamic and visually appealing landing page. UI design inspired by modern trends, implemented in React.js for client‑side interactivity.",
    category: "Web Design",
    technologies: ["React.js", "CSS", "JavaScript"],
    images: ["/flivan.png?height=300&width=500&text=Travel+Home"],
    githubUrl: "https://github.com/AmmarDalel/flivain-React-js",
    featured: false,
  },
  {
    id: 7,
    title: "Product CRUD App",
    description: "Simple product management system in JavaScript",
    longDescription:
      "A product management app featuring basic CRUD operations (Create, Read, Update, Delete), implemented with vanilla HTML, CSS, and JavaScript. Intuitive interface for administering product data.",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript"],
    images: ["/cruds app.png?height=300&width=500&text=Product+List"],
    githubUrl: "https://github.com/AmmarDalel/CRUDS_JS",
    featured: false,
  },
  {
    id: 8,
    title: "Virtual Meetings App",
    description: "Real‑time messaging and calls using WebRTC",
    longDescription:
      "A web application for virtual meetings built with React.js, Node.js, Express.js (TypeScript), and MongoDB. It supports real-time communication via WebRTC and clean front‑end/back‑end architecture. Developed during my internship at Infinity Management.",
    category: "Web Development",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "WebRTC",
    ],
    images: [
      "/Meetapp2.png?height=300&width=500&text=Home+Page",
      "/Meetapp1.png?height=300&width=500&text=Meeting+Room",
      "/Meetapp3.png",
      "/Meetapp4.png",
      "/Meetapp5.png",
      "/Meetapp6.png",
    ],

    featured: true,
  },

  {
    id: 9,
    title: "AD Print App",
    description: "",
    longDescription: "",
    category: "Web Design",
    technologies: ["React.js", "HTML", "CSS", "TypeScript"],
    images: [
      "/ADPrint1.png",
      "/ADPrint2.png",
      "/ADPrint3.png",
      "/ADPrint4.png",
      "/ADPrint5.png",
    ],
    githubUrl: "https://github.com/AmmarDalel/ADprint/",
    featured: false,
  },
  // {
  //   id: 10,
  //   title: "Recycling app",
  //   description: "Figma design",
  //   longDescription: "",
  //   category: "Web Design",
  //   technologies: ["Figma"],
  //   images: [
  //     "/recycling_app1.png",
  //     "/recycling_app2.png",
  //     "/recycling_app3.png",
  //     "/recycling_app4.png",
  //     "/recycling_app5.png",
  //   ],
  //   featured: false,
  // },
];

export const categories = [
  "All",
  "Web Development",
  "Mobile App",
  "Design",
  "Web Design",
];

export const titleWhiteProjects: string = "My";
export const titleOrangeProjects: string = "Projects";

export const paragraphProjects: string =
  "Here's a showcase of my recent work, featuring web applications, mobile apps, and design projects that\
        demonstrate my skills and creativity.";

//footer
export const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Gallery", href: "#gallery" },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dalel-ammar-b0544a234/",
  },
  { name: "GitHub", href: "https://github.com/AmmarDalel" },
  { name: "Instagram", href: "https://www.instagram.com/dalel.ammar/" },
  { name: "Facebook", href: "https://www.facebook.com/dalel.ammar.961" },
];

export const year: string = "2025";
