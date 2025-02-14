---
title: "Les essentiels en DevSecOps"
date: "2025-02-01"
author: "Level Sony"
tags: ["Sécurité", "DevSecOps"]
category: "DevSecOps"
description: "Ce guide présente des pratiques DevSecOps pour sécuriser la chaîne CI/CD, incluant tests automatisés, gestion des secrets, et durcissement des systèmes."
---


> **DevOps** a longtemps permis d’accélérer le déploiement des logiciels en brisant les silos entre développement et opérations. 
 
> Toutefois, face à l’évolution des cybermenaces, il est devenu indispensable d’intégrer la sécurité dès la conception.  
> C’est ainsi qu’est né **DevSecOps**, qui combine la rapidité de DevOps avec une vigilance accrue en matière de sécurité.

---

## Introduction

L’histoire du développement logiciel est jalonnée d’innovations majeures. Au début des années 2000, l’adoption d’**Agile** a ouvert la voie à une collaboration renforcée entre les équipes, donnant naissance au mouvement **DevOps**. Une anecdote célèbre raconte comment une entreprise, auparavant soumise à des délais de déploiement de plusieurs jours, a réussi à réduire ces temps à quelques heures grâce à l’automatisation de son pipeline CI/CD.

Cependant, cette accélération est rapidement apparue insuffisante face à la multiplication des cybermenaces. La sécurité, trop souvent ajoutée en fin de processus, exposait les applications à des vulnérabilités. **DevSecOps** est ainsi apparu comme la solution idéale : intégrer dès le départ des contrôles de sécurité (comme les tests de *non‑régression*[^1]) pour garantir un produit fiable et sécurisé.

---


![Comparaisons](/images/compareison.png)



| **Aspect**                         | **DevSecOps**                                                                                                                      | **DevOps**                                                       |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| **Tests de sécurité automatisés**  | Mise en place de tests de non‑régression*[^1]*, analyses statique et dynamique, et vérification de conformité de l’IaC.                    | Focus sur les tests fonctionnels et de performance, sans vérifications approfondies de sécurité. |
| **Sécurisation du déploiement**    | Signature et vérification des tags de version des artefacts pour garantir l’intégrité du code source.                                  | Déploiement continu avec un contrôle de sécurité souvent moins poussé.                       |
| **Authentification multifacteur**  | Implémentation obligatoire d’une authentification multifacteur pour l’accès aux dépôts et pour la signature des commits.             | Utilisation d’authentifications standards, parfois sans MFA.                              |
| **Séparation des infrastructures** | Environnements CI/CD de développement et de production strictement séparés et non exposés directement sur Internet.                   | Environnements parfois partagés pour favoriser l’agilité et la rapidité de déploiement.         |
| **Réinstanciation régulière**      | Réinitialisation fréquente de l’infrastructure CI/CD pour limiter la persistance de vulnérabilités.                                    | Infrastructure maintenue sur le long terme pour assurer la continuité opérationnelle.         |
| **Confidentialité et vigilance**   | Vigilance accrue quant à la confidentialité, avec gestion stricte des accès et surveillance des données sensibles.                   | Moins d’accent mis sur la confidentialité spécifique au sein de la chaîne CI/CD.              |
| **Règles de développement sécurisé** | Imposition de règles et standards de codage sécurisés auprès des équipes de développement.                                          | Priorisation de l’agilité et de la rapidité de livraison, avec des standards de sécurité parfois moins stricts. |
| **Durcissement des systèmes**     | Application de règles de durcissement sur les OS hébergeant les applications (cf. [Guide Linux](https://cyber.gouv.fr/guide-linux)). | Accent mis sur la flexibilité et la performance, avec un durcissement moins poussé.           |

---
## Sécuriser la CI/CD : Les Fondamentaux

![Carto](/images/pratic.png)

> (*) La chaîne CI/CD comprend plusieurs outils, par exemple : orchestrateur, dépôts de code source, tests automatisés, gestionnaire de secrets, outils de déploiement, artefacts.

---

## Cartographie et analyse des risques

#### Cartographie des applications  
  - Réaliser et maintenir à jour une cartographie incluant les droits système, les secrets d’installation et de fonctionnement, les matrices de flux, les rôles des développeurs (relecture, validation, droits sur les environnements, etc.) et les référents avec une connaissance globale (technique et métier).

#### Analyse de risque globale 
  - Prendre en compte les chemins de compromission liés aux postes des développeurs, à la sous-traitance, à la chaîne CI/CD (Continuous Integration/Continuous Deployment) et aux technologies utilisées (ex. : cloud).

![Carto](/images/carto.png)

---

## Administration et gestion des secrets

#### Actions d’administration en CI/CD
- Considérer les actions réalisées par la CI/CD de production comme des actions d’administration. Dédier un poste d’administration pour la CI/CD de production, appliquer le principe de moindre privilège, générer les jetons (tokens) à la demande et assurer leur journalisation et supervision.

#### Gestion sécurisée des secrets  
  - Utiliser un gestionnaire de secrets distinct par environnement (ex. : hors production et production) et veiller à l’absence de secrets en dur dans le code source, dans les journaux d’événements des tâches ou dans les dépôts de code.

![Carto](/images/ci_cd.png)
---

## Gestion des dépendances

#### Rigueur dans la gestion des dépendances 
-  Minimiser, évaluer et appliquer les correctifs de sécurité aux dépendances avant leur déploiement.

![Carto](/images/dependance.png)
---

**Références :**

- [www.cyber.gouv.fr](https://www.cyber.gouv.fr)

---

[^1]: *Non‑régression : Ensemble de tests automatisés permettant de vérifier qu'une modification du code n'introduit pas de nouvelles vulnérabilités, garantissant ainsi que les fonctionnalités existantes continuent de fonctionner correctement.*

