// js/data/medias.js

export const MEDIAS = {
    tv: [
        {
            id: "flemmetv",
            name: "FlemmeTV",
            type: "Chaîne TV",
            focus: "Économie & Société",
            description: "Le rendez-vous préféré des cadres sup et des retraités qui regardent la télé en buvant une tisane.",
            affinities: {
                lrep_bis: 1.5,  // Bonus
                lr_bis: 1.2,    // Léger bonus
                lfi_bis: 0.7,   // Malus
                rn_bis: 0.6     // Gros malus
            }
        },
        {
            id: "vraiesnews",
            name: "VraiesNews",
            type: "Chaîne TV",
            focus: "Sécurité & Immigration",
            description: "Ici, on frissonne devant un fait divers pendant que le compteur de la peur tourne en bas de l'écran.",
            affinities: {
                rn_bis: 1.8,    // Gros bonus
                lr_bis: 1.2,    // Léger bonus
                lrep_bis: 1.0,  // Neutre
                lfi_bis: 0.4    // Très gros malus
            }
        }
    ],
    press: [
        {
            id: "laplanete",
            name: "La Planète",
            type: "Journal",
            focus: "Société & Idées",
            description: "Le journal sérieux qui sent le papier glacé et la leçon de morale écolo-centriste.",
            affinities: {
                lfi_bis: 1.4,   // Bonus
                lrep_bis: 1.0,  // Neutre
                lr_bis: 0.7,    // Malus
                rn_bis: 0.5     // Malus
            }
        },
        {
            id: "pigeondechaine",
            name: "Le Pigeon Déchaîné",
            type: "Journal d'investigation",
            focus: "Scandales & Petits Papiers",
            description: "Il n'aime personne, a des taupes partout, et adore sortir des factures de homard à 4 jours du vote.",
            affinities: {
                lfi_bis: 0.8,
                lrep_bis: 0.8,
                lr_bis: 0.8,
                rn_bis: 0.8     // Tout le monde craint Le Pigeon
            }
        }
    ],
    social: [
        {
            id: "reseau_y",
            name: "Y",
            type: "Réseau Social",
            focus: "Bad buzz & Punchlines",
            description: "Le réseau d'Eli Must, où la nuance se fait écraser par 280 caractères de pur mépris.",
            affinities: {
                lfi_bis: 1.3,
                rn_bis: 1.3,    // Les extrêmes y font la pluie et le beau temps
                lrep_bis: 0.7,
                lr_bis: 0.6
            }
        },
        {
            id: "tictac",
            name: "Tic & Tac",
            type: "Réseau Social",
            focus: "Vidéos virales & IA",
            description: "Le royaume du grand écart mental : un tutoriel de cuisine bio juste après une vidéo de crash-test de scooter.",
            affinities: {
                lrep_bis: 1.2,
                rn_bis: 1.2,
                lfi_bis: 0.9,
                lr_bis: 0.5
            }
        }
    ]
};