// Electoral data from the CSV

const electoralData = {
    "Avalon": { cpc: 33.97, lpc: 59.8, ndp: 5.99, bq: 0.0, gpc: 0.0, ppc: 0.25, oth: 0.0 },
    "Cape Spear": { cpc: 22.0, lpc: 67.55, ndp: 10.2, bq: 0.0, gpc: 0.0, ppc: 0.25, oth: 0.0 },
    "Central Newfoundland": { cpc: 45.79, lpc: 51.37, ndp: 2.83, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Labrador": { cpc: 33.99, lpc: 54.65, ndp: 10.89, bq: 0.0, gpc: 0.0, ppc: 0.47, oth: 0.0 },
    "Long Range Mountains": { cpc: 41.18, lpc: 53.12, ndp: 5.1, bq: 0.0, gpc: 0.0, ppc: 0.6, oth: 0.0 },
    "St. John's East": { cpc: 21.49, lpc: 61.31, ndp: 16.9, bq: 0.0, gpc: 0.0, ppc: 0.3, oth: 0.0 },
    "Terra Nova—The Peninsulas": { cpc: 41.1, lpc: 54.92, ndp: 3.46, bq: 0.0, gpc: 0.0, ppc: 0.53, oth: 0.0 },
    "Cardigan": { cpc: 31.4, lpc: 58.74, ndp: 4.05, bq: 0.0, gpc: 4.72, ppc: 0.44, oth: 0.64 },
    "Charlottetown": { cpc: 31.58, lpc: 54.3, ndp: 4.45, bq: 0.0, gpc: 9.42, ppc: 0.26, oth: 0.0 },
    "Egmont": { cpc: 32.04, lpc: 54.24, ndp: 3.65, bq: 0.0, gpc: 9.39, ppc: 0.67, oth: 0.0 },
    "Malpeque": { cpc: 33.67, lpc: 48.84, ndp: 3.33, bq: 0.0, gpc: 13.77, ppc: 0.37, oth: 0.01 },
    "Acadie—Annapolis": { cpc: 55.59, lpc: 38.03, ndp: 5.62, bq: 0.0, gpc: 0.0, ppc: 0.75, oth: 0.0 },
    "Cape Breton—Canso—Antigonish": { cpc: 37.22, lpc: 55.07, ndp: 6.39, bq: 0.0, gpc: 0.5, ppc: 0.55, oth: 0.28 },
    "Central Nova": { cpc: 35.23, lpc: 54.34, ndp: 7.07, bq: 0.0, gpc: 1.57, ppc: 0.56, oth: 1.23 },
    "Cumberland—Colchester": { cpc: 49.03, lpc: 41.65, ndp: 5.37, bq: 0.0, gpc: 2.66, ppc: 0.58, oth: 0.7 },
    "Dartmouth—Cole Harbour": { cpc: 3.63, lpc: 74.24, ndp: 16.98, bq: 0.0, gpc: 3.54, ppc: 1.61, oth: 0.0 },
    "Halifax": { cpc: 15.87, lpc: 60.14, ndp: 20.5, bq: 0.0, gpc: 2.66, ppc: 0.35, oth: 0.48 },
    "Halifax West": { cpc: 24.12, lpc: 60.86, ndp: 11.89, bq: 0.0, gpc: 2.65, ppc: 0.34, oth: 0.15 },
    "Kings—Hants": { cpc: 33.17, lpc: 55.67, ndp: 8.47, bq: 0.0, gpc: 2.04, ppc: 0.65, oth: 0.0 },
    "Sackville—Bedford—Preston": { cpc: 28.18, lpc: 57.59, ndp: 11.42, bq: 0.0, gpc: 2.23, ppc: 0.52, oth: 0.05 },
    "South Shore—St. Margarets": { cpc: 46.04, lpc: 43.16, ndp: 7.89, bq: 0.0, gpc: 2.9, ppc: 0.0, oth: 0.0 },
    "Sydney—Glace Bay": { cpc: 37.37, lpc: 52.43, ndp: 8.83, bq: 0.0, gpc: 0.67, ppc: 0.47, oth: 0.24 },
    "Acadie—Bathurst": { cpc: 14.22, lpc: 76.24, ndp: 4.72, bq: 0.0, gpc: 2.8, ppc: 0.79, oth: 1.23 },
    "Beauséjour": { cpc: 20.52, lpc: 67.08, ndp: 4.74, bq: 0.0, gpc: 5.81, ppc: 1.05, oth: 0.81 },
    "Fredericton—Oromocto": { cpc: 35.6, lpc: 44.57, ndp: 5.48, bq: 0.0, gpc: 12.84, ppc: 0.05, oth: 1.47 },
    "Fundy Royal": { cpc: 52.96, lpc: 33.45, ndp: 6.77, bq: 0.0, gpc: 5.53, ppc: 1.29, oth: 0.0 },
    "Madawaska—Restigouche": { cpc: 28.61, lpc: 61.26, ndp: 2.59, bq: 0.0, gpc: 2.7, ppc: 1.02, oth: 3.81 },
    "Miramichi—Grand Lake": { cpc: 47.3, lpc: 44.03, ndp: 3.14, bq: 0.0, gpc: 4.71, ppc: 0.73, oth: 0.08 },
    "Moncton—Dieppe": { cpc: 24.66, lpc: 62.45, ndp: 7.49, bq: 0.0, gpc: 4.49, ppc: 0.9, oth: 0.0 },
    "Saint John—Kennebecasis": { cpc: 38.73, lpc: 51.84, ndp: 5.73, bq: 0.0, gpc: 3.01, ppc: 0.69, oth: 0.0 },
    "Saint John—St. Croix": { cpc: 52.51, lpc: 35.86, ndp: 5.97, bq: 0.0, gpc: 4.37, ppc: 1.12, oth: 0.16 },
    "Tobique—Mactaquac": { cpc: 58.72, lpc: 28.8, ndp: 5.24, bq: 0.0, gpc: 5.26, ppc: 1.05, oth: 0.92 },
    "Abitibi—Baie-James—Nunavik—Eeyou": { cpc: 21.26, lpc: 34.79, ndp: 5.49, bq: 32.21, gpc: 1.7, ppc: 3.23, oth: 1.32 },
    "Abitibi—Témiscamingue": { cpc: 15.75, lpc: 32.45, ndp: 2.89, bq: 43.19, gpc: 1.81, ppc: 2.9, oth: 1.01 },
    "Ahuntsic-Cartierville": { cpc: 9.89, lpc: 62.81, ndp: 4.97, bq: 17.36, gpc: 2.96, ppc: 2.01, oth: 0.0 },
    "Alfred-Pellan": { cpc: 16.02, lpc: 57.51, ndp: 3.31, bq: 20.31, gpc: 1.64, ppc: 0.26, oth: 0.95 },
    "Argenteuil—La Petite-Nation": { cpc: 16.8, lpc: 48.74, ndp: 3.11, bq: 25.89, gpc: 0.38, ppc: 4.59, oth: 0.48 },
    "Beauce": { cpc: 57.33, lpc: 14.61, ndp: 1.21, bq: 11.41, gpc: 0.83, ppc: 13.79, oth: 0.82 },
    "Beauharnois—Salaberry—Soulanges—Huntingdon": { cpc: 15.78, lpc: 36.32, ndp: 3.46, bq: 40.76, gpc: 0.21, ppc: 2.82, oth: 0.65 },
    "Beauport—Limoilou": { cpc: 37.89, lpc: 30.53, ndp: 4.22, bq: 24.4, gpc: 2.06, ppc: 0.27, oth: 0.63 },
    "Bécancour—Nicolet—Saurel—Alnôbak": { cpc: 22.8, lpc: 22.89, ndp: 2.42, bq: 47.07, gpc: 1.71, ppc: 2.11, oth: 1.0 },
    "Bellechasse—Les Etchemins—Lévis": { cpc: 60.57, lpc: 18.09, ndp: 2.01, bq: 16.79, gpc: 1.36, ppc: 0.0, oth: 1.18 },
    "Beloeil—Chambly": { cpc: 11.62, lpc: 32.41, ndp: 4.13, bq: 46.92, gpc: 2.25, ppc: 1.78, oth: 0.89 },
    "Berthier—Maskinongé": { cpc: 17.22, lpc: 24.26, ndp: 18.05, bq: 35.88, gpc: 1.24, ppc: 2.66, oth: 0.69 },
    "Bourassa": { cpc: 8.15, lpc: 70.19, ndp: 3.26, bq: 13.78, gpc: 1.75, ppc: 2.72, oth: 0.15 },
    "Brome—Missisquoi": { cpc: 20.27, lpc: 43.66, ndp: 2.73, bq: 27.43, gpc: 2.43, ppc: 2.58, oth: 0.9 },
    "Brossard—Saint-Lambert": { cpc: 14.24, lpc: 64.17, ndp: 4.32, bq: 15.0, gpc: 0.0, ppc: 1.87, oth: 0.4 },
    "Charlesbourg—Haute-Saint-Charles": { cpc: 52.74, lpc: 23.0, ndp: 2.43, bq: 18.27, gpc: 1.6, ppc: 1.65, oth: 0.32 },
    "Châteauguay—Les Jardins-de-Napierville": { cpc: 15.47, lpc: 46.36, ndp: 3.48, bq: 29.46, gpc: 1.54, ppc: 3.06, oth: 0.64 },
    "Chicoutimi—Le Fjord": { cpc: 48.27, lpc: 21.75, ndp: 1.97, bq: 25.79, gpc: 1.14, ppc: 1.04, oth: 0.03 },
    "Compton—Stanstead": { cpc: 21.47, lpc: 45.16, ndp: 3.26, bq: 23.83, gpc: 2.83, ppc: 2.97, oth: 0.49 },
    "Côte-du-Sud—Rivière-du-Loup—Kataskomiq—Témiscouata": { cpc: 52.82, lpc: 22.39, ndp: 1.39, bq: 22.22, gpc: 0.0, ppc: 0.27, oth: 0.9 },
    "Côte-Nord—Kawawachikamach—Nitassinan": { cpc: 28.68, lpc: 24.54, ndp: 1.98, bq: 43.78, gpc: 0.0, ppc: 0.0, oth: 1.01 },
    "Dorval—Lachine—LaSalle": { cpc: 14.26, lpc: 62.4, ndp: 5.49, bq: 11.9, gpc: 2.76, ppc: 3.2, oth: 0.0 },
    "Drummond": { cpc: 24.97, lpc: 26.13, ndp: 5.44, bq: 41.13, gpc: 0.0, ppc: 0.0, oth: 2.33 },
    "Gaspésie—Les Îles-de-la-Madeleine—Listuguj": { cpc: 10.43, lpc: 50.11, ndp: 1.89, bq: 35.44, gpc: 0.0, ppc: 1.61, oth: 0.52 },
    "Gatineau": { cpc: 13.35, lpc: 60.11, ndp: 3.63, bq: 17.83, gpc: 1.53, ppc: 3.11, oth: 0.43 },
    "Hochelaga—Rosemont-Est": { cpc: 6.41, lpc: 52.28, ndp: 9.67, bq: 27.09, gpc: 2.22, ppc: 1.98, oth: 0.37 },
    "Honoré-Mercier": { cpc: 12.07, lpc: 68.65, ndp: 2.93, bq: 11.81, gpc: 1.4, ppc: 3.06, oth: 0.06 },
    "Hull—Aylmer": { cpc: 13.0, lpc: 63.2, ndp: 5.38, bq: 12.3, gpc: 2.77, ppc: 2.82, oth: 0.53 },
    "Joliette—Manawan": { cpc: 12.99, lpc: 30.53, ndp: 2.78, bq: 47.89, gpc: 2.19, ppc: 2.65, oth: 0.97 },
    "Jonquière": { cpc: 35.45, lpc: 26.01, ndp: 2.35, bq: 34.19, gpc: 1.73, ppc: 0.0, oth: 0.27 },
    "La Pointe-de-l'Île": { cpc: 9.04, lpc: 43.47, ndp: 4.58, bq: 39.8, gpc: 0.0, ppc: 2.35, oth: 0.76 },
    "La Prairie—Atateken": { cpc: 12.78, lpc: 44.42, ndp: 3.29, bq: 35.58, gpc: 1.75, ppc: 2.13, oth: 0.06 },
    "Lac-Saint-Jean": { cpc: 32.03, lpc: 24.01, ndp: 1.45, bq: 40.86, gpc: 1.65, ppc: 0.0, oth: 0.0 },
    "Lac-Saint-Louis": { cpc: 21.56, lpc: 64.1, ndp: 5.31, bq: 3.85, gpc: 3.01, ppc: 2.16, oth: 0.0 },
    "LaSalle—Émard—Verdun": { cpc: 9.96, lpc: 56.59, ndp: 8.69, bq: 18.03, gpc: 3.21, ppc: 2.85, oth: 0.67 },
    "Laurentides—Labelle": { cpc: 14.2, lpc: 31.69, ndp: 2.63, bq: 44.8, gpc: 2.67, ppc: 3.14, oth: 0.86 },
    "Laurier—Sainte-Marie": { cpc: 6.36, lpc: 55.79, ndp: 15.06, bq: 18.02, gpc: 2.57, ppc: 1.59, oth: 0.61 },
    "Laval—Les Îles": { cpc: 20.64, lpc: 56.93, ndp: 3.14, bq: 14.08, gpc: 1.43, ppc: 3.78, oth: 0.0 },
    "Les Pays-d'en-Haut": { cpc: 15.61, lpc: 34.61, ndp: 3.23, bq: 40.29, gpc: 1.67, ppc: 3.7, oth: 0.88 },
    "Lévis—Lotbinière": { cpc: 58.46, lpc: 18.06, ndp: 3.0, bq: 17.0, gpc: 1.3, ppc: 1.79, oth: 0.39 },
    "Longueuil—Charles-LeMoyne": { cpc: 10.56, lpc: 51.39, ndp: 4.6, bq: 28.43, gpc: 2.53, ppc: 2.39, oth: 0.1 },
    "Longueuil—Saint-Hubert": { cpc: 8.88, lpc: 49.06, ndp: 3.57, bq: 33.45, gpc: 2.92, ppc: 1.95, oth: 0.17 },
    "Louis-Hébert": { cpc: 28.79, lpc: 45.21, ndp: 3.0, bq: 20.25, gpc: 2.52, ppc: 0.0, oth: 0.23 },
    "Louis-Saint-Laurent—Akiawenhrahk": { cpc: 59.82, lpc: 19.91, ndp: 2.13, bq: 14.65, gpc: 1.34, ppc: 1.56, oth: 0.59 },
    "Marc-Aurèle-Fortin": { cpc: 14.54, lpc: 54.58, ndp: 3.72, bq: 24.16, gpc: 0.0, ppc: 2.29, oth: 0.72 },
    "Mégantic—L'Érable—Lotbinière": { cpc: 64.66, lpc: 15.37, ndp: 1.25, bq: 14.16, gpc: 1.22, ppc: 2.56, oth: 0.78 },
    "Mirabel": { cpc: 17.87, lpc: 32.71, ndp: 4.05, bq: 38.96, gpc: 2.37, ppc: 3.26, oth: 0.77 },
    "Mount Royal": { cpc: 26.43, lpc: 62.96, ndp: 3.39, bq: 2.83, gpc: 2.44, ppc: 1.86, oth: 0.08 },
    "Mont-Saint-Bruno—L'Acadie": { cpc: 12.59, lpc: 44.26, ndp: 3.78, bq: 37.41, gpc: 0.16, ppc: 1.75, oth: 0.05 },
    "Montcalm": { cpc: 16.01, lpc: 27.35, ndp: 3.01, bq: 46.19, gpc: 2.86, ppc: 3.75, oth: 0.84 },
    "Montmorency—Charlevoix": { cpc: 41.54, lpc: 24.75, ndp: 1.99, bq: 28.5, gpc: 1.19, ppc: 1.47, oth: 0.56 },
    "Notre-Dame-de-Grâce—Westmount": { cpc: 16.31, lpc: 63.96, ndp: 8.52, bq: 4.59, gpc: 3.95, ppc: 2.52, oth: 0.15 },
    "Outremont": { cpc: 9.76, lpc: 59.09, ndp: 12.75, bq: 13.04, gpc: 3.4, ppc: 1.82, oth: 0.14 },
    "Papineau": { cpc: 6.28, lpc: 65.13, ndp: 10.3, bq: 12.35, gpc: 3.38, ppc: 1.94, oth: 0.63 },
    "Pierre-Boucher—Les Patriotes—Verchères": { cpc: 12.01, lpc: 35.19, ndp: 3.68, bq: 46.83, gpc: 0.0, ppc: 1.7, oth: 0.58 },
    "Pierrefonds—Dollard": { cpc: 23.61, lpc: 63.44, ndp: 4.58, bq: 5.68, gpc: 0.0, ppc: 2.69, oth: 0.0 },
    "Pontiac—Kitigan Zibi": { cpc: 25.39, lpc: 51.98, ndp: 4.71, bq: 11.4, gpc: 2.81, ppc: 3.4, oth: 0.3 },
    "Portneuf—Jacques-Cartier": { cpc: 60.72, lpc: 17.55, ndp: 1.92, bq: 17.44, gpc: 0.0, ppc: 1.81, oth: 0.57 },
    "Québec Centre": { cpc: 22.62, lpc: 44.81, ndp: 5.58, bq: 23.08, gpc: 2.41, ppc: 1.27, oth: 0.23 },
    "Repentigny": { cpc: 12.06, lpc: 38.31, ndp: 3.56, bq: 44.34, gpc: 0.0, ppc: 0.0, oth: 1.74 },
    "Richmond—Arthabaska": { cpc: 58.64, lpc: 17.55, ndp: 1.84, bq: 18.43, gpc: 0.0, ppc: 2.7, oth: 0.84 },
    "Rimouski—La Matapédia": { cpc: 15.47, lpc: 30.48, ndp: 2.83, bq: 47.51, gpc: 0.0, ppc: 1.82, oth: 1.89 },
    "Rivière-des-Mille-Îles": { cpc: 13.21, lpc: 45.49, ndp: 3.25, bq: 33.08, gpc: 1.91, ppc: 2.26, oth: 0.81 },
    "Rivière-du-Nord": { cpc: 16.46, lpc: 30.69, ndp: 3.3, bq: 44.69, gpc: 0.32, ppc: 3.34, oth: 1.2 },
    "Rosemont—La Petite-Patrie": { cpc: 6.68, lpc: 38.71, ndp: 28.46, bq: 22.64, gpc: 3.24, ppc: 0.0, oth: 0.26 },
    "Saint-Hyacinthe—Bagot—Acton": { cpc: 18.61, lpc: 31.19, ndp: 5.61, bq: 41.36, gpc: 0.0, ppc: 2.39, oth: 0.83 },
    "Saint-Jean": { cpc: 16.9, lpc: 37.26, ndp: 3.38, bq: 38.65, gpc: 2.31, ppc: 0.0, oth: 1.5 },
    "Saint-Laurent": { cpc: 20.67, lpc: 66.9, ndp: 4.25, bq: 5.68, gpc: 0.1, ppc: 2.27, oth: 0.13 },
    "Saint-Léonard—Saint-Michel": { cpc: 11.59, lpc: 76.97, ndp: 3.18, bq: 5.6, gpc: 0.0, ppc: 2.66, oth: 0.0 },
    "Saint-Maurice—Champlain": { cpc: 21.63, lpc: 50.94, ndp: 2.13, bq: 22.88, gpc: 1.28, ppc: 0.0, oth: 1.14 },
    "Shefford": { cpc: 15.5, lpc: 42.75, ndp: 2.38, bq: 33.93, gpc: 1.86, ppc: 2.84, oth: 0.73 },
    "Sherbrooke": { cpc: 16.47, lpc: 48.12, ndp: 6.26, bq: 23.58, gpc: 3.01, ppc: 2.02, oth: 0.53 },
    "Terrebonne": { cpc: 14.2, lpc: 39.84, ndp: 3.16, bq: 35.59, gpc: 1.58, ppc: 2.33, oth: 3.31 },
    "Thérèse-De Blainville": { cpc: 14.11, lpc: 44.93, ndp: 3.26, bq: 33.13, gpc: 2.02, ppc: 2.19, oth: 0.36 },
    "Trois-Rivières": { cpc: 35.75, lpc: 34.82, ndp: 3.44, bq: 22.75, gpc: 1.29, ppc: 1.49, oth: 0.47 },
    "Vaudreuil": { cpc: 19.72, lpc: 56.75, ndp: 4.46, bq: 15.89, gpc: 2.47, ppc: 0.0, oth: 0.7 },
    "Ville-Marie—Le Sud-Ouest—Île-des-Sœurs": { cpc: 15.63, lpc: 62.55, ndp: 7.72, bq: 9.22, gpc: 2.65, ppc: 2.03, oth: 0.19 },
    "Vimy": { cpc: 16.46, lpc: 59.54, ndp: 3.88, bq: 16.81, gpc: 0.0, ppc: 3.3, oth: 0.0 },
    "Ajax": { cpc: 28.33, lpc: 63.11, ndp: 5.82, bq: 0.0, gpc: 2.74, ppc: 0.0, oth: 0.0 },
    "Algonquin—Renfrew—Pembroke": { cpc: 60.51, lpc: 24.7, ndp: 9.97, bq: 0.0, gpc: 2.37, ppc: 1.23, oth: 1.22 },
    "Aurora—Oak Ridges—Richmond Hill": { cpc: 44.7, lpc: 49.54, ndp: 3.32, bq: 0.0, gpc: 0.2, ppc: 0.54, oth: 1.7 },
    "Barrie South—Innisfil": { cpc: 56.12, lpc: 35.47, ndp: 7.22, bq: 0.0, gpc: 0.0, ppc: 1.19, oth: 0.0 },
    "Barrie—Springwater—Oro-Medonte": { cpc: 53.77, lpc: 37.26, ndp: 7.59, bq: 0.0, gpc: 0.25, ppc: 1.07, oth: 0.06 },
    "Bay of Quinte": { cpc: 46.1, lpc: 43.86, ndp: 6.74, bq: 0.0, gpc: 2.56, ppc: 0.74, oth: 0.0 },
    "Beaches—East York": { cpc: 16.62, lpc: 68.31, ndp: 10.14, bq: 0.0, gpc: 3.22, ppc: 0.48, oth: 1.23 },
    "Bowmanville—Oshawa North": { cpc: 52.16, lpc: 37.45, ndp: 8.34, bq: 0.0, gpc: 0.0, ppc: 0.83, oth: 1.22 },
    "Brampton Centre": { cpc: 34.97, lpc: 56.12, ndp: 6.84, bq: 0.0, gpc: 0.0, ppc: 0.53, oth: 1.54 },
    "Brampton—Chinguacousy Park": { cpc: 33.45, lpc: 57.17, ndp: 7.06, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 2.32 },
    "Brampton East": { cpc: 31.57, lpc: 61.33, ndp: 6.72, bq: 0.0, gpc: 0.0, ppc: 0.38, oth: 0.0 },
    "Brampton North—Caledon": { cpc: 35.73, lpc: 57.76, ndp: 5.84, bq: 0.0, gpc: 0.45, ppc: 0.14, oth: 0.09 },
    "Brampton South": { cpc: 32.12, lpc: 61.29, ndp: 5.74, bq: 0.0, gpc: 0.0, ppc: 0.41, oth: 0.43 },
    "Brampton West": { cpc: 29.84, lpc: 63.21, ndp: 5.35, bq: 0.0, gpc: 0.0, ppc: 0.35, oth: 1.25 },
    "Brantford—Brant South—Six Nations": { cpc: 49.17, lpc: 35.49, ndp: 9.68, bq: 0.0, gpc: 3.31, ppc: 1.41, oth: 0.93 },
    "Bruce—Grey—Owen Sound": { cpc: 56.93, lpc: 30.46, ndp: 6.12, bq: 0.0, gpc: 3.63, ppc: 1.22, oth: 1.63 },
    "Burlington": { cpc: 40.48, lpc: 51.84, ndp: 4.6, bq: 0.0, gpc: 2.2, ppc: 0.57, oth: 0.31 },
    "Burlington North—Milton West": { cpc: 39.44, lpc: 53.83, ndp: 4.03, bq: 0.0, gpc: 2.14, ppc: 0.56, oth: 0.0 },
    "Cambridge": { cpc: 40.13, lpc: 46.88, ndp: 7.81, bq: 0.0, gpc: 4.08, ppc: 1.1, oth: 0.0 },
    "Carleton": { cpc: 56.31, lpc: 36.09, ndp: 4.81, bq: 0.0, gpc: 2.38, ppc: 0.39, oth: 0.02 },
    "Chatham-Kent—Leamington": { cpc: 53.38, lpc: 35.09, ndp: 7.15, bq: 0.0, gpc: 1.95, ppc: 2.43, oth: 0.0 },
    "Davenport": { cpc: 14.45, lpc: 60.56, ndp: 20.51, bq: 0.0, gpc: 3.27, ppc: 0.57, oth: 0.63 },
    "Don Valley North": { cpc: 34.73, lpc: 58.75, ndp: 4.12, bq: 0.0, gpc: 1.97, ppc: 0.41, oth: 0.02 },
    "Don Valley West": { cpc: 31.56, lpc: 63.0, ndp: 3.76, bq: 0.0, gpc: 1.14, ppc: 0.35, oth: 0.18 },
    "Dufferin—Caledon": { cpc: 55.11, lpc: 33.55, ndp: 4.53, bq: 0.0, gpc: 5.19, ppc: 1.05, oth: 0.57 },
    "Eglinton—Lawrence": { cpc: 38.76, lpc: 53.78, ndp: 3.79, bq: 0.0, gpc: 3.26, ppc: 0.41, oth: 0.0 },
    "Elgin—St. Thomas—London South": { cpc: 60.99, lpc: 25.39, ndp: 7.79, bq: 0.0, gpc: 2.8, ppc: 1.98, oth: 1.04 },
    "Essex": { cpc: 56.29, lpc: 22.14, ndp: 16.92, bq: 0.0, gpc: 1.74, ppc: 1.84, oth: 1.07 },
    "Etobicoke Centre": { cpc: 37.94, lpc: 55.88, ndp: 4.66, bq: 0.0, gpc: 0.36, ppc: 0.96, oth: 0.19 },
    "Etobicoke—Lakeshore": { cpc: 35.99, lpc: 54.49, ndp: 5.82, bq: 0.0, gpc: 2.4, ppc: 0.64, oth: 0.67 },
    "Etobicoke North": { cpc: 27.41, lpc: 66.19, ndp: 4.42, bq: 0.0, gpc: 0.0, ppc: 0.61, oth: 1.36 },
    "Flamborough—Glanbrook—Brant North": { cpc: 50.37, lpc: 39.05, ndp: 6.54, bq: 0.0, gpc: 2.88, ppc: 0.99, oth: 0.16 },
    "Guelph": { cpc: 27.63, lpc: 50.85, ndp: 10.1, bq: 0.0, gpc: 9.47, ppc: 0.72, oth: 1.23 },
    "Haldimand—Norfolk": { cpc: 55.96, lpc: 33.89, ndp: 6.11, bq: 0.0, gpc: 0.0, ppc: 1.63, oth: 2.41 },
    "Haliburton—Kawartha Lakes": { cpc: 59.87, lpc: 28.68, ndp: 6.38, bq: 0.0, gpc: 2.9, ppc: 1.04, oth: 1.13 },
    "Hamilton Centre": { cpc: 24.59, lpc: 41.52, ndp: 27.2, bq: 0.0, gpc: 4.06, ppc: 1.28, oth: 1.35 },
    "Hamilton East—Stoney Creek": { cpc: 36.66, lpc: 49.6, ndp: 10.27, bq: 0.0, gpc: 2.31, ppc: 1.16, oth: 0.0 },
    "Hamilton Mountain": { cpc: 32.48, lpc: 46.67, ndp: 15.92, bq: 0.0, gpc: 2.65, ppc: 1.08, oth: 1.19 },
    "Hamilton West—Ancaster—Dundas": { cpc: 33.61, lpc: 53.43, ndp: 8.87, bq: 0.0, gpc: 3.08, ppc: 0.62, oth: 0.38 },
    "Hastings—Lennox and Addington—Tyendinaga": { cpc: 50.27, lpc: 39.65, ndp: 4.74, bq: 0.0, gpc: 2.01, ppc: 0.82, oth: 2.51 },
    "Humber River—Black Creek": { cpc: 19.45, lpc: 70.75, ndp: 7.13, bq: 0.0, gpc: 1.37, ppc: 0.57, oth: 0.72 },
    "Huron—Bruce": { cpc: 59.04, lpc: 31.64, ndp: 6.67, bq: 0.0, gpc: 0.0, ppc: 1.1, oth: 1.54 },
    "Kanata": { cpc: 40.7, lpc: 49.72, ndp: 6.32, bq: 0.0, gpc: 2.87, ppc: 0.4, oth: 0.0 },
    "Kapuskasing—Timmins—Mushkegowuk": { cpc: 36.64, lpc: 39.82, ndp: 20.28, bq: 0.0, gpc: 0.59, ppc: 2.35, oth: 0.32 },
    "Kenora—Kiiwetinoong": { cpc: 55.82, lpc: 26.68, ndp: 14.61, bq: 0.0, gpc: 1.83, ppc: 1.07, oth: 0.0 },
    "Kingston and the Islands": { cpc: 30.24, lpc: 52.28, ndp: 13.8, bq: 0.0, gpc: 3.1, ppc: 0.56, oth: 0.02 },
    "King—Vaughan": { cpc: 47.7, lpc: 47.57, ndp: 2.74, bq: 0.0, gpc: 1.38, ppc: 0.61, oth: 0.0 },
    "Kitchener Centre": { cpc: 29.15, lpc: 21.25, ndp: 7.99, bq: 0.0, gpc: 40.07, ppc: 1.02, oth: 0.52 },
    "Kitchener—Conestoga": { cpc: 42.67, lpc: 45.28, ndp: 5.26, bq: 0.0, gpc: 5.69, ppc: 1.08, oth: 0.02 },
    "Kitchener South—Hespeler": { cpc: 41.23, lpc: 45.32, ndp: 7.35, bq: 0.0, gpc: 4.09, ppc: 1.03, oth: 1.0 },
    "Lanark—Frontenac": { cpc: 57.33, lpc: 31.08, ndp: 6.85, bq: 0.0, gpc: 3.17, ppc: 0.94, oth: 0.62 },
    "Leeds—Grenville—Thousand Islands—Rideau Lakes": { cpc: 58.03, lpc: 30.19, ndp: 6.68, bq: 0.0, gpc: 4.23, ppc: 0.86, oth: 0.0 },
    "London Centre": { cpc: 31.51, lpc: 49.76, ndp: 15.02, bq: 0.0, gpc: 2.55, ppc: 0.86, oth: 0.3 },
    "London—Fanshawe": { cpc: 36.52, lpc: 36.18, ndp: 25.48, bq: 0.0, gpc: 0.0, ppc: 1.82, oth: 0.0 },
    "London West": { cpc: 40.7, lpc: 45.83, ndp: 10.61, bq: 0.0, gpc: 0.0, ppc: 0.78, oth: 2.08 },
    "Markham—Stouffville": { cpc: 36.83, lpc: 56.99, ndp: 3.63, bq: 0.0, gpc: 2.14, ppc: 0.41, oth: 0.0 },
    "Markham—Thornhill": { cpc: 27.46, lpc: 66.79, ndp: 3.39, bq: 0.0, gpc: 2.13, ppc: 0.24, oth: 0.0 },
    "Markham—Unionville": { cpc: 43.24, lpc: 51.26, ndp: 2.6, bq: 0.0, gpc: 2.91, ppc: 0.0, oth: 0.0 },
    "Middlesex—London": { cpc: 54.09, lpc: 33.85, ndp: 8.3, bq: 0.0, gpc: 2.22, ppc: 1.22, oth: 0.32 },
    "Milton East—Halton Hills South": { cpc: 44.94, lpc: 47.41, ndp: 4.06, bq: 0.0, gpc: 2.9, ppc: 0.7, oth: 0.0 },
    "Mississauga Centre": { cpc: 31.41, lpc: 61.17, ndp: 4.79, bq: 0.0, gpc: 1.81, ppc: 0.6, oth: 0.22 },
    "Mississauga East—Cooksville": { cpc: 34.87, lpc: 57.86, ndp: 4.51, bq: 0.0, gpc: 0.36, ppc: 0.94, oth: 1.47 },
    "Mississauga—Erin Mills": { cpc: 36.02, lpc: 57.4, ndp: 4.31, bq: 0.0, gpc: 1.8, ppc: 0.48, oth: 0.0 },
    "Mississauga—Lakeshore": { cpc: 41.75, lpc: 50.8, ndp: 4.11, bq: 0.0, gpc: 2.44, ppc: 0.61, oth: 0.29 },
    "Mississauga—Malton": { cpc: 32.74, lpc: 58.44, ndp: 5.69, bq: 0.0, gpc: 2.02, ppc: 0.04, oth: 1.07 },
    "Mississauga—Streetsville": { cpc: 37.43, lpc: 53.86, ndp: 5.13, bq: 0.0, gpc: 2.37, ppc: 0.54, oth: 0.67 },
    "Nepean": { cpc: 37.19, lpc: 53.17, ndp: 7.03, bq: 0.0, gpc: 2.21, ppc: 0.4, oth: 0.0 },
    "Newmarket—Aurora": { cpc: 41.7, lpc: 49.91, ndp: 4.91, bq: 0.0, gpc: 2.06, ppc: 0.6, oth: 0.81 },
    "New Tecumseth—Gwillimbury": { cpc: 54.78, lpc: 36.29, ndp: 5.83, bq: 0.0, gpc: 1.46, ppc: 1.13, oth: 0.51 },
    "Niagara Falls—Niagara-on-the-Lake": { cpc: 44.51, lpc: 43.67, ndp: 8.26, bq: 0.0, gpc: 2.37, ppc: 1.19, oth: 0.0 },
    "Niagara South": { cpc: 41.88, lpc: 43.09, ndp: 11.12, bq: 0.0, gpc: 2.44, ppc: 1.47, oth: 0.0 },
    "Niagara West": { cpc: 50.42, lpc: 37.1, ndp: 6.23, bq: 0.0, gpc: 3.28, ppc: 1.07, oth: 1.9 },
    "Nipissing—Timiskaming": { cpc: 39.63, lpc: 47.8, ndp: 11.28, bq: 0.0, gpc: 0.0, ppc: 1.29, oth: 0.0 },
    "Northumberland—Clarke": { cpc: 49.85, lpc: 40.21, ndp: 6.15, bq: 0.0, gpc: 2.98, ppc: 0.82, oth: 0.0 },
    "Oakville East": { cpc: 42.21, lpc: 51.61, ndp: 3.92, bq: 0.0, gpc: 1.8, ppc: 0.47, oth: 0.0 },
    "Oakville West": { cpc: 41.09, lpc: 52.91, ndp: 3.62, bq: 0.0, gpc: 1.88, ppc: 0.51, oth: 0.0 },
    "Orléans": { cpc: 31.39, lpc: 59.77, ndp: 6.15, bq: 0.0, gpc: 1.82, ppc: 0.38, oth: 0.49 },
    "Oshawa": { cpc: 51.29, lpc: 31.15, ndp: 14.32, bq: 0.0, gpc: 2.02, ppc: 1.21, oth: 0.0 },
    "Ottawa Centre": { cpc: 20.22, lpc: 58.6, ndp: 15.81, bq: 0.0, gpc: 3.56, ppc: 0.36, oth: 1.46 },
    "Ottawa South": { cpc: 30.45, lpc: 58.2, ndp: 7.96, bq: 0.0, gpc: 2.54, ppc: 0.46, oth: 0.38 },
    "Ottawa—Vanier—Gloucester": { cpc: 23.94, lpc: 59.6, ndp: 10.55, bq: 0.0, gpc: 3.64, ppc: 0.49, oth: 1.78 },
    "Ottawa West—Nepean": { cpc: 31.71, lpc: 54.31, ndp: 9.02, bq: 0.0, gpc: 3.38, ppc: 0.48, oth: 1.09 },
    "Oxford": { cpc: 57.85, lpc: 26.67, ndp: 8.87, bq: 0.0, gpc: 3.41, ppc: 1.73, oth: 1.47 },
    "Parry Sound—Muskoka": { cpc: 56.72, lpc: 26.72, ndp: 7.75, bq: 0.0, gpc: 6.76, ppc: 1.17, oth: 0.88 },
    "Perth—Wellington": { cpc: 59.08, lpc: 31.25, ndp: 8.14, bq: 0.0, gpc: 0.0, ppc: 1.54, oth: 0.0 },
    "Peterborough": { cpc: 45.43, lpc: 42.11, ndp: 8.65, bq: 0.0, gpc: 2.65, ppc: 0.66, oth: 0.51 },
    "Pickering—Brooklin": { cpc: 37.85, lpc: 55.51, ndp: 5.8, bq: 0.0, gpc: 0.28, ppc: 0.56, oth: 0.0 },
    "Prescott—Russell—Cumberland": { cpc: 35.79, lpc: 54.4, ndp: 4.64, bq: 0.0, gpc: 2.3, ppc: 0.93, oth: 1.94 },
    "Richmond Hill South": { cpc: 40.74, lpc: 52.45, ndp: 3.58, bq: 0.0, gpc: 0.0, ppc: 0.41, oth: 2.83 },
    "Sarnia—Lambton—Bkejwanong": { cpc: 58.98, lpc: 25.65, ndp: 10.36, bq: 0.0, gpc: 1.93, ppc: 1.83, oth: 1.24 },
    "Sault Ste. Marie—Algoma": { cpc: 43.84, lpc: 41.58, ndp: 12.41, bq: 0.0, gpc: 0.8, ppc: 0.85, oth: 0.53 },
    "Scarborough—Agincourt": { cpc: 31.07, lpc: 62.49, ndp: 4.18, bq: 0.0, gpc: 1.87, ppc: 0.39, oth: 0.0 },
    "Scarborough Centre—Don Valley East": { cpc: 27.97, lpc: 64.89, ndp: 5.91, bq: 0.0, gpc: 0.0, ppc: 0.62, oth: 0.62 },
    "Scarborough—Guildwood—Rouge Park": { cpc: 23.99, lpc: 69.48, ndp: 5.66, bq: 0.0, gpc: 0.0, ppc: 0.43, oth: 0.45 },
    "Scarborough North": { cpc: 19.2, lpc: 74.17, ndp: 4.79, bq: 0.0, gpc: 0.0, ppc: 0.34, oth: 1.5 },
    "Scarborough Southwest": { cpc: 22.77, lpc: 66.83, ndp: 6.87, bq: 0.0, gpc: 2.55, ppc: 0.42, oth: 0.56 },
    "Scarborough—Woburn": { cpc: 24.41, lpc: 68.23, ndp: 5.54, bq: 0.0, gpc: 0.0, ppc: 0.44, oth: 1.38 },
    "Simcoe—Grey": { cpc: 54.22, lpc: 33.25, ndp: 5.86, bq: 0.0, gpc: 4.86, ppc: 1.04, oth: 0.76 },
    "Simcoe North": { cpc: 49.5, lpc: 37.75, ndp: 7.29, bq: 0.0, gpc: 3.67, ppc: 1.18, oth: 0.61 },
    "Spadina—Harbourfront": { cpc: 27.67, lpc: 50.85, ndp: 16.79, bq: 0.0, gpc: 4.19, ppc: 0.51, oth: 0.0 },
    "St. Catharines": { cpc: 39.03, lpc: 47.63, ndp: 10.0, bq: 0.0, gpc: 2.3, ppc: 1.04, oth: 0.0 },
    "Stormont—Dundas—Glengarry": { cpc: 61.84, lpc: 29.34, ndp: 4.83, bq: 0.0, gpc: 2.7, ppc: 1.15, oth: 0.14 },
    "Sudbury": { cpc: 35.34, lpc: 46.37, ndp: 14.29, bq: 0.0, gpc: 2.58, ppc: 1.02, oth: 0.4 },
    "Sudbury East—Manitoulin—Nickel Belt": { cpc: 35.76, lpc: 44.34, ndp: 15.69, bq: 0.0, gpc: 2.36, ppc: 1.55, oth: 0.29 },
    "Taiaiako’n—Parkdale—High Park": { cpc: 17.57, lpc: 58.82, ndp: 19.68, bq: 0.0, gpc: 2.55, ppc: 0.55, oth: 0.81 },
    "Thornhill": { cpc: 55.05, lpc: 40.04, ndp: 2.48, bq: 0.0, gpc: 1.79, ppc: 0.64, oth: 0.0 },
    "Thunder Bay—Rainy River": { cpc: 37.34, lpc: 45.56, ndp: 14.12, bq: 0.0, gpc: 1.87, ppc: 1.1, oth: 0.0 },
    "Thunder Bay—Superior North": { cpc: 29.99, lpc: 52.76, ndp: 13.5, bq: 0.0, gpc: 2.27, ppc: 0.97, oth: 0.52 },
    "Toronto Centre": { cpc: 15.27, lpc: 61.44, ndp: 12.07, bq: 0.0, gpc: 9.74, ppc: 0.36, oth: 1.11 },
    "Toronto—Danforth": { cpc: 15.7, lpc: 63.05, ndp: 16.37, bq: 0.0, gpc: 2.51, ppc: 0.4, oth: 1.96 },
    "Toronto—St. Paul's": { cpc: 29.32, lpc: 57.12, ndp: 6.84, bq: 0.0, gpc: 6.3, ppc: 0.36, oth: 0.05 },
    "University—Rosedale": { cpc: 21.62, lpc: 58.43, ndp: 13.17, bq: 0.0, gpc: 5.48, ppc: 0.41, oth: 0.9 },
    "Vaughan—Woodbridge": { cpc: 43.16, lpc: 51.61, ndp: 2.89, bq: 0.0, gpc: 1.05, ppc: 0.76, oth: 0.53 },
    "Waterloo": { cpc: 31.76, lpc: 54.9, ndp: 8.61, bq: 0.0, gpc: 4.04, ppc: 0.69, oth: 0.0 },
    "Wellington—Halton Hills North": { cpc: 52.68, lpc: 35.54, ndp: 5.24, bq: 0.0, gpc: 5.42, ppc: 0.92, oth: 0.21 },
    "Whitby": { cpc: 38.59, lpc: 52.64, ndp: 6.28, bq: 0.0, gpc: 1.84, ppc: 0.65, oth: 0.0 },
    "Willowdale": { cpc: 36.15, lpc: 57.03, ndp: 4.28, bq: 0.0, gpc: 2.16, ppc: 0.38, oth: 0.0 },
    "Windsor—Tecumseh—Lakeshore": { cpc: 36.49, lpc: 43.48, ndp: 15.91, bq: 0.0, gpc: 1.67, ppc: 1.83, oth: 0.62 },
    "Windsor West": { cpc: 28.81, lpc: 43.17, ndp: 25.65, bq: 0.0, gpc: 0.0, ppc: 1.63, oth: 0.73 },
    "York Centre": { cpc: 41.25, lpc: 53.77, ndp: 4.32, bq: 0.0, gpc: 0.0, ppc: 0.67, oth: 0.0 },
    "York—Durham": { cpc: 58.68, lpc: 33.72, ndp: 5.55, bq: 0.0, gpc: 0.64, ppc: 0.95, oth: 0.47 },
    "York South—Weston—Etobicoke": { cpc: 25.27, lpc: 65.19, ndp: 6.6, bq: 0.0, gpc: 2.2, ppc: 0.73, oth: 0.02 },
    "Brandon—Souris": { cpc: 68.3, lpc: 21.87, ndp: 7.19, bq: 0.0, gpc: 0.02, ppc: 2.59, oth: 0.04 },
    "Churchill—Keewatinook Aski": { cpc: 29.92, lpc: 49.62, ndp: 16.15, bq: 0.0, gpc: 2.6, ppc: 1.7, oth: 0.0 },
    "Elmwood—Transcona": { cpc: 40.69, lpc: 33.89, ndp: 21.53, bq: 0.0, gpc: 1.56, ppc: 2.33, oth: 0.01 },
    "Kildonan—St. Paul": { cpc: 44.23, lpc: 46.3, ndp: 7.6, bq: 0.0, gpc: 0.22, ppc: 1.54, oth: 0.1 },
    "Portage—Lisgar": { cpc: 64.38, lpc: 21.55, ndp: 5.08, bq: 0.0, gpc: 0.0, ppc: 7.39, oth: 1.6 },
    "Provencher": { cpc: 55.38, lpc: 30.12, ndp: 4.29, bq: 0.0, gpc: 2.0, ppc: 5.48, oth: 2.73 },
    "Riding Mountain": { cpc: 66.51, lpc: 22.8, ndp: 5.0, bq: 0.0, gpc: 1.62, ppc: 3.24, oth: 0.83 },
    "St. Boniface—St. Vital": { cpc: 26.3, lpc: 64.99, ndp: 6.03, bq: 0.0, gpc: 0.96, ppc: 1.1, oth: 0.63 },
    "Selkirk—Interlake—Eastman": { cpc: 64.78, lpc: 23.98, ndp: 6.77, bq: 0.0, gpc: 2.09, ppc: 2.38, oth: 0.0 },
    "Winnipeg Centre": { cpc: 16.31, lpc: 58.73, ndp: 19.38, bq: 0.0, gpc: 2.08, ppc: 1.49, oth: 2.0 },
    "Winnipeg North": { cpc: 12.39, lpc: 77.8, ndp: 7.81, bq: 0.0, gpc: 0.77, ppc: 1.02, oth: 0.22 },
    "Winnipeg South": { cpc: 28.27, lpc: 66.27, ndp: 3.8, bq: 0.0, gpc: 0.88, ppc: 0.79, oth: 0.0 },
    "Winnipeg South Centre": { cpc: 25.67, lpc: 65.84, ndp: 5.78, bq: 0.0, gpc: 1.66, ppc: 0.7, oth: 0.35 },
    "Winnipeg West": { cpc: 36.76, lpc: 56.93, ndp: 4.16, bq: 0.0, gpc: 1.29, ppc: 0.85, oth: 0.02 },
    "Battlefords—Lloydminster—Meadow Lake": { cpc: 74.93, lpc: 12.99, ndp: 4.41, bq: 0.0, gpc: 0.59, ppc: 1.82, oth: 5.26 },
    "Carlton Trail—Eagle Creek": { cpc: 79.0, lpc: 10.13, ndp: 5.0, bq: 0.0, gpc: 0.74, ppc: 2.94, oth: 2.19 },
    "Desnethé—Missinippi—Churchill River": { cpc: 21.85, lpc: 68.43, ndp: 6.82, bq: 0.0, gpc: 0.74, ppc: 0.79, oth: 1.36 },
    "Moose Jaw—Lake Centre—Lanigan": { cpc: 74.75, lpc: 11.77, ndp: 7.11, bq: 0.0, gpc: 0.87, ppc: 3.79, oth: 1.71 },
    "Prince Albert": { cpc: 70.41, lpc: 20.65, ndp: 5.06, bq: 0.0, gpc: 0.82, ppc: 2.07, oth: 1.0 },
    "Regina—Lewvan": { cpc: 56.71, lpc: 27.96, ndp: 13.1, bq: 0.0, gpc: 1.05, ppc: 1.17, oth: 0.0 },
    "Regina—Qu'Appelle": { cpc: 69.96, lpc: 18.92, ndp: 8.06, bq: 0.0, gpc: 1.5, ppc: 1.56, oth: 0.0 },
    "Regina—Wascana": { cpc: 49.73, lpc: 42.7, ndp: 5.52, bq: 0.0, gpc: 1.1, ppc: 0.96, oth: 0.0 },
    "Saskatoon South": { cpc: 58.91, lpc: 27.38, ndp: 11.22, bq: 0.0, gpc: 1.01, ppc: 1.48, oth: 0.0 },
    "Saskatoon—University": { cpc: 61.12, lpc: 22.05, ndp: 13.83, bq: 0.0, gpc: 0.83, ppc: 1.46, oth: 0.72 },
    "Saskatoon West": { cpc: 62.28, lpc: 17.92, ndp: 16.53, bq: 0.0, gpc: 0.98, ppc: 2.29, oth: 0.0 },
    "Souris—Moose Mountain": { cpc: 84.67, lpc: 7.45, ndp: 2.75, bq: 0.0, gpc: 0.05, ppc: 2.79, oth: 2.29 },
    "Swift Current—Grasslands—Kindersley": { cpc: 81.69, lpc: 7.39, ndp: 3.55, bq: 0.0, gpc: 0.65, ppc: 2.34, oth: 4.39 },
    "Yorkton—Melville": { cpc: 78.37, lpc: 11.45, ndp: 4.23, bq: 0.0, gpc: 1.35, ppc: 2.87, oth: 1.72 },
    "Airdrie—Cochrane": { cpc: 70.75, lpc: 17.81, ndp: 8.44, bq: 0.0, gpc: 1.95, ppc: 0.0, oth: 1.05 },
    "Battle River—Crowfoot": { cpc: 84.72, lpc: 7.5, ndp: 5.51, bq: 0.0, gpc: 1.43, ppc: 0.0, oth: 0.85 },
    "Bow River": { cpc: 80.64, lpc: 13.53, ndp: 5.2, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.63 },
    "Calgary Centre": { cpc: 48.18, lpc: 42.21, ndp: 7.44, bq: 0.0, gpc: 2.02, ppc: 0.0, oth: 0.15 },
    "Calgary Confederation": { cpc: 45.49, lpc: 41.19, ndp: 8.44, bq: 0.0, gpc: 4.82, ppc: 0.0, oth: 0.06 },
    "Calgary Crowfoot": { cpc: 56.51, lpc: 33.11, ndp: 7.97, bq: 0.0, gpc: 2.27, ppc: 0.0, oth: 0.15 },
    "Calgary East": { cpc: 57.45, lpc: 29.89, ndp: 9.41, bq: 0.0, gpc: 3.03, ppc: 0.0, oth: 0.22 },
    "Calgary Heritage": { cpc: 62.88, lpc: 25.89, ndp: 8.92, bq: 0.0, gpc: 2.02, ppc: 0.0, oth: 0.29 },
    "Calgary McKnight": { cpc: 31.54, lpc: 59.84, ndp: 7.14, bq: 0.0, gpc: 1.37, ppc: 0.0, oth: 0.11 },
    "Calgary Midnapore": { cpc: 67.26, lpc: 20.63, ndp: 9.9, bq: 0.0, gpc: 1.98, ppc: 0.0, oth: 0.23 },
    "Calgary Nose Hill": { cpc: 57.78, lpc: 31.35, ndp: 8.46, bq: 0.0, gpc: 2.22, ppc: 0.0, oth: 0.19 },
    "Calgary Shepard": { cpc: 66.53, lpc: 22.45, ndp: 8.34, bq: 0.0, gpc: 2.43, ppc: 0.0, oth: 0.25 },
    "Calgary Signal Hill": { cpc: 61.21, lpc: 29.43, ndp: 6.92, bq: 0.0, gpc: 2.29, ppc: 0.0, oth: 0.15 },
    "Calgary Skyview": { cpc: 43.51, lpc: 47.56, ndp: 7.66, bq: 0.0, gpc: 1.15, ppc: 0.0, oth: 0.11 },
    "Edmonton Centre": { cpc: 34.78, lpc: 49.4, ndp: 15.53, bq: 0.0, gpc: 0.16, ppc: 0.0, oth: 0.14 },
    "Edmonton Gateway": { cpc: 46.23, lpc: 40.43, ndp: 12.99, bq: 0.0, gpc: 0.3, ppc: 0.0, oth: 0.05 },
    "Edmonton Griesbach": { cpc: 45.51, lpc: 28.2, ndp: 24.21, bq: 0.0, gpc: 1.87, ppc: 0.0, oth: 0.22 },
    "Edmonton Manning": { cpc: 47.52, lpc: 35.27, ndp: 17.16, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.05 },
    "Edmonton Northwest": { cpc: 47.71, lpc: 37.58, ndp: 14.64, bq: 0.0, gpc: 0.04, ppc: 0.0, oth: 0.02 },
    "Edmonton Riverbend": { cpc: 47.51, lpc: 38.68, ndp: 12.23, bq: 0.0, gpc: 1.58, ppc: 0.0, oth: 0.01 },
    "Edmonton Southeast": { cpc: 38.12, lpc: 51.02, ndp: 10.81, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.05 },
    "Edmonton Strathcona": { cpc: 38.45, lpc: 19.23, ndp: 39.85, bq: 0.0, gpc: 2.35, ppc: 0.0, oth: 0.11 },
    "Edmonton West": { cpc: 48.67, lpc: 38.7, ndp: 12.52, bq: 0.0, gpc: 0.07, ppc: 0.0, oth: 0.05 },
    "Foothills": { cpc: 79.09, lpc: 11.9, ndp: 6.31, bq: 0.0, gpc: 2.01, ppc: 0.0, oth: 0.69 },
    "Fort McMurray—Cold Lake": { cpc: 80.11, lpc: 12.4, ndp: 5.72, bq: 0.0, gpc: 1.52, ppc: 0.0, oth: 0.25 },
    "Grande Prairie": { cpc: 84.45, lpc: 7.66, ndp: 6.95, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.94 },
    "Lakeland": { cpc: 83.15, lpc: 8.82, ndp: 6.02, bq: 0.0, gpc: 1.39, ppc: 0.0, oth: 0.62 },
    "Leduc—Wetaskiwin": { cpc: 76.85, lpc: 12.77, ndp: 10.22, bq: 0.0, gpc: 0.03, ppc: 0.0, oth: 0.14 },
    "Lethbridge": { cpc: 63.35, lpc: 25.58, ndp: 10.52, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.55 },
    "Medicine Hat—Cardston—Warner": { cpc: 77.27, lpc: 12.32, ndp: 7.81, bq: 0.0, gpc: 2.13, ppc: 0.0, oth: 0.48 },
    "Parkland": { cpc: 78.23, lpc: 11.48, ndp: 9.66, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.62 },
    "Peace River—Westlock": { cpc: 79.35, lpc: 10.3, ndp: 7.98, bq: 0.0, gpc: 1.25, ppc: 0.0, oth: 1.11 },
    "Ponoka—Didsbury": { cpc: 84.28, lpc: 8.57, ndp: 6.51, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.63 },
    "Red Deer": { cpc: 74.37, lpc: 14.89, ndp: 10.21, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.53 },
    "Sherwood Park—Fort Saskatchewan": { cpc: 66.05, lpc: 20.83, ndp: 11.34, bq: 0.0, gpc: 1.48, ppc: 0.0, oth: 0.29 },
    "St. Albert—Sturgeon River": { cpc: 66.39, lpc: 20.02, ndp: 13.36, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.24 },
    "Yellowhead": { cpc: 70.62, lpc: 18.47, ndp: 8.23, bq: 0.0, gpc: 1.92, ppc: 0.0, oth: 0.75 },
    "Abbotsford—South Langley": { cpc: 51.43, lpc: 37.62, ndp: 6.06, bq: 0.0, gpc: 1.65, ppc: 3.24, oth: 0.0 },
    "Burnaby Central": { cpc: 28.57, lpc: 51.58, ndp: 15.13, bq: 0.0, gpc: 1.75, ppc: 1.78, oth: 1.18 },
    "Burnaby North—Seymour": { cpc: 29.72, lpc: 58.55, ndp: 8.75, bq: 0.0, gpc: 1.77, ppc: 1.22, oth: 0.0 },
    "Cariboo—Prince George": { cpc: 61.07, lpc: 24.84, ndp: 7.18, bq: 0.0, gpc: 1.94, ppc: 4.02, oth: 0.96 },
    "Chilliwack—Hope": { cpc: 57.38, lpc: 27.35, ndp: 9.72, bq: 0.0, gpc: 1.63, ppc: 3.92, oth: 0.0 },
    "Cloverdale—Langley City": { cpc: 38.41, lpc: 53.23, ndp: 6.26, bq: 0.0, gpc: 0.0, ppc: 2.1, oth: 0.0 },
    "Columbia—Kootenay—Southern Rockies": { cpc: 61.87, lpc: 16.24, ndp: 15.32, bq: 0.0, gpc: 2.45, ppc: 4.13, oth: 0.0 },
    "Coquitlam—Port Coquitlam": { cpc: 34.0, lpc: 54.79, ndp: 9.18, bq: 0.0, gpc: 0.0, ppc: 2.02, oth: 0.0 },
    "Courtenay—Alberni": { cpc: 46.74, lpc: 26.01, ndp: 18.87, bq: 0.0, gpc: 4.9, ppc: 3.06, oth: 0.42 },
    "Cowichan—Malahat—Langford": { cpc: 42.07, lpc: 31.1, ndp: 18.72, bq: 0.0, gpc: 4.3, ppc: 3.81, oth: 0.0 },
    "Delta": { cpc: 34.64, lpc: 56.24, ndp: 5.62, bq: 0.0, gpc: 1.07, ppc: 1.05, oth: 1.38 },
    "Esquimalt—Saanich—Sooke": { cpc: 30.63, lpc: 40.93, ndp: 18.62, bq: 0.0, gpc: 6.05, ppc: 2.79, oth: 0.98 },
    "Fleetwood—Port Kells": { cpc: 29.69, lpc: 61.19, ndp: 6.24, bq: 0.0, gpc: 0.93, ppc: 1.24, oth: 0.72 },
    "Kamloops—Shuswap—Central Rockies": { cpc: 56.59, lpc: 26.73, ndp: 9.28, bq: 0.0, gpc: 2.98, ppc: 4.2, oth: 0.22 },
    "Kamloops—Thompson—Nicola": { cpc: 54.59, lpc: 28.43, ndp: 10.57, bq: 0.0, gpc: 2.2, ppc: 3.07, oth: 1.15 },
    "Kelowna": { cpc: 48.9, lpc: 38.82, ndp: 7.21, bq: 0.0, gpc: 1.62, ppc: 3.45, oth: 0.0 },
    "Langley Township—Fraser Heights": { cpc: 48.48, lpc: 41.79, ndp: 6.35, bq: 0.0, gpc: 1.24, ppc: 2.04, oth: 0.1 },
    "Mission—Matsqui—Abbotsford": { cpc: 53.54, lpc: 35.22, ndp: 6.02, bq: 0.0, gpc: 1.97, ppc: 3.25, oth: 0.0 },
    "Nanaimo—Ladysmith": { cpc: 40.15, lpc: 25.48, ndp: 13.08, bq: 0.0, gpc: 18.18, ppc: 3.1, oth: 0.0 },
    "New Westminster—Burnaby—Maillardville": { cpc: 30.68, lpc: 43.78, ndp: 20.65, bq: 0.0, gpc: 2.58, ppc: 2.23, oth: 0.08 },
    "North Island—Powell River": { cpc: 51.34, lpc: 24.15, ndp: 16.49, bq: 0.0, gpc: 3.87, ppc: 2.65, oth: 1.5 },
    "North Vancouver—Capilano": { cpc: 30.83, lpc: 60.03, ndp: 5.89, bq: 0.0, gpc: 2.08, ppc: 1.11, oth: 0.06 },
    "Okanagan Lake West—South Kelowna": { cpc: 55.13, lpc: 33.89, ndp: 6.35, bq: 0.0, gpc: 1.46, ppc: 3.18, oth: 0.0 },
    "Pitt Meadows—Maple Ridge": { cpc: 45.16, lpc: 38.38, ndp: 11.22, bq: 0.0, gpc: 0.17, ppc: 2.76, oth: 2.33 },
    "Port Moody—Coquitlam": { cpc: 39.1, lpc: 46.17, ndp: 12.64, bq: 0.0, gpc: 0.0, ppc: 1.66, oth: 0.43 },
    "Prince George—Peace River—Northern Rockies": { cpc: 68.33, lpc: 13.64, ndp: 4.88, bq: 0.0, gpc: 1.87, ppc: 4.91, oth: 6.38 },
    "Richmond Centre—Marpole": { cpc: 37.99, lpc: 52.93, ndp: 6.44, bq: 0.0, gpc: 1.56, ppc: 1.08, oth: 0.0 },
    "Richmond East—Steveston": { cpc: 35.62, lpc: 56.23, ndp: 5.99, bq: 0.0, gpc: 1.14, ppc: 1.02, oth: 0.0 },
    "Saanich—Gulf Islands": { cpc: 32.01, lpc: 34.02, ndp: 8.15, bq: 0.0, gpc: 23.54, ppc: 1.74, oth: 0.55 },
    "Similkameen—South Okanagan—West Kootenay": { cpc: 53.39, lpc: 24.07, ndp: 16.33, bq: 0.0, gpc: 2.22, ppc: 4.0, oth: 0.0 },
    "Skeena—Bulkley Valley": { cpc: 53.82, lpc: 14.62, ndp: 18.7, bq: 0.0, gpc: 2.61, ppc: 4.71, oth: 5.55 },
    "South Surrey—White Rock": { cpc: 43.23, lpc: 50.72, ndp: 4.45, bq: 0.0, gpc: 0.0, ppc: 1.61, oth: 0.0 },
    "Surrey Centre": { cpc: 22.85, lpc: 63.19, ndp: 8.99, bq: 0.0, gpc: 1.14, ppc: 1.75, oth: 2.08 },
    "Surrey Newton": { cpc: 15.77, lpc: 72.14, ndp: 7.96, bq: 0.0, gpc: 0.0, ppc: 1.11, oth: 3.02 },
    "Vancouver Centre": { cpc: 25.45, lpc: 60.52, ndp: 10.4, bq: 0.0, gpc: 2.06, ppc: 1.57, oth: 0.0 },
    "Vancouver East": { cpc: 17.6, lpc: 40.9, ndp: 26.89, bq: 0.0, gpc: 5.81, ppc: 1.85, oth: 6.94 },
    "Vancouver Fraserview—South Burnaby": { cpc: 24.82, lpc: 61.45, ndp: 10.4, bq: 0.0, gpc: 0.53, ppc: 1.39, oth: 1.4 },
    "Vancouver Granville": { cpc: 29.21, lpc: 56.45, ndp: 11.49, bq: 0.0, gpc: 1.51, ppc: 1.16, oth: 0.19 },
    "Vancouver Kingsway": { cpc: 20.26, lpc: 53.22, ndp: 21.29, bq: 0.0, gpc: 2.42, ppc: 1.29, oth: 1.52 },
    "Vancouver Quadra": { cpc: 31.05, lpc: 59.03, ndp: 6.08, bq: 0.0, gpc: 2.95, ppc: 0.89, oth: 0.0 },
    "Vernon—Lake Country—Monashee": { cpc: 53.54, lpc: 30.92, ndp: 7.82, bq: 0.0, gpc: 2.95, ppc: 4.77, oth: 0.0 },
    "Victoria": { cpc: 19.73, lpc: 50.2, ndp: 18.62, bq: 0.0, gpc: 7.5, ppc: 1.82, oth: 2.13 },
    "West Vancouver—Sunshine Coast—Sea to Sky Country": { cpc: 34.4, lpc: 49.94, ndp: 9.36, bq: 0.0, gpc: 3.74, ppc: 1.82, oth: 0.75 },
    "Yukon": { cpc: 31.83, lpc: 39.37, ndp: 13.55, bq: 0.0, gpc: 3.33, ppc: 0.0, oth: 11.93 },
    "Northwest Territories": { cpc: 18.37, lpc: 47.48, ndp: 20.55, bq: 0.0, gpc: 1.87, ppc: 0.0, oth: 11.73 },
    "Nunavut": { cpc: 21.91, lpc: 46.49, ndp: 31.6, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 }
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
