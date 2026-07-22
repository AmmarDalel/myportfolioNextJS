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
} from "react-icons/ri";
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiMinds,
  SiNestjs,
} from "react-icons/si";

export const NavElements: { key: string; href: string }[] = [
  { key: "about", href: "about" },
  { key: "gallery", href: "gallery" },
  { key: "skills", href: "skills" },
  { key: "projects", href: "projects" },
  { key: "contacts", href: "contacts" },
];
export const name: string = "Dalel";
export const lastname: string = "Ammar";
export const phoneNumber: string = "50 514 247";
export const email: string = "ammardalel07@gmail.com";
export const portfolioImageURL: string = "/dalel.jpeg";
export const abreviation: string = "AD";

interface Skill {
  id: string;
  percentage: number;
  icon: React.ReactElement;
}

export const skills: Skill[] = [
  {
    id: "javascript",
    percentage: 70,
    icon: <TbBrandJavascript color='orange' />,
  },
  {
    id: "typescript",
    percentage: 60,
    icon: <TbBrandTypescript color='orange' />,
  },
  {
    id: "react",
    percentage: 75,
    icon: <RiReactjsLine color='orange' />,
  },
  {
    id: "node",
    percentage: 60,
    icon: <RiNodejsLine color='orange' />,
  },
  {
    id: "express",
    percentage: 60,
    icon: <SiExpress color='orange' />,
  },
  {
    id: "nest",
    percentage: 50,
    icon: <SiNestjs color='orange' />,
  },
  {
    id: "next",
    percentage: 30,
    icon: <RiNextjsFill color='orange' />,
  },
  {
    id: "database",
    percentage: 60,
    icon: <RiDatabase2Fill color='orange' />,
  },
  {
    id: "git",
    percentage: 50,
    icon: <SiGit color='orange' />,
  },
  {
    id: "docker",
    percentage: 40,
    icon: <SiDocker color='orange' />,
  },
  {
    id: "cloud",
    percentage: 20,
    icon: <TbCloudComputing color='orange' />,
  },
  {
    id: "figma",
    percentage: 20,
    icon: <SiFigma color='orange' />,
  },
  {
    id: "problemSolving",
    percentage: 70,
    icon: <SiMinds color='orange' />,
  },
];

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  images: string[];
}

export const events: Event[] = [
  {
    id: 1,
    title: "Violence Detection System – TWISE Night",
    date: "2025",
    location: "ISIMM, Monastir",
    images: [
      "Twise_night1.jpg?height=300&width=400",
      "Twise_night2.jpg?height=300&width=400&text=Collaboration",
      "Twise_night3.jpg?height=300&width=400&text=Design Systems",
    ],
  },
  {
    id: 2,
    title:
      "The European Researchers’ Night 2025 – Event Organizer – ARSII Association",
    date: "September-2025",
    location: "INSAT, Tunis",
    images: [
      "/ERN1.jpg?height=300&width=400",
      "/ERN2.jpg?height=300&width=400&text=Workshops",
      "/ERN3.jpg?height=300&width=400&text=Exhibitions",
      "/ERN4.jpg?height=300&width=400&text=Networking",
    ],
  },

  {
    id: 3,
    title: "IT Impact - Marketing Assistant – ARSII Club",
    date: "April-2025",
    location: "ISIMM, Monastir",
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
    images: [
      "/cshack1.jpg?height=300&width=400",
      "/cshack2.jpg?height=300&width=400&text=Collaboration",
    ],
  },
  {
    id: 6,
    title: "Science Month Jury – ARSII & AMED",
    date: "May 2025",
    location: "AMED Sahloul School, Sousse",
    images: [
      "/Amad_event1.jpg?height=300&width=400",
      "/Amad_event2.jpg?height=300&width=400&text=Collaboration",
      "/Amad_event3.jpg?height=300&width=400&text=Design Systems",
      "/Amad_event4.jpg?height=300&width=400&text=Design Systems",
    ],
  },
];

export interface Project {
  id: number;
  title: string;
  category: "webDevelopment" | "webDesign";
  technologies: string[];
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "EliteVerse Platform",
    category: "webDevelopment",
    technologies: [
      "NestJS",
      "React.js",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Supabase",
      "JWT",
      "Tailwind CSS",
      "Shadcn/UI",
      "AWS S3",
      "Cloudinary",
      "Groq AI",
    ],
    images: [
      "/eliteverse1.png",
      "/eliteverse2.png",
      "/eliteverse3.png",
      "/eliteverse4.png",
      "/eliteverse5.png",
      "/eliteverse6.png",
      "/eliteverse7.png",
      "/eliteverse8.png",
      "/eliteverse9.png",
      "/eliteverse10.png",
    ],
    demoUrl:
      "https://drive.google.com/file/d/1u2MWaJ5sWg0U9rdk_hs-w_eoJA4Xki9t/view?usp=sharing",
    githubUrl: "",
    featured: true,
  },
  {
    id: 1,
    title: "Baniera Platform",
    category: "webDevelopment",
    technologies: [
      "Next.js",
      "React.js",
      "tRPC",
      "PostgreSQL",
      "Drizzle",
      "NextAuth.js",
      "Shadcn/UI",
      "tailwind css",
      "React Hook Form",
      "Zod",
      "Zustand",
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
    demoUrl:
      "https://drive.google.com/file/d/1up9VmWB81f5P8B6Sqn_-DLe4kSvz-nKE/view?usp=sharing",
    githubUrl: "https://github.com/AmmarDalel/Baniera",
    featured: true,
  },
  {
    id: 2,
    title: "To-Do List App",
    category: "webDevelopment",
    technologies: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "PostgreSQL",
      "Drizzle ORM",
      "NextAuth.js",
      "Shadcn/UI",
      "tailwind css",
      "React Hook Form",
      "Zod",
      "Zustand",
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
    id: 3,
    title: "ISIMM Website",
    category: "webDevelopment",
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
    id: 4,
    title: "Personal Portfolio",
    category: "webDesign",
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
    id: 5,
    title: "Educational Website",
    category: "webDevelopment",
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
    id: 6,
    title: "MERN Auth System",
    category: "webDevelopment",
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
    id: 7,
    title: "Travel Agency Website",
    category: "webDesign",
    technologies: ["React.js", "CSS", "JavaScript"],
    images: ["/flivan.png?height=300&width=500&text=Travel+Home"],
    githubUrl: "https://github.com/AmmarDalel/flivain-React-js",
    featured: false,
  },
  {
    id: 8,
    title: "Product CRUD App",
    category: "webDevelopment",
    technologies: ["HTML", "CSS", "JavaScript"],
    images: ["/cruds app.png?height=300&width=500&text=Product+List"],
    githubUrl: "https://github.com/AmmarDalel/CRUDS_JS",
    featured: false,
  },
  {
    id: 9,
    title: "Virtual Meetings App",
    category: "webDevelopment",
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
    id: 10,
    title: "AD Print App",
    category: "webDesign",
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
];

export const categories = [
  "all",
  "webDevelopment",
  "mobileApp",
  "design",
  "webDesign",
] as const;

export type ProjectCategory = (typeof categories)[number];

//footer
export const quickLinks = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "gallery", href: "#gallery" },
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
