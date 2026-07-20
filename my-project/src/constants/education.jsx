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

// Certifications Data
export const certifications = [
  {
    id: 1,
    title: "Spring Boot Microservices, Apache Kafka, Docker, Kubernetes, CI/CD & Spring AI, Spring Boot MVC and RESTful APIs, Spring Security, Hibernate and Spring Boot Data JPA",
    issuer: "Coding Shuttle",
    year: "2026",
    icon: <ShieldCheckIcon className="h-6 w-6" />
  },
  {
    id: 2,
    title: "Java, Data Structures and Algorithms (DSA)",
    issuer: "Apna College",
    year: "2023",
    icon: <ShieldCheckIcon className="h-6 w-6" />
  },
  {
    id: 3,
    title: "MERN Stack Developer",
    issuer: "Apna College",
    year: "2024",
    icon: <ShieldCheckIcon className="h-6 w-6" />
  },
  // {
  //   id: 3,
  //   title: "Certified Kubernetes Administrator",
  //   issuer: "Cloud Native Computing",
  //   year: "2022",
  //   credential: "CKA-3847ZK42",
  //   icon: <ShieldCheckIcon className="h-6 w-6" />
  // },
  // {
  //   id: 4,
  //   title: "TensorFlow Developer Certificate",
  //   issuer: "Google",
  //   year: "2021",
  //   credential: "TFD-8472XL39",
  //   icon: <BoltIcon className="h-6 w-6" />
  // }
];