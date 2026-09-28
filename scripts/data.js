export const projetsData = [
    {
        id: 1,
        titre: "Jeu du Snake en C",
        description: "Programmation du classique jeu Snake en C avec implémentation de différentes variantes.",
        descriptionLongue: "Description détaillée à compléter. Lors de ce projet, j'ai pu approfondir mes connaissances en algorithmie et en gestion de la mémoire. J'ai notamment travaillé sur les structures de données pour gérer le corps du serpent et les collisions.",
        dateStr: "oct - dec 2024",
        dateUnive: 202408,
        image: "assets/images/projet1.png",
        images: [
            {
                src: "assets/images/projet1.png",
                caption: "Interface principale du jeu Snake"
            }
        ],
        filtres: ["C", "SGoogle", "VSCode", "BUT"],
        tagsCarte: ["C", "BUT"],
        technos: ["Langage C", "Doxygen", "VSCode"]
    },
    {
        id: 2,
        titre: "IA Snake Autonome",
        description: "Optimisation algorithmique du jeu du Snake pour le rendre entièrement autonome.",
        descriptionLongue: "Description détaillée à compléter. Suite logique du premier projet, le but ici était d'implémenter une intelligence artificielle capable de finir le jeu sans intervention humaine, en utilisant des algorithmes de pathfinding (comme A*).",
        dateStr: "janv - fev 2025",
        dateUnive: 202501,
        image: "assets/images/projet2.png",
        images: [
            {
                src: "assets/images/projet2.png",
                caption: "Démonstration du parcours autonome de l'IA"
            }
        ],
        filtres: ["C", "SGoogle", "VSCode", "Github", "BUT"],
        tagsCarte: ["C", "IA", "BUT"],
        technos: ["Langage C", "Algorithmique", "Github"]
    },
    {
        id: 3,
        titre: "Systèmes Informatiques",
        description: "Réalisation d'une chaîne de traitement automatisée pour répondre à un cahier des charges.",
        descriptionLongue: "Description détaillée à compléter. Ce projet m'a permis de comprendre les rouages du déploiement avec Docker et la communication entre différents services via une architecture web classique.",
        dateStr: "nov 2024 - janv 2025",
        dateUnive: 202411,
        image: "assets/images/projet3.png",
        images: [
            {
                src: "assets/images/projet3.png",
                caption: "Schéma de l'architecture du système"
            }
        ],
        filtres: ["PHP", "Docker", "VSCode", "HTML", "CSS/SCSS", "BUT"],
        tagsCarte: ["Docker", "PHP", "BUT"],
        technos: ["PHP", "Docker", "HTML/CSS", "VSCode"]
    },
    {
        id: 4,
        titre: "BDD Ligue de Football",
        description: "Conception et modélisation d'une base de données relationnelle pour une ligue de football.",
        descriptionLongue: "Description détaillée à compléter. Travail approfondi sur la conception de bases de données relationnelles. Passage par les schémas entité-association, la normalisation des données et l'écriture de requêtes SQL complexes.",
        dateStr: "oct 2024 - dec 2024",
        dateUnive: 202410,
        image: "assets/images/projet4.jpg",
        images: [
            {
                src: "assets/images/projet4.jpg",
                caption: "Modèle conceptuel des données (MCD)"
            }
        ],
        filtres: ["BDD", "SGoogle", "BUT"],
        tagsCarte: ["BDD", "BUT"],
        technos: ["Conception BDD", "UML", "Suite Google"]
    },
    {
        id: 5,
        titre: "Site web des JO",
        description: "Développement d'un site vitrine en équipe (recueil des besoins, maquettage, intégration).",
        descriptionLongue: "Description détaillée à compléter. Un vrai projet de A à Z en équipe. Nous sommes partis du recueil des besoins clients, avons réalisé des maquettes sur Figma, pour finir par l'intégration web en respectant les standards d'accessibilité.",
        dateStr: "oct 2024 - fev 2025",
        dateUnive: 202410,
        image: "assets/images/projet5.png",
        images: [
            {
                src: "assets/images/projet5.png",
                caption: "Maquette de la page d'accueil sur Figma"
            }
        ],
        filtres: ["HTML", "CSS/SCSS", "Github", "VSCode", "Figma", "SGoogle", "BUT"],
        tagsCarte: ["HTML/CSS", "Figma", "Équipe"],
        technos: ["HTML/CSS", "Figma", "Github", "Travail d'équipe"]
    },
    {
        id: 6,
        titre: "Analyse Coca-Cola",
        description: "Réalisation d'une analyse RSE et d'un diagnostic stratégique SWOT de l'entreprise Coca-Cola.",
        descriptionLongue: "Description détaillée à compléter. Projet axé sur la gestion d'entreprise et l'économie. Réalisation d'un diagnostic complet pour comprendre la stratégie d'un grand groupe international et ses enjeux RSE.",
        dateStr: "nov 2024 - dec 2024",
        dateUnive: 202411,
        image: "assets/images/projet6.png",
        images: [
            {
                src: "assets/images/projet6.png",
                caption: "Extrait de la matrice SWOT"
            },
            {
                src: "assets/images/projet6_rse.png", 
                link: "assets/docs/rapport_rse_coca.pdf",
                caption: "Rapport d'analyse RSE 📄 (Cliquez pour ouvrir)"
            }
        ],
        filtres: ["SGoogle", "BUT"],
        tagsCarte: ["Analyse", "BUT"],
        technos: ["Analyse SWOT", "RSE", "Canva", "Suite Google"]
    },
    {
        id: 7,
        titre: "Application Harmonia",
        description: "Développement d'un module pour le système d'information et de gestion d'un club de danse.",
        descriptionLongue: "Description détaillée à compléter. Initiation au développement d'applications lourdes (Desktop) avec l'écosystème Java. Mise en place d'interfaces graphiques et gestion d'événements utilisateurs.",
        dateStr: "mars 2025 - juin 2025",
        dateUnive: 202504,
        image: "assets/images/projet7.png",
        images: [
            {
                src: "assets/images/projet7.png",
                caption: "Interface de gestion des adhérents"
            }
        ],
        filtres: ["Java", "SGoogle", "Eclipse", "BUT"],
        tagsCarte: ["Java", "BUT"],
        technos: ["Java", "JavaFX", "Eclipse", "POO"]
    },
    {
        id: 8,
        titre: "Algorithmes de Classification",
        description: "Développement d'algorithmes d'analyse de données et d'apprentissage (k-NN, k-Means).",
        descriptionLongue: "Description détaillée à compléter. Découverte du Machine Learning en Python. Implémentation manuelle des algorithmes k-NN et k-Means pour comprendre les mathématiques sous-jacentes à la classification de données.",
        dateStr: "fev 2025 - avr 2025",
        dateUnive: 202502,
        image: "assets/images/projet8.png",
        images: [
            {
                src: "assets/images/projet8.png",
                caption: "Visualisation des clusters (k-Means)"
            }
        ],
        filtres: ["Python", "VSCode", "BUT"],
        tagsCarte: ["Python", "IA", "BUT"],
        technos: ["Python", "Machine Learning", "Analyse de données"]
    },
    {
        id: 9,
        titre: "Serveur Web Apache",
        description: "Installation, configuration et administration de services réseaux, dont un serveur web Apache.",
        descriptionLongue: "Description détaillée à compléter. Plongée dans le monde de l'administration système. Déploiement et configuration sécurisée d'un serveur web sous Linux, gestion des droits et des hôtes virtuels.",
        dateStr: "mars 2025 - juin 2025",
        dateUnive: 202503,
        image: "assets/images/projet9.png",
        images: [
            {
                src: "assets/images/projet9.png",
                caption: "Page d'accueil du serveur hébergé"
            }
        ],
        filtres: ["PHP", "HTML", "CSS/SCSS", "SGoogle", "VSCode", "BUT"],
        tagsCarte: ["Système & Réseau", "BUT"],
        technos: ["Apache", "Linux", "PHP", "Réseau"]
    },
    {
        id: 10,
        titre: "Analyse Statistique de Données",
        description: "Conception et exploitation d'une base de données pour l'analyse statistique de données réelles.",
        descriptionLongue: "Description détaillée à compléter. Manipulation de grands jeux de données. Importation dans PostgreSQL, nettoyage, puis extraction de métriques statistiques pertinentes via des requêtes optimisées.",
        dateStr: "avril 2025 - juin 2025",
        dateUnive: 202504,
        image: "assets/images/projet10.png",
        images: [
            {
                src: "assets/images/projet10.png",
                caption: "Tableau de bord et requêtes sous PGAdmin"
            }
        ],
        filtres: ["SGoogle", "BDD", "PGAdmin", "PostgreSQL", "BUT"],
        tagsCarte: ["PostgreSQL", "Data", "BUT"],
        technos: ["PostgreSQL", "PGAdmin", "Statistiques", "SQL"]
    },
    {
        id: 11,
        titre: "Gestion de Projet Logiciel",
        description: "Planification, organisation et coordination d'une équipe de développement pour une application Java.",
        descriptionLongue: "Description détaillée à compléter. Apprentissage des méthodes de gestion de projet (agiles et prédictives). Création de diagrammes de Gantt, répartition des tâches et suivi d'avancement.",
        dateStr: "mars 2025 - juin 2025",
        dateUnive: 202503,
        image: "assets/images/projet11.png",
        images: [
            {
                src: "assets/images/projet11.png",
                caption: "Diagramme de Gantt prévisionnel"
            }
        ],
        filtres: ["SGoogle", "Project Libre", "BUT"],
        tagsCarte: ["Gestion de projet", "BUT"],
        technos: ["Project Libre", "Diagramme de Gantt", "Méthodologie Agile"]
    },
    {
        id: 12,
        titre: "Team Building retour a l'essentiel",
        description: "Création et planification d'un événement de team building nommé sur le « retour à l'essentiel ».",
        descriptionLongue: "Organisation complète d'un team building. Conception d'une infographie, rédaction d'un rapport logistique, creation d'une video de présentation et réalisation des slides de présentation.",
        dateStr: "mai 2025 - juin 2025",
        dateUnive: 202505,
        image: "assets/images/team_building_retour_essentiel/image_carte.png",
        images: [
            {
                src: "assets/images/team_building_retour_essentiel/images-1.png",
                link: "https://github.com/yannislechevere/Team_building_retour_essentiel/blob/main/Etape-1-Infographie_Rapport/Infographie_TDE_RetourEssentiel_CHAUVEL_LECHEVERE_LEMOING_LESECH.pdf",
                caption: "Infographie de présentation"
            },
            {
                src: "assets/images/team_building_retour_essentiel/images-2.png",
                link: "https://github.com/yannislechevere/Team_building_retour_essentiel/blob/main/Etape-1-Infographie_Rapport/Rapport_TDE_RetourEssentiel_CHAUVEL_LECHEVERE_LEMOING_LESECH.pdf",
                caption: "Rapport complet pdf"
            },
            {
                src: "assets/images/team_building_retour_essentiel/images-3.png",
                link: "https://youtu.be/ton-lien-video",
                caption: "Vidéo promotionnelle"
            },
            {
                src: "assets/images/team_building_retour_essentiel/images-4.png",
                link: "ahttps://github.com/yannislechevere/Team_building_retour_essentiel/blob/main/Etape-3-Soutenance/Oral_TDE_RetourEssentiel_CHAUVEL_LECHEVERE_LEMOING_LESECH.pdf",
                caption: "Soutenance de présentation"
            }
        ],
        filtres: ["SGoogle", "DaVinciResolve", "Canva", "BUT"],
        tagsCarte: ["Communication", "Vidéo", "BUT"],
        technos: ["DaVinci Resolve", "Canva", "Organisation"]
    },
    {
        id: 13,
        titre: "Plateforme de E-commerce",
        description: "Développement complet en équipe (6 personnes) d'une plateforme de e-commerce de bout en bout.",
        descriptionLongue: "Description détaillée à compléter. Le plus gros projet d'équipe de l'année. Nous avons géré la base de données, le back-end en PHP, le front-end interactif en JS, tout en travaillant de manière asynchrone avec Git et Jira.",
        dateStr: "sept 2025 - mars 2026",
        dateUnive: 202509,
        image: "assets/images/projet13.png",
        images: [
            {
                src: "assets/images/projet13.png",
                caption: "Page d'accueil de la boutique"
            }
        ],
        filtres: ["SGoogle", "HTML", "CSS/SCSS", "JS", "PHP", "BDD", "PostgreSQL", "Github", "VSCode", "Jira", "PGAdmin", "BUT"],
        tagsCarte: ["Web Full-Stack", "Équipe", "BUT"],
        technos: ["PHP", "JavaScript", "PostgreSQL", "Jira", "Git/Github"]
    },
    {
        id: 14,
        titre: "Vérification d'Enceintes (Exail)",
        description: "Développement d'une application de test pour vérifier la conformité des enceintes climatiques.",
        descriptionLongue: "Lors de mon stage de 2ieme anner de BUT infomatique, j'ai eu l'opportunité de développer une application logicielle cher Exail. L'objectif principal était d'automatiser un processus manuelle a l'aide d'une application. Le processus consistait a vérifier la comformiter en tempéreature, d'enceinte (climatique, termostatique...). Pour cela j'ai developper une application en python avec un installer et un executable. L'application pilote une centrale d'acquisition qui recupere les donnée en temps voulu et forme un constat de verification au format pdf vec des verification API ETC.",
        dateStr: "avr 2026 - juil 2026",
        dateUnive: 202604,
        image: "assets/images/projet14.png",
        images: [
            {
                src: "assets/images/projet1.png",
                caption: "Interface de contrôle de la centrale d'acquisition"
            },
            {
                src: "assets/images/projet2.gif",
                caption: "Génération automatisée du constat PDF"
            }
        ],
        filtres: ["Figma", "Python", "HTML", "CSS/SCSS", "SMicrosoft", "Stage"],
        tagsCarte: ["Python", "Stage"],
        technos: ["Python", "PyQt5", "HTML/CSS", "Figma", "Suite Microsoft"]
    }
];