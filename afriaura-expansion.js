/** 🌍 EXPANSION v300.0 | GABON-CHINE GLOBAL MARKET **/
window.Expansion = {
    // --- MARCHÉ B2B (Alibaba Elite) ---
    initMarket: function() {
        Manager.open("ALIBABA ELITE B2B");
        Manager.render(`
            <div style="padding:20px;">
                <div style="background:var(--gold); color:black; padding:30px; border-radius:30px; text-align:center; font-weight:900;">ALIBABA API CLOUD CONNECTED</div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:25px; margin-top:30px;">
                    <div style="background:#111; padding:50px 10px; border-radius:40px; text-align:center;" onclick="Expansion.scanProd()">
                        <i class="fas fa-barcode-read fa-5x" style="color:var(--gold)"></i><br><br><b>SCANNER 8K</b>
                    </div>
                    <div style="background:#111; padding:50px 10px; border-radius:40px; text-align:center;">
                        <i class="fas fa-ship fa-5x" style="color:var(--neon)"></i><br><br><b>LOGISTIQUE OWENDO</b>
                    </div>
                </div>
                <div style="margin-top:30px; background:rgba(212,175,55,0.05); border:1px solid var(--gold); padding:30px; border-radius:40px;">
                    <b style="color:var(--gold)">ANALYSE DE MARCHE :</b><br><br>
                    <p>📦 Textiles (Canton) : -20% sur gros volumes</p>
                    <p>🚢 Prochain Cargo : 12 Avril 2026</p>
                    <button style="width:100%; padding:25px; background:var(--gold); border:none; border-radius:20px; font-weight:900; margin-top:20px;">IMPORTER DIRECTEMENT</button>
                </div>
            </div>
        `);
    },

    scanProd: () => alert("🔍 ANALYSE IA :\nProduit : Textile Premium\nSource : Guangzhou Factory\nPrix B2B : 8.50$\nQualité : Certifiée A+"),

    // --- SYNERGIE (Partage d'écran Magasin) ---
    initSynergy: function() {
        Manager.open("SYNERGIE COLLAB");
        Manager.render(`
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:30px;">
                <div style="background:#000; border:4px solid var(--gold); border-radius:50px; height:450px; position:relative; overflow:hidden;">
                    <video id="shared-screen" autoplay style="width:100%; height:100%; object-fit:contain;"></video>
                    <div style="position:absolute; top:20px; left:20px; background:red; padding:10px 20px; border-radius:10px; font-weight:bold;">LIVE GABON-CHINE</div>
                </div>
                <div style="background:#0a0a0a; border-radius:50px; padding:40px; border:1px solid #333;">
                    <b style="color:var(--gold); font-size:1.5em;">MAGASIN CO-GÉRÉ :</b><br><br>
                    <p>• Paiements : Synchro</p>
                    <p>• Canva Design : Actif</p>
                    <p>• Inventaire : Partagé</p>
                    <button onclick="Expansion.startShare()" style="width:100%; padding:30px; background:var(--gold); border:none; border-radius:20px; font-weight:900; margin-top:40px;">PARTAGER MON ÉCRAN</button>
                    <button onclick="alert('Outil Canva Business chargé')" style="width:100%; padding:30px; background:var(--neon); border:none; border-radius:20px; font-weight:900; margin-top:20px; color:black;">OUVRIR CANVA PRO</button>
                </div>
            </div>
        `);
    },

    startShare: async function() {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        document.getElementById('shared-screen').srcObject = stream;
    },

    // --- ARENA GLOBAL (Jeux & Culture) ---
    initArena: function() {
        Manager.open("ARENA GLOBAL");
        Manager.render(`
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:30px;">
                <div style="background:#111; padding:60px 10px; border-radius:50px; text-align:center;">
                    <i class="fas fa-heart fa-5x" style="color:#ff3366"></i><br><br><b>SCAN COUPLE</b>
                </div>
                <div style="background:#111; padding:60px 10px; border-radius:50px; text-align:center;">
                    <i class="fas fa-car-side fa-5x" style="color:var(--gold)"></i><br><br><b>RALLYE AFRI-CHINE</b>
                </div>
                <div style="grid-column: span 2; background:rgba(0,255,204,0.1); border:2px dashed var(--neon); padding:40px; border-radius:50px; text-align:center;">
                    <i class="fas fa-crown fa-4x" style="color:var(--gold)"></i><br>
                    <h3>DÉFILÉ DES CULTURES</h3>
                    <p>Votez pour votre pays et gagnez des ₿ 5,000</p>
                </div>
            </div>
        `);
    },

    // --- CITOYENNE VALIDE (Formulaire & Bio-Reg) ---
    initCitoyen: function() {
        Manager.open("CITOYENNE VALIDE");
        Manager.render(`
            <div style="padding:40px;">
                <div style="background:#111; padding:40px; border-radius:40px;">
                    <input type="text" placeholder="NOM COMPLET" style="width:100%; padding:25px; margin-bottom:25px; background:#000; border:1px solid #333; color:white; border-radius:20px;">
                    <input type="email" placeholder="EMAIL PROFESSIONNEL" style="width:100%; padding:25px; background:#000; border:1px solid #333; color:white; border-radius:20px;">
                </div>
                <div style="border:4px dashed var(--neon); padding:80px; text-align:center; border-radius:50px; margin-top:30px; color:var(--neon);" onclick="alert('Scan Biométrique en cours...')">
                    <i class="fas fa-face-viewfinder fa-8x"></i><br><br><b>SCAN FACIAL NIVEAU 4</b>
                </div>
                <button style="width:100%; margin-top:40px; padding:35px; background:var(--gold); border:none; border-radius:30px; font-weight:900; font-size:1.5em;">VALIDER MON IDENTITÉ</button>
            </div>
        `);
    },

    // --- PLAN DE DÉVELOPPEMENT (Pour Investisseurs) ---
    initPlan: function() {
        Manager.open("DOSSIER INVESTISSEUR");
        Manager.render(`
            <div style="font-size:1.2em; line-height:1.6;">
                <h2 style="color:var(--gold); border-bottom:2px solid var(--gold); padding-bottom:15px;">AFRIAURA : STRATÉGIE 2026</h2>
                <ul style="list-style:none; padding:0; margin-top:30px;">
                    <li>🚀 <b>Phase 1 :</b> Déploiement IA Vocale & Traduction (Q1)</li>
                    <li>🌍 <b>Phase 2 :</b> Réseau Logistique Gabon-Chine B2B (Q2)</li>
                    <li>🎮 <b>Phase 3 :</b> Monétisation Arena & Jeux Sociaux (Q3)</li>
                    <li>💰 <b>Phase 4 :</b> Expansion Citoyenne Valide (Q4)</li>
                </ul>
                <div style="margin-top:50px; background:#111; padding:30px; border-radius:30px; text-align:center;">
                    <h1 style="color:var(--neon)">VALEUR : 4.5 MILLIARDS $</h1>
                </div>
            </div>
        `);
    }
};