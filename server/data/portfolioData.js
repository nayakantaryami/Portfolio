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
      bullets: [
        "Built RESTful API endpoints for user management and chat creation on an internal multi-tenant collaboration platform.",
        "Orchestrated smoke and regression test suites with Robot Framework, cutting testing time by 20% and stabilizing critical user flows.",
        "Developed automated API test suites using Mocha and Chai.js to validate RESTful endpoints across multiple tenants.",
        "Automated API regression scripts, reducing debugging time by 10% and improving reliability of client workflows.",
      ],
    },
    {
      role: "Research Intern",
      organization: "National Institute of Technology, Rourkela",
      period: "May - Jul 2025",
      bullets: [
        "Developed a smart traffic management system using ANNs to optimize signal timings from real-time traffic flow and emergency vehicle detection.",
        "Processed CCTV video feeds with YOLO-based detection to extract live vehicle counts and traffic density.",
      ],
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
  vlogs: [
    {
      title: "Building scalable APIs",
      date: "Mar 2026",
      description:
        "How I design REST APIs with clean contracts and versioning.",
      link: "https://example.com/vlogs/scalable-apis",
    },
    {
      title: "System design prep",
      date: "Feb 2026",
      description:
        "Approaching architecture interviews with real-world tradeoffs.",
      link: "https://example.com/vlogs/system-design",
    },
  ],
};

export default portfolioData;
