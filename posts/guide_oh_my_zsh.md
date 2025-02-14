---
title: "Comment Installer Oh My Zsh : Mon Shell Préféré"
date: "2024-12-13"
author: "Level Sony"
tags: ["Linux", "Shell", "Bash", "Sécurité"]
category: "Linux"
description: ""
---

> Nous allons donc voir comment améliorer les fonctionnalités du terminal et lui donner un look beaucoup plus convivial. Le but de cet article tout comme le reste est personnel pour moi car je me retrouve souvent à oublier certaines pratiques, d'où l'idée de noter et conserver mes apprentissages.
---

---


# Introduction


En tant qu'utilisateur passionné de Linux, l'une des premières configurations que j'effectue sur chaque nouveau PC ou système Linux est l'installation de [Oh My Zsh](https://ohmyz.sh/). Ce shell interactif et personnalisable a transformé mon expérience de ligne de commande, et je vais vous expliquer pourquoi je l'adore et comment vous pouvez l'installer facilement.


> l y a quelques années , alors que je travaillais sur un projet avec un camarade, j'ai découvert Oh My Zsh. Nous étions en train de configurer un serveur partagé sous [Debian](https://www.debian.org/index.fr.html), et je l'ai vu utiliser un terminal qui semblait bien plus avancé que mon Bash habituel. Intrigué, je lui ai demandé ce qu'il utilisait, et c'est ainsi qu'il m'a présenté Oh My Zsh. Depuis ce jour, je ne peux plus me passer de ce shell incroyablement puissant et personnalisable.



# Qu’est-ce que ZSH ?

Tout d'abord qu'est ce que **Zsh** ?. **Zsh** (Z Shell) est un interpréteur de commandes pour les systèmes de type Unix, comme macOS et Linux. Il est conçu pour être une amélioration de **Bash** (Bourne-Again SHell) et propose de nombreuses fonctionnalités avancées pour faciliter l’écriture de commandes en ligne de commande.

Parmi ses fonctionnalités, Zsh propose :

   -  L'auto-complétion des commandes et des noms de fichiers.
   -  La correction automatique des erreurs de frappe.
   -  Des alias et des fonctions plus puissants.
   -  Des options de personnalisation avancées.

Zsh est très apprécié par les développeurs et les administrateurs système car il simplifie le travail en ligne de commande, surtout pour ceux qui utilisent souvent des scripts et des commandes complexes. Étant open-source, Zsh est gratuit et peut être personnalisé selon les besoins de chacun.

# Qu’est-ce que Oh My Zsh  ?

[Oh My Zsh](https://ohmyz.sh/) est un framework open-source qui simplifie la configuration et la personnalisation de Zsh (Z Shell) Il permet d'ajouter facilement des fonctionnalités supplémentaires à l'interpréteur de commandes Zsh

Oh My Zsh propose un ensemble de plugins et de thèmes préconfigurés pour personnaliser l'apparence et le comportement de Zsh ainsi qu'une gestion simple des plugins et des thèmes permettant aux utilisateurs de créer leur propre configuration Il offre également une documentation complète et une communauté active pour aider les utilisateurs à optimiser leur expérience avec Zsh

#  Comment installer Zsh ?

Pour installer le document sur Ubuntu/debian, suivez les étapes ci-dessous:

#### Étape 1: Mettre à jour les référentiels Ubuntu Apt

Ouvrez votre terminal et exécutez la commande suivante :

```shell
$ sudo apt-get update
```

![Comparaisons](/images/zsh/1.png)

Après avoir installé les mises à jour, mettre en place les dépendances ou les paquets requis pour l'installation d'Ubuntu 

```shell
$ Sudo apt install build-essential curl file git
```
![Comparaisons](/images/zsh/2.png)

#### Étape 2: Installer Zsh

Pour l'installer avec apt: 

```shell
~$ sudo apt-get install -y Zsh
```
#### Étape 3: Verifier l'installation Zsh

Avec ZSH installé avec succès, vous pouvez vérifier l'installation ZSH en affichant la version installée et en utilisant la commande suivante:

```shell
~$ zsh --version
```
![Comparaisons](/images/zsh/5.png)

#### Étape 4: Définissez Zsh comme shell par défaut

Maintenant que **Zsh** est installé, vous pouvez définir Zsh comme shell par défaut à l'aide de la commande `Chsh`. Spécifiez l'option `-s` :

```shell
~$ chsh -s  $(which zsh)
```
Cette commande modifie le fichier de l'utilisateur `/etc/passwd` pour charger Zsh comme shell par défaut pour votre nom d'utilisateur pendant les sessions du terminal.Après avoir redémarré votre terminal, confirmez la modification en affichant le shell actuel à l'aide de la variable d'environnement `$` Shell:

```shell
~$ echo $SHELL
```

# Installer Oh My Zsh on Ubuntu

{Oh mon Zsh} est un cadre open source conçu pour élever les fonctionnalités et les caractéristiques du shell Z, visant à améliorer la productivité et la jouissance dans l'environnement de la ligne de commande. Ce cadre fournit un processus d'installation sans tracas et une gestion efficace d'un éventail étendu de thèmes, plugins et scripts.


Bien que vous ayez passé à Zsh en tant que shell par défaut, l'expérience peut ne pas être significativement différente de Bash à ce stade. Plutôt que de construire ZSH à partir de zéro indépendamment, une approche plus efficace consiste à tirer parti de l'écosystème OH My Zsh.
![Comparaisons](/images/zsh/7.png)

Cela vous permet d'explorer et d'expérimenter la richesse d'outils et de configurations déjà développés par la communauté, offrant une expérience de ligne de commande plus rationalisée et enrichie.

Vous pouvez installer oh mon zsh sur Ubuntu/debian en utilisant la commande suivante:

-  via cURL

```shell
~$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

- via Wget


```shell
~$ sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

Une fois la commandes executé , si toutes les etapes d'installation precedentes ont ete respecter , vous aurez un nouveau shell stylé et convivial avec place à une configuration snas limite 

![Comparaisons](/images/zsh/10.png)