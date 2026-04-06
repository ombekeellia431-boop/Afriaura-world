import webbrowser
import time

class AuraAgentForms:
    def __init__(self):
        self.data = {
            "nom": "Afriaura OS",
            "vision": "Infrastructure IA unifiant le commerce Afrique-Chine.",
            "url_antler": "https://www.antler.co/apply"
        }

    def mission_antler(self):
        # 1. Ouvre la page
        print(f"🚀 AuraAgent ouvre Antler pour {self.data['nom']}...")
        webbrowser.open(self.data['url_antler'])
        
        # 2. Prépare le rapport
        with open("rapport_prospection.txt", "a", encoding="utf-8") as f:
            date_heure = time.strftime("%Y-%m-%d %H:%M:%S")
            f.write(f"[{date_heure}] Tentative de remplissage Antler réussie.\n")
        
        print("✅ Rapport mis à jour dans rapport_prospection.txt")
        print("\n--- 📋 COPIE CECI DANS LE FORMULAIRE ---")
        print(f"Project: {self.data['nom']}")
        print(f"Description: {self.data['vision']}")
        print("---------------------------------------")

# Lancement
agent = AuraAgentForms()
agent.mission_antler()
agent.mission_antler()