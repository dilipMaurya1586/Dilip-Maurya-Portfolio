import {
  AcademicCapIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Savitribai Phule Pune University, Pune, Maharashtra",
    year: "Jun 2026 - pass out",
    description: "A Bachelor of Engineering in Computer Engineering is a four-year program centered on software development, with emphasis on data structures, algorithms, and problem-solving.",
    icon: <AcademicCapIcon className="h-6 w-6" />
  },
  {
    id: 2,
    degree: "Maharashtra State Board, HSC - XII SCIENCE",
    institution: "Genba Sopanrao Moze Secondary & Higher Secondary Prashala, Pune",
    year: "2021 - pass out",
    description: "XII Science is the final year of higher secondary education with a focus on subjects like Physics, Chemistry, Mathematics, and Biology. It builds a strong foundation for careers in engineering other's.",
    icon: <BookOpenIcon className="h-6 w-6" />
  },

];

// Certifications Data - long tech lists are now split out into a "skills" array
// (rendered as small tag chips) instead of one giant title sentence, so all
// certification cards stay similar height and look consistent, like the project cards.
export const certifications = [
  {
    id: 1,
    title: "Spring Boot Microservices & DevOps",
    issuer: "Coding Shuttle",
    year: "2026",
    skills: ["Spring Boot", "Kafka", "Docker", "Kubernetes", "CI/CD", "Spring Security", "Hibernate", "Spring Data JPA"],
    link: "/assets/images/certificates/course-certificates/Spring-Boot-course-completion-certificate.pdf",
    icon: <ShieldCheckIcon className="h-6 w-6" />
  },
  {
    id: 2,
    title: "Java, Data Structures and Algorithms (DSA)",
    issuer: "Apna College",
    year: "2023",
    skills: ["Java", "DSA", "Problem Solving"],
    link: "/assets/images/certificates/course-certificates/Java-Certificare.pdf",
    icon: <ShieldCheckIcon className="h-6 w-6" />
  },
  {
    id: 3,
    title: "MERN Stack Developer",
    issuer: "Apna College",
    year: "2024",
    skills: ["React", "Node.js", "Express", "MongoDB"],
    link: "/assets/images/certificates/course-certificates/MERN-Stack-Certificare.pdf",
    icon: <ShieldCheckIcon className="h-6 w-6" />
  },

];
