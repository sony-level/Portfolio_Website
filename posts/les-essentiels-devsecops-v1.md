---
title: "LES ESSENTIELS DEVSECOPS V1.0 "
date: "2025-02-01"
author: "Level Sony"
tags: ["Sécurité", "DevSecOps"]
category: "DevSecOps"
description: "Ce guide présente des pratiques DevSecOps pour sécuriser la chaîne CI/CD, incluant tests automatisés, gestion des secrets, et durcissement des systèmes."
---




## Comparaison entre DevSecOps et DevOps


| **Aspect**                         | **DevSecOps**                                                                                                                      | **DevOps**                                                       |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| **Tests de sécurité automatisés**  | Mise en place de tests de non‑régression, analyses statique et dynamique, et vérification de conformité de l’IaC.                    | Focus sur les tests fonctionnels et de performance, sans vérifications approfondies de sécurité. |
| **Sécurisation du déploiement**    | Signature et vérification des tags de version des artefacts pour garantir l’intégrité du code source.                                  | Déploiement continu avec un contrôle de sécurité souvent moins poussé.                       |
| **Authentification multifacteur**  | Implémentation obligatoire d’une authentification multifacteur pour l’accès aux dépôts et pour la signature des commits.             | Utilisation d’authentifications standards, parfois sans MFA.                              |
| **Séparation des infrastructures** | Environnements CI/CD de développement et de production strictement séparés et non exposés directement sur Internet.                   | Environnements parfois partagés pour favoriser l’agilité et la rapidité de déploiement.         |
| **Réinstanciation régulière**      | Réinitialisation fréquente de l’infrastructure CI/CD pour limiter la persistance de vulnérabilités.                                    | Infrastructure maintenue sur le long terme pour assurer la continuité opérationnelle.         |
| **Confidentialité et vigilance**   | Vigilance accrue quant à la confidentialité, avec gestion stricte des accès et surveillance des données sensibles.                   | Moins d’accent mis sur la confidentialité spécifique au sein de la chaîne CI/CD.              |
| **Règles de développement sécurisé** | Imposition de règles et standards de codage sécurisés auprès des équipes de développement.                                          | Priorisation de l’agilité et de la rapidité de livraison, avec des standards de sécurité parfois moins stricts. |
| **Durcissement des systèmes**     | Application de règles de durcissement sur les OS hébergeant les applications (cf. [Guide Linux](https://cyber.gouv.fr/guide-linux)). | Accent mis sur la flexibilité et la performance, avec un durcissement moins poussé.           |


## Sécurité dans la CI/CD

- **Tests de sécurité automatisés**  
  Prévoir dans la CI/CD des tests de non‑régression (pour éviter de nouvelles vulnérabilités), des vérifications d’étanchéité entre profils d’utilisateurs, des tests d’analyses statique et dynamique, ainsi que des tests de conformité de l’IaC (Infrastructure as Code).

- **Sécurisation du déploiement en production**  
  Maintenir l’intégrité du code source de bout en bout en signant et en vérifiant les signatures des tags de version des artefacts.

- **Authentification multifacteur**  
  Implémenter pour l’accès aux dépôts et pour la signature des commits.

- **Séparation des infrastructures**  
  Séparer les environnements CI/CD de développement et de production et ne pas les exposer directement sur Internet.

- **Réinstanciation régulière**  
  Réinstancier l’infrastructure CI/CD régulièrement et éviter d’y stocker des données persistantes.

- **Confidentialité et vigilance**  
  Être attentifs aux besoins en confidentialité de l’infrastructure CI/CD (ex. : localisation, tests du code source en SaaS public).

- **Règles de développement sécurisé**  
  Imposer des règles de développement sécurisé au sein des équipes.

- **Durcissement des systèmes d’exploitation**  
  Appliquer des règles de durcissement sur les OS hébergeant les applications.

> (*) La chaîne CI/CD comprend plusieurs outils, par exemple : orchestrateur, dépôts de code source, tests automatisés, gestionnaire de secrets, outils de déploiement, artefacts.

## Cartographie et analyse des risques

- **Cartographie des applications**  
  Réaliser et maintenir à jour une cartographie incluant les droits système, les secrets d’installation et de fonctionnement, les matrices de flux, les rôles des développeurs (relecture, validation, droits sur les environnements, etc.) et les référents avec une connaissance globale (technique et métier).

- **Analyse de risque globale**  
  Prendre en compte les chemins de compromission liés aux postes des développeurs, à la sous-traitance, à la chaîne CI/CD (Continuous Integration/Continuous Deployment) et aux technologies utilisées (ex. : cloud).

## Administration et gestion des secrets

- **Actions d’administration en CI/CD**  
  Considérer les actions réalisées par la CI/CD de production comme des actions d’administration. Dédier un poste d’administration pour la CI/CD de production, appliquer le principe de moindre privilège, générer les jetons (tokens) à la demande et assurer leur journalisation et supervision.

- **Gestion sécurisée des secrets**  
  Utiliser un gestionnaire de secrets distinct par environnement (ex. : hors production et production) et veiller à l’absence de secrets en dur dans le code source, dans les journaux d’événements des tâches ou dans les dépôts de code.

## Gestion des dépendances

- **Rigueur dans la gestion des dépendances**  
  Minimiser, évaluer et appliquer les correctifs de sécurité aux dépendances avant leur déploiement.

---

**Références :**

- [www.cyber.gouv.fr](https://www.cyber.gouv.fr)
