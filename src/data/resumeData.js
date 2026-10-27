// ============================================
// NIROSHKUMAR K — Portfolio Data
// ============================================

export const personalInfo = {
  name: "Niroshkumar K",
  title: "Full Stack Developer",
  tagline: ["React.js Expert", "Node.js Developer", "Flutter Developer", "Real-time Systems Builder", "API Architect"],
  email: "niroshkumar35@gmail.com",
  phone: "+91 73395 35472",
  location: "Coimbatore, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/nirosh-kumark2003",
  github: "https://github.com/Niroshkumar10",
  summary:
    "Full Stack Developer with 2+ years of experience building and maintaining production web and mobile applications with React.js, Flutter, Node.js, Express.js and MySQL. Experienced in REST API design, OTP/JWT authentication, role-based access control, and real-time and live location features using Socket.IO, Firebase Cloud Messaging and Google Maps. Contributed end-to-end to MicroLab (home sample collection) and RedTaxi (cab booking), covering booking, dispatch, live tracking, fare, payment and admin workflows.",
  stats: [
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 2, suffix: "", label: "Production Apps" },
    { value: 5, suffix: "+", label: "Projects Shipped" },
    { value: 30, suffix: "%", label: "Dev Time Saved" },
  ],
};

export const skillCategories = [
  {
    id: "frontend",
    icon: "🎨",
    name: "Frontend & Mobile",
    skills: ["JavaScript ES6+", "React.js", "Redux Toolkit", "Vite", "Flutter", "HTML5", "CSS3", "SASS", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "backend",
    icon: "⚙️",
    name: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT Auth", "OTP Auth", "RBAC", "CodeIgniter"],
  },
  {
    id: "database",
    icon: "🗄️",
    name: "Database",
    skills: ["MySQL", "MongoDB", "Schema Design", "CRUD Operations"],
  },
  {
    id: "integrations",
    icon: "📡",
    name: "Integrations",
    skills: ["Firebase", "Firebase Cloud Messaging", "Google Maps", "GPS / Live Location Tracking"],
  },
  {
    id: "tools",
    icon: "🛠️",
    name: "Dev Tools & Design",
    skills: ["Git", "GitLab", "GitLab CI/CD", "Postman", "VS Code", "npm", "Figma", "Adobe XD"],
  },
  {
    id: "practices",
    icon: "🔄",
    name: "Practices",
    skills: ["Agile", "Debugging", "Code Review", "Production Deployment"],
  },
];

export const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "NeuralArc Global Pvt Ltd",
    location: "Coimbatore",
    period: "Jun 2024 – Present",
    type: "Full-time",
    points: [
      "Develop and maintain production web and mobile apps, including MicroLab and RedTaxi, with Flutter, React.js, Node.js and MySQL.",
      "Design and integrate REST APIs and database schemas for authentication, booking, dispatch, fare, payment and reporting workflows.",
      "Implement OTP/JWT authentication, role-based access control, Socket.IO real-time updates, FCM notifications and Google Maps/GPS.",
      "Built React.js apps with Vite and Redux Toolkit, including e-commerce workflows (listing, cart, checkout, payment gateway) and a reusable component library adopted across 5+ internal projects, reducing development effort by ~30%.",
      "Debug, test and optimize services; support production deployments, code reviews and GitLab CI/CD.",
    ],
  },
  {
    id: 2,
    role: "Front-End Developer Intern",
    company: "NeuralArc Global Pvt Ltd",
    location: "Coimbatore",
    period: "Mar 2024 – May 2024",
    type: "Internship",
    points: [
      "Built interactive React.js apps (clock, to-do, calculator, profile card) using React Hooks and localStorage for state and persistence.",
    ],
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "VEBBOX Software Solutions",
    location: "Coimbatore",
    period: "Jul 2024 – Aug 2024",
    type: "Internship",
    points: [
      "Developed responsive, cross-browser web pages with HTML5, CSS3 and JavaScript, and contributed to UI and page-load improvements.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    num: "01",
    category: "Mobile + Backend",
    title: "MicroLab — Home Collection Monitoring System",
    description:
      "Customer and technician Flutter apps with a Node.js/Express.js + MySQL backend for home sample collection — booking, slot scheduling, real-time technician dispatch, live GPS tracking and the full lab booking lifecycle.",
    features: ["Real-time Dispatch", "Live GPS Tracking", "OTP + JWT Auth", "FCM Notifications", "Slot Scheduling", "PDF Reports"],
    stack: ["Flutter", "Node.js", "Express.js", "MySQL", "Socket.IO", "FCM", "Google Maps", "JWT"],
    highlight: true,
  },
  {
    id: 2,
    num: "02",
    category: "Mobile + Backend",
    title: "RedTaxi — Cab Booking Application",
    description:
      "Customer and driver Flutter apps with versioned Node.js/Express.js REST APIs — map-based booking, fare estimation, sequential Socket.IO driver dispatch with double-assignment protection, live tracking, driver wallet and CodeIgniter admin.",
    features: ["Sequential Driver Dispatch", "Fare Rules by Zone", "Live Tracking", "Pickup OTP", "Driver Wallet", "Ratings"],
    stack: ["Flutter", "Node.js", "Express.js", "MySQL", "Socket.IO", "FCM", "Google Maps", "JWT", "CodeIgniter"],
    highlight: true,
  },
  {
    id: 3,
    num: "03",
    category: "Full Stack",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application with separate admin and user panels, featuring product management, shopping cart, order tracking, and JWT-secured authentication.",
    features: ["Admin & User Panels", "JWT Authentication", "Product Management", "Order Tracking", "Shopping Cart", "Payment Gateway"],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Redux Toolkit"],
    github: "https://github.com/Niroshkumar10",
    live: "#",
    highlight: false,
  },
  {
    id: 4,
    num: "04",
    category: "Frontend",
    title: "Hospitality Management Checkout UI",
    description:
      "Multi-step hotel management interface capturing guest information, room details, payment summary, and automated PDF receipt generation with dynamic form state management.",
    features: ["Multi-step Form", "Guest Management", "PDF Generation", "Payment Summary", "Room Booking"],
    stack: ["React.js", "Dynamic Forms", "PDF Generation", "State Management"],
    github: "https://github.com/Niroshkumar10",
    live: "#",
    highlight: false,
  },
  {
    id: 5,
    num: "05",
    category: "Dashboard",
    title: "Inventory Management System",
    description:
      "Dynamic inventory dashboard with category-based item selection, live stock overview, and integrated summary reports using real-time state updates.",
    features: ["Live Stock Overview", "Category Filters", "Summary Reports", "Real-time Updates", "Redux State"],
    stack: ["React.js", "Redux Toolkit", "Real-time State", "Data Visualization"],
    github: "https://github.com/Niroshkumar10",
    live: "#",
    highlight: false,
  },
  {
    id: 6,
    num: "06",
    category: "UI/UX",
    title: "Portfolio Website & UI Clones",
    description:
      "Responsive personal portfolio and multiple pixel-accurate UI clone pages demonstrating strong attention to design fidelity and cross-browser compatibility.",
    features: ["Pixel-perfect Clones", "Fully Responsive", "Cross-browser", "Design Fidelity", "Tailwind CSS"],
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Niroshkumar10",
    live: "https://niroshkumar10.github.io/niroshkumar-portfolio",
    highlight: false,
  },
];
export const education = [
  {
    id: 1,
    icon: "🎓",
    degree: "Bachelor of Engineering — Computer Science & Engineering",
    institution: "Arjun College of Technology, Coimbatore",
    year: "2021 – 2025",
    grade: "CGPA: 7.77",
  },
  {
    id: 2,
    icon: "📚",
    degree: "HSC — Higher Secondary Certificate",
    institution: "G.H.S School, Ulkottai",
    year: "2019 – 2021",
    grade: "80%",
  },
  {
    id: 3,
    icon: "📖",
    degree: "SSLC — Secondary School Leaving Certificate",
    institution: "G.H.S School, Ulkottai",
    year: "2018 – 2019",
    grade: "75%",
  },
];

export const certifications = [
  { id: 1, icon: "🏆", name: "Full Stack Development Internship Certificate", org: "NeuralArc Global Pvt Ltd" },
  { id: 2, icon: "🐍", name: "Python Programming", org: "EduPrab" },
  { id: 3, icon: "☕", name: "Java Backend Development", org: "Infosys ICT Academy" },
  { id: 4, icon: "🌐", name: "Web Development", org: "Rinax Technology" },
  { id: 5, icon: "✅", name: "Internship Completion Certificate", org: "Rinax Technology" },
];

export const highlights = [
  { icon: "⚡", title: "Real-time Systems", desc: "Built Socket.IO dispatch with timeouts, offer tracking and double-assignment protection, plus live GPS tracking" },
  { icon: "🏗️", title: "Component Library Author", desc: "Built a reusable component library adopted across 5+ internal projects, cutting dev effort by ~30%" },
  { icon: "🔐", title: "Security-Minded", desc: "Implemented OTP/JWT authentication with role-based access control across web and mobile apps" },
  { icon: "📱", title: "Web + Mobile", desc: "Shipped production Flutter and React.js apps backed by Node.js/Express.js REST APIs and MySQL" },
];

export const services = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "Fast, interactive UIs with React.js, Vite, and modern JavaScript. Component-driven architecture, responsive layouts, and smooth animations.",
    tags: ["React.js", "JavaScript", "Vite", "Redux Toolkit"],
  },
  {
    id: 2,
    title: "Backend Development",
    desc: "Versioned REST APIs with Node.js and Express.js for authentication, booking, dispatch, fare, payment and reporting workflows.",
    tags: ["Node.js", "Express.js", "REST APIs", "CodeIgniter"],
  },
  {
    id: 3,
    title: "Database Design",
    desc: "Schema design and CRUD operations in MySQL and MongoDB for bookings, rides, payments, wallets, ratings and reporting.",
    tags: ["MySQL", "MongoDB", "Schema Design", "CRUD"],
  },
  {
    id: 4,
    title: "Mobile & Real-time Apps",
    desc: "Cross-platform Flutter apps with live location tracking, Socket.IO real-time updates, push notifications and Google Maps routing.",
    tags: ["Flutter", "Socket.IO", "FCM", "Google Maps"],
  },
  {
    id: 5,
    title: "UI/UX Implementation",
    desc: "Pixel-perfect Figma-to-code conversion with responsive design, accessibility best practices, and micro-interaction animations.",
    tags: ["Figma", "Responsive", "Accessibility", "Framer Motion"],
  },
  {
    id: 6,
    title: "Auth & Security",
    desc: "OTP and JWT-based authentication flows with role-based access control, protected routes, and secure session management.",
    tags: ["OTP", "JWT", "RBAC", "Security"],
  },
];
