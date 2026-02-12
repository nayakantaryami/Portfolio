const portfolioData = {
  basics: {
    name: "Antaryami Nayak",
    phone: "+91 9583684760",
    email: "nayakantaryami324@gmail.com",
    linkedin: "https://www.linkedin.com/in/antaryami",
    github: "https://github.com/nayakantaryami",
    leetcode: "https://leetcode.com/u/nayakantaryami"
  },
  education: [
    {
      institution: "National Institute of Technology, Rourkela",
      period: "November 2022 - Present",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      details: "CGPA: 8.46",
      location: "Odisha, India"
    },
    {
      institution: "Jawahar Navodaya Vidyalaya, Kendrapara",
      period: "May 2021",
      degree: "Senior Secondary",
      details: "Percentage: 96.4",
      location: "Odisha, India"
    },
    {
      institution: "Jawahar Navodaya Vidyalaya, Kendrapara",
      period: "May 2019",
      degree: "Matriculation",
      details: "Percentage: 96",
      location: "Odisha, India"
    }
  ],
  coursework: [
    "Data Structures and Algorithm",
    "Object Oriented Programming",
    "Operating System",
    "Database Management",
    "Computer Networks",
    "Software Engineering"
  ],
  experience: [
    {
      role: "Research Intern",
      organization: "National Institute of Technology, Rourkela",
      period: "May - Jul 2025",
      link: "Certificate",
      bullets: [
        "Developing a Smart Traffic Management System leveraging Artificial Neural Networks (ANNs) to dynamically optimize traffic signal timings based on real-time traffic flow and emergency vehicle detection.",
        "Designed, implemented, and trained a multi-output ANN using TensorFlow to predict optimal green light durations for four-way intersections, integrating lane-wise traffic density and emergency vehicle priority; achieved 90% prediction accuracy on test datasets.",
        "Processed CCTV video feeds using YOLO-based object detection to extract live vehicle counts and traffic density information, enabling the system to adapt signal phases in response to real-time road conditions."
      ]
    }
  ],
  projects: [
    {
      title: "ConnectSphere",
      stack: ["Node.js", "Express.js", "MongoDB", "RabbitMQ", "Redis"],
      period: "July 2025",
      github: "https://github.com/nayakantaryami/ConnectSphere",
      bullets: [
        "Engineered a scalable social media backend using a microservices architecture, decoupling key features like authentication, user profiles, and post management into independent, deployable services.",
        "Developed secure RESTful APIs with JWT-based authentication and authorization; utilized MongoDB for flexible, high-volume data storage and Redis for caching to reduce database load and decrease API latency.",
        "Implemented an asynchronous communication backbone using a RabbitMQ message broker to ensure high availability and data consistency.",
        "Designed the system for horizontal scalability, isolating read-heavy search operations with a replica database and managing high-concurrency traffic."
      ]
    },
    {
      title: "ArogyaCare",
      stack: ["React.js", "Express.js", "MongoDB", "Razorpay"],
      period: "Jun 2025",
      github: "https://github.com/nayakantaryami/ArogyaCare",
      bullets: [
        "Implemented secure, role-based access control (admin, doctor, user) using JWT and Bcrypt, enabling administrators to manage platform operations, doctors to maintain profiles and availability, and users to book appointments seamlessly.",
        "Engineered modular RESTful APIs using Node.js and Express.js to support user management, dynamic appointment scheduling, and payment processing workflows.",
        "Integrated Razorpay for secure, real-time payment processing and subscription handling."
      ]
    }
  ],
  achievements: [
    {
      title: "Data Structures and Algorithms",
      points: [
        "Solved 700+ DSA problems across LeetCode & GeeksforGeeks; LeetCode rating:1700+.",
        "Secured global rank 829 in LeetCode Weekly Contest 467."
      ]
    },
    {
      title: "Reliance Foundation Undergraduate Scholar",
      link: "Certificate",
      points: [
        "Awarded for outstanding academic excellence and leadership potential, conferred to a select group of undergraduate students across India."
      ]
    }
  ],
  skills: {
    languages: ["C", "C++", "Java", "JavaScript", "Python", "HTML", "CSS", "SQL", "MongoDB"],
    frameworks: ["TailwindCSS", "ReactJS", "ExpressJS"],
    tools: ["VS Code", "Github", "Postman"]
  },
  extracurricular: {
    title: "Team Lead, Innovision Tech Fest",
    period: "Nov 2024",
    points: [
      "Led the planning and execution of an event with over 3,000 attendees, resolving logistical challenges and making timely decisions to ensure smooth operations."
    ]
  }
};

export default portfolioData;
