// js/app.js

import { PARTIES } from './data/parties.js';
import { Game } from './game.js';
import { UI } from './ui.js';

const App = {
    currentEvent: null,

    init() {
        this.showPartySelection();
    },

    showPartySelection() {
        UI.renderPartySelection(PARTIES, (partyId) => {
            const success = Game.initGame(partyId);
            if (success) {
                this.loadNextEvent();
            }
        });
    },

    loadNextEvent() {
        this.currentEvent = Game.getRandomEvent();
        if (!this.currentEvent) {
            this.endGameDueToVictory("Campagne terminée !");
            return;
        }

        this.renderCurrentScreen();
    },

    renderCurrentScreen() {
        UI.renderGameScreen(Game, this.currentEvent, {
            onChoice: (choiceIndex) => {
                if (this.currentEvent.id === "scandale_fav") {
                    const chosen = this.currentEvent.choices[choiceIndex];
                    if (chosen.effects.tresorerie) Game.stats.tresorerie += chosen.effects.tresorerie;
                    Game.applyScandalLoss(chosen.effects.scandalLoss || 25);
                    alert(`Scandale géré ! Vous perdez ${chosen.effects.scandalLoss || 25}% d'intentions de vote, réparties selon les blocs politiques.`);
                } else {
                    const result = Game.applyChoice(choiceIndex);
                    if (result && result.gameOver) {
                        UI.renderGameOver(result.reason, false, Game, () => this.showPartySelection());
                        return;
                    }
                }
                onCustomTweet: (texte) => {
                const res = Game.ajouterTweetPerso(texte);
                alert(res.msg);
                this.renderCurrentScreen();
            },

                this.proceedNextTurn();
            },

            onDebatChoice: (choiceType) => {
                const q = this.currentEvent.debatQuestions[this.currentEvent.currentDebatIndex];
                
                if (choiceType === "serious") {
                    Game.stats.acceptabilite += 4;
                    alert(`Débat (${q.theme}) : Vous répondez avec sérieux. Votre acceptabilité grimpe (+4%).`);
                } else if (choiceType === "clash") {
                    const success = Math.random() < 0.5;
                    if (success) {
                        Game.stats.sondages += 4;
                        alert(`Débat (${q.theme}) : Clash réussi ! Vous marquez des points dans les sondages (+4%).`);
                    } else {
                        Game.stats.sondages = Math.max(1, Game.stats.sondages - 3);
                        alert(`Débat (${q.theme}) : Le clash s'est retourné contre vous ! Vous perdez 3% de sondages.`);
                    }
                } else if (choiceType === "politicien") {
                    const luck = Math.random();
                    if (luck > 0.5) {
                        Game.stats.sondages += 2;
                        alert(`Débat (${q.theme}) : Votre langue de bois passe crème (+2% sondages).`);
                    } else {
                        Game.stats.acceptabilite -= 3;
                        alert(`Débat (${q.theme}) : Vos éléments de langage font lever les yeux au ciel (-3% acceptabilité).`);
                    }
                }

                this.currentEvent.currentDebatIndex++;
                if (this.currentEvent.currentDebatIndex >= this.currentEvent.debatQuestions.length) {
                    this.proceedNextTurn();
                } else {
                    this.renderCurrentScreen();
                }
            },

            // Gestion de la ligne militante
            onChangeLigne: (nouvelleLigne) => {
                const message = Game.changerLigneMilitante(nouvelleLigne);
                alert(message);
                this.renderCurrentScreen();
            },

            // Gestion des financements (Banque, militants, occultes)
            onFinancement: (type) => {
                const res = Game.obtenirFinancement(type);
                if (res && res.msg) alert(res.msg);
                this.renderCurrentScreen();
            },

            onOpenPolls: () => {
                UI.renderPollsModal(Game.allCandidatesPolls, () => {
                    this.renderCurrentScreen();
                });
            },
            onScissionRN: () => {
                const res = Game.triggerRNScission();
                if (res && res.msg) alert(res.msg);
                this.renderCurrentScreen();
            },
            onPrimaireLR: () => {
                const res = Game.triggerPrimairesLR();
                if (res && res.msg) alert(res.msg);
                if (res.victory === false) {
                    UI.renderGameOver("Échec à la primaire ! Game Over.", false, Game, () => this.showPartySelection());
                } else {
                    this.renderCurrentScreen();
                }
            },
            onNegotiate: (partyName) => {
                const res = Game.negotiateWithdrawal(partyName);
                if (res && res.msg) alert(res.msg);
                this.renderCurrentScreen();
            }
        });
    },

    proceedNextTurn() {
        const turnResult = Game.nextTurn();
        if (turnResult.finished) {
            this.handleEndGame();
        } else {
            this.loadNextEvent();
        }
    },

    handleEndGame() {
        const sorted = Object.entries(Game.allCandidatesPolls).sort((a, b) => b[1] - a[1]);
        const playerRank = sorted.findIndex(item => item[0] === Game.currentParty.name) + 1;

        let finalMsg = "";
        let isVictory = false;

        if (playerRank <= 2) {
            isVictory = true;
            finalMsg = `Exploit ! Vous terminez ${playerRank}e avec ${Game.stats.sondages}% des voix. Qualification historique pour le 2nd tour !`;
        } else {
            isVictory = false;
            finalMsg = `C'est la douche froide. Vous terminez ${playerRank}e (${Game.stats.sondages}%). Éliminé dès le 1er tour.`;
        }
        UI.renderGameOver(finalMsg, isVictory, Game, () => this.showPartySelection());
    },

    endGameDueToVictory(msg) {
        UI.renderGameOver(msg, true, Game, () => this.showPartySelection());
    }
};

document.addEventListener("DOMContentLoaded", () => {
    App.init();
});