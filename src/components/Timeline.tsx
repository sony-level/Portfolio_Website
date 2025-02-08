"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  type: 'education' | 'experience';
  title: string;
  organization: string;
  date: string;
  location?: string;
  description?: string;
  skills?: string[];
  links?: { name: string; url: string }[];
  logo?: string;
}

const educationItems: TimelineItem[] = [
  {
    type: 'education',
    title: 'Diplome d\'ingénieur Informatique et électronique, spécialisation Cybersécurité',
    organization: 'ISEN Yncréa Méditerranée de Toulon',
    date: 'Sept 2022 - Nov 2026',
    description: 'Cybersécurité des systèmes, réseaux, et applications. Gestion, l\'investigation et le développement sécurisé.',
    skills: ['🔐 Cybersécurité ', '🖥️  développement sécurisé', '➡️ 🖥️ 🔒 ⚙️ 🔄\n DevSecOps ', ' 🌐 Gestion des systèmes et des réseaux', '- ✅ Agile Methodologies' ,' - 🕒 Gestion de projet'  ],
    links: [
      { name: 'ISEN Yncréa', url: 'https://isen-mediterranee.fr/' }
    ]
  },
  {
    type: 'education',
    title: 'Google Cloud Skills Boost',
    organization: 'Google Cloud Certifications',
    date: 'Oct 2024 ',
    description: 'Développement des compétences en Cloud Computing et Intelligence Artificielle (IA). Sécurité Cloud et optimisation des compétences d\'intégration de l\'IA dans le cadre du développement en cybersécurité',
    skills: ['☁️ Cloud Computing', '🤖 Intelligence Artificielle', '🔒 Sécurité Cloud', '🔧 Intégration IA en cybersécurité'],
    links: [
        { name: 'Google Cloud Skills Boost', url: 'https://cloud.google.com/certification/cloud-engineer' }
    ]
  },
  {
    type: 'education',
    title: 'Fortinet training Institute',
    organization: 'Fortinet',
    date: 'April 2024',
    description: 'Comprehensive training in IT skills, including programming, web development, database management, and networks.',
    skills: ['🛡️ Cybersécurité', '🔑 Fortinet Certified Associate', '💻 Sécurité des systèmes'],
    links: [
      { name: 'F.C.A Cybersecurity', url: 'https://www.credly.com/badges/82bea356-ed96-48da-926c-bbd4a7e54ef0' },
      { name: 'F.C.F Cybersecurity', url: 'https://www.credly.com/badges/5f98874b-2e72-4ed7-acef-a8313e1393b1' }
    ]
  },
  {
    type: 'education',
    title: 'Classe Préparatoire Intégrée - Mathématiques et Physique',
    organization: 'Ecole supérieure d\'ingénieurs et de Management d\'Afrique Centrale',
    date: 'Sept 2020 - Juin 2022',
    description: 'Formation intensive en mathématiques, physique et développement de compétences en ingénierie.',
    skills: ['📐 Mathématiques', '⚙️ Ingénierie', '🔬 Physique'],
    links: []
  }
];

const experienceItems: TimelineItem[] = [
  {
    type: 'experience',
    title: 'Bénévole - Mentor éducatif',
    organization: 'AFEV',
    date: 'Octobre 2024 - Present',
    location: 'Toulon, France',
    description: 'Accompagnement hebdomadaire d’un ou plusieurs jeunes dans leur parcours éducatif, avec des sessions axées sur l’aide aux devoirs, l’organisation, et la méthodologie. Animation d’ateliers sur des thématiques variées (lecture, écriture, mathématiques, sciences) pour rendre l’apprentissage interactif et engageant.'
  },
  {
    type: 'experience',
    title: 'Équipier Polyvalent [Emploi étudiant]',
    organization: 'KFC Ollioules',
    date: 'Juin 2022 - Present',
    location: 'Ollioules, France',
    description: 'Coordination de la préparation et livraison des commandes pour garantir efficacité et satisfaction client, avec jusqu’à 150+ commandes par jour et 300+ lors des rushs. Accueil et gestion proactive des demandes clients, avec un focus sur la résolution rapide des réclamations.'
  },
  {
    type: 'experience',
    title: 'Participant - Bug Bounty et Capture The Flag (CTF)',
    organization: 'Hackvens',
    date: 'Octobre 2023',
    location: 'Lyon, France',
    description: 'Participation active aux programmes de Bug Bounty et aux défis Capture The Flag (CTF) organisés par ADVENS pour la sécurisation des systèmes industriels. Expérience avec des outils spécialisés pour les objets connectés (IoT), en particulier pour l’analyse des logiciels embarqués et des protocoles de communication. Travail en équipe et partage de stratégies pour relever les défis CTF.',
    links : [
        { name: 'Hackvens', url: 'https://hackvens.fr/2023/' },
    ]
  },
  {
    type: 'experience',
    title: 'Stagiaire Informatique',
    organization: 'Global Spes',
    date: 'Jul 2021 - Septembre 2021',
    location: 'Douala, Cameroun',
    description: 'Installation et mise à jour des systèmes d’exploitation (Windows) et des applications professionnelles. Configuration de routeurs, switches et serveurs pour la mise en place de réseaux locaux dans les entreprises clientes. Assistance aux utilisateurs pour la résolution des problèmes informatiques et la configuration de périphériques.'
  },
  {
    type: 'experience',
    title: 'Stagiaire Informatique',
    organization: 'Global Spes',
    date: 'Mai 2020 - Août 2020',
    location: 'Douala, Cameroun',
    description: 'Participation à la préparation et animation de formations sur les logiciels Microsoft Office (Word, Excel, PowerPoint, Publisher) pour utilisateurs débutants et intermédiaires. Résolution des problèmes réseau (connexion, partages de fichiers, accès distant) et assistance aux utilisateurs pour la configuration de périphériques réseau.'
  }
];

const openlink = (url: string) => {
    window.open(url, '_blank');
}
const TimelineItem: React.FC<{ item: TimelineItem }> = ({ item }) => (
    <motion.div
        className="relative mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
      {/* Ligne de séparation */}
      <div className="absolute top-0 left-4 w-1 h-full bg-gray-300 dark:bg-gray-600" />

      {/* Point de connexion */}
      <motion.div
          className="absolute left-2 top-4 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
      />

      {/* Contenu */}
      <motion.div
          className="ml-12 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg relative"
          whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-lg font-medium text-blue-500 dark:text-blue-400">{item.title}</h3>
        <p className="text-sm text-red-600 dark:text-red-400 font-bold">{item.organization}</p>
        <p className="text-sm text-gray-500 dark:text-gray-500">{item.date}</p>
        {item.location && <p className="text-sm text-gray-500 dark:text-gray-500">{item.location}</p>}
        {item.description && <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.description}</p>}

        {item.skills && (
            <div className="mt-2 flex flex-wrap gap-2">
              {item.skills.map((skill, index) => (
                  <span key={index} className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              {skill}
            </span>
              ))}
            </div>
        )}

        {item.links && (
            <div className="mt-4">
              {item.links.map((link, index) => (
                  <motion.button
                      key={index}
                      onClick={() => openlink(link.url)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                  >
                    {link.name}
                  </motion.button>
              ))}
            </div>
        )}
      </motion.div>
    </motion.div>
);

const Timeline: React.FC = () => {
  return (
      <motion.div
          className="max-w-6xl mx-auto p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
      >
        <motion.h1
            className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
          Parcours
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Experience</h2>
            {experienceItems.map((item, index) => (
                <TimelineItem key={index} item={item} />
            ))}
          </motion.div>

          <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Education</h2>
            {educationItems.map((item, index) => (
                <TimelineItem key={index} item={item} />
            ))}
          </motion.div>
        </div>
      </motion.div>
  );
};

export default Timeline;
