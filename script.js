// Electoral data from the CSV

const electoralData = {
    "Avalon": { cpc: 44.79, lpc: 51.86, ndp: 3.35, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Cape Spear": { cpc: 31.09, lpc: 62.79, ndp: 6.12, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Central Newfoundland": { cpc: 56.69, lpc: 41.82, ndp: 1.49, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Labrador": { cpc: 45.59, lpc: 48.21, ndp: 6.2, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Long Range Mountains": { cpc: 52.61, lpc: 44.62, ndp: 2.77, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "St. John's East": { cpc: 31.15, lpc: 58.45, ndp: 10.4, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Terra Nova—The Peninsulas": { cpc: 52.24, lpc: 45.9, ndp: 1.86, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Cardigan": { cpc: 41.4, lpc: 50.93, ndp: 2.27, bq: 0.0, gpc: 4.76, ppc: 0.0, oth: 0.65 },
    "Charlottetown": { cpc: 41.35, lpc: 46.76, ndp: 2.48, bq: 0.0, gpc: 9.42, ppc: 0.0, oth: 0.0 },
    "Egmont": { cpc: 41.92, lpc: 46.67, ndp: 2.03, bq: 0.0, gpc: 9.39, ppc: 0.0, oth: 0.0 },
    "Malpeque": { cpc: 43.32, lpc: 41.32, ndp: 1.82, bq: 0.0, gpc: 13.54, ppc: 0.0, oth: 0.01 },
    "Acadie—Annapolis": { cpc: 66.99, lpc: 30.14, ndp: 2.87, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Cape Breton—Canso—Antigonish": { cpc: 48.5, lpc: 47.2, ndp: 3.53, bq: 0.0, gpc: 0.49, ppc: 0.0, oth: 0.28 },
    "Central Nova": { cpc: 46.29, lpc: 46.95, ndp: 3.95, bq: 0.0, gpc: 1.58, ppc: 0.0, oth: 1.23 },
    "Cumberland—Colchester": { cpc: 60.33, lpc: 33.71, ndp: 2.8, bq: 0.0, gpc: 2.5, ppc: 0.0, oth: 0.66 },
    "Dartmouth—Cole Harbour": { cpc: 5.81, lpc: 78.29, ndp: 11.56, bq: 0.0, gpc: 4.34, ppc: 0.0, oth: 0.0 },
    "Halifax": { cpc: 23.86, lpc: 59.45, ndp: 13.08, bq: 0.0, gpc: 3.06, ppc: 0.0, oth: 0.56 },
    "Halifax West": { cpc: 33.81, lpc: 56.11, ndp: 7.08, bq: 0.0, gpc: 2.84, ppc: 0.0, oth: 0.16 },
    "Kings—Hants": { cpc: 44.26, lpc: 48.86, ndp: 4.8, bq: 0.0, gpc: 2.09, ppc: 0.0, oth: 0.0 },
    "Sackville—Bedford—Preston": { cpc: 38.79, lpc: 52.13, ndp: 6.67, bq: 0.0, gpc: 2.35, ppc: 0.0, oth: 0.06 },
    "South Shore—St. Margarets": { cpc: 57.56, lpc: 35.48, ndp: 4.19, bq: 0.0, gpc: 2.77, ppc: 0.0, oth: 0.0 },
    "Sydney—Glace Bay": { cpc: 48.99, lpc: 45.19, ndp: 4.91, bq: 0.0, gpc: 0.67, ppc: 0.0, oth: 0.24 },
    "Acadie—Bathurst": { cpc: 20.47, lpc: 72.21, ndp: 2.88, bq: 0.0, gpc: 3.08, ppc: 0.0, oth: 1.36 },
    "Beauséjour": { cpc: 28.61, lpc: 61.53, ndp: 2.8, bq: 0.0, gpc: 6.19, ppc: 0.0, oth: 0.86 },
    "Fredericton—Oromocto": { cpc: 45.54, lpc: 37.5, ndp: 2.97, bq: 0.0, gpc: 12.55, ppc: 0.0, oth: 1.44 },
    "Fundy Royal": { cpc: 64.54, lpc: 26.81, ndp: 3.5, bq: 0.0, gpc: 5.15, ppc: 0.0, oth: 0.0 },
    "Madawaska—Restigouche": { cpc: 38.16, lpc: 53.73, ndp: 1.47, bq: 0.0, gpc: 2.75, ppc: 0.0, oth: 3.89 },
    "Miramichi—Grand Lake": { cpc: 58.22, lpc: 35.64, ndp: 1.64, bq: 0.0, gpc: 4.43, ppc: 0.0, oth: 0.08 },
    "Moncton—Dieppe": { cpc: 34.09, lpc: 56.77, ndp: 4.4, bq: 0.0, gpc: 4.74, ppc: 0.0, oth: 0.0 },
    "Saint John—Kennebecasis": { cpc: 49.94, lpc: 43.96, ndp: 3.14, bq: 0.0, gpc: 2.96, ppc: 0.0, oth: 0.0 },
    "Saint John—St. Croix": { cpc: 63.97, lpc: 28.73, ndp: 3.09, bq: 0.0, gpc: 4.06, ppc: 0.0, oth: 0.15 },
    "Tobique—Mactaquac": { cpc: 69.4, lpc: 22.38, ndp: 2.63, bq: 0.0, gpc: 4.75, ppc: 0.0, oth: 0.83 },
    "Abitibi—Baie-James—Nunavik—Eeyou": { cpc: 24.32, lpc: 32.06, ndp: 4.92, bq: 30.32, gpc: 2.79, ppc: 3.84, oth: 1.75 },
    "Abitibi—Témiscamingue": { cpc: 18.21, lpc: 30.24, ndp: 2.62, bq: 41.1, gpc: 3.0, ppc: 3.48, oth: 1.36 },
    "Ahuntsic-Cartierville": { cpc: 11.64, lpc: 59.54, ndp: 4.58, bq: 16.8, gpc: 4.99, ppc: 2.45, oth: 0.0 },
    "Alfred-Pellan": { cpc: 18.76, lpc: 54.27, ndp: 3.03, bq: 19.58, gpc: 2.76, ppc: 0.32, oth: 1.29 },
    "Argenteuil—La Petite-Nation": { cpc: 19.6, lpc: 45.83, ndp: 2.85, bq: 24.87, gpc: 0.64, ppc: 5.57, oth: 0.65 },
    "Beauce": { cpc: 59.78, lpc: 12.28, ndp: 0.99, bq: 9.79, gpc: 1.24, ppc: 14.94, oth: 0.99 },
    "Beauharnois—Salaberry—Soulanges—Huntingdon": { cpc: 18.5, lpc: 34.31, ndp: 3.18, bq: 39.33, gpc: 0.36, ppc: 3.43, oth: 0.88 },
    "Beauport—Limoilou": { cpc: 42.17, lpc: 27.38, ndp: 3.68, bq: 22.36, gpc: 3.29, ppc: 0.31, oth: 0.81 },
    "Bécancour—Nicolet—Saurel—Alnôbak": { cpc: 26.0, lpc: 21.04, ndp: 2.16, bq: 44.19, gpc: 2.79, ppc: 2.5, oth: 1.32 },
    "Bellechasse—Les Etchemins—Lévis": { cpc: 64.53, lpc: 15.53, ndp: 1.67, bq: 14.73, gpc: 2.09, ppc: 0.0, oth: 1.45 },
    "Beloeil—Chambly": { cpc: 13.56, lpc: 30.47, ndp: 3.77, bq: 45.07, gpc: 3.77, ppc: 2.16, oth: 1.2 },
    "Berthier—Maskinongé": { cpc: 20.07, lpc: 22.78, ndp: 16.49, bq: 34.43, gpc: 2.08, ppc: 3.22, oth: 0.93 },
    "Bourassa": { cpc: 9.68, lpc: 67.25, ndp: 3.04, bq: 13.49, gpc: 2.99, ppc: 3.36, oth: 0.2 },
    "Brome—Missisquoi": { cpc: 23.2, lpc: 40.26, ndp: 2.45, bq: 25.84, gpc: 3.99, ppc: 3.07, oth: 1.19 },
    "Brossard—Saint-Lambert": { cpc: 16.93, lpc: 61.5, ndp: 4.03, bq: 14.68, gpc: 0.0, ppc: 2.31, oth: 0.55 },
    "Charlesbourg—Haute-Saint-Charles": { cpc: 56.96, lpc: 20.02, ndp: 2.05, bq: 16.24, gpc: 2.48, ppc: 1.85, oth: 0.4 },
    "Châteauguay—Les Jardins-de-Napierville": { cpc: 18.0, lpc: 43.48, ndp: 3.17, bq: 28.22, gpc: 2.57, ppc: 3.7, oth: 0.86 },
    "Chicoutimi—Le Fjord": { cpc: 52.85, lpc: 19.19, ndp: 1.69, bq: 23.24, gpc: 1.8, ppc: 1.19, oth: 0.04 },
    "Compton—Stanstead": { cpc: 24.47, lpc: 41.48, ndp: 2.91, bq: 22.35, gpc: 4.62, ppc: 3.51, oth: 0.65 },
    "Côte-du-Sud—Rivière-du-Loup—Kataskomiq—Témiscouata": { cpc: 57.69, lpc: 19.71, ndp: 1.19, bq: 19.97, gpc: 0.0, ppc: 0.3, oth: 1.14 },
    "Côte-Nord—Kawawachikamach—Nitassinan": { cpc: 32.88, lpc: 22.67, ndp: 1.78, bq: 41.32, gpc: 0.0, ppc: 0.0, oth: 1.34 },
    "Dorval—Lachine—LaSalle": { cpc: 16.6, lpc: 58.52, ndp: 5.0, bq: 11.4, gpc: 4.61, ppc: 3.87, oth: 0.0 },
    "Drummond": { cpc: 28.76, lpc: 24.25, ndp: 4.91, bq: 38.98, gpc: 0.0, ppc: 0.0, oth: 3.1 },
    "Gaspésie—Les Îles-de-la-Madeleine—Listuguj": { cpc: 12.45, lpc: 48.23, ndp: 1.77, bq: 34.83, gpc: 0.0, ppc: 2.0, oth: 0.72 },
    "Gatineau": { cpc: 15.66, lpc: 56.83, ndp: 3.34, bq: 17.22, gpc: 2.58, ppc: 3.79, oth: 0.58 },
    "Hochelaga—Rosemont-Est": { cpc: 7.62, lpc: 50.11, ndp: 9.02, bq: 26.52, gpc: 3.79, ppc: 2.44, oth: 0.5 },
    "Honoré-Mercier": { cpc: 14.26, lpc: 65.33, ndp: 2.72, bq: 11.48, gpc: 2.38, ppc: 3.76, oth: 0.09 },
    "Hull—Aylmer": { cpc: 15.16, lpc: 59.37, ndp: 4.91, bq: 11.8, gpc: 4.64, ppc: 3.41, oth: 0.72 },
    "Joliette—Manawan": { cpc: 15.07, lpc: 28.54, ndp: 2.53, bq: 45.73, gpc: 3.64, ppc: 3.19, oth: 1.3 },
    "Jonquière": { cpc: 39.74, lpc: 23.5, ndp: 2.07, bq: 31.55, gpc: 2.78, ppc: 0.0, oth: 0.35 },
    "La Pointe-de-l'Île": { cpc: 10.79, lpc: 41.84, ndp: 4.28, bq: 39.12, gpc: 0.0, ppc: 2.92, oth: 1.05 },
    "La Prairie—Atateken": { cpc: 14.99, lpc: 42.0, ndp: 3.02, bq: 34.37, gpc: 2.94, ppc: 2.59, oth: 0.09 },
    "Lac-Saint-Jean": { cpc: 36.19, lpc: 21.86, ndp: 1.28, bq: 37.99, gpc: 2.68, ppc: 0.0, oth: 0.0 },
    "Lac-Saint-Louis": { cpc: 24.74, lpc: 59.3, ndp: 4.78, bq: 3.64, gpc: 4.97, ppc: 2.58, oth: 0.0 },
    "LaSalle—Émard—Verdun": { cpc: 11.64, lpc: 53.31, ndp: 7.96, bq: 17.35, gpc: 5.38, ppc: 3.45, oth: 0.91 },
    "Laurentides—Labelle": { cpc: 16.36, lpc: 29.43, ndp: 2.38, bq: 42.49, gpc: 4.42, ppc: 3.76, oth: 1.15 },
    "Laurier—Sainte-Marie": { cpc: 7.57, lpc: 53.52, ndp: 14.05, bq: 17.66, gpc: 4.39, ppc: 1.97, oth: 0.84 },
    "Laval—Les Îles": { cpc: 23.85, lpc: 53.01, ndp: 2.84, bq: 13.39, gpc: 2.37, ppc: 4.54, oth: 0.0 },
    "Les Pays-d'en-Haut": { cpc: 18.06, lpc: 32.26, ndp: 2.93, bq: 38.36, gpc: 2.77, ppc: 4.45, oth: 1.18 },
    "Lévis—Lotbinière": { cpc: 62.5, lpc: 15.56, ndp: 2.51, bq: 14.96, gpc: 1.99, ppc: 1.98, oth: 0.48 },
    "Longueuil—Charles-LeMoyne": { cpc: 12.4, lpc: 48.6, ndp: 4.23, bq: 27.46, gpc: 4.26, ppc: 2.91, oth: 0.13 },
    "Longueuil—Saint-Hubert": { cpc: 10.43, lpc: 46.42, ndp: 3.29, bq: 32.33, gpc: 4.93, ppc: 2.37, oth: 0.23 },
    "Louis-Hébert": { cpc: 32.67, lpc: 41.34, ndp: 2.67, bq: 18.92, gpc: 4.1, ppc: 0.0, oth: 0.3 },
    "Louis-Saint-Laurent—Akiawenhrahk": { cpc: 63.77, lpc: 17.1, ndp: 1.78, bq: 12.86, gpc: 2.05, ppc: 1.73, oth: 0.72 },
    "Marc-Aurèle-Fortin": { cpc: 17.2, lpc: 52.03, ndp: 3.44, bq: 23.53, gpc: 0.0, ppc: 2.81, oth: 0.98 },
    "Mégantic—L'Érable—Lotbinière": { cpc: 68.07, lpc: 13.04, ndp: 1.03, bq: 12.27, gpc: 1.84, ppc: 2.8, oth: 0.94 },
    "Mirabel": { cpc: 20.5, lpc: 30.24, ndp: 3.64, bq: 36.8, gpc: 3.91, ppc: 3.88, oth: 1.03 },
    "Mount Royal": { cpc: 30.14, lpc: 57.86, ndp: 3.03, bq: 2.66, gpc: 4.0, ppc: 2.2, oth: 0.11 },
    "Mont-Saint-Bruno—L'Acadie": { cpc: 14.97, lpc: 42.4, ndp: 3.52, bq: 36.6, gpc: 0.28, ppc: 2.16, oth: 0.07 },
    "Montcalm": { cpc: 18.32, lpc: 25.22, ndp: 2.7, bq: 43.5, gpc: 4.69, ppc: 4.45, oth: 1.11 },
    "Montmorency—Charlevoix": { cpc: 45.96, lpc: 22.06, ndp: 1.72, bq: 25.95, gpc: 1.89, ppc: 1.69, oth: 0.72 },
    "Notre-Dame-de-Grâce—Westmount": { cpc: 18.79, lpc: 59.4, ndp: 7.7, bq: 4.35, gpc: 6.54, ppc: 3.01, oth: 0.2 },
    "Outremont": { cpc: 11.48, lpc: 56.0, ndp: 11.75, bq: 12.63, gpc: 5.74, ppc: 2.22, oth: 0.18 },
    "Papineau": { cpc: 7.42, lpc: 62.05, ndp: 9.54, bq: 12.01, gpc: 5.73, ppc: 2.39, oth: 0.87 },
    "Pierre-Boucher—Les Patriotes—Verchères": { cpc: 14.25, lpc: 33.67, ndp: 3.42, bq: 45.76, gpc: 0.0, ppc: 2.1, oth: 0.8 },
    "Pierrefonds—Dollard": { cpc: 27.52, lpc: 59.59, ndp: 4.18, bq: 5.45, gpc: 0.0, ppc: 3.26, oth: 0.0 },
    "Pontiac—Kitigan Zibi": { cpc: 28.76, lpc: 47.45, ndp: 4.18, bq: 10.63, gpc: 4.57, ppc: 4.0, oth: 0.4 },
    "Portneuf—Jacques-Cartier": { cpc: 65.11, lpc: 15.16, ndp: 1.61, bq: 15.39, gpc: 0.0, ppc: 2.02, oth: 0.7 },
    "Québec Centre": { cpc: 25.96, lpc: 41.44, ndp: 5.02, bq: 21.8, gpc: 3.97, ppc: 1.51, oth: 0.3 },
    "Repentigny": { cpc: 14.31, lpc: 36.65, ndp: 3.31, bq: 43.33, gpc: 0.0, ppc: 0.0, oth: 2.39 },
    "Richmond—Arthabaska": { cpc: 62.93, lpc: 15.18, ndp: 1.55, bq: 16.28, gpc: 0.0, ppc: 3.01, oth: 1.04 },
    "Rimouski—La Matapédia": { cpc: 18.1, lpc: 28.75, ndp: 2.6, bq: 45.77, gpc: 0.0, ppc: 2.21, oth: 2.56 },
    "Rivière-des-Mille-Îles": { cpc: 15.42, lpc: 42.79, ndp: 2.97, bq: 31.78, gpc: 3.2, ppc: 2.74, oth: 1.1 },
    "Rivière-du-Nord": { cpc: 19.17, lpc: 28.8, ndp: 3.01, bq: 42.83, gpc: 0.54, ppc: 4.04, oth: 1.61 },
    "Rosemont—La Petite-Patrie": { cpc: 7.98, lpc: 37.24, ndp: 26.62, bq: 22.25, gpc: 5.55, ppc: 0.0, oth: 0.36 },
    "Saint-Hyacinthe—Bagot—Acton": { cpc: 21.73, lpc: 29.35, ndp: 5.13, bq: 39.76, gpc: 0.0, ppc: 2.9, oth: 1.12 },
    "Saint-Jean": { cpc: 19.55, lpc: 34.74, ndp: 3.06, bq: 36.81, gpc: 3.84, ppc: 0.0, oth: 2.01 },
    "Saint-Laurent": { cpc: 24.25, lpc: 63.24, ndp: 3.91, bq: 5.48, gpc: 0.17, ppc: 2.77, oth: 0.18 },
    "Saint-Léonard—Saint-Michel": { cpc: 13.88, lpc: 74.3, ndp: 2.98, bq: 5.52, gpc: 0.0, ppc: 3.31, oth: 0.0 },
    "Saint-Maurice—Champlain": { cpc: 25.05, lpc: 47.55, ndp: 1.93, bq: 21.81, gpc: 2.12, ppc: 0.0, oth: 1.53 },
    "Shefford": { cpc: 17.98, lpc: 39.96, ndp: 2.17, bq: 32.4, gpc: 3.09, ppc: 3.42, oth: 0.98 },
    "Sherbrooke": { cpc: 19.02, lpc: 44.78, ndp: 5.66, bq: 22.41, gpc: 4.99, ppc: 2.43, oth: 0.71 },
    "Terrebonne": { cpc: 16.4, lpc: 37.08, ndp: 2.86, bq: 33.84, gpc: 2.61, ppc: 2.79, oth: 4.42 },
    "Thérèse-De Blainville": { cpc: 16.46, lpc: 42.23, ndp: 2.98, bq: 31.81, gpc: 3.38, ppc: 2.66, oth: 0.48 },
    "Trois-Rivières": { cpc: 40.09, lpc: 31.47, ndp: 3.02, bq: 21.0, gpc: 2.07, ppc: 1.74, oth: 0.61 },
    "Vaudreuil": { cpc: 22.83, lpc: 52.94, ndp: 4.04, bq: 15.14, gpc: 4.1, ppc: 0.0, oth: 0.94 },
    "Ville-Marie—Le Sud-Ouest—Île-des-Sœurs": { cpc: 18.22, lpc: 58.74, ndp: 7.05, bq: 8.84, gpc: 4.44, ppc: 2.46, oth: 0.25 },
    "Vimy": { cpc: 19.42, lpc: 56.61, ndp: 3.59, bq: 16.33, gpc: 0.0, ppc: 4.05, oth: 0.0 },
    "Ajax": { cpc: 27.99, lpc: 64.87, ndp: 5.02, bq: 0.0, gpc: 2.12, ppc: 0.0, oth: 0.0 },
    "Algonquin—Renfrew—Pembroke": { cpc: 59.8, lpc: 25.39, ndp: 8.6, bq: 0.0, gpc: 1.83, ppc: 2.54, oth: 1.84 },
    "Aurora—Oak Ridges—Richmond Hill": { cpc: 43.39, lpc: 50.03, ndp: 2.81, bq: 0.0, gpc: 0.15, ppc: 1.1, oth: 2.52 },
    "Barrie South—Innisfil": { cpc: 55.12, lpc: 36.25, ndp: 6.19, bq: 0.0, gpc: 0.0, ppc: 2.44, oth: 0.0 },
    "Barrie—Springwater—Oro-Medonte": { cpc: 52.87, lpc: 38.12, ndp: 6.52, bq: 0.0, gpc: 0.2, ppc: 2.2, oth: 0.08 },
    "Bay of Quinte": { cpc: 45.57, lpc: 45.1, ndp: 5.82, bq: 0.0, gpc: 1.98, ppc: 1.52, oth: 0.0 },
    "Beaches—East York": { cpc: 16.3, lpc: 69.72, ndp: 8.69, bq: 0.0, gpc: 2.47, ppc: 0.99, oth: 1.84 },
    "Bowmanville—Oshawa North": { cpc: 51.14, lpc: 38.2, ndp: 7.14, bq: 0.0, gpc: 0.0, ppc: 1.7, oth: 1.82 },
    "Brampton Centre": { cpc: 34.03, lpc: 56.8, ndp: 5.81, bq: 0.0, gpc: 0.0, ppc: 1.07, oth: 2.29 },
    "Brampton—Chinguacousy Park": { cpc: 32.59, lpc: 57.95, ndp: 6.01, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 3.45 },
    "Brampton East": { cpc: 30.93, lpc: 62.53, ndp: 5.75, bq: 0.0, gpc: 0.0, ppc: 0.79, oth: 0.0 },
    "Brampton North—Caledon": { cpc: 35.14, lpc: 59.1, ndp: 5.02, bq: 0.0, gpc: 0.34, ppc: 0.28, oth: 0.13 },
    "Brampton South": { cpc: 31.36, lpc: 62.25, ndp: 4.9, bq: 0.0, gpc: 0.0, ppc: 0.84, oth: 0.65 },
    "Brampton West": { cpc: 29.0, lpc: 63.91, ndp: 4.54, bq: 0.0, gpc: 0.0, ppc: 0.71, oth: 1.84 },
    "Brantford—Brant South—Six Nations": { cpc: 48.43, lpc: 36.37, ndp: 8.33, bq: 0.0, gpc: 2.55, ppc: 2.92, oth: 1.4 },
    "Bruce—Grey—Owen Sound": { cpc: 55.89, lpc: 31.12, ndp: 5.25, bq: 0.0, gpc: 2.79, ppc: 2.52, oth: 2.44 },
    "Burlington": { cpc: 39.75, lpc: 52.97, ndp: 3.94, bq: 0.0, gpc: 1.7, ppc: 1.18, oth: 0.46 },
    "Burlington North—Milton West": { cpc: 38.73, lpc: 55.01, ndp: 3.45, bq: 0.0, gpc: 1.65, ppc: 1.16, oth: 0.0 },
    "Cambridge": { cpc: 39.64, lpc: 48.18, ndp: 6.74, bq: 0.0, gpc: 3.15, ppc: 2.29, oth: 0.0 },
    "Carleton": { cpc: 55.88, lpc: 37.27, ndp: 4.16, bq: 0.0, gpc: 1.85, ppc: 0.82, oth: 0.03 },
    "Chatham-Kent—Leamington": { cpc: 51.95, lpc: 35.53, ndp: 6.08, bq: 0.0, gpc: 1.48, ppc: 4.96, oth: 0.0 },
    "Davenport": { cpc: 14.44, lpc: 62.95, ndp: 17.89, bq: 0.0, gpc: 2.56, ppc: 1.19, oth: 0.97 },
    "Don Valley North": { cpc: 34.09, lpc: 59.99, ndp: 3.53, bq: 0.0, gpc: 1.52, ppc: 0.85, oth: 0.03 },
    "Don Valley West": { cpc: 30.85, lpc: 64.07, ndp: 3.21, bq: 0.0, gpc: 0.88, ppc: 0.72, oth: 0.27 },
    "Dufferin—Caledon": { cpc: 54.51, lpc: 34.52, ndp: 3.92, bq: 0.0, gpc: 4.02, ppc: 2.18, oth: 0.86 },
    "Eglinton—Lawrence": { cpc: 38.21, lpc: 55.17, ndp: 3.26, bq: 0.0, gpc: 2.52, ppc: 0.84, oth: 0.0 },
    "Elgin—St. Thomas—London South": { cpc: 59.71, lpc: 25.86, ndp: 6.66, bq: 0.0, gpc: 2.15, ppc: 4.07, oth: 1.55 },
    "Essex": { cpc: 55.76, lpc: 22.82, ndp: 14.64, bq: 0.0, gpc: 1.35, ppc: 3.82, oth: 1.61 },
    "Etobicoke Centre": { cpc: 36.93, lpc: 56.59, ndp: 3.96, bq: 0.0, gpc: 0.27, ppc: 1.96, oth: 0.29 },
    "Etobicoke—Lakeshore": { cpc: 35.28, lpc: 55.58, ndp: 4.98, bq: 0.0, gpc: 1.84, ppc: 1.32, oth: 1.0 },
    "Etobicoke North": { cpc: 26.48, lpc: 66.54, ndp: 3.73, bq: 0.0, gpc: 0.0, ppc: 1.24, oth: 2.0 },
    "Flamborough—Glanbrook—Brant North": { cpc: 49.73, lpc: 40.11, ndp: 5.64, bq: 0.0, gpc: 2.23, ppc: 2.04, oth: 0.25 },
    "Guelph": { cpc: 27.59, lpc: 52.82, ndp: 8.8, bq: 0.0, gpc: 7.4, ppc: 1.51, oth: 1.87 },
    "Haldimand—Norfolk": { cpc: 53.99, lpc: 34.02, ndp: 5.14, bq: 0.0, gpc: 0.0, ppc: 3.29, oth: 3.55 },
    "Haliburton—Kawartha Lakes": { cpc: 59.02, lpc: 29.41, ndp: 5.49, bq: 0.0, gpc: 2.24, ppc: 2.14, oth: 1.7 },
    "Hamilton Centre": { cpc: 24.73, lpc: 43.43, ndp: 23.88, bq: 0.0, gpc: 3.19, ppc: 2.71, oth: 2.06 },
    "Hamilton East—Stoney Creek": { cpc: 36.13, lpc: 50.86, ndp: 8.83, bq: 0.0, gpc: 1.79, ppc: 2.4, oth: 0.0 },
    "Hamilton Mountain": { cpc: 32.13, lpc: 48.03, ndp: 13.75, bq: 0.0, gpc: 2.05, ppc: 2.23, oth: 1.8 },
    "Hamilton West—Ancaster—Dundas": { cpc: 33.19, lpc: 54.9, ndp: 7.65, bq: 0.0, gpc: 2.38, ppc: 1.29, oth: 0.58 },
    "Hastings—Lennox and Addington—Tyendinaga": { cpc: 48.9, lpc: 40.14, ndp: 4.02, bq: 0.0, gpc: 1.53, ppc: 1.68, oth: 3.73 },
    "Humber River—Black Creek": { cpc: 18.94, lpc: 71.71, ndp: 6.07, bq: 0.0, gpc: 1.05, ppc: 1.17, oth: 1.06 },
    "Huron—Bruce": { cpc: 57.63, lpc: 32.13, ndp: 5.69, bq: 0.0, gpc: 0.0, ppc: 2.26, oth: 2.29 },
    "Kanata": { cpc: 40.28, lpc: 51.21, ndp: 5.46, bq: 0.0, gpc: 2.22, ppc: 0.83, oth: 0.0 },
    "Kapuskasing—Timmins—Mushkegowuk": { cpc: 36.05, lpc: 40.76, ndp: 17.42, bq: 0.0, gpc: 0.45, ppc: 4.84, oth: 0.49 },
    "Kenora—Kiiwetinoong": { cpc: 55.82, lpc: 27.75, ndp: 12.76, bq: 0.0, gpc: 1.43, ppc: 2.24, oth: 0.0 },
    "Kingston and the Islands": { cpc: 30.14, lpc: 54.22, ndp: 12.01, bq: 0.0, gpc: 2.42, ppc: 1.18, oth: 0.03 },
    "King—Vaughan": { cpc: 46.79, lpc: 48.55, ndp: 2.35, bq: 0.0, gpc: 1.06, ppc: 1.25, oth: 0.0 },
    "Kitchener Centre": { cpc: 31.5, lpc: 23.89, ndp: 7.54, bq: 0.0, gpc: 33.9, ppc: 2.32, oth: 0.86 },
    "Kitchener—Conestoga": { cpc: 42.2, lpc: 46.59, ndp: 4.54, bq: 0.0, gpc: 4.41, ppc: 2.23, oth: 0.03 },
    "Kitchener South—Hespeler": { cpc: 40.56, lpc: 46.38, ndp: 6.31, bq: 0.0, gpc: 3.15, ppc: 2.12, oth: 1.49 },
    "Lanark—Frontenac": { cpc: 56.73, lpc: 32.0, ndp: 5.92, bq: 0.0, gpc: 2.46, ppc: 1.95, oth: 0.94 },
    "Leeds—Grenville—Thousand Islands—Rideau Lakes": { cpc: 57.79, lpc: 31.29, ndp: 5.81, bq: 0.0, gpc: 3.3, ppc: 1.8, oth: 0.0 },
    "London Centre": { cpc: 31.3, lpc: 51.43, ndp: 13.03, bq: 0.0, gpc: 1.99, ppc: 1.79, oth: 0.46 },
    "London—Fanshawe": { cpc: 36.44, lpc: 37.56, ndp: 22.2, bq: 0.0, gpc: 0.0, ppc: 3.8, oth: 0.0 },
    "London West": { cpc: 39.72, lpc: 46.54, ndp: 9.04, bq: 0.0, gpc: 0.0, ppc: 1.6, oth: 3.09 },
    "Markham—Stouffville": { cpc: 36.17, lpc: 58.23, ndp: 3.11, bq: 0.0, gpc: 1.65, ppc: 0.84, oth: 0.0 },
    "Markham—Thornhill": { cpc: 26.9, lpc: 68.09, ndp: 2.9, bq: 0.0, gpc: 1.63, ppc: 0.48, oth: 0.0 },
    "Markham—Unionville": { cpc: 42.76, lpc: 52.74, ndp: 2.24, bq: 0.0, gpc: 2.25, ppc: 0.0, oth: 0.0 },
    "Middlesex—London": { cpc: 53.37, lpc: 34.76, ndp: 7.15, bq: 0.0, gpc: 1.71, ppc: 2.52, oth: 0.48 },
    "Milton East—Halton Hills South": { cpc: 44.26, lpc: 48.58, ndp: 3.49, bq: 0.0, gpc: 2.23, ppc: 1.44, oth: 0.0 },
    "Mississauga Centre": { cpc: 30.72, lpc: 62.24, ndp: 4.09, bq: 0.0, gpc: 1.39, ppc: 1.23, oth: 0.33 },
    "Mississauga East—Cooksville": { cpc: 33.69, lpc: 58.17, ndp: 3.8, bq: 0.0, gpc: 0.28, ppc: 1.89, oth: 2.17 },
    "Mississauga—Erin Mills": { cpc: 35.35, lpc: 58.6, ndp: 3.69, bq: 0.0, gpc: 1.38, ppc: 0.98, oth: 0.0 },
    "Mississauga—Lakeshore": { cpc: 41.0, lpc: 51.91, ndp: 3.53, bq: 0.0, gpc: 1.87, ppc: 1.25, oth: 0.44 },
    "Mississauga—Malton": { cpc: 32.16, lpc: 59.72, ndp: 4.88, bq: 0.0, gpc: 1.56, ppc: 0.09, oth: 1.59 },
    "Mississauga—Streetsville": { cpc: 36.71, lpc: 54.96, ndp: 4.4, bq: 0.0, gpc: 1.82, ppc: 1.1, oth: 1.01 },
    "Nepean": { cpc: 36.74, lpc: 54.65, ndp: 6.07, bq: 0.0, gpc: 1.71, ppc: 0.83, oth: 0.0 },
    "Newmarket—Aurora": { cpc: 40.87, lpc: 50.89, ndp: 4.2, bq: 0.0, gpc: 1.58, ppc: 1.24, oth: 1.22 },
    "New Tecumseth—Gwillimbury": { cpc: 53.75, lpc: 37.05, ndp: 5.0, bq: 0.0, gpc: 1.12, ppc: 2.33, oth: 0.76 },
    "Niagara Falls—Niagara-on-the-Lake": { cpc: 43.85, lpc: 44.77, ndp: 7.11, bq: 0.0, gpc: 1.83, ppc: 2.45, oth: 0.0 },
    "Niagara South": { cpc: 41.29, lpc: 44.21, ndp: 9.57, bq: 0.0, gpc: 1.89, ppc: 3.04, oth: 0.0 },
    "Niagara West": { cpc: 49.36, lpc: 37.78, ndp: 5.32, bq: 0.0, gpc: 2.52, ppc: 2.19, oth: 2.84 },
    "Nipissing—Timiskaming": { cpc: 38.88, lpc: 48.79, ndp: 9.67, bq: 0.0, gpc: 0.0, ppc: 2.66, oth: 0.0 },
    "Northumberland—Clarke": { cpc: 49.31, lpc: 41.39, ndp: 5.31, bq: 0.0, gpc: 2.31, ppc: 1.69, oth: 0.0 },
    "Oakville East": { cpc: 41.5, lpc: 52.79, ndp: 3.36, bq: 0.0, gpc: 1.38, ppc: 0.96, oth: 0.0 },
    "Oakville West": { cpc: 40.35, lpc: 54.06, ndp: 3.1, bq: 0.0, gpc: 1.45, ppc: 1.04, oth: 0.0 },
    "Orléans": { cpc: 30.8, lpc: 61.02, ndp: 5.27, bq: 0.0, gpc: 1.4, ppc: 0.78, oth: 0.73 },
    "Oshawa": { cpc: 51.12, lpc: 32.3, ndp: 12.46, bq: 0.0, gpc: 1.58, ppc: 2.53, oth: 0.0 },
    "Ottawa Centre": { cpc: 20.07, lpc: 60.51, ndp: 13.7, bq: 0.0, gpc: 2.76, ppc: 0.76, oth: 2.2 },
    "Ottawa South": { cpc: 30.01, lpc: 59.67, ndp: 6.85, bq: 0.0, gpc: 1.96, ppc: 0.95, oth: 0.57 },
    "Ottawa—Vanier—Gloucester": { cpc: 23.53, lpc: 60.94, ndp: 9.06, bq: 0.0, gpc: 2.8, ppc: 1.01, oth: 2.66 },
    "Ottawa West—Nepean": { cpc: 31.27, lpc: 55.72, ndp: 7.76, bq: 0.0, gpc: 2.61, ppc: 1.0, oth: 1.64 },
    "Oxford": { cpc: 56.79, lpc: 27.24, ndp: 7.61, bq: 0.0, gpc: 2.62, ppc: 3.55, oth: 2.2 },
    "Parry Sound—Muskoka": { cpc: 56.51, lpc: 27.7, ndp: 6.74, bq: 0.0, gpc: 5.27, ppc: 2.45, oth: 1.34 },
    "Perth—Wellington": { cpc: 57.96, lpc: 31.9, ndp: 6.97, bq: 0.0, gpc: 0.0, ppc: 3.17, oth: 0.0 },
    "Peterborough": { cpc: 44.97, lpc: 43.37, ndp: 7.47, bq: 0.0, gpc: 2.05, ppc: 1.36, oth: 0.77 },
    "Pickering—Brooklin": { cpc: 37.09, lpc: 56.59, ndp: 4.96, bq: 0.0, gpc: 0.22, ppc: 1.15, oth: 0.0 },
    "Prescott—Russell—Cumberland": { cpc: 34.69, lpc: 54.87, ndp: 3.93, bq: 0.0, gpc: 1.75, ppc: 1.89, oth: 2.86 },
    "Richmond Hill South": { cpc: 39.32, lpc: 52.67, ndp: 3.02, bq: 0.0, gpc: 0.0, ppc: 0.83, oth: 4.16 },
    "Sarnia—Lambton—Bkejwanong": { cpc: 57.85, lpc: 26.17, ndp: 8.87, bq: 0.0, gpc: 1.48, ppc: 3.77, oth: 1.86 },
    "Sault Ste. Marie—Algoma": { cpc: 43.34, lpc: 42.77, ndp: 10.71, bq: 0.0, gpc: 0.62, ppc: 1.76, oth: 0.79 },
    "Scarborough—Agincourt": { cpc: 30.46, lpc: 63.73, ndp: 3.58, bq: 0.0, gpc: 1.44, ppc: 0.8, oth: 0.0 },
    "Scarborough Centre—Don Valley East": { cpc: 27.18, lpc: 65.63, ndp: 5.01, bq: 0.0, gpc: 0.0, ppc: 1.26, oth: 0.91 },
    "Scarborough—Guildwood—Rouge Park": { cpc: 23.33, lpc: 70.32, ndp: 4.81, bq: 0.0, gpc: 0.0, ppc: 0.88, oth: 0.67 },
    "Scarborough North": { cpc: 18.55, lpc: 74.52, ndp: 4.04, bq: 0.0, gpc: 0.0, ppc: 0.69, oth: 2.21 },
    "Scarborough Southwest": { cpc: 22.31, lpc: 68.15, ndp: 5.88, bq: 0.0, gpc: 1.96, ppc: 0.86, oth: 0.84 },
    "Scarborough—Woburn": { cpc: 23.64, lpc: 68.74, ndp: 4.69, bq: 0.0, gpc: 0.0, ppc: 0.89, oth: 2.04 },
    "Simcoe—Grey": { cpc: 53.64, lpc: 34.22, ndp: 5.06, bq: 0.0, gpc: 3.76, ppc: 2.16, oth: 1.15 },
    "Simcoe North": { cpc: 48.81, lpc: 38.73, ndp: 6.27, bq: 0.0, gpc: 2.83, ppc: 2.44, oth: 0.92 },
    "Spadina—Harbourfront": { cpc: 27.79, lpc: 53.13, ndp: 14.72, bq: 0.0, gpc: 3.3, ppc: 1.07, oth: 0.0 },
    "St. Catharines": { cpc: 38.53, lpc: 48.92, ndp: 8.62, bq: 0.0, gpc: 1.78, ppc: 2.16, oth: 0.0 },
    "Stormont—Dundas—Glengarry": { cpc: 61.03, lpc: 30.13, ndp: 4.16, bq: 0.0, gpc: 2.08, ppc: 2.37, oth: 0.22 },
    "Sudbury": { cpc: 35.05, lpc: 47.84, ndp: 12.37, bq: 0.0, gpc: 2.0, ppc: 2.12, oth: 0.61 },
    "Sudbury East—Manitoulin—Nickel Belt": { cpc: 35.36, lpc: 45.61, ndp: 13.55, bq: 0.0, gpc: 1.82, ppc: 3.22, oth: 0.44 },
    "Taiaiako’n—Parkdale—High Park": { cpc: 17.51, lpc: 60.98, ndp: 17.13, bq: 0.0, gpc: 1.99, ppc: 1.16, oth: 1.24 },
    "Thornhill": { cpc: 54.17, lpc: 41.0, ndp: 2.13, bq: 0.0, gpc: 1.38, ppc: 1.33, oth: 0.0 },
    "Thunder Bay—Rainy River": { cpc: 37.03, lpc: 47.0, ndp: 12.23, bq: 0.0, gpc: 1.45, ppc: 2.29, oth: 0.0 },
    "Thunder Bay—Superior North": { cpc: 29.62, lpc: 54.2, ndp: 11.64, bq: 0.0, gpc: 1.76, ppc: 2.01, oth: 0.78 },
    "Toronto Centre": { cpc: 15.3, lpc: 64.04, ndp: 10.56, bq: 0.0, gpc: 7.64, ppc: 0.77, oth: 1.69 },
    "Toronto—Danforth": { cpc: 15.48, lpc: 64.7, ndp: 14.1, bq: 0.0, gpc: 1.94, ppc: 0.83, oth: 2.95 },
    "Toronto—St. Paul's": { cpc: 29.18, lpc: 59.13, ndp: 5.94, bq: 0.0, gpc: 4.91, ppc: 0.76, oth: 0.08 },
    "University—Rosedale": { cpc: 21.53, lpc: 60.54, ndp: 11.45, bq: 0.0, gpc: 4.27, ppc: 0.85, oth: 1.36 },
    "Vaughan—Woodbridge": { cpc: 42.07, lpc: 52.33, ndp: 2.46, bq: 0.0, gpc: 0.8, ppc: 1.55, oth: 0.78 },
    "Waterloo": { cpc: 31.44, lpc: 56.55, ndp: 7.44, bq: 0.0, gpc: 3.13, ppc: 1.43, oth: 0.0 },
    "Wellington—Halton Hills North": { cpc: 52.3, lpc: 36.72, ndp: 4.54, bq: 0.0, gpc: 4.21, ppc: 1.91, oth: 0.32 },
    "Whitby": { cpc: 37.97, lpc: 53.89, ndp: 5.39, bq: 0.0, gpc: 1.42, ppc: 1.34, oth: 0.0 },
    "Willowdale": { cpc: 35.55, lpc: 58.34, ndp: 3.67, bq: 0.0, gpc: 1.66, ppc: 0.78, oth: 0.0 },
    "Windsor—Tecumseh—Lakeshore": { cpc: 35.88, lpc: 44.48, ndp: 13.66, bq: 0.0, gpc: 1.29, ppc: 3.76, oth: 0.93 },
    "Windsor West": { cpc: 28.62, lpc: 44.62, ndp: 22.25, bq: 0.0, gpc: 0.0, ppc: 3.4, oth: 1.11 },
    "York Centre": { cpc: 40.3, lpc: 54.65, ndp: 3.68, bq: 0.0, gpc: 0.0, ppc: 1.37, oth: 0.0 },
    "York—Durham": { cpc: 57.64, lpc: 34.46, ndp: 4.76, bq: 0.0, gpc: 0.49, ppc: 1.95, oth: 0.7 },
    "York South—Weston—Etobicoke": { cpc: 24.74, lpc: 66.41, ndp: 5.64, bq: 0.0, gpc: 1.68, ppc: 1.49, oth: 0.03 },
    "Brandon—Souris": { cpc: 63.37, lpc: 21.56, ndp: 12.82, bq: 0.0, gpc: 0.04, ppc: 2.18, oth: 0.04 },
    "Churchill—Keewatinook Aski": { cpc: 24.6, lpc: 43.34, ndp: 25.53, bq: 0.0, gpc: 5.26, ppc: 1.27, oth: 0.0 },
    "Elmwood—Transcona": { cpc: 32.8, lpc: 29.02, ndp: 33.37, bq: 0.0, gpc: 3.09, ppc: 1.7, oth: 0.01 },
    "Kildonan—St. Paul": { cpc: 40.17, lpc: 44.68, ndp: 13.27, bq: 0.0, gpc: 0.5, ppc: 1.27, oth: 0.11 },
    "Portage—Lisgar": { cpc: 60.99, lpc: 21.69, ndp: 9.25, bq: 0.0, gpc: 0.0, ppc: 6.34, oth: 1.73 },
    "Provencher": { cpc: 50.98, lpc: 29.45, ndp: 7.59, bq: 0.0, gpc: 4.54, ppc: 4.57, oth: 2.87 },
    "Riding Mountain": { cpc: 61.46, lpc: 22.38, ndp: 8.88, bq: 0.0, gpc: 3.69, ppc: 2.71, oth: 0.87 },
    "St. Boniface—St. Vital": { cpc: 23.69, lpc: 62.2, ndp: 10.44, bq: 0.0, gpc: 2.12, ppc: 0.9, oth: 0.65 },
    "Selkirk—Interlake—Eastman": { cpc: 58.58, lpc: 23.04, ndp: 11.77, bq: 0.0, gpc: 4.65, ppc: 1.95, oth: 0.0 },
    "Winnipeg Centre": { cpc: 13.08, lpc: 50.03, ndp: 29.88, bq: 0.0, gpc: 4.1, ppc: 1.08, oth: 1.83 },
    "Winnipeg North": { cpc: 10.95, lpc: 73.06, ndp: 13.27, bq: 0.0, gpc: 1.68, ppc: 0.81, oth: 0.22 },
    "Winnipeg South": { cpc: 25.97, lpc: 64.69, ndp: 6.71, bq: 0.0, gpc: 1.98, ppc: 0.66, oth: 0.0 },
    "Winnipeg South Centre": { cpc: 22.95, lpc: 62.54, ndp: 9.94, bq: 0.0, gpc: 3.65, ppc: 0.57, oth: 0.35 },
    "Winnipeg West": { cpc: 33.67, lpc: 55.39, ndp: 7.33, bq: 0.0, gpc: 2.89, ppc: 0.71, oth: 0.02 },
    "Battlefords—Lloydminster—Meadow Lake": { cpc: 70.48, lpc: 12.99, ndp: 7.97, bq: 0.0, gpc: 1.36, ppc: 1.55, oth: 5.64 },
    "Carlton Trail—Eagle Creek": { cpc: 74.28, lpc: 10.12, ndp: 9.03, bq: 0.0, gpc: 1.72, ppc: 2.51, oth: 2.34 },
    "Desnethé—Missinippi—Churchill River": { cpc: 19.55, lpc: 65.05, ndp: 11.74, bq: 0.0, gpc: 1.63, ppc: 0.64, oth: 1.38 },
    "Moose Jaw—Lake Centre—Lanigan": { cpc: 68.93, lpc: 11.53, ndp: 12.6, bq: 0.0, gpc: 1.97, ppc: 3.17, oth: 1.8 },
    "Prince Albert": { cpc: 65.74, lpc: 20.48, ndp: 9.08, bq: 0.0, gpc: 1.89, ppc: 1.75, oth: 1.06 },
    "Regina—Lewvan": { cpc: 49.21, lpc: 25.77, ndp: 21.86, bq: 0.0, gpc: 2.23, ppc: 0.92, oth: 0.0 },
    "Regina—Qu'Appelle": { cpc: 63.21, lpc: 18.16, ndp: 14.01, bq: 0.0, gpc: 3.34, ppc: 1.28, oth: 0.0 },
    "Regina—Wascana": { cpc: 45.51, lpc: 41.52, ndp: 9.71, bq: 0.0, gpc: 2.47, ppc: 0.79, oth: 0.0 },
    "Saskatoon South": { cpc: 51.94, lpc: 25.65, ndp: 19.03, bq: 0.0, gpc: 2.2, ppc: 1.18, oth: 0.0 },
    "Saskatoon—University": { cpc: 53.01, lpc: 20.31, ndp: 23.07, bq: 0.0, gpc: 1.76, ppc: 1.15, oth: 0.71 },
    "Saskatoon West": { cpc: 52.96, lpc: 16.19, ndp: 27.03, bq: 0.0, gpc: 2.06, ppc: 1.76, oth: 0.0 },
    "Souris—Moose Mountain": { cpc: 82.1, lpc: 7.67, ndp: 5.12, bq: 0.0, gpc: 0.11, ppc: 2.45, oth: 2.54 },
    "Swift Current—Grasslands—Kindersley": { cpc: 77.73, lpc: 7.47, ndp: 6.49, bq: 0.0, gpc: 1.52, ppc: 2.02, oth: 4.76 },
    "Yorkton—Melville": { cpc: 73.54, lpc: 11.42, ndp: 7.63, bq: 0.0, gpc: 3.13, ppc: 2.44, oth: 1.84 },
    "Airdrie—Cochrane": { cpc: 61.62, lpc: 21.53, ndp: 4.63, bq: 0.0, gpc: 3.49, ppc: 4.25, oth: 4.48 },
    "Battle River—Crowfoot": { cpc: 76.17, lpc: 9.36, ndp: 3.12, bq: 0.0, gpc: 2.63, ppc: 4.99, oth: 3.72 },
    "Bow River": { cpc: 72.33, lpc: 16.84, ndp: 2.94, bq: 0.0, gpc: 0.0, ppc: 5.14, oth: 2.75 },
    "Calgary Centre": { cpc: 41.42, lpc: 50.36, ndp: 4.03, bq: 0.0, gpc: 3.57, ppc: 0.0, oth: 0.62 },
    "Calgary Confederation": { cpc: 37.75, lpc: 47.44, ndp: 4.42, bq: 0.0, gpc: 8.22, ppc: 1.93, oth: 0.25 },
    "Calgary Crowfoot": { cpc: 49.03, lpc: 39.87, ndp: 4.36, bq: 0.0, gpc: 4.05, ppc: 2.08, oth: 0.62 },
    "Calgary East": { cpc: 49.5, lpc: 35.75, ndp: 5.11, bq: 0.0, gpc: 5.36, ppc: 3.37, oth: 0.91 },
    "Calgary Heritage": { cpc: 55.75, lpc: 31.87, ndp: 4.98, bq: 0.0, gpc: 3.69, ppc: 2.45, oth: 1.26 },
    "Calgary McKnight": { cpc: 25.38, lpc: 66.82, ndp: 3.62, bq: 0.0, gpc: 2.27, ppc: 1.46, oth: 0.44 },
    "Calgary Midnapore": { cpc: 60.73, lpc: 25.86, ndp: 5.64, bq: 0.0, gpc: 3.67, ppc: 3.08, oth: 1.03 },
    "Calgary Nose Hill": { cpc: 50.4, lpc: 37.96, ndp: 4.65, bq: 0.0, gpc: 3.99, ppc: 2.19, oth: 0.81 },
    "Calgary Shepard": { cpc: 59.25, lpc: 27.75, ndp: 4.68, bq: 0.0, gpc: 4.44, ppc: 2.78, oth: 1.08 },
    "Calgary Signal Hill": { cpc: 53.72, lpc: 35.85, ndp: 3.83, bq: 0.0, gpc: 4.12, ppc: 1.82, oth: 0.66 },
    "Calgary Skyview": { cpc: 36.54, lpc: 55.43, ndp: 4.05, bq: 0.0, gpc: 1.99, ppc: 1.53, oth: 0.46 },
    "Edmonton Centre": { cpc: 29.79, lpc: 58.73, ndp: 8.39, bq: 0.0, gpc: 0.27, ppc: 2.23, oth: 0.59 },
    "Edmonton Gateway": { cpc: 40.4, lpc: 49.04, ndp: 7.16, bq: 0.0, gpc: 0.54, ppc: 2.66, oth: 0.2 },
    "Edmonton Griesbach": { cpc: 41.92, lpc: 36.06, ndp: 14.06, bq: 0.0, gpc: 3.53, ppc: 3.44, oth: 0.98 },
    "Edmonton Manning": { cpc: 42.57, lpc: 43.87, ndp: 9.69, bq: 0.0, gpc: 0.0, ppc: 3.64, oth: 0.23 },
    "Edmonton Northwest": { cpc: 42.31, lpc: 46.25, ndp: 8.19, bq: 0.0, gpc: 0.08, ppc: 3.08, oth: 0.1 },
    "Edmonton Riverbend": { cpc: 41.57, lpc: 46.98, ndp: 6.75, bq: 0.0, gpc: 2.83, ppc: 1.84, oth: 0.03 },
    "Edmonton Southeast": { cpc: 32.07, lpc: 59.57, ndp: 5.73, bq: 0.0, gpc: 0.0, ppc: 2.43, oth: 0.2 },
    "Edmonton Strathcona": { cpc: 38.88, lpc: 26.99, ndp: 25.4, bq: 0.0, gpc: 4.89, ppc: 3.29, oth: 0.55 },
    "Edmonton West": { cpc: 42.93, lpc: 47.37, ndp: 6.96, bq: 0.0, gpc: 0.13, ppc: 2.41, oth: 0.2 },
    "Foothills": { cpc: 70.71, lpc: 14.76, ndp: 3.55, bq: 0.0, gpc: 3.7, ppc: 4.26, oth: 3.02 },
    "Fort McMurray—Cold Lake": { cpc: 71.02, lpc: 15.26, ndp: 3.2, bq: 0.0, gpc: 2.77, ppc: 6.67, oth: 1.08 },
    "Grande Prairie": { cpc: 76.55, lpc: 9.63, ndp: 3.97, bq: 0.0, gpc: 0.0, ppc: 5.68, oth: 4.17 },
    "Lakeland": { cpc: 74.44, lpc: 10.96, ndp: 3.4, bq: 0.0, gpc: 2.56, ppc: 5.95, oth: 2.69 },
    "Leduc—Wetaskiwin": { cpc: 70.78, lpc: 16.32, ndp: 5.93, bq: 0.0, gpc: 0.06, ppc: 6.28, oth: 0.63 },
    "Lethbridge": { cpc: 56.51, lpc: 31.66, ndp: 5.92, bq: 0.0, gpc: 0.0, ppc: 3.54, oth: 2.37 },
    "Medicine Hat—Cardston—Warner": { cpc: 69.29, lpc: 15.33, ndp: 4.41, bq: 0.0, gpc: 3.92, ppc: 4.92, oth: 2.12 },
    "Parkland": { cpc: 70.91, lpc: 14.45, ndp: 5.52, bq: 0.0, gpc: 0.0, ppc: 6.36, oth: 2.76 },
    "Peace River—Westlock": { cpc: 69.22, lpc: 12.48, ndp: 4.39, bq: 0.0, gpc: 2.25, ppc: 6.95, oth: 4.72 },
    "Ponoka—Didsbury": { cpc: 75.45, lpc: 10.65, ndp: 3.67, bq: 0.0, gpc: 0.0, ppc: 7.45, oth: 2.77 },
    "Red Deer": { cpc: 66.98, lpc: 18.61, ndp: 5.8, bq: 0.0, gpc: 0.0, ppc: 6.27, oth: 2.34 },
    "Sherwood Park—Fort Saskatchewan": { cpc: 59.71, lpc: 26.13, ndp: 6.47, bq: 0.0, gpc: 2.76, ppc: 3.65, oth: 1.29 },
    "St. Albert—Sturgeon River": { cpc: 61.25, lpc: 25.63, ndp: 7.77, bq: 0.0, gpc: 0.0, ppc: 4.28, oth: 1.07 },
    "Yellowhead": { cpc: 61.67, lpc: 22.38, ndp: 4.53, bq: 0.0, gpc: 3.45, ppc: 4.75, oth: 3.21 },
    "Abbotsford—South Langley": { cpc: 50.8, lpc: 35.58, ndp: 5.88, bq: 0.0, gpc: 1.98, ppc: 5.77, oth: 0.0 },
    "Burnaby Central": { cpc: 27.95, lpc: 48.32, ndp: 14.54, bq: 0.0, gpc: 2.08, ppc: 3.15, oth: 3.96 },
    "Burnaby North—Seymour": { cpc: 30.1, lpc: 56.8, ndp: 8.71, bq: 0.0, gpc: 2.17, ppc: 2.23, oth: 0.0 },
    "Cariboo—Prince George": { cpc: 58.27, lpc: 22.69, ndp: 6.73, bq: 0.0, gpc: 2.24, ppc: 6.92, oth: 3.15 },
    "Chilliwack—Hope": { cpc: 56.17, lpc: 25.63, ndp: 9.34, bq: 0.0, gpc: 1.94, ppc: 6.92, oth: 0.0 },
    "Cloverdale—Langley City": { cpc: 38.67, lpc: 51.32, ndp: 6.19, bq: 0.0, gpc: 0.0, ppc: 3.82, oth: 0.0 },
    "Columbia—Kootenay—Southern Rockies": { cpc: 60.14, lpc: 15.11, ndp: 14.63, bq: 0.0, gpc: 2.89, ppc: 7.24, oth: 0.0 },
    "Coquitlam—Port Coquitlam": { cpc: 34.3, lpc: 52.92, ndp: 9.1, bq: 0.0, gpc: 0.0, ppc: 3.68, oth: 0.0 },
    "Courtenay—Alberni": { cpc: 45.34, lpc: 24.16, ndp: 17.99, bq: 0.0, gpc: 5.76, ppc: 5.35, oth: 1.39 },
    "Cowichan—Malahat—Langford": { cpc: 41.11, lpc: 29.11, ndp: 17.97, bq: 0.0, gpc: 5.09, ppc: 6.73, oth: 0.0 },
    "Delta": { cpc: 33.98, lpc: 52.83, ndp: 5.41, bq: 0.0, gpc: 1.28, ppc: 1.86, oth: 4.64 },
    "Esquimalt—Saanich—Sooke": { cpc: 29.5, lpc: 37.74, ndp: 17.62, bq: 0.0, gpc: 7.06, ppc: 4.84, oth: 3.23 },
    "Fleetwood—Port Kells": { cpc: 29.62, lpc: 58.46, ndp: 6.12, bq: 0.0, gpc: 1.12, ppc: 2.23, oth: 2.45 },
    "Kamloops—Shuswap—Central Rockies": { cpc: 54.81, lpc: 24.79, ndp: 8.83, bq: 0.0, gpc: 3.5, ppc: 7.34, oth: 0.73 },
    "Kamloops—Thompson—Nicola": { cpc: 52.33, lpc: 26.09, ndp: 9.95, bq: 0.0, gpc: 2.55, ppc: 5.31, oth: 3.76 },
    "Kelowna": { cpc: 48.25, lpc: 36.68, ndp: 6.99, bq: 0.0, gpc: 1.94, ppc: 6.15, oth: 0.0 },
    "Langley Township—Fraser Heights": { cpc: 48.36, lpc: 39.91, ndp: 6.23, bq: 0.0, gpc: 1.5, ppc: 3.67, oth: 0.33 },
    "Mission—Matsqui—Abbotsford": { cpc: 52.79, lpc: 33.25, ndp: 5.83, bq: 0.0, gpc: 2.35, ppc: 5.78, oth: 0.0 },
    "Nanaimo—Ladysmith": { cpc: 38.22, lpc: 23.23, ndp: 12.23, bq: 0.0, gpc: 20.98, ppc: 5.33, oth: 0.0 },
    "New Westminster—Burnaby—Maillardville": { cpc: 30.59, lpc: 41.79, ndp: 20.22, bq: 0.0, gpc: 3.12, ppc: 4.02, oth: 0.26 },
    "North Island—Powell River": { cpc: 48.77, lpc: 21.97, ndp: 15.39, bq: 0.0, gpc: 4.45, ppc: 4.54, oth: 4.87 },
    "North Vancouver—Capilano": { cpc: 31.19, lpc: 58.17, ndp: 5.86, bq: 0.0, gpc: 2.56, ppc: 2.02, oth: 0.19 },
    "Okanagan Lake West—South Kelowna": { cpc: 54.41, lpc: 32.03, ndp: 6.16, bq: 0.0, gpc: 1.75, ppc: 5.66, oth: 0.0 },
    "Pitt Meadows—Maple Ridge": { cpc: 42.57, lpc: 34.64, ndp: 10.39, bq: 0.0, gpc: 0.19, ppc: 4.69, oth: 7.52 },
    "Port Moody—Coquitlam": { cpc: 39.02, lpc: 44.12, ndp: 12.39, bq: 0.0, gpc: 0.0, ppc: 3.0, oth: 1.47 },
    "Prince George—Peace River—Northern Rockies": { cpc: 57.35, lpc: 10.96, ndp: 4.02, bq: 0.0, gpc: 1.9, ppc: 7.44, oth: 18.33 },
    "Richmond Centre—Marpole": { cpc: 38.44, lpc: 51.27, ndp: 6.4, bq: 0.0, gpc: 1.92, ppc: 1.98, oth: 0.0 },
    "Richmond East—Steveston": { cpc: 36.14, lpc: 54.62, ndp: 5.97, bq: 0.0, gpc: 1.4, ppc: 1.87, oth: 0.0 },
    "Saanich—Gulf Islands": { cpc: 30.16, lpc: 30.69, ndp: 7.54, bq: 0.0, gpc: 26.88, ppc: 2.96, oth: 1.76 },
    "Similkameen—South Okanagan—West Kootenay": { cpc: 52.14, lpc: 22.51, ndp: 15.66, bq: 0.0, gpc: 2.62, ppc: 7.06, oth: 0.0 },
    "Skeena—Bulkley Valley": { cpc: 46.06, lpc: 11.98, ndp: 15.72, bq: 0.0, gpc: 2.7, ppc: 7.28, oth: 16.26 },
    "South Surrey—White Rock": { cpc: 43.64, lpc: 49.02, ndp: 4.41, bq: 0.0, gpc: 0.0, ppc: 2.93, oth: 0.0 },
    "Surrey Centre": { cpc: 22.01, lpc: 58.27, ndp: 8.5, bq: 0.0, gpc: 1.33, ppc: 3.04, oth: 6.85 },
    "Surrey Newton": { cpc: 15.01, lpc: 65.79, ndp: 7.45, bq: 0.0, gpc: 0.0, ppc: 1.9, oth: 9.85 },
    "Vancouver Centre": { cpc: 25.72, lpc: 58.57, ndp: 10.33, bq: 0.0, gpc: 2.53, ppc: 2.86, oth: 0.0 },
    "Vancouver East": { cpc: 15.0, lpc: 33.38, ndp: 22.52, bq: 0.0, gpc: 6.0, ppc: 2.84, oth: 20.26 },
    "Vancouver Fraserview—South Burnaby": { cpc: 24.37, lpc: 57.78, ndp: 10.03, bq: 0.0, gpc: 0.64, ppc: 2.47, oth: 4.72 },
    "Vancouver Granville": { cpc: 29.47, lpc: 54.54, ndp: 11.39, bq: 0.0, gpc: 1.84, ppc: 2.1, oth: 0.65 },
    "Vancouver Kingsway": { cpc: 19.75, lpc: 49.67, ndp: 20.39, bq: 0.0, gpc: 2.86, ppc: 2.27, oth: 5.06 },
    "Vancouver Quadra": { cpc: 31.45, lpc: 57.26, ndp: 6.05, bq: 0.0, gpc: 3.62, ppc: 1.62, oth: 0.0 },
    "Vernon—Lake Country—Monashee": { cpc: 51.97, lpc: 28.75, ndp: 7.46, bq: 0.0, gpc: 3.47, ppc: 8.35, oth: 0.0 },
    "Victoria": { cpc: 18.66, lpc: 45.45, ndp: 17.29, bq: 0.0, gpc: 8.6, ppc: 3.11, oth: 6.89 },
    "West Vancouver—Sunshine Coast—Sea to Sky Country": { cpc: 33.8, lpc: 46.98, ndp: 9.03, bq: 0.0, gpc: 4.45, ppc: 3.22, oth: 2.51 },
    "Yukon": { cpc: 31.92, lpc: 37.93, ndp: 13.18, bq: 0.0, gpc: 5.1, ppc: 0.0, oth: 11.87 },
    "Northwest Territories": { cpc: 18.67, lpc: 46.35, ndp: 20.26, bq: 0.0, gpc: 2.9, ppc: 0.0, oth: 11.82 },
    "Nunavut": { cpc: 22.53, lpc: 45.94, ndp: 31.54, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 }
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
