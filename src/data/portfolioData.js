const portfolioData = {
  basics: {
    name: "Antaryami Nayak",
    headline: "B.Tech in Computer Science | Software Engineer",
    summary:
      "Computer science graduate focused on backend engineering, scalable systems, and clean API design.",
    phone: "+91 9583684760",
    email: "nayakantaryami324@gmail.com",
    linkedin: "https://www.linkedin.com/in/antaryami",
    github: "https://github.com/nayakantaryami",
    leetcode: "https://leetcode.com/u/nayakantaryami",
    twitter: "https://x.com/",
  },
  resume: {
    resumeId: "18tdkE07_MSRC1-taylQPaKOvo6x5XMNj",
    resumePreviewUrl:
      "https://drive.google.com/file/d/18tdkE07_MSRC1-taylQPaKOvo6x5XMNj/preview",
    resumeViewUrl:
      "https://drive.google.com/file/d/18tdkE07_MSRC1-taylQPaKOvo6x5XMNj/view?usp=sharing",
    resumeDownloadUrl:
      "https://drive.google.com/uc?export=download&id=18tdkE07_MSRC1-taylQPaKOvo6x5XMNj",
    photos: ["/linkedinprofile.jpg"],
  },
  education: [
    {
      institution: "National Institute of Technology, Rourkela",
      period: "Nov 2022 - Present",
      degree: "B.Tech in Computer Science and Engineering",
      details: "CGPA: 8.46",
      location: "Odisha, India",
    },
    {
      institution: "Jawahar Navodaya Vidyalaya, Kendrapara",
      period: "May 2021",
      degree: "Senior Secondary",
      details: "Percentage: 96.4",
      location: "Odisha, India",
    },
    {
      institution: "Jawahar Navodaya Vidyalaya, Kendrapara",
      period: "May 2019",
      degree: "Matriculation",
      details: "Percentage: 96",
      location: "Odisha, India",
    },
  ],
  experience: [
    {
      role: "Software Engineer Intern",
      organization: "UKG (Ultimate Kronos Group)",
      period: "Jan 2026 - Present",
    },
    {
      role: "Research Intern",
      organization: "National Institute of Technology, Rourkela",
      period: "May - Jul 2025",
    },
  ],
  projects: [
    {
      title: "ConnectSphere",
      stack: ["Node.js", "Express.js", "MongoDB", "RabbitMQ", "Redis"],
      period: "July 2025",
      github: "https://github.com/nayakantaryami/ConnectSphere",
      bullets: [
        "Built a scalable social media backend using a microservices architecture with independent auth, profile, and post services.",
        "Developed secure REST APIs with JWT authentication; used MongoDB for flexible storage and Redis caching to reduce latency.",
        "Implemented asynchronous communication with RabbitMQ and designed for horizontal scalability with read replicas.",
      ],
    },
    {
      title: "ArogyaCare",
      stack: ["ReactJS", "ExpressJS", "MongoDB", "Razorpay"],
      period: "Jun 2025",
      github: "https://github.com/nayakantaryami/ArogyaCare",
      bullets: [
        "Implemented role-based access control (admin, doctor, user) using JWT and Bcrypt for secure workflows.",
        "Built modular REST APIs for user management, appointment scheduling, and payment processing.",
        "Integrated Razorpay for real-time payments and subscriptions.",
      ],
    },
    {
      title: "LangBuddy",
      stack: ["Node.js", "Express.js", "MongoDB", "ReactJS"],
      period: "2026",
      github: "https://github.com/nayakantaryami/langbuddy",
      bullets: [
        "Built a language-learning companion that pairs conversation practice with personalized feedback.",
        "Implemented user progress tracking with structured lesson data and session history.",
        "Designed a responsive UI for guided exercises and streak-based motivation.",
      ],
    },
  ],
  skills: {
    languages: [
      "C",
      "C++",
      "Java",
      "JavaScript",
      "Python",
      "HTML",
      "CSS",
      "SQL",
    ],
    frameworks: [
      "Node.js",
      "Express.js",
      "ReactJS",
      "MongoDB",
      "Redis",
      "RabbitMQ",
    ],
    tools: [
      "Mocha",
      "Chai.js",
      "Robot Framework",
      "Postman",
      "VS Code",
      "GitHub",
    ],
  },
  extracurricular: {
    title: "Team Lead, Innovision Tech Fest",
    period: "Nov 2024",
    points: [
      "Led the planning and execution of an event with over 3,000 attendees, resolving logistical challenges and making timely decisions to ensure smooth operations.",
    ],
  },
};

export default portfolioData;
