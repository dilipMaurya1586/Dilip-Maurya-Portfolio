import {
    FaJava,
    FaJs,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaHtml5,
    FaCss3Alt
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si';
import { DiCode } from 'react-icons/di';

export const technicalSkills = [
  { name: 'Data Structures & Algorithms (DSA) - JAVA', level: 90, icon: <FaJava className="text-[#007396]" size={24} /> },
  { name: 'JavaScript', level: 85, icon: <FaJs className="text-[#F7DF1E]" size={24} /> },
  { name: 'React', level: 90, icon: <FaReact className="text-[#61DAFB]" size={24} /> },
  { name: 'Node.js', level: 80, icon: <FaNodeJs className="text-[#339933]" size={24} /> },
  { name: 'MongoDB', level: 70, icon: <SiMongodb className="text-[#47A248]" size={24} /> },
  { name: 'MySQL', level: 50, icon: <SiMysql className="text-[#4479A1]" size={24} /> },
  { name: 'Express', level: 70, icon: <SiExpress className="text-[#000000]" size={24} /> },
  { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss className="text-[#38B2AC]" size={24} /> },
  {
    name: 'HTML/CSS', level: 95, icon: (
      <div className="flex">
        <FaHtml5 className="text-[#E34F26]" size={24} />
        <FaCss3Alt className="text-[#1572B6]" size={24} />
      </div>
    )
  },
];

export const tools = [
  { name: "Visual Studio Code", icon: "💻" },
  { name: "GitHub", icon: "🐙" },
  { name: "Postman", icon: "📡" },
  { name: "Hoppscotch", icon: "🚀" },
  { name: "Versal", icon: "🎓" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "Words", icon: "📝" }
];

export const professionalSkills = [
  { name: 'Problem Solving', level: 90, icon: <DiCode className="text-blue-500" size={24} /> },
  { name: 'Project Management', level: 80, icon: <FaDatabase className="text-purple-500" size={24} /> },
];


// import {
//   CpuChipIcon,
//   CodeBracketIcon,
//   ServerIcon,
//   CommandLineIcon,
//   ChartBarIcon,
//   UsersIcon,
//   PresentationChartLineIcon,
//   PuzzlePieceIcon,
//   WrenchScrewdriverIcon,
//   BeakerIcon
// } from '@heroicons/react/24/outline'

// export const technicalSkills = [
//   { name: 'Embedded Systems', level: 90, icon: CpuChipIcon },
//   { name: 'C/C++', level: 85, icon: CodeBracketIcon },
//   { name: 'Python', level: 80, icon: CodeBracketIcon },
//   { name: 'JavaScript/TypeScript', level: 85, icon: CodeBracketIcon },
//   { name: 'React/Next.js', level: 80, icon: CodeBracketIcon },
//   { name: 'Node.js', level: 75, icon: ServerIcon },
//   { name: 'Java', level: 70, icon: CodeBracketIcon },
//   { name: 'SQL/NoSQL', level: 75, icon: ServerIcon },
//   { name: 'Linux/Shell', level: 80, icon: CommandLineIcon }
// ]

// export const professionalSkills = [
//   { name: 'Problem Solving', level: 90, icon: PuzzlePieceIcon },
//   { name: 'Team Leadership', level: 85, icon: UsersIcon },
//   { name: 'Project Management', level: 80, icon: PresentationChartLineIcon },
//   { name: 'Technical Writing', level: 75, icon: ChartBarIcon },
//   { name: 'Public Speaking', level: 70, icon: UsersIcon },
//   { name: 'Agile Methodology', level: 80, icon: PresentationChartLineIcon }
// ]

// export const toolsAndTech = [
//   { name: 'VS Code', icon: CodeBracketIcon },
//   { name: 'Git/GitHub', icon: CodeBracketIcon },
//   { name: 'Docker', icon: ServerIcon },
//   { name: 'Kubernetes', icon: ServerIcon },
//   { name: 'AWS', icon: ServerIcon },
//   { name: 'Arduino', icon: CpuChipIcon },
//   { name: 'Raspberry Pi', icon: CpuChipIcon },
//   { name: 'STM32', icon: CpuChipIcon },
//   { name: 'Altium', icon: WrenchScrewdriverIcon },
//   { name: 'MATLAB', icon: BeakerIcon },
//   { name: 'TensorFlow', icon: BeakerIcon },
//   { name: 'ROS', icon: CommandLineIcon }
// ]