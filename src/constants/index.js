import project1 from "../assets/projects/project-1.png";

export const HERO_CONTENT = `I'm a driven, self-motivated developer with a strong sense of responsibility and a passion for growth. Always eager to expand my knowledge in software development, I strive to be the best version of myself and view challenges and even mistakes as valuable opportunities for improvement and innovation.`;

export const ABOUT_TEXT = `As a dedicated backend developer with a proactive approach, I have honed my skills in creating scalable and efficient web applications using Python, Django, and other relevant technologies. My commitment to continuous learning and improvement keeps me updated with the latest industry trends. I bring a strong sense of responsibility to every project, with excellent communication skills that help bridge technical and non-technical discussions effectively. Embracing mistakes as learning opportunities, I aim to deepen my expertise and contribute to impactful software solutions.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Backend Engineer",
    company: "BeCompanyLTD",
    description: `
    Experienced in developing and optimizing SaaS and B2B systems using Python, Django, and Django REST Framework (DRF).
    Designed and implemented RESTful APIs, including CRUD operations, complex backend logic, and integrations with third-party applications via REST and JSON.
    Developed real-time communication solutions using Django Channels and WebSockets.

    Led a migration from AWS EC2 to ECS, optimizing deployment and reducing costs, while managing Dockerized applications, AWS ALB, IAM roles, and ECS tasks.
    Developed automation scripts with Boto3 for AWS resource management.
    Handled Amazon S3 for optimized file storage and delivery.
    Designed and optimized PostgreSQL schemas, working with Aurora RDS and PGAdmin for efficient database handling.

    Implemented OAuth 2.0, JWT authentication, CSRF protection, and SSL encryption to ensure security.
    Managed production deployments with Nginx and Gunicorn, ensuring high availability and performance.
    Built CI/CD pipelines using Bitbucket Pipelines with custom YAML configurations.

    Collaborated closely with frontend developers to integrate backend functionalities seamlessly and enhance user experience.
    `,
    technologies: ["Python", "Django", "RESTful APIs", "AWS", "Docker", "Nginx"],
  },
];





export const EDUCATION = [
  {
    year: "2024 - 2027",
    role: "Bachelor's Degree",
    company: "Computer Science",
    description: `
    Pursuing a Bachelor's degree in Computer Science, where I applied Object-Oriented Programming (OOP) principles, including
    polymorphism and inheritance, in Java. In C, I gained experience with low-level programming concepts, such as memory management
    using pointers, working with data structures like binary trees, linked lists, and implementing algorithms with a focus on time
    complexity and optimization. Developed strong problem-solving skills through various projects that required efficient algorithmic
    solutions and hands-on implementation of theoretical concepts.
    `,
    technologies: ["Problem-Solving", "Java", "C", "OOP", "Algorithms", "Data Structures"],
  }
];


export const PROJECTS = [
  {
    title: "ChatConnect",
    image: project1,
    description:
      "ChatConnect is a full-stack web application built with Django, featuring CRUD operations, user authentication, and a RESTful API for smooth frontend-backend communication. The frontend is developed using Django's built-in template system. The backend utilizes Django ORM for database management, and the entire project is containerized using Docker and orchestrated with Docker Compose. NGINX is configured as a reverse proxy to enhance  production performance. The project showcases scalability and reliability.",
    technologies: ["HTML", "CSS", "Python", "JavaScript", "REST-API"],
    link: "https://github.com/Evyatarashuri/ChatConnect",
  },
];

export const CONTACT = {
  email: "evyatar54545@gmail.com",
};
