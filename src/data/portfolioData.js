// ============================================================
// portfolioData.js — Centralized configuration for Bhavesh Borse's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Shrinivas Solapure",
  firstName: "Shrinivas",
  brandName: "Shri Solapure",
  title: "Network & Cloud Engineer | Full Stack Developer",
  location: "Maharashtra, India",
  phone: "+91 8888764131",
  emails: {
    primary: "shrinivasbsolapure@gmail.com",
    secondary: "shrinivasbsolapure.nbnscoe.comp@gmail.com",
  },
  summary:
    "Network & Cloud Engineer with hands-on CCNA, RHEL Linux Administration, AWS, and DevOps skills — combined with strong Full Stack Web Development experience in React, Node.js, and Firebase. Skilled in LAN/WAN setup, TCP/IP, subnetting, VLAN, routing, switching, Linux system administration, CI/CD pipelines, and Docker. Also builds complete web products from authentication to admin dashboards.",
  resumeUrl: "/shri-resume.pdf",
  resumeCcna: "/shri_ccna.pdf",
  resumeLinux: "/shri_linux.pdf",
};

export const socialLinks = {
  github: "https://github.com/Shrinivas8888",
  linkedin: "https://www.linkedin.com/in/shrinivas-solapure-269444271/",
  instagram: "https://www.instagram.com/shri_solapure/",
};

export const heroContent = {
  greeting: "Hi, I'm Shrinivas Solapure",
  titleHighlight: "Network & Cloud Engineer",
  subtitle:
    "CCNA Networking · RHEL Linux Administration · AWS · DevOps · Full Stack Web Development.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/shri-resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, I'm <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shrinivas Solapure</span> — a Network & Cloud Engineer and Full Stack Developer from Maharashtra, India. I specialize in CCNA Networking, RHEL Linux Administration, AWS, and DevOps. I also build fast, scalable web applications using React, Node.js, and modern web technologies.`,
  techStack: ["MongoDB", "Node.js", "React.js"],
};

export const skillsContent = {
  badge: "My Approach",
  heading: "How I work — from networks to applications",
  description:
    "I take a structured approach across both networking & cloud infrastructure and full-stack development — planning, configuring, building, and deploying end-to-end.",
  cards: [
    {
      number: "01",
      title: "Plan & Design",
      text: "Understanding goals, user/network requirements, IP addressing schemes, and technical constraints to lay a solid foundation — whether it's a network or a web application.",
    },
    {
      number: "02",
      title: "Configure",
      text: "Setting up Cisco routers/switches, RHEL Linux systems, AWS cloud infrastructure, or web app backends — hands-on configuration with real tools.",
    },
    {
      number: "03",
      title: "Build & Develop",
      text: "Building scalable web apps with React, Node.js, and Firebase — or setting up CI/CD pipelines with Jenkins, Docker, and GitHub.",
    },
    {
      number: "04",
      title: "Test & Deploy",
      text: "Verifying network connectivity with ping/traceroute, testing web apps, and deploying to AWS, Vercel, or containerized environments using Docker.",
    },
  ],
  endText: "Ready to deploy!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "CCNA Networking",
      skills: [
        { name: "TCP/IP & OSI Model", level: 85 },
        { name: "IPv4 Addressing & Subnetting", level: 83 },
        { name: "VLAN & Inter-VLAN Routing", level: 80 },
        { name: "Routing & Switching", level: 82 },
        { name: "DNS, DHCP & NAT", level: 80 },
        { name: "Cisco Packet Tracer", level: 85 },
      ],
    },
    {
      title: "Linux Administration",
      skills: [
        { name: "RHEL / Linux (RHEL 10)", level: 80 },
        { name: "Users, Groups & Permissions", level: 82 },
        { name: "Services & Process Mgmt", level: 78 },
        { name: "SSH & Firewall Rules", level: 78 },
        { name: "Shell Scripting (Bash)", level: 72 },
        { name: "Apache Web Server & NFS", level: 70 },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS (EC2, S3, IAM)", level: 65 },
        { name: "Docker & Containers", level: 72 },
        { name: "Jenkins & CI/CD", level: 65 },
        { name: "Git & GitHub", level: 90 },
        { name: "DevOps Practices", level: 68 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 82 },
        { name: "Next.js", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 55 },
        { name: "HTML5 & CSS3", level: 94 },
        { name: "Tailwind CSS", level: 83 },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "Firebase Auth", level: 85 },
        { name: "REST APIs", level: 88 },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Java", level: 92 },
        { name: "Python", level: 90 },
        { name: "SQL", level: 87 },
        { name: "Bash / Shell", level: 72 },
      ],
    },
  ],
};

// What I Do — Cloud/Networking-forward
export const contentCreation = {
  badge: "What I Do",
  heading: "From Networks to Full Stack",
  description:
    "I work across networking, cloud infrastructure, Linux administration, and full-stack web development — covering the full technology stack from hardware to application layer.",
  categories: [
    {
      title: "CCNA Networking",
      description:
        "LAN/WAN setup, TCP/IP, subnetting, VLAN configuration, inter-VLAN routing, DNS, DHCP, NAT, and hands-on Cisco router/switch configuration using Cisco Packet Tracer.",
      stats: "Hands-on Labs Done",
      icon: "🌐",
    },
    {
      title: "Linux Administration",
      description:
        "RHEL 10 system admin — users, groups, permissions, ACL, SSH, firewall, Apache web hosting, NFS file sharing, package management, shell scripting, and system monitoring.",
      stats: "RHEL 10 Experienced",
      icon: "🐧",
    },
    {
      title: "Cloud & DevOps",
      description:
        "AWS (EC2, S3, IAM), Docker containers, Jenkins CI/CD pipelines, Git workflows, and DevOps fundamentals for modern cloud infrastructure and deployment.",
      stats: "AWS + Docker + Jenkins",
      icon: "☁️",
    },
    {
      title: "Full-Stack Web Apps",
      description:
        "End-to-end web applications with React, Node.js, Firebase, and TypeScript — authentication, admin dashboards, real-time databases, and responsive UI.",
      stats: "4+ Projects Shipped",
      icon: "🚀",
    },
    {
      title: "IoT & Embedded Systems",
      description:
        "Hardware-software integration using ESP32, remote control systems, sensor interfacing, and wireless communication protocols for real-world IoT projects.",
      stats: "ESP32 Projects",
      icon: "📡",
    },
    {
      title: "UI/UX Design",
      description:
        "Pixel-perfect interfaces crafted in Figma and implemented with Tailwind CSS and Framer Motion for smooth, premium user experiences.",
      stats: "Modern & Responsive",
      icon: "🎨",
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
      "Linux Administration",
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
    id: "rhel-linux-lab",
    number: "01",
    badge: "🐧 Linux Admin",
    title: "RHEL Linux System Administration Lab",
    description:
      "Comprehensive RHEL 10 system administration practice — configured users, groups, permissions, ACL, sudo access, process and service management, package management (DNF/YUM), disk partitioning, and job automation. Set up SSH remote access, firewall rules (firewalld), Apache web server hosting, NFS file sharing, system monitoring, GRUB bootloader, and root password recovery. Practiced Vim, archive management, Flatpak, and performance tuning.",
    techTags: [
      "RHEL 10",
      "Linux",
      "Bash / Shell Scripting",
      "SSH",
      "Apache",
      "NFS",
      "Firewalld",
    ],
    links: {
      github: "",
      demo: "/shri_linux.pdf",
    },
    isFlagship: true,
  },
  {
    id: "ccna-static-routing",
    number: "02",
    badge: "🌐 CCNA Networking",
    title: "Static Routing & Network Connectivity Lab",
    description:
      "Designed a multi-router network topology in Cisco Packet Tracer. Configured IPv4 addressing with subnetting across different network segments and set up static routes between routers for end-to-end connectivity. Verified reachability using ping, traceroute, and routing-table commands and troubleshot connectivity issues across multiple networks.",
    techTags: [
      "Cisco Packet Tracer",
      "IPv4",
      "Subnetting",
      "Static Routing",
      "LAN / WAN",
    ],
    links: {
      github: "",
      demo: "/shri_ccna.pdf",
    },
    isFlagship: false,
  },
  {
    id: "ccna-dhcp-dns",
    number: "03",
    badge: "🌐 Network Services",
    title: "DHCP, DNS & Network Services Lab",
    description:
      "Configured DHCP services in Cisco Packet Tracer to automatically assign IPv4 addresses, subnet masks, default gateways, and DNS information to client devices. Configured basic DNS services and tested hostname-based communication between network devices. Troubleshot IP assignment errors, gateway misconfigurations, and DNS resolution failures.",
    techTags: [
      "Cisco Packet Tracer",
      "DHCP",
      "DNS",
      "NAT",
      "IPv4",
      "Network Troubleshooting",
    ],
    links: {
      github: "",
      demo: "/shri_ccna.pdf",
    },
    isFlagship: false,
  },
  {
    id: "cisco-switch-security",
    number: "04",
    badge: "🔐 Switch Security",
    title: "Cisco Switch Security & Port Configuration Lab",
    description:
      "Configured Cisco switch hostname, console access, enable password, MOTD banner, and startup-configuration. Practiced switch port configuration, MAC address-table verification, and port security concepts using Cisco IOS. Verified VLAN configurations and inter-VLAN routing to ensure proper traffic segmentation.",
    techTags: [
      "Cisco IOS",
      "VLAN",
      "Switch Security",
      "Port Security",
      "MAC Table",
    ],
    links: {
      github: "",
      demo: "/shri_ccna.pdf",
    },
    isFlagship: false,
  },
  {
    id: "iot-car-esp32",
    number: "05",
    badge: "📡 IoT / Embedded",
    title: "Remote-Controlled Car using ESP32",
    description:
      "Built a Wi-Fi controlled RC car using an ESP32 microcontroller. The ESP32 hosts a web server accessible from any browser on the same network, allowing real-time directional control (forward, backward, left, right) via a web interface. Integrated motor driver module (L298N), DC motors, and chassis assembly. Implemented PWM-based speed control and wireless communication over Wi-Fi.",
    techTags: [
      "ESP32",
      "IoT",
      "Wi-Fi",
      "L298N Motor Driver",
      "PWM",
      "Web Server",
      "C++",
    ],
    links: {
      github: "",
      demo: "",
    },
    isFlagship: false,
  },
  {
    id: "carefusion",
    number: "06",
    badge: "🚀 Full Stack",
    title: "CareFusion - Smart Healthcare System",
    description:
      "Developed a full-stack healthcare management system with secure authentication and role-based access for patients, doctors, laboratories, pharmacies, and administrators. Built REST APIs for appointment booking, medical records, and prescription management. Containerized the application using Docker for deployment.",
    techTags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
    ],
    links: {
      github: "",
      demo: "https://carefusion.onrender.com",
    },
    isFlagship: false,
  },
  {
    id: "quickmeet",
    number: "07",
    badge: "🤝 Web App",
    title: "QuickMeet - Online Meeting Management System",
    description:
      "Designed and developed an online meeting management system using PHP and MySQL. Implemented meeting scheduling, participant management, and responsive user interfaces.",
    techTags: [
      "PHP",
      "MySQL",
    ],
    links: {
      github: "",
      demo: "https://quichf.free.nf",
    },
    isFlagship: false,
  },
  {
    id: "smartdesk-ai",
    number: "08",
    badge: "🤖 AI",
    title: "SmartDesk AI - Desktop Assistant",
    description:
      "Developed an AI-powered desktop assistant using Python to automate repetitive tasks. Implemented task automation and intelligent command processing for improved productivity.",
    techTags: [
      "Python",
      "Artificial Intelligence",
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
    "CCNA Networking · Linux · AWS · DevOps",
    "React · Node.js · Firebase · Docker",
    "Network & Cloud Engineer | Full Stack Developer",
  ],
  credential: "Network & Cloud Engineer · Maharashtra",
  copyright: `© ${new Date().getFullYear()} Shrinivas Solapure | Built with React & Vite`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
