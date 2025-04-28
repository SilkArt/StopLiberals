// Electoral data from the CSV

const electoralData = {
    "Avalon": { cpc: 34.05, lpc: 60.75, ndp: 4.63, bq: 0.0, gpc: 0.0, ppc: 0.57, oth: 0.0 },
    "Cape Spear": { cpc: 22.24, lpc: 69.22, ndp: 7.96, bq: 0.0, gpc: 0.0, ppc: 0.58, oth: 0.0 },
    "Central Newfoundland": { cpc: 45.77, lpc: 52.04, ndp: 2.18, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Labrador": { cpc: 34.39, lpc: 56.03, ndp: 8.5, bq: 0.0, gpc: 0.0, ppc: 1.09, oth: 0.0 },
    "Long Range Mountains": { cpc: 41.05, lpc: 53.66, ndp: 3.92, bq: 0.0, gpc: 0.0, ppc: 1.37, oth: 0.0 },
    "St. John's East": { cpc: 22.07, lpc: 63.82, ndp: 13.39, bq: 0.0, gpc: 0.0, ppc: 0.71, oth: 0.0 },
    "Terra Nova—The Peninsulas": { cpc: 40.84, lpc: 55.3, ndp: 2.65, bq: 0.0, gpc: 0.0, ppc: 1.21, oth: 0.0 },
    "Cardigan": { cpc: 31.26, lpc: 59.27, ndp: 3.11, bq: 0.0, gpc: 4.7, ppc: 1.0, oth: 0.64 },
    "Charlottetown": { cpc: 31.56, lpc: 55.0, ndp: 3.43, bq: 0.0, gpc: 9.41, ppc: 0.59, oth: 0.0 },
    "Egmont": { cpc: 31.8, lpc: 54.55, ndp: 2.79, bq: 0.0, gpc: 9.32, ppc: 1.54, oth: 0.0 },
    "Malpeque": { cpc: 33.54, lpc: 49.31, ndp: 2.56, bq: 0.0, gpc: 13.72, ppc: 0.85, oth: 0.01 },
    "Acadie—Annapolis": { cpc: 55.48, lpc: 38.46, ndp: 4.33, bq: 0.0, gpc: 0.0, ppc: 1.73, oth: 0.0 },
    "Cape Breton—Canso—Antigonish": { cpc: 37.22, lpc: 55.81, ndp: 4.93, bq: 0.0, gpc: 0.5, ppc: 1.27, oth: 0.28 },
    "Central Nova": { cpc: 35.28, lpc: 55.15, ndp: 5.46, bq: 0.0, gpc: 1.58, ppc: 1.3, oth: 1.23 },
    "Cumberland—Colchester": { cpc: 48.98, lpc: 42.17, ndp: 4.14, bq: 0.0, gpc: 2.66, ppc: 1.34, oth: 0.7 },
    "Dartmouth—Cole Harbour": { cpc: 3.65, lpc: 75.83, ndp: 13.2, bq: 0.0, gpc: 3.57, ppc: 3.74, oth: 0.0 },
    "Halifax": { cpc: 16.44, lpc: 63.11, ndp: 16.37, bq: 0.0, gpc: 2.76, ppc: 0.82, oth: 0.5 },
    "Halifax West": { cpc: 24.48, lpc: 62.58, ndp: 9.31, bq: 0.0, gpc: 2.69, ppc: 0.79, oth: 0.15 },
    "Kings—Hants": { cpc: 33.28, lpc: 56.61, ndp: 6.55, bq: 0.0, gpc: 2.05, ppc: 1.51, oth: 0.0 },
    "Sackville—Bedford—Preston": { cpc: 28.52, lpc: 59.05, ndp: 8.91, bq: 0.0, gpc: 2.26, ppc: 1.2, oth: 0.06 },
    "South Shore—St. Margarets": { cpc: 46.62, lpc: 44.28, ndp: 6.16, bq: 0.0, gpc: 2.94, ppc: 0.0, oth: 0.0 },
    "Sydney—Glace Bay": { cpc: 37.64, lpc: 53.5, ndp: 6.86, bq: 0.0, gpc: 0.68, ppc: 1.09, oth: 0.24 },
    "Acadie—Bathurst": { cpc: 14.08, lpc: 76.52, ndp: 3.6, bq: 0.0, gpc: 2.77, ppc: 1.8, oth: 1.22 },
    "Beauséjour": { cpc: 20.28, lpc: 67.18, ndp: 3.61, bq: 0.0, gpc: 5.74, ppc: 2.39, oth: 0.8 },
    "Fredericton—Oromocto": { cpc: 35.81, lpc: 45.43, ndp: 4.25, bq: 0.0, gpc: 12.92, ppc: 0.11, oth: 1.48 },
    "Fundy Royal": { cpc: 52.65, lpc: 33.71, ndp: 5.2, bq: 0.0, gpc: 5.5, ppc: 2.95, oth: 0.0 },
    "Madawaska—Restigouche": { cpc: 28.17, lpc: 61.13, ndp: 1.97, bq: 0.0, gpc: 2.66, ppc: 2.31, oth: 3.76 },
    "Miramichi—Grand Lake": { cpc: 46.92, lpc: 44.26, ndp: 2.4, bq: 0.0, gpc: 4.67, ppc: 1.68, oth: 0.08 },
    "Moncton—Dieppe": { cpc: 24.59, lpc: 63.1, ndp: 5.76, bq: 0.0, gpc: 4.48, ppc: 2.07, oth: 0.0 },
    "Saint John—Kennebecasis": { cpc: 38.62, lpc: 52.39, ndp: 4.41, bq: 0.0, gpc: 3.0, ppc: 1.57, oth: 0.0 },
    "Saint John—St. Croix": { cpc: 52.21, lpc: 36.13, ndp: 4.58, bq: 0.0, gpc: 4.34, ppc: 2.57, oth: 0.16 },
    "Tobique—Mactaquac": { cpc: 58.4, lpc: 29.02, ndp: 4.02, bq: 0.0, gpc: 5.24, ppc: 2.41, oth: 0.91 },
    "Abitibi—Baie-James—Nunavik—Eeyou": { cpc: 21.75, lpc: 30.44, ndp: 7.05, bq: 32.1, gpc: 2.44, ppc: 1.76, oth: 4.47 },
    "Abitibi—Témiscamingue": { cpc: 16.3, lpc: 28.73, ndp: 3.75, bq: 43.54, gpc: 2.62, ppc: 1.59, oth: 3.47 },
    "Ahuntsic-Cartierville": { cpc: 10.76, lpc: 58.41, ndp: 6.79, bq: 18.38, gpc: 4.5, ppc: 1.16, oth: 0.0 },
    "Alfred-Pellan": { cpc: 16.91, lpc: 51.93, ndp: 4.38, bq: 20.89, gpc: 2.43, ppc: 0.15, oth: 3.32 },
    "Argenteuil—La Petite-Nation": { cpc: 18.22, lpc: 45.23, ndp: 4.24, bq: 27.36, gpc: 0.58, ppc: 2.65, oth: 1.72 },
    "Beauce": { cpc: 61.21, lpc: 13.34, ndp: 1.62, bq: 11.87, gpc: 1.24, ppc: 7.82, oth: 2.91 },
    "Beauharnois—Salaberry—Soulanges—Huntingdon": { cpc: 16.64, lpc: 32.76, ndp: 4.58, bq: 41.86, gpc: 0.31, ppc: 1.58, oth: 2.26 },
    "Beauport—Limoilou": { cpc: 38.59, lpc: 26.6, ndp: 5.39, bq: 24.21, gpc: 2.94, ppc: 0.14, oth: 2.13 },
    "Bécancour—Nicolet—Saurel—Alnôbak": { cpc: 23.24, lpc: 19.96, ndp: 3.1, bq: 46.75, gpc: 2.44, ppc: 1.14, oth: 3.37 },
    "Bellechasse—Les Etchemins—Lévis": { cpc: 60.14, lpc: 15.36, ndp: 2.5, bq: 16.24, gpc: 1.9, ppc: 0.0, oth: 3.86 },
    "Beloeil—Chambly": { cpc: 11.94, lpc: 28.5, ndp: 5.33, bq: 46.99, gpc: 3.24, ppc: 0.97, oth: 3.02 },
    "Berthier—Maskinongé": { cpc: 17.04, lpc: 20.54, ndp: 22.43, bq: 34.6, gpc: 1.73, ppc: 1.4, oth: 2.26 },
    "Bourassa": { cpc: 9.04, lpc: 66.65, ndp: 4.55, bq: 14.91, gpc: 2.72, ppc: 1.6, oth: 0.53 },
    "Brome—Missisquoi": { cpc: 21.22, lpc: 39.1, ndp: 3.59, bq: 27.98, gpc: 3.57, ppc: 1.43, oth: 3.12 },
    "Brossard—Saint-Lambert": { cpc: 15.56, lpc: 60.0, ndp: 5.93, bq: 15.97, gpc: 0.0, ppc: 1.09, oth: 1.45 },
    "Charlesbourg—Haute-Saint-Charles": { cpc: 54.13, lpc: 20.19, ndp: 3.13, bq: 18.27, gpc: 2.3, ppc: 0.9, oth: 1.08 },
    "Châteauguay—Les Jardins-de-Napierville": { cpc: 16.45, lpc: 42.15, ndp: 4.64, bq: 30.5, gpc: 2.29, ppc: 1.73, oth: 2.24 },
    "Chicoutimi—Le Fjord": { cpc: 49.9, lpc: 19.23, ndp: 2.55, bq: 25.97, gpc: 1.66, ppc: 0.57, oth: 0.11 },
    "Compton—Stanstead": { cpc: 22.71, lpc: 40.85, ndp: 4.32, bq: 24.54, gpc: 4.19, ppc: 1.67, oth: 1.72 },
    "Côte-du-Sud—Rivière-du-Loup—Kataskomiq—Témiscouata": { cpc: 53.64, lpc: 19.45, ndp: 1.77, bq: 21.98, gpc: 0.0, ppc: 0.14, oth: 3.02 },
    "Côte-Nord—Kawawachikamach—Nitassinan": { cpc: 29.22, lpc: 21.39, ndp: 2.54, bq: 43.45, gpc: 0.0, ppc: 0.0, oth: 3.4 },
    "Dorval—Lachine—LaSalle": { cpc: 15.55, lpc: 58.22, ndp: 7.51, bq: 12.65, gpc: 4.21, ppc: 1.85, oth: 0.0 },
    "Drummond": { cpc: 24.51, lpc: 21.93, ndp: 6.7, bq: 39.31, gpc: 0.0, ppc: 0.0, oth: 7.55 },
    "Gaspésie—Les Îles-de-la-Madeleine—Listuguj": { cpc: 11.24, lpc: 46.21, ndp: 2.55, bq: 37.21, gpc: 0.0, ppc: 0.92, oth: 1.87 },
    "Gatineau": { cpc: 14.53, lpc: 55.94, ndp: 4.96, bq: 18.9, gpc: 2.34, ppc: 1.8, oth: 1.54 },
    "Hochelaga—Rosemont-Est": { cpc: 6.74, lpc: 47.06, ndp: 12.78, bq: 27.77, gpc: 3.27, ppc: 1.1, oth: 1.27 },
    "Honoré-Mercier": { cpc: 13.45, lpc: 65.4, ndp: 4.1, bq: 12.82, gpc: 2.19, ppc: 1.81, oth: 0.24 },
    "Hull—Aylmer": { cpc: 13.99, lpc: 58.18, ndp: 7.27, bq: 12.89, gpc: 4.18, ppc: 1.61, oth: 1.89 },
    "Joliette—Manawan": { cpc: 13.4, lpc: 26.94, ndp: 3.6, bq: 48.13, gpc: 3.16, ppc: 1.45, oth: 3.31 },
    "Jonquière": { cpc: 36.44, lpc: 22.87, ndp: 3.04, bq: 34.23, gpc: 2.49, ppc: 0.0, oth: 0.93 },
    "La Pointe-de-l'Île": { cpc: 9.56, lpc: 39.35, ndp: 6.08, bq: 41.03, gpc: 0.0, ppc: 1.32, oth: 2.66 },
    "La Prairie—Atateken": { cpc: 13.69, lpc: 40.71, ndp: 4.42, bq: 37.13, gpc: 2.62, ppc: 1.21, oth: 0.22 },
    "Lac-Saint-Jean": { cpc: 33.19, lpc: 21.28, ndp: 1.89, bq: 41.24, gpc: 2.4, ppc: 0.0, oth: 0.0 },
    "Lac-Saint-Louis": { cpc: 23.39, lpc: 59.48, ndp: 7.23, bq: 4.07, gpc: 4.58, ppc: 1.25, oth: 0.0 },
    "LaSalle—Émard—Verdun": { cpc: 10.48, lpc: 50.92, ndp: 11.47, bq: 18.48, gpc: 4.73, ppc: 1.59, oth: 2.33 },
    "Laurentides—Labelle": { cpc: 14.71, lpc: 28.09, ndp: 3.42, bq: 45.21, gpc: 3.88, ppc: 1.73, oth: 2.96 },
    "Laurier—Sainte-Marie": { cpc: 6.55, lpc: 49.19, ndp: 19.49, bq: 18.1, gpc: 3.71, ppc: 0.87, oth: 2.09 },
    "Laval—Les Îles": { cpc: 22.68, lpc: 53.51, ndp: 4.32, bq: 15.07, gpc: 2.2, ppc: 2.21, oth: 0.0 },
    "Les Pays-d'en-Haut": { cpc: 16.31, lpc: 30.92, ndp: 4.23, bq: 41.0, gpc: 2.44, ppc: 2.05, oth: 3.04 },
    "Lévis—Lotbinière": { cpc: 59.47, lpc: 15.71, ndp: 3.83, bq: 16.85, gpc: 1.85, ppc: 0.97, oth: 1.32 },
    "Longueuil—Charles-LeMoyne": { cpc: 11.34, lpc: 47.2, ndp: 6.2, bq: 29.73, gpc: 3.81, ppc: 1.36, oth: 0.35 },
    "Longueuil—Saint-Hubert": { cpc: 9.49, lpc: 44.83, ndp: 4.79, bq: 34.81, gpc: 4.38, ppc: 1.1, oth: 0.6 },
    "Louis-Hébert": { cpc: 30.23, lpc: 40.6, ndp: 3.95, bq: 20.72, gpc: 3.71, ppc: 0.0, oth: 0.8 },
    "Louis-Saint-Laurent—Akiawenhrahk": { cpc: 60.77, lpc: 17.3, ndp: 2.71, bq: 14.5, gpc: 1.9, ppc: 0.84, oth: 1.97 },
    "Marc-Aurèle-Fortin": { cpc: 15.64, lpc: 50.19, ndp: 5.01, bq: 25.31, gpc: 0.0, ppc: 1.31, oth: 2.54 },
    "Mégantic—L'Érable—Lotbinière": { cpc: 65.45, lpc: 13.31, ndp: 1.58, bq: 13.96, gpc: 1.73, ppc: 1.38, oth: 2.59 },
    "Mirabel": { cpc: 18.52, lpc: 28.99, ndp: 5.27, bq: 39.33, gpc: 3.44, ppc: 1.79, oth: 2.65 },
    "Mount Royal": { cpc: 28.73, lpc: 58.55, ndp: 4.63, bq: 3.0, gpc: 3.72, ppc: 1.07, oth: 0.29 },
    "Mont-Saint-Bruno—L'Acadie": { cpc: 13.55, lpc: 40.72, ndp: 5.11, bq: 39.2, gpc: 0.24, ppc: 1.0, oth: 0.19 },
    "Montcalm": { cpc: 16.52, lpc: 24.13, ndp: 3.9, bq: 46.41, gpc: 4.13, ppc: 2.05, oth: 2.86 },
    "Montmorency—Charlevoix": { cpc: 42.71, lpc: 21.76, ndp: 2.57, bq: 28.53, gpc: 1.72, ppc: 0.8, oth: 1.92 },
    "Notre-Dame-de-Grâce—Westmount": { cpc: 17.43, lpc: 58.48, ndp: 11.44, bq: 4.78, gpc: 5.92, ppc: 1.43, oth: 0.52 },
    "Outremont": { cpc: 10.25, lpc: 53.1, ndp: 16.81, bq: 13.35, gpc: 5.01, ppc: 1.02, oth: 0.47 },
    "Papineau": { cpc: 6.62, lpc: 58.77, ndp: 13.63, bq: 12.69, gpc: 4.99, ppc: 1.09, oth: 2.21 },
    "Pierre-Boucher—Les Patriotes—Verchères": { cpc: 12.62, lpc: 31.63, ndp: 4.85, bq: 47.93, gpc: 0.0, ppc: 0.95, oth: 2.02 },
    "Pierrefonds—Dollard": { cpc: 26.07, lpc: 59.9, ndp: 6.35, bq: 6.11, gpc: 0.0, ppc: 1.58, oth: 0.0 },
    "Pontiac—Kitigan Zibi": { cpc: 27.12, lpc: 47.49, ndp: 6.32, bq: 11.87, gpc: 4.21, ppc: 1.93, oth: 1.07 },
    "Portneuf—Jacques-Cartier": { cpc: 61.99, lpc: 15.32, ndp: 2.46, bq: 17.34, gpc: 0.0, ppc: 0.98, oth: 1.91 },
    "Québec Centre": { cpc: 23.75, lpc: 40.24, ndp: 7.36, bq: 23.61, gpc: 3.55, ppc: 0.71, oth: 0.78 },
    "Repentigny": { cpc: 12.28, lpc: 33.36, ndp: 4.55, bq: 43.97, gpc: 0.0, ppc: 0.0, oth: 5.84 },
    "Richmond—Arthabaska": { cpc: 59.76, lpc: 15.3, ndp: 2.35, bq: 18.3, gpc: 0.0, ppc: 1.46, oth: 2.83 },
    "Rimouski—La Matapédia": { cpc: 15.69, lpc: 26.44, ndp: 3.61, bq: 46.94, gpc: 0.0, ppc: 0.98, oth: 6.34 },
    "Rivière-des-Mille-Îles": { cpc: 13.9, lpc: 40.97, ndp: 4.29, bq: 33.92, gpc: 2.81, ppc: 1.26, oth: 2.83 },
    "Rivière-du-Nord": { cpc: 17.05, lpc: 27.19, ndp: 4.28, bq: 45.08, gpc: 0.46, ppc: 1.84, oth: 4.09 },
    "Rosemont—La Petite-Patrie": { cpc: 6.49, lpc: 32.15, ndp: 34.68, bq: 21.42, gpc: 4.41, ppc: 0.0, oth: 0.85 },
    "Saint-Hyacinthe—Bagot—Acton": { cpc: 19.25, lpc: 27.61, ndp: 7.29, bq: 41.69, gpc: 0.0, ppc: 1.32, oth: 2.85 },
    "Saint-Jean": { cpc: 17.1, lpc: 32.24, ndp: 4.29, bq: 38.09, gpc: 3.27, ppc: 0.0, oth: 5.01 },
    "Saint-Laurent": { cpc: 22.83, lpc: 63.2, ndp: 5.89, bq: 6.11, gpc: 0.16, ppc: 1.33, oth: 0.47 },
    "Saint-Léonard—Saint-Michel": { cpc: 13.13, lpc: 74.57, ndp: 4.52, bq: 6.18, gpc: 0.0, ppc: 1.6, oth: 0.0 },
    "Saint-Maurice—Champlain": { cpc: 22.6, lpc: 45.52, ndp: 2.79, bq: 23.28, gpc: 1.87, ppc: 0.0, oth: 3.93 },
    "Shefford": { cpc: 16.38, lpc: 38.64, ndp: 3.16, bq: 34.92, gpc: 2.75, ppc: 1.59, oth: 2.55 },
    "Sherbrooke": { cpc: 17.25, lpc: 43.1, ndp: 8.23, bq: 24.05, gpc: 4.42, ppc: 1.12, oth: 1.83 },
    "Terrebonne": { cpc: 14.02, lpc: 33.64, ndp: 3.92, bq: 34.23, gpc: 2.18, ppc: 1.22, oth: 10.79 },
    "Thérèse-De Blainville": { cpc: 15.0, lpc: 40.85, ndp: 4.35, bq: 34.3, gpc: 3.0, ppc: 1.24, oth: 1.26 },
    "Trois-Rivières": { cpc: 37.18, lpc: 30.98, ndp: 4.49, bq: 23.05, gpc: 1.88, ppc: 0.82, oth: 1.61 },
    "Vaudreuil": { cpc: 20.73, lpc: 51.03, ndp: 5.88, bq: 16.28, gpc: 3.63, ppc: 0.0, oth: 2.44 },
    "Ville-Marie—Le Sud-Ouest—Île-des-Sœurs": { cpc: 16.77, lpc: 57.39, ndp: 10.4, bq: 9.63, gpc: 3.99, ppc: 1.16, oth: 0.67 },
    "Vimy": { cpc: 18.21, lpc: 56.34, ndp: 5.39, bq: 18.12, gpc: 0.0, ppc: 1.94, oth: 0.0 },
    "Ajax": { cpc: 29.42, lpc: 63.55, ndp: 5.11, bq: 0.0, gpc: 1.92, ppc: 0.0, oth: 0.0 },
    "Algonquin—Renfrew—Pembroke": { cpc: 60.76, lpc: 24.04, ndp: 8.46, bq: 0.0, gpc: 1.6, ppc: 2.05, oth: 3.08 },
    "Aurora—Oak Ridges—Richmond Hill": { cpc: 44.32, lpc: 47.63, ndp: 2.78, bq: 0.0, gpc: 0.13, ppc: 0.89, oth: 4.25 },
    "Barrie South—Innisfil": { cpc: 56.92, lpc: 34.88, ndp: 6.19, bq: 0.0, gpc: 0.0, ppc: 2.0, oth: 0.0 },
    "Barrie—Springwater—Oro-Medonte": { cpc: 54.64, lpc: 36.71, ndp: 6.52, bq: 0.0, gpc: 0.17, ppc: 1.81, oth: 0.14 },
    "Bay of Quinte": { cpc: 47.4, lpc: 43.71, ndp: 5.86, bq: 0.0, gpc: 1.77, ppc: 1.26, oth: 0.0 },
    "Beaches—East York": { cpc: 17.05, lpc: 67.95, ndp: 8.79, bq: 0.0, gpc: 2.22, ppc: 0.82, oth: 3.17 },
    "Bowmanville—Oshawa North": { cpc: 52.18, lpc: 36.33, ndp: 7.05, bq: 0.0, gpc: 0.0, ppc: 1.38, oth: 3.07 },
    "Brampton Centre": { cpc: 35.0, lpc: 54.45, ndp: 5.78, bq: 0.0, gpc: 0.0, ppc: 0.88, oth: 3.88 },
    "Brampton—Chinguacousy Park": { cpc: 33.22, lpc: 55.05, ndp: 5.93, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 5.8 },
    "Brampton East": { cpc: 32.43, lpc: 61.09, ndp: 5.83, bq: 0.0, gpc: 0.0, ppc: 0.66, oth: 0.0 },
    "Brampton North—Caledon": { cpc: 36.68, lpc: 57.49, ndp: 5.07, bq: 0.0, gpc: 0.31, ppc: 0.23, oth: 0.22 },
    "Brampton South": { cpc: 32.72, lpc: 60.53, ndp: 4.94, bq: 0.0, gpc: 0.0, ppc: 0.7, oth: 1.11 },
    "Brampton West": { cpc: 30.04, lpc: 61.68, ndp: 4.55, bq: 0.0, gpc: 0.0, ppc: 0.59, oth: 3.15 },
    "Brantford—Brant South—Six Nations": { cpc: 49.83, lpc: 34.86, ndp: 8.29, bq: 0.0, gpc: 2.26, ppc: 2.38, oth: 2.37 },
    "Bruce—Grey—Owen Sound": { cpc: 56.81, lpc: 29.47, ndp: 5.16, bq: 0.0, gpc: 2.44, ppc: 2.03, oth: 4.09 },
    "Burlington": { cpc: 41.37, lpc: 51.37, ndp: 3.97, bq: 0.0, gpc: 1.52, ppc: 0.97, oth: 0.8 },
    "Burlington North—Milton West": { cpc: 40.49, lpc: 53.58, ndp: 3.49, bq: 0.0, gpc: 1.48, ppc: 0.96, oth: 0.0 },
    "Cambridge": { cpc: 41.47, lpc: 46.97, ndp: 6.82, bq: 0.0, gpc: 2.84, ppc: 1.9, oth: 0.0 },
    "Carleton": { cpc: 57.66, lpc: 35.83, ndp: 4.16, bq: 0.0, gpc: 1.64, ppc: 0.67, oth: 0.04 },
    "Chatham-Kent—Leamington": { cpc: 54.03, lpc: 34.43, ndp: 6.12, bq: 0.0, gpc: 1.33, ppc: 4.1, oth: 0.0 },
    "Davenport": { cpc: 15.17, lpc: 61.65, ndp: 18.19, bq: 0.0, gpc: 2.31, ppc: 1.0, oth: 1.67 },
    "Don Valley North": { cpc: 35.72, lpc: 58.58, ndp: 3.58, bq: 0.0, gpc: 1.37, ppc: 0.71, oth: 0.04 },
    "Don Valley West": { cpc: 32.32, lpc: 62.55, ndp: 3.26, bq: 0.0, gpc: 0.79, ppc: 0.6, oth: 0.47 },
    "Dufferin—Caledon": { cpc: 56.15, lpc: 33.14, ndp: 3.91, bq: 0.0, gpc: 3.56, ppc: 1.78, oth: 1.46 },
    "Eglinton—Lawrence": { cpc: 39.97, lpc: 53.77, ndp: 3.3, bq: 0.0, gpc: 2.27, ppc: 0.7, oth: 0.0 },
    "Elgin—St. Thomas—London South": { cpc: 61.0, lpc: 24.62, ndp: 6.59, bq: 0.0, gpc: 1.89, ppc: 3.3, oth: 2.61 },
    "Essex": { cpc: 56.87, lpc: 21.69, ndp: 14.45, bq: 0.0, gpc: 1.18, ppc: 3.1, oth: 2.71 },
    "Etobicoke Centre": { cpc: 38.56, lpc: 55.06, ndp: 4.0, bq: 0.0, gpc: 0.24, ppc: 1.63, oth: 0.5 },
    "Etobicoke—Lakeshore": { cpc: 36.69, lpc: 53.86, ndp: 5.01, bq: 0.0, gpc: 1.65, ppc: 1.09, oth: 1.71 },
    "Etobicoke North": { cpc: 27.48, lpc: 64.33, ndp: 3.75, bq: 0.0, gpc: 0.0, ppc: 1.03, oth: 3.42 },
    "Flamborough—Glanbrook—Brant North": { cpc: 51.53, lpc: 38.73, ndp: 5.66, bq: 0.0, gpc: 1.98, ppc: 1.68, oth: 0.42 },
    "Guelph": { cpc: 28.74, lpc: 51.28, ndp: 8.88, bq: 0.0, gpc: 6.63, ppc: 1.25, oth: 3.22 },
    "Haldimand—Norfolk": { cpc: 54.46, lpc: 31.98, ndp: 5.02, bq: 0.0, gpc: 0.0, ppc: 2.64, oth: 5.9 },
    "Haliburton—Kawartha Lakes": { cpc: 60.12, lpc: 27.92, ndp: 5.42, bq: 0.0, gpc: 1.96, ppc: 1.73, oth: 2.86 },
    "Hamilton Centre": { cpc: 25.59, lpc: 41.89, ndp: 23.92, bq: 0.0, gpc: 2.84, ppc: 2.22, oth: 3.52 },
    "Hamilton East—Stoney Creek": { cpc: 37.83, lpc: 49.62, ndp: 8.95, bq: 0.0, gpc: 1.61, ppc: 1.99, oth: 0.0 },
    "Hamilton Mountain": { cpc: 33.23, lpc: 46.28, ndp: 13.76, bq: 0.0, gpc: 1.83, ppc: 1.83, oth: 3.07 },
    "Hamilton West—Ancaster—Dundas": { cpc: 34.65, lpc: 53.41, ndp: 7.73, bq: 0.0, gpc: 2.14, ppc: 1.07, oth: 1.0 },
    "Hastings—Lennox and Addington—Tyendinaga": { cpc: 49.4, lpc: 37.78, ndp: 3.93, bq: 0.0, gpc: 1.33, ppc: 1.35, oth: 6.21 },
    "Humber River—Black Creek": { cpc: 19.89, lpc: 70.17, ndp: 6.17, bq: 0.0, gpc: 0.95, ppc: 0.98, oth: 1.84 },
    "Huron—Bruce": { cpc: 58.41, lpc: 30.35, ndp: 5.58, bq: 0.0, gpc: 0.0, ppc: 1.82, oth: 3.83 },
    "Kanata": { cpc: 42.03, lpc: 49.78, ndp: 5.51, bq: 0.0, gpc: 1.99, ppc: 0.69, oth: 0.0 },
    "Kapuskasing—Timmins—Mushkegowuk": { cpc: 37.58, lpc: 39.59, ndp: 17.58, bq: 0.0, gpc: 0.41, ppc: 4.01, oth: 0.84 },
    "Kenora—Kiiwetinoong": { cpc: 57.52, lpc: 26.65, ndp: 12.72, bq: 0.0, gpc: 1.27, ppc: 1.83, oth: 0.0 },
    "Kingston and the Islands": { cpc: 31.61, lpc: 52.98, ndp: 12.19, bq: 0.0, gpc: 2.18, ppc: 0.98, oth: 0.05 },
    "King—Vaughan": { cpc: 48.63, lpc: 47.03, ndp: 2.36, bq: 0.0, gpc: 0.95, ppc: 1.03, oth: 0.0 },
    "Kitchener Centre": { cpc: 33.7, lpc: 23.82, ndp: 7.81, bq: 0.0, gpc: 31.19, ppc: 1.97, oth: 1.52 },
    "Kitchener—Conestoga": { cpc: 44.13, lpc: 45.41, ndp: 4.6, bq: 0.0, gpc: 3.97, ppc: 1.85, oth: 0.05 },
    "Kitchener South—Hespeler": { cpc: 41.93, lpc: 44.68, ndp: 6.31, bq: 0.0, gpc: 2.8, ppc: 1.74, oth: 2.54 },
    "Lanark—Frontenac": { cpc: 58.19, lpc: 30.59, ndp: 5.87, bq: 0.0, gpc: 2.17, ppc: 1.59, oth: 1.59 },
    "Leeds—Grenville—Thousand Islands—Rideau Lakes": { cpc: 59.68, lpc: 30.1, ndp: 5.81, bq: 0.0, gpc: 2.93, ppc: 1.48, oth: 0.0 },
    "London Centre": { cpc: 32.7, lpc: 50.07, ndp: 13.17, bq: 0.0, gpc: 1.79, ppc: 1.48, oth: 0.79 },
    "London—Fanshawe": { cpc: 37.98, lpc: 36.48, ndp: 22.39, bq: 0.0, gpc: 0.0, ppc: 3.14, oth: 0.0 },
    "London West": { cpc: 40.44, lpc: 44.16, ndp: 8.91, bq: 0.0, gpc: 0.0, ppc: 1.29, oth: 5.19 },
    "Markham—Stouffville": { cpc: 37.86, lpc: 56.8, ndp: 3.15, bq: 0.0, gpc: 1.48, ppc: 0.7, oth: 0.0 },
    "Markham—Thornhill": { cpc: 28.33, lpc: 66.83, ndp: 2.95, bq: 0.0, gpc: 1.48, ppc: 0.41, oth: 0.0 },
    "Markham—Unionville": { cpc: 44.54, lpc: 51.19, ndp: 2.26, bq: 0.0, gpc: 2.02, ppc: 0.0, oth: 0.0 },
    "Middlesex—London": { cpc: 55.05, lpc: 33.4, ndp: 7.14, bq: 0.0, gpc: 1.52, ppc: 2.07, oth: 0.82 },
    "Milton East—Halton Hills South": { cpc: 46.12, lpc: 47.17, ndp: 3.52, bq: 0.0, gpc: 2.0, ppc: 1.19, oth: 0.0 },
    "Mississauga Centre": { cpc: 32.2, lpc: 60.8, ndp: 4.15, bq: 0.0, gpc: 1.25, ppc: 1.02, oth: 0.58 },
    "Mississauga East—Cooksville": { cpc: 34.77, lpc: 55.94, ndp: 3.8, bq: 0.0, gpc: 0.24, ppc: 1.55, oth: 3.69 },
    "Mississauga—Erin Mills": { cpc: 37.01, lpc: 57.19, ndp: 3.74, bq: 0.0, gpc: 1.24, ppc: 0.81, oth: 0.0 },
    "Mississauga—Lakeshore": { cpc: 42.66, lpc: 50.33, ndp: 3.55, bq: 0.0, gpc: 1.68, ppc: 1.03, oth: 0.75 },
    "Mississauga—Malton": { cpc: 33.3, lpc: 57.63, ndp: 4.89, bq: 0.0, gpc: 1.39, ppc: 0.07, oth: 2.72 },
    "Mississauga—Streetsville": { cpc: 38.13, lpc: 53.19, ndp: 4.42, bq: 0.0, gpc: 1.63, ppc: 0.91, oth: 1.73 },
    "Nepean": { cpc: 38.4, lpc: 53.23, ndp: 6.14, bq: 0.0, gpc: 1.54, ppc: 0.69, oth: 0.0 },
    "Newmarket—Aurora": { cpc: 42.26, lpc: 49.04, ndp: 4.21, bq: 0.0, gpc: 1.41, ppc: 1.01, oth: 2.07 },
    "New Tecumseth—Gwillimbury": { cpc: 55.31, lpc: 35.53, ndp: 4.98, bq: 0.0, gpc: 0.99, ppc: 1.9, oth: 1.3 },
    "Niagara Falls—Niagara-on-the-Lake": { cpc: 45.7, lpc: 43.47, ndp: 7.17, bq: 0.0, gpc: 1.64, ppc: 2.03, oth: 0.0 },
    "Niagara South": { cpc: 43.11, lpc: 43.0, ndp: 9.67, bq: 0.0, gpc: 1.69, ppc: 2.52, oth: 0.0 },
    "Niagara West": { cpc: 50.22, lpc: 35.82, ndp: 5.24, bq: 0.0, gpc: 2.2, ppc: 1.77, oth: 4.76 },
    "Nipissing—Timiskaming": { cpc: 40.58, lpc: 47.45, ndp: 9.77, bq: 0.0, gpc: 0.0, ppc: 2.21, oth: 0.0 },
    "Northumberland—Clarke": { cpc: 51.18, lpc: 40.03, ndp: 5.34, bq: 0.0, gpc: 2.06, ppc: 1.39, oth: 0.0 },
    "Oakville East": { cpc: 43.28, lpc: 51.3, ndp: 3.39, bq: 0.0, gpc: 1.24, ppc: 0.79, oth: 0.0 },
    "Oakville West": { cpc: 42.12, lpc: 52.58, ndp: 3.14, bq: 0.0, gpc: 1.3, ppc: 0.87, oth: 0.0 },
    "Orléans": { cpc: 32.15, lpc: 59.37, ndp: 5.33, bq: 0.0, gpc: 1.26, ppc: 0.65, oth: 1.25 },
    "Oshawa": { cpc: 52.89, lpc: 31.14, ndp: 12.48, bq: 0.0, gpc: 1.41, ppc: 2.08, oth: 0.0 },
    "Ottawa Centre": { cpc: 20.83, lpc: 58.54, ndp: 13.77, bq: 0.0, gpc: 2.47, ppc: 0.63, oth: 3.77 },
    "Ottawa South": { cpc: 31.38, lpc: 58.15, ndp: 6.94, bq: 0.0, gpc: 1.77, ppc: 0.79, oth: 0.98 },
    "Ottawa—Vanier—Gloucester": { cpc: 24.34, lpc: 58.74, ndp: 9.07, bq: 0.0, gpc: 2.49, ppc: 0.83, oth: 4.54 },
    "Ottawa West—Nepean": { cpc: 32.42, lpc: 53.84, ndp: 7.79, bq: 0.0, gpc: 2.33, ppc: 0.82, oth: 2.8 },
    "Oxford": { cpc: 57.81, lpc: 25.84, ndp: 7.49, bq: 0.0, gpc: 2.3, ppc: 2.87, oth: 3.69 },
    "Parry Sound—Muskoka": { cpc: 57.94, lpc: 26.47, ndp: 6.69, bq: 0.0, gpc: 4.65, ppc: 1.99, oth: 2.26 },
    "Perth—Wellington": { cpc: 59.79, lpc: 30.66, ndp: 6.96, bq: 0.0, gpc: 0.0, ppc: 2.6, oth: 0.0 },
    "Peterborough": { cpc: 46.48, lpc: 41.77, ndp: 7.48, bq: 0.0, gpc: 1.82, ppc: 1.12, oth: 1.32 },
    "Pickering—Brooklin": { cpc: 38.75, lpc: 55.09, ndp: 5.01, bq: 0.0, gpc: 0.2, ppc: 0.95, oth: 0.0 },
    "Prescott—Russell—Cumberland": { cpc: 35.64, lpc: 52.52, ndp: 3.9, bq: 0.0, gpc: 1.54, ppc: 1.55, oth: 4.85 },
    "Richmond Hill South": { cpc: 39.78, lpc: 49.66, ndp: 2.95, bq: 0.0, gpc: 0.0, ppc: 0.66, oth: 6.94 },
    "Sarnia—Lambton—Bkejwanong": { cpc: 58.93, lpc: 24.84, ndp: 8.75, bq: 0.0, gpc: 1.3, ppc: 3.05, oth: 3.13 },
    "Sault Ste. Marie—Algoma": { cpc: 44.77, lpc: 41.17, ndp: 10.71, bq: 0.0, gpc: 0.55, ppc: 1.44, oth: 1.35 },
    "Scarborough—Agincourt": { cpc: 32.0, lpc: 62.39, ndp: 3.64, bq: 0.0, gpc: 1.3, ppc: 0.67, oth: 0.0 },
    "Scarborough Centre—Don Valley East": { cpc: 28.41, lpc: 63.91, ndp: 5.07, bq: 0.0, gpc: 0.0, ppc: 1.05, oth: 1.57 },
    "Scarborough—Guildwood—Rouge Park": { cpc: 24.48, lpc: 68.76, ndp: 4.88, bq: 0.0, gpc: 0.0, ppc: 0.73, oth: 1.15 },
    "Scarborough North": { cpc: 19.3, lpc: 72.27, ndp: 4.07, bq: 0.0, gpc: 0.0, ppc: 0.57, oth: 3.79 },
    "Scarborough Southwest": { cpc: 23.42, lpc: 66.66, ndp: 5.98, bq: 0.0, gpc: 1.77, ppc: 0.72, oth: 1.45 },
    "Scarborough—Woburn": { cpc: 24.55, lpc: 66.52, ndp: 4.71, bq: 0.0, gpc: 0.0, ppc: 0.73, oth: 3.49 },
    "Simcoe—Grey": { cpc: 55.14, lpc: 32.79, ndp: 5.04, bq: 0.0, gpc: 3.33, ppc: 1.76, oth: 1.94 },
    "Simcoe North": { cpc: 50.39, lpc: 37.26, ndp: 6.27, bq: 0.0, gpc: 2.51, ppc: 2.0, oth: 1.57 },
    "Spadina—Harbourfront": { cpc: 29.18, lpc: 51.99, ndp: 14.96, bq: 0.0, gpc: 2.98, ppc: 0.89, oth: 0.0 },
    "St. Catharines": { cpc: 40.26, lpc: 47.63, ndp: 8.72, bq: 0.0, gpc: 1.6, ppc: 1.79, oth: 0.0 },
    "Stormont—Dundas—Glengarry": { cpc: 62.81, lpc: 28.89, ndp: 4.15, bq: 0.0, gpc: 1.84, ppc: 1.94, oth: 0.37 },
    "Sudbury": { cpc: 36.5, lpc: 46.43, ndp: 12.47, bq: 0.0, gpc: 1.79, ppc: 1.76, oth: 1.04 },
    "Sudbury East—Manitoulin—Nickel Belt": { cpc: 36.9, lpc: 44.35, ndp: 13.68, bq: 0.0, gpc: 1.64, ppc: 2.67, oth: 0.76 },
    "Taiaiako’n—Parkdale—High Park": { cpc: 18.32, lpc: 59.45, ndp: 17.34, bq: 0.0, gpc: 1.79, ppc: 0.96, oth: 2.13 },
    "Thornhill": { cpc: 56.04, lpc: 39.52, ndp: 2.13, bq: 0.0, gpc: 1.23, ppc: 1.09, oth: 0.0 },
    "Thunder Bay—Rainy River": { cpc: 38.68, lpc: 45.75, ndp: 12.36, bq: 0.0, gpc: 1.3, ppc: 1.9, oth: 0.0 },
    "Thunder Bay—Superior North": { cpc: 30.92, lpc: 52.74, ndp: 11.76, bq: 0.0, gpc: 1.58, ppc: 1.66, oth: 1.34 },
    "Toronto Centre": { cpc: 16.08, lpc: 62.71, ndp: 10.74, bq: 0.0, gpc: 6.91, ppc: 0.64, oth: 2.93 },
    "Toronto—Danforth": { cpc: 16.03, lpc: 62.41, ndp: 14.13, bq: 0.0, gpc: 1.73, ppc: 0.69, oth: 5.03 },
    "Toronto—St. Paul's": { cpc: 30.72, lpc: 58.01, ndp: 6.06, bq: 0.0, gpc: 4.44, ppc: 0.63, oth: 0.14 },
    "University—Rosedale": { cpc: 22.51, lpc: 59.0, ndp: 11.59, bq: 0.0, gpc: 3.84, ppc: 0.71, oth: 2.35 },
    "Vaughan—Woodbridge": { cpc: 43.63, lpc: 50.57, ndp: 2.47, bq: 0.0, gpc: 0.72, ppc: 1.28, oth: 1.34 },
    "Waterloo": { cpc: 33.04, lpc: 55.37, ndp: 7.57, bq: 0.0, gpc: 2.83, ppc: 1.2, oth: 0.0 },
    "Wellington—Halton Hills North": { cpc: 54.16, lpc: 35.43, ndp: 4.55, bq: 0.0, gpc: 3.75, ppc: 1.57, oth: 0.55 },
    "Whitby": { cpc: 39.68, lpc: 52.48, ndp: 5.45, bq: 0.0, gpc: 1.28, ppc: 1.11, oth: 0.0 },
    "Willowdale": { cpc: 37.22, lpc: 56.92, ndp: 3.72, bq: 0.0, gpc: 1.5, ppc: 0.65, oth: 0.0 },
    "Windsor—Tecumseh—Lakeshore": { cpc: 37.31, lpc: 43.09, ndp: 13.75, bq: 0.0, gpc: 1.15, ppc: 3.11, oth: 1.6 },
    "Windsor West": { cpc: 29.73, lpc: 43.19, ndp: 22.37, bq: 0.0, gpc: 0.0, ppc: 2.8, oth: 1.9 },
    "York Centre": { cpc: 42.03, lpc: 53.12, ndp: 3.72, bq: 0.0, gpc: 0.0, ppc: 1.14, oth: 0.0 },
    "York—Durham": { cpc: 59.13, lpc: 32.94, ndp: 4.72, bq: 0.0, gpc: 0.44, ppc: 1.59, oth: 1.18 },
    "York South—Weston—Etobicoke": { cpc: 26.11, lpc: 65.3, ndp: 5.76, bq: 0.0, gpc: 1.53, ppc: 1.25, oth: 0.05 },
    "Brandon—Souris": { cpc: 63.99, lpc: 23.63, ndp: 10.55, bq: 0.0, gpc: 0.02, ppc: 1.72, oth: 0.09 },
    "Churchill—Keewatinook Aski": { cpc: 25.47, lpc: 48.71, ndp: 21.54, bq: 0.0, gpc: 3.26, ppc: 1.02, oth: 0.0 },
    "Elmwood—Transcona": { cpc: 34.63, lpc: 33.27, ndp: 28.72, bq: 0.0, gpc: 1.95, ppc: 1.4, oth: 0.02 },
    "Kildonan—St. Paul": { cpc: 39.77, lpc: 48.02, ndp: 10.71, bq: 0.0, gpc: 0.29, ppc: 0.98, oth: 0.23 },
    "Portage—Lisgar": { cpc: 60.55, lpc: 23.38, ndp: 7.49, bq: 0.0, gpc: 0.0, ppc: 4.92, oth: 3.67 },
    "Provencher": { cpc: 50.21, lpc: 31.49, ndp: 6.09, bq: 0.0, gpc: 2.68, ppc: 3.51, oth: 6.01 },
    "Riding Mountain": { cpc: 61.97, lpc: 24.5, ndp: 7.3, bq: 0.0, gpc: 2.23, ppc: 2.14, oth: 1.87 },
    "St. Boniface—St. Vital": { cpc: 22.98, lpc: 65.51, ndp: 8.26, bq: 0.0, gpc: 1.23, ppc: 0.68, oth: 1.34 },
    "Selkirk—Interlake—Eastman": { cpc: 60.08, lpc: 25.65, ndp: 9.84, bq: 0.0, gpc: 2.86, ppc: 1.56, oth: 0.0 },
    "Winnipeg Centre": { cpc: 13.22, lpc: 54.89, ndp: 24.61, bq: 0.0, gpc: 2.48, ppc: 0.86, oth: 3.94 },
    "Winnipeg North": { cpc: 10.61, lpc: 76.86, ndp: 10.48, bq: 0.0, gpc: 0.97, ppc: 0.62, oth: 0.46 },
    "Winnipeg South": { cpc: 25.12, lpc: 67.94, ndp: 5.29, bq: 0.0, gpc: 1.15, ppc: 0.5, oth: 0.0 },
    "Winnipeg South Centre": { cpc: 22.43, lpc: 66.35, ndp: 7.92, bq: 0.0, gpc: 2.14, ppc: 0.43, oth: 0.74 },
    "Winnipeg West": { cpc: 32.98, lpc: 58.9, ndp: 5.85, bq: 0.0, gpc: 1.7, ppc: 0.54, oth: 0.03 },
    "Battlefords—Lloydminster—Meadow Lake": { cpc: 67.04, lpc: 13.41, ndp: 6.18, bq: 0.0, gpc: 0.78, ppc: 1.15, oth: 11.43 },
    "Carlton Trail—Eagle Creek": { cpc: 73.83, lpc: 10.92, ndp: 7.32, bq: 0.0, gpc: 1.02, ppc: 1.95, oth: 4.96 },
    "Desnethé—Missinippi—Churchill River": { cpc: 18.77, lpc: 67.8, ndp: 9.19, bq: 0.0, gpc: 0.94, ppc: 0.48, oth: 2.83 },
    "Moose Jaw—Lake Centre—Lanigan": { cpc: 69.48, lpc: 12.62, ndp: 10.36, bq: 0.0, gpc: 1.19, ppc: 2.49, oth: 3.86 },
    "Prince Albert": { cpc: 65.65, lpc: 22.21, ndp: 7.39, bq: 0.0, gpc: 1.13, ppc: 1.36, oth: 2.26 },
    "Regina—Lewvan": { cpc: 50.69, lpc: 28.83, ndp: 18.36, bq: 0.0, gpc: 1.38, ppc: 0.74, oth: 0.0 },
    "Regina—Qu'Appelle": { cpc: 64.94, lpc: 20.25, ndp: 11.73, bq: 0.0, gpc: 2.05, ppc: 1.03, oth: 0.0 },
    "Regina—Wascana": { cpc: 45.24, lpc: 44.81, ndp: 7.87, bq: 0.0, gpc: 1.47, ppc: 0.62, oth: 0.0 },
    "Saskatoon South": { cpc: 53.25, lpc: 28.55, ndp: 15.9, bq: 0.0, gpc: 1.35, ppc: 0.95, oth: 0.0 },
    "Saskatoon—University": { cpc: 54.47, lpc: 22.66, ndp: 19.32, bq: 0.0, gpc: 1.08, ppc: 0.92, oth: 1.55 },
    "Saskatoon West": { cpc: 55.64, lpc: 18.47, ndp: 23.15, bq: 0.0, gpc: 1.3, ppc: 1.45, oth: 0.0 },
    "Souris—Moose Mountain": { cpc: 80.5, lpc: 8.17, ndp: 4.09, bq: 0.0, gpc: 0.06, ppc: 1.88, oth: 5.3 },
    "Swift Current—Grasslands—Kindersley": { cpc: 74.91, lpc: 7.82, ndp: 5.1, bq: 0.0, gpc: 0.88, ppc: 1.52, oth: 9.78 },
    "Yorkton—Melville": { cpc: 73.65, lpc: 12.41, ndp: 6.23, bq: 0.0, gpc: 1.87, ppc: 1.91, oth: 3.93 },
    "Airdrie—Cochrane": { cpc: 67.28, lpc: 16.46, ndp: 7.1, bq: 0.0, gpc: 2.85, ppc: 1.14, oth: 5.17 },
    "Battle River—Crowfoot": { cpc: 80.83, lpc: 6.95, ndp: 4.65, bq: 0.0, gpc: 2.09, ppc: 1.3, oth: 4.18 },
    "Bow River": { cpc: 78.26, lpc: 12.76, ndp: 4.46, bq: 0.0, gpc: 0.0, ppc: 1.36, oth: 3.15 },
    "Calgary Centre": { cpc: 48.35, lpc: 41.17, ndp: 6.6, bq: 0.0, gpc: 3.11, ppc: 0.0, oth: 0.77 },
    "Calgary Confederation": { cpc: 44.91, lpc: 39.53, ndp: 7.37, bq: 0.0, gpc: 7.31, ppc: 0.56, oth: 0.31 },
    "Calgary Crowfoot": { cpc: 56.19, lpc: 32.0, ndp: 7.01, bq: 0.0, gpc: 3.47, ppc: 0.58, oth: 0.75 },
    "Calgary East": { cpc: 56.57, lpc: 28.61, ndp: 8.19, bq: 0.0, gpc: 4.58, ppc: 0.94, oth: 1.1 },
    "Calgary Heritage": { cpc: 62.12, lpc: 24.87, ndp: 7.79, bq: 0.0, gpc: 3.07, ppc: 0.67, oth: 1.48 },
    "Calgary McKnight": { cpc: 31.81, lpc: 58.66, ndp: 6.37, bq: 0.0, gpc: 2.13, ppc: 0.45, oth: 0.59 },
    "Calgary Midnapore": { cpc: 66.49, lpc: 19.82, ndp: 8.66, bq: 0.0, gpc: 3.0, ppc: 0.83, oth: 1.19 },
    "Calgary Nose Hill": { cpc: 57.35, lpc: 30.25, ndp: 7.43, bq: 0.0, gpc: 3.39, ppc: 0.61, oth: 0.98 },
    "Calgary Shepard": { cpc: 65.54, lpc: 21.5, ndp: 7.27, bq: 0.0, gpc: 3.68, ppc: 0.76, oth: 1.27 },
    "Calgary Signal Hill": { cpc: 60.75, lpc: 28.39, ndp: 6.08, bq: 0.0, gpc: 3.49, ppc: 0.51, oth: 0.78 },
    "Calgary Skyview": { cpc: 43.81, lpc: 46.55, ndp: 6.82, bq: 0.0, gpc: 1.79, ppc: 0.45, oth: 0.58 },
    "Edmonton Centre": { cpc: 35.44, lpc: 48.93, ndp: 14.0, bq: 0.0, gpc: 0.24, ppc: 0.65, oth: 0.74 },
    "Edmonton Gateway": { cpc: 46.94, lpc: 39.91, ndp: 11.67, bq: 0.0, gpc: 0.47, ppc: 0.76, oth: 0.25 },
    "Edmonton Griesbach": { cpc: 45.85, lpc: 27.62, ndp: 21.58, bq: 0.0, gpc: 2.89, ppc: 0.92, oth: 1.14 },
    "Edmonton Manning": { cpc: 48.36, lpc: 34.9, ndp: 15.45, bq: 0.0, gpc: 0.0, ppc: 1.01, oth: 0.28 },
    "Edmonton Northwest": { cpc: 48.57, lpc: 37.18, ndp: 13.18, bq: 0.0, gpc: 0.07, ppc: 0.87, oth: 0.12 },
    "Edmonton Riverbend": { cpc: 48.04, lpc: 38.01, ndp: 10.94, bq: 0.0, gpc: 2.45, ppc: 0.52, oth: 0.04 },
    "Edmonton Southeast": { cpc: 38.81, lpc: 50.49, ndp: 9.73, bq: 0.0, gpc: 0.0, ppc: 0.72, oth: 0.25 },
    "Edmonton Strathcona": { cpc: 39.48, lpc: 19.19, ndp: 36.19, bq: 0.0, gpc: 3.72, ppc: 0.82, oth: 0.59 },
    "Edmonton West": { cpc: 49.47, lpc: 38.23, ndp: 11.26, bq: 0.0, gpc: 0.11, ppc: 0.68, oth: 0.25 },
    "Foothills": { cpc: 76.0, lpc: 11.11, ndp: 5.36, bq: 0.0, gpc: 2.97, ppc: 1.12, oth: 3.43 },
    "Fort McMurray—Cold Lake": { cpc: 78.01, lpc: 11.73, ndp: 4.93, bq: 0.0, gpc: 2.27, ppc: 1.8, oth: 1.26 },
    "Grande Prairie": { cpc: 80.85, lpc: 7.13, ndp: 5.88, bq: 0.0, gpc: 0.0, ppc: 1.47, oth: 4.67 },
    "Lakeland": { cpc: 79.95, lpc: 8.24, ndp: 5.12, bq: 0.0, gpc: 2.06, ppc: 1.57, oth: 3.06 },
    "Leduc—Wetaskiwin": { cpc: 76.28, lpc: 12.32, ndp: 8.97, bq: 0.0, gpc: 0.05, ppc: 1.66, oth: 0.72 },
    "Lethbridge": { cpc: 62.53, lpc: 24.54, ndp: 9.19, bq: 0.0, gpc: 0.0, ppc: 0.96, oth: 2.78 },
    "Medicine Hat—Cardston—Warner": { cpc: 74.83, lpc: 11.59, ndp: 6.69, bq: 0.0, gpc: 3.17, ppc: 1.3, oth: 2.42 },
    "Parkland": { cpc: 76.04, lpc: 10.85, ndp: 8.31, bq: 0.0, gpc: 0.0, ppc: 1.67, oth: 3.13 },
    "Peace River—Westlock": { cpc: 74.83, lpc: 9.45, ndp: 6.65, bq: 0.0, gpc: 1.82, ppc: 1.84, oth: 5.41 },
    "Ponoka—Didsbury": { cpc: 81.28, lpc: 8.03, ndp: 5.55, bq: 0.0, gpc: 0.0, ppc: 1.97, oth: 3.16 },
    "Red Deer": { cpc: 72.67, lpc: 14.14, ndp: 8.83, bq: 0.0, gpc: 0.0, ppc: 1.67, oth: 2.69 },
    "Sherwood Park—Fort Saskatchewan": { cpc: 65.33, lpc: 20.02, ndp: 9.92, bq: 0.0, gpc: 2.26, ppc: 0.98, oth: 1.49 },
    "St. Albert—Sturgeon River": { cpc: 66.37, lpc: 19.45, ndp: 11.82, bq: 0.0, gpc: 0.0, ppc: 1.14, oth: 1.22 },
    "Yellowhead": { cpc: 67.88, lpc: 17.25, ndp: 7.0, bq: 0.0, gpc: 2.84, ppc: 1.28, oth: 3.74 },
    "Abbotsford—South Langley": { cpc: 53.26, lpc: 35.24, ndp: 7.62, bq: 0.0, gpc: 1.77, ppc: 2.11, oth: 0.0 },
    "Burnaby Central": { cpc: 29.07, lpc: 47.49, ndp: 18.69, bq: 0.0, gpc: 1.84, ppc: 1.14, oth: 1.76 },
    "Burnaby North—Seymour": { cpc: 30.98, lpc: 55.24, ndp: 11.08, bq: 0.0, gpc: 1.9, ppc: 0.8, oth: 0.0 },
    "Cariboo—Prince George": { cpc: 62.18, lpc: 22.89, ndp: 8.88, bq: 0.0, gpc: 2.04, ppc: 2.58, oth: 1.44 },
    "Chilliwack—Hope": { cpc: 58.5, lpc: 25.23, ndp: 12.03, bq: 0.0, gpc: 1.72, ppc: 2.52, oth: 0.0 },
    "Cloverdale—Langley City": { cpc: 40.22, lpc: 50.44, ndp: 7.96, bq: 0.0, gpc: 0.0, ppc: 1.39, oth: 0.0 },
    "Columbia—Kootenay—Southern Rockies": { cpc: 61.69, lpc: 14.65, ndp: 18.55, bq: 0.0, gpc: 2.52, ppc: 2.59, oth: 0.0 },
    "Coquitlam—Port Coquitlam": { cpc: 35.42, lpc: 51.64, ndp: 11.62, bq: 0.0, gpc: 0.0, ppc: 1.33, oth: 0.0 },
    "Courtenay—Alberni": { cpc: 46.37, lpc: 23.35, ndp: 22.74, bq: 0.0, gpc: 5.02, ppc: 1.91, oth: 0.61 },
    "Cowichan—Malahat—Langford": { cpc: 42.16, lpc: 28.21, ndp: 22.78, bq: 0.0, gpc: 4.45, ppc: 2.41, oth: 0.0 },
    "Delta": { cpc: 36.03, lpc: 52.93, ndp: 7.1, bq: 0.0, gpc: 1.15, ppc: 0.69, oth: 2.1 },
    "Esquimalt—Saanich—Sooke": { cpc: 30.72, lpc: 37.14, ndp: 22.68, bq: 0.0, gpc: 6.27, ppc: 1.76, oth: 1.44 },
    "Fleetwood—Port Kells": { cpc: 31.11, lpc: 58.03, ndp: 7.94, bq: 0.0, gpc: 1.01, ppc: 0.82, oth: 1.1 },
    "Kamloops—Shuswap—Central Rockies": { cpc: 57.69, lpc: 24.65, ndp: 11.49, bq: 0.0, gpc: 3.14, ppc: 2.7, oth: 0.33 },
    "Kamloops—Thompson—Nicola": { cpc: 55.13, lpc: 25.97, ndp: 12.96, bq: 0.0, gpc: 2.29, ppc: 1.95, oth: 1.69 },
    "Kelowna": { cpc: 50.6, lpc: 36.35, ndp: 9.06, bq: 0.0, gpc: 1.74, ppc: 2.25, oth: 0.0 },
    "Langley Township—Fraser Heights": { cpc: 50.12, lpc: 39.1, ndp: 7.98, bq: 0.0, gpc: 1.33, ppc: 1.33, oth: 0.15 },
    "Mission—Matsqui—Abbotsford": { cpc: 55.31, lpc: 32.92, ndp: 7.56, bq: 0.0, gpc: 2.1, ppc: 2.11, oth: 0.0 },
    "Nanaimo—Ladysmith": { cpc: 40.22, lpc: 23.1, ndp: 15.91, bq: 0.0, gpc: 18.81, ppc: 1.96, oth: 0.0 },
    "New Westminster—Burnaby—Maillardville": { cpc: 30.82, lpc: 39.79, ndp: 25.19, bq: 0.0, gpc: 2.68, ppc: 1.41, oth: 0.11 },
    "North Island—Powell River": { cpc: 50.79, lpc: 21.62, ndp: 19.82, bq: 0.0, gpc: 3.95, ppc: 1.65, oth: 2.17 },
    "North Vancouver—Capilano": { cpc: 32.37, lpc: 57.04, ndp: 7.52, bq: 0.0, gpc: 2.26, ppc: 0.73, oth: 0.09 },
    "Okanagan Lake West—South Kelowna": { cpc: 56.83, lpc: 31.61, ndp: 7.95, bq: 0.0, gpc: 1.55, ppc: 2.06, oth: 0.0 },
    "Pitt Meadows—Maple Ridge": { cpc: 45.7, lpc: 35.14, ndp: 13.79, bq: 0.0, gpc: 0.17, ppc: 1.76, oth: 3.45 },
    "Port Moody—Coquitlam": { cpc: 39.94, lpc: 42.67, ndp: 15.68, bq: 0.0, gpc: 0.0, ppc: 1.07, oth: 0.64 },
    "Prince George—Peace River—Northern Rockies": { cpc: 67.69, lpc: 12.22, ndp: 5.87, bq: 0.0, gpc: 1.91, ppc: 3.06, oth: 9.25 },
    "Richmond Centre—Marpole": { cpc: 39.58, lpc: 49.89, ndp: 8.15, bq: 0.0, gpc: 1.68, ppc: 0.71, oth: 0.0 },
    "Richmond East—Steveston": { cpc: 37.26, lpc: 53.22, ndp: 7.61, bq: 0.0, gpc: 1.23, ppc: 0.67, oth: 0.0 },
    "Saanich—Gulf Islands": { cpc: 32.37, lpc: 31.13, ndp: 10.0, bq: 0.0, gpc: 24.58, ppc: 1.11, oth: 0.81 },
    "Similkameen—South Okanagan—West Kootenay": { cpc: 53.49, lpc: 21.82, ndp: 19.87, bq: 0.0, gpc: 2.29, ppc: 2.53, oth: 0.0 },
    "Skeena—Bulkley Valley": { cpc: 51.98, lpc: 12.78, ndp: 21.93, bq: 0.0, gpc: 2.6, ppc: 2.87, oth: 7.84 },
    "South Surrey—White Rock": { cpc: 45.25, lpc: 48.04, ndp: 5.65, bq: 0.0, gpc: 0.0, ppc: 1.06, oth: 0.0 },
    "Surrey Centre": { cpc: 23.74, lpc: 59.4, ndp: 11.34, bq: 0.0, gpc: 1.22, ppc: 1.14, oth: 3.16 },
    "Surrey Newton": { cpc: 16.45, lpc: 68.12, ndp: 10.09, bq: 0.0, gpc: 0.0, ppc: 0.73, oth: 4.61 },
    "Vancouver Centre": { cpc: 26.53, lpc: 57.06, ndp: 13.16, bq: 0.0, gpc: 2.22, ppc: 1.03, oth: 0.0 },
    "Vancouver East": { cpc: 16.83, lpc: 35.38, ndp: 31.23, bq: 0.0, gpc: 5.73, ppc: 1.11, oth: 9.72 },
    "Vancouver Fraserview—South Burnaby": { cpc: 25.71, lpc: 57.6, ndp: 13.09, bq: 0.0, gpc: 0.57, ppc: 0.91, oth: 2.13 },
    "Vancouver Granville": { cpc: 30.17, lpc: 52.76, ndp: 14.42, bq: 0.0, gpc: 1.61, ppc: 0.75, oth: 0.28 },
    "Vancouver Kingsway": { cpc: 20.3, lpc: 48.25, ndp: 25.91, bq: 0.0, gpc: 2.51, ppc: 0.82, oth: 2.22 },
    "Vancouver Quadra": { cpc: 32.53, lpc: 55.96, ndp: 7.73, bq: 0.0, gpc: 3.19, ppc: 0.58, oth: 0.0 },
    "Vernon—Lake Country—Monashee": { cpc: 55.16, lpc: 28.83, ndp: 9.79, bq: 0.0, gpc: 3.14, ppc: 3.09, oth: 0.0 },
    "Victoria": { cpc: 19.77, lpc: 45.52, ndp: 22.66, bq: 0.0, gpc: 7.77, ppc: 1.15, oth: 3.12 },
    "West Vancouver—Sunshine Coast—Sea to Sky Country": { cpc: 35.45, lpc: 46.56, ndp: 11.71, bq: 0.0, gpc: 3.98, ppc: 1.18, oth: 1.13 },
    "Yukon": { cpc: 38.02, lpc: 33.44, ndp: 13.33, bq: 0.0, gpc: 3.43, ppc: 0.0, oth: 11.78 },
    "Northwest Territories": { cpc: 22.86, lpc: 42.01, ndp: 21.06, bq: 0.0, gpc: 2.0, ppc: 0.0, oth: 12.07 },
    "Nunavut": { cpc: 27.05, lpc: 40.81, ndp: 32.14, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 }
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
