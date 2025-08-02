import {
  AcademicCapIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

export const educationData = [
  {
    id: 1,
    degree: "B.E. Computer Engineering",
    institution: "Savitribai Phule Pune University University in Pune, Maharashtra",
    year: "2026 - pass out",
    description: "A B.E. in Computer Engineering is a four-year program centered on software development, with emphasis on data structures, algorithms, and problem-solving.",
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
  // {
  //   id: 3,
  //   degree: "BSc in Software Engineering",
  //   institution: "University of Toronto",
  //   year: "2018-2022",
  //   description: "Graduated with Honors. Focus on Distributed Systems and Cloud Computing.",
  //   icon: <AcademicCapIcon className="h-6 w-6" />
  // },
  // {
  //   id: 4,
  //   degree: "Diploma in Data Science",
  //   institution: "Harvard Extension",
  //   year: "2020-2021",
  //   description: "Advanced coursework in Statistical Modeling and Big Data Analytics.",
  //   icon: <BookOpenIcon className="h-6 w-6" />
  // }
];

// Certifications Data
export const certifications = [
  {
    id: 1,
    title: "Java, Data Strucher and Algorinthem (DSA)",
    issuer: "Apna College",
    year: "2023",
    icon: <ShieldCheckIcon className="h-6 w-6" />
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    issuer: "Apna Colege",
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