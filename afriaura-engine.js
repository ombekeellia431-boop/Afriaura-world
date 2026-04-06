/** 🧠 AFRI-ENGINE v300.0 | CORE SYSTEM BY ELLIA **/
window.Engine = {
    apiKey: "sk_20e2f63505047bf89602858f8543541052d54c054a6dc5c9",
    voiceId: "pMsXgVXv3BLzUgSgWJ5L",
    mediaStream: null,

    // --- VISION TIKTOK EVOLUTION ---
    initVision: async function() {
        Manager.open("VISION TIKTOK HD+");
        Manager.render(`
            <div style="height:100%; background:#000; position:relative; border-radius:30px; overflow:hidden;">
                <video id="v-feed" autoplay playsinline style="width:100%; height:100%; object-fit:cover;"></video>
                <div style="position:absolute; right:20px; top:10%; display:flex; flex-direction:column; gap:35px; color:white;">
                    <div onclick="Engine.applyFx('beauty')"><i class="fas fa-magic fa-3x"></i><br><small>Beauty</small></div>
                    <div onclick="Engine.applyFx('glow')"><i class="fas fa-sun fa-3x" style="color:var(--gold)"></i><br><small>Glow</small></div>
                    <div onclick="Expansion.scanProd()"><i class="fas fa-barcode fa-3x" style="color:var(--neon)"></i><br><small>Scan B2B</small></div>
                </div>
                <div style="position:absolute; bottom:40px; width:100%; display:flex; justify-content:center; align-items:center; gap:50px;">
                    <div style="background:red; padding:12px 30px; border-radius:10px; font-weight:bold;">LIVE</div>
                    <div style="width:100px; height:100px; border:8px solid white; border-radius:50%;" onclick="alert('Capturé en 8K')"></div>
                    <div style="background:var(--gold); padding:12px 30px; border-radius:10px; color:black; font-weight:bold;">PUBLIER</div>
                </div>
            </div>
        `);
        this.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        document.getElementById('v-feed').srcObject = this.mediaStream;
    },

    applyFx: (f) => {
        const v = document.getElementById('v-feed');
        v.style.filter = f === 'beauty' ? "brightness(1.1) contrast(1.1) saturate(1.2)" : "sepia(0.2) saturate(1.5)";
    },

    // --- FORGE IA (BandLab Studio) ---
    initForge: function() {
        Manager.open("FORGE IA STUDIO");
        Manager.render(`
            <div style="text-align:center;">
                <div style="background:#111; border:4px solid var(--gold); border-radius:50px; padding:80px 20px;">
                    <i class="fas fa-wave-square fa-7x" style="color:var(--gold)"></i>
                    <h2 style="margin-top:30px; letter-spacing:10px;">AFRIAURA VOX</h2>
                    <p style="color:#555;">Flow Sync: Aya Nakamura Style | BandLab Engine</p>
                    <div id="v-wave" style="height:100px; display:flex; align-items:center; justify-content:center; gap:10px; margin-top:30px;"></div>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:30px; margin-top:50px;">
                    <button onclick="Engine.startRecord()" style="padding:40px; background:var(--gold); border-radius:30px; border:none; font-weight:900; font-size:1.4em;">RECORD HIT</button>
                    <button onclick="alert('Mastering BandLab Ready')" style="padding:40px; background:#222; border-radius:30px; border:none; color:white; font-weight:900;">AUTO-MASTER</button>
                </div>
            </div>
        `);
        this.waveAnim();
    },

    startRecord: () => alert("Microphone studio activé. Clonage vocal ElevenLabs prêt."),

    // --- TRADUCTEUR (Google + Clonage Ma Voix) ---
    initTranslate: function() {
        Manager.open("TRADUCTEUR LIVE CLONE");
        Manager.render(`
            <div style="padding:30px;">
                <div style="background:var(--card); border:2px solid #333; padding:50px; border-radius:50px;">
                    <p style="color:var(--gold); font-weight:bold;">🎙️ VOUS PARLEZ (FR) :</p>
                    <b id="txt-in" style="font-size:2.2em; display:block; margin-bottom:40px;">En attente...</b>
                    <hr style="border-color:#222; margin-bottom:40px;">
                    <p style="color:var(--neon); font-weight:bold;">🇨🇳 IA PARLE (MANDARIN) :</p>
                    <b id="txt-out" style="font-size:2.2em; color:var(--neon);">...</b>
                </div>
                <div style="margin-top:60px; text-align:center;">
                    <button onclick="Engine.bridge()" style="width:160px; height:160px; background:var(--gold); border-radius:50%; border:none; box-shadow:0 0 50px rgba(212,175,55,0.4);">
                        <i class="fas fa-microphone fa-6x"></i>
                    </button>
                </div>
            </div>
        `);
    },

    bridge: function() {
        const reco = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        reco.lang = 'fr-FR';
        reco.onresult = async (e) => {
            const input = e.results[0][0].transcript;
            document.getElementById('txt-in').innerText = input;
            const trad = "你好，Afriaura 业务已确认。"; // Exemple Mandarin
            document.getElementById('txt-out').innerText = trad;
            this.speak(trad);
        };
        reco.start();
    },

    speak: async function(txt) {
        const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${this.voiceId}`, {
            method: 'POST',
            headers: { 'xi-api-key': this.apiKey, 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: txt, model_id: "eleven_multilingual_v2" })
        });
        const blob = await res.blob();
        new Audio(URL.createObjectURL(blob)).play();
    },

    kill: function() { if(this.mediaStream) this.mediaStream.getTracks().forEach(t => t.stop()); },
    waveAnim: function() {
        const w = document.getElementById('v-wave'); if(!w) return;
        for(let i=0; i<30; i++){
            let b = document.createElement('div');
            b.style.cssText = "width:10px; height:20px; background:var(--gold); border-radius:5px; transition:0.1s;";
            w.appendChild(b);
        }
        setInterval(() => { w.querySelectorAll('div').forEach(d => d.style.height = (Math.random()*80 + 10) + 'px'); }, 100);
    }
};