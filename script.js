// Electoral data from the CSV

const electoralData = {
    "Avalon": { cpc: 35.61, lpc: 58.9, ndp: 4.98, bq: 0.0, gpc: 0.0, ppc: 0.51, oth: 0.0 },
    "Cape Spear": { cpc: 23.39, lpc: 67.48, ndp: 8.61, bq: 0.0, gpc: 0.0, ppc: 0.52, oth: 0.0 },
    "Central Newfoundland": { cpc: 47.55, lpc: 50.11, ndp: 2.34, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Labrador": { cpc: 35.82, lpc: 54.1, ndp: 9.11, bq: 0.0, gpc: 0.0, ppc: 0.97, oth: 0.0 },
    "Long Range Mountains": { cpc: 42.76, lpc: 51.82, ndp: 4.21, bq: 0.0, gpc: 0.0, ppc: 1.21, oth: 0.0 },
    "St. John's East": { cpc: 23.08, lpc: 61.86, ndp: 14.42, bq: 0.0, gpc: 0.0, ppc: 0.64, oth: 0.0 },
    "Terra Nova—The Peninsulas": { cpc: 42.61, lpc: 53.48, ndp: 2.84, bq: 0.0, gpc: 0.0, ppc: 1.07, oth: 0.0 },
    "Cardigan": { cpc: 32.76, lpc: 57.58, ndp: 3.36, bq: 0.0, gpc: 4.76, ppc: 0.89, oth: 0.65 },
    "Charlottetown": { cpc: 32.99, lpc: 53.29, ndp: 3.69, bq: 0.0, gpc: 9.5, ppc: 0.53, oth: 0.0 },
    "Egmont": { cpc: 33.28, lpc: 52.92, ndp: 3.01, bq: 0.0, gpc: 9.42, ppc: 1.37, oth: 0.0 },
    "Malpeque": { cpc: 34.99, lpc: 47.67, ndp: 2.75, bq: 0.0, gpc: 13.82, ppc: 0.76, oth: 0.01 },
    "Acadie—Annapolis": { cpc: 57.16, lpc: 36.73, ndp: 4.59, bq: 0.0, gpc: 0.0, ppc: 1.52, oth: 0.0 },
    "Cape Breton—Canso—Antigonish": { cpc: 38.83, lpc: 53.97, ndp: 5.29, bq: 0.0, gpc: 0.5, ppc: 1.13, oth: 0.28 },
    "Central Nova": { cpc: 36.81, lpc: 53.34, ndp: 5.87, bq: 0.0, gpc: 1.59, ppc: 1.15, oth: 1.24 },
    "Cumberland—Colchester": { cpc: 50.64, lpc: 40.42, ndp: 4.4, bq: 0.0, gpc: 2.66, ppc: 1.18, oth: 0.7 },
    "Dartmouth—Cole Harbour": { cpc: 3.88, lpc: 74.65, ndp: 14.43, bq: 0.0, gpc: 3.66, ppc: 3.38, oth: 0.0 },
    "Halifax": { cpc: 17.19, lpc: 61.17, ndp: 17.62, bq: 0.0, gpc: 2.78, ppc: 0.73, oth: 0.51 },
    "Halifax West": { cpc: 25.63, lpc: 60.76, ndp: 10.03, bq: 0.0, gpc: 2.72, ppc: 0.7, oth: 0.16 },
    "Kings—Hants": { cpc: 34.75, lpc: 54.8, ndp: 7.04, bq: 0.0, gpc: 2.07, ppc: 1.34, oth: 0.0 },
    "Sackville—Bedford—Preston": { cpc: 29.8, lpc: 57.21, ndp: 9.59, bq: 0.0, gpc: 2.28, ppc: 1.07, oth: 0.06 },
    "South Shore—St. Margarets": { cpc: 48.13, lpc: 42.39, ndp: 6.55, bq: 0.0, gpc: 2.93, ppc: 0.0, oth: 0.0 },
    "Sydney—Glace Bay": { cpc: 39.16, lpc: 51.61, ndp: 7.34, bq: 0.0, gpc: 0.68, ppc: 0.96, oth: 0.24 },
    "Acadie—Bathurst": { cpc: 14.96, lpc: 75.37, ndp: 3.94, bq: 0.0, gpc: 2.84, ppc: 1.63, oth: 1.25 },
    "Beauséjour": { cpc: 21.43, lpc: 65.82, ndp: 3.93, bq: 0.0, gpc: 5.86, ppc: 2.15, oth: 0.82 },
    "Fredericton—Oromocto": { cpc: 37.19, lpc: 43.74, ndp: 4.54, bq: 0.0, gpc: 12.95, ppc: 0.09, oth: 1.49 },
    "Fundy Royal": { cpc: 54.24, lpc: 32.19, ndp: 5.51, bq: 0.0, gpc: 5.47, ppc: 2.59, oth: 0.0 },
    "Madawaska—Restigouche": { cpc: 29.65, lpc: 59.63, ndp: 2.13, bq: 0.0, gpc: 2.71, ppc: 2.07, oth: 3.82 },
    "Miramichi—Grand Lake": { cpc: 48.65, lpc: 42.55, ndp: 2.56, bq: 0.0, gpc: 4.68, ppc: 1.48, oth: 0.08 },
    "Moncton—Dieppe": { cpc: 25.85, lpc: 61.5, ndp: 6.24, bq: 0.0, gpc: 4.55, ppc: 1.86, oth: 0.0 },
    "Saint John—Kennebecasis": { cpc: 40.25, lpc: 50.61, ndp: 4.73, bq: 0.0, gpc: 3.02, ppc: 1.4, oth: 0.0 },
    "Saint John—St. Croix": { cpc: 53.85, lpc: 34.55, ndp: 4.86, bq: 0.0, gpc: 4.33, ppc: 2.25, oth: 0.16 },
    "Tobique—Mactaquac": { cpc: 59.94, lpc: 27.61, ndp: 4.25, bq: 0.0, gpc: 5.19, ppc: 2.11, oth: 0.91 },
    "Abitibi—Baie-James—Nunavik—Eeyou": { cpc: 22.43, lpc: 34.91, ndp: 7.59, bq: 29.26, gpc: 2.1, ppc: 1.4, oth: 2.32 },
    "Abitibi—Témiscamingue": { cpc: 17.01, lpc: 33.34, ndp: 4.09, bq: 40.17, gpc: 2.28, ppc: 1.29, oth: 1.82 },
    "Ahuntsic-Cartierville": { cpc: 10.37, lpc: 62.64, ndp: 6.83, bq: 15.67, gpc: 3.62, ppc: 0.87, oth: 0.0 },
    "Alfred-Pellan": { cpc: 16.66, lpc: 56.89, ndp: 4.51, bq: 18.19, gpc: 1.99, ppc: 0.11, oth: 1.65 },
    "Argenteuil—La Petite-Nation": { cpc: 18.13, lpc: 50.03, ndp: 4.4, bq: 24.06, gpc: 0.48, ppc: 2.04, oth: 0.86 },
    "Beauce": { cpc: 63.25, lpc: 15.33, ndp: 1.75, bq: 10.84, gpc: 1.06, ppc: 6.26, oth: 1.51 },
    "Beauharnois—Salaberry—Soulanges—Huntingdon": { cpc: 17.07, lpc: 37.37, ndp: 4.91, bq: 37.96, gpc: 0.27, ppc: 1.25, oth: 1.17 },
    "Beauport—Limoilou": { cpc: 39.05, lpc: 29.93, ndp: 5.7, bq: 21.65, gpc: 2.48, ppc: 0.11, oth: 1.08 },
    "Bécancour—Nicolet—Saurel—Alnôbak": { cpc: 24.57, lpc: 23.47, ndp: 3.42, bq: 43.67, gpc: 2.15, ppc: 0.93, oth: 1.8 },
    "Bellechasse—Les Etchemins—Lévis": { cpc: 61.55, lpc: 17.48, ndp: 2.67, bq: 14.69, gpc: 1.62, ppc: 0.0, oth: 1.99 },
    "Beloeil—Chambly": { cpc: 12.48, lpc: 33.11, ndp: 5.81, bq: 43.4, gpc: 2.82, ppc: 0.79, oth: 1.59 },
    "Berthier—Maskinongé": { cpc: 17.47, lpc: 23.41, ndp: 24.01, bq: 31.35, gpc: 1.47, ppc: 1.11, oth: 1.17 },
    "Bourassa": { cpc: 8.62, lpc: 70.68, ndp: 4.53, bq: 12.56, gpc: 2.16, ppc: 1.18, oth: 0.26 },
    "Brome—Missisquoi": { cpc: 21.48, lpc: 44.0, ndp: 3.79, bq: 25.02, gpc: 3.01, ppc: 1.12, oth: 1.59 },
    "Brossard—Saint-Lambert": { cpc: 14.94, lpc: 64.05, ndp: 5.95, bq: 13.55, gpc: 0.0, ppc: 0.81, oth: 0.7 },
    "Charlesbourg—Haute-Saint-Charles": { cpc: 54.59, lpc: 22.64, ndp: 3.29, bq: 16.29, gpc: 1.93, ppc: 0.7, oth: 0.55 },
    "Châteauguay—Les Jardins-de-Napierville": { cpc: 16.53, lpc: 47.11, ndp: 4.87, bq: 27.09, gpc: 1.92, ppc: 1.35, oth: 1.14 },
    "Chicoutimi—Le Fjord": { cpc: 50.51, lpc: 21.65, ndp: 2.7, bq: 23.23, gpc: 1.4, ppc: 0.45, oth: 0.06 },
    "Compton—Stanstead": { cpc: 22.71, lpc: 45.44, ndp: 4.51, bq: 21.7, gpc: 3.49, ppc: 1.29, oth: 0.87 },
    "Côte-du-Sud—Rivière-du-Loup—Kataskomiq—Témiscouata": { cpc: 54.63, lpc: 22.03, ndp: 1.89, bq: 19.79, gpc: 0.0, ppc: 0.11, oth: 1.55 },
    "Côte-Nord—Kawawachikamach—Nitassinan": { cpc: 30.51, lpc: 24.83, ndp: 2.76, bq: 40.1, gpc: 0.0, ppc: 0.0, oth: 1.79 },
    "Dorval—Lachine—LaSalle": { cpc: 14.92, lpc: 62.09, ndp: 7.53, bq: 10.72, gpc: 3.37, ppc: 1.38, oth: 0.0 },
    "Drummond": { cpc: 25.95, lpc: 25.82, ndp: 7.41, bq: 36.79, gpc: 0.0, ppc: 0.0, oth: 4.03 },
    "Gaspésie—Les Îles-de-la-Madeleine—Listuguj": { cpc: 11.26, lpc: 51.47, ndp: 2.67, bq: 32.94, gpc: 0.0, ppc: 0.72, oth: 0.94 },
    "Gatineau": { cpc: 14.14, lpc: 60.55, ndp: 5.04, bq: 16.26, gpc: 1.9, ppc: 1.36, oth: 0.76 },
    "Hochelaga—Rosemont-Est": { cpc: 6.66, lpc: 51.72, ndp: 13.19, bq: 24.26, gpc: 2.69, ppc: 0.84, oth: 0.63 },
    "Honoré-Mercier": { cpc: 12.79, lpc: 69.18, ndp: 4.08, bq: 10.77, gpc: 1.73, ppc: 1.33, oth: 0.11 },
    "Hull—Aylmer": { cpc: 13.54, lpc: 62.6, ndp: 7.34, bq: 11.02, gpc: 3.37, ppc: 1.21, oth: 0.92 },
    "Joliette—Manawan": { cpc: 14.1, lpc: 31.51, ndp: 3.95, bq: 44.74, gpc: 2.77, ppc: 1.18, oth: 1.76 },
    "Jonquière": { cpc: 37.24, lpc: 25.99, ndp: 3.24, bq: 30.92, gpc: 2.12, ppc: 0.0, oth: 0.48 },
    "La Pointe-de-l'Île": { cpc: 9.73, lpc: 44.52, ndp: 6.46, bq: 36.89, gpc: 0.0, ppc: 1.04, oth: 1.37 },
    "La Prairie—Atateken": { cpc: 13.74, lpc: 45.44, ndp: 4.63, bq: 32.95, gpc: 2.19, ppc: 0.94, oth: 0.11 },
    "Lac-Saint-Jean": { cpc: 34.12, lpc: 24.33, ndp: 2.02, bq: 37.47, gpc: 2.05, ppc: 0.0, oth: 0.0 },
    "Lac-Saint-Louis": { cpc: 22.18, lpc: 62.72, ndp: 7.16, bq: 3.41, gpc: 3.62, ppc: 0.91, oth: 0.0 },
    "LaSalle—Émard—Verdun": { cpc: 10.29, lpc: 55.65, ndp: 11.77, bq: 16.05, gpc: 3.87, ppc: 1.21, oth: 1.16 },
    "Laurentides—Labelle": { cpc: 15.4, lpc: 32.69, ndp: 3.74, bq: 41.83, gpc: 3.38, ppc: 1.4, oth: 1.56 },
    "Laurier—Sainte-Marie": { cpc: 6.4, lpc: 53.41, ndp: 19.87, bq: 15.62, gpc: 3.02, ppc: 0.66, oth: 1.03 },
    "Laval—Les Îles": { cpc: 21.9, lpc: 57.46, ndp: 4.36, bq: 12.86, gpc: 1.77, ppc: 1.65, oth: 0.0 },
    "Les Pays-d'en-Haut": { cpc: 16.9, lpc: 35.63, ndp: 4.58, bq: 37.55, gpc: 2.11, ppc: 1.65, oth: 1.59 },
    "Lévis—Lotbinière": { cpc: 60.2, lpc: 17.69, ndp: 4.05, bq: 15.08, gpc: 1.56, ppc: 0.76, oth: 0.67 },
    "Longueuil—Charles-LeMoyne": { cpc: 11.23, lpc: 51.97, ndp: 6.41, bq: 26.02, gpc: 3.14, ppc: 1.04, oth: 0.17 },
    "Longueuil—Saint-Hubert": { cpc: 9.49, lpc: 49.9, ndp: 5.01, bq: 30.79, gpc: 3.65, ppc: 0.86, oth: 0.3 },
    "Louis-Hébert": { cpc: 29.84, lpc: 44.57, ndp: 4.08, bq: 18.07, gpc: 3.05, ppc: 0.0, oth: 0.4 },
    "Louis-Saint-Laurent—Akiawenhrahk": { cpc: 61.46, lpc: 19.45, ndp: 2.86, bq: 12.96, gpc: 1.6, ppc: 0.66, oth: 1.0 },
    "Marc-Aurèle-Fortin": { cpc: 15.43, lpc: 55.07, ndp: 5.17, bq: 22.07, gpc: 0.0, ppc: 1.0, oth: 1.26 },
    "Mégantic—L'Érable—Lotbinière": { cpc: 66.75, lpc: 15.09, ndp: 1.69, bq: 12.58, gpc: 1.47, ppc: 1.09, oth: 1.33 },
    "Mirabel": { cpc: 19.16, lpc: 33.37, ndp: 5.7, bq: 35.98, gpc: 2.97, ppc: 1.44, oth: 1.38 },
    "Mount Royal": { cpc: 27.26, lpc: 61.77, ndp: 4.59, bq: 2.52, gpc: 2.94, ppc: 0.79, oth: 0.14 },
    "Mont-Saint-Bruno—L'Acadie": { cpc: 13.56, lpc: 45.34, ndp: 5.34, bq: 34.69, gpc: 0.2, ppc: 0.77, oth: 0.09 },
    "Montcalm": { cpc: 17.4, lpc: 28.27, ndp: 4.29, bq: 43.22, gpc: 3.62, ppc: 1.67, oth: 1.52 },
    "Montmorency—Charlevoix": { cpc: 43.66, lpc: 24.74, ndp: 2.74, bq: 25.78, gpc: 1.46, ppc: 0.64, oth: 0.99 },
    "Notre-Dame-de-Grâce—Westmount": { cpc: 16.61, lpc: 61.97, ndp: 11.38, bq: 4.02, gpc: 4.7, ppc: 1.05, oth: 0.25 },
    "Outremont": { cpc: 9.87, lpc: 56.86, ndp: 16.91, bq: 11.36, gpc: 4.02, ppc: 0.76, oth: 0.23 },
    "Papineau": { cpc: 6.4, lpc: 63.12, ndp: 13.75, bq: 10.83, gpc: 4.01, ppc: 0.81, oth: 1.08 },
    "Pierre-Boucher—Les Patriotes—Verchères": { cpc: 13.01, lpc: 36.27, ndp: 5.23, bq: 43.68, gpc: 0.0, ppc: 0.76, oth: 1.05 },
    "Pierrefonds—Dollard": { cpc: 24.61, lpc: 62.89, ndp: 6.26, bq: 5.1, gpc: 0.0, ppc: 1.15, oth: 0.0 },
    "Pontiac—Kitigan Zibi": { cpc: 26.45, lpc: 51.5, ndp: 6.43, bq: 10.23, gpc: 3.42, ppc: 1.46, oth: 0.52 },
    "Portneuf—Jacques-Cartier": { cpc: 62.84, lpc: 17.27, ndp: 2.6, bq: 15.54, gpc: 0.0, ppc: 0.77, oth: 0.97 },
    "Québec Centre": { cpc: 23.53, lpc: 44.33, ndp: 7.61, bq: 20.67, gpc: 2.93, ppc: 0.54, oth: 0.39 },
    "Repentigny": { cpc: 12.8, lpc: 38.67, ndp: 4.95, bq: 40.51, gpc: 0.0, ppc: 0.0, oth: 3.07 },
    "Richmond—Arthabaska": { cpc: 61.0, lpc: 17.37, ndp: 2.51, bq: 16.51, gpc: 0.0, ppc: 1.16, oth: 1.46 },
    "Rimouski—La Matapédia": { cpc: 16.64, lpc: 31.18, ndp: 4.0, bq: 44.0, gpc: 0.0, ppc: 0.8, oth: 3.39 },
    "Rivière-des-Mille-Îles": { cpc: 14.09, lpc: 46.17, ndp: 4.54, bq: 30.39, gpc: 2.38, ppc: 0.99, oth: 1.45 },
    "Rivière-du-Nord": { cpc: 17.86, lpc: 31.67, ndp: 4.69, bq: 41.73, gpc: 0.41, ppc: 1.49, oth: 2.16 },
    "Rosemont—La Petite-Patrie": { cpc: 6.4, lpc: 35.23, ndp: 35.68, bq: 18.65, gpc: 3.62, ppc: 0.0, oth: 0.42 },
    "Saint-Hyacinthe—Bagot—Acton": { cpc: 19.88, lpc: 31.7, ndp: 7.85, bq: 38.04, gpc: 0.0, ppc: 1.05, oth: 1.48 },
    "Saint-Jean": { cpc: 17.75, lpc: 37.21, ndp: 4.65, bq: 34.94, gpc: 2.83, ppc: 0.0, oth: 2.62 },
    "Saint-Laurent": { cpc: 21.52, lpc: 66.26, ndp: 5.8, bq: 5.09, gpc: 0.13, ppc: 0.97, oth: 0.22 },
    "Saint-Léonard—Saint-Michel": { cpc: 12.22, lpc: 77.16, ndp: 4.39, bq: 5.08, gpc: 0.0, ppc: 1.15, oth: 0.0 },
    "Saint-Maurice—Champlain": { cpc: 22.54, lpc: 50.49, ndp: 2.91, bq: 20.53, gpc: 1.55, ppc: 0.0, oth: 1.98 },
    "Shefford": { cpc: 16.66, lpc: 43.7, ndp: 3.36, bq: 31.39, gpc: 2.33, ppc: 1.26, oth: 1.31 },
    "Sherbrooke": { cpc: 17.16, lpc: 47.69, ndp: 8.55, bq: 21.15, gpc: 3.66, ppc: 0.87, oth: 0.92 },
    "Terrebonne": { cpc: 14.92, lpc: 39.81, ndp: 4.36, bq: 32.2, gpc: 1.93, ppc: 1.0, oth: 5.78 },
    "Thérèse-De Blainville": { cpc: 15.1, lpc: 45.71, ndp: 4.57, bq: 30.51, gpc: 2.52, ppc: 0.97, oth: 0.64 },
    "Trois-Rivières": { cpc: 37.29, lpc: 34.56, ndp: 4.7, bq: 20.43, gpc: 1.57, ppc: 0.64, oth: 0.81 },
    "Vaudreuil": { cpc: 20.27, lpc: 55.49, ndp: 6.01, bq: 14.07, gpc: 2.96, ppc: 0.0, oth: 1.2 },
    "Ville-Marie—Le Sud-Ouest—Île-des-Sœurs": { cpc: 16.04, lpc: 61.07, ndp: 10.39, bq: 8.15, gpc: 3.18, ppc: 0.86, oth: 0.32 },
    "Vimy": { cpc: 17.51, lpc: 60.24, ndp: 5.41, bq: 15.4, gpc: 0.0, ppc: 1.44, oth: 0.0 },
    "Ajax": { cpc: 30.02, lpc: 63.03, ndp: 5.1, bq: 0.0, gpc: 1.84, ppc: 0.0, oth: 0.0 },
    "Algonquin—Renfrew—Pembroke": { cpc: 61.96, lpc: 23.83, ndp: 8.44, bq: 0.0, gpc: 1.54, ppc: 1.9, oth: 2.32 },
    "Aurora—Oak Ridges—Richmond Hill": { cpc: 45.5, lpc: 47.53, ndp: 2.79, bq: 0.0, gpc: 0.13, ppc: 0.83, oth: 3.22 },
    "Barrie South—Innisfil": { cpc: 57.66, lpc: 34.35, ndp: 6.14, bq: 0.0, gpc: 0.0, ppc: 1.85, oth: 0.0 },
    "Barrie—Springwater—Oro-Medonte": { cpc: 55.4, lpc: 36.18, ndp: 6.48, bq: 0.0, gpc: 0.17, ppc: 1.67, oth: 0.11 },
    "Bay of Quinte": { cpc: 48.15, lpc: 43.16, ndp: 5.83, bq: 0.0, gpc: 1.7, ppc: 1.16, oth: 0.0 },
    "Beaches—East York": { cpc: 17.59, lpc: 68.17, ndp: 8.89, bq: 0.0, gpc: 2.16, ppc: 0.77, oth: 2.42 },
    "Bowmanville—Oshawa North": { cpc: 53.29, lpc: 36.06, ndp: 7.05, bq: 0.0, gpc: 0.0, ppc: 1.28, oth: 2.32 },
    "Brampton Centre": { cpc: 35.99, lpc: 54.42, ndp: 5.82, bq: 0.0, gpc: 0.0, ppc: 0.82, oth: 2.95 },
    "Brampton—Chinguacousy Park": { cpc: 34.31, lpc: 55.27, ndp: 5.99, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 4.43 },
    "Brampton East": { cpc: 33.05, lpc: 60.52, ndp: 5.82, bq: 0.0, gpc: 0.0, ppc: 0.61, oth: 0.0 },
    "Brampton North—Caledon": { cpc: 37.36, lpc: 56.91, ndp: 5.06, bq: 0.0, gpc: 0.3, ppc: 0.21, oth: 0.17 },
    "Brampton South": { cpc: 33.44, lpc: 60.12, ndp: 4.95, bq: 0.0, gpc: 0.0, ppc: 0.65, oth: 0.84 },
    "Brampton West": { cpc: 30.87, lpc: 61.61, ndp: 4.58, bq: 0.0, gpc: 0.0, ppc: 0.55, oth: 2.4 },
    "Brantford—Brant South—Six Nations": { cpc: 50.9, lpc: 34.62, ndp: 8.3, bq: 0.0, gpc: 2.17, ppc: 2.22, oth: 1.79 },
    "Bruce—Grey—Owen Sound": { cpc: 58.15, lpc: 29.33, ndp: 5.18, bq: 0.0, gpc: 2.35, ppc: 1.89, oth: 3.1 },
    "Burlington": { cpc: 42.18, lpc: 50.9, ndp: 3.96, bq: 0.0, gpc: 1.46, ppc: 0.9, oth: 0.6 },
    "Burlington North—Milton West": { cpc: 41.2, lpc: 53.01, ndp: 3.48, bq: 0.0, gpc: 1.42, ppc: 0.89, oth: 0.0 },
    "Cambridge": { cpc: 42.22, lpc: 46.49, ndp: 6.8, bq: 0.0, gpc: 2.72, ppc: 1.76, oth: 0.0 },
    "Carleton": { cpc: 58.39, lpc: 35.27, ndp: 4.12, bq: 0.0, gpc: 1.57, ppc: 0.62, oth: 0.03 },
    "Chatham-Kent—Leamington": { cpc: 54.87, lpc: 33.99, ndp: 6.08, bq: 0.0, gpc: 1.27, ppc: 3.78, oth: 0.0 },
    "Davenport": { cpc: 15.6, lpc: 61.62, ndp: 18.32, bq: 0.0, gpc: 2.24, ppc: 0.93, oth: 1.27 },
    "Don Valley North": { cpc: 36.4, lpc: 58.03, ndp: 3.57, bq: 0.0, gpc: 1.31, ppc: 0.66, oth: 0.03 },
    "Don Valley West": { cpc: 33.0, lpc: 62.07, ndp: 3.26, bq: 0.0, gpc: 0.76, ppc: 0.56, oth: 0.36 },
    "Dufferin—Caledon": { cpc: 57.16, lpc: 32.79, ndp: 3.89, bq: 0.0, gpc: 3.42, ppc: 1.65, oth: 1.1 },
    "Eglinton—Lawrence": { cpc: 40.69, lpc: 53.2, ndp: 3.29, bq: 0.0, gpc: 2.17, ppc: 0.65, oth: 0.0 },
    "Elgin—St. Thomas—London South": { cpc: 62.19, lpc: 24.39, ndp: 6.58, bq: 0.0, gpc: 1.81, ppc: 3.06, oth: 1.97 },
    "Essex": { cpc: 58.01, lpc: 21.51, ndp: 14.43, bq: 0.0, gpc: 1.14, ppc: 2.87, oth: 2.04 },
    "Etobicoke Centre": { cpc: 39.31, lpc: 54.57, ndp: 4.0, bq: 0.0, gpc: 0.23, ppc: 1.51, oth: 0.37 },
    "Etobicoke—Lakeshore": { cpc: 37.53, lpc: 53.55, ndp: 5.02, bq: 0.0, gpc: 1.59, ppc: 1.01, oth: 1.29 },
    "Etobicoke North": { cpc: 28.29, lpc: 64.37, ndp: 3.78, bq: 0.0, gpc: 0.0, ppc: 0.96, oth: 2.61 },
    "Flamborough—Glanbrook—Brant North": { cpc: 52.35, lpc: 38.25, ndp: 5.63, bq: 0.0, gpc: 1.9, ppc: 1.55, oth: 0.32 },
    "Guelph": { cpc: 29.62, lpc: 51.36, ndp: 8.96, bq: 0.0, gpc: 6.44, ppc: 1.17, oth: 2.45 },
    "Haldimand—Norfolk": { cpc: 56.01, lpc: 31.97, ndp: 5.06, bq: 0.0, gpc: 0.0, ppc: 2.47, oth: 4.49 },
    "Haliburton—Kawartha Lakes": { cpc: 61.28, lpc: 27.67, ndp: 5.41, bq: 0.0, gpc: 1.88, ppc: 1.61, oth: 2.15 },
    "Hamilton Centre": { cpc: 26.37, lpc: 41.96, ndp: 24.14, bq: 0.0, gpc: 2.76, ppc: 2.09, oth: 2.68 },
    "Hamilton East—Stoney Creek": { cpc: 38.54, lpc: 49.14, ndp: 8.93, bq: 0.0, gpc: 1.54, ppc: 1.85, oth: 0.0 },
    "Hamilton Mountain": { cpc: 34.13, lpc: 46.21, ndp: 13.85, bq: 0.0, gpc: 1.77, ppc: 1.71, oth: 2.33 },
    "Hamilton West—Ancaster—Dundas": { cpc: 35.41, lpc: 53.05, ndp: 7.73, bq: 0.0, gpc: 2.06, ppc: 1.0, oth: 0.75 },
    "Hastings—Lennox and Addington—Tyendinaga": { cpc: 50.9, lpc: 37.84, ndp: 3.97, bq: 0.0, gpc: 1.29, ppc: 1.26, oth: 4.73 },
    "Humber River—Black Creek": { cpc: 20.45, lpc: 70.11, ndp: 6.21, bq: 0.0, gpc: 0.92, ppc: 0.91, oth: 1.4 },
    "Huron—Bruce": { cpc: 59.68, lpc: 30.15, ndp: 5.58, bq: 0.0, gpc: 0.0, ppc: 1.69, oth: 2.9 },
    "Kanata": { cpc: 42.75, lpc: 49.22, ndp: 5.49, bq: 0.0, gpc: 1.91, ppc: 0.64, oth: 0.0 },
    "Kapuskasing—Timmins—Mushkegowuk": { cpc: 38.38, lpc: 39.3, ndp: 17.57, bq: 0.0, gpc: 0.39, ppc: 3.72, oth: 0.63 },
    "Kenora—Kiiwetinoong": { cpc: 58.25, lpc: 26.23, ndp: 12.62, bq: 0.0, gpc: 1.21, ppc: 1.69, oth: 0.0 },
    "Kingston and the Islands": { cpc: 32.24, lpc: 52.53, ndp: 12.18, bq: 0.0, gpc: 2.1, ppc: 0.91, oth: 0.04 },
    "King—Vaughan": { cpc: 49.38, lpc: 46.41, ndp: 2.35, bq: 0.0, gpc: 0.91, ppc: 0.95, oth: 0.0 },
    "Kitchener Centre": { cpc: 34.81, lpc: 23.91, ndp: 7.9, bq: 0.0, gpc: 30.37, ppc: 1.85, oth: 1.16 },
    "Kitchener—Conestoga": { cpc: 44.93, lpc: 44.93, ndp: 4.59, bq: 0.0, gpc: 3.81, ppc: 1.72, oth: 0.04 },
    "Kitchener South—Hespeler": { cpc: 42.94, lpc: 44.48, ndp: 6.33, bq: 0.0, gpc: 2.7, ppc: 1.62, oth: 1.93 },
    "Lanark—Frontenac": { cpc: 59.17, lpc: 30.23, ndp: 5.85, bq: 0.0, gpc: 2.08, ppc: 1.47, oth: 1.19 },
    "Leeds—Grenville—Thousand Islands—Rideau Lakes": { cpc: 60.44, lpc: 29.64, ndp: 5.76, bq: 0.0, gpc: 2.8, ppc: 1.36, oth: 0.0 },
    "London Centre": { cpc: 33.41, lpc: 49.72, ndp: 13.18, bq: 0.0, gpc: 1.72, ppc: 1.38, oth: 0.6 },
    "London—Fanshawe": { cpc: 38.67, lpc: 36.1, ndp: 22.32, bq: 0.0, gpc: 0.0, ppc: 2.91, oth: 0.0 },
    "London West": { cpc: 41.65, lpc: 44.2, ndp: 8.98, bq: 0.0, gpc: 0.0, ppc: 1.21, oth: 3.95 },
    "Markham—Stouffville": { cpc: 38.56, lpc: 56.23, ndp: 3.14, bq: 0.0, gpc: 1.42, ppc: 0.65, oth: 0.0 },
    "Markham—Thornhill": { cpc: 28.93, lpc: 66.32, ndp: 2.95, bq: 0.0, gpc: 1.42, ppc: 0.38, oth: 0.0 },
    "Markham—Unionville": { cpc: 45.26, lpc: 50.56, ndp: 2.25, bq: 0.0, gpc: 1.93, ppc: 0.0, oth: 0.0 },
    "Middlesex—London": { cpc: 55.93, lpc: 32.99, ndp: 7.1, bq: 0.0, gpc: 1.46, ppc: 1.91, oth: 0.62 },
    "Milton East—Halton Hills South": { cpc: 46.88, lpc: 46.6, ndp: 3.5, bq: 0.0, gpc: 1.92, ppc: 1.1, oth: 0.0 },
    "Mississauga Centre": { cpc: 32.89, lpc: 60.37, ndp: 4.15, bq: 0.0, gpc: 1.2, ppc: 0.95, oth: 0.44 },
    "Mississauga East—Cooksville": { cpc: 35.76, lpc: 55.92, ndp: 3.83, bq: 0.0, gpc: 0.24, ppc: 1.45, oth: 2.8 },
    "Mississauga—Erin Mills": { cpc: 37.7, lpc: 56.62, ndp: 3.73, bq: 0.0, gpc: 1.19, ppc: 0.75, oth: 0.0 },
    "Mississauga—Lakeshore": { cpc: 43.47, lpc: 49.85, ndp: 3.55, bq: 0.0, gpc: 1.61, ppc: 0.96, oth: 0.57 },
    "Mississauga—Malton": { cpc: 34.16, lpc: 57.46, ndp: 4.91, bq: 0.0, gpc: 1.34, ppc: 0.07, oth: 2.07 },
    "Mississauga—Streetsville": { cpc: 38.99, lpc: 52.87, ndp: 4.42, bq: 0.0, gpc: 1.57, ppc: 0.84, oth: 1.31 },
    "Nepean": { cpc: 39.09, lpc: 52.67, ndp: 6.12, bq: 0.0, gpc: 1.48, ppc: 0.64, oth: 0.0 },
    "Newmarket—Aurora": { cpc: 43.2, lpc: 48.72, ndp: 4.21, bq: 0.0, gpc: 1.35, ppc: 0.94, oth: 1.57 },
    "New Tecumseth—Gwillimbury": { cpc: 56.24, lpc: 35.12, ndp: 4.96, bq: 0.0, gpc: 0.95, ppc: 1.76, oth: 0.97 },
    "Niagara Falls—Niagara-on-the-Lake": { cpc: 46.46, lpc: 42.96, ndp: 7.14, bq: 0.0, gpc: 1.57, ppc: 1.87, oth: 0.0 },
    "Niagara South": { cpc: 43.87, lpc: 42.54, ndp: 9.64, bq: 0.0, gpc: 1.62, ppc: 2.34, oth: 0.0 },
    "Niagara West": { cpc: 51.57, lpc: 35.76, ndp: 5.27, bq: 0.0, gpc: 2.13, ppc: 1.65, oth: 3.61 },
    "Nipissing—Timiskaming": { cpc: 41.29, lpc: 46.94, ndp: 9.73, bq: 0.0, gpc: 0.0, ppc: 2.04, oth: 0.0 },
    "Northumberland—Clarke": { cpc: 51.95, lpc: 39.49, ndp: 5.3, bq: 0.0, gpc: 1.97, ppc: 1.29, oth: 0.0 },
    "Oakville East": { cpc: 44.0, lpc: 50.7, ndp: 3.38, bq: 0.0, gpc: 1.19, ppc: 0.74, oth: 0.0 },
    "Oakville West": { cpc: 42.84, lpc: 51.99, ndp: 3.12, bq: 0.0, gpc: 1.25, ppc: 0.8, oth: 0.0 },
    "Orléans": { cpc: 32.88, lpc: 59.02, ndp: 5.34, bq: 0.0, gpc: 1.21, ppc: 0.6, oth: 0.95 },
    "Oshawa": { cpc: 53.64, lpc: 30.7, ndp: 12.4, bq: 0.0, gpc: 1.34, ppc: 1.92, oth: 0.0 },
    "Ottawa Centre": { cpc: 21.5, lpc: 58.72, ndp: 13.91, bq: 0.0, gpc: 2.4, ppc: 0.59, oth: 2.88 },
    "Ottawa South": { cpc: 32.09, lpc: 57.8, ndp: 6.94, bq: 0.0, gpc: 1.7, ppc: 0.73, oth: 0.74 },
    "Ottawa—Vanier—Gloucester": { cpc: 25.15, lpc: 59.0, ndp: 9.17, bq: 0.0, gpc: 2.43, ppc: 0.78, oth: 3.47 },
    "Ottawa West—Nepean": { cpc: 33.29, lpc: 53.73, ndp: 7.83, bq: 0.0, gpc: 2.25, ppc: 0.77, oth: 2.13 },
    "Oxford": { cpc: 59.13, lpc: 25.69, ndp: 7.51, bq: 0.0, gpc: 2.21, ppc: 2.67, oth: 2.79 },
    "Parry Sound—Muskoka": { cpc: 59.07, lpc: 26.23, ndp: 6.68, bq: 0.0, gpc: 4.47, ppc: 1.85, oth: 1.7 },
    "Perth—Wellington": { cpc: 60.53, lpc: 30.17, ndp: 6.9, bq: 0.0, gpc: 0.0, ppc: 2.39, oth: 0.0 },
    "Peterborough": { cpc: 47.37, lpc: 41.38, ndp: 7.46, bq: 0.0, gpc: 1.75, ppc: 1.04, oth: 1.0 },
    "Pickering—Brooklin": { cpc: 39.44, lpc: 54.5, ndp: 5.0, bq: 0.0, gpc: 0.19, ppc: 0.88, oth: 0.0 },
    "Prescott—Russell—Cumberland": { cpc: 36.75, lpc: 52.65, ndp: 3.94, bq: 0.0, gpc: 1.5, ppc: 1.45, oth: 3.7 },
    "Richmond Hill South": { cpc: 41.15, lpc: 49.92, ndp: 2.99, bq: 0.0, gpc: 0.0, ppc: 0.62, oth: 5.31 },
    "Sarnia—Lambton—Bkejwanong": { cpc: 60.16, lpc: 24.65, ndp: 8.75, bq: 0.0, gpc: 1.25, ppc: 2.83, oth: 2.36 },
    "Sault Ste. Marie—Algoma": { cpc: 45.63, lpc: 40.79, ndp: 10.69, bq: 0.0, gpc: 0.53, ppc: 1.34, oth: 1.02 },
    "Scarborough—Agincourt": { cpc: 32.64, lpc: 61.86, ndp: 3.63, bq: 0.0, gpc: 1.25, ppc: 0.62, oth: 0.0 },
    "Scarborough Centre—Don Valley East": { cpc: 29.1, lpc: 63.64, ndp: 5.09, bq: 0.0, gpc: 0.0, ppc: 0.97, oth: 1.19 },
    "Scarborough—Guildwood—Rouge Park": { cpc: 25.08, lpc: 68.47, ndp: 4.9, bq: 0.0, gpc: 0.0, ppc: 0.68, oth: 0.87 },
    "Scarborough North": { cpc: 19.93, lpc: 72.53, ndp: 4.11, bq: 0.0, gpc: 0.0, ppc: 0.53, oth: 2.9 },
    "Scarborough Southwest": { cpc: 24.03, lpc: 66.48, ndp: 6.0, bq: 0.0, gpc: 1.71, ppc: 0.67, oth: 1.1 },
    "Scarborough—Woburn": { cpc: 25.29, lpc: 66.61, ndp: 4.75, bq: 0.0, gpc: 0.0, ppc: 0.69, oth: 2.66 },
    "Simcoe—Grey": { cpc: 56.2, lpc: 32.48, ndp: 5.03, bq: 0.0, gpc: 3.2, ppc: 1.64, oth: 1.46 },
    "Simcoe North": { cpc: 51.37, lpc: 36.92, ndp: 6.26, bq: 0.0, gpc: 2.42, ppc: 1.85, oth: 1.18 },
    "Spadina—Harbourfront": { cpc: 29.78, lpc: 51.58, ndp: 14.95, bq: 0.0, gpc: 2.86, ppc: 0.82, oth: 0.0 },
    "St. Catharines": { cpc: 40.99, lpc: 47.13, ndp: 8.69, bq: 0.0, gpc: 1.53, ppc: 1.66, oth: 0.0 },
    "Stormont—Dundas—Glengarry": { cpc: 63.62, lpc: 28.45, ndp: 4.11, bq: 0.0, gpc: 1.76, ppc: 1.79, oth: 0.28 },
    "Sudbury": { cpc: 37.28, lpc: 46.09, ndp: 12.47, bq: 0.0, gpc: 1.73, ppc: 1.63, oth: 0.79 },
    "Sudbury East—Manitoulin—Nickel Belt": { cpc: 37.67, lpc: 44.02, ndp: 13.68, bq: 0.0, gpc: 1.57, ppc: 2.48, oth: 0.58 },
    "Taiaiako’n—Parkdale—High Park": { cpc: 18.84, lpc: 59.44, ndp: 17.47, bq: 0.0, gpc: 1.74, ppc: 0.9, oth: 1.62 },
    "Thornhill": { cpc: 56.78, lpc: 38.93, ndp: 2.11, bq: 0.0, gpc: 1.17, ppc: 1.0, oth: 0.0 },
    "Thunder Bay—Rainy River": { cpc: 39.38, lpc: 45.28, ndp: 12.32, bq: 0.0, gpc: 1.25, ppc: 1.76, oth: 0.0 },
    "Thunder Bay—Superior North": { cpc: 31.65, lpc: 52.47, ndp: 11.79, bq: 0.0, gpc: 1.52, ppc: 1.55, oth: 1.01 },
    "Toronto Centre": { cpc: 16.61, lpc: 62.97, ndp: 10.86, bq: 0.0, gpc: 6.72, ppc: 0.6, oth: 2.24 },
    "Toronto—Danforth": { cpc: 16.61, lpc: 62.87, ndp: 14.34, bq: 0.0, gpc: 1.69, ppc: 0.65, oth: 3.85 },
    "Toronto—St. Paul's": { cpc: 31.37, lpc: 57.6, ndp: 6.06, bq: 0.0, gpc: 4.28, ppc: 0.59, oth: 0.1 },
    "University—Rosedale": { cpc: 23.16, lpc: 58.99, ndp: 11.67, bq: 0.0, gpc: 3.72, ppc: 0.66, oth: 1.79 },
    "Vaughan—Woodbridge": { cpc: 44.5, lpc: 50.14, ndp: 2.47, bq: 0.0, gpc: 0.69, ppc: 1.19, oth: 1.01 },
    "Waterloo": { cpc: 33.7, lpc: 54.91, ndp: 7.56, bq: 0.0, gpc: 2.72, ppc: 1.11, oth: 0.0 },
    "Wellington—Halton Hills North": { cpc: 55.03, lpc: 34.99, ndp: 4.53, bq: 0.0, gpc: 3.59, ppc: 1.45, oth: 0.42 },
    "Whitby": { cpc: 40.39, lpc: 51.92, ndp: 5.44, bq: 0.0, gpc: 1.22, ppc: 1.03, oth: 0.0 },
    "Willowdale": { cpc: 37.9, lpc: 56.35, ndp: 3.71, bq: 0.0, gpc: 1.44, ppc: 0.6, oth: 0.0 },
    "Windsor—Tecumseh—Lakeshore": { cpc: 38.17, lpc: 42.85, ndp: 13.77, bq: 0.0, gpc: 1.11, ppc: 2.89, oth: 1.21 },
    "Windsor West": { cpc: 30.47, lpc: 43.02, ndp: 22.45, bq: 0.0, gpc: 0.0, ppc: 2.61, oth: 1.44 },
    "York Centre": { cpc: 42.74, lpc: 52.51, ndp: 3.7, bq: 0.0, gpc: 0.0, ppc: 1.05, oth: 0.0 },
    "York—Durham": { cpc: 60.02, lpc: 32.5, ndp: 4.7, bq: 0.0, gpc: 0.42, ppc: 1.47, oth: 0.89 },
    "York South—Weston—Etobicoke": { cpc: 26.68, lpc: 64.87, ndp: 5.77, bq: 0.0, gpc: 1.47, ppc: 1.17, oth: 0.04 },
    "Brandon—Souris": { cpc: 65.12, lpc: 23.53, ndp: 9.72, bq: 0.0, gpc: 0.02, ppc: 1.53, oth: 0.08 },
    "Churchill—Keewatinook Aski": { cpc: 26.32, lpc: 49.25, ndp: 20.15, bq: 0.0, gpc: 3.36, ppc: 0.92, oth: 0.0 },
    "Elmwood—Transcona": { cpc: 35.94, lpc: 33.77, ndp: 26.97, bq: 0.0, gpc: 2.02, ppc: 1.27, oth: 0.02 },
    "Kildonan—St. Paul": { cpc: 40.67, lpc: 48.04, ndp: 9.91, bq: 0.0, gpc: 0.3, ppc: 0.88, oth: 0.2 },
    "Portage—Lisgar": { cpc: 61.99, lpc: 23.42, ndp: 6.94, bq: 0.0, gpc: 0.0, ppc: 4.4, oth: 3.26 },
    "Provencher": { cpc: 51.5, lpc: 31.6, ndp: 5.66, bq: 0.0, gpc: 2.74, ppc: 3.15, oth: 5.35 },
    "Riding Mountain": { cpc: 63.07, lpc: 24.4, ndp: 6.72, bq: 0.0, gpc: 2.26, ppc: 1.9, oth: 1.65 },
    "St. Boniface—St. Vital": { cpc: 23.56, lpc: 65.71, ndp: 7.66, bq: 0.0, gpc: 1.26, ppc: 0.61, oth: 1.19 },
    "Selkirk—Interlake—Eastman": { cpc: 61.12, lpc: 25.53, ndp: 9.06, bq: 0.0, gpc: 2.9, ppc: 1.39, oth: 0.0 },
    "Winnipeg Centre": { cpc: 13.79, lpc: 56.03, ndp: 23.24, bq: 0.0, gpc: 2.58, ppc: 0.78, oth: 3.57 },
    "Winnipeg North": { cpc: 10.92, lpc: 77.36, ndp: 9.76, bq: 0.0, gpc: 1.0, ppc: 0.55, oth: 0.41 },
    "Winnipeg South": { cpc: 25.65, lpc: 67.85, ndp: 4.89, bq: 0.0, gpc: 1.17, ppc: 0.44, oth: 0.0 },
    "Winnipeg South Centre": { cpc: 22.97, lpc: 66.47, ndp: 7.34, bq: 0.0, gpc: 2.18, ppc: 0.39, oth: 0.66 },
    "Winnipeg West": { cpc: 33.62, lpc: 58.74, ndp: 5.4, bq: 0.0, gpc: 1.73, ppc: 0.48, oth: 0.03 },
    "Battlefords—Lloydminster—Meadow Lake": { cpc: 68.79, lpc: 13.46, ndp: 5.74, bq: 0.0, gpc: 0.8, ppc: 1.04, oth: 10.18 },
    "Carlton Trail—Eagle Creek": { cpc: 75.21, lpc: 10.88, ndp: 6.75, bq: 0.0, gpc: 1.04, ppc: 1.73, oth: 4.39 },
    "Desnethé—Missinippi—Churchill River": { cpc: 19.31, lpc: 68.22, ndp: 8.55, bq: 0.0, gpc: 0.96, ppc: 0.43, oth: 2.53 },
    "Moose Jaw—Lake Centre—Lanigan": { cpc: 70.96, lpc: 12.61, ndp: 9.57, bq: 0.0, gpc: 1.21, ppc: 2.23, oth: 3.42 },
    "Prince Albert": { cpc: 66.75, lpc: 22.09, ndp: 6.8, bq: 0.0, gpc: 1.15, ppc: 1.21, oth: 1.99 },
    "Regina—Lewvan": { cpc: 51.98, lpc: 28.92, ndp: 17.04, bq: 0.0, gpc: 1.41, ppc: 0.67, oth: 0.0 },
    "Regina—Qu'Appelle": { cpc: 66.05, lpc: 20.15, ndp: 10.8, bq: 0.0, gpc: 2.08, ppc: 0.91, oth: 0.0 },
    "Regina—Wascana": { cpc: 46.07, lpc: 44.64, ndp: 7.25, bq: 0.0, gpc: 1.49, ppc: 0.55, oth: 0.0 },
    "Saskatoon South": { cpc: 54.48, lpc: 28.57, ndp: 14.73, bq: 0.0, gpc: 1.38, ppc: 0.85, oth: 0.0 },
    "Saskatoon—University": { cpc: 55.95, lpc: 22.77, ndp: 17.96, bq: 0.0, gpc: 1.11, ppc: 0.83, oth: 1.38 },
    "Saskatoon West": { cpc: 57.24, lpc: 18.58, ndp: 21.55, bq: 0.0, gpc: 1.33, ppc: 1.3, oth: 0.0 },
    "Souris—Moose Mountain": { cpc: 81.72, lpc: 8.11, ndp: 3.76, bq: 0.0, gpc: 0.07, ppc: 1.67, oth: 4.67 },
    "Swift Current—Grasslands—Kindersley": { cpc: 76.55, lpc: 7.81, ndp: 4.72, bq: 0.0, gpc: 0.89, ppc: 1.35, oth: 8.67 },
    "Yorkton—Melville": { cpc: 74.86, lpc: 12.34, ndp: 5.73, bq: 0.0, gpc: 1.9, ppc: 1.69, oth: 3.47 },
    "Airdrie—Cochrane": { cpc: 68.49, lpc: 17.87, ndp: 7.03, bq: 0.0, gpc: 3.14, ppc: 0.95, oth: 2.52 },
    "Battle River—Crowfoot": { cpc: 82.4, lpc: 7.56, ndp: 4.61, bq: 0.0, gpc: 2.31, ppc: 1.09, oth: 2.03 },
    "Bow River": { cpc: 79.18, lpc: 13.77, ndp: 4.39, bq: 0.0, gpc: 0.0, ppc: 1.13, oth: 1.52 },
    "Calgary Centre": { cpc: 47.21, lpc: 42.87, ndp: 6.27, bq: 0.0, gpc: 3.29, ppc: 0.0, oth: 0.36 },
    "Calgary Confederation": { cpc: 43.7, lpc: 41.02, ndp: 6.98, bq: 0.0, gpc: 7.7, ppc: 0.45, oth: 0.15 },
    "Calgary Crowfoot": { cpc: 55.24, lpc: 33.55, ndp: 6.7, bq: 0.0, gpc: 3.69, ppc: 0.47, oth: 0.35 },
    "Calgary East": { cpc: 55.83, lpc: 30.12, ndp: 7.87, bq: 0.0, gpc: 4.89, ppc: 0.76, oth: 0.52 },
    "Calgary Heritage": { cpc: 61.62, lpc: 26.31, ndp: 7.52, bq: 0.0, gpc: 3.3, ppc: 0.54, oth: 0.7 },
    "Calgary McKnight": { cpc: 30.73, lpc: 60.43, ndp: 5.99, bq: 0.0, gpc: 2.22, ppc: 0.36, oth: 0.27 },
    "Calgary Midnapore": { cpc: 66.12, lpc: 21.03, ndp: 8.38, bq: 0.0, gpc: 3.23, ppc: 0.67, oth: 0.57 },
    "Calgary Nose Hill": { cpc: 56.52, lpc: 31.79, ndp: 7.12, bq: 0.0, gpc: 3.62, ppc: 0.49, oth: 0.46 },
    "Calgary Shepard": { cpc: 65.06, lpc: 22.76, ndp: 7.02, bq: 0.0, gpc: 3.95, ppc: 0.61, oth: 0.6 },
    "Calgary Signal Hill": { cpc: 59.85, lpc: 29.83, ndp: 5.83, bq: 0.0, gpc: 3.72, ppc: 0.41, oth: 0.37 },
    "Calgary Skyview": { cpc: 42.67, lpc: 48.35, ndp: 6.46, bq: 0.0, gpc: 1.88, ppc: 0.36, oth: 0.27 },
    "Edmonton Centre": { cpc: 34.61, lpc: 50.96, ndp: 13.3, bq: 0.0, gpc: 0.26, ppc: 0.52, oth: 0.35 },
    "Edmonton Gateway": { cpc: 45.97, lpc: 41.68, ndp: 11.12, bq: 0.0, gpc: 0.49, ppc: 0.61, oth: 0.12 },
    "Edmonton Griesbach": { cpc: 45.52, lpc: 29.24, ndp: 20.84, bq: 0.0, gpc: 3.1, ppc: 0.75, oth: 0.54 },
    "Edmonton Manning": { cpc: 47.61, lpc: 36.64, ndp: 14.8, bq: 0.0, gpc: 0.0, ppc: 0.82, oth: 0.13 },
    "Edmonton Northwest": { cpc: 47.67, lpc: 38.91, ndp: 12.59, bq: 0.0, gpc: 0.07, ppc: 0.7, oth: 0.06 },
    "Edmonton Riverbend": { cpc: 46.95, lpc: 39.62, ndp: 10.4, bq: 0.0, gpc: 2.59, ppc: 0.42, oth: 0.02 },
    "Edmonton Southeast": { cpc: 37.74, lpc: 52.36, ndp: 9.21, bq: 0.0, gpc: 0.0, ppc: 0.57, oth: 0.12 },
    "Edmonton Strathcona": { cpc: 39.42, lpc: 20.44, ndp: 35.17, bq: 0.0, gpc: 4.01, ppc: 0.67, oth: 0.28 },
    "Edmonton West": { cpc: 48.5, lpc: 39.98, ndp: 10.74, bq: 0.0, gpc: 0.12, ppc: 0.55, oth: 0.12 },
    "Foothills": { cpc: 76.89, lpc: 11.99, ndp: 5.28, bq: 0.0, gpc: 3.25, ppc: 0.93, oth: 1.66 },
    "Fort McMurray—Cold Lake": { cpc: 78.13, lpc: 12.53, ndp: 4.8, bq: 0.0, gpc: 2.46, ppc: 1.48, oth: 0.6 },
    "Grande Prairie": { cpc: 82.83, lpc: 7.79, ndp: 5.86, bq: 0.0, gpc: 0.0, ppc: 1.24, oth: 2.28 },
    "Lakeland": { cpc: 81.0, lpc: 8.91, ndp: 5.05, bq: 0.0, gpc: 2.25, ppc: 1.3, oth: 1.48 },
    "Leduc—Wetaskiwin": { cpc: 76.36, lpc: 13.15, ndp: 8.74, bq: 0.0, gpc: 0.05, ppc: 1.36, oth: 0.34 },
    "Lethbridge": { cpc: 62.68, lpc: 26.23, ndp: 8.96, bq: 0.0, gpc: 0.0, ppc: 0.79, oth: 1.33 },
    "Medicine Hat—Cardston—Warner": { cpc: 75.32, lpc: 12.45, ndp: 6.55, bq: 0.0, gpc: 3.45, ppc: 1.08, oth: 1.17 },
    "Parkland": { cpc: 77.15, lpc: 11.74, ndp: 8.2, bq: 0.0, gpc: 0.0, ppc: 1.39, oth: 1.52 },
    "Peace River—Westlock": { cpc: 76.8, lpc: 10.34, ndp: 6.64, bq: 0.0, gpc: 2.02, ppc: 1.55, oth: 2.65 },
    "Ponoka—Didsbury": { cpc: 82.62, lpc: 8.71, ndp: 5.49, bq: 0.0, gpc: 0.0, ppc: 1.64, oth: 1.54 },
    "Red Deer": { cpc: 73.41, lpc: 15.24, ndp: 8.68, bq: 0.0, gpc: 0.0, ppc: 1.38, oth: 1.3 },
    "Sherwood Park—Fort Saskatchewan": { cpc: 65.14, lpc: 21.29, ndp: 9.63, bq: 0.0, gpc: 2.43, ppc: 0.8, oth: 0.71 },
    "St. Albert—Sturgeon River": { cpc: 66.28, lpc: 20.72, ndp: 11.48, bq: 0.0, gpc: 0.0, ppc: 0.93, oth: 0.58 },
    "Yellowhead": { cpc: 68.56, lpc: 18.59, ndp: 6.88, bq: 0.0, gpc: 3.1, ppc: 1.06, oth: 1.81 },
    "Abbotsford—South Langley": { cpc: 52.13, lpc: 35.77, ndp: 8.35, bq: 0.0, gpc: 1.48, ppc: 2.28, oth: 0.0 },
    "Burnaby Central": { cpc: 28.27, lpc: 47.88, ndp: 20.33, bq: 0.0, gpc: 1.53, ppc: 1.23, oth: 0.75 },
    "Burnaby North—Seymour": { cpc: 30.04, lpc: 55.52, ndp: 12.01, bq: 0.0, gpc: 1.58, ppc: 0.86, oth: 0.0 },
    "Cariboo—Prince George": { cpc: 61.53, lpc: 23.48, ndp: 9.83, bq: 0.0, gpc: 1.72, ppc: 2.81, oth: 0.63 },
    "Chilliwack—Hope": { cpc: 57.15, lpc: 25.55, ndp: 13.15, bq: 0.0, gpc: 1.44, ppc: 2.71, oth: 0.0 },
    "Cloverdale—Langley City": { cpc: 39.07, lpc: 50.8, ndp: 8.65, bq: 0.0, gpc: 0.0, ppc: 1.49, oth: 0.0 },
    "Columbia—Kootenay—Southern Rockies": { cpc: 60.1, lpc: 14.8, ndp: 20.22, bq: 0.0, gpc: 2.1, ppc: 2.79, oth: 0.0 },
    "Coquitlam—Port Coquitlam": { cpc: 34.25, lpc: 51.77, ndp: 12.57, bq: 0.0, gpc: 0.0, ppc: 1.42, oth: 0.0 },
    "Courtenay—Alberni": { cpc: 45.15, lpc: 23.58, ndp: 24.77, bq: 0.0, gpc: 4.18, ppc: 2.05, oth: 0.26 },
    "Cowichan—Malahat—Langford": { cpc: 40.79, lpc: 28.3, ndp: 24.66, bq: 0.0, gpc: 3.68, ppc: 2.57, oth: 0.0 },
    "Delta": { cpc: 35.49, lpc: 54.06, ndp: 7.82, bq: 0.0, gpc: 0.97, ppc: 0.75, oth: 0.91 },
    "Esquimalt—Saanich—Sooke": { cpc: 29.96, lpc: 37.55, ndp: 24.75, bq: 0.0, gpc: 5.23, ppc: 1.89, oth: 0.62 },
    "Fleetwood—Port Kells": { cpc: 30.38, lpc: 58.75, ndp: 8.68, bq: 0.0, gpc: 0.84, ppc: 0.88, oth: 0.47 },
    "Kamloops—Shuswap—Central Rockies": { cpc: 56.61, lpc: 25.08, ndp: 12.61, bq: 0.0, gpc: 2.63, ppc: 2.92, oth: 0.14 },
    "Kamloops—Thompson—Nicola": { cpc: 54.36, lpc: 26.55, ndp: 14.3, bq: 0.0, gpc: 1.93, ppc: 2.13, oth: 0.74 },
    "Kelowna": { cpc: 49.42, lpc: 36.81, ndp: 9.9, bq: 0.0, gpc: 1.45, ppc: 2.43, oth: 0.0 },
    "Langley Township—Fraser Heights": { cpc: 49.02, lpc: 39.64, ndp: 8.73, bq: 0.0, gpc: 1.11, ppc: 1.43, oth: 0.06 },
    "Mission—Matsqui—Abbotsford": { cpc: 54.21, lpc: 33.46, ndp: 8.29, bq: 0.0, gpc: 1.76, ppc: 2.29, oth: 0.0 },
    "Nanaimo—Ladysmith": { cpc: 40.13, lpc: 23.9, ndp: 17.76, bq: 0.0, gpc: 16.05, ppc: 2.16, oth: 0.0 },
    "New Westminster—Burnaby—Maillardville": { cpc: 29.59, lpc: 39.61, ndp: 27.06, bq: 0.0, gpc: 2.2, ppc: 1.5, oth: 0.05 },
    "North Island—Powell River": { cpc: 50.03, lpc: 22.07, ndp: 21.83, bq: 0.0, gpc: 3.33, ppc: 1.8, oth: 0.94 },
    "North Vancouver—Capilano": { cpc: 31.52, lpc: 57.59, ndp: 8.19, bq: 0.0, gpc: 1.88, ppc: 0.79, oth: 0.04 },
    "Okanagan Lake West—South Kelowna": { cpc: 55.66, lpc: 32.1, ndp: 8.71, bq: 0.0, gpc: 1.3, ppc: 2.23, oth: 0.0 },
    "Pitt Meadows—Maple Ridge": { cpc: 45.17, lpc: 36.01, ndp: 15.25, bq: 0.0, gpc: 0.15, ppc: 1.92, oth: 1.5 },
    "Port Moody—Coquitlam": { cpc: 38.71, lpc: 42.88, ndp: 17.0, bq: 0.0, gpc: 0.0, ppc: 1.14, oth: 0.28 },
    "Prince George—Peace River—Northern Rockies": { cpc: 70.49, lpc: 13.2, ndp: 6.84, bq: 0.0, gpc: 1.7, ppc: 3.52, oth: 4.25 },
    "Richmond Centre—Marpole": { cpc: 38.56, lpc: 50.4, ndp: 8.88, bq: 0.0, gpc: 1.4, ppc: 0.76, oth: 0.0 },
    "Richmond East—Steveston": { cpc: 36.26, lpc: 53.7, ndp: 8.29, bq: 0.0, gpc: 1.03, ppc: 0.72, oth: 0.0 },
    "Saanich—Gulf Islands": { cpc: 32.88, lpc: 32.78, ndp: 11.37, bq: 0.0, gpc: 21.36, ppc: 1.25, oth: 0.36 },
    "Similkameen—South Okanagan—West Kootenay": { cpc: 51.89, lpc: 21.94, ndp: 21.56, bq: 0.0, gpc: 1.9, ppc: 2.71, oth: 0.0 },
    "Skeena—Bulkley Valley": { cpc: 52.71, lpc: 13.43, ndp: 24.88, bq: 0.0, gpc: 2.26, ppc: 3.21, oth: 3.51 },
    "South Surrey—White Rock": { cpc: 44.12, lpc: 48.57, ndp: 6.17, bq: 0.0, gpc: 0.0, ppc: 1.14, oth: 0.0 },
    "Surrey Centre": { cpc: 23.34, lpc: 60.55, ndp: 12.48, bq: 0.0, gpc: 1.03, ppc: 1.24, oth: 1.37 },
    "Surrey Newton": { cpc: 16.26, lpc: 69.78, ndp: 11.15, bq: 0.0, gpc: 0.0, ppc: 0.79, oth: 2.01 },
    "Vancouver Centre": { cpc: 25.64, lpc: 57.19, ndp: 14.23, bq: 0.0, gpc: 1.84, ppc: 1.1, oth: 0.0 },
    "Vancouver East": { cpc: 17.02, lpc: 37.11, ndp: 35.33, bq: 0.0, gpc: 4.96, ppc: 1.24, oth: 4.33 },
    "Vancouver Fraserview—South Burnaby": { cpc: 25.08, lpc: 58.26, ndp: 14.28, bq: 0.0, gpc: 0.48, ppc: 0.98, oth: 0.92 },
    "Vancouver Granville": { cpc: 29.2, lpc: 52.93, ndp: 15.61, bq: 0.0, gpc: 1.33, ppc: 0.8, oth: 0.12 },
    "Vancouver Kingsway": { cpc: 19.64, lpc: 48.41, ndp: 28.05, bq: 0.0, gpc: 2.07, ppc: 0.87, oth: 0.95 },
    "Vancouver Quadra": { cpc: 31.71, lpc: 56.56, ndp: 8.43, bq: 0.0, gpc: 2.66, ppc: 0.63, oth: 0.0 },
    "Vernon—Lake Country—Monashee": { cpc: 54.03, lpc: 29.28, ndp: 10.72, bq: 0.0, gpc: 2.63, ppc: 3.34, oth: 0.0 },
    "Victoria": { cpc: 19.46, lpc: 46.45, ndp: 24.95, bq: 0.0, gpc: 6.54, ppc: 1.25, oth: 1.35 },
    "West Vancouver—Sunshine Coast—Sea to Sky Country": { cpc: 34.75, lpc: 47.32, ndp: 12.84, bq: 0.0, gpc: 3.33, ppc: 1.28, oth: 0.49 },
    "Yukon": { cpc: 38.08, lpc: 33.67, ndp: 13.31, bq: 0.0, gpc: 3.2, ppc: 0.0, oth: 11.74 },
    "Northwest Territories": { cpc: 22.87, lpc: 42.25, ndp: 21.01, bq: 0.0, gpc: 1.87, ppc: 0.0, oth: 12.01 },
    "Nunavut": { cpc: 27.01, lpc: 40.98, ndp: 32.01, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 }
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
