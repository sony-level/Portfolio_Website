import React from 'react';
import {
  Code,
  FileJson,
  Atom,
  Zap,
  Palette,
  Globe,
  BarChart,
  Server,
  FileCode,
  Database,
  Table,
  GitBranch,
  Github,
  GitCommit,
  Container,
  Terminal,
  Rocket,
  Bot,
  Link,
} from 'lucide-react';
import {FaRust, FaReact, FaPython, FaJava, FaAngular, FaDocker, FaFileCode, FaGitAlt, FaJenkins} from "react-icons/fa";
import {
  SiContainerd,
  SiGithubactions,
  SiGnubash,
  SiGrafana,
  SiJetbrains,
  SiKubernetes, SiPrometheus, SiProxmox,
  SiWebrtc, SiWireguard,
} from "react-icons/si";
import {BiLogoPostgresql} from "react-icons/bi";
import {FaDebian} from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";



const skills = [
  { icon: <FaRust />, name: "Rust" },
  { icon: <SiGnubash />, name: "Bash" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaFileCode  />, name: "Html/Css" },
  { icon: <Rocket />, name: "Rocket" },
  { icon: < BiLogoPostgresql  />, name: "Postgresql " },
  { icon: <FaAngular />, name: "Angular JS" },
  { icon: <FaDebian />, name: "Debian" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <SiContainerd />, name: "Containerd" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
  { icon: <SiJetbrains />, name: "Jetbrains" },
  { icon: <VscVscode />, name: "Vscode " },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <Github />, name: "GitHub" },
  { icon: <SiGithubactions />, name: "Github actions" },
  { icon: <FaJenkins />, name: "Jenkins" },
  { icon: <SiGrafana  />, name: "Grafana " },
  { icon: <SiPrometheus />, name: "Prometheus " },
  { icon: <SiWebrtc />, name: "Webrtc" },
  { icon: <SiWireguard />, name: "Wireguard" },
  { icon: <SiProxmox />, name: "Proxmox" },
];

const Technologies: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg md:col-span-2 lg:col-span-3 transition-all duration-300 hover:shadow-xl flex-grow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">Technologies & Outils</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex flex-col items-center p-4 rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105 transform"
          >
            <div className="text-gray-600 dark:text-gray-300 mb-2">
              {React.cloneElement(skill.icon, { size: 20 })}
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 text-center">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Technologies;