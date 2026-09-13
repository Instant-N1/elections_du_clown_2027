// js/ui.js

import { PARTIES } from './data/parties.js';

export const UI = {
    renderPartySelection(parties, onSelectCallback) {
        const appContainer = document.getElementById("app");
        let html = `
            <div class="screen">
                <h1>Élections Présidentielles 2027</h1>
                <p class="subtitle">Le Grand Cirque National - Choisissez votre écurie pour 20 tours de campagne.</p>
                <div class="parties-grid">
        `;

        parties.filter(p => p.playable).forEach(party => {
            html += `
                <div class="party-card" style="border-top-color: ${party.color};">
                    <h2>${party.logo} ${party.name}</h2>
                    <p class="candidate">Candidat : <strong>${party.candidate}</strong></p>
                    <p class="tagline">"${party.tagline}"</p>
                    <p class="desc">${party.description}</p>
                    <div class="party-stats">
                        <span>📈 Sondages de départ : ${party.stats.sondages}%</span>
                        <span>🤝 Acceptabilité : ${party.stats.acceptabilite}%</span>
                        <span>🐘 Soutien Parti : ${party.stats.soutienParti}%</span>
                        <span>💰 Trésorerie : ${party.stats.tresorerie} €</span>
                    </div>
                    <button class="select-btn" data-id="${party.id}">Investir ce candidat</button>
                </div>
            `;
        });

        html += `</div></div>`;
        appContainer.innerHTML = html;

        document.querySelectorAll(".select-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                onSelectCallback(e.target.getAttribute("data-id"));
            });
        });
    },

    renderGameScreen(gameState, eventData, callbacks) {
        const appContainer = document.getElementById("app");
        const stats = gameState.stats;
        const party = gameState.currentParty;
        const trends = gameState.trends;

        const getTrendSymbol = (trend) => {
            if (trend === 'up') return '<span class="trend up">▲ +</span>';
            if (trend === 'down') return '<span class="trend down">▼ -</span>';
            return '';
        };

        let eventCardHtml = "";

        if (eventData.isGrandDebat) {
            const q = eventData.debatQuestions[eventData.currentDebatIndex];
            eventCardHtml = `
                <div class="event-card debat-card">
                    <span class="event-source">GRAND DÉBAT - Question ${eventData.currentDebatIndex + 1} / 5 (${q.theme})</span>
                    <h3>${q.theme.toUpperCase()} : La confrontation</h3>
                    <p class="event-text">${q.desc}</p>
                    <div class="choices-list">
                        <button class="debat-choice-btn" data-type="serious">💼 Répondre sérieusement (+ d'acceptabilité)</button>
                        <button class="debat-choice-btn" data-type="clash">⚡ Clasher un adversaire (Quitte ou double)</button>
                        <button class="debat-choice-btn" data-type="politicien">🦊 Réponse politicienne (Flou artistique)</button>
                    </div>
                </div>
            `;
        } else if (eventData.id === "scandale_fav") {
            let choicesHtml = "";
            eventData.choices.forEach((c, idx) => {
                choicesHtml += `<button class="choice-btn" data-index="${idx}">${c.text}</button>`;
            });
            eventCardHtml = `
                <div class="event-card scandal-card">
                    <span class="event-source">ALERTE MÉDIATIQUE</span>
                    <h3>${eventData.title}</h3>
                    <p class="event-text">${eventData.text}</p>
                    <div class="choices-list">${choicesHtml}</div>
                </div>
            `;
        } else {
            let choicesHtml = "";
            eventData.choices.forEach((choice, index) => {
                choicesHtml += `<button class="choice-btn" data-index="${index}">${choice.text}</button>`;
            });
            eventCardHtml = `
                <div class="event-card">
                    <span class="event-source">Source : ${eventData.source.toUpperCase()}</span>
                    <h3>${eventData.title}</h3>
                    <p class="event-text">${eventData.text}</p>
                    <div class="choices-list">${choicesHtml}</div>
                </div>
            `;
        }

        let parrainagesInfo = "";
        if (gameState.currentTurn <= 7) {
            const colorParrainage = gameState.parrainages >= 500 ? "#28a745" : "#ffc107";
            parrainagesInfo = `
                <div class="stat-box" style="border-left: 4px solid ${colorParrainage};">
                    ✍️ Parrainages <strong>${gameState.parrainages} / 500</strong> <span style="font-size:0.75rem; color:#aaa;">(Tour ${gameState.currentTurn}/7)</span>
                </div>
            `;
        }

        let stratActionsHtml = `<div class="strat-actions">`;
        if (!gameState.actionsTaken.scissionRN && party.id !== "rn_bis") {
            stratActionsHtml += `<button id="action-scission-rn" class="strat-btn">🔪 Tenter une scission secrète au RN</button>`;
        }
        if (party.id === "lr_bis" && !gameState.actionsTaken.primairesLR) {
            stratActionsHtml += `<button id="action-primaire-lr" class="strat-btn">🏛️ Organiser une Primaire de la Droite</button>`;
        }

        const allowedAllies = {
            rn_bis: ["reconquete"],
            lr_bis: ["renaissance", "reconquete"],
            lrep_bis: ["renaissance", "ps"],
            lfi_bis: ["eelv", "pcf"]
        };
        const myAllowedList = allowedAllies[party.id] || [];
        PARTIES.filter(p => !p.playable && myAllowedList.includes(p.id) && !gameState.actionsTaken.mergedParties.includes(p.name)).forEach(smallParty => {
            const score = gameState.allCandidatesPolls[smallParty.name] || 0;
            if (score > 0 && score < 5) {
                stratActionsHtml += `<button class="action-negotiate strat-btn" data-party="${smallParty.name}">🤝 Ralliement de ${smallParty.candidate}</button>`;
            }
        });
        stratActionsHtml += `</div>`;

        let managementPanelHtml = `
            <div class="management-panel">
                <div class="militants-section">
                    <span class="panel-label">Ligne militante : <strong style="color: #ffcc00;">${gameState.militantsLigne.toUpperCase()}</strong></span>
                    <div class="militant-buttons">
                        <button class="militant-btn ${gameState.militantsLigne === 'mou' ? 'active' : ''}" data-ligne="mou">🕊️ Mou</button>
                        <button class="militant-btn ${gameState.militantsLigne === 'hard' ? 'active' : ''}" data-ligne="hard">🔥 Hard</button>
                        <button class="militant-btn ${gameState.militantsLigne === 'centriste' ? 'active' : ''}" data-ligne="centriste">🤝 Centriste</button>
                    </div>
                </div>
                <div class="funding-section">
                    <span class="panel-label">Recherche de fonds :</span>
                    <div class="funding-buttons">
                        <button id="fund-banque" class="fund-btn">🏦 Emprunt bancaire</button>
                        <button id="fund-militants" class="fund-btn">✊ Levée de fonds</button>
                        <button id="fund-occulte" class="fund-btn">🕵️ Fonds occultes</button>
                    </div>
                </div>
            </div>
        `;

        // Affichage des 5 tweets thématiques
        let tweetsHtml = "";
        gameState.tweetsFeed.forEach((t) => {
            tweetsHtml += `
                <div class="tweet-card">
                    <div class="tweet-author">
                        <span>${t.author}</span>
                        <span class="tweet-handle">${t.handle}</span>
                    </div>
                    <div class="tweet-text">${t.text}</div>
                    <div class="tweet-metrics">
                        <span>💬 ${t.replies}</span>
                        <span>🔁 ${t.rts}</span>
                        <span>❤️ ${t.likes}</span>
                    </div>
                </div>
            `;
        });

        let html = `
            <div class="screen game-screen" style="border-left: 8px solid ${party.color};">
                <header class="game-header" style="margin-bottom: 20px;">
                    <div class="party-info">
                        <h2>${party.logo} ${party.name} (${party.candidate})</h2>
                        <span class="turn-counter">Jour ${gameState.currentTurn} / ${gameState.maxTurns}</span>
                    </div>
                    <div class="dashboard" style="margin-top: 10px;">
                        <div class="stat-box">📈 Sondages <strong>${stats.sondages}%</strong> ${getTrendSymbol(trends.sondages)}</div>
                        <div class="stat-box">🤝 Acceptabilité <strong>${stats.acceptabilite}%</strong> ${getTrendSymbol(trends.acceptabilite)}</div>
                        <div class="stat-box">🐘 Soutien Parti <strong>${stats.soutienParti}%</strong> ${getTrendSymbol(trends.soutienParti)}</div>
                        <div class="stat-box">💰 Trésorerie <strong>${stats.tresorerie} €</strong> ${getTrendSymbol(trends.tresorerie)}</div>
                        ${parrainagesInfo}
                    </div>
                    <div class="header-actions" style="margin-top: 10px;">
                        <button id="open-polls-btn" class="action-btn">📊 Sondages en Direct</button>
                    </div>
                </header>

                <div class="game-screen-layout">
                    <div class="game-main-column">
                        ${eventCardHtml}
                        ${stratActionsHtml}
                        ${managementPanelHtml}
                    </div>

                    <div class="smartphone-container">
                        <div class="smartphone-header">
                            <span>📱 RÉSEAUX SOCIAUX EN DIRECT</span>
                        </div>
                        <div class="smartphone-screen">
                            ${tweetsHtml}
                        </div>
                        <div class="tweet-composer">
                            <input type="text" id="custom-tweet-input" placeholder="Lâcher un tweet (5k€)..." maxlength="120" />
                            <button id="send-tweet-btn">Envoyer</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        appContainer.innerHTML = html;

        // Écouteurs d'événements
        document.getElementById("open-polls-btn").addEventListener("click", callbacks.onOpenPolls);

        document.querySelectorAll(".choice-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                callbacks.onChoice(parseInt(e.target.getAttribute("data-index")));
            });
        });

        document.querySelectorAll(".debat-choice-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                callbacks.onDebatChoice(e.target.getAttribute("data-type"));
            });
        });

        document.querySelectorAll(".militant-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                callbacks.onChangeLigne(e.target.getAttribute("data-ligne"));
            });
        });

        // Envoi d'un tweet personnalisé
        document.getElementById("send-tweet-btn").addEventListener("click", () => {
            const input = document.getElementById("custom-tweet-input");
            const texte = input.value.trim();
            if (texte) {
                callbacks.onCustomTweet(texte);
                input.value = "";
            }
        });

        const btnBanque = document.getElementById("fund-banque");
        if (btnBanque) btnBanque.addEventListener("click", () => callbacks.onFinancement("banque"));

        const btnMilitants = document.getElementById("fund-militants");
        if (btnMilitants) btnMilitants.addEventListener("click", () => callbacks.onFinancement("militants"));

        const btnOcculte = document.getElementById("fund-occulte");
        if (btnOcculte) btnOcculte.addEventListener("click", () => callbacks.onFinancement("occulte"));

        const scissionBtn = document.getElementById("action-scission-rn");
        if (scissionBtn) scissionBtn.addEventListener("click", callbacks.onScissionRN);

        const primaireBtn = document.getElementById("action-primaire-lr");
        if (primaireBtn) primaireBtn.addEventListener("click", callbacks.onPrimaireLR);

        document.querySelectorAll(".action-negotiate").forEach(btn => {
            btn.addEventListener("click", (e) => {
                callbacks.onNegotiate(e.target.getAttribute("data-party"));
            });
        });
    },

    renderPollsModal(allPolls, onCloseCallback) {
        const modal = document.createElement("div");
        modal.className = "modal-overlay";
        
        let pollsHtml = "";
        const sortedPolls = Object.entries(allPolls).sort((a, b) => b[1] - a[1]);

        sortedPolls.forEach(([partyName, score]) => {
            if (score <= 0) return;
            const pObj = PARTIES.find(p => p.name === partyName);
            const logo = pObj ? pObj.logo : "[🔪]";
            const color = pObj ? pObj.color : "#fff";
            
            let candidateName = pObj ? pObj.candidate : "Indépendant";
            let displayPartyName = partyName;
            if (partyName === "Indépendants (Scission RN)") {
                candidateName = "Jordan Barre-toi-de-la";
                displayPartyName = "Indépendants";
            }

            pollsHtml += `
                <div class="poll-item">
                    <span><strong style="color: ${color};" class="poll-logo">${logo}</strong> ${candidateName} <span style="color: #888; font-size: 0.85rem;">(${displayPartyName})</span></span>
                    <strong>${score}%</strong>
                </div>
            `;
        });

        modal.innerHTML = `
            <div class="modal-content">
                <h3>Intentions de Vote (1er Tour)</h3>
                <div class="poll-list">${pollsHtml}</div>
                <button id="close-modal-btn" class="action-btn">Fermer</button>
            </div>
        `;

        document.body.appendChild(modal);
        document.getElementById("close-modal-btn").addEventListener("click", () => {
            modal.remove();
            onCloseCallback();
        });
    },

    renderGameOver(message, isVictory, gameState, onRestartCallback) {
        const sorted = Object.entries(gameState.allCandidatesPolls).sort((a, b) => b[1] - a[1]);
        const first = sorted[0];
        const second = sorted[1];

        let jtVannesHtml = "";
        sorted.forEach(([name, score]) => {
            if (score < 5) {
                jtVannesHtml += `
                    <div class="jt-vanne-card">
                        <span class="jt-badge">MINI-SCORE</span>
                        <p>📺 <strong>Éditorialiste FlemmeTV :</strong> "C'est un score de collectionneur pour <em>${name}</em> qui termine à ${score}%. Il peut d'ores et déjà revendre son QG pour s'acheter un studio à Vierzon et rembourser les huissiers."</p>
                    </div>
                `;
            }
        });

        let rankingHtml = "";
        sorted.forEach(([name, score], idx) => {
            const pObj = PARTIES.find(p => p.name === name);
            const candidate = pObj ? pObj.candidate : "Dissident";
            rankingHtml += `
                <div class="result-row" data-candidate="${name}">
                    <span>#${idx + 1} - <strong>${candidate}</strong> (${name})</span>
                    <strong>${score}%</strong>
                </div>
            `;
        });

        const modalOverlay = document.createElement("div");
        modalOverlay.className = "modal-overlay jt-plateau-overlay";
        modalOverlay.innerHTML = `
            <div class="jt-plateau-modal">
                <div class="jt-header-bar">
                    <span class="live-dot">🔴</span> <strong>FLEMMETV - DIRECT SOIRÉE ÉLECTORALE 2027</strong>
                </div>
                <div class="jt-body">
                    <h2>${isVictory ? "✨ QUALIFICATION HISTORIQUE ! ✨" : "💀 LA DOUCHE FROIDE DU 1ER TOUR 💀"}</h2>
                    <p class="jt-summary-msg">${message}</p>
                    
                    <div class="jt-second-tour-box">
                        <h3>🔥 L'AFFICHE OFFICIELLE DU SECOND TOUR 🔥</h3>
                        <p class="duo-text"><strong>${first[0]}</strong> (${first[1]}%) face à <strong>${second[0]}</strong> (${second[1]}%)</p>
                    </div>

                    <div class="jt-chronique-section">
                        <h4>🔴 Le Débrief Cinglant des Éditorialistes :</h4>
                        ${jtVannesHtml || '<p><em>"Un premier tour tellement serré qu\'on croirait une promotion sur le cassoulet."</em></p>'}
                    </div>

                    <div class="jt-ranking-section">
                        <h4>Classement Complet et Régional :</h4>
                        <div class="ranking-list">${rankingHtml}</div>
                        <p class="history-hint">💡 <em>Cliquez sur un candidat pour auditer son historique tour par tour.</em></p>
                    </div>

                    <div id="candidate-history-box" class="history-box" style="display:none;">
                        <h4 id="history-title">Historique</h4>
                        <div id="history-content"></div>
                    </div>
                </div>
                <div class="jt-footer">
                    <button id="restart-btn" class="action-btn">🔄 Relancer une nouvelle campagne</button>
                </div>
            </div>
        `;

        document.body.appendChild(modalOverlay);

        modalOverlay.querySelectorAll(".result-row").forEach(row => {
            row.addEventListener("click", (e) => {
                const candName = e.currentTarget.getAttribute("data-candidate");
                const historyArr = gameState.pollHistory[candName] || [];
                
                const box = modalOverlay.querySelector("#candidate-history-box");
                const title = modalOverlay.querySelector("#history-title");
                const content = modalOverlay.querySelector("#history-content");

                title.textContent = `Évolution historique : ${candName}`;
                
                let histHtml = `<ul class="history-turns-list">`;
                historyArr.forEach((score, turnIdx) => {
                    const t = turnIdx + 1;
                    let milestone = "";
                    if (t === 5) milestone = " 🌟 [Tour 5: Climat]";
                    if (t === 10) milestone = " 🚨 [Tour 10: Scandale]";
                    if (t === 15) milestone = " 🎤 [Tour 15: Grand Débat]";
                    if (t === 18) milestone = " ⚡ [Tour 18: Barrage]";

                    histHtml += `<li>Jour ${t} : <strong>${score}%</strong>${milestone}</li>`;
                });
                histHtml += `</ul>`;

                content.innerHTML = histHtml;
                box.style.display = "block";
            });
        });

        modalOverlay.querySelector("#restart-btn").addEventListener("click", () => {
            modalOverlay.remove();
            onRestartCallback();
        });
    }
};