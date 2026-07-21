import {
    FaJava,
    FaJs,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaHtml5,
    FaCss3Alt
} from 'react-icons/fa';
import {
    SiExpress,
    SiMongodb,
    SiMysql,
    SiTailwindcss,
    SiSpringboot,
    SiSpringsecurity,
    SiApachekafka,
    SiDocker,
    SiKubernetes,
    SiPostgresql,
    SiApachemaven,
    SiJsonwebtokens,
    SiPostman,
    SiGithub,
    SiGit,
    SiIntellijidea,
    SiVercel,
    SiGithubactions, 
    SiRender
} from 'react-icons/si';
import { DiCode } from 'react-icons/di';

export const technicalSkills = [
  { name: 'Java', level: 90, icon: <FaJava className="text-[#007396]" size={24} /> },
  { name: 'Spring Boot', level: 85, icon: <SiSpringboot className="text-[#6DB33F]" size={24} /> },
  { name: 'Spring Security & JWT', level: 80, icon: <SiSpringsecurity className="text-[#6DB33F]" size={24} /> },
  { name: 'Microservices & Apache Kafka', level: 75, icon: <SiApachekafka className="text-[#231F20]" size={24} /> },
  { name: 'Data Structures & Algorithms (DSA)', level: 90, icon: <DiCode className="text-blue-500" size={24} /> },
  { name: 'Docker', level: 75, icon: <SiDocker className="text-[#2496ED]" size={24} /> },
  { name: 'REST APIs', level: 85, icon: <FaDatabase className="text-purple-500" size={24} /> },
  { name: 'React', level: 85, icon: <FaReact className="text-[#61DAFB]" size={24} /> },
  { name: 'JavaScript', level: 80, icon: <FaJs className="text-[#F7DF1E]" size={24} /> },
  { name: 'Node.js', level: 75, icon: <FaNodeJs className="text-[#339933]" size={24} /> },
  { name: 'PostgreSQL', level: 75, icon: <SiPostgresql className="text-[#4169E1]" size={24} /> },
  { name: 'MongoDB', level: 70, icon: <SiMongodb className="text-[#47A248]" size={24} /> },
  { name: 'MySQL', level: 60, icon: <SiMysql className="text-[#4479A1]" size={24} /> },
  { name: 'Express', level: 65, icon: <SiExpress className="text-[#000000]" size={24} /> },
  { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss className="text-[#38B2AC]" size={24} /> },
  {
    name: 'HTML/CSS', level: 90, icon: (
      <div className="flex">
        <FaHtml5 className="text-[#E34F26]" size={24} />
        <FaCss3Alt className="text-[#1572B6]" size={24} />
      </div>
    )
  },
];

export const tools = [
  { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-[#000000]" size={24} /> },
  { name: "Visual Studio Code", icon: "💻" },
  { name: "GitHub", icon: <SiGithub className="text-[#181717]" size={24} /> },
  { name: "GitHub Actions", icon: <SiGithubactions className="text-[#2088FF]" size={24} /> },
  { name: "Git", icon: <SiGit className="text-[#F05032]" size={24} /> },
  { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" size={24} /> },
  { name: "Docker Compose", icon: <SiDocker className="text-[#2496ED]" size={24} /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" size={24} /> },
  { name: "Maven", icon: <SiApachemaven className="text-[#C71A36]" size={24} /> },
  { name: "JWT", icon: <SiJsonwebtokens className="text-[#000000]" size={24} /> },
  { name: "Vercel", icon: <SiVercel className="text-[#000000]" size={24} /> },
  { name: "Render", icon: <SiRender className="text-[#46E3B7]" size={24} /> },
];

export const professionalSkills = [
  { name: 'Problem Solving', level: 90, icon: <DiCode className="text-blue-500" size={24} /> },
  { name: 'Project Management', level: 80, icon: <FaDatabase className="text-purple-500" size={24} /> },
];
