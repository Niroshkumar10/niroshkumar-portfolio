// ============================================
// NIROSHKUMAR K — Portfolio Data
// ============================================

export const personalInfo = {
  name: "Niroshkumar K",
  title: "Full Stack Developer",
  tagline: ["React.js Expert", "Node.js Developer", "UI/UX Enthusiast", "API Architect", "Problem Solver"],
  email: "niroshkumar35@gmail.com",
  phone: "+91 73395 35472",
  location: "Coimbatore, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/nirosh-kumark2003",
  github: "https://github.com/Niroshkumar10",
  summary:
    "Results-driven Full Stack Developer with 1+ year of production experience building scalable web applications using React.js, Node.js, Express.js, JavaScript, MySQL, and MongoDB. Proven track record of delivering end-to-end features including JWT authentication, role-based access control, RESTful APIs, and e-commerce workflows.",
  stats: [
    { value: 1, suffix: "+", label: "Year Experience" },
    { value: 20, suffix: "+", label: "APIs Built" },
    { value: 5, suffix: "+", label: "Projects Shipped" },
    { value: 30, suffix: "%", label: "Dev Time Saved" },
  ],
};

export const skillCategories = [
  {
    id: "frontend",
    icon: "🎨",
    name: "Frontend",
    skills: ["React.js", "JavaScript ES6+", "Vite", "Redux Toolkit", "HTML5", "CSS3", "SASS", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "backend",
    icon: "⚙️",
    name: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "RBAC", "CodeIgniter"],
  },
  {
    id: "database",
    icon: "🗄️",
    name: "Database",
    skills: ["MySQL", "MongoDB", "CRUD Operations"],
  },
  {
    id: "tools",
    icon: "🛠️",
    name: "Dev Tools",
    skills: ["Git", "GitLab", "Postman", "VS Code", "npm", "CI/CD Pipelines"],
  },
  {
    id: "uiux",
    icon: "🎯",
    name: "UI/UX Design",
    skills: ["Figma", "Adobe XD", "Responsive Design", "Component Architecture"],
  },
  {
    id: "practices",
    icon: "🔄",
    name: "Practices",
    skills: ["Agile", "Code Review", "Debugging", "Performance Optimization", "Accessibility"],
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
      "Engineered scalable, production-ready UIs using React.js, Vite, JavaScript, and Redux Toolkit, reducing component re-renders and improving app performance.",
      "Designed and integrated 20+ RESTful APIs using Node.js and Express.js, supporting product management, order processing, and user authentication workflows.",
      "Implemented secure JWT-based authentication with role-based access control (Admin/User), strengthening application security across modules.",
      "Built full e-commerce workflows including product listing, shopping cart, checkout flow, and payment gateway integration.",
      "Developed and maintained database schemas and CRUD operations using MySQL and MongoDB for multi-module enterprise applications.",
      "Created a reusable component library (TextField, Dropdown, Dialog) adopted across 5+ internal projects, reducing development time by ~30%.",
      "Collaborated with senior developers on code reviews, performance optimization, and CI/CD deployment pipelines via GitLab.",
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
      "Developed interactive React.js applications including a digital clock, to-do app, calculator, and dynamic profile card, demonstrating state management proficiency.",
      "Implemented localStorage for persistent data handling and managed component-level state using React Hooks (useState, useEffect).",
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
      "Designed and developed responsive web pages using HTML5, CSS3, and JavaScript, meeting cross-browser compatibility standards.",
      "Collaborated on UI enhancements and contributed to improving page load performance and visual consistency.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    num: "01",
    category: "Full Stack",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application with separate admin and user panels, featuring product management, shopping cart, order tracking, and JWT-secured authentication.",
    features: ["Admin & User Panels", "JWT Authentication", "Product Management", "Order Tracking", "Shopping Cart", "Payment Gateway"],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Redux Toolkit"],
    github: "https://github.com/Niroshkumar10",
    live: "#",
    highlight: true,
  },
  {
    id: 2,
    num: "02",
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
    id: 3,
    num: "03",
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
    id: 4,
    num: "04",
    category: "UI/UX",
    title: "Portfolio Website & UI Clones",
    description:
      "Responsive personal portfolio and multiple pixel-accurate UI clone pages demonstrating strong attention to design fidelity and cross-browser compatibility.",
    features: ["Pixel-perfect Clones", "Fully Responsive", "Cross-browser", "Design Fidelity", "Tailwind CSS"],
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Niroshkumar10",
    live: "#",
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
  { icon: "⚡", title: "Performance-Focused", desc: "Reduced component re-renders and optimized app performance using Redux Toolkit and Vite" },
  { icon: "🏗️", title: "Component Library Author", desc: "Built a reusable component library adopted across 5+ internal projects, cutting dev time by ~30%" },
  { icon: "🔐", title: "Security-Minded", desc: "Implemented JWT-based authentication with RBAC across multi-module enterprise applications" },
  { icon: "📦", title: "API Architect", desc: "Designed and integrated 20+ RESTful APIs for product management, orders, and user workflows" },
];
