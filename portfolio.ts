import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Don Michael Ombisi",
  title: "Hi all, I'm Don",
  description:
    "I'm passionate about Full Stack web development, data analysis, and cybersecurity with experience in developing Full Stack web applications using Python, Django, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "https://app.resumegiants.com/253d9c8d-d007-4b7e-8dab-b6a9c6e9456b", // Add the path to your resume PDF file
};

export const openSource = {
  githubUserName: "robotm-m",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:Don.ombisimichael@gmail.com",
  linkedin: "https://www.linkedin.com/in/don-michael-320952256/",
  github: "https://github.com/robotm-m",
  instagram: "https://www.instagram.com/d_corelone/",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", // Insert stack or technology you have experience in
    progressPercentage: "85", // Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
  {
    Stack: "Networks",
    progressPercentage: "90",
  },
  {
    Stack: "Data analytics",
    progressPercentage: "93",
  },
  {
    Stack: "Network Security",
    progressPercentage: "90",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Catholic University of Eastern Africa",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2021 - October 2025",
    desc: "",
    grade: "Grade ",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "System Developer",
    company: "Postbank",
    companyLogo: "",
    date: "April 2024 - August 2024",
    desc: "Developed a helpdesk system that enables users to send tickets to support/admin so that their problems can be resolved physically or remotely.",
  },
  {
    role: "Full Stack Developer",
    company: "File management system",
    companyLogo: "",
    date: "April 2023 - August 2023",
    desc: "Developed a file management system to enable easier tracking of pensioners' files.",
  },
  {
    role: "Full Stack Developer",
    company: "Bookstore",
    companyLogo: "",
    date: "June 2024 - August 2024",
    desc: "Developed an accounting/inventory software for a local bookstore.",
  },
  {
    role: "Backend Developer",
    company: "Bleed-AI",
    companyLogo: "",
    date: "Sept 2023 - Oct 2023",
    desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Healthcare",
    desc: "A healthcare app that enables users to book appointments in advance.",
    link: "https://healthcare-lac.vercel.app/",
  },
  {
    name: "iSHOP",
    desc: "E-commerce Platform.",
    link: "https://ishop-mauve.vercel.app/",
  },
  {
    name: "Lingua-speak",
    desc: "LinguaSpeak is an advanced voice translation tool.",
    link: "https://lingua-speak-theta.vercel.app//",
  },
  {
    name: "ThreadCraft AI",
    desc: "ThreadCraft AIleverages AI to generate engaging content.",
    link: "https://threadcraftai-kappa.vercel.app/",
  },
  {
    name: "Yoom",
    desc: "Video conferencing app.",
    link: "https://zoom-snowy-beta.vercel.app/",
  },
  {
    name: "Editor",
    desc: "A collaborative editor Platform.",
    link: "https://collaborativeeditor-lime.vercel.app/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Alex",
    role: "User support/Administrator at PostBank",
    feedback:
      "You were a wonderful addition to our team. I'm quite impressed with your abilities and professional practices.",
  },
  {
    name: "Peter",
    role: "Developer at Postbank",
    feedback:
      "Don has a deep understanding of app/web development technologies and is adept at using them to build scalable, robust, and secure applications.",
  },
  {
    name: "Margaret",
    role: "HEAD ICT PENSIONS",
    feedback:
      "Very skilled at what he does and has an in-depth knowledge of Django and he's always ready to handle any challenges thrown at him.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Don Michael Ombisi",
  description: greetings.description,
  author: "Don Michael",
  image: "https://avatars.githubusercontent.com/u/155391757?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Don",
    "Don Michael",
    "@1Don100",
    "1Don100",
    "Portfolio",
    "Don Portfolio",
    "Don Michael Portfolio",
  ],
};
