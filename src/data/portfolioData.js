// ============================================================
// portfolioData.js — Centralized configuration for Bhavesh Borse's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Shrinivas Solapure",
  firstName: "Shrinivas",
  brandName: "Shri Solapure",
  title: "Full Stack Web Developer",
  location: "Maharashtra, India",
  phone: "+91 8888764131",
  emails: {
    primary: "shrinivasbsolapure@gmail.com",
    secondary: "shrinivasbsolapure.nbnscoe.comp@gmail.com",
  },
  summary:
    "Full Stack Web Developer with hands-on experience in Next.js, React, TypeScript, Tailwind CSS, and Firebase. Strong background in building complete products — authentication, admin dashboards, real-time databases, e-commerce systems, and business automation tools.",
  resumeUrl: "/shri-resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Shrinivas8888",
  linkedin: "https://www.linkedin.com/in/shrinivas-solapure-269444271/",
  instagram: "https://www.instagram.com/shri_solapure/",
};

export const heroContent = {
  greeting: "Hi, I'm Shrinivas Solapure",
  titleHighlight: "Full Stack Web Developer",
  subtitle:
    "I build fast, scalable web applications using Next.js, React, TypeScript, and Firebase.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/shri-resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shrinivas Solapure</span>, a Full Stack Web Developer from Maharashtra, India, dedicated to crafting fast, scalable, and visually stunning web applications using modern technologies.`,
  techStack: ["MongoDB", "Node.js", "React.js"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack web applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean UI/UX with Figma, intuitive interfaces, and pixel-perfect layouts using Tailwind CSS and ShadCN UI.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends with Firebase and responsive frontends with Next.js 15, TypeScript, and Framer Motion.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Deploying to Vercel or Netlify with optimized performance, zero-downtime CI/CD pipelines, and ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 82 },
        { name: "Node.js 15", level: 80 },
        { name: "TypeScript", level: 55 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5 & CSS3", level: 94 },
      ],
    },
    {
      title: "Styling & UI",
      skills: [
        { name: "Tailwind CSS", level: 83 },
        { name: "Framer Motion", level: 82 },
        { name: "Figma", level: 80 },
        { name: "Bootstrap", level: 90 },
      ],
    },
    {
      title: "Backend & Database",
        skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "SQL", level: 87 },
        { name: "Firebase Auth", level: 85 },
        { name: "REST APIs", level: 88 },
      ],
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Vercel", level: 92 },
        { name: "Netlify", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Infinity", level: 96},
        { name: "Antigravity", level: 90},
      ],
    },
    {
      title: "Web Concepts",
      skills: [
        { name: "Responsive Design", level: 94 },
        { name: "Performance Optimization", level: 86 },
        { name: "SEO Best Practices", level: 84 },
        { name: "Authentication Systems", level: 88 },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 88 },
        { name: "HTML / CSS", level: 95 },
        { name: "Java", level: 92},
        { name: "Python", level: 90},
      ],
    },
  ],
};

// Freelance Work & Design Philosophy (replaces ContentCreation)
export const contentCreation = {
  badge: "Freelance Work",
  heading: "Building Products That Matter",
  description:
    "Beyond code, I craft complete digital products — from idea to deployment — with a focus on design, performance, and user experience.",
  categories: [
    {
      title: "Full-Stack Web Apps",
      description:
        "End-to-end web applications built with Next.js, Firebase, and TypeScript — from authentication to admin dashboards and real-time data.",
      stats: "4+ Projects Shipped",
      icon: "🚀",
    },
    {
      title: "E-Commerce Systems",
      description:
        "Complete e-commerce platforms with product management, cart systems, payment flows, and admin panels for business owners.",
      stats: "2+ Stores Built",
      icon: "🛍️",
    },
    {
      title: "UI/UX Design",
      description:
        "Pixel-perfect interfaces crafted in Figma and implemented with Tailwind CSS and Framer Motion for smooth, premium experiences.",
      stats: "Modern & Responsive",
      icon: "🎨",
    },
    {
      title: "Business Automation",
      description:
        "Smart systems like QR-based ordering, real-time analytics dashboards, and automated workflows that save time and scale businesses.",
      stats: "Real-World Solutions",
      icon: "⚡",
    },
  ],
};

// Leadership & Activities
export const leadershipList = [
  {
    title: "Leader in Major Projects",
    description:
      "Led a team of four members to successfully develop and present academic software projects, ensuring timely delivery and effective collaboration.",
    role: "Team Leader",
    badge: "Leadership",
  },
  {
    title: "Hackathon Participant",
    description:
      "Actively participated in a Hackathon at SKN Sinhgad College of Engineering, Pandharpur, showcasing problem-solving and rapid prototyping skills.",
    role: "Participant",
    badge: "Competition",
  },
  {
    title: "Event Organizer - Ganesh Festival",
    description:
      "Organized the Ganesh Festival in college, managing event logistics, coordinating technical and cultural activities, and ensuring smooth execution.",
    role: "Event Organizer",
    badge: "Management",
  },
];

// Internships / Work Experience
export const internshipsList = [
  {
    organization: "SoftGrid Technology Pvt. Ltd.",
    role: "Java Developer Intern",
    duration: "Jan 2026 – Apr 2026",
    skills: [
      "Full-Stack Development",
      "Java & Web Technologies",
      "Database CRUD Operations",
      "Agile Development",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "Git", "REST APIs"],
  },
  {
    organization: "MSSquare Global",
    role: "AWS & DevOps Trainee",
    duration: "1 Month",
    skills: [
      "Cloud Infrastructure",
      "CI/CD Pipelines",
      "Server Deployment",
      "DevOps Practices",
    ],
    tech: ["AWS", "Docker", "Linux", "Git", "Jenkins"],
  },
];

// Soft Skills
export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex product requirements into clean, modular, and maintainable code structures.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Clear, structured communication with clients — from requirement gathering to final delivery and feedback.",
  },
  {
    name: "Self-Driven",
    icon: "🚀",
    desc: "Independently learning new frameworks like Next.js 15, TypeScript, and ShadCN without formal training.",
  },
  {
    name: "Adaptability",
    icon: "🌟",
    desc: "Quick to adopt new tools — Framer Motion, Firebase Cloud Functions, and modern design systems.",
  },
  {
    name: "Attention to Detail",
    icon: "🎯",
    desc: "Pixel-perfect UI implementation, cross-browser testing, and ensuring every interaction feels premium.",
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Delivering freelance projects on schedule while continuously learning and building new products.",
  },
  {
    name: "Creativity",
    icon: "🎨",
    desc: "Blending design aesthetics with engineering — crafting interfaces that are both beautiful and functional.",
  },
  {
    name: "Product Thinking",
    icon: "💡",
    desc: "Thinking beyond code — understanding business goals and user needs to build products that actually work.",
  },
];

export const projects = [
  {
    id: "carefusion",
    number: "01",
    badge: "🚀 Full Stack",
    title: "CareFusion - Smart Healthcare System",
    description:
      "Developed a full-stack healthcare management system. Implemented secure authentication and role-based access for patients, doctors, laboratories, pharmacies and administrators. Built REST APIs for appointment booking, medical records and prescription management. Containerized the application using Docker for deployment.",
    techTags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker"
    ],
    links: {
      github: "",
      demo: "https://carefusion.onrender.com",
    },
    isFlagship: true,
  },
  {
    id: "quickmeet",
    number: "02",
    badge: "🤝 Web App",
    title: "QuickMeet - Online Meeting Management System",
    description:
      "Designed and developed an online meeting management system using PHP and MySQL. Implemented meeting scheduling, participant management and responsive user interfaces.",
    techTags: [
      "PHP",
      "MySQL"
    ],
    links: {
      github: "",
      demo: "https://quichf.free.nf",
    },
    isFlagship: false,
  },
  {
    id: "smartdesk-ai",
    number: "03",
    badge: "🤖 AI",
    title: "SmartDesk AI",
    description:
      "Developed an AI-powered desktop assistant using Python to automate repetitive tasks. Implemented task automation and intelligent command processing for improved productivity.",
    techTags: [
      "Python",
      "Artificial Intelligence"
    ],
    links: {
      github: "",
      demo: "",
    },
    isFlagship: false,
  },
  {
    id: "resultzone",
    number: "04",
    badge: "🎓 Web Portal",
    title: "ResultZone - Student Portal",
    description:
      "A student result management portal designed to streamline the publication and tracking of academic results with secure access.",
    techTags: [
      "React.js",
      "Node.js",
      "MongoDB"
    ],
    links: {
      github: "",
      demo: "",
    },
    isFlagship: false,
  },
  {
    id: "smartnetcafe",
    number: "05",
    badge: "💻 Management System",
    title: "SmartNetCafe - Cyber Cafe Manager",
    description:
      "A cyber cafe management system that automates billing, user session tracking, and PC allocation with a real-time admin dashboard.",
    techTags: [
      "Java",
      "MySQL"
    ],
    links: {
      github: "",
      demo: "",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Coordinator in College Event",
      issuer: "College",
      icon: "🎯",
    },
    {
      name: "Winner of UGCON Project Competition",
      issuer: "NBN Sinhgad College of Engineering",
      icon: "🏆",
    },
    {
      name: "Published Research Paper (IRJMETS)",
      issuer: "IRJMETS",
      icon: "📄",
    },
    {
      name: "Outdoor Sports & Athletics",
      issuer: "Extracurricular",
      icon: "🏃‍♂️",
    },
  ],
  viewAllUrl: "#",
};

export const educationList = [
  {
    institution: "NBN Sinhgad College of Engineering, Solapur",
    degree: "B.E. in Computer Science & Engineering",
    duration: "2022 – 2026",
    score: "CGPA: 9.15/10",
  },
  {
    institution: "Chh. Shahu Maharaj Sainik Vidhyalaya, Udgir",
    degree: "Higher Secondary Certificate (HSC)",
    duration: "2022",
    score: "81.60%",
  },
  {
    institution: "Manavya Vikas Vidhyalaya, Degloor",
    degree: "Secondary School Certificate (SSC)",
    duration: "2020",
    score: "91.60%",
  },
];

export const footerContent = {
  taglines: [
    "Full Stack Web Development",
    "Next.js · React · Firebase",
    "Modern Web Applications",
  ],
  credential: "Full Stack Developer · Maharashtra",
  copyright: `© ${new Date().getFullYear()} Shrinivas Solapure | Built with Next.js & React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
