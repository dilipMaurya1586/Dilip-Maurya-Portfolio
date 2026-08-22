import { CodeBracketIcon, CpuChipIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

export const projects = [

  {
    title: 'SplitSettle (Group Expense Splitter)',
    description: 'A microservices-based expense-splitting app for groups — create groups, add expenses with equal/exact/percentage splits, AI-powered natural-language expense entry, and automatic settlement calculation showing who owes whom.',
    tags: ['Java', 'Spring Boot', 'Spring Cloud', 'Eureka', 'Spring Security', 'JWT', 'Apache Kafka', 'Spring AI'],
    category: 'java',
    image: '/assets/images/projectsImage/SplitSettle.png',
    link: 'https://splitsettle-frontend.vercel.app/',
    githubLink: 'https://github.com/dilipMaurya1586/splitsettle',
    icon: <CpuChipIcon className="h-6 w-6" />
  },
  {
    title: 'Hotel Booking Platform (Airbnb Clone)',
    description: 'A full-stack hotel booking application with role-based access for Admin and User, featuring property/room management, search filters, and server-side date-overlap validation for bookings.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'React'],
    category: 'java',
    image: '/assets/images/projectsImage/hotelbooking.png',
    link: 'https://airbnb-frontend-peach.vercel.app/',
    githubLink: 'https://github.com/dilipMaurya1586/Airbnb_Clone',
    icon: <CpuChipIcon className="h-6 w-6" />
  },

  {
    title: 'Voting Management System',
    description: 'A full-stack voting platform with Admin and Voter roles, JWT authentication, email OTP verification, Aadhaar document upload, and real-time vote tracking with automated result declaration.',
    tags: ['MERN stack', 'JavaScript', 'JWT Token', 'MongoDB'],
    category: 'mern',
    image: '/assets/images/projectsImage/votingsystem.png',
    link: 'https://secure-e-voting-system-phi.vercel.app/login',
    githubLink: 'https://github.com/dilipMaurya1586/Secure-E-Voting-System',
    icon: <CpuChipIcon className="h-6 w-6" />
  },

  {
    title: 'Learning management system',
    description: 'Full-featured e-commerce platform with payment integration and admin dashboard.',
    tags: ['MERN stack', 'JavaScript', 'JWT'],
    category: 'mern',
    image: '/assets/images/projectsImage/lms.png',
    link: 'https://lms-frontend-cyan-psi.vercel.app/',
    githubLink: 'https://github.com/dilipMaurya1586/LMS_Project',
    icon: <CodeBracketIcon className="h-6 w-6" />
  },
  {
    title: 'Car Rental Application',
    description: 'Developed a full-stack car rental app, Dynamic car listings with custom pricing, and image uploads via ImageKit.io.',
    tags: ['MERN stack', 'JavaScript', 'JWT'],
    category: 'mern',
    image: '/assets/images/projectsImage/carRental.png',
    link: 'https://car-rental-frontend-red.vercel.app/',
    githubLink: 'https://github.com/dilipMaurya1586/CarRental',

    icon: <CpuChipIcon className="h-6 w-6" />
  },
  {
    title: 'ChatGPT',
    description: 'I have created a Chatgpt application and used React JS, ImageKit for it.',
    tags: ['MERN stack', 'JavaScript', 'JWT Token', 'AI api'],
    category: 'mern',
    image: '/assets/images/projectsImage/chatGPT.png',
    link: 'https://chat-gpt-eight-opal.vercel.app/',
    githubLink: 'https://github.com/dilipMaurya1586/Chat-Gpt',
    icon: <CpuChipIcon className="h-6 w-6" />
  },
  {
    title: 'Chat App',
    description: 'Developed a real-time chat application with user authentication.',
    tags: ['MERN stack', 'JavaScript', 'Tailwind CSS'],
    category: 'mern',
    image: '/assets/images/projectsImage/chatApp.png',
    link: 'https://chat-app-seven-opal-85.vercel.app/login',
    githubLink: 'https://github.com/dilipMaurya1586/Chat-App',
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />
  },
]
