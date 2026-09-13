// js/data/events.js

export const GENERAL_EVENTS = [
    // --- LES 15 ÉVÉNEMENTS ORIGINAUX ---
    {
        id: "evt_1", title: "FlemmeTV : Le Grand Débat Économique", source: "flemmetv",
        text: "FlemmeTV t’invite sur son plateau pour un grand oral face à un économiste libéral un peu trop sûr de lui.",
        choices: [
            { text: "Y aller pour tout casser : 'Vous êtes le VRP du CAC 40 !'", effects: { sondages: +3, acceptabilite: -4, soutienParti: +2, tresorerie: 0, targetIdeology: "centre", targetDelta: -1 } },
            { text: "Jouer la carte du sérieux : Présenter un plan budgétaire millimétré.", effects: { sondages: +1, acceptabilite: +3, soutienParti: -1, tresorerie: -1000, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Refuser l'invitation : 'Je ne perds pas mon temps avec les valets du système.'", effects: { sondages: -2, acceptabilite: -2, soutienParti: +3, tresorerie: 0, targetIdeology: "gauche_radicale", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_2", title: "Le tacle sur Y", source: "reseau_y",
        text: "Ton principal rival centriste poste un fil sur Y se moquant de tes propositions 'financées par la magie de Noël'.",
        choices: [
            { text: "Répondre par une punchline violente sur son bilan.", effects: { sondages: +2, acceptabilite: -3, soutienParti: +2, tresorerie: 0, targetIdeology: "centre", targetDelta: -2 } },
            { text: "Ignorer le tweet et poster une photo de toi avec une baguette.", effects: { sondages: 0, acceptabilite: +1, soutienParti: 0, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Publier un long pavé argumenté et chiffré.", effects: { sondages: -1, acceptabilite: 0, soutienParti: +1, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } }
        ]
    },
    {
        id: "evt_3", title: "Crise du carburant : Le barrage", source: "actualite",
        text: "Un mouvement social spontané bloque les raffineries. Les prix flambent, la colère gronde.",
        choices: [
            { text: "Exprimer un soutien total : 'Le peuple a raison de se révolter !'", effects: { sondages: +4, acceptabilite: -3, soutienParti: +3, tresorerie: -2000, targetIdeology: "gauche_radicale", targetDelta: +2 } },
            { text: "Appeler au calme : 'L'ordre républicain doit primer.'", effects: { sondages: -2, acceptabilite: +3, soutienParti: -2, tresorerie: 0, targetIdeology: "droite", targetDelta: +1 } },
            { text: "Promettre le carburant à 1 euro bloqué par décret.", effects: { sondages: +5, acceptabilite: -2, soutienParti: +2, tresorerie: -5000, targetIdeology: "exteme_droite", targetDelta: -1 } }
        ]
    },
    {
        id: "evt_4", title: "Le Pigeon Déchaîné frappe !", source: "pigeondechaine",
        text: "Un journaliste dévoile la facture d'un costume sur-mesure payé avec les frais de représentation du parti.",
        choices: [
            { text: "Crier au complot : 'Le système cherche à m'abattre !'", effects: { sondages: -2, acceptabilite: -4, soutienParti: +4, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Rembourser fissa et s'excuser platement.", effects: { sondages: -1, acceptabilite: +2, soutienParti: -3, tresorerie: -3000, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Corrompre le rédacteur en chef pour étouffer l'affaire.", effects: { sondages: 0, acceptabilite: 0, soutienParti: 0, tresorerie: -8000, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_5", title: "Le bad buzz TikTok de Tic & Tac", source: "tictac",
        text: "Une IA te fait danser sur une techno ringarde dans une vidéo virale qui fait 3 millions de vues.",
        choices: [
            { text: "Surfer sur la hype et la repartager sur ton compte.", effects: { sondages: +3, acceptabilite: -2, soutienParti: -1, tresorerie: 0, targetIdeology: "centre_gauche", targetDelta: -1 } },
            { text: "Porter plainte pour usurpation d'identité numérique.", effects: { sondages: -1, acceptabilite: +1, soutienParti: +2, tresorerie: -1000, targetIdeology: "droite", targetDelta: 0 } },
            { text: "Faire l'autruche et ignorer complètement.", effects: { sondages: 0, acceptabilite: 0, soutienParti: 0, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_6", title: "VraiesNews : Le focus sécurité", source: "vraiesnews",
        text: "Invité sur VraiesNews, le présentateur te cuisine sur un fait divers ultra-médiatisé survenu la veille.",
        choices: [
            { text: "Dénoncer la récupération politique nauséabonde.", effects: { sondages: +2, acceptabilite: -2, soutienParti: +2, tresorerie: 0, targetIdeology: "gauche_radicale", targetDelta: +1 } },
            { text: "Aller sur le terrain de la fermeté maximale et de l'autorité.", effects: { sondages: +3, acceptabilite: -1, soutienParti: -2, tresorerie: 0, targetIdeology: "exteme_droite", targetDelta: -2 } },
            { text: "Noyer le poisson en parlant de la baisse du pouvoir d'achat.", effects: { sondages: 0, acceptabilite: +1, soutienParti: 0, tresorerie: 0, targetIdeology: "centre", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_7", title: "La Planète enquête sur tes troupes", source: "laplanete",
        text: "Le quotidien révèle que des militants de ton parti ont collé des affiches illégales sur un bâtiment classé.",
        choices: [
            { text: "Assumer : 'La lutte politique n'a pas à être propre.'", effects: { sondages: +1, acceptabilite: -3, soutienParti: +3, tresorerie: 0, targetIdeology: "gauche_ecolo", targetDelta: -1 } },
            { text: "Se distancier publiquement : 'Ce sont des brebis galeuses.'", effects: { sondages: -1, acceptabilite: +2, soutienParti: -4, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Payer les amendes en douce avec la caisse du parti.", effects: { sondages: 0, acceptabilite: 0, soutienParti: 0, tresorerie: -2500, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_8", title: "Menace de fronde en interne", source: "parti",
        text: "Ton numéro deux historique trouve que tu gères la campagne comme un manche et menace de faire dissidence.",
        choices: [
            { text: "L'acheter en lui promettant un futur strapontin ministériel.", effects: { sondages: 0, acceptabilite: -1, soutienParti: +4, tresorerie: -4000, targetIdeology: "all", targetDelta: 0 } },
            { text: "Le défier ouvertement : 'Qu'il vienne, il ne pèse rien !'", effects: { sondages: +1, acceptabilite: 0, soutienParti: -5, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Modifier ton programme pour l'apaiser.", effects: { sondages: -2, acceptabilite: +1, soutienParti: +2, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } }
        ]
    },
    {
        id: "evt_9", title: "La bourde du micro-trottoir", source: "flemmetv",
        text: "Piégé par un journaliste sur le prix exact d'une baguette de pain ou d'un titre de transport, tu réponds totalement à côté.",
        choices: [
            { text: "Esquiver par l'humour : 'Je ne mange que du caviar !'", effects: { sondages: -2, acceptabilite: +2, soutienParti: 0, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Accuser le journaliste de faire du piège à bourgeois.", effects: { sondages: +1, acceptabilite: -3, soutienParti: +1, tresorerie: 0, targetIdeology: "gauche_radicale", targetDelta: +1 } },
            { text: "S'excuser platement et faire profil bas.", effects: { sondages: -1, acceptabilite: 0, soutienParti: -1, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_10", title: "Le donateur aux mains de boue", source: "coulisses",
        text: "Un mystérieux homme d'affaires propose de financer clandestinement ta fin de campagne à hauteur de 50 000 euros.",
        choices: [
            { text: "Accepter l'argent en liquide en cachette.", effects: { sondages: +3, acceptabilite: -3, soutienParti: +2, tresorerie: +15000, targetIdeology: "centre", targetDelta: -1 } },
            { text: "Refuser net : 'Hors de question de vendre la France !'", effects: { sondages: -1, acceptabilite: +3, soutienParti: +2, tresorerie: 0, targetIdeology: "exteme_droite", targetDelta: +1 } },
            { text: "Accepter via un montage nébuleux de cabinets de conseil.", effects: { sondages: +2, acceptabilite: -1, soutienParti: +1, tresorerie: +10000, targetIdeology: "centre", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_11", title: "Le vieux dossier exhumé sur Y", source: "reseau_y",
        text: "Un compte anonyme exhume un tweet posté il y a dix ans où tu disais une énorme bêtise.",
        choices: [
            { text: "Soutenir que le compte a été piraté.", effects: { sondages: -1, acceptabilite: -2, soutienParti: 0, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Assumer : 'J'étais jeune et con, comme tout le monde.'", effects: { sondages: +1, acceptabilite: +2, soutienParti: -1, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Effacer le tweet en suant à grosses gouttes.", effects: { sondages: 0, acceptabilite: 0, soutienParti: 0, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_12", title: "L'invitation au festival local", source: "terrain",
        text: "Tu es invité en urgence à la traditionnelle Fête de la Saucisse.",
        choices: [
            { text: "Y aller à fond, enchaîner les verres et les photos.", effects: { sondages: +3, acceptabilite: -1, soutienParti: +2, tresorerie: -1000, targetIdeology: "gauche_populaire", targetDelta: +1 } },
            { text: "Envoyer un subordonné à ta place.", effects: { sondages: -1, acceptabilite: 0, soutienParti: -1, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Refuser pour bosser tes dossiers.", effects: { sondages: -1, acceptabilite: +2, soutienParti: 0, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } }
        ]
    },
    {
        id: "evt_13", title: "La douche froide du sondage secret", source: "coulisses",
        text: "Un institut t'informe en avant-première que tu t'effondres dans les derniers virages.",
        choices: [
            { text: "Pivoter radicalement de ligne pour buzzer.", effects: { sondages: +4, acceptabilite: -4, soutienParti: -3, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Injecter tes dernières économies dans un meeting géant.", effects: { sondages: +3, acceptabilite: 0, soutienParti: +1, tresorerie: -6000, targetIdeology: "all", targetDelta: 0 } },
            { text: "Garder son calme et continuer.", effects: { sondages: -2, acceptabilite: +1, soutienParti: 0, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_14", title: "Le live Tic & Tac", source: "tictac",
        text: "Le plus gros streamer te propose un live de 3h en jouant à des jeux vidéo tout en parlant politique.",
        choices: [
            { text: "Accepter et placer des mèmes.", effects: { sondages: +4, acceptabilite: -2, soutienParti: 0, tresorerie: 0, targetIdeology: "centre_gauche", targetDelta: -1 } },
            { text: "Refuser : 'Je ne fais pas le pitre.'", effects: { sondages: -2, acceptabilite: +1, soutienParti: +2, tresorerie: 0, targetIdeology: "droite", targetDelta: +1 } }
        ]
    },
    {
        id: "evt_15", title: "Le piège du duplex sur FlemmeTV", source: "flemmetv",
        text: "FlemmeTV organise un débat surprise en duplex avec ton pire ennemi.",
        choices: [
            { text: "L'attaquer agressivement sur ses affaires.", effects: { sondages: +2, acceptabilite: -4, soutienParti: +3, tresorerie: 0, targetIdeology: "centre", targetDelta: -2 } },
            { text: "Garder son sang-froid et parler programme.", effects: { sondages: 0, acceptabilite: +3, soutienParti: -1, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Quitter le plateau en direct.", effects: { sondages: +1, acceptabilite: -3, soutienParti: +4, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },

    // --- LES 85 VRAIS ÉVÉNEMENTS GÉNÉRAUX SUPPLÉMENTAIRES ENTIÈREMENT RÉDIGÉS ---
    {
        id: "evt_16", title: "Le Salon de l'Agriculture sous tension", source: "terrain",
        text: "Bloqué dans les allées du Salon par des éleveurs furieux, un taureau un peu trop stressé manque de piétiner ton costume.",
        choices: [
            { text: "Saisir l'animal par les cornes et hurler un slogan populiste.", effects: { sondages: +3, acceptabilite: -2, soutienParti: +2, tresorerie: 0, targetIdeology: "exteme_droite", targetDelta: -1 } },
            { text: "Fuir en courant en perdant un mocassin de prix.", effects: { sondages: -3, acceptabilite: -2, soutienParti: -2, tresorerie: -500, targetIdeology: "centre", targetDelta: 0 } },
            { text: "Proposer un débat constructif au taureau.", effects: { sondages: -1, acceptabilite: +2, soutienParti: 0, tresorerie: 0, targetIdeology: "gauche_ecolo", targetDelta: +1 } }
        ]
    },
    {
        id: "evt_17", title: "La fuite des notes du cabinet de conseil", source: "pigeondechaine",
        text: "Le Pigeon Déchaîné publie une note de ton cabinet de conseil privé à 2 millions d'euros préconisant de 'rendre les pauvres plus discrets'.",
        choices: [
            { text: "Assumer : 'C'est de la novlangue moderne, bande de technophobes.'", effects: { sondages: -2, acceptabilite: -4, soutienParti: +2, tresorerie: 0, targetIdeology: "centre", targetDelta: -2 } },
            { text: "Accuser un stagiaire fantôme d'avoir rédigé ça sous l'influence.", effects: { sondages: -1, acceptabilite: +1, soutienParti: -2, tresorerie: 0, targetIdeology: "centre", targetDelta: 0 } },
            { text: "Résilier le contrat en direct à la télévision.", effects: { sondages: +2, acceptabilite: +2, soutienParti: +1, tresorerie: -3000, targetIdeology: "gauche_radicale", targetDelta: -1 } }
        ]
    },
    {
        id: "evt_18", title: "Canicule et hôpitaux au bord de la rupture", source: "actualite",
        text: "Une canicule historique frappe le pays. Les urgences débordent, un service entier ferme par manque de clim.",
        choices: [
            { text: "Exiger la démission immédiate du ministre de la Santé.", effects: { sondages: +3, acceptabilite: -1, soutienParti: +2, tresorerie: 0, targetIdeology: "centre", targetDelta: -2 } },
            { text: "Proposer d'envoyer des bouteilles d'eau en plastique par la Poste.", effects: { sondages: -4, acceptabilite: -3, soutienParti: -2, tresorerie: -1000, targetIdeology: "all", targetDelta: 0 } },
            { text: "Aller faire une photo suante en blouse blanche dans un couloir.", effects: { sondages: +1, acceptabilite: -3, soutienParti: -1, tresorerie: 0, targetIdeology: "centre", targetDelta: -1 } }
        ]
    },
    {
        id: "evt_19", title: "Le loupé de la dictée nationale", source: "flemmetv",
        text: "Invité dans une émission de vulgarisation, tu échoues lamentablement sur l'orthographe du mot 'effervescence'.",
        choices: [
            { text: "Dire que l'orthographe est un outil d'asservissement bourgeois.", effects: { sondages: +2, acceptabilite: -3, soutienParti: +2, tresorerie: 0, targetIdeology: "centre", targetDelta: -1 } },
            { text: "Blâmer l'Éducation Nationale et les profs gauchistes.", effects: { sondages: +1, acceptabilite: -2, soutienParti: +1, tresorerie: 0, targetIdeology: "gauche_radicale", targetDelta: -1 } },
            { text: "S'excuser en riant jaune avec un dictionnaire à la main.", effects: { sondages: -1, acceptabilite: +2, soutienParti: -1, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } }
        ]
    },
    {
        id: "evt_20", title: "Le chantage des écologistes radicaux", source: "coulisses",
        text: "Un collectif éco-radical menace de bloquer ton prochain meeting géant s'il n'est pas alimenté à l'énergie solaire et au vélocipède.",
        choices: [
            { text: "Céder et faire venir 50 vélos-générateurs pour les militants.", effects: { sondages: +2, acceptabilite: +1, soutienParti: -2, tresorerie: -2000, targetIdeology: "gauche_ecolo", targetDelta: +2 } },
            { text: "Envoyer le service d'ordre expulser tout ce petit monde.", effects: { sondages: +1, acceptabilite: -3, soutienParti: +3, tresorerie: 0, targetIdeology: "exteme_droite", targetDelta: -1 } },
            { text: "Ignorer la menace et maintenir les moteurs diesel.", effects: { sondages: -2, acceptabilite: -1, soutienParti: +1, tresorerie: 0, targetIdeology: "droite", targetDelta: +1 } }
        ]
    },
    {
        id: "evt_21", title: "Le syndicat de police s'invite", source: "vraiesnews",
        text: "Un syndicat policier organise un rassemblement sauvage devant ton QG pour exiger des sanctions plus lourdes.",
        choices: [
            { text: "Leur servir le café et signer leur charte en direct.", effects: { sondages: +3, acceptabilite: -2, soutienParti: -3, tresorerie: 0, targetIdeology: "gauche_radicale", targetDelta: -2 } },
            { text: "Dénoncer une tentative de putsch électoral.", effects: { sondages: -2, acceptabilite: +1, soutienParti: +3, tresorerie: 0, targetIdeology: "gauche_radicale", targetDelta: +2 } },
            { text: "Promettre une augmentation générale des flashballs.", effects: { sondages: +2, acceptabilite: -2, soutienParti: 0, tresorerie: -4000, targetIdeology: "exteme_droite", targetDelta: -1 } }
        ]
    },
    {
        id: "evt_22", title: "Le bad buzz de la montre de luxe", source: "pigeondechaine",
        text: "Une photo volée te montre en train de retirer discrètement une montre à 40 000 euros pendant une interview sur la pauvreté.",
        choices: [
            { text: "Soutenir que c'est une contrefaçon achetée sur un marché de nuit.", effects: { sondages: -3, acceptabilite: -3, soutienParti: -1, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Dire que c'est un cadeau d'un riche aïeul ukrainien.", effects: { sondages: -2, acceptabilite: -2, soutienParti: 0, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "L'offrir en direct à un passant pour faire diversion.", effects: { sondages: +2, acceptabilite: +1, soutienParti: -2, tresorerie: -5000, targetIdeology: "centre", targetDelta: -1 } }
        ]
    },
    {
        id: "evt_23", title: "Le deepfake porno-politique sur Y", source: "reseau_y",
        text: "Une vidéo truquée par IA te montrant en train de voler des bonbons à un enfant circule massivement sur Y.",
        choices: [
            { text: "Lancer une procédure en urgence contre la plateforme.", effects: { sondages: -1, acceptabilite: +1, soutienParti: +1, tresorerie: -1500, targetIdeology: "centre", targetDelta: 0 } },
            { text: "En rire en postant une vidéo de toi mangeant des bonbons en pleurant.", effects: { sondages: +2, acceptabilite: +2, soutienParti: 0, tresorerie: 0, targetIdeology: "centre_gauche", targetDelta: -1 } },
            { text: "Accuser tes adversaires de cyber-terrorisme psychologique.", effects: { sondages: 0, acceptabilite: -1, soutienParti: +2, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_24", title: "Grève surprise des éboueurs", source: "actualite",
        text: "Paris et trois grandes villes croulent sous 10 000 tonnes de poubelles à deux semaines du vote.",
        choices: [
            { text: "Aller trier les déchets soi-même devant les caméras de FlemmeTV.", effects: { sondages: +2, acceptabilite: -1, soutienParti: -1, tresorerie: 0, targetIdeology: "gauche_ecolo", targetDelta: -1 } },
            { text: "Exiger la réquisition immédiate des grévistes.", effects: { sondages: +2, acceptabilite: -3, soutienParti: -2, tresorerie: 0, targetIdeology: "gauche_radicale", targetDelta: -2 } },
            { text: "Proposer de transformer les déchets en compost national.", effects: { sondages: -2, acceptabilite: +1, soutienParti: +1, tresorerie: 0, targetIdeology: "gauche_ecolo", targetDelta: +1 } }
        ]
    },
    {
        id: "evt_25", title: "L'interview de trop chez Cyril Hanouna-bis", source: "flemmetv",
        text: "Sur le plateau de 'Touche pas à mon urne', un chroniqueur te demande de choisir entre un chaton et la retraite à 64 ans.",
        choices: [
            { text: "Choisir le chaton en faisant une moue attendrissante.", effects: { sondages: +3, acceptabilite: +2, soutienParti: -2, tresorerie: 0, targetIdeology: "centre", targetDelta: -1 } },
            { text: "Exploser de rage et insulter le concept de l'émission.", effects: { sondages: -2, acceptabilite: -2, soutienParti: +4, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Faire semblant de t'évanouir pour couper court au débat.", effects: { sondages: -1, acceptabilite: -1, soutienParti: -1, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_26", title: "La fuite des fichiers de militants", source: "coulisses",
        text: "Le serveur du parti est piraté. Les mots de passe et les commentaires racistes de tes cadres locaux fuitent sur Internet.",
        choices: [
            { text: "Minimiser : 'Ce sont des propos sortis de leur contexte humoristique.'", effects: { sondages: -2, acceptabilite: -3, soutienParti: +2, tresorerie: 0, targetIdeology: "exteme_droite", targetDelta: 0 } },
            { text: "Virer tout le monde fissa par communiqué de presse.", effects: { sondages: +1, acceptabilite: +1, soutienParti: -4, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Payer une rançon en bitcoins aux hackers russes.", effects: { sondages: 0, acceptabilite: -1, soutienParti: 0, tresorerie: -6000, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_27", title: "Visite mystère dans une prison surpeuplée", source: "terrain",
        text: "Tu visites une maison d'arrêt insalubre. Un détenu te prend en otage... pour te faire signer une pétition pour de meilleures pâtes.",
        choices: [
            { text: "Signer la pétition en direct avec le sourire.", effects: { sondages: +2, acceptabilite: +1, soutienParti: -2, tresorerie: 0, targetIdeology: "gauche_radicale", targetDelta: +1 } },
            { text: "Appeler le GIGN pour mater la révolte des nouilles.", effects: { sondages: +2, acceptabilite: -3, soutienParti: +2, tresorerie: -1000, targetIdeology: "exteme_droite", targetDelta: -1 } },
            { text: "Promettre la construction de 50 000 nouvelles cellules.", effects: { sondages: +1, acceptabilite: 0, soutienParti: +1, tresorerie: -5000, targetIdeology: "droite", targetDelta: -1 } }
        ]
    },
    {
        id: "evt_28", title: "Le grand meeting dans un hangar vide", source: "terrain",
        text: "À cause d'un bug d'organisation, ton meeting national se déroule dans un immense hangar de fret glacial avec seulement 12 personnes.",
        choices: [
            { text: "Faire le show quand même avec une énergie surhumaine.", effects: { sondages: -2, acceptabilite: +3, soutienParti: +2, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Annuler et aller se cacher dans un bar PMU.", effects: { sondages: -3, acceptabilite: -1, soutienParti: -3, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Multiplier virtuellement la foule grâce à des photomontages.", effects: { sondages: -4, acceptabilite: -4, soutienParti: -2, tresorerie: -2000, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_29", title: "Le rapport accablant de la Cour des comptes", source: "laplanete",
        text: "La Cour des comptes étrille le programme de ton parti, le qualifiant 'd'exercice de science-fiction macroéconomique'.",
        choices: [
            { text: "Traiter les magistrats de 'petits fonctionnaires hors-sol'.", effects: { sondages: +1, acceptabilite: -3, soutienParti: +3, tresorerie: 0, targetIdeology: "gauche_radicale", targetDelta: -1 } },
            { text: "Modifier discrètement le programme en pleine nuit.", effects: { sondages: -1, acceptabilite: +1, soutienParti: -2, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Organiser une conférence de presse avec des graphiques incompréhensibles.", effects: { sondages: 0, acceptabilite: 0, soutienParti: 0, tresorerie: -1000, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_30", title: "La visite d'une usine de sous-vêtements bio", source: "terrain",
        text: "En visite dans une PME locale, tu enfiles un slip éthique par-dessus ton pantalon pour illustrer 'la protection sociale'.",
        choices: [
            { text: "Assumer le look et poser fièrement pour La Planète.", effects: { sondages: +1, acceptabilite: -2, soutienParti: -1, tresorerie: 0, targetIdeology: "gauche_ecolo", targetDelta: +1 } },
            { text: "Exiger le retrait immédiat des photos sous peine de procès.", effects: { sondages: -2, acceptabilite: 0, soutienParti: +1, tresorerie: -1000, targetIdeology: "all", targetDelta: 0 } },
            { text: "Faire interdire la marque par décret imaginaire.", effects: { sondages: -3, acceptabilite: -3, soutienParti: +2, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_31", title: "Le Conseil constitutionnel retoque une mesure clé", source: "actualite",
        text: "Coup de tonnerre : le Conseil constitutionnel juge 'inconstitutionnelle' ta mesure phare sur l'impôt universel des chats.",
        choices: [
            { text: "Hurler à la dictature des juges et menacer de dissoudre le Conseil.", effects: { sondages: +3, acceptabilite: -4, soutienParti: +4, tresorerie: 0, targetIdeology: "gauche_radicale", targetDelta: -2 } },
            { text: "Dire que c'est une opportunité pour faire une loi encore plus dure.", effects: { sondages: +1, acceptabilite: -2, soutienParti: +2, tresorerie: 0, targetIdeology: "exteme_droite", targetDelta: -1 } },
            { text: "S'incliner platement et changer de sujet.", effects: { sondages: -2, acceptabilite: +1, soutienParti: -2, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } }
        ]
    },
    {
        id: "evt_32", title: "Le sabotage de la ligne TGV", source: "actualite",
        text: "Des militants mystérieux sabotent les caténaires des TGV. Ton train de campagne est bloqué en pleine cambrousse.",
        choices: [
            { text: "Finir le trajet en stop en faisant du pouce sur l'autoroute.", effects: { sondages: +2, acceptabilite: +2, soutienParti: 0, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Affréter un jet privé aux frais de la princesse.", effects: { sondages: -4, acceptabilite: -4, soutienParti: -1, tresorerie: -7000, targetIdeology: "all", targetDelta: 0 } },
            { text: "Accuser le complot international éco-terroriste.", effects: { sondages: +1, acceptabilite: -2, soutienParti: +2, tresorerie: 0, targetIdeology: "exteme_droite", targetDelta: -1 } }
        ]
    },
    {
        id: "evt_33", title: "La polémique de l'apéro sans alcool", source: "flemmetv",
        text: "Photo polémique : on te voit trinquer avec une bière sans alcool lors d'une kermesse dans le Nord.",
        choices: [
            { text: "Expliquer que c'est de la vraie bière de guerrier.", effects: { sondages: +2, acceptabilite: -1, soutienParti: +1, tresorerie: 0, targetIdeology: "gauche_populaire", targetDelta: +1 } },
            { text: "Assumer le sans-alcool pour plaire aux urbains branchés.", effects: { sondages: -1, acceptabilite: +2, soutienParti: -2, tresorerie: 0, targetIdeology: "centre_gauche", targetDelta: +1 } },
            { text: "Boire cul-sec une bouteille de pastis pur en direct pour compenser.", effects: { sondages: +3, acceptabilite: -3, soutienParti: +3, tresorerie: -200, targetIdeology: "gauche_populaire", targetDelta: +2 } }
        ]
    },
    {
        id: "evt_34", title: "Le clash avec un influenceur crypto sur Tic & Tac", source: "tictac",
        text: "Un gourou de la cryptomonnaie t'accuse en vidéo d'être un inculte financier et propose un duel de trading.",
        choices: [
            { text: "Accepter et perdre 5000 euros de la caisse du parti sur le Dogecoin.", effects: { sondages: -2, acceptabilite: -2, soutienParti: -3, tresorerie: -5000, targetIdeology: "all", targetDelta: 0 } },
            { text: "Le menacer de nationaliser sa collection de singes virtuels.", effects: { sondages: +3, acceptabilite: -1, soutienParti: +3, tresorerie: 0, targetIdeology: "gauche_radicale", targetDelta: -1 } },
            { text: "Le bloquer sans sommation.", effects: { sondages: 0, acceptabilite: 0, soutienParti: 0, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_35", title: "L'agression d'une tarte à la crème", source: "terrain",
        text: "En plein bain de foule, un activiste écologiste te tartine l'entrecôte faciale de chantilly vegan.",
        choices: [
            { text: "Goûter la chantilly et dire qu'elle manque de sucre.", effects: { sondages: +3, acceptabilite: +3, soutienParti: 0, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Mettre une balayette académique à l'activiste.", effects: { sondages: +1, acceptabilite: -4, soutienParti: +3, tresorerie: -1000, targetIdeology: "exteme_droite", targetDelta: -1 } },
            { text: "Fondre en larmes en direct sur BFMTV.", effects: { sondages: -2, acceptabilite: +1, soutienParti: -3, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_36", title: "Le grand meeting sous la pluie battante", source: "terrain",
        text: "Un orage d'anthologie s'abat sur ton estrade extérieure. Tes notes papier se dissolvent en bouillie.",
        choices: [
            { text: "Continuer le discours de mémoire en hurlant sous les éclairs.", effects: { sondages: +3, acceptabilite: +2, soutienParti: +3, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Sortir un parapluie brandi par un suppléant terrorisé.", effects: { sondages: -2, acceptabilite: -2, soutienParti: -1, tresorerie: 0, targetIdeology: "centre", targetDelta: 0 } },
            { text: "Fuir en catastrophe dans la berline officielle.", effects: { sondages: -3, acceptabilite: -2, soutienParti: -3, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_37", title: "Le scandale des assistants parlementaires fantômes", source: "pigeondechaine",
        text: "Le Pigeon Déchaîné prouve que ton chaton persan est officiellement déclaré comme 'assistant expert en ronron-thérapie' au Parlement.",
        choices: [
            { text: "Soutenir que le chat effectue un travail de lobbying fondamental.", effects: { sondages: -2, acceptabilite: -2, soutienParti: +2, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Licencier le chat sur le champ.", effects: { sondages: -1, acceptabilite: +2, soutienParti: -2, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Rembourser les indemnités félines en vendant des t-shirts.", effects: { sondages: 0, acceptabilite: +1, soutienParti: -1, tresorerie: -4000, targetIdeology: "centre", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_38", title: "Le prix Nobel fictif", source: "coulisses",
        text: "Un lobby louche te propose d'acheter un faux 'Prix Nobel de la Paix économique' pour 30 000 euros.",
        choices: [
            { text: "Foncer : 'Ça fera super bien sur les affiches officielles !'", effects: { sondages: +2, acceptabilite: -3, soutienParti: +1, tresorerie: -30000, targetIdeology: "centre", targetDelta: -1 } },
            { text: "Dénoncer l'escroquerie sur Y.", effects: { sondages: 0, acceptabilite: +2, soutienParti: +1, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Refuser mais garder le contact au cas où.", effects: { sondages: 0, acceptabilite: 0, soutienParti: 0, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_39", title: "La polémique des trottinettes électriques", source: "actualite",
        text: "Un accident impliquant un ministre et une trottinette en sens inverse enflamme les réseaux.",
        choices: [
            { text: "Proposer l'interdiction totale des trottinettes sur Terre.", effects: { sondages: +1, acceptabilite: -1, soutienParti: 0, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Faire de la trottinette ta nouvelle monture officielle de campagne.", effects: { sondages: +2, acceptabilite: -2, soutienParti: -1, tresorerie: -500, targetIdeology: "centre_gauche", targetDelta: -1 } },
            { text: "Ignorer le débat urbain.", effects: { sondages: 0, acceptabilite: 0, soutienParti: 0, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_40", title: "Le grand oral des enfants", source: "flemmetv",
        text: "Tu passes dans une émission où des enfants de 8 ans te posent des questions pièges sur la dette publique.",
        choices: [
            { text: "Pleurer en expliquant que la vie d'adulte est dure.", effects: { sondages: +2, acceptabilite: +3, soutienParti: -1, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Leur faire un cours magistral sur les subprimes de 2008.", effects: { sondages: -3, acceptabilite: -2, soutienParti: +1, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Leur distribuer des bonbons périmés du stock de campagne.", effects: { sondages: -1, acceptabilite: -2, soutienParti: 0, tresorerie: -200, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_41", title: "L'interview surprise de Mediapart-bis", source: "laplanete",
        text: "Un journaliste coriace te cuisine pendant 45 minutes sur un compte bancaire caché aux Îles Caïmans.",
        choices: [
            { text: "Quitter le studio en renversant la table.", effects: { sondages: +1, acceptabilite: -3, soutienParti: +4, tresorerie: 0, targetIdeology: "gauche_radicale", targetDelta: -1 } },
            { text: "Transpirer à grosses gouttes en bégayant des chiffres.", effects: { sondages: -4, acceptabilite: -4, soutienParti: -3, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Sortir de ta poche un faux certificat d'innocence signé par le Pape.", effects: { sondages: -2, acceptabilite: -1, soutienParti: 0, tresorerie: -1000, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_42", title: "La pénurie de moutarde nationale", source: "actualite",
        text: "Une terrible pénurie de moutarde paralyse les foyers français à l'approche du scrutin.",
        choices: [
            { text: "Promettre la création d'une 'Banque Centrale de la Moutarde'.", effects: { sondages: +3, acceptabilite: +1, soutienParti: +2, tresorerie: 0, targetIdeology: "centre", targetDelta: -1 } },
            { text: "Dire que les gens peuvent manger sans moutarde, c'est un caprice.", effects: { sondages: -4, acceptabilite: -4, soutienParti: -2, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Importer clandestinement 10 tonnes de condiment roumain.", effects: { sondages: +2, acceptabilite: 0, soutienParti: +1, tresorerie: -3000, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_43", title: "Le bad buzz du t-shirt 'Made in Bangladesh'", source: "reseau_y",
        text: "On découvre sur l'étiquette de ton t-shirt officiel 'Fier d'être Français' qu'il a été cousu par un enfant de 7 ans en Asie.",
        choices: [
            { text: "Expliquer que c'est un hommage à la mondialisation heureuse.", effects: { sondages: -3, acceptabilite: -3, soutienParti: -2, tresorerie: 0, targetIdeology: "centre", targetDelta: -1 } },
            { text: "Brûler le t-shirt en direct sur Tic & Tac.", effects: { sondages: +2, acceptabilite: +1, soutienParti: +1, tresorerie: -500, targetIdeology: "gauche_ecolo", targetDelta: +1 } },
            { text: "Accuser le fabricant d'avoir ourdi un complot textile.", effects: { sondages: -1, acceptabilite: -1, soutienParti: +1, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_44", title: "Le défi du marathon de Paris", source: "terrain",
        text: "Pour prouver ta forme physique, tu t'engages au marathon de Paris mais t'effondres au bout de 800 mètres.",
        choices: [
            { text: "Finir les 41 derniers kilomètres en trottinette électrique cachée.", effects: { sondages: -3, acceptabilite: -3, soutienParti: -2, tresorerie: -500, targetIdeology: "all", targetDelta: 0 } },
            { text: "Transformer ton malaise en métaphore de l'effort des retraités.", effects: { sondages: +1, acceptabilite: +1, soutienParti: 0, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Simuler une blessure diplomatique.", effects: { sondages: -1, acceptabilite: 0, soutienParti: -1, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_45", title: "La visite d'un site nucléaire", source: "terrain",
        text: "En visite dans une centrale, tu touches un bouton rouge clignotant 'Ne pas toucher' par mégarde.",
        choices: [
            { text: "S'enfuir en courant en hurlant 'Tchernobyl !'", effects: { sondages: -4, acceptabilite: -4, soutienParti: -3, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Garder ton calme pendant que les alarmes hurlent.", effects: { sondages: +2, acceptabilite: +2, soutienParti: +2, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Accuser les techniciens d'incompétence nucléaire.", effects: { sondages: 0, acceptabilite: -2, soutienParti: +1, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_46", title: "Le débat sur la taxe sur les sodas", source: "flemmetv",
        text: "Un député adverse propose d'interdire les boissons gazeuses. Le pays est au bord de l'insurrection.",
        choices: [
            { text: "Prendre position pour le droit imprescriptible au Coca.", effects: { sondages: +3, acceptabilite: +2, soutienParti: 0, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Soutenir la taxe pour sauver le foie des Français.", effects: { sondages: -3, acceptabilite: -2, soutienParti: +1, tresorerie: 0, targetIdeology: "gauche_ecolo", targetDelta: +1 } },
            { text: "Boire une canette en cachette sur le plateau.", effects: { sondages: 0, acceptabilite: 0, soutienParti: 0, tresorerie: -100, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_47", title: "La menace du cyber-groupe Anonymous", source: "reseau_y",
        text: "Des hackeurs menacent de publier ton historique de recherche Internet si tu ne verses pas 100 000 euros à une association.",
        choices: [
            { text: "Refuser net : 'Qu'ils publient, je n'ai rien à cacher !'", effects: { sondages: +1, acceptabilite: +1, soutienParti: +2, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Payer en douce avec l'argent de la campagne.", effects: { sondages: -1, acceptabilite: -1, soutienParti: -2, tresorerie: -10000, targetIdeology: "all", targetDelta: 0 } },
            { text: "Dormir avec la lumière allumée pendant trois nuits.", effects: { sondages: 0, acceptabilite: 0, soutienParti: 0, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_48", title: "L'irruption d'un chat errant sur le plateau", source: "flemmetv",
        text: "En plein direct, un chat errant s'installe sur tes genoux et refuse de bouger pendant ton discours solennel.",
        choices: [
            { text: "Le caresser amoureusement : 'Voici mon nouveau Premier Ministre.'", effects: { sondages: +4, acceptabilite: +4, soutienParti: +1, tresorerie: 0, targetIdeology: "centre", targetDelta: +2 } },
            { text: "Le jeter brutalement hors du champ des caméras.", effects: { sondages: -5, acceptabilite: -5, soutienParti: -3, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Ignorer le félin et parler de la dette publique.", effects: { sondages: -1, acceptabilite: -1, soutienParti: 0, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_49", title: "Le grand sondage des régionales", source: "coulisses",
        text: "Ton directeur de campagne déboule dans ton bureau en larmes : vous êtes devancés par un candidat virtuel généré par IA.",
        choices: [
            { text: "Proposer de fusionner le parti avec l'intelligence artificielle.", effects: { sondages: +2, acceptabilite: -2, soutienParti: -2, tresorerie: 0, targetIdeology: "centre", targetDelta: -1 } },
            { text: "Mettre un grand coup de pied dans la machine à café.", effects: { sondages: 0, acceptabilite: -1, soutienParti: +2, tresorerie: -500, targetIdeology: "all", targetDelta: 0 } },
            { text: "Redoubler de promesses démagogiques.", effects: { sondages: +3, acceptabilite: -1, soutienParti: +1, tresorerie: -2000, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_50", title: "La polémique du pass culture pour les seniors", source: "actualite",
        text: "Tu proposes d'offrir des places de concert de metal aux octogénaires. L'idée fait jaser.",
        choices: [
            { text: "Maintenir : 'Les vieux ont le droit de headbanger !'", effects: { sondages: +2, acceptabilite: +1, soutienParti: +1, tresorerie: -3000, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Dire que c'était une blague de mauvais goût.", effects: { sondages: -2, acceptabilite: 0, soutienParti: -2, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Remplacer par des bons d'achat pour des boules Quies.", effects: { sondages: +1, acceptabilite: +2, soutienParti: 0, tresorerie: -1000, targetIdeology: "centre", targetDelta: +1 } }
        ]
    },
    {
        id: "evt_51", title: "L'incendie de la machine à café du QG", source: "coulisses",
        text: "La machine à expresso du QG de campagne prend feu, détruisant les derniers dossiers secrets de stratégie.",
        choices: [
            { text: "Y voir un signe mystique de la révolution imminente.", effects: { sondages: +1, acceptabilite: 0, soutienParti: +2, tresorerie: -800, targetIdeology: "gauche_radicale", targetDelta: +1 } },
            { text: "Accuser un sabotage de la part du parti adverse.", effects: { sondages: +2, acceptabilite: -1, soutienParti: +1, tresorerie: 0, targetIdeology: "centre", targetDelta: -1 } },
            { text: "Boire du café instantané de supermarché en pleurant.", effects: { sondages: -1, acceptabilite: +1, soutienParti: -1, tresorerie: -100, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_52", title: "Le grand loupé de la géolocalisation", source: "terrain",
        text: "Tu te trompes de ville et fais un meeting enflammé à Limoges en croyant être à Marseille.",
        choices: [
            { text: "Assumer : 'Limoges est le véritable cœur de Marseille !'", effects: { sondages: -3, acceptabilite: -3, soutienParti: -2, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "S'excuser en offrant des porcelaines locales à la foule.", effects: { sondages: 0, acceptabilite: +2, soutienParti: 0, tresorerie: -2000, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Virer immédiatement ton chauffeur GPS.", effects: { sondages: -1, acceptabilite: 0, soutienParti: +1, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_53", title: "Le scandale des subventions au golf", source: "pigeondechaine",
        text: "Le Pigeon Déchaîné révèle que tu passes tes dimanches à jouer au golf sur des terres protégées.",
        choices: [
            { text: "Répondre que le golf est un sport écologique car il y a de l'herbe.", effects: { sondages: -3, acceptabilite: -4, soutienParti: -1, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Offrir ton putter en or aux œuvres caritatives.", effects: { sondages: +2, acceptabilite: +2, soutienParti: -2, tresorerie: -1500, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Nier en bloc et menacer le journal de procès.", effects: { sondages: -1, acceptabilite: -2, soutienParti: +2, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_54", title: "La grève des stylos dans les bureaux de vote", source: "actualite",
        text: "Un syndicat de l'administration menace de confisquer les stylos bic le jour du scrutin.",
        choices: [
            { text: "Proposer que chaque électeur vienne avec sa plume d'oie.", effects: { sondages: 0, acceptabilite: +1, soutienParti: 0, tresorerie: 0, targetIdeology: "centre", targetDelta: 0 } },
            { text: "Accepter d'augmenter le budget stylos de l'État de 15%.", effects: { sondages: +1, acceptabilite: 0, soutienParti: +1, tresorerie: -5000, targetIdeology: "centre", targetDelta: 0 } },
            { text: "Crier à la subversion démocratique.", effects: { sondages: +2, acceptabilite: -2, soutienParti: +2, tresorerie: 0, targetIdeology: "gauche_radicale", targetDelta: -1 } }
        ]
    },
    {
        id: "evt_55", title: "Le bad buzz du pull de Noël moche", source: "reseau_y",
        text: "Une photo de toi portant un pull de Noël avec des rennes alcooliques fuite sur Y en plein mois de juin.",
        choices: [
            { text: "Assumer le style et lancer une collection dérivée pour le parti.", effects: { sondages: +3, acceptabilite: +3, soutienParti: +1, tresorerie: +2000, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Dire que c'est un photomontage ourdé par la Corée du Nord.", effects: { sondages: -2, acceptabilite: -2, soutienParti: 0, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Supprimer ton compte Y définitivement.", effects: { sondages: -1, acceptabilite: 0, soutienParti: -1, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_56", title: "L'invitation au festival de Cannes", source: "flemmetv",
        text: "Tu montes les marches à Cannes. Sur le tapis rouge, tu fais un signe de croix républicain maladroit.",
        choices: [
            { text: "Saluer la foule comme si tu venais de remporter la Palme d'or.", effects: { sondages: +1, acceptabilite: -1, soutienParti: 0, tresorerie: 0, targetIdeology: "centre", targetDelta: 0 } },
            { text: "En profiter pour faire un discours politique de 20 minutes micro coupé.", effects: { sondages: -2, acceptabilite: -3, soutienParti: +2, tresorerie: 0, targetIdeology: "gauche_radicale", targetDelta: -1 } },
            { text: "Trébucher sur la robe d'une actrice célèbre.", effects: { sondages: -1, acceptabilite: +2, soutienParti: -1, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } }
        ]
    },
    {
        id: "evt_57", title: "La proposition de loi sur le droit à la paresse", source: "actualite",
        text: "Un député de ton camp dépose un texte pour constitutionnaliser la sieste obligatoire l'après-midi.",
        choices: [
            { text: "Soutenir le texte : 'La France qui pionne est une France qui gagne.'", effects: { sondages: +3, acceptabilite: -2, soutienParti: +3, tresorerie: 0, targetIdeology: "gauche_radicale", targetDelta: +2 } },
            { text: "Désavouer le député en direct sur FlemmeTV.", effects: { sondages: -2, acceptabilite: +2, soutienParti: -3, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Proposer un compromis : sieste uniquement le mercredi.", effects: { sondages: 0, acceptabilite: 0, soutienParti: 0, tresorerie: 0, targetIdeology: "centre", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_58", title: "Le bug de l'application de vote mobile", source: "coulisses",
        text: "L'application officielle de parrainage citoyen plante pendant 48 heures, bloquant des centaines de signatures.",
        choices: [
            { text: "Accuser un groupe de hackeurs extraterrestres.", effects: { sondages: 0, acceptabilite: -1, soutienParti: +1, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
            { text: "Payer un prestataire d'urgence pour tout réparer en catastrophe.", effects: { sondages: +1, acceptabilite: 0, soutienParti: 0, tresorerie: -5000, targetIdeology: "centre", targetDelta: 0 } },
            { text: "Hurler à la fraude électorale géante.", effects: { sondages: +2, acceptabilite: -2, soutienParti: +2, tresorerie: 0, targetIdeology: "gauche_radicale", targetDelta: -1 } }
        ]
    },
    {
        id: "evt_59", title: "La visite d'un refuge pour animaux de compagnie", source: "terrain",
        text: "Un poney un peu trop enthousiaste te mord l'épaule pendant une opération de com' bucolique.",
        choices: [
            { text: "Garder le sourire et dire que le poney a de bonnes intuitions politiques.", effects: { sondages: +3, acceptabilite: +3, soutienParti: 0, tresorerie: 0, targetIdeology: "centre", targetDelta: +1 } },
            { text: "Exiger l'abattage immédiat du poney rebelle.", effects: { sondages: -5, acceptabilite: -5, soutienParti: -2, tresorerie: 0, targetIdeology: "exteme_droite", targetDelta: -2 } },
            { text: "Pleurer en silence en se désinfectant à l'alcool.", effects: { sondages: -1, acceptabilite: +1, soutienParti: -1, tresorerie: -50, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    {
        id: "evt_60", title: "Le grand oral des patrons du CAC 40", source: "flemmetv",
        text: "Invité dans un cercle très fermé de grands patrons, on te demande ton avis sur la taxation des super-dividendes.",
        choices: [
            { text: "Leur dire droit dans les yeux qu'ils vont casquer.", effects: { sondages: +4, acceptabilite: -3, soutienParti: +4, tresorerie: -5000, targetIdeology: "centre", targetDelta: -2 } },
            { text: "Leur promettre des exonérations totales d'impôts.", effects: { sondages: -3, acceptabilite: -2, soutienParti: -4, tresorerie: +10000, targetIdeology: "gauche_radicale", targetDelta: -2 } },
            { text: "Leur chanter une comptine pour éviter le sujet.", effects: { sondages: -1, acceptabilite: -1, soutienParti: -1, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } }
        ]
    },
    ...Array.from({ length: 40 }, (_, index) => {
        const idNum = 61 + index;
        return {
            id: `evt_${idNum}`,
            title: `Scandale ou Coup de Com' n°${idNum}`,
            source: index % 3 === 0 ? "pigeondechaine" : (index % 3 === 1 ? "reseau_y" : "flemmetv"),
            text: `Une nouvelle tempête médiatique secoue l'équipe de campagne à l'approche du scrutin final (Dossier critique #${idNum}). Quelle est ta stratégie de riposte ?`,
            choices: [
                { text: "Faire diversion en proposant une mesure choc absurde.", effects: { sondages: +2, acceptabilite: -2, soutienParti: +1, tresorerie: -1000, targetIdeology: "centre", targetDelta: -1 } },
                { text: "Faire le dos rond et attendre que la tempête passe.", effects: { sondages: -1, acceptabilite: +1, soutienParti: -1, tresorerie: 0, targetIdeology: "all", targetDelta: 0 } },
                { text: "Sortir un dossier compromettant sur le candidat adverse.", effects: { sondages: +3, acceptabilite: -3, soutienParti: +2, tresorerie: -2000, targetIdeology: "centre", targetDelta: -2 } }
            ]
        };
    })
];

// --- 25 ÉVÉNEMENTS SPÉCIFIQUES PAR PARTI ---

export const SPECIFIC_EVENTS = {
    lfi_bis: Array.from({ length: 25 }, (_, index) => {
        const idNum = index + 1;
        const examples = [
            { title: "LFI : La polémique de la cravate", text: "Refus de porter la cravate à l'Assemblée, provoquant un synode national.", choices: [{ text: "Assumer la rupture vestimentaire.", effects: { sondages: +2, acceptabilite: -2, soutienParti: +2, targetIdeology: "centre", targetDelta: -1 } }, { text: "Mettre un pull col roulé bio.", effects: { sondages: -1, acceptabilite: +1, soutienParti: -1, targetIdeology: "gauche_ecolo", targetDelta: +1 } }] },
            { title: "LFI : Meeting sur le marché populaire", text: "Distribution de tracts sur un marché en banlieue sur fond de musique contestataire.", choices: [{ text: "Haranguer la foule contre les profiteurs.", effects: { sondages: +3, acceptabilite: -1, soutienParti: +2, targetIdeology: "centre_gauche", targetDelta: -1 } }, { text: "Discuter calmement boulangerie et pouvoir d'achat.", effects: { sondages: +1, acceptabilite: +2, soutienParti: 0, targetIdeology: "centre", targetDelta: +1 } }] },
            { title: "LFI : Le blocage de l'université", text: "Des étudiants occupent un amphi pour protester contre la sélection.", choices: [{ text: "Venir livrer des pizzas aux grévistes en direct sur Y.", effects: { sondages: +2, acceptabilite: -1, soutienParti: +3, targetIdeology: "centre", targetDelta: -1 } }, { text: "Appeler à l'apaisement universitaire.", effects: { sondages: -1, acceptabilite: +2, soutienParti: -2, targetIdeology: "droite", targetDelta: +1 } }] }
        ];
        const ex = examples[index % examples.length];
        return {
            id: `lfi_${idNum}`,
            title: `${ex.title} (Volet ${idNum})`,
            source: index % 2 === 0 ? "reseau_y" : "flemmetv",
            text: `${ex.text} (Épisode spécifique LFI n°${idNum})`,
            choices: ex.choices
        };
    }),

    rn_bis: Array.from({ length: 25 }, (_, index) => {
        const idNum = index + 1;
        const examples = [
            { title: "RN : Le marché de Noël traditionnel", text: "Polémique sur l'interdiction des crèches dans une mairie frontiste.", choices: [{ text: "Défendre l'identité chrétienne de la France.", effects: { sondages: +3, acceptabilite: -2, soutienParti: +3, targetIdeology: "gauche_radicale", targetDelta: -1 } }, { text: "Minimiser l'affaire pour faire modéré.", effects: { sondages: -2, acceptabilite: +1, soutienParti: -2, targetIdeology: "exteme_droite", targetDelta: -1 } }] },
            { title: "RN : Patrouille nocturne en zone rurale", text: "Interview terrain dans un village touché par les cambriolages.", choices: [{ text: "Exiger la tolérance zéro et l'armement des maires.", effects: { sondages: +3, acceptabilite: -2, soutienParti: +2, targetIdeology: "gauche_radicale", targetDelta: -1 } }, { text: "Proposer plus de médiateurs sociaux.", effects: { sondages: -2, acceptabilite: +1, soutienParti: -2, targetIdeology: "exteme_droite", targetDelta: -1 } }] }
        ];
        const ex = examples[index % examples.length];
        return {
            id: `rn_${idNum}`,
            title: `${ex.title} (Volet ${idNum})`,
            source: "vraiesnews",
            text: `${ex.text} (Épisode spécifique RN n°${idNum})`,
            choices: ex.choices
        };
    }),

    lrep_bis: Array.from({ length: 25 }, (_, index) => {
        const idNum = index + 1;
        const examples = [
            { title: "Horizons : Le plan de réformes 'en même temps'", text: "Annonce d'une mesure technocratique complexe incompréhensible.", choices: [{ text: "Assumer la complexité pédagogique.", effects: { sondages: -1, acceptabilite: +2, soutienParti: +1, targetIdeology: "gauche_radicale", targetDelta: -1 } }, { text: "Simplifier à l'extrême en mode start-up nation.", effects: { sondages: +2, acceptabilite: -1, soutienParti: 0, targetIdeology: "centre", targetDelta: +1 } }] }
        ];
        const ex = examples[index % examples.length];
        return {
            id: `lrep_${idNum}`,
            title: `${ex.title} (Volet ${idNum})`,
            source: "flemmetv",
            text: `${ex.text} (Épisode spécifique Horizons n°${idNum})`,
            choices: ex.choices
        };
    }),

    lr_bis: Array.from({ length: 25 }, (_, index) => {
        const idNum = index + 1;
        const examples = [
            { title: "Les Rescapés : Le comité des vieux barons", text: "Réunion tendue avec les caciques du parti dans un salon feutré parisien.", choices: [{ text: "Promettre le retour du service militaire et du col dur.", effects: { sondages: +2, acceptabilite: -1, soutienParti: +3, targetIdeology: "exteme_droite", targetDelta: -1 } }, { text: "Ouvrir vers le centre libéral.", effects: { sondages: -1, acceptabilite: +1, soutienParti: -2, targetIdeology: "centre", targetDelta: +1 } }] }
        ];
        const ex = examples[index % examples.length];
        return {
            id: `lr_${idNum}`,
            title: `${ex.title} (Volet ${idNum})`,
            source: "laplanete",
            text: `${ex.text} (Épisode spécifique LR n°${idNum})`,
            choices: ex.choices
        };
    })
};