---
title: "Comment utiliser les certificats Let's Encrypt avec Keycloak"
date: "2025-01-23"
author: "Level Sony"
tags: ["Keycloak", "Let's Encrypt", "SSL", "Sécurité", "Linux"]
category: "DevSecOps"
description: "Ce guide explique comment configurer un certificat SSL Let's Encrypt avec Keycloak pour activer HTTPS, afin de sécuriser l'accès à votre serveur."
---



# Introduction

[Keycloak](https://www.keycloak.org/) fournit une fédération utilisateur, une authentification forte, une gestion des utilisateurs, une autorisation fine, et plus encore.

Voici un guide pour permettre l'accès HTTPS à votre serveur Keycloak à l'aide d'un certificat gratuit Let’s Encrypt SSL. La beauté de Let’s Encrypt est sa facilité d’utilisation et le fait qu’elle soit gratuite.

Ce guide suppose que vous avez déjà installé Keycloak à `/opt/keycloak/` en utilisant le [guide officiel](https://www.keycloak.org/getting-started/getting-started-zip) pour les installations sur serveur, et que vous souhaitez maintenant activer l'accès HTTPS. Vous devez avoir la version 'keycloak-26.1.1' ou plus.

Dans toutes les instructions ci-dessous, assurez-vous de remplacer `<DOMAIN>` avec le domaine réel que vous utiliserez. Toutes les commandes de ce guide doivent être exécutées en tant que super-utilisateur.



## 1. Installer Certbot

Vous devrez d'abord installer Certbot. Cela dépend de la distribution Linux que vous utilisez.

Par exemple, pour des distributions basées sur `apt` comme Debian ou Ubuntu, vous pouvez simplement exécuter :

```shell
$ apt install certbot
```

## 2. Créer des certificats HTTPS

 
 - Générer les certificats

```shell
$ certbot certonly --standalone --preferred-challenges http -d <DOMAIN>

```

## 3. Configurer Keycloak 


-  Modifier la configuration en ouvrant le fichier de 😽 configuration de Keycloak :

```shell
$ vi /opt/keycloak/conf/keycloak.conf

```

Ajoutez ou mettez à jour les lignes suivantes :

```shell
https-certificate-file=/etc/letsencrypt/live/<DOMAIN>/cert.pem
https-certificate-key-file=/etc/letsencrypt/live/<DOMAIN>/privkey.pem
hostname=<DOMAIN>
https-port=443
http-port=80
```

- Appliquez les modifications en reconstruisant Keycloak :

```shell
$ /opt/keycloak/bin/kc.sh build

```

- Démarrez ensuite Keycloak avec la commande :

```shell
$ /opt/keycloak/bin/kc.sh start
```

Votre serveur Keycloak devrait maintenant être accessible via HTTPS.


## 4. Facultatif : Configurer Keycloak en tant que service système


### 4.1. Mise en place d'un service système


- Créer un utilisateur et un groupe

```shell
$ useradd -g keycloak keycloak
```

- Donner accès aux certificats

```shell
$ chmod 0755 /etc/letsencrypt/{live,archive}
$ chgrp keycloak /etc/letsencrypt/{live,archive}
$ chgrp -h keycloak /etc/letsencrypt/live/<DOMAIN>/privkey.pem
```

- Modifier les permissions du dossier Keycloak

```shell
$ chown -R keycloak:keycloak /opt/keycloak/
```

- Créer un service systemd

```shell
$ vi /etc/systemd/system/keycloak.service
```

Ajoutez le contenu suivant :

```shell
[Unit]
Description=Keycloak Application Server
After=syslog.target network.target

[Service]
Type=idle
User=keycloak
Group=keycloak
LimitNOFILE=102642
ExecStart=/opt/keycloak/bin/kc.sh start --optimized
StandardOutput=append:/var/log/keycloak.log
StandardError=inherit
RestartSec=2s
Restart=always
AmbientCapabilities=CAP_NET_BIND_SERVICE

[Install]
WantedBy=multi-user.target
```

Rechargez systemd et démarrez Keycloak :

```shell
$ systemctl daemon-reload
$ systemctl start keycloak.service
```

## 4.2. Redémarrer automatiquement Keycloak après le renouvellement des certificats

Ajoutez un script de post-renouvellement pour redémarrer Keycloak après l'expiration des certificats :

```Bash
$ cd /etc/letsencrypt/renewal-hooks/deploy
$ vi restart-keycloak.sh
```

Ajoutez ce contenu :

```shell
#!/bin/sh
systemctl restart keycloak
```

Rendez le script exécutable :

```shell
$ chmod +x restart-keycloak.sh
```

## Conclusion

C'est fini. Maintenant, Keycloak est configuré comme un service système et démarrera automatiquement avec votre machine. De plus, il redémarrera automatiquement après chaque renouvellement de certificat Let's Encrypt.

---

