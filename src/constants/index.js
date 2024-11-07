import project1 from "../assets/projects/project-1.png";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a driven, self-motivated developer with a strong sense of responsibility and a passion for growth. Always eager to expand my knowledge in software development, I strive to be the best version of myself and view challenges and even mistakes as valuable opportunities for improvement and innovation.`;

export const ABOUT_TEXT = `As a dedicated backend developer with a proactive approach, I have honed my skills in creating scalable and efficient web applications using Python, Django, and other relevant technologies. My commitment to continuous learning and improvement keeps me updated with the latest industry trends. I bring a strong sense of responsibility to every project, with excellent communication skills that help bridge technical and non-technical discussions effectively. Embracing mistakes as learning opportunities, I aim to deepen my expertise and contribute to impactful software solutions.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Backend Engineer",
    company: "BeCompanyLTD",
    description: ` Backend development using Python and Django, with a focus on building and optimizing RESTful APIs.
    Designing and implementing API endpoints using Django REST Framework (DRF) for efficient
    data handling.
    Managing PostgreSQL databases, including schema design and query optimization.
    Containerization with Docker and Docker Compose for scalable environments.
    Implementing CI/CD pipelines in Bitbucket Pipelines using custom YAML configurations.
    EXPERIENCE
    Configuring Nginx as a web server, including integration of SSL certificates for secure
    communication.
    Working extensively with AWS services, including EC2, S3, RDS, Route 53, Security Groups, and
    IAM roles management.`,
    technologies: ["Python", "Django", "AWS", "Docker", "Nginx"],
  },
  {
    year: " 2024 - 2027",
    role: " bachelor's degree",
    company: " Computer Science",
    description: `Applied Object-Oriented Programming (OOP) principles, including polymorphism, in C and
      Java. Gained experience with data structures such as binary trees and algorithms,
      focusing on time complexity and optimization. Developed proficiency in C and Java,
      including memory management with pointers in C and efficient coding practices in Java.
      Completed various projects that demonstrated practical application and advanced
      problem-solving abilities.`,
    technologies: ["Problem-Solving", "Java", "C", "OOP"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "ChatConnect",
    image: project1,
    description:
      "ChatConnect is a full-stack web application built with Django, featuring CRUD operations, user authentication, and a RESTful API for smooth frontend-backend communication. The frontend is developed using Django's built-in template system. The backend utilizes Django ORM for database management, and the entire project is containerized using Docker and orchestrated with Docker Compose. NGINX is configured as a reverse proxy to enhance  production performance. The project showcases scalability and reliability.",
    technologies: ["HTML", "CSS", "Python", "JavaScript", "REST-API"],
  },
  // {
  //   title: "Task Management App",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "CSS", "Angular", "Firebase"],
  // },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  // phoneNo: "+12 4555 666 00 ",
  email: "evyatar54545@gmail.com",
};
