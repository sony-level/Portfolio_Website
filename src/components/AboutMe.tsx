import React from 'react';
import Image from 'next/image';
import heroImage from "@/assets/pic.jpg";
import { Twitter, GithubIcon, Linkedin, Link } from "lucide-react";
import {FaBlog, FaGitlab} from "react-icons/fa";
import {SiGravatar, SiRootme} from "react-icons/si";
import {MdMarkEmailUnread} from "react-icons/md";

const AboutMe: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl md:col-span-3 lg:col-span-4">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <Image
            src={heroImage}
            alt="level profile picture"
            className="rounded-full shadow-md h-32 w-32 object-cover object-center ring-4 ring-blue-500 dark:ring-blue-400"
          />
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Level sony M.</h1>
            <p className="text-blue-600 dark:text-blue-400 mb-4">@sony-level</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Je suis Level Sony, étudiant en ingénierie informatique spécialisé en cybersécurité. Avec un souci du détail et une soif d&apos;apprentissage, je suis toujours à la recherche de nouvelles façons de rendre mon code plus propre (oui, j&apos;ai mes moments de perfectionniste). Passionné par le développement et la cybersécurité, mon objectif est d’apprendre constamment, de perfectionner mes compétences et de développer des solutions robustes et sécurisées.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
               Et au passage, l&apos;IA commence à me fasciner autant que la cybersécurité – entre botnet et algorithmes, c’est un univers de possibilités sans fin ! .
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="mailto:crsony@proton.me" className="text-blue-400 hover:text-blue-500 transition-colors duration-300">
                <MdMarkEmailUnread className="w-6 h-6" />
              </a>

              <a href="https://x.com/sony_level" target='_blank' className="text-blue-400 hover:text-blue-500 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://github.com/sony-level" target='_blank' className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/level-sony/" target='_blank' className="text-blue-700 hover:text-blue-800 transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://blog.level-sony.fr" target='_blank' className="text-blue-700 hover:text-blue-800 transition-colors duration-300">
                <FaBlog  className="w-6 h-6" />
              </a>
              <a href="https://gitlab.com/sonydilane" target='_blank' className="text-blue-700 hover:text-blue-800 transition-colors duration-300">
                <FaGitlab className="w-6 h-6" />
              </a>
              <a href="https://www.root-me.org/ony?inc=info&lang=en" target='_blank' className="text-blue-700 hover:text-blue-800 transition-colors duration-300">
                <SiRootme className="w-6 h-6" />
              </a>
              <a href="https://levelsony.link" target='_blank' className="text-blue-400 hover:text-blue-500 transition-colors duration-300">
                <SiGravatar  className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;