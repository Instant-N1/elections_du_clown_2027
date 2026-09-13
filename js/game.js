// js/game.js

import { PARTIES } from './data/parties.js';
import { GENERAL_EVENTS, SPECIFIC_EVENTS } from './data/events.js';

export const Game = {
    currentParty: null,
    stats: { sondages: 0, acceptabilite: 0, soutienParti: 0, tresorerie: 0 },
    trends: { sondages: 'neutral', acceptabilite: 'neutral', soutienParti: 'neutral', tresorerie: 'neutral' },
    
    allCandidatesPolls: {},
    pollHistory: {},
    currentTurn: 1,
    maxTurns: 20,
    currentEvent: null,
    usedEventIds: [],
    availableEventsPool: [],

    parrainages: 0,
    militantsLigne: 'equilibre',
    actionsTaken: {
        scissionRN: false,
        primairesLR: false,
        mergedParties: [],
        financementOcculte: false
    },

    tweetsFeed: [],
    pendingScriptedEvent: null,

    initGame(partyId) {
        const partyData = PARTIES.find(p => p.id === partyId);
        if (!partyData) return false;

        this.currentParty = partyData;
        this.stats = { ...partyData.stats };
        this.trends = { sondages: 'neutral', acceptabilite: 'neutral', soutienParti: 'neutral', tresorerie: 'neutral' };
        this.currentTurn = 1;
        this.parrainages = Math.floor(Math.random() * 150) + 200;
        this.militantsLigne = 'equilibre';
        this.usedEventIds = [];
        this.actionsTaken = { scissionRN: false, primairesLR: false, mergedParties: [], financementOcculte: false };
        this.pendingScriptedEvent = null;

        this.allCandidatesPolls = {};
        this.pollHistory = {};
        
        PARTIES.forEach(p => {
            this.allCandidatesPolls[p.name] = p.stats.sondages;
            this.pollHistory[p.name] = [p.stats.sondages];
        });

        const specificList = SPECIFIC_EVENTS[partyId] || [];
        this.availableEventsPool = [...GENERAL_EVENTS, ...specificList];

        // Initialisation du flux de tweets de départ
        this.updateTweetsFeed("Lancement de la campagne", "Déclaration de candidature");

        return true;
    },

    getRandomEvent() {
        if (this.pendingScriptedEvent) {
            const ev = this.pendingScriptedEvent;
            this.pendingScriptedEvent = null;
            return ev;
        }

        if (this.currentTurn === 5) {
            return this.getTour5ClimateEvent();
        }

        if (this.currentTurn === 10) {
            return this.getTour10ScandalEvent();
        }

        if (this.currentTurn === 15) {
            return this.getTour15GrandDebatEvent();
        }

        if (this.currentTurn === 18 && this.stats.acceptabilite < 15) {
            this.triggerBarrageRepublicain();
        }

        const remaining = this.availableEventsPool.filter(e => !this.usedEventIds.includes(e.id));
        if (remaining.length === 0) {
            this.usedEventIds = [];
            return this.getRandomEvent();
        }

        const randomIndex = Math.floor(Math.random() * remaining.length);
        this.currentEvent = remaining[randomIndex];
        this.usedEventIds.push(this.currentEvent.id);
        
        return this.currentEvent;
    },

    // --- GÉNÉRATEUR DES 5 TWEETS THÉMATIQUES ---
    updateTweetsFeed(eventTitle, lastChoiceText = "") {
        const candidateName = this.currentParty.candidate;

        // 1. Tweet du média absurde ("Média-sans-avenir")
        const mediaAbsurdePool = [
            "Yvelines - Un homme de 77 ans se présente aux urgences avec un nain de jardin coincé dans le rectum.",
            "Brive-la-Gaillarde : Il tente de braquer une boulangerie avec une baguette surgelée, le boulanger lui offre un café.",
            "Marseille - Un pigeon interpellé en possession de trois barrettes de résine et d'un smartphone crypté.",
            "Pas-de-Calais : Une collision entre deux tracteurs bloque l'A26 pendant 4 heures, les conducteurs refusaient de bouger pour ne pas rater l'apéro."
        ];
        const tweetMedia = {
            author: "Média-sans-avenir",
            handle: "@MediasSansAvenir",
            text: mediaAbsurdePool[Math.floor(Math.random() * mediaAbsurdePool.length)],
            likes: Math.floor(Math.random() * 4500) + 120,
            rts: Math.floor(Math.random() * 800) + 20,
            replies: Math.floor(Math.random() * 300) + 10
        };

        // 2. Tweet de l'institut de sondage cynique ("Opinion Whey")
        const topCandidate = Object.entries(this.allCandidatesPolls).sort((a, b) => b[1] - a[1])[0];
        const tweetOpinion = {
            author: "Opinion Whey",
            handle: "@OpinionWhey_Off",
            text: `📊 Dernier tracking : ${topCandidate[0]} s'envole à ${topCandidate[1]}%. Pendant ce temps, ${candidateName} stagne dans l'indifférence générale. C'est la débandade.`,
            likes: Math.floor(Math.random() * 1200) + 50,
            rts: Math.floor(Math.random() * 200) + 5,
            replies: Math.floor(Math.random() * 150) + 12
        };

        // 3. Tweet du militant pro-candidat
        let proAuthor = "FanDePolitique2027";
        let proHandle = "@fan_2027";
        let proText = `Total soutien à ${candidateName} face aux hyènes des plateaux télé ! On va tout casser !`;

        if (this.currentParty.id === "lfi_bis") {
            proAuthor = "Révolutionnaire 🔻";
            proHandle = "@triangle_rouge_75";
            proText = "Je reviens de la fête de l'Huma c'était insaaaaaneee 🔥 Dommage que les fachocialistes soient venus squatter, on a dû sortir les piques à brochettes 😡";
        } else if (this.currentParty.id === "rn_bis") {
            proAuthor = "Patriote du 89 🇫🇷";
            proHandle = "@coq_bleu_marine";
            proText = `Je croise ${candidateName} sur le marché de Vierzon, l'accueil est fraternel ! Le système tremble, la France aux Français ! ⚔️`;
        } else if (this.currentParty.id === "lr_bis") {
            proAuthor = "Gérard_LR_Officiel";
            proHandle = "@gaulliste_1982";
            proText = `Enfin un peu de sérieux et de rigueur budgétaire avec ${candidateName}. Il est temps de remettre le pays au travail et d'arrêter les assistés. 🏛️`;
        } else if (this.currentParty.id === "lrep_bis") {
            proAuthor = "Marcheur Pragmatique 🟡";
            proHandle = "@en_marche_2027";
            proText = `Seul ${candidateName} propose des réformes systémiques et de bon sens pour libérer les énergies. Le "en même temps" triomphera ! 🚀`;
        }

        const tweetPro = {
            author: proAuthor,
            handle: proHandle,
            text: proText,
            likes: Math.floor(Math.random() * 800) + 88,
            rts: Math.floor(Math.random() * 150) + 10,
            replies: Math.floor(Math.random() * 45) + 2
        };

        // 4. Tweet du troll random du web (vanne de merde)
        const trollPool = [
            "Quelqu'un sait si le kebab de la gare est ouvert un dimanche soir de scrutin ?",
            "Mon chat a voté pour un bout de jambon aux primaires, il a plus de charisme que la moitié des candidats.",
            "J'ai rêvé que j'étais ministre de l'Intérieur, j'ai passé mon mandat à interdire les trottinettes électriques. J'étais heureux.",
            "Franchement entre faire la queue pour voter et faire une sieste, mon choix est vite fait."
        ];
        const tweetTroll = {
            author: "Penseur du Dimanche",
            handle: "@troll_du_net",
            text: trollPool[Math.floor(Math.random() * trollPool.length)],
            likes: Math.floor(Math.random() * 300) + 12,
            rts: Math.floor(Math.random() * 40) + 1,
            replies: Math.floor(Math.random() * 10) + 1
        };

        // 5. Tweet critique sur l'événement ou le dernier choix
        let critiqueText = `Je viens de lire la dernière sortie de ${candidateName} sur "${eventTitle}", c'est un naufrage intellectuel complet.`;
        if (lastChoiceText) {
            critiqueText = `Comment on peut oser dire "${lastChoiceText}" en plein 21ème siècle ? ${candidateName} est complètement déconnecté.`;
        }
        const tweetCritique = {
            author: "Éditorialiste Aigri",
            handle: "@aigri_politique",
            text: critiqueText,
            likes: Math.floor(Math.random() * 2500) + 400,
            rts: Math.floor(Math.random() * 600) + 50,
            replies: Math.floor(Math.random() * 500) + 80
        };

        this.tweetsFeed = [tweetMedia, tweetOpinion, tweetPro, tweetTroll, tweetCritique];
    },

    ajouterTweetPerso(texte) {
        if (this.stats.tresorerie < 5000) {
            return { success: false, msg: "Trésorerie insuffisante (5 000 € requis) pour sponsoriser votre tweet !" };
        }
        this.stats.tresorerie -= 5000;
        this.stats.acceptabilite += 1;

        const nouveauTweet = {
            author: `${this.currentParty.candidate} (Vous)`,
            handle: `@${this.currentParty.id}_off`,
            text: texte,
            likes: Math.floor(Math.random() * 400) + 50,
            rts: Math.floor(Math.random() * 80) + 5,
            replies: Math.floor(Math.random() * 40) + 3
        };

        // On insère le tweet perso en haut du fil et on garde 5 tweets max
        this.tweetsFeed.unshift(nouveauTweet);
        if (this.tweetsFeed.length > 5) this.tweetsFeed.pop();

        return { success: true, msg: "Tweet publié avec succès (-5 000 €) !" };
    },

    obtenirFinancement(type) {
        if (type === 'banque') {
            if (this.stats.acceptabilite < 35) {
                return { success: false, msg: "Refus net de la banque ! Votre acceptabilité est trop faible." };
            }
            this.stats.tresorerie += 40000;
            this.stats.acceptabilite -= 3;
            return { success: true, msg: "Emprunt bancaire accordé : +40 000 €." };
        }
        if (type === 'militants') {
            if (this.stats.soutienParti < 60) {
                return { success: false, msg: "Soutien du parti insuffisant (60% requis) !" };
            }
            this.stats.tresorerie += 25000;
            this.stats.soutienParti -= 10;
            return { success: true, msg: "Levée de fonds militante réussie : +25 000 €." };
        }
        if (type === 'occulte') {
            if (this.actionsTaken.financementOcculte) return { success: false, msg: "Déjà fait appel à des parrains louches !" };
            this.actionsTaken.financementOcculte = true;
            this.stats.tresorerie += 75000;

            if (Math.random() < 0.5) {
                this.stats.sondages = Math.max(1, this.stats.sondages - 5);
                this.stats.acceptabilite -= 15;
                return { success: true, leaked: true, msg: "Scandale ! Le Pigeon Déchaîné a révélé vos fonds occultes ! (+75 000 € mais -5% sondages, -15% acceptabilité)." };
            } else {
                return { success: true, leaked: false, msg: "Fonds occultes reçus discrètement : +75 000 €." };
            }
        }
        return { success: false, msg: "Action inconnue." };
    },

    changerLigneMilitante(nouvelleLigne) {
        this.militantsLigne = nouvelleLigne;
        if (nouvelleLigne === 'mou') {
            this.stats.acceptabilite += 3;
            this.stats.soutienParti -= 5;
            return "Consigne modérée : +3% acceptabilité, -5% soutien interne.";
        } else if (nouvelleLigne === 'hard') {
            this.stats.sondages += 2;
            this.stats.acceptabilite -= 5;
            this.stats.soutienParti += 5;
            return "Consigne offensive : +2% sondages, +5% soutien, -5% acceptabilité.";
        } else if (nouvelleLigne === 'centriste') {
            this.stats.acceptabilite += 5;
            this.stats.soutienParti -= 12;
            return "Ligne sociale-démocrate : +5% acceptabilité, -12% soutien du parti.";
        }
        return "Ligne équilibrée.";
    },

    getTour5ClimateEvent() {
        const pool = [
            {
                id: "clim_1", title: "Météo Actu : Crise boursière mondiale", source: "actualite",
                text: "Un krach boursier secoue Wall Street. La panique financière s'empare de l'Europe.",
                choices: [
                    { text: "Appeler à la régulation stricte des marchés.", effects: { sondages: +2, acceptabilite: +1, targetIdeology: "gauche_radicale", targetDelta: +1 } },
                    { text: "Rassurer les investisseurs en promettant des baisses d'impôts.", effects: { sondages: +1, acceptabilite: -1, targetIdeology: "centre", targetDelta: +2 } }
                ]
            },
            {
                id: "clim_2", title: "Météo Actu : Vague d'attentats et climat sécuritaire", source: "actualite",
                text: "Une série d'incidents met la sécurité au cœur de toutes les discussions médiatiques.",
                choices: [
                    { text: "Exiger l'état d'urgence immédiat et la fermeté.", effects: { sondages: +3, acceptabilite: -1, targetIdeology: "exteme_droite", targetDelta: +2 } },
                    { text: "Dénoncer les amalgames et prôner la prévention.", effects: { sondages: -1, acceptabilite: +2, targetIdeology: "gauche_radicale", targetDelta: +1 } }
                ]
            },
            {
                id: "clim_3", title: "Météo Actu : Canicule et sécheresse inédite", source: "actualite",
                text: "L'eau potable est rationnée dans 40 départements. L'urgence climatique s'impose.",
                choices: [
                    { text: "Proposer un plan vert radical de rationnement de l'eau.", effects: { sondages: +2, acceptabilite: +1, targetIdeology: "gauche_ecolo", targetDelta: +2 } },
                    { text: "Aider les agriculteurs à forer sans compter.", effects: { sondages: +1, acceptabilite: -1, targetIdeology: "droite", targetDelta: +1 } }
                ]
            },
            {
                id: "clim_4", title: "Météo Actu : Pénurie mondiale de café", source: "flemmetv",
                text: "Les réserves internationales de grains de café s'effondrent. Les fonctionnaires menacent de bloquer le pays.",
                choices: [
                    { text: "Faire de la distribution gratuite de café un droit constitutionnel.", effects: { sondages: +3, acceptabilite: +2, targetIdeology: "all", targetDelta: 0 } },
                    { text: "Dire aux gens de se mettre à la chicorée.", effects: { sondages: -3, acceptabilite: -3, targetIdeology: "centre", targetDelta: +1 } }
                ]
            },
            {
                id: "clim_5", title: "Météo Actu : Ovni aperçu au-dessus de l'Élysée", source: "pigeondechaine",
                text: "Une soucoupe volante stationne au-dessus de la capitale, diffusant un remix techno de la Marseillaise.",
                choices: [
                    { text: "Accueillir les extraterrestres pour négocier une alliance intergalactique.", effects: { sondages: +4, acceptabilite: -2, targetIdeology: "all", targetDelta: 0 } },
                    { text: "Tirer au mortier d'artifice sur la soucoupe.", effects: { sondages: +1, acceptabilite: -2, targetIdeology: "exteme_droite", targetDelta: +1 } }
                ]
            }
        ];
        return pool[Math.floor(Math.random() * pool.length)];
    },

    getTour10ScandalEvent() {
        const sorted = Object.entries(this.allCandidatesPolls).sort((a, b) => b[1] - a[1]);
        const favoriName = sorted[0][0];
        const isPlayerFavori = (favoriName === this.currentParty.name);

        if (isPlayerFavori) {
            return {
                id: "scandale_fav", title: "Scandale d'État : La tempête s'abat sur vous !", source: "pigeondechaine",
                text: `Coup de tonnerre au tour 10 : Le Pigeon Déchaîné révèle une affaire compromettante vous concernant. Vous êtes le favori !`,
                choices: [
                    { text: "Payer un cabinet de crise pour étouffer l'affaire (-25 000 €).", effects: { sondages: -10, acceptabilite: -5, tresorerie: -25000 }, scandalLoss: 10 },
                    { text: "Assumer et faire diversion en proposant une réforme choc (-25% de pertes).", effects: { sondages: -25, acceptabilite: -10, soutienParti: -10 }, scandalLoss: 25 },
                    { text: "Faire le dos rond et accuser un complot (-40% de pertes massives).", effects: { sondages: -40, acceptabilite: -20, soutienParti: -20 }, scandalLoss: 40 }
                ],
                isPlayerScandal: true,
                favoriName: favoriName
            };
        } else {
            return {
                id: "scandale_adv", title: `Scandale : ${favoriName} dans la tourmente !`, source: "pigeondechaine",
                text: `Coup de théâtre au tour 10 : Le favori des sondages (${favoriName}) est éclaboussé par un scandale financier.`,
                choices: [
                    { text: "Accabler le favori sur tous les plateaux télé.", effects: { sondages: +6, acceptabilite: +2, targetIdeology: "all", targetDelta: 0 } },
                    { text: "Jouer les sages : 'La justice fera son travail.'", effects: { sondages: +2, acceptabilite: +5, targetIdeology: "centre", targetDelta: +1 } }
                ],
                isPlayerScandal: false,
                favoriName: favoriName
            };
        }
    },

    applyScandalLoss(lossPercent) {
        const favoriKey = this.currentParty.name;
        const currentScore = this.allCandidatesPolls[favoriKey];
        const lostPoints = Math.floor(currentScore * (lossPercent / 100));
        
        this.stats.sondages = Math.max(1, this.stats.sondages - lostPoints);
        this.allCandidatesPolls[favoriKey] = this.stats.sondages;

        const familyLoss = Math.floor(lostPoints * 0.70);
        const remainingLoss = lostPoints - familyLoss;

        if (this.currentParty.id === "rn_bis") {
            const rScore = this.allCandidatesPolls["Rien de nouveau !"] || 0;
            this.allCandidatesPolls["Rien de nouveau !"] = rScore + Math.floor(lostPoints * 0.30);
            const lrScore = this.allCandidatesPolls["Les Rescapés"] || 0;
            this.allCandidatesPolls["Les Rescapés"] = lrScore + (lostPoints - Math.floor(lostPoints * 0.30));
        } else {
            const familyParties = PARTIES.filter(p => p.id !== this.currentParty.id && p.ideology === this.currentParty.ideology && this.allCandidatesPolls[p.name] > 0);
            if (familyParties.length > 0) {
                const share = Math.floor(familyLoss / familyParties.length);
                familyParties.forEach(p => {
                    this.allCandidatesPolls[p.name] = (this.allCandidatesPolls[p.name] || 0) + share;
                });
            } else {
                this.redistributeToTopAdversaries(familyLoss);
            }
            this.redistributeToTopAdversaries(remainingLoss);
        }
    },

    redistributeToTopAdversaries(points) {
        const sorted = Object.entries(this.allCandidatesPolls)
            .filter(item => item[0] !== this.currentParty.name && item[1] > 0)
            .sort((a, b) => b[1] - a[1]);

        const top3 = sorted.slice(0, 3);
        if (top3.length > 0) {
            const share = Math.floor(points / top3.length);
            top3.forEach(([name]) => {
                this.allCandidatesPolls[name] = (this.allCandidatesPolls[name] || 0) + share;
            });
        }
    },

    getTour15GrandDebatEvent() {
        return {
            id: "grand_debat_15", title: "Le Grand Débat Présidentiel (Tour 15)", source: "flemmetv",
            text: "C'est le moment charnière de la campagne. Le Grand Débat national commence. 5 thématiques majeures s'enchaînent.",
            isGrandDebat: true,
            currentDebatIndex: 0,
            debatQuestions: [
                { theme: "Sécurité", desc: "La question de l'autorité de l'État et des violences urbaines est posée." },
                { theme: "Immigration", desc: "Le débat glisse sur les frontières et les flux migratoires." },
                { theme: "Écologie", desc: "Comment concilier fin du monde et fin du mois ?" },
                { theme: "Chômage", desc: "Que faire du plein emploi et des allocations ?" },
                { theme: "Pouvoir d'achat", desc: "Inflation, salaires et taxation des profits : quelle est votre recette ?" }
            ]
        };
    },

    triggerBarrageRepublicain() {
        if (this.stats.acceptabilite >= 15) return;

        const favoriKey = Object.entries(this.allCandidatesPolls).sort((a, b) => b[1] - a[1])[0][0];
        if (favoriKey !== this.currentParty.name) return;

        const ratio = this.stats.sondages > 0 ? (this.stats.soutienParti / 100) : 1;
        const lostPoints = Math.floor(this.stats.sondages * (1 - ratio));

        this.stats.sondages = Math.max(1, this.stats.sondages - lostPoints);
        this.allCandidatesPolls[this.currentParty.name] = this.stats.sondages;

        if (this.currentParty.id === "rn_bis") {
            const rLoss = Math.floor(lostPoints * 0.30);
            const lrLoss = lostPoints - rLoss;
            this.allCandidatesPolls["Rien de nouveau !"] = (this.allCandidatesPolls["Rien de nouveau !"] || 0) + rLoss;
            this.allCandidatesPolls["Les Rescapés"] = (this.allCandidatesPolls["Les Rescapés"] || 0) + lrLoss;
        } else if (["droite", "exteme_droite", "centre"].includes(this.currentParty.ideology)) {
            const leftParties = PARTIES.filter(p => ["gauche_radicale", "gauche_ecolo", "gauche_populaire", "centre_gauche"].includes(p.ideology) && this.allCandidatesPolls[p.name] !== undefined);
            if (leftParties.length > 0) {
                const share = Math.floor(lostPoints / leftParties.length);
                leftParties.forEach(p => {
                    this.allCandidatesPolls[p.name] = (this.allCandidatesPolls[p.name] || 0) + share;
                });
            }
        }
        
        alert(`⚡ BARRAGE RÉPUBLICAIN (Tour 18) ! Votre acceptabilité est catastrophique (< 15%). Vous perdez ${lostPoints}% d'intentions de vote !`);
    },

    applyChoice(choiceIndex) {
        if (!this.currentEvent || !this.currentEvent.choices[choiceIndex]) return;

        const choice = this.currentEvent.choices[choiceIndex];
        const effects = choice.effects;

        this.trends.sondages = (effects.sondages || 0) > 0 ? 'up' : ((effects.sondages || 0) < 0 ? 'down' : 'neutral');
        this.trends.acceptabilite = (effects.acceptabilite || 0) > 0 ? 'up' : ((effects.acceptabilite || 0) < 0 ? 'down' : 'neutral');
        this.trends.soutienParti = (effects.soutienParti || 0) > 0 ? 'up' : ((effects.soutienParti || 0) < 0 ? 'down' : 'neutral');
        this.trends.tresorerie = (effects.tresorerie || 0) > 0 ? 'up' : ((effects.tresorerie || 0) < 0 ? 'down' : 'neutral');

        this.stats.sondages += effects.sondages || 0;
        this.stats.acceptabilite += effects.acceptabilite || 0;
        this.stats.soutienParti += effects.soutienParti || 0;
        this.stats.tresorerie += effects.tresorerie || 0;

        if (this.stats.sondages >= 41) {
            const surplus = this.stats.sondages - 40;
            this.stats.sondages = 40;
            this.stats.acceptabilite -= surplus * 5;
            this.stats.soutienParti -= 5;
        }

        this.stats.sondages = Math.max(1, Math.min(40, this.stats.sondages));
        this.stats.acceptabilite = Math.max(0, Math.min(100, this.stats.acceptabilite));
        this.stats.soutienParti = Math.max(0, Math.min(100, this.stats.soutienParti));

        this.allCandidatesPolls[this.currentParty.name] = this.stats.sondages;

        if (this.currentTurn <= 7) {
            const gainParrainages = Math.floor(Math.random() * 40) + 30;
            this.parrainages += gainParrainages;
        }

        if (this.currentParty.id === "rn_bis" && this.stats.sondages >= 38 && !this.actionsTaken.scissionRN) {
            const res = this.triggerRNScission();
            if (res.forced) alert(res.msg);
        }

        if (effects.targetIdeology && effects.targetDelta !== undefined) {
            PARTIES.forEach(p => {
                if (p.id !== this.currentParty.id) {
                    if (effects.targetIdeology === 'all' || p.ideology === effects.targetIdeology) {
                        let currentScore = this.allCandidatesPolls[p.name] || 5;
                        if (currentScore > 0) {
                            this.allCandidatesPolls[p.name] = Math.max(1, currentScore + effects.targetDelta);
                        }
                    }
                }
            });
        }

        PARTIES.forEach(p => {
            if (p.id !== this.currentParty.id && (this.allCandidatesPolls[p.name] || 0) > 0) {
                const fluct = Math.floor(Math.random() * 3) - 1;
                this.allCandidatesPolls[p.name] = Math.max(1, (this.allCandidatesPolls[p.name] || 5) + fluct);
            }
        });

        let totalSum = 0;
        const candidateNames = Object.keys(this.allCandidatesPolls);
        candidateNames.forEach(name => {
            totalSum += (this.allCandidatesPolls[name] || 0);
        });

        if (totalSum !== 100) {
            const diff = 100 - totalSum;
            const targetAdversary = candidateNames.filter(n => n !== this.currentParty.name && (this.allCandidatesPolls[n] || 0) > 0)[0];
            if (targetAdversary) {
                this.allCandidatesPolls[targetAdversary] = Math.max(1, (this.allCandidatesPolls[targetAdversary] || 0) + diff);
            }
        }

        candidateNames.forEach(name => {
            if (!this.pollHistory[name]) this.pollHistory[name] = [];
            this.pollHistory[name].push(this.allCandidatesPolls[name]);
        });

        // Mise à jour du fil avec le dernier choix effectué
        this.updateTweetsFeed(this.currentEvent.title, choice.text);

        return this.checkGameOver();
    },

    finalizePollsWithUncertainty() {
        const candidateNames = Object.keys(this.allCandidatesPolls);
        candidateNames.forEach(name => {
            if (this.allCandidatesPolls[name] > 0) {
                const randomOffset = Math.floor(Math.random() * 5) - 2;
                this.allCandidatesPolls[name] = Math.max(1, this.allCandidatesPolls[name] + randomOffset);
            }
        });
        let total = 0;
        candidateNames.forEach(n => total += (this.allCandidatesPolls[n] || 0));
        if (total !== 100) {
            const diff = 100 - total;
            const target = candidateNames.filter(n => this.allCandidatesPolls[n] > 0)[0];
            if (target) this.allCandidatesPolls[target] += diff;
        }
    },

    triggerRNScission() {
        const rnKey = "Rassemblement des Nostalgiques";
        const rnScore = this.allCandidatesPolls[rnKey] || 0;

        if (this.currentParty.id === "rn_bis") {
            if (rnScore >= 38 && !this.actionsTaken.scissionRN) {
                const halfScore = Math.floor(rnScore / 2);
                this.allCandidatesPolls[rnKey] = halfScore;
                this.allCandidatesPolls["Indépendants (Scission RN)"] = halfScore;
                this.registerScissionCandidate();
                this.actionsTaken.scissionRN = true;
                return { success: true, forced: true, msg: "Catastrophe ! Jordan Barre-toi-de-la provoque une scission au RN." };
            }
            return { success: false, msg: "Seuil de 38% non atteint." };
        }

        if (this.actionsTaken.scissionRN) return { success: false, msg: "Scission déjà tentée !" };
        this.actionsTaken.scissionRN = true;

        if (Math.random() < 0.5) {
            const halfScore = Math.floor(rnScore / 2);
            this.allCandidatesPolls[rnKey] = halfScore;
            this.allCandidatesPolls["Indépendants (Scission RN)"] = halfScore;
            this.registerScissionCandidate();
            return { success: true, victory: true, msg: "Coup de maître ! Jordan Barre-toi-de-la fait scission !" };
        } else {
            const loss = Math.floor(this.stats.sondages * (this.currentParty.id === "lfi_bis" ? 0.25 : 0.70));
            this.stats.sondages = Math.max(1, this.stats.sondages - loss);
            this.allCandidatesPolls[this.currentParty.name] = this.stats.sondages;
            this.allCandidatesPolls[rnKey] += Math.floor(loss / 2);
            return { success: true, victory: false, msg: `Scission éventée ! Le RN vous accuse de putsch (-${loss}%).` };
        }
    },

    registerScissionCandidate() {
        if (!PARTIES.some(p => p.id === "indep_rn")) {
            PARTIES.push({
                id: "indep_rn",
                name: "Indépendants (Scission RN)",
                candidate: "Jordan Barre-toi-de-la",
                color: "#1a2a6c",
                logo: "[🔪]",
                ideology: "exteme_droite"
            });
        }
    },

    negotiateWithdrawal(partyName) {
        const targetPartyObj = PARTIES.find(p => p.name === partyName);
        if (!targetPartyObj || targetPartyObj.playable) return { success: false, msg: "Action impossible." };

        const allowedAllies = {
            rn_bis: ["reconquete"],
            lr_bis: ["renaissance", "reconquete"],
            lrep_bis: ["renaissance", "ps"],
            lfi_bis: ["eelv", "pcf"]
        };

        const myAllowedList = allowedAllies[this.currentParty.id] || [];
        if (!myAllowedList.includes(targetPartyObj.id)) {
            return { success: false, msg: "Ce candidat n'est pas de votre famille politique !" };
        }

        const currentScore = this.allCandidatesPolls[partyName] || 0;
        if (currentScore >= 5 || currentScore <= 0) return { success: false, msg: "Impossible de rallier ce parti." };
        if (this.actionsTaken.mergedParties.includes(partyName)) return { success: false, msg: "Déjà négocié !" };

        this.stats.sondages += currentScore;
        this.allCandidatesPolls[this.currentParty.name] = this.stats.sondages;
        this.allCandidatesPolls[partyName] = 0;

        this.stats.acceptabilite -= 10;
        this.stats.tresorerie -= 8000;
        this.stats.soutienParti -= 15;

        this.actionsTaken.mergedParties.push(partyName);
        return { success: true, msg: `Accord scellé avec ${targetPartyObj.candidate} ! Ses ${currentScore}% vous sont acquis.` };
    },

    triggerPrimairesLR() {
        if (this.actionsTaken.primairesLR) return { success: false, msg: "Primaire déjà tentée !" };
        if (this.currentParty.id !== "lr_bis") return { success: false, msg: "Réservé aux LR !" };

        this.actionsTaken.primairesLR = true;

        if (this.stats.soutienParti >= 40 && this.stats.acceptabilite >= 45) {
            const rScore = this.allCandidatesPolls["Rien de nouveau !"] || 3;
            const hScore = this.allCandidatesPolls["La République en Panne (Horizons)"] || 15;

            this.stats.sondages += (rScore + hScore);
            this.allCandidatesPolls[this.currentParty.name] = this.stats.sondages;
            this.allCandidatesPolls["Rien de nouveau !"] = 0;
            this.allCandidatesPolls["La République en Panne (Horizons)"] = 0;

            return { success: true, victory: true, msg: "Triomphe à la Primaire ! Vos rivaux se retirent." };
        } else {
            return { success: true, victory: false, msg: "Échec à la Primaire !" };
        }
    },

    checkGameOver() {
        if (this.currentTurn === 7 && this.parrainages < 500) {
            return { gameOver: true, reason: `Échec critique ! Au tour 7, vous n'avez que ${this.parrainages} parrainages sur 500. Élimination d'office !` };
        }
        if (this.stats.soutienParti <= 0) {
            return { gameOver: true, reason: "Coup de Jarnac ! Votre parti s'est effondré." };
        }
        if (this.stats.tresorerie < -50000) {
            return { gameOver: true, reason: "Faillite frauduleuse !" };
        }
        return { gameOver: false };
    },

    nextTurn() {
        this.currentTurn++;
        if (this.currentTurn > this.maxTurns) {
            this.finalizePollsWithUncertainty();
            return { finished: true };
        }
        return { finished: false };
    }
};