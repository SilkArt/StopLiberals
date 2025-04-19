// Electoral data from the CSV

const electoralData = {
    "Avalon": { cpc: 37.53, lpc: 57.68, ndp: 4.42, bq: 0.0, gpc: 0.0, ppc: 0.37, oth: 0.0 },
    "Cape Spear": { cpc: 24.96, lpc: 66.91, ndp: 7.74, bq: 0.0, gpc: 0.0, ppc: 0.39, oth: 0.0 },
    "Central Newfoundland": { cpc: 49.49, lpc: 48.47, ndp: 2.05, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Labrador": { cpc: 37.93, lpc: 53.23, ndp: 8.12, bq: 0.0, gpc: 0.0, ppc: 0.72, oth: 0.0 },
    "Long Range Mountains": { cpc: 44.87, lpc: 50.52, ndp: 3.71, bq: 0.0, gpc: 0.0, ppc: 0.89, oth: 0.0 },
    "St. John's East": { cpc: 24.78, lpc: 61.71, ndp: 13.03, bq: 0.0, gpc: 0.0, ppc: 0.48, oth: 0.0 },
    "Terra Nova—The Peninsulas": { cpc: 44.64, lpc: 52.06, ndp: 2.51, bq: 0.0, gpc: 0.0, ppc: 0.79, oth: 0.0 },
    "Cardigan": { cpc: 34.56, lpc: 56.44, ndp: 2.98, bq: 0.0, gpc: 4.72, ppc: 0.66, oth: 0.64 },
    "Charlottetown": { cpc: 34.76, lpc: 52.17, ndp: 3.28, bq: 0.0, gpc: 9.41, ppc: 0.39, oth: 0.0 },
    "Egmont": { cpc: 35.1, lpc: 51.87, ndp: 2.67, bq: 0.0, gpc: 9.34, ppc: 1.01, oth: 0.0 },
    "Malpeque": { cpc: 36.78, lpc: 46.57, ndp: 2.43, bq: 0.0, gpc: 13.65, ppc: 0.56, oth: 0.01 },
    "Acadie—Annapolis": { cpc: 59.4, lpc: 35.47, ndp: 4.01, bq: 0.0, gpc: 0.0, ppc: 1.11, oth: 0.0 },
    "Cape Breton—Canso—Antigonish": { cpc: 40.89, lpc: 52.82, ndp: 4.69, bq: 0.0, gpc: 0.49, ppc: 0.83, oth: 0.28 },
    "Central Nova": { cpc: 38.84, lpc: 52.29, ndp: 5.21, bq: 0.0, gpc: 1.57, ppc: 0.85, oth: 1.23 },
    "Cumberland—Colchester": { cpc: 52.81, lpc: 39.17, ndp: 3.86, bq: 0.0, gpc: 2.6, ppc: 0.87, oth: 0.69 },
    "Dartmouth—Cole Harbour": { cpc: 4.25, lpc: 76.05, ndp: 13.32, bq: 0.0, gpc: 3.77, ppc: 2.6, oth: 0.0 },
    "Halifax": { cpc: 18.59, lpc: 61.47, ndp: 16.04, bq: 0.0, gpc: 2.83, ppc: 0.56, oth: 0.51 },
    "Halifax West": { cpc: 27.34, lpc: 60.23, ndp: 9.01, bq: 0.0, gpc: 2.73, ppc: 0.53, oth: 0.16 },
    "Kings—Hants": { cpc: 36.78, lpc: 53.89, ndp: 6.27, bq: 0.0, gpc: 2.06, ppc: 0.99, oth: 0.0 },
    "Sackville—Bedford—Preston": { cpc: 31.71, lpc: 56.57, ndp: 8.59, bq: 0.0, gpc: 2.28, ppc: 0.8, oth: 0.06 },
    "South Shore—St. Margarets": { cpc: 50.25, lpc: 41.12, ndp: 5.75, bq: 0.0, gpc: 2.88, ppc: 0.0, oth: 0.0 },
    "Sydney—Glace Bay": { cpc: 41.29, lpc: 50.57, ndp: 6.52, bq: 0.0, gpc: 0.68, ppc: 0.71, oth: 0.24 },
    "Acadie—Bathurst": { cpc: 16.03, lpc: 75.06, ndp: 3.56, bq: 0.0, gpc: 2.87, ppc: 1.23, oth: 1.26 },
    "Beauséjour": { cpc: 22.87, lpc: 65.29, ndp: 3.53, bq: 0.0, gpc: 5.88, ppc: 1.61, oth: 0.82 },
    "Fredericton—Oromocto": { cpc: 39.03, lpc: 42.65, ndp: 4.01, bq: 0.0, gpc: 12.77, ppc: 0.07, oth: 1.47 },
    "Fundy Royal": { cpc: 56.65, lpc: 31.24, ndp: 4.84, bq: 0.0, gpc: 5.37, ppc: 1.89, oth: 0.0 },
    "Madawaska—Restigouche": { cpc: 31.39, lpc: 58.68, ndp: 1.9, bq: 0.0, gpc: 2.69, ppc: 1.54, oth: 3.8 },
    "Miramichi—Grand Lake": { cpc: 50.76, lpc: 41.24, ndp: 2.25, bq: 0.0, gpc: 4.58, ppc: 1.08, oth: 0.08 },
    "Moncton—Dieppe": { cpc: 27.55, lpc: 60.91, ndp: 5.6, bq: 0.0, gpc: 4.56, ppc: 1.39, oth: 0.0 },
    "Saint John—Kennebecasis": { cpc: 42.33, lpc: 49.47, ndp: 4.19, bq: 0.0, gpc: 2.98, ppc: 1.03, oth: 0.0 },
    "Saint John—St. Croix": { cpc: 56.19, lpc: 33.49, ndp: 4.27, bq: 0.0, gpc: 4.24, ppc: 1.65, oth: 0.16 },
    "Tobique—Mactaquac": { cpc: 62.19, lpc: 26.62, ndp: 3.71, bq: 0.0, gpc: 5.06, ppc: 1.54, oth: 0.88 },
    "Abitibi—Baie-James—Nunavik—Eeyou": { cpc: 28.19, lpc: 32.34, ndp: 6.81, bq: 24.09, gpc: 1.85, ppc: 5.61, oth: 1.11 },
    "Abitibi—Témiscamingue": { cpc: 22.03, lpc: 31.83, ndp: 3.78, bq: 34.08, gpc: 2.07, ppc: 5.31, oth: 0.9 },
    "Ahuntsic-Cartierville": { cpc: 13.47, lpc: 59.97, ndp: 6.34, bq: 13.33, gpc: 3.3, ppc: 3.58, oth: 0.0 },
    "Alfred-Pellan": { cpc: 21.89, lpc: 55.09, ndp: 4.23, bq: 15.66, gpc: 1.84, ppc: 0.47, oth: 0.82 },
    "Argenteuil—La Petite-Nation": { cpc: 22.36, lpc: 45.49, ndp: 3.88, bq: 19.44, gpc: 0.42, ppc: 8.01, oth: 0.4 },
    "Beauce": { cpc: 60.73, lpc: 10.85, ndp: 1.2, bq: 6.82, gpc: 0.72, ppc: 19.14, oth: 0.55 },
    "Beauharnois—Salaberry—Soulanges—Huntingdon": { cpc: 22.0, lpc: 35.48, ndp: 4.52, bq: 32.04, gpc: 0.24, ppc: 5.15, oth: 0.57 },
    "Beauport—Limoilou": { cpc: 47.69, lpc: 26.94, ndp: 4.97, bq: 17.33, gpc: 2.13, ppc: 0.44, oth: 0.5 },
    "Bécancour—Nicolet—Saurel—Alnôbak": { cpc: 31.46, lpc: 22.15, ndp: 3.13, bq: 36.64, gpc: 1.93, ppc: 3.81, oth: 0.87 },
    "Bellechasse—Les Etchemins—Lévis": { cpc: 70.05, lpc: 14.67, ndp: 2.17, bq: 10.95, gpc: 1.29, ppc: 0.0, oth: 0.86 },
    "Beloeil—Chambly": { cpc: 16.74, lpc: 32.73, ndp: 5.57, bq: 38.13, gpc: 2.66, ppc: 3.36, oth: 0.81 },
    "Berthier—Maskinongé": { cpc: 22.56, lpc: 22.28, ndp: 22.16, bq: 26.52, gpc: 1.34, ppc: 4.56, oth: 0.57 },
    "Bourassa": { cpc: 11.12, lpc: 67.16, ndp: 4.17, bq: 10.61, gpc: 1.96, ppc: 4.86, oth: 0.13 },
    "Brome—Missisquoi": { cpc: 27.08, lpc: 40.89, ndp: 3.42, bq: 20.67, gpc: 2.67, ppc: 4.51, oth: 0.76 },
    "Brossard—Saint-Lambert": { cpc: 19.12, lpc: 60.44, ndp: 5.44, bq: 11.36, gpc: 0.0, ppc: 3.29, oth: 0.34 },
    "Charlesbourg—Haute-Saint-Charles": { cpc: 61.96, lpc: 18.94, ndp: 2.67, bq: 12.11, gpc: 1.54, ppc: 2.54, oth: 0.24 },
    "Châteauguay—Les Jardins-de-Napierville": { cpc: 21.04, lpc: 44.2, ndp: 4.43, bq: 22.6, gpc: 1.72, ppc: 5.46, oth: 0.55 },
    "Chicoutimi—Le Fjord": { cpc: 58.7, lpc: 18.54, ndp: 2.24, bq: 17.69, gpc: 1.14, ppc: 1.66, oth: 0.03 },
    "Compton—Stanstead": { cpc: 28.2, lpc: 41.59, ndp: 4.01, bq: 17.65, gpc: 3.05, ppc: 5.1, oth: 0.41 },
    "Côte-du-Sud—Rivière-du-Loup—Kataskomiq—Témiscouata": { cpc: 63.43, lpc: 18.85, ndp: 1.57, bq: 15.05, gpc: 0.0, ppc: 0.42, oth: 0.68 },
    "Côte-Nord—Kawawachikamach—Nitassinan": { cpc: 39.24, lpc: 23.54, ndp: 2.54, bq: 33.8, gpc: 0.0, ppc: 0.0, oth: 0.87 },
    "Dorval—Lachine—LaSalle": { cpc: 18.68, lpc: 57.32, ndp: 6.74, bq: 8.8, gpc: 2.97, ppc: 5.49, oth: 0.0 },
    "Drummond": { cpc: 34.18, lpc: 25.07, ndp: 6.98, bq: 31.75, gpc: 0.0, ppc: 0.0, oth: 2.01 },
    "Gaspésie—Les Îles-de-la-Madeleine—Listuguj": { cpc: 14.94, lpc: 50.36, ndp: 2.53, bq: 28.65, gpc: 0.0, ppc: 3.03, oth: 0.48 },
    "Gatineau": { cpc: 17.91, lpc: 56.52, ndp: 4.56, bq: 13.49, gpc: 1.69, ppc: 5.47, oth: 0.36 },
    "Hochelaga—Rosemont-Est": { cpc: 8.89, lpc: 50.88, ndp: 12.58, bq: 21.21, gpc: 2.53, ppc: 3.59, oth: 0.32 },
    "Honoré-Mercier": { cpc: 16.14, lpc: 64.33, ndp: 3.67, bq: 8.91, gpc: 1.54, ppc: 5.36, oth: 0.05 },
    "Hull—Aylmer": { cpc: 17.2, lpc: 58.62, ndp: 6.67, bq: 9.18, gpc: 3.01, ppc: 4.88, oth: 0.44 },
    "Joliette—Manawan": { cpc: 18.59, lpc: 30.62, ndp: 3.72, bq: 38.65, gpc: 2.57, ppc: 4.96, oth: 0.88 },
    "Jonquière": { cpc: 46.18, lpc: 23.76, ndp: 2.87, bq: 25.12, gpc: 1.85, ppc: 0.0, oth: 0.22 },
    "La Pointe-de-l'Île": { cpc: 12.94, lpc: 43.66, ndp: 6.14, bq: 32.16, gpc: 0.0, ppc: 4.42, oth: 0.69 },
    "La Prairie—Atateken": { cpc: 17.91, lpc: 43.66, ndp: 4.32, bq: 28.14, gpc: 2.01, ppc: 3.9, oth: 0.06 },
    "Lac-Saint-Jean": { cpc: 42.92, lpc: 22.56, ndp: 1.82, bq: 30.88, gpc: 1.82, ppc: 0.0, oth: 0.0 },
    "Lac-Saint-Louis": { cpc: 27.3, lpc: 56.92, ndp: 6.3, bq: 2.75, gpc: 3.13, ppc: 3.59, oth: 0.0 },
    "LaSalle—Émard—Verdun": { cpc: 13.33, lpc: 53.09, ndp: 10.89, bq: 13.61, gpc: 3.52, ppc: 4.99, oth: 0.57 },
    "Laurentides—Labelle": { cpc: 20.0, lpc: 31.29, ndp: 3.47, bq: 35.59, gpc: 3.09, ppc: 5.8, oth: 0.77 },
    "Laurier—Sainte-Marie": { cpc: 8.55, lpc: 52.62, ndp: 18.98, bq: 13.68, gpc: 2.84, ppc: 2.8, oth: 0.52 },
    "Laval—Les Îles": { cpc: 26.61, lpc: 51.46, ndp: 3.79, bq: 10.24, gpc: 1.51, ppc: 6.39, oth: 0.0 },
    "Les Pays-d'en-Haut": { cpc: 21.56, lpc: 33.51, ndp: 4.18, bq: 31.39, gpc: 1.89, ppc: 6.7, oth: 0.77 },
    "Lévis—Lotbinière": { cpc: 67.06, lpc: 14.52, ndp: 3.22, bq: 11.0, gpc: 1.22, ppc: 2.68, oth: 0.28 },
    "Longueuil—Charles-LeMoyne": { cpc: 14.63, lpc: 49.9, ndp: 5.97, bq: 22.21, gpc: 2.87, ppc: 4.33, oth: 0.09 },
    "Longueuil—Saint-Hubert": { cpc: 12.59, lpc: 48.76, ndp: 4.74, bq: 26.75, gpc: 3.4, ppc: 3.62, oth: 0.15 },
    "Louis-Hébert": { cpc: 37.42, lpc: 41.2, ndp: 3.65, bq: 14.85, gpc: 2.69, ppc: 0.0, oth: 0.19 },
    "Louis-Saint-Laurent—Akiawenhrahk": { cpc: 68.33, lpc: 15.94, ndp: 2.27, bq: 9.44, gpc: 1.25, ppc: 2.34, oth: 0.42 },
    "Marc-Aurèle-Fortin": { cpc: 19.82, lpc: 52.15, ndp: 4.74, bq: 18.58, gpc: 0.0, ppc: 4.09, oth: 0.62 },
    "Mégantic—L'Érable—Lotbinière": { cpc: 72.29, lpc: 12.05, ndp: 1.31, bq: 8.93, gpc: 1.12, ppc: 3.75, oth: 0.55 },
    "Mirabel": { cpc: 24.38, lpc: 31.29, ndp: 5.18, bq: 29.99, gpc: 2.66, ppc: 5.83, oth: 0.67 },
    "Mount Royal": { cpc: 33.1, lpc: 55.29, ndp: 3.98, bq: 2.0, gpc: 2.51, ppc: 3.05, oth: 0.06 },
    "Mont-Saint-Bruno—L'Acadie": { cpc: 17.81, lpc: 43.88, ndp: 5.01, bq: 29.84, gpc: 0.19, ppc: 3.24, oth: 0.05 },
    "Montcalm": { cpc: 22.28, lpc: 26.69, ndp: 3.93, bq: 36.27, gpc: 3.26, ppc: 6.83, oth: 0.74 },
    "Montmorency—Charlevoix": { cpc: 51.87, lpc: 21.66, ndp: 2.32, bq: 20.07, gpc: 1.22, ppc: 2.41, oth: 0.45 },
    "Notre-Dame-de-Grâce—Westmount": { cpc: 20.81, lpc: 57.23, ndp: 10.19, bq: 3.3, gpc: 4.14, ppc: 4.21, oth: 0.12 },
    "Outremont": { cpc: 12.88, lpc: 54.69, ndp: 15.77, bq: 9.71, gpc: 3.69, ppc: 3.15, oth: 0.11 },
    "Papineau": { cpc: 8.45, lpc: 61.49, ndp: 12.99, bq: 9.38, gpc: 3.73, ppc: 3.43, oth: 0.54 },
    "Pierre-Boucher—Les Patriotes—Verchères": { cpc: 17.37, lpc: 35.69, ndp: 4.99, bq: 38.21, gpc: 0.0, ppc: 3.22, oth: 0.53 },
    "Pierrefonds—Dollard": { cpc: 29.85, lpc: 56.22, ndp: 5.42, bq: 4.05, gpc: 0.0, ppc: 4.45, oth: 0.0 },
    "Pontiac—Kitigan Zibi": { cpc: 31.88, lpc: 45.77, ndp: 5.54, bq: 8.08, gpc: 2.9, ppc: 5.59, oth: 0.24 },
    "Portneuf—Jacques-Cartier": { cpc: 69.48, lpc: 14.08, ndp: 2.06, bq: 11.26, gpc: 0.0, ppc: 2.72, oth: 0.41 },
    "Québec Centre": { cpc: 29.74, lpc: 41.3, ndp: 6.87, bq: 17.12, gpc: 2.6, ppc: 2.18, oth: 0.19 },
    "Repentigny": { cpc: 17.64, lpc: 39.29, ndp: 4.88, bq: 36.59, gpc: 0.0, ppc: 0.0, oth: 1.61 },
    "Richmond—Arthabaska": { cpc: 67.3, lpc: 14.12, ndp: 1.98, bq: 11.93, gpc: 0.0, ppc: 4.06, oth: 0.61 },
    "Rimouski—La Matapédia": { cpc: 22.14, lpc: 30.58, ndp: 3.8, bq: 38.36, gpc: 0.0, ppc: 3.41, oth: 1.71 },
    "Rivière-des-Mille-Îles": { cpc: 18.38, lpc: 44.4, ndp: 4.24, bq: 25.97, gpc: 2.18, ppc: 4.12, oth: 0.72 },
    "Rivière-du-Nord": { cpc: 22.97, lpc: 30.02, ndp: 4.31, bq: 35.17, gpc: 0.37, ppc: 6.11, oth: 1.06 },
    "Rosemont—La Petite-Patrie": { cpc: 8.79, lpc: 35.68, ndp: 35.03, bq: 16.79, gpc: 3.5, ppc: 0.0, oth: 0.22 },
    "Saint-Hyacinthe—Bagot—Acton": { cpc: 25.58, lpc: 30.07, ndp: 7.23, bq: 32.08, gpc: 0.0, ppc: 4.31, oth: 0.72 },
    "Saint-Jean": { cpc: 23.86, lpc: 36.88, ndp: 4.47, bq: 30.78, gpc: 2.68, ppc: 0.0, oth: 1.34 },
    "Saint-Laurent": { cpc: 26.53, lpc: 60.21, ndp: 5.11, bq: 4.11, gpc: 0.11, ppc: 3.82, oth: 0.1 },
    "Saint-Léonard—Saint-Michel": { cpc: 15.42, lpc: 71.79, ndp: 3.96, bq: 4.2, gpc: 0.0, ppc: 4.63, oth: 0.0 },
    "Saint-Maurice—Champlain": { cpc: 29.22, lpc: 48.26, ndp: 2.7, bq: 17.44, gpc: 1.41, ppc: 0.0, oth: 0.97 },
    "Shefford": { cpc: 21.36, lpc: 41.31, ndp: 3.08, bq: 26.38, gpc: 2.1, ppc: 5.13, oth: 0.64 },
    "Sherbrooke": { cpc: 22.01, lpc: 45.09, ndp: 7.84, bq: 17.78, gpc: 3.3, ppc: 3.54, oth: 0.45 },
    "Terrebonne": { cpc: 19.83, lpc: 39.01, ndp: 4.14, bq: 28.04, gpc: 1.81, ppc: 4.25, oth: 2.92 },
    "Thérèse-De Blainville": { cpc: 19.57, lpc: 43.68, ndp: 4.23, bq: 25.92, gpc: 2.29, ppc: 3.99, oth: 0.32 },
    "Trois-Rivières": { cpc: 44.95, lpc: 30.7, ndp: 4.05, bq: 16.14, gpc: 1.33, ppc: 2.46, oth: 0.37 },
    "Vaudreuil": { cpc: 26.25, lpc: 52.97, ndp: 5.56, bq: 11.93, gpc: 2.7, ppc: 0.0, oth: 0.59 },
    "Ville-Marie—Le Sud-Ouest—Île-des-Sœurs": { cpc: 20.33, lpc: 57.05, ndp: 9.41, bq: 6.76, gpc: 2.83, ppc: 3.46, oth: 0.15 },
    "Vimy": { cpc: 21.76, lpc: 55.18, ndp: 4.81, bq: 12.54, gpc: 0.0, ppc: 5.72, oth: 0.0 },
    "Ajax": { cpc: 29.78, lpc: 62.35, ndp: 5.72, bq: 0.0, gpc: 2.16, ppc: 0.0, oth: 0.0 },
    "Algonquin—Renfrew—Pembroke": { cpc: 61.07, lpc: 23.43, ndp: 9.4, bq: 0.0, gpc: 1.79, ppc: 1.51, oth: 2.8 },
    "Aurora—Oak Ridges—Richmond Hill": { cpc: 45.14, lpc: 47.01, ndp: 3.13, bq: 0.0, gpc: 0.15, ppc: 0.66, oth: 3.91 },
    "Barrie South—Innisfil": { cpc: 57.47, lpc: 34.14, ndp: 6.91, bq: 0.0, gpc: 0.0, ppc: 1.48, oth: 0.0 },
    "Barrie—Springwater—Oro-Medonte": { cpc: 55.15, lpc: 35.91, ndp: 7.28, bq: 0.0, gpc: 0.2, ppc: 1.33, oth: 0.13 },
    "Bay of Quinte": { cpc: 47.81, lpc: 42.74, ndp: 6.53, bq: 0.0, gpc: 1.99, ppc: 0.93, oth: 0.0 },
    "Beaches—East York": { cpc: 17.29, lpc: 66.81, ndp: 9.86, bq: 0.0, gpc: 2.51, ppc: 0.61, oth: 2.91 },
    "Bowmanville—Oshawa North": { cpc: 52.73, lpc: 35.58, ndp: 7.87, bq: 0.0, gpc: 0.0, ppc: 1.02, oth: 2.8 },
    "Brampton Centre": { cpc: 35.6, lpc: 53.68, ndp: 6.5, bq: 0.0, gpc: 0.0, ppc: 0.65, oth: 3.57 },
    "Brampton—Chinguacousy Park": { cpc: 33.77, lpc: 54.24, ndp: 6.66, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 5.33 },
    "Brampton East": { cpc: 32.9, lpc: 60.07, ndp: 6.54, bq: 0.0, gpc: 0.0, ppc: 0.49, oth: 0.0 },
    "Brampton North—Caledon": { cpc: 37.15, lpc: 56.44, ndp: 5.68, bq: 0.0, gpc: 0.35, ppc: 0.17, oth: 0.2 },
    "Brampton South": { cpc: 33.26, lpc: 59.64, ndp: 5.56, bq: 0.0, gpc: 0.0, ppc: 0.52, oth: 1.02 },
    "Brampton West": { cpc: 30.61, lpc: 60.93, ndp: 5.12, bq: 0.0, gpc: 0.0, ppc: 0.44, oth: 2.9 },
    "Brantford—Brant South—Six Nations": { cpc: 50.23, lpc: 34.07, ndp: 9.24, bq: 0.0, gpc: 2.54, ppc: 1.76, oth: 2.16 },
    "Bruce—Grey—Owen Sound": { cpc: 57.39, lpc: 28.86, ndp: 5.77, bq: 0.0, gpc: 2.74, ppc: 1.5, oth: 3.74 },
    "Burlington": { cpc: 41.93, lpc: 50.46, ndp: 4.45, bq: 0.0, gpc: 1.71, ppc: 0.72, oth: 0.73 },
    "Burlington North—Milton West": { cpc: 41.05, lpc: 52.65, ndp: 3.92, bq: 0.0, gpc: 1.67, ppc: 0.71, oth: 0.0 },
    "Cambridge": { cpc: 41.85, lpc: 45.94, ndp: 7.61, bq: 0.0, gpc: 3.19, ppc: 1.4, oth: 0.0 },
    "Carleton": { cpc: 58.04, lpc: 34.96, ndp: 4.63, bq: 0.0, gpc: 1.84, ppc: 0.49, oth: 0.04 },
    "Chatham-Kent—Leamington": { cpc: 54.78, lpc: 33.83, ndp: 6.86, bq: 0.0, gpc: 1.5, ppc: 3.04, oth: 0.0 },
    "Davenport": { cpc: 15.19, lpc: 59.83, ndp: 20.14, bq: 0.0, gpc: 2.58, ppc: 0.73, oth: 1.52 },
    "Don Valley North": { cpc: 36.25, lpc: 57.62, ndp: 4.02, bq: 0.0, gpc: 1.54, ppc: 0.52, oth: 0.04 },
    "Don Valley West": { cpc: 32.88, lpc: 61.68, ndp: 3.66, bq: 0.0, gpc: 0.9, ppc: 0.45, oth: 0.44 },
    "Dufferin—Caledon": { cpc: 56.62, lpc: 32.39, ndp: 4.35, bq: 0.0, gpc: 4.0, ppc: 1.31, oth: 1.33 },
    "Eglinton—Lawrence": { cpc: 40.47, lpc: 52.76, ndp: 3.7, bq: 0.0, gpc: 2.56, ppc: 0.52, oth: 0.0 },
    "Elgin—St. Thomas—London South": { cpc: 61.6, lpc: 24.1, ndp: 7.36, bq: 0.0, gpc: 2.13, ppc: 2.44, oth: 2.38 },
    "Essex": { cpc: 56.93, lpc: 21.04, ndp: 15.99, bq: 0.0, gpc: 1.32, ppc: 2.27, oth: 2.45 },
    "Etobicoke Centre": { cpc: 39.24, lpc: 54.31, ndp: 4.51, bq: 0.0, gpc: 0.28, ppc: 1.21, oth: 0.46 },
    "Etobicoke—Lakeshore": { cpc: 37.21, lpc: 52.94, ndp: 5.62, bq: 0.0, gpc: 1.86, ppc: 0.81, oth: 1.57 },
    "Etobicoke North": { cpc: 28.09, lpc: 63.74, ndp: 4.24, bq: 0.0, gpc: 0.0, ppc: 0.77, oth: 3.16 },
    "Flamborough—Glanbrook—Brant North": { cpc: 51.97, lpc: 37.86, ndp: 6.31, bq: 0.0, gpc: 2.23, ppc: 1.24, oth: 0.38 },
    "Guelph": { cpc: 28.9, lpc: 49.96, ndp: 9.87, bq: 0.0, gpc: 7.43, ppc: 0.92, oth: 2.93 },
    "Haldimand—Norfolk": { cpc: 55.42, lpc: 31.54, ndp: 5.65, bq: 0.0, gpc: 0.0, ppc: 1.96, oth: 5.43 },
    "Haliburton—Kawartha Lakes": { cpc: 60.6, lpc: 27.28, ndp: 6.04, bq: 0.0, gpc: 2.2, ppc: 1.28, oth: 2.6 },
    "Hamilton Centre": { cpc: 25.43, lpc: 40.35, ndp: 26.29, bq: 0.0, gpc: 3.15, ppc: 1.62, oth: 3.16 },
    "Hamilton East—Stoney Creek": { cpc: 38.18, lpc: 48.55, ndp: 9.99, bq: 0.0, gpc: 1.81, ppc: 1.47, oth: 0.0 },
    "Hamilton Mountain": { cpc: 33.41, lpc: 45.11, ndp: 15.3, bq: 0.0, gpc: 2.05, ppc: 1.35, oth: 2.79 },
    "Hamilton West—Ancaster—Dundas": { cpc: 34.99, lpc: 52.27, ndp: 8.63, bq: 0.0, gpc: 2.41, ppc: 0.79, oth: 0.91 },
    "Hastings—Lennox and Addington—Tyendinaga": { cpc: 50.18, lpc: 37.2, ndp: 4.42, bq: 0.0, gpc: 1.5, ppc: 1.0, oth: 5.7 },
    "Humber River—Black Creek": { cpc: 20.27, lpc: 69.29, ndp: 6.95, bq: 0.0, gpc: 1.07, ppc: 0.73, oth: 1.69 },
    "Huron—Bruce": { cpc: 59.12, lpc: 29.78, ndp: 6.24, bq: 0.0, gpc: 0.0, ppc: 1.35, oth: 3.51 },
    "Kanata": { cpc: 42.41, lpc: 48.69, ndp: 6.15, bq: 0.0, gpc: 2.24, ppc: 0.51, oth: 0.0 },
    "Kapuskasing—Timmins—Mushkegowuk": { cpc: 37.76, lpc: 38.56, ndp: 19.52, bq: 0.0, gpc: 0.45, ppc: 2.94, oth: 0.76 },
    "Kenora—Kiiwetinoong": { cpc: 57.42, lpc: 25.79, ndp: 14.04, bq: 0.0, gpc: 1.41, ppc: 1.34, oth: 0.0 },
    "Kingston and the Islands": { cpc: 31.73, lpc: 51.54, ndp: 13.53, bq: 0.0, gpc: 2.44, ppc: 0.72, oth: 0.05 },
    "King—Vaughan": { cpc: 49.3, lpc: 46.21, ndp: 2.65, bq: 0.0, gpc: 1.07, ppc: 0.77, oth: 0.0 },
    "Kitchener Centre": { cpc: 32.72, lpc: 22.41, ndp: 8.38, bq: 0.0, gpc: 33.75, ppc: 1.4, oth: 1.33 },
    "Kitchener—Conestoga": { cpc: 44.56, lpc: 44.44, ndp: 5.13, bq: 0.0, gpc: 4.46, ppc: 1.37, oth: 0.04 },
    "Kitchener South—Hespeler": { cpc: 42.39, lpc: 43.79, ndp: 7.06, bq: 0.0, gpc: 3.15, ppc: 1.29, oth: 2.32 },
    "Lanark—Frontenac": { cpc: 58.57, lpc: 29.84, ndp: 6.54, bq: 0.0, gpc: 2.43, ppc: 1.17, oth: 1.44 },
    "Leeds—Grenville—Thousand Islands—Rideau Lakes": { cpc: 59.9, lpc: 29.29, ndp: 6.45, bq: 0.0, gpc: 3.28, ppc: 1.09, oth: 0.0 },
    "London Centre": { cpc: 32.84, lpc: 48.73, ndp: 14.63, bq: 0.0, gpc: 2.0, ppc: 1.09, oth: 0.72 },
    "London—Fanshawe": { cpc: 37.83, lpc: 35.22, ndp: 24.66, bq: 0.0, gpc: 0.0, ppc: 2.29, oth: 0.0 },
    "London West": { cpc: 40.96, lpc: 43.35, ndp: 9.98, bq: 0.0, gpc: 0.0, ppc: 0.96, oth: 4.75 },
    "Markham—Stouffville": { cpc: 38.41, lpc: 55.86, ndp: 3.53, bq: 0.0, gpc: 1.68, ppc: 0.52, oth: 0.0 },
    "Markham—Thornhill": { cpc: 28.82, lpc: 65.88, ndp: 3.32, bq: 0.0, gpc: 1.68, ppc: 0.3, oth: 0.0 },
    "Markham—Unionville": { cpc: 45.04, lpc: 50.17, ndp: 2.53, bq: 0.0, gpc: 2.27, ppc: 0.0, oth: 0.0 },
    "Middlesex—London": { cpc: 55.45, lpc: 32.62, ndp: 7.95, bq: 0.0, gpc: 1.71, ppc: 1.52, oth: 0.75 },
    "Milton East—Halton Hills South": { cpc: 46.67, lpc: 46.26, ndp: 3.94, bq: 0.0, gpc: 2.26, ppc: 0.88, oth: 0.0 },
    "Mississauga Centre": { cpc: 32.73, lpc: 59.9, ndp: 4.67, bq: 0.0, gpc: 1.42, ppc: 0.76, oth: 0.53 },
    "Mississauga East—Cooksville": { cpc: 35.5, lpc: 55.36, ndp: 4.29, bq: 0.0, gpc: 0.28, ppc: 1.16, oth: 3.4 },
    "Mississauga—Erin Mills": { cpc: 37.55, lpc: 56.24, ndp: 4.2, bq: 0.0, gpc: 1.4, ppc: 0.6, oth: 0.0 },
    "Mississauga—Lakeshore": { cpc: 43.23, lpc: 49.44, ndp: 3.98, bq: 0.0, gpc: 1.89, ppc: 0.76, oth: 0.69 },
    "Mississauga—Malton": { cpc: 33.77, lpc: 56.64, ndp: 5.48, bq: 0.0, gpc: 1.57, ppc: 0.05, oth: 2.5 },
    "Mississauga—Streetsville": { cpc: 38.67, lpc: 52.28, ndp: 4.95, bq: 0.0, gpc: 1.84, ppc: 0.67, oth: 1.58 },
    "Nepean": { cpc: 38.79, lpc: 52.11, ndp: 6.86, bq: 0.0, gpc: 1.73, ppc: 0.51, oth: 0.0 },
    "Newmarket—Aurora": { cpc: 42.85, lpc: 48.19, ndp: 4.72, bq: 0.0, gpc: 1.59, ppc: 0.75, oth: 1.9 },
    "New Tecumseth—Gwillimbury": { cpc: 55.92, lpc: 34.81, ndp: 5.56, bq: 0.0, gpc: 1.12, ppc: 1.41, oth: 1.18 },
    "Niagara Falls—Niagara-on-the-Lake": { cpc: 46.13, lpc: 42.53, ndp: 8.0, bq: 0.0, gpc: 1.84, ppc: 1.49, oth: 0.0 },
    "Niagara South": { cpc: 43.45, lpc: 42.01, ndp: 10.78, bq: 0.0, gpc: 1.9, ppc: 1.86, oth: 0.0 },
    "Niagara West": { cpc: 50.84, lpc: 35.15, ndp: 5.87, bq: 0.0, gpc: 2.48, ppc: 1.31, oth: 4.35 },
    "Nipissing—Timiskaming": { cpc: 40.99, lpc: 46.47, ndp: 10.91, bq: 0.0, gpc: 0.0, ppc: 1.63, oth: 0.0 },
    "Northumberland—Clarke": { cpc: 51.6, lpc: 39.12, ndp: 5.95, bq: 0.0, gpc: 2.31, ppc: 1.03, oth: 0.0 },
    "Oakville East": { cpc: 43.84, lpc: 50.37, ndp: 3.8, bq: 0.0, gpc: 1.4, ppc: 0.59, oth: 0.0 },
    "Oakville West": { cpc: 42.7, lpc: 51.67, ndp: 3.51, bq: 0.0, gpc: 1.47, ppc: 0.64, oth: 0.0 },
    "Orléans": { cpc: 32.61, lpc: 58.37, ndp: 5.97, bq: 0.0, gpc: 1.42, ppc: 0.48, oth: 1.15 },
    "Oshawa": { cpc: 52.91, lpc: 30.2, ndp: 13.81, bq: 0.0, gpc: 1.57, ppc: 1.52, oth: 0.0 },
    "Ottawa Centre": { cpc: 20.96, lpc: 57.08, ndp: 15.31, bq: 0.0, gpc: 2.77, ppc: 0.46, oth: 3.43 },
    "Ottawa South": { cpc: 31.75, lpc: 57.03, ndp: 7.76, bq: 0.0, gpc: 1.99, ppc: 0.58, oth: 0.89 },
    "Ottawa—Vanier—Gloucester": { cpc: 24.64, lpc: 57.64, ndp: 10.15, bq: 0.0, gpc: 2.81, ppc: 0.61, oth: 4.16 },
    "Ottawa West—Nepean": { cpc: 32.77, lpc: 52.74, ndp: 8.71, bq: 0.0, gpc: 2.62, ppc: 0.61, oth: 2.56 },
    "Oxford": { cpc: 58.32, lpc: 25.26, ndp: 8.36, bq: 0.0, gpc: 2.58, ppc: 2.12, oth: 3.36 },
    "Parry Sound—Muskoka": { cpc: 58.13, lpc: 25.74, ndp: 7.42, bq: 0.0, gpc: 5.2, ppc: 1.46, oth: 2.05 },
    "Perth—Wellington": { cpc: 60.33, lpc: 29.99, ndp: 7.77, bq: 0.0, gpc: 0.0, ppc: 1.91, oth: 0.0 },
    "Peterborough": { cpc: 46.82, lpc: 40.78, ndp: 8.33, bq: 0.0, gpc: 2.05, ppc: 0.82, oth: 1.2 },
    "Pickering—Brooklin": { cpc: 39.3, lpc: 54.15, ndp: 5.62, bq: 0.0, gpc: 0.22, ppc: 0.71, oth: 0.0 },
    "Prescott—Russell—Cumberland": { cpc: 36.33, lpc: 51.9, ndp: 4.4, bq: 0.0, gpc: 1.75, ppc: 1.15, oth: 4.47 },
    "Richmond Hill South": { cpc: 40.62, lpc: 49.14, ndp: 3.34, bq: 0.0, gpc: 0.0, ppc: 0.5, oth: 6.41 },
    "Sarnia—Lambton—Bkejwanong": { cpc: 59.42, lpc: 24.28, ndp: 9.75, bq: 0.0, gpc: 1.46, ppc: 2.25, oth: 2.85 },
    "Sault Ste. Marie—Algoma": { cpc: 45.04, lpc: 40.14, ndp: 11.91, bq: 0.0, gpc: 0.62, ppc: 1.06, oth: 1.23 },
    "Scarborough—Agincourt": { cpc: 32.51, lpc: 61.44, ndp: 4.08, bq: 0.0, gpc: 1.47, ppc: 0.5, oth: 0.0 },
    "Scarborough Centre—Don Valley East": { cpc: 28.94, lpc: 63.12, ndp: 5.71, bq: 0.0, gpc: 0.0, ppc: 0.78, oth: 1.45 },
    "Scarborough—Guildwood—Rouge Park": { cpc: 24.96, lpc: 67.94, ndp: 5.5, bq: 0.0, gpc: 0.0, ppc: 0.54, oth: 1.06 },
    "Scarborough North": { cpc: 19.76, lpc: 71.71, ndp: 4.6, bq: 0.0, gpc: 0.0, ppc: 0.43, oth: 3.51 },
    "Scarborough Southwest": { cpc: 23.79, lpc: 65.63, ndp: 6.71, bq: 0.0, gpc: 2.0, ppc: 0.53, oth: 1.33 },
    "Scarborough—Woburn": { cpc: 25.07, lpc: 65.84, ndp: 5.32, bq: 0.0, gpc: 0.0, ppc: 0.55, oth: 3.22 },
    "Simcoe—Grey": { cpc: 55.56, lpc: 32.02, ndp: 5.61, bq: 0.0, gpc: 3.74, ppc: 1.3, oth: 1.77 },
    "Simcoe North": { cpc: 50.84, lpc: 36.43, ndp: 6.99, bq: 0.0, gpc: 2.83, ppc: 1.47, oth: 1.43 },
    "Spadina—Harbourfront": { cpc: 29.15, lpc: 50.35, ndp: 16.53, bq: 0.0, gpc: 3.31, ppc: 0.65, oth: 0.0 },
    "St. Catharines": { cpc: 40.6, lpc: 46.56, ndp: 9.72, bq: 0.0, gpc: 1.79, ppc: 1.32, oth: 0.0 },
    "Stormont—Dundas—Glengarry": { cpc: 63.31, lpc: 28.23, ndp: 4.62, bq: 0.0, gpc: 2.07, ppc: 1.43, oth: 0.34 },
    "Sudbury": { cpc: 36.68, lpc: 45.22, ndp: 13.86, bq: 0.0, gpc: 2.01, ppc: 1.29, oth: 0.95 },
    "Sudbury East—Manitoulin—Nickel Belt": { cpc: 37.09, lpc: 43.21, ndp: 15.21, bq: 0.0, gpc: 1.83, ppc: 1.96, oth: 0.69 },
    "Taiaiako’n—Parkdale—High Park": { cpc: 18.37, lpc: 57.77, ndp: 19.22, bq: 0.0, gpc: 2.0, ppc: 0.7, oth: 1.93 },
    "Thornhill": { cpc: 56.68, lpc: 38.75, ndp: 2.38, bq: 0.0, gpc: 1.38, ppc: 0.81, oth: 0.0 },
    "Thunder Bay—Rainy River": { cpc: 38.86, lpc: 44.55, ndp: 13.73, bq: 0.0, gpc: 1.46, ppc: 1.4, oth: 0.0 },
    "Thunder Bay—Superior North": { cpc: 31.17, lpc: 51.52, ndp: 13.1, bq: 0.0, gpc: 1.77, ppc: 1.23, oth: 1.22 },
    "Toronto Centre": { cpc: 16.15, lpc: 61.06, ndp: 11.93, bq: 0.0, gpc: 7.73, ppc: 0.47, oth: 2.66 },
    "Toronto—Danforth": { cpc: 16.17, lpc: 61.04, ndp: 15.76, bq: 0.0, gpc: 1.94, ppc: 0.51, oth: 4.59 },
    "Toronto—St. Paul's": { cpc: 30.97, lpc: 56.69, ndp: 6.75, bq: 0.0, gpc: 4.99, ppc: 0.47, oth: 0.13 },
    "University—Rosedale": { cpc: 22.64, lpc: 57.51, ndp: 12.89, bq: 0.0, gpc: 4.3, ppc: 0.52, oth: 2.14 },
    "Vaughan—Woodbridge": { cpc: 44.37, lpc: 49.86, ndp: 2.78, bq: 0.0, gpc: 0.81, ppc: 0.95, oth: 1.23 },
    "Waterloo": { cpc: 33.34, lpc: 54.16, ndp: 8.44, bq: 0.0, gpc: 3.18, ppc: 0.88, oth: 0.0 },
    "Wellington—Halton Hills North": { cpc: 54.51, lpc: 34.56, ndp: 5.06, bq: 0.0, gpc: 4.2, ppc: 1.15, oth: 0.5 },
    "Whitby": { cpc: 40.16, lpc: 51.48, ndp: 6.1, bq: 0.0, gpc: 1.44, ppc: 0.82, oth: 0.0 },
    "Willowdale": { cpc: 37.73, lpc: 55.93, ndp: 4.17, bq: 0.0, gpc: 1.69, ppc: 0.48, oth: 0.0 },
    "Windsor—Tecumseh—Lakeshore": { cpc: 37.58, lpc: 42.07, ndp: 15.31, bq: 0.0, gpc: 1.29, ppc: 2.29, oth: 1.45 },
    "Windsor West": { cpc: 29.7, lpc: 41.82, ndp: 24.71, bq: 0.0, gpc: 0.0, ppc: 2.05, oth: 1.72 },
    "York Centre": { cpc: 42.69, lpc: 52.29, ndp: 4.17, bq: 0.0, gpc: 0.0, ppc: 0.84, oth: 0.0 },
    "York—Durham": { cpc: 59.73, lpc: 32.25, ndp: 5.28, bq: 0.0, gpc: 0.49, ppc: 1.18, oth: 1.08 },
    "York South—Weston—Etobicoke": { cpc: 26.52, lpc: 64.3, ndp: 6.47, bq: 0.0, gpc: 1.73, ppc: 0.93, oth: 0.04 },
    "Brandon—Souris": { cpc: 66.62, lpc: 26.64, ndp: 5.6, bq: 0.0, gpc: 0.03, ppc: 1.06, oth: 0.06 },
    "Churchill—Keewatinook Aski": { cpc: 27.12, lpc: 56.18, ndp: 11.69, bq: 0.0, gpc: 4.36, ppc: 0.64, oth: 0.0 },
    "Elmwood—Transcona": { cpc: 39.1, lpc: 40.67, ndp: 16.52, bq: 0.0, gpc: 2.76, ppc: 0.94, oth: 0.02 },
    "Kildonan—St. Paul": { cpc: 40.45, lpc: 52.89, ndp: 5.55, bq: 0.0, gpc: 0.38, ppc: 0.59, oth: 0.15 },
    "Portage—Lisgar": { cpc: 63.74, lpc: 26.65, ndp: 4.01, bq: 0.0, gpc: 0.0, ppc: 3.06, oth: 2.54 },
    "Provencher": { cpc: 51.86, lpc: 35.23, ndp: 3.21, bq: 0.0, gpc: 3.47, ppc: 2.15, oth: 4.09 },
    "Riding Mountain": { cpc: 63.55, lpc: 27.21, ndp: 3.81, bq: 0.0, gpc: 2.86, ppc: 1.3, oth: 1.26 },
    "St. Boniface—St. Vital": { cpc: 22.76, lpc: 70.27, ndp: 4.17, bq: 0.0, gpc: 1.53, ppc: 0.4, oth: 0.87 },
    "Selkirk—Interlake—Eastman": { cpc: 61.69, lpc: 28.53, ndp: 5.15, bq: 0.0, gpc: 3.68, ppc: 0.95, oth: 0.0 },
    "Winnipeg Centre": { cpc: 14.46, lpc: 65.02, ndp: 13.72, bq: 0.0, gpc: 3.41, ppc: 0.55, oth: 2.84 },
    "Winnipeg North": { cpc: 10.5, lpc: 82.35, ndp: 5.28, bq: 0.0, gpc: 1.21, ppc: 0.36, oth: 0.3 },
    "Winnipeg South": { cpc: 24.36, lpc: 71.35, ndp: 2.61, bq: 0.0, gpc: 1.39, ppc: 0.28, oth: 0.0 },
    "Winnipeg South Centre": { cpc: 22.05, lpc: 70.63, ndp: 3.96, bq: 0.0, gpc: 2.63, ppc: 0.25, oth: 0.48 },
    "Winnipeg West": { cpc: 32.26, lpc: 62.4, ndp: 2.92, bq: 0.0, gpc: 2.08, ppc: 0.31, oth: 0.02 },
    "Battlefords—Lloydminster—Meadow Lake": { cpc: 71.4, lpc: 15.47, ndp: 3.35, bq: 0.0, gpc: 1.04, ppc: 0.73, oth: 8.01 },
    "Carlton Trail—Eagle Creek": { cpc: 77.65, lpc: 12.44, ndp: 3.92, bq: 0.0, gpc: 1.35, ppc: 1.21, oth: 3.44 },
    "Desnethé—Missinippi—Churchill River": { cpc: 18.73, lpc: 73.28, ndp: 4.67, bq: 0.0, gpc: 1.17, ppc: 0.28, oth: 1.86 },
    "Moose Jaw—Lake Centre—Lanigan": { cpc: 73.97, lpc: 14.55, ndp: 5.62, bq: 0.0, gpc: 1.59, ppc: 1.57, oth: 2.71 },
    "Prince Albert": { cpc: 67.56, lpc: 24.75, ndp: 3.87, bq: 0.0, gpc: 1.46, ppc: 0.83, oth: 1.53 },
    "Regina—Lewvan": { cpc: 54.26, lpc: 33.41, ndp: 10.01, bq: 0.0, gpc: 1.85, ppc: 0.47, oth: 0.0 },
    "Regina—Qu'Appelle": { cpc: 67.62, lpc: 22.84, ndp: 6.22, bq: 0.0, gpc: 2.68, ppc: 0.63, oth: 0.0 },
    "Regina—Wascana": { cpc: 45.25, lpc: 48.53, ndp: 4.01, bq: 0.0, gpc: 1.85, ppc: 0.36, oth: 0.0 },
    "Saskatoon South": { cpc: 56.34, lpc: 32.71, ndp: 8.57, bq: 0.0, gpc: 1.79, ppc: 0.59, oth: 0.0 },
    "Saskatoon—University": { cpc: 59.35, lpc: 26.74, ndp: 10.73, bq: 0.0, gpc: 1.48, ppc: 0.59, oth: 1.11 },
    "Saskatoon West": { cpc: 61.88, lpc: 22.24, ndp: 13.12, bq: 0.0, gpc: 1.81, ppc: 0.95, oth: 0.0 },
    "Souris—Moose Mountain": { cpc: 83.76, lpc: 9.2, ndp: 2.17, bq: 0.0, gpc: 0.08, ppc: 1.16, oth: 3.63 },
    "Swift Current—Grasslands—Kindersley": { cpc: 79.35, lpc: 8.97, ndp: 2.75, bq: 0.0, gpc: 1.17, ppc: 0.95, oth: 6.82 },
    "Yorkton—Melville": { cpc: 76.45, lpc: 13.95, ndp: 3.29, bq: 0.0, gpc: 2.44, ppc: 1.17, oth: 2.69 },
    "Airdrie—Cochrane": { cpc: 76.74, lpc: 14.79, ndp: 3.67, bq: 0.0, gpc: 1.09, ppc: 2.19, oth: 1.51 },
    "Battle River—Crowfoot": { cpc: 87.49, lpc: 5.93, ndp: 2.28, bq: 0.0, gpc: 0.76, ppc: 2.38, oth: 1.16 },
    "Bow River": { cpc: 83.75, lpc: 10.76, ndp: 2.16, bq: 0.0, gpc: 0.0, ppc: 2.47, oth: 0.86 },
    "Calgary Centre": { cpc: 56.87, lpc: 38.16, ndp: 3.52, bq: 0.0, gpc: 1.23, ppc: 0.0, oth: 0.23 },
    "Calgary Confederation": { cpc: 54.19, lpc: 37.58, ndp: 4.03, bq: 0.0, gpc: 2.96, ppc: 1.15, oth: 0.1 },
    "Calgary Crowfoot": { cpc: 64.65, lpc: 29.01, ndp: 3.65, bq: 0.0, gpc: 1.34, ppc: 1.14, oth: 0.22 },
    "Calgary East": { cpc: 65.6, lpc: 26.14, ndp: 4.3, bq: 0.0, gpc: 1.78, ppc: 1.85, oth: 0.33 },
    "Calgary Heritage": { cpc: 70.76, lpc: 22.32, ndp: 4.02, bq: 0.0, gpc: 1.17, ppc: 1.29, oth: 0.43 },
    "Calgary McKnight": { cpc: 38.54, lpc: 56.0, ndp: 3.49, bq: 0.0, gpc: 0.86, ppc: 0.92, oth: 0.18 },
    "Calgary Midnapore": { cpc: 74.93, lpc: 17.6, ndp: 4.42, bq: 0.0, gpc: 1.13, ppc: 1.57, oth: 0.34 },
    "Calgary Nose Hill": { cpc: 65.94, lpc: 27.4, ndp: 3.87, bq: 0.0, gpc: 1.31, ppc: 1.19, oth: 0.29 },
    "Calgary Shepard": { cpc: 73.97, lpc: 19.12, ndp: 3.72, bq: 0.0, gpc: 1.39, ppc: 1.44, oth: 0.37 },
    "Calgary Signal Hill": { cpc: 68.96, lpc: 25.39, ndp: 3.13, bq: 0.0, gpc: 1.33, ppc: 0.97, oth: 0.23 },
    "Calgary Skyview": { cpc: 51.49, lpc: 43.11, ndp: 3.63, bq: 0.0, gpc: 0.7, ppc: 0.89, oth: 0.18 },
    "Edmonton Centre": { cpc: 43.38, lpc: 47.19, ndp: 7.76, bq: 0.0, gpc: 0.1, ppc: 1.34, oth: 0.23 },
    "Edmonton Gateway": { cpc: 55.11, lpc: 36.92, ndp: 6.21, bq: 0.0, gpc: 0.18, ppc: 1.51, oth: 0.07 },
    "Edmonton Griesbach": { cpc: 57.16, lpc: 27.13, ndp: 12.19, bq: 0.0, gpc: 1.21, ppc: 1.95, oth: 0.36 },
    "Edmonton Manning": { cpc: 57.14, lpc: 32.49, ndp: 8.27, bq: 0.0, gpc: 0.0, ppc: 2.03, oth: 0.08 },
    "Edmonton Northwest": { cpc: 56.9, lpc: 34.32, ndp: 7.0, bq: 0.0, gpc: 0.03, ppc: 1.72, oth: 0.04 },
    "Edmonton Riverbend": { cpc: 56.75, lpc: 35.38, ndp: 5.85, bq: 0.0, gpc: 0.97, ppc: 1.04, oth: 0.01 },
    "Edmonton Southeast": { cpc: 46.05, lpc: 47.2, ndp: 5.23, bq: 0.0, gpc: 0.0, ppc: 1.45, oth: 0.08 },
    "Edmonton Strathcona": { cpc: 53.51, lpc: 20.5, ndp: 22.22, bq: 0.0, gpc: 1.69, ppc: 1.88, oth: 0.21 },
    "Edmonton West": { cpc: 57.56, lpc: 35.05, ndp: 5.93, bq: 0.0, gpc: 0.04, ppc: 1.34, oth: 0.07 },
    "Foothills": { cpc: 83.55, lpc: 9.63, ndp: 2.67, bq: 0.0, gpc: 1.1, ppc: 2.09, oth: 0.97 },
    "Fort McMurray—Cold Lake": { cpc: 83.33, lpc: 9.88, ndp: 2.38, bq: 0.0, gpc: 0.81, ppc: 3.25, oth: 0.34 },
    "Grande Prairie": { cpc: 87.11, lpc: 6.05, ndp: 2.87, bq: 0.0, gpc: 0.0, ppc: 2.68, oth: 1.29 },
    "Lakeland": { cpc: 86.07, lpc: 6.99, ndp: 2.5, bq: 0.0, gpc: 0.74, ppc: 2.85, oth: 0.84 },
    "Leduc—Wetaskiwin": { cpc: 81.97, lpc: 10.43, ndp: 4.37, bq: 0.0, gpc: 0.02, ppc: 3.02, oth: 0.2 },
    "Lethbridge": { cpc: 70.77, lpc: 21.88, ndp: 4.71, bq: 0.0, gpc: 0.0, ppc: 1.84, oth: 0.81 },
    "Medicine Hat—Cardston—Warner": { cpc: 82.34, lpc: 10.05, ndp: 3.33, bq: 0.0, gpc: 1.17, ppc: 2.42, oth: 0.68 },
    "Parkland": { cpc: 82.67, lpc: 9.29, ndp: 4.09, bq: 0.0, gpc: 0.0, ppc: 3.07, oth: 0.87 },
    "Peace River—Westlock": { cpc: 82.78, lpc: 8.23, ndp: 3.33, bq: 0.0, gpc: 0.67, ppc: 3.45, oth: 1.53 },
    "Ponoka—Didsbury": { cpc: 86.23, lpc: 6.72, ndp: 2.67, bq: 0.0, gpc: 0.0, ppc: 3.53, oth: 0.86 },
    "Red Deer": { cpc: 79.58, lpc: 12.2, ndp: 4.38, bq: 0.0, gpc: 0.0, ppc: 3.09, oth: 0.75 },
    "Sherwood Park—Fort Saskatchewan": { cpc: 73.91, lpc: 17.85, ndp: 5.09, bq: 0.0, gpc: 0.86, ppc: 1.87, oth: 0.43 },
    "St. Albert—Sturgeon River": { cpc: 74.34, lpc: 17.17, ndp: 6.0, bq: 0.0, gpc: 0.0, ppc: 2.15, oth: 0.35 },
    "Yellowhead": { cpc: 76.51, lpc: 15.32, ndp: 3.57, bq: 0.0, gpc: 1.07, ppc: 2.44, oth: 1.08 },
    "Abbotsford—South Langley": { cpc: 52.69, lpc: 40.03, ndp: 3.14, bq: 0.0, gpc: 0.74, ppc: 3.4, oth: 0.0 },
    "Burnaby Central": { cpc: 30.25, lpc: 56.73, ndp: 8.1, bq: 0.0, gpc: 0.81, ppc: 1.94, oth: 2.17 },
    "Burnaby North—Seymour": { cpc: 30.64, lpc: 62.71, ndp: 4.56, bq: 0.0, gpc: 0.79, ppc: 1.29, oth: 0.0 },
    "Cariboo—Prince George": { cpc: 62.87, lpc: 26.56, ndp: 3.74, bq: 0.0, gpc: 0.87, ppc: 4.24, oth: 1.72 },
    "Chilliwack—Hope": { cpc: 60.13, lpc: 29.76, ndp: 5.15, bq: 0.0, gpc: 0.75, ppc: 4.21, oth: 0.0 },
    "Cloverdale—Langley City": { cpc: 38.79, lpc: 55.84, ndp: 3.2, bq: 0.0, gpc: 0.0, ppc: 2.18, oth: 0.0 },
    "Columbia—Kootenay—Southern Rockies": { cpc: 67.41, lpc: 18.37, ndp: 8.44, bq: 0.0, gpc: 1.16, ppc: 4.61, oth: 0.0 },
    "Coquitlam—Port Coquitlam": { cpc: 34.83, lpc: 58.29, ndp: 4.76, bq: 0.0, gpc: 0.0, ppc: 2.13, oth: 0.0 },
    "Courtenay—Alberni": { cpc: 52.33, lpc: 30.25, ndp: 10.69, bq: 0.0, gpc: 2.4, ppc: 3.51, oth: 0.81 },
    "Cowichan—Malahat—Langford": { cpc: 46.94, lpc: 36.05, ndp: 10.56, bq: 0.0, gpc: 2.09, ppc: 4.37, oth: 0.0 },
    "Delta": { cpc: 34.7, lpc: 58.51, ndp: 2.85, bq: 0.0, gpc: 0.47, ppc: 1.08, oth: 2.4 },
    "Esquimalt—Saanich—Sooke": { cpc: 34.13, lpc: 47.36, ndp: 10.49, bq: 0.0, gpc: 2.94, ppc: 3.18, oth: 1.89 },
    "Fleetwood—Port Kells": { cpc: 29.89, lpc: 63.99, ndp: 3.18, bq: 0.0, gpc: 0.41, ppc: 1.28, oth: 1.25 },
    "Kamloops—Shuswap—Central Rockies": { cpc: 59.54, lpc: 29.21, ndp: 4.94, bq: 0.0, gpc: 1.37, ppc: 4.53, oth: 0.4 },
    "Kamloops—Thompson—Nicola": { cpc: 57.13, lpc: 30.9, ndp: 5.59, bq: 0.0, gpc: 1.0, ppc: 3.3, oth: 2.08 },
    "Kelowna": { cpc: 50.35, lpc: 41.52, ndp: 3.75, bq: 0.0, gpc: 0.73, ppc: 3.65, oth: 0.0 },
    "Langley Township—Fraser Heights": { cpc: 49.52, lpc: 44.34, ndp: 3.28, bq: 0.0, gpc: 0.55, ppc: 2.14, oth: 0.17 },
    "Mission—Matsqui—Abbotsford": { cpc: 54.99, lpc: 37.57, ndp: 3.13, bq: 0.0, gpc: 0.88, ppc: 3.42, oth: 0.0 },
    "Nanaimo—Ladysmith": { cpc: 47.6, lpc: 31.38, ndp: 7.84, bq: 0.0, gpc: 9.41, ppc: 3.77, oth: 0.0 },
    "New Westminster—Burnaby—Maillardville": { cpc: 34.03, lpc: 50.44, ndp: 11.59, bq: 0.0, gpc: 1.25, ppc: 2.54, oth: 0.15 },
    "North Island—Powell River": { cpc: 55.95, lpc: 27.33, ndp: 9.09, bq: 0.0, gpc: 1.84, ppc: 2.96, oth: 2.83 },
    "North Vancouver—Capilano": { cpc: 31.36, lpc: 63.43, ndp: 3.03, bq: 0.0, gpc: 0.93, ppc: 1.16, oth: 0.1 },
    "Okanagan Lake West—South Kelowna": { cpc: 56.58, lpc: 36.13, ndp: 3.3, bq: 0.0, gpc: 0.65, ppc: 3.35, oth: 0.0 },
    "Pitt Meadows—Maple Ridge": { cpc: 46.25, lpc: 40.83, ndp: 5.81, bq: 0.0, gpc: 0.07, ppc: 2.9, oth: 4.14 },
    "Port Moody—Coquitlam": { cpc: 40.77, lpc: 50.0, ndp: 6.67, bq: 0.0, gpc: 0.0, ppc: 1.78, oth: 0.78 },
    "Prince George—Peace River—Northern Rockies": { cpc: 67.07, lpc: 13.9, ndp: 2.42, bq: 0.0, gpc: 0.8, ppc: 4.95, oth: 10.86 },
    "Richmond Centre—Marpole": { cpc: 38.76, lpc: 56.09, ndp: 3.32, bq: 0.0, gpc: 0.7, ppc: 1.13, oth: 0.0 },
    "Richmond East—Steveston": { cpc: 36.13, lpc: 59.23, ndp: 3.07, bq: 0.0, gpc: 0.51, ppc: 1.06, oth: 0.0 },
    "Saanich—Gulf Islands": { cpc: 37.89, lpc: 41.83, ndp: 4.88, bq: 0.0, gpc: 12.16, ppc: 2.12, oth: 1.12 },
    "Similkameen—South Okanagan—West Kootenay": { cpc: 58.21, lpc: 27.25, ndp: 9.0, bq: 0.0, gpc: 1.05, ppc: 4.48, oth: 0.0 },
    "Skeena—Bulkley Valley": { cpc: 57.22, lpc: 16.15, ndp: 10.05, bq: 0.0, gpc: 1.21, ppc: 5.14, oth: 10.23 },
    "South Surrey—White Rock": { cpc: 43.31, lpc: 52.78, ndp: 2.25, bq: 0.0, gpc: 0.0, ppc: 1.65, oth: 0.0 },
    "Surrey Centre": { cpc: 23.1, lpc: 66.35, ndp: 4.6, bq: 0.0, gpc: 0.5, ppc: 1.81, oth: 3.64 },
    "Surrey Newton": { cpc: 15.6, lpc: 74.12, ndp: 3.98, bq: 0.0, gpc: 0.0, ppc: 1.12, oth: 5.18 },
    "Vancouver Centre": { cpc: 26.49, lpc: 65.42, ndp: 5.48, bq: 0.0, gpc: 0.94, ppc: 1.67, oth: 0.0 },
    "Vancouver East": { cpc: 19.52, lpc: 47.12, ndp: 15.09, bq: 0.0, gpc: 2.81, ppc: 2.1, oth: 13.36 },
    "Vancouver Fraserview—South Burnaby": { cpc: 25.32, lpc: 65.13, ndp: 5.37, bq: 0.0, gpc: 0.24, ppc: 1.46, oth: 2.48 },
    "Vancouver Granville": { cpc: 30.48, lpc: 61.19, ndp: 6.07, bq: 0.0, gpc: 0.69, ppc: 1.24, oth: 0.34 },
    "Vancouver Kingsway": { cpc: 22.19, lpc: 60.53, ndp: 11.79, bq: 0.0, gpc: 1.16, ppc: 1.45, oth: 2.88 },
    "Vancouver Quadra": { cpc: 31.8, lpc: 62.8, ndp: 3.15, bq: 0.0, gpc: 1.32, ppc: 0.93, oth: 0.0 },
    "Vernon—Lake Country—Monashee": { cpc: 55.89, lpc: 33.53, ndp: 4.13, bq: 0.0, gpc: 1.34, ppc: 5.1, oth: 0.0 },
    "Victoria": { cpc: 21.89, lpc: 57.85, ndp: 10.45, bq: 0.0, gpc: 3.63, ppc: 2.08, oth: 4.09 },
    "West Vancouver—Sunshine Coast—Sea to Sky Country": { cpc: 35.91, lpc: 54.15, ndp: 4.94, bq: 0.0, gpc: 1.7, ppc: 1.95, oth: 1.35 },
    "Yukon": { cpc: 34.63, lpc: 38.45, ndp: 12.52, bq: 0.0, gpc: 2.66, ppc: 0.0, oth: 11.74 },
    "Northwest Territories": { cpc: 20.32, lpc: 47.13, ndp: 19.31, bq: 0.0, gpc: 1.51, ppc: 0.0, oth: 11.73 },
    "Nunavut": { cpc: 24.21, lpc: 46.12, ndp: 29.67, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 }
};


// Party colors
const partyColors = {
    "Conservatives (CPC)": "#1a4782", // Blue
    "Liberals (LPC)": "#d71920",      // Red
    "New Democrats (NDP)": "#f58220",                 // Orange
    "Bloc Québécois (BQ)": "#81d3eb", // Light Blue
    "Greens (GPC)": "#3c883e",   // Green
    "People's (PPC)": "#672778",                 // Purple
    "Others (OTH)": "#808080"         // Grey
};

// Populate the dropdown with riding names
const dropdown = document.getElementById("districtDropdown");
Object.keys(electoralData).forEach(riding => {
    const option = document.createElement("option");
    option.value = riding;
    option.textContent = riding;
    dropdown.appendChild(option);
});

// Function to determine the best strategic vote, check for vote split and close race, and generate bar graph
function getStrategicVoteAndGraph(district) {
    const data = electoralData[district];
    if (!data) return "No data available for this district.";

    const parties = [
        { name: "Conservatives (CPC)", votes: data.cpc },
        { name: "Liberals (LPC)", votes: data.lpc },
        { name: "New Democrats (NDP)", votes: data.ndp },
        { name: "Bloc Québécois (BQ)", votes: data.bq },
        { name: "Greens (GPC)", votes: data.gpc },
        { name: "People's (PPC)", votes: data.ppc },
        { name: "Others (OTH)", votes: data.oth }
    ];

    // Sort parties by vote share (descending)
    parties.sort((a, b) => b.votes - a.votes);

    // Find the strongest non-Liberal party
    const nonLiberalParties = parties.filter(party => party.name !== "Liberals (LPC)");
    const strongestOpponent = nonLiberalParties.reduce((prev, curr) => 
        prev.votes > curr.votes ? prev : curr
    );

    // Generate recommendation text
    const recommendation = `To defeat the Liberals (LPC) in ${district}, vote for the <strong>${strongestOpponent.name}</strong>.`;

    // Check if Liberals are leading (highest vote share) and have less than 50%
    let voteSplitWarning = '';
    const leadingParty = parties[0]; // Top party after sorting
    if (leadingParty.name === "Liberals (LPC)" && data.lpc < 50) {
        voteSplitWarning = `<p class="vote-split-warning">Warning: The Liberal vote share is ${data.lpc.toFixed(2)}%, below 50%. An anti-Liberal vote split could allow the Liberals to win.</p>`;
    }

    // Check for close race (difference between LPC and strongest opponent < 10%)
    let closeRaceWarning = '';
    const voteDifference = Math.abs(data.lpc - strongestOpponent.votes);
    if (voteDifference < 10) {
        closeRaceWarning = `<p class="close-race-warning">Close Race: The difference between the Liberals (${data.lpc.toFixed(2)}%) and ${strongestOpponent.name} (${strongestOpponent.votes.toFixed(2)}%) is only ${voteDifference.toFixed(2)}%.</p>`;
    }

    // Generate bar graph HTML
    let graphHtml = '<div class="bar-graph">';
    parties.forEach(party => {
        const barWidth = party.votes; // Use vote percentage directly as width (max 100%)
        graphHtml += `
            <div class="bar-container">
                <span class="party-name">${party.name}</span>
                <div class="bar" style="width: ${barWidth}%; background-color: ${partyColors[party.name]};"></div>
                <span class="vote-share">${party.votes.toFixed(2)}%</span>
            </div>
        `;
    });
    graphHtml += '</div>';

    // Combine recommendation, warnings (if applicable), and graph
    return `${recommendation}${voteSplitWarning}${closeRaceWarning}${graphHtml}`;
}

// Event listener for dropdown change
document.getElementById("districtDropdown").addEventListener("change", function() {
    const selectedDistrict = this.value;
    const resultDiv = document.getElementById("result");

    if (selectedDistrict) {
        const content = getStrategicVoteAndGraph(selectedDistrict);
        resultDiv.innerHTML = content;
    } else {
        resultDiv.innerHTML = "";
    }
});

// Function to calculate and display seat count graph
function displaySeatCountGraph() {
    // Calculate seat counts
    const seatCounts = {
        "Conservatives (CPC)": 0,
        "Liberals (LPC)": 0,
        "New Democrats (NDP)": 0,
        "Bloc Québécois (BQ)": 0,
        "Greens (GPC)": 0,
        "People's (PPC)": 0,
        "Others (OTH)": 0
    };

    Object.values(electoralData).forEach(riding => {
        const parties = [
            { name: "Conservatives (CPC)", votes: riding.cpc },
            { name: "Liberals (LPC)", votes: riding.lpc },
            { name: "New Democrats (NDP)", votes: riding.ndp },
            { name: "Bloc Québécois (BQ)", votes: riding.bq },
            { name: "Greens (GPC)", votes: riding.gpc },
            { name: "People's (PPC)", votes: riding.ppc },
            { name: "Others (OTH)", votes: riding.oth }
        ];

        // Find the winning party (highest vote share)
        const winner = parties.reduce((prev, curr) => 
            prev.votes > curr.votes ? prev : curr
        );
        seatCounts[winner.name]++;
    });

    // Convert to array and sort by seat count (descending)
    const seatData = Object.entries(seatCounts).map(([name, count]) => ({ name, count }));
    seatData.sort((a, b) => b.count - a.count);

    // Calculate max seats for scaling (total seats = 338)
    const maxSeats = 338;
    const totalSeats = seatData.reduce((sum, party) => sum + party.count, 0); // Should be 338

    // Generate seat count graph HTML
    let seatGraphHtml = '<div class="seat-bar-graph">';
    seatData.forEach(party => {
        const barWidth = (party.count / maxSeats) * 100; // Percentage of total seats
        seatGraphHtml += `
            <div class="seat-bar-container">
                <span class="seat-party-name">${party.name}</span>
                <div class="seat-bar" style="width: ${barWidth}%; background-color: ${partyColors[party.name]};"></div>
                <span class="seat-count">${party.count}</span>
            </div>
        `;
    });
    seatGraphHtml += '</div>';

    // Append to the seat count graph div
    const seatCountDiv = document.getElementById("seat-count-graph");
    seatCountDiv.innerHTML = '<h2>Current Seat Count by Party</h2>' + seatGraphHtml;
}

// Display seat count graph on page load
window.onload = function() {
    displaySeatCountGraph();
};
