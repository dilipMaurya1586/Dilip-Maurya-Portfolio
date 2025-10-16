import { CodeBracketIcon, CpuChipIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

export const projects = [
  {
    title: 'ChatGPT',
    description: 'I have created a Chatgpt application and used React JS, ImageKit for it.',
    tags: ['MERN stack', 'JavaScript', 'JWT Token', 'AI api'],
    image: '/assets/images/projectsImage/chatGPT.png',
    link: 'https://chat-gpt-eight-opal.vercel.app/',
    icon: <CpuChipIcon className="h-6 w-6" />
  },
  {
    title: 'Car Rental Application',
    description: 'Developed a full-stack car rental app, Dynamic car listings with custom pricing, and image uploads via ImageKit.io.',
    tags: ['MERN stack', 'JavaScript', 'JWT'],
    image: '/assets/images/projectsImage/carRental.png',
    link: 'https://car-rental-frontend-red.vercel.app/',
    icon: <CpuChipIcon className="h-6 w-6" />
  },
  {
    title: 'Learning management system',
    description: 'Full-featured e-commerce platform with payment integration and admin dashboard.',
    tags: ['MERN stack', 'JavaScript', 'JWT'],
    image: '/assets/images/projectsImage/lms.png',
    link: 'https://lms-frontend-cyan-psi.vercel.app/',
    icon: <CodeBracketIcon className="h-6 w-6" />
  },
  {
    title: 'Chat App',
    description: 'Developed a real-time chat application with user authentication.',
    tags: ['MERN stack', 'JavaScript', 'Tailwind CSS'],
    image: '/assets/images/projectsImage/chatApp.png',
    link: 'https://chat-app-seven-opal-85.vercel.app/login',
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />
  },
//  {
  //   title: 'University Management System',
  //   description: 'Comprehensive system for managing university operations and student records.',
  //   tags: ['Java', 'Spring Boot', 'MySQL'],
  //   image: '/project4.jpg',
  //   link: 'https://github.com/username/university-system',
  //   icon: <CodeBracketIcon className="h-6 w-6" />
  // },
  // {
  //   title: 'Autonomous Robot Navigation',
  //   description: 'ROS-based autonomous robot with SLAM and path planning capabilities.',
  //   tags: ['ROS', 'Python', 'Computer Vision'],
  //   image: '/project5.jpg',
  //   link: 'https://github.com/username/autonomous-robot',
  //   icon: <CpuChipIcon className="h-6 w-6" />
  // },
  // {
  //   title: 'Mobile Task Manager',
  //   description: 'Cross-platform mobile app for task management with cloud sync.',
  //   tags: ['Flutter', 'Firebase', 'Dart'],
  //   image: '/project6.jpg',
  //   link: 'https://github.com/username/task-manager',
  //   icon: <DevicePhoneMobileIcon className="h-6 w-6" />
  // }
]