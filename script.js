// Electoral data from the CSV

const electoralData = {
    "Avalon": { cpc: 39.01, lpc: 52.95, ndp: 6.04, bq: 0.0, gpc: 0.0, ppc: 2.0, oth: 0.0 },
    "Cape Spear": { cpc: 25.93, lpc: 61.41, ndp: 10.56, bq: 0.0, gpc: 0.0, ppc: 2.1, oth: 0.0 },
    "Central Newfoundland": { cpc: 52.1, lpc: 45.07, ndp: 2.83, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Labrador": { cpc: 38.19, lpc: 47.34, ndp: 10.75, bq: 0.0, gpc: 0.0, ppc: 3.72, oth: 0.0 },
    "Long Range Mountains": { cpc: 45.33, lpc: 45.09, ndp: 4.93, bq: 0.0, gpc: 0.0, ppc: 4.65, oth: 0.0 },
    "St. John's East": { cpc: 25.06, lpc: 55.13, ndp: 17.32, bq: 0.0, gpc: 0.0, ppc: 2.49, oth: 0.0 },
    "Terra Nova—The Peninsulas": { cpc: 45.55, lpc: 46.93, ndp: 3.36, bq: 0.0, gpc: 0.0, ppc: 4.15, oth: 0.0 },
    "Cardigan": { cpc: 35.63, lpc: 51.39, ndp: 4.04, bq: 0.0, gpc: 4.77, ppc: 3.52, oth: 0.65 },
    "Charlottetown": { cpc: 36.06, lpc: 47.81, ndp: 4.47, bq: 0.0, gpc: 9.57, ppc: 2.09, oth: 0.0 },
    "Egmont": { cpc: 35.52, lpc: 46.37, ndp: 3.55, bq: 0.0, gpc: 9.27, ppc: 5.29, oth: 0.0 },
    "Malpeque": { cpc: 37.76, lpc: 42.24, ndp: 3.28, bq: 0.0, gpc: 13.75, ppc: 2.96, oth: 0.01 },
    "Acadie—Annapolis": { cpc: 58.39, lpc: 30.8, ndp: 5.18, bq: 0.0, gpc: 0.0, ppc: 5.62, oth: 0.0 },
    "Cape Breton—Canso—Antigonish": { cpc: 41.4, lpc: 47.24, ndp: 6.24, bq: 0.0, gpc: 0.49, ppc: 4.34, oth: 0.28 },
    "Central Nova": { cpc: 39.22, lpc: 46.65, ndp: 6.92, bq: 0.0, gpc: 1.56, ppc: 4.44, oth: 1.22 },
    "Cumberland—Colchester": { cpc: 52.72, lpc: 34.54, ndp: 5.07, bq: 0.0, gpc: 2.55, ppc: 4.45, oth: 0.67 },
    "Dartmouth—Cole Harbour": { cpc: 4.01, lpc: 63.34, ndp: 16.51, bq: 0.0, gpc: 3.49, ppc: 12.65, oth: 0.0 },
    "Halifax": { cpc: 18.57, lpc: 54.23, ndp: 21.06, bq: 0.0, gpc: 2.77, ppc: 2.86, oth: 0.5 },
    "Halifax West": { cpc: 27.92, lpc: 54.33, ndp: 12.09, bq: 0.0, gpc: 2.73, ppc: 2.77, oth: 0.16 },
    "Kings—Hants": { cpc: 36.86, lpc: 47.71, ndp: 8.26, bq: 0.0, gpc: 2.02, ppc: 5.14, oth: 0.0 },
    "Sackville—Bedford—Preston": { cpc: 31.91, lpc: 50.28, ndp: 11.36, bq: 0.0, gpc: 2.25, ppc: 4.14, oth: 0.06 },
    "South Shore—St. Margarets": { cpc: 51.83, lpc: 37.46, ndp: 7.8, bq: 0.0, gpc: 2.91, ppc: 0.0, oth: 0.0 },
    "Sydney—Glace Bay": { cpc: 41.67, lpc: 45.08, ndp: 8.65, bq: 0.0, gpc: 0.67, ppc: 3.71, oth: 0.23 },
    "Acadie—Bathurst": { cpc: 16.46, lpc: 68.09, ndp: 4.8, bq: 0.0, gpc: 2.89, ppc: 6.49, oth: 1.27 },
    "Beauséjour": { cpc: 22.86, lpc: 57.63, ndp: 4.64, bq: 0.0, gpc: 5.76, ppc: 8.31, oth: 0.8 },
    "Fredericton—Oromocto": { cpc: 40.52, lpc: 39.12, ndp: 5.48, bq: 0.0, gpc: 13.01, ppc: 0.37, oth: 1.49 },
    "Fundy Royal": { cpc: 53.62, lpc: 26.12, ndp: 6.03, bq: 0.0, gpc: 4.98, ppc: 9.25, oth: 0.0 },
    "Madawaska—Restigouche": { cpc: 31.39, lpc: 51.82, ndp: 2.5, bq: 0.0, gpc: 2.64, ppc: 7.93, oth: 3.72 },
    "Miramichi—Grand Lake": { cpc: 50.6, lpc: 36.32, ndp: 2.95, bq: 0.0, gpc: 4.48, ppc: 5.57, oth: 0.08 },
    "Moncton—Dieppe": { cpc: 27.46, lpc: 53.62, ndp: 7.33, bq: 0.0, gpc: 4.45, ppc: 7.13, oth: 0.0 },
    "Saint John—Kennebecasis": { cpc: 42.43, lpc: 43.79, ndp: 5.52, bq: 0.0, gpc: 2.93, ppc: 5.33, oth: 0.0 },
    "Saint John—St. Croix": { cpc: 53.92, lpc: 28.39, ndp: 5.39, bq: 0.0, gpc: 3.99, ppc: 8.16, oth: 0.15 },
    "Tobique—Mactaquac": { cpc: 59.61, lpc: 22.54, ndp: 4.67, bq: 0.0, gpc: 4.76, ppc: 7.59, oth: 0.83 },
    "Abitibi—Baie-James—Nunavik—Eeyou": { cpc: 23.28, lpc: 34.2, ndp: 5.71, bq: 29.6, gpc: 2.58, ppc: 2.73, oth: 1.9 },
    "Abitibi—Témiscamingue": { cpc: 17.51, lpc: 32.4, ndp: 3.05, bq: 40.29, gpc: 2.78, ppc: 2.49, oth: 1.48 },
    "Ahuntsic-Cartierville": { cpc: 10.85, lpc: 61.83, ndp: 5.18, bq: 15.97, gpc: 4.48, ppc: 1.7, oth: 0.0 },
    "Alfred-Pellan": { cpc: 17.5, lpc: 56.39, ndp: 3.43, bq: 18.62, gpc: 2.48, ppc: 0.22, oth: 1.37 },
    "Argenteuil—La Petite-Nation": { cpc: 18.68, lpc: 48.65, ndp: 3.29, bq: 24.15, gpc: 0.59, ppc: 3.95, oth: 0.7 },
    "Beauce": { cpc: 60.96, lpc: 13.95, ndp: 1.22, bq: 10.18, gpc: 1.22, ppc: 11.33, oth: 1.15 },
    "Beauharnois—Salaberry—Soulanges—Huntingdon": { cpc: 17.69, lpc: 36.55, ndp: 3.69, bq: 38.34, gpc: 0.33, ppc: 2.44, oth: 0.96 },
    "Beauport—Limoilou": { cpc: 40.45, lpc: 29.26, ndp: 4.28, bq: 21.86, gpc: 3.04, ppc: 0.22, oth: 0.89 },
    "Bécancour—Nicolet—Saurel—Alnôbak": { cpc: 25.2, lpc: 22.72, ndp: 2.54, bq: 43.67, gpc: 2.61, ppc: 1.8, oth: 1.45 },
    "Bellechasse—Les Etchemins—Lévis": { cpc: 62.94, lpc: 16.87, ndp: 1.98, bq: 14.64, gpc: 1.96, ppc: 0.0, oth: 1.61 },
    "Beloeil—Chambly": { cpc: 12.96, lpc: 32.45, ndp: 4.37, bq: 43.91, gpc: 3.47, ppc: 1.54, oth: 1.3 },
    "Berthier—Maskinongé": { cpc: 18.93, lpc: 23.95, ndp: 18.85, bq: 33.11, gpc: 1.89, ppc: 2.26, oth: 1.0 },
    "Bourassa": { cpc: 9.0, lpc: 69.6, ndp: 3.42, bq: 12.77, gpc: 2.67, ppc: 2.32, oth: 0.21 },
    "Brome—Missisquoi": { cpc: 22.13, lpc: 42.79, ndp: 2.83, bq: 25.12, gpc: 3.67, ppc: 2.17, oth: 1.29 },
    "Brossard—Saint-Lambert": { cpc: 15.73, lpc: 63.65, ndp: 4.54, bq: 13.9, gpc: 0.0, ppc: 1.6, oth: 0.58 },
    "Charlesbourg—Haute-Saint-Charles": { cpc: 55.56, lpc: 21.75, ndp: 2.43, bq: 16.15, gpc: 2.33, ppc: 1.34, oth: 0.44 },
    "Châteauguay—Les Jardins-de-Napierville": { cpc: 17.11, lpc: 46.02, ndp: 3.65, bq: 27.33, gpc: 2.35, ppc: 2.62, oth: 0.93 },
    "Chicoutimi—Le Fjord": { cpc: 51.49, lpc: 20.83, ndp: 1.99, bq: 23.08, gpc: 1.69, ppc: 0.86, oth: 0.05 },
    "Compton—Stanstead": { cpc: 23.35, lpc: 44.1, ndp: 3.36, bq: 21.74, gpc: 4.25, ppc: 2.49, oth: 0.7 },
    "Côte-du-Sud—Rivière-du-Loup—Kataskomiq—Témiscouata": { cpc: 56.03, lpc: 21.32, ndp: 1.4, bq: 19.77, gpc: 0.0, ppc: 0.22, oth: 1.26 },
    "Côte-Nord—Kawawachikamach—Nitassinan": { cpc: 31.63, lpc: 24.3, ndp: 2.08, bq: 40.52, gpc: 0.0, ppc: 0.0, oth: 1.46 },
    "Dorval—Lachine—LaSalle": { cpc: 15.54, lpc: 61.05, ndp: 5.68, bq: 10.88, gpc: 4.15, ppc: 2.69, oth: 0.0 },
    "Drummond": { cpc: 27.39, lpc: 25.73, ndp: 5.67, bq: 37.85, gpc: 0.0, ppc: 0.0, oth: 3.36 },
    "Gaspésie—Les Îles-de-la-Madeleine—Listuguj": { cpc: 11.73, lpc: 50.62, ndp: 2.02, bq: 33.45, gpc: 0.0, ppc: 1.4, oth: 0.78 },
    "Gatineau": { cpc: 14.7, lpc: 59.43, ndp: 3.79, bq: 16.47, gpc: 2.33, ppc: 2.65, oth: 0.62 },
    "Hochelaga—Rosemont-Est": { cpc: 7.09, lpc: 51.96, ndp: 10.17, bq: 25.16, gpc: 3.39, ppc: 1.69, oth: 0.53 },
    "Honoré-Mercier": { cpc: 13.3, lpc: 67.88, ndp: 3.07, bq: 10.92, gpc: 2.13, ppc: 2.61, oth: 0.09 },
    "Hull—Aylmer": { cpc: 14.15, lpc: 61.76, ndp: 5.56, bq: 11.23, gpc: 4.17, ppc: 2.37, oth: 0.76 },
    "Joliette—Manawan": { cpc: 14.5, lpc: 30.6, ndp: 2.95, bq: 44.86, gpc: 3.38, ppc: 2.28, oth: 1.43 },
    "Jonquière": { cpc: 38.33, lpc: 25.25, ndp: 2.42, bq: 31.02, gpc: 2.59, ppc: 0.0, oth: 0.39 },
    "La Pointe-de-l'Île": { cpc: 10.2, lpc: 44.04, ndp: 4.9, bq: 37.68, gpc: 0.0, ppc: 2.05, oth: 1.13 },
    "La Prairie—Atateken": { cpc: 14.23, lpc: 44.42, ndp: 3.48, bq: 33.26, gpc: 2.69, ppc: 1.83, oth: 0.09 },
    "Lac-Saint-Jean": { cpc: 35.0, lpc: 23.55, ndp: 1.5, bq: 37.45, gpc: 2.5, ppc: 0.0, oth: 0.0 },
    "Lac-Saint-Louis": { cpc: 23.13, lpc: 61.74, ndp: 5.41, bq: 3.46, gpc: 4.47, ppc: 1.79, oth: 0.0 },
    "LaSalle—Émard—Verdun": { cpc: 10.86, lpc: 55.43, ndp: 9.0, bq: 16.51, gpc: 4.84, ppc: 2.4, oth: 0.96 },
    "Laurentides—Labelle": { cpc: 15.78, lpc: 31.62, ndp: 2.78, bq: 41.77, gpc: 4.1, ppc: 2.7, oth: 1.26 },
    "Laurier—Sainte-Marie": { cpc: 6.95, lpc: 54.77, ndp: 15.64, bq: 16.53, gpc: 3.88, ppc: 1.34, oth: 0.88 },
    "Laval—Les Îles": { cpc: 22.57, lpc: 55.9, ndp: 3.26, bq: 12.92, gpc: 2.16, ppc: 3.2, oth: 0.0 },
    "Les Pays-d'en-Haut": { cpc: 17.37, lpc: 34.57, ndp: 3.41, bq: 37.61, gpc: 2.57, ppc: 3.18, oth: 1.29 },
    "Lévis—Lotbinière": { cpc: 61.23, lpc: 16.98, ndp: 2.98, bq: 14.94, gpc: 1.88, ppc: 1.45, oth: 0.54 },
    "Longueuil—Charles-LeMoyne": { cpc: 11.69, lpc: 51.04, ndp: 4.84, bq: 26.38, gpc: 3.87, ppc: 2.04, oth: 0.14 },
    "Longueuil—Saint-Hubert": { cpc: 9.85, lpc: 48.86, ndp: 3.76, bq: 31.13, gpc: 4.48, ppc: 1.67, oth: 0.25 },
    "Louis-Hébert": { cpc: 30.95, lpc: 43.64, ndp: 3.06, bq: 18.27, gpc: 3.75, ppc: 0.0, oth: 0.32 },
    "Louis-Saint-Laurent—Akiawenhrahk": { cpc: 62.42, lpc: 18.65, ndp: 2.11, bq: 12.83, gpc: 1.93, ppc: 1.26, oth: 0.8 },
    "Marc-Aurèle-Fortin": { cpc: 16.15, lpc: 54.41, ndp: 3.92, bq: 22.51, gpc: 0.0, ppc: 1.96, oth: 1.04 },
    "Mégantic—L'Érable—Lotbinière": { cpc: 67.21, lpc: 14.34, ndp: 1.23, bq: 12.35, gpc: 1.75, ppc: 2.06, oth: 1.06 },
    "Mirabel": { cpc: 19.72, lpc: 32.41, ndp: 4.25, bq: 36.09, gpc: 3.62, ppc: 2.78, oth: 1.12 },
    "Mount Royal": { cpc: 28.27, lpc: 60.47, ndp: 3.45, bq: 2.54, gpc: 3.62, ppc: 1.54, oth: 0.11 },
    "Mont-Saint-Bruno—L'Acadie": { cpc: 14.16, lpc: 44.67, ndp: 4.04, bq: 35.29, gpc: 0.25, ppc: 1.52, oth: 0.08 },
    "Montcalm": { cpc: 17.76, lpc: 27.24, ndp: 3.17, bq: 43.0, gpc: 4.38, ppc: 3.21, oth: 1.23 },
    "Montmorency—Charlevoix": { cpc: 44.63, lpc: 23.87, ndp: 2.03, bq: 25.69, gpc: 1.77, ppc: 1.22, oth: 0.8 },
    "Notre-Dame-de-Grâce—Westmount": { cpc: 17.48, lpc: 61.56, ndp: 8.68, bq: 4.13, gpc: 5.86, ppc: 2.09, oth: 0.21 },
    "Outremont": { cpc: 10.59, lpc: 57.57, ndp: 13.14, bq: 11.88, gpc: 5.11, ppc: 1.53, oth: 0.19 },
    "Papineau": { cpc: 6.83, lpc: 63.63, ndp: 10.64, bq: 11.27, gpc: 5.08, ppc: 1.63, oth: 0.91 },
    "Pierre-Boucher—Les Patriotes—Verchères": { cpc: 13.57, lpc: 35.71, ndp: 3.95, bq: 44.41, gpc: 0.0, ppc: 1.49, oth: 0.86 },
    "Pierrefonds—Dollard": { cpc: 25.73, lpc: 62.07, ndp: 4.74, bq: 5.2, gpc: 0.0, ppc: 2.27, oth: 0.0 },
    "Pontiac—Kitigan Zibi": { cpc: 27.3, lpc: 50.17, ndp: 4.81, bq: 10.29, gpc: 4.18, ppc: 2.82, oth: 0.43 },
    "Portneuf—Jacques-Cartier": { cpc: 63.87, lpc: 16.57, ndp: 1.92, bq: 15.39, gpc: 0.0, ppc: 1.47, oth: 0.78 },
    "Québec Centre": { cpc: 24.55, lpc: 43.66, ndp: 5.75, bq: 21.02, gpc: 3.62, ppc: 1.06, oth: 0.32 },
    "Repentigny": { cpc: 13.5, lpc: 38.51, ndp: 3.79, bq: 41.65, gpc: 0.0, ppc: 0.0, oth: 2.56 },
    "Richmond—Arthabaska": { cpc: 61.85, lpc: 16.62, ndp: 1.84, bq: 16.31, gpc: 0.0, ppc: 2.2, oth: 1.17 },
    "Rimouski—La Matapédia": { cpc: 17.33, lpc: 30.65, ndp: 3.02, bq: 44.65, gpc: 0.0, ppc: 1.57, oth: 2.78 },
    "Rivière-des-Mille-Îles": { cpc: 14.62, lpc: 45.21, ndp: 3.42, bq: 30.72, gpc: 2.92, ppc: 1.93, oth: 1.18 },
    "Rivière-du-Nord": { cpc: 18.45, lpc: 30.88, ndp: 3.51, bq: 42.02, gpc: 0.5, ppc: 2.89, oth: 1.76 },
    "Rosemont—La Petite-Patrie": { cpc: 7.24, lpc: 37.66, ndp: 29.28, bq: 20.59, gpc: 4.86, ppc: 0.0, oth: 0.38 },
    "Saint-Hyacinthe—Bagot—Acton": { cpc: 20.77, lpc: 31.26, ndp: 5.95, bq: 38.74, gpc: 0.0, ppc: 2.06, oth: 1.22 },
    "Saint-Jean": { cpc: 18.54, lpc: 36.69, ndp: 3.52, bq: 35.58, gpc: 3.5, ppc: 0.0, oth: 2.16 },
    "Saint-Laurent": { cpc: 22.56, lpc: 65.57, ndp: 4.41, bq: 5.2, gpc: 0.16, ppc: 1.92, oth: 0.19 },
    "Saint-Léonard—Saint-Michel": { cpc: 12.81, lpc: 76.39, ndp: 3.34, bq: 5.19, gpc: 0.0, ppc: 2.27, oth: 0.0 },
    "Saint-Maurice—Champlain": { cpc: 23.55, lpc: 49.8, ndp: 2.2, bq: 20.9, gpc: 1.92, ppc: 0.0, oth: 1.63 },
    "Shefford": { cpc: 17.16, lpc: 42.49, ndp: 2.5, bq: 31.51, gpc: 2.84, ppc: 2.43, oth: 1.06 },
    "Sherbrooke": { cpc: 17.94, lpc: 47.05, ndp: 6.47, bq: 21.55, gpc: 4.53, ppc: 1.7, oth: 0.76 },
    "Terrebonne": { cpc: 15.58, lpc: 39.24, ndp: 3.29, bq: 32.76, gpc: 2.39, ppc: 1.97, oth: 4.77 },
    "Thérèse-De Blainville": { cpc: 15.63, lpc: 44.67, ndp: 3.43, bq: 30.79, gpc: 3.09, ppc: 1.88, oth: 0.52 },
    "Trois-Rivières": { cpc: 38.47, lpc: 33.65, ndp: 3.51, bq: 20.54, gpc: 1.92, ppc: 1.24, oth: 0.66 },
    "Vaudreuil": { cpc: 21.3, lpc: 55.04, ndp: 4.57, bq: 14.41, gpc: 3.69, ppc: 0.0, oth: 1.0 },
    "Ville-Marie—Le Sud-Ouest—Île-des-Sœurs": { cpc: 16.93, lpc: 60.82, ndp: 7.94, bq: 8.38, gpc: 3.97, ppc: 1.7, oth: 0.27 },
    "Vimy": { cpc: 18.24, lpc: 59.22, ndp: 4.09, bq: 15.63, gpc: 0.0, ppc: 2.83, oth: 0.0 },
    "Ajax": { cpc: 29.59, lpc: 62.4, ndp: 5.05, bq: 0.0, gpc: 2.96, ppc: 0.0, oth: 0.0 },
    "Algonquin—Renfrew—Pembroke": { cpc: 60.87, lpc: 23.51, ndp: 8.33, bq: 0.0, gpc: 2.46, ppc: 3.58, oth: 1.26 },
    "Aurora—Oak Ridges—Richmond Hill": { cpc: 45.68, lpc: 47.91, ndp: 2.82, bq: 0.0, gpc: 0.21, ppc: 1.6, oth: 1.79 },
    "Barrie South—Innisfil": { cpc: 56.61, lpc: 33.86, ndp: 6.05, bq: 0.0, gpc: 0.0, ppc: 3.47, oth: 0.0 },
    "Barrie—Springwater—Oro-Medonte": { cpc: 54.45, lpc: 35.7, ndp: 6.39, bq: 0.0, gpc: 0.27, ppc: 3.14, oth: 0.06 },
    "Bay of Quinte": { cpc: 47.05, lpc: 42.36, ndp: 5.71, bq: 0.0, gpc: 2.7, ppc: 2.18, oth: 0.0 },
    "Beaches—East York": { cpc: 17.37, lpc: 67.58, ndp: 8.81, bq: 0.0, gpc: 3.47, ppc: 1.45, oth: 1.32 },
    "Bowmanville—Oshawa North": { cpc: 53.13, lpc: 36.1, ndp: 7.05, bq: 0.0, gpc: 0.0, ppc: 2.44, oth: 1.28 },
    "Brampton Centre": { cpc: 36.1, lpc: 54.82, ndp: 5.86, bq: 0.0, gpc: 0.0, ppc: 1.58, oth: 1.64 },
    "Brampton—Chinguacousy Park": { cpc: 34.92, lpc: 56.47, ndp: 6.12, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 2.49 },
    "Brampton East": { cpc: 32.78, lpc: 60.27, ndp: 5.79, bq: 0.0, gpc: 0.0, ppc: 1.15, oth: 0.0 },
    "Brampton North—Caledon": { cpc: 37.15, lpc: 56.83, ndp: 5.05, bq: 0.0, gpc: 0.48, ppc: 0.41, oth: 0.09 },
    "Brampton South": { cpc: 33.28, lpc: 60.08, ndp: 4.94, bq: 0.0, gpc: 0.0, ppc: 1.24, oth: 0.46 },
    "Brampton West": { cpc: 30.96, lpc: 62.05, ndp: 4.61, bq: 0.0, gpc: 0.0, ppc: 1.05, oth: 1.33 },
    "Brantford—Brant South—Six Nations": { cpc: 49.54, lpc: 33.83, ndp: 8.1, bq: 0.0, gpc: 3.44, ppc: 4.13, oth: 0.96 },
    "Bruce—Grey—Owen Sound": { cpc: 57.04, lpc: 28.89, ndp: 5.09, bq: 0.0, gpc: 3.75, ppc: 3.55, oth: 1.68 },
    "Burlington": { cpc: 41.47, lpc: 50.26, ndp: 3.91, bq: 0.0, gpc: 2.33, ppc: 1.7, oth: 0.33 },
    "Burlington North—Milton West": { cpc: 40.42, lpc: 52.22, ndp: 3.43, bq: 0.0, gpc: 2.27, ppc: 1.67, oth: 0.0 },
    "Cambridge": { cpc: 40.78, lpc: 45.09, ndp: 6.6, bq: 0.0, gpc: 4.28, ppc: 3.25, oth: 0.0 },
    "Carleton": { cpc: 57.42, lpc: 34.83, ndp: 4.07, bq: 0.0, gpc: 2.5, ppc: 1.16, oth: 0.02 },
    "Chatham-Kent—Leamington": { cpc: 52.55, lpc: 32.69, ndp: 5.85, bq: 0.0, gpc: 1.98, ppc: 6.93, oth: 0.0 },
    "Davenport": { cpc: 15.3, lpc: 60.66, ndp: 18.03, bq: 0.0, gpc: 3.58, ppc: 1.75, oth: 0.69 },
    "Don Valley North": { cpc: 35.81, lpc: 57.32, ndp: 3.53, bq: 0.0, gpc: 2.1, ppc: 1.23, oth: 0.02 },
    "Don Valley West": { cpc: 32.64, lpc: 61.66, ndp: 3.23, bq: 0.0, gpc: 1.22, ppc: 1.05, oth: 0.2 },
    "Dufferin—Caledon": { cpc: 55.33, lpc: 31.87, ndp: 3.78, bq: 0.0, gpc: 5.38, ppc: 3.06, oth: 0.59 },
    "Eglinton—Lawrence": { cpc: 39.82, lpc: 52.28, ndp: 3.23, bq: 0.0, gpc: 3.46, ppc: 1.21, oth: 0.0 },
    "Elgin—St. Thomas—London South": { cpc: 60.27, lpc: 23.74, ndp: 6.4, bq: 0.0, gpc: 2.86, ppc: 5.67, oth: 1.05 },
    "Essex": { cpc: 56.56, lpc: 21.05, ndp: 14.12, bq: 0.0, gpc: 1.8, ppc: 5.36, oth: 1.1 },
    "Etobicoke Centre": { cpc: 38.69, lpc: 53.93, ndp: 3.95, bq: 0.0, gpc: 0.37, ppc: 2.85, oth: 0.2 },
    "Etobicoke—Lakeshore": { cpc: 36.95, lpc: 52.94, ndp: 4.96, bq: 0.0, gpc: 2.54, ppc: 1.9, oth: 0.7 },
    "Etobicoke North": { cpc: 28.29, lpc: 64.64, ndp: 3.79, bq: 0.0, gpc: 0.0, ppc: 1.84, oth: 1.44 },
    "Flamborough—Glanbrook—Brant North": { cpc: 51.0, lpc: 37.42, ndp: 5.5, bq: 0.0, gpc: 3.01, ppc: 2.9, oth: 0.17 },
    "Guelph": { cpc: 28.41, lpc: 49.47, ndp: 8.62, bq: 0.0, gpc: 10.04, ppc: 2.15, oth: 1.3 },
    "Haldimand—Norfolk": { cpc: 55.79, lpc: 31.98, ndp: 5.06, bq: 0.0, gpc: 0.0, ppc: 4.71, oth: 2.47 },
    "Haliburton—Kawartha Lakes": { cpc: 60.19, lpc: 27.29, ndp: 5.33, bq: 0.0, gpc: 3.01, ppc: 3.02, oth: 1.17 },
    "Hamilton Centre": { cpc: 25.68, lpc: 41.03, ndp: 23.59, bq: 0.0, gpc: 4.37, ppc: 3.89, oth: 1.44 },
    "Hamilton East—Stoney Creek": { cpc: 37.46, lpc: 47.96, ndp: 8.71, bq: 0.0, gpc: 2.44, ppc: 3.43, oth: 0.0 },
    "Hamilton Mountain": { cpc: 33.5, lpc: 45.55, ndp: 13.64, bq: 0.0, gpc: 2.82, ppc: 3.22, oth: 1.26 },
    "Hamilton West—Ancaster—Dundas": { cpc: 34.68, lpc: 52.17, ndp: 7.6, bq: 0.0, gpc: 3.28, ppc: 1.86, oth: 0.41 },
    "Hastings—Lennox and Addington—Tyendinaga": { cpc: 50.9, lpc: 38.0, ndp: 3.98, bq: 0.0, gpc: 2.1, ppc: 2.41, oth: 2.61 },
    "Humber River—Black Creek": { cpc: 20.23, lpc: 69.64, ndp: 6.16, bq: 0.0, gpc: 1.47, ppc: 1.73, oth: 0.76 },
    "Huron—Bruce": { cpc: 59.45, lpc: 30.15, ndp: 5.58, bq: 0.0, gpc: 0.0, ppc: 3.22, oth: 1.59 },
    "Kanata": { cpc: 41.91, lpc: 48.45, ndp: 5.4, bq: 0.0, gpc: 3.05, ppc: 1.19, oth: 0.0 },
    "Kapuskasing—Timmins—Mushkegowuk": { cpc: 37.05, lpc: 38.1, ndp: 17.03, bq: 0.0, gpc: 0.61, ppc: 6.88, oth: 0.34 },
    "Kenora—Kiiwetinoong": { cpc: 56.86, lpc: 25.71, ndp: 12.36, bq: 0.0, gpc: 1.92, ppc: 3.15, oth: 0.0 },
    "Kingston and the Islands": { cpc: 31.49, lpc: 51.52, ndp: 11.94, bq: 0.0, gpc: 3.33, ppc: 1.7, oth: 0.02 },
    "King—Vaughan": { cpc: 48.58, lpc: 45.86, ndp: 2.32, bq: 0.0, gpc: 1.45, ppc: 1.79, oth: 0.0 },
    "Kitchener Centre": { cpc: 28.93, lpc: 19.96, ndp: 6.59, bq: 0.0, gpc: 41.04, ppc: 2.95, oth: 0.53 },
    "Kitchener—Conestoga": { cpc: 43.14, lpc: 43.33, ndp: 4.42, bq: 0.0, gpc: 5.94, ppc: 3.15, oth: 0.02 },
    "Kitchener South—Hespeler": { cpc: 41.89, lpc: 43.57, ndp: 6.2, bq: 0.0, gpc: 4.28, ppc: 3.03, oth: 1.04 },
    "Lanark—Frontenac": { cpc: 57.87, lpc: 29.69, ndp: 5.74, bq: 0.0, gpc: 3.31, ppc: 2.75, oth: 0.64 },
    "Leeds—Grenville—Thousand Islands—Rideau Lakes": { cpc: 58.6, lpc: 28.85, ndp: 5.61, bq: 0.0, gpc: 4.41, ppc: 2.53, oth: 0.0 },
    "London Centre": { cpc: 32.65, lpc: 48.79, ndp: 12.93, bq: 0.0, gpc: 2.73, ppc: 2.58, oth: 0.32 },
    "London—Fanshawe": { cpc: 37.58, lpc: 35.23, ndp: 21.78, bq: 0.0, gpc: 0.0, ppc: 5.41, oth: 0.0 },
    "London West": { cpc: 41.83, lpc: 44.58, ndp: 9.06, bq: 0.0, gpc: 0.0, ppc: 2.33, oth: 2.19 },
    "Markham—Stouffville": { cpc: 37.9, lpc: 55.5, ndp: 3.1, bq: 0.0, gpc: 2.28, ppc: 1.22, oth: 0.0 },
    "Markham—Thornhill": { cpc: 28.49, lpc: 65.6, ndp: 2.92, bq: 0.0, gpc: 2.28, ppc: 0.71, oth: 0.0 },
    "Markham—Unionville": { cpc: 44.62, lpc: 50.06, ndp: 2.22, bq: 0.0, gpc: 3.1, ppc: 0.0, oth: 0.0 },
    "Middlesex—London": { cpc: 54.54, lpc: 32.3, ndp: 6.95, bq: 0.0, gpc: 2.31, ppc: 3.56, oth: 0.33 },
    "Milton East—Halton Hills South": { cpc: 45.77, lpc: 45.69, ndp: 3.43, bq: 0.0, gpc: 3.04, ppc: 2.06, oth: 0.0 },
    "Mississauga Centre": { cpc: 32.34, lpc: 59.61, ndp: 4.1, bq: 0.0, gpc: 1.92, ppc: 1.79, oth: 0.24 },
    "Mississauga East—Cooksville": { cpc: 35.59, lpc: 55.89, ndp: 3.82, bq: 0.0, gpc: 0.38, ppc: 2.77, oth: 1.54 },
    "Mississauga—Erin Mills": { cpc: 37.08, lpc: 55.91, ndp: 3.69, bq: 0.0, gpc: 1.91, ppc: 1.42, oth: 0.0 },
    "Mississauga—Lakeshore": { cpc: 42.68, lpc: 49.15, ndp: 3.49, bq: 0.0, gpc: 2.57, ppc: 1.79, oth: 0.31 },
    "Mississauga—Malton": { cpc: 34.08, lpc: 57.56, ndp: 4.92, bq: 0.0, gpc: 2.17, ppc: 0.13, oth: 1.14 },
    "Mississauga—Streetsville": { cpc: 38.45, lpc: 52.35, ndp: 4.38, bq: 0.0, gpc: 2.51, ppc: 1.59, oth: 0.71 },
    "Nepean": { cpc: 38.42, lpc: 51.98, ndp: 6.04, bq: 0.0, gpc: 2.36, ppc: 1.2, oth: 0.0 },
    "Newmarket—Aurora": { cpc: 42.68, lpc: 48.33, ndp: 4.17, bq: 0.0, gpc: 2.18, ppc: 1.78, oth: 0.86 },
    "New Tecumseth—Gwillimbury": { cpc: 55.18, lpc: 34.6, ndp: 4.88, bq: 0.0, gpc: 1.52, ppc: 3.3, oth: 0.53 },
    "Niagara Falls—Niagara-on-the-Lake": { cpc: 45.15, lpc: 41.92, ndp: 6.96, bq: 0.0, gpc: 2.48, ppc: 3.48, oth: 0.0 },
    "Niagara South": { cpc: 42.44, lpc: 41.32, ndp: 9.36, bq: 0.0, gpc: 2.55, ppc: 4.33, oth: 0.0 },
    "Niagara West": { cpc: 50.87, lpc: 35.41, ndp: 5.22, bq: 0.0, gpc: 3.42, ppc: 3.12, oth: 1.97 },
    "Nipissing—Timiskaming": { cpc: 40.44, lpc: 46.16, ndp: 9.57, bq: 0.0, gpc: 0.0, ppc: 3.83, oth: 0.0 },
    "Northumberland—Clarke": { cpc: 50.63, lpc: 38.66, ndp: 5.19, bq: 0.0, gpc: 3.12, ppc: 2.4, oth: 0.0 },
    "Oakville East": { cpc: 43.29, lpc: 50.09, ndp: 3.34, bq: 0.0, gpc: 1.9, ppc: 1.38, oth: 0.0 },
    "Oakville West": { cpc: 42.11, lpc: 51.31, ndp: 3.08, bq: 0.0, gpc: 1.99, ppc: 1.51, oth: 0.0 },
    "Orléans": { cpc: 32.51, lpc: 58.59, ndp: 5.29, bq: 0.0, gpc: 1.94, ppc: 1.14, oth: 0.52 },
    "Oshawa": { cpc: 52.2, lpc: 30.0, ndp: 12.11, bq: 0.0, gpc: 2.13, ppc: 3.57, oth: 0.0 },
    "Ottawa Centre": { cpc: 21.28, lpc: 58.36, ndp: 13.82, bq: 0.0, gpc: 3.86, ppc: 1.11, oth: 1.57 },
    "Ottawa South": { cpc: 31.56, lpc: 57.09, ndp: 6.86, bq: 0.0, gpc: 2.72, ppc: 1.38, oth: 0.4 },
    "Ottawa—Vanier—Gloucester": { cpc: 24.91, lpc: 58.69, ndp: 9.12, bq: 0.0, gpc: 3.91, ppc: 1.47, oth: 1.9 },
    "Ottawa West—Nepean": { cpc: 32.83, lpc: 53.2, ndp: 7.75, bq: 0.0, gpc: 3.61, ppc: 1.45, oth: 1.16 },
    "Oxford": { cpc: 57.57, lpc: 25.11, ndp: 7.33, bq: 0.0, gpc: 3.5, ppc: 4.98, oth: 1.5 },
    "Parry Sound—Muskoka": { cpc: 56.88, lpc: 25.36, ndp: 6.46, bq: 0.0, gpc: 6.99, ppc: 3.41, oth: 0.91 },
    "Perth—Wellington": { cpc: 59.15, lpc: 29.61, ndp: 6.77, bq: 0.0, gpc: 0.0, ppc: 4.47, oth: 0.0 },
    "Peterborough": { cpc: 46.53, lpc: 40.82, ndp: 7.36, bq: 0.0, gpc: 2.8, ppc: 1.95, oth: 0.54 },
    "Pickering—Brooklin": { cpc: 38.98, lpc: 54.09, ndp: 4.96, bq: 0.0, gpc: 0.3, ppc: 1.67, oth: 0.0 },
    "Prescott—Russell—Cumberland": { cpc: 36.45, lpc: 52.43, ndp: 3.92, bq: 0.0, gpc: 2.42, ppc: 2.75, oth: 2.03 },
    "Richmond Hill South": { cpc: 41.81, lpc: 50.94, ndp: 3.05, bq: 0.0, gpc: 0.0, ppc: 1.21, oth: 2.98 },
    "Sarnia—Lambton—Bkejwanong": { cpc: 58.73, lpc: 24.16, ndp: 8.57, bq: 0.0, gpc: 1.99, ppc: 5.29, oth: 1.27 },
    "Sault Ste. Marie—Algoma": { cpc: 45.05, lpc: 40.43, ndp: 10.59, bq: 0.0, gpc: 0.85, ppc: 2.53, oth: 0.56 },
    "Scarborough—Agincourt": { cpc: 32.12, lpc: 61.13, ndp: 3.59, bq: 0.0, gpc: 2.0, ppc: 1.17, oth: 0.0 },
    "Scarborough Centre—Don Valley East": { cpc: 28.92, lpc: 63.5, ndp: 5.07, bq: 0.0, gpc: 0.0, ppc: 1.85, oth: 0.65 },
    "Scarborough—Guildwood—Rouge Park": { cpc: 24.95, lpc: 68.39, ndp: 4.89, bq: 0.0, gpc: 0.0, ppc: 1.29, oth: 0.48 },
    "Scarborough North": { cpc: 20.03, lpc: 73.19, ndp: 4.15, bq: 0.0, gpc: 0.0, ppc: 1.03, oth: 1.61 },
    "Scarborough Southwest": { cpc: 23.68, lpc: 65.78, ndp: 5.94, bq: 0.0, gpc: 2.74, ppc: 1.26, oth: 0.6 },
    "Scarborough—Woburn": { cpc: 25.36, lpc: 67.07, ndp: 4.78, bq: 0.0, gpc: 0.0, ppc: 1.32, oth: 1.47 },
    "Simcoe—Grey": { cpc: 54.56, lpc: 31.67, ndp: 4.9, bq: 0.0, gpc: 5.05, ppc: 3.04, oth: 0.79 },
    "Simcoe North": { cpc: 49.95, lpc: 36.04, ndp: 6.11, bq: 0.0, gpc: 3.82, ppc: 3.45, oth: 0.63 },
    "Spadina—Harbourfront": { cpc: 28.96, lpc: 50.38, ndp: 14.6, bq: 0.0, gpc: 4.53, ppc: 1.53, oth: 0.0 },
    "St. Catharines": { cpc: 39.91, lpc: 46.08, ndp: 8.49, bq: 0.0, gpc: 2.42, ppc: 3.09, oth: 0.0 },
    "Stormont—Dundas—Glengarry": { cpc: 61.92, lpc: 27.8, ndp: 4.02, bq: 0.0, gpc: 2.79, ppc: 3.33, oth: 0.15 },
    "Sudbury": { cpc: 36.39, lpc: 45.18, ndp: 12.22, bq: 0.0, gpc: 2.74, ppc: 3.05, oth: 0.43 },
    "Sudbury East—Manitoulin—Nickel Belt": { cpc: 36.49, lpc: 42.82, ndp: 13.3, bq: 0.0, gpc: 2.48, ppc: 4.6, oth: 0.31 },
    "Taiaiako’n—Parkdale—High Park": { cpc: 18.56, lpc: 58.81, ndp: 17.27, bq: 0.0, gpc: 2.78, ppc: 1.69, oth: 0.88 },
    "Thornhill": { cpc: 55.77, lpc: 38.39, ndp: 2.08, bq: 0.0, gpc: 1.87, ppc: 1.89, oth: 0.0 },
    "Thunder Bay—Rainy River": { cpc: 38.38, lpc: 44.31, ndp: 12.05, bq: 0.0, gpc: 1.98, ppc: 3.28, oth: 0.0 },
    "Thunder Bay—Superior North": { cpc: 30.98, lpc: 51.57, ndp: 11.58, bq: 0.0, gpc: 2.42, ppc: 2.9, oth: 0.55 },
    "Toronto Centre": { cpc: 15.96, lpc: 60.76, ndp: 10.48, bq: 0.0, gpc: 10.51, ppc: 1.1, oth: 1.19 },
    "Toronto—Danforth": { cpc: 16.57, lpc: 62.98, ndp: 14.36, bq: 0.0, gpc: 2.73, ppc: 1.23, oth: 2.12 },
    "Toronto—St. Paul's": { cpc: 30.33, lpc: 55.92, ndp: 5.88, bq: 0.0, gpc: 6.72, ppc: 1.09, oth: 0.06 },
    "University—Rosedale": { cpc: 22.61, lpc: 57.83, ndp: 11.44, bq: 0.0, gpc: 5.91, ppc: 1.24, oth: 0.97 },
    "Vaughan—Woodbridge": { cpc: 43.94, lpc: 49.72, ndp: 2.44, bq: 0.0, gpc: 1.11, ppc: 2.24, oth: 0.55 },
    "Waterloo": { cpc: 32.73, lpc: 53.54, ndp: 7.37, bq: 0.0, gpc: 4.3, ppc: 2.06, oth: 0.0 },
    "Wellington—Halton Hills North": { cpc: 53.14, lpc: 33.93, ndp: 4.39, bq: 0.0, gpc: 5.64, ppc: 2.68, oth: 0.22 },
    "Whitby": { cpc: 39.62, lpc: 51.15, ndp: 5.35, bq: 0.0, gpc: 1.95, ppc: 1.93, oth: 0.0 },
    "Willowdale": { cpc: 37.27, lpc: 55.64, ndp: 3.66, bq: 0.0, gpc: 2.3, ppc: 1.13, oth: 0.0 },
    "Windsor—Tecumseh—Lakeshore": { cpc: 37.05, lpc: 41.77, ndp: 13.42, bq: 0.0, gpc: 1.75, ppc: 5.37, oth: 0.65 },
    "Windsor West": { cpc: 29.87, lpc: 42.35, ndp: 22.09, bq: 0.0, gpc: 0.0, ppc: 4.9, oth: 0.78 },
    "York Centre": { cpc: 42.24, lpc: 52.1, ndp: 3.67, bq: 0.0, gpc: 0.0, ppc: 1.99, oth: 0.0 },
    "York—Durham": { cpc: 59.22, lpc: 32.2, ndp: 4.65, bq: 0.0, gpc: 0.67, ppc: 2.78, oth: 0.48 },
    "York South—Weston—Etobicoke": { cpc: 26.1, lpc: 63.7, ndp: 5.66, bq: 0.0, gpc: 2.34, ppc: 2.18, oth: 0.02 },
    "Brandon—Souris": { cpc: 63.32, lpc: 20.53, ndp: 14.15, bq: 0.0, gpc: 0.04, ppc: 1.91, oth: 0.04 },
    "Churchill—Keewatinook Aski": { cpc: 24.42, lpc: 41.01, ndp: 27.99, bq: 0.0, gpc: 5.47, ppc: 1.1, oth: 0.0 },
    "Elmwood—Transcona": { cpc: 32.14, lpc: 27.1, ndp: 36.12, bq: 0.0, gpc: 3.17, ppc: 1.47, oth: 0.01 },
    "Kildonan—St. Paul": { cpc: 40.51, lpc: 42.94, ndp: 14.78, bq: 0.0, gpc: 0.52, ppc: 1.13, oth: 0.12 },
    "Portage—Lisgar": { cpc: 61.37, lpc: 20.8, ndp: 10.28, bq: 0.0, gpc: 0.0, ppc: 5.61, oth: 1.94 },
    "Provencher": { cpc: 51.29, lpc: 28.24, ndp: 8.44, bq: 0.0, gpc: 4.78, ppc: 4.04, oth: 3.2 },
    "Riding Mountain": { cpc: 61.57, lpc: 21.37, ndp: 9.83, bq: 0.0, gpc: 3.87, ppc: 2.39, oth: 0.97 },
    "St. Boniface—St. Vital": { cpc: 24.12, lpc: 60.35, ndp: 11.74, bq: 0.0, gpc: 2.26, ppc: 0.8, oth: 0.73 },
    "Selkirk—Interlake—Eastman": { cpc: 58.51, lpc: 21.93, ndp: 12.99, bq: 0.0, gpc: 4.86, ppc: 1.71, oth: 0.0 },
    "Winnipeg Centre": { cpc: 12.95, lpc: 47.19, ndp: 32.66, bq: 0.0, gpc: 4.25, ppc: 0.94, oth: 2.01 },
    "Winnipeg North": { cpc: 11.18, lpc: 71.08, ndp: 14.96, bq: 0.0, gpc: 1.8, ppc: 0.73, oth: 0.25 },
    "Winnipeg South": { cpc: 26.59, lpc: 63.11, ndp: 7.59, bq: 0.0, gpc: 2.12, ppc: 0.59, oth: 0.0 },
    "Winnipeg South Centre": { cpc: 23.36, lpc: 60.67, ndp: 11.18, bq: 0.0, gpc: 3.89, ppc: 0.51, oth: 0.4 },
    "Winnipeg West": { cpc: 34.28, lpc: 53.74, ndp: 8.24, bq: 0.0, gpc: 3.09, ppc: 0.63, oth: 0.02 },
    "Battlefords—Lloydminster—Meadow Lake": { cpc: 69.97, lpc: 12.29, ndp: 8.74, bq: 0.0, gpc: 1.42, ppc: 1.36, oth: 6.22 },
    "Carlton Trail—Eagle Creek": { cpc: 73.91, lpc: 9.59, ndp: 9.93, bq: 0.0, gpc: 1.79, ppc: 2.19, oth: 2.59 },
    "Desnethé—Missinippi—Churchill River": { cpc: 19.89, lpc: 63.05, ndp: 13.19, bq: 0.0, gpc: 1.73, ppc: 0.57, oth: 1.56 },
    "Moose Jaw—Lake Centre—Lanigan": { cpc: 68.46, lpc: 10.91, ndp: 13.83, bq: 0.0, gpc: 2.05, ppc: 2.77, oth: 1.98 },
    "Prince Albert": { cpc: 65.75, lpc: 19.53, ndp: 10.03, bq: 0.0, gpc: 1.98, ppc: 1.54, oth: 1.18 },
    "Regina—Lewvan": { cpc: 48.69, lpc: 24.3, ndp: 23.9, bq: 0.0, gpc: 2.31, ppc: 0.8, oth: 0.0 },
    "Regina—Qu'Appelle": { cpc: 62.83, lpc: 17.2, ndp: 15.38, bq: 0.0, gpc: 3.48, ppc: 1.12, oth: 0.0 },
    "Regina—Wascana": { cpc: 45.93, lpc: 39.93, ndp: 10.82, bq: 0.0, gpc: 2.61, ppc: 0.7, oth: 0.0 },
    "Saskatoon South": { cpc: 51.56, lpc: 24.26, ndp: 20.87, bq: 0.0, gpc: 2.28, ppc: 1.03, oth: 0.0 },
    "Saskatoon—University": { cpc: 52.23, lpc: 19.08, ndp: 25.11, bq: 0.0, gpc: 1.82, ppc: 0.99, oth: 0.78 },
    "Saskatoon West": { cpc: 51.95, lpc: 15.13, ndp: 29.29, bq: 0.0, gpc: 2.11, ppc: 1.52, oth: 0.0 },
    "Souris—Moose Mountain": { cpc: 81.97, lpc: 7.3, ndp: 5.65, bq: 0.0, gpc: 0.11, ppc: 2.15, oth: 2.81 },
    "Swift Current—Grasslands—Kindersley": { cpc: 77.21, lpc: 7.07, ndp: 7.12, bq: 0.0, gpc: 1.58, ppc: 1.76, oth: 5.25 },
    "Yorkton—Melville": { cpc: 73.31, lpc: 10.85, ndp: 8.4, bq: 0.0, gpc: 3.26, ppc: 2.14, oth: 2.04 },
    "Airdrie—Cochrane": { cpc: 59.74, lpc: 19.69, ndp: 7.73, bq: 0.0, gpc: 2.32, ppc: 4.9, oth: 5.62 },
    "Battle River—Crowfoot": { cpc: 74.0, lpc: 8.58, ndp: 5.22, bq: 0.0, gpc: 1.76, ppc: 5.77, oth: 4.68 },
    "Bow River": { cpc: 70.26, lpc: 15.44, ndp: 4.91, bq: 0.0, gpc: 0.0, ppc: 5.94, oth: 3.46 },
    "Calgary Centre": { cpc: 41.78, lpc: 47.94, ndp: 7.0, bq: 0.0, gpc: 2.47, ppc: 0.0, oth: 0.81 },
    "Calgary Confederation": { cpc: 38.37, lpc: 45.51, ndp: 7.72, bq: 0.0, gpc: 5.73, ppc: 2.33, oth: 0.33 },
    "Calgary Crowfoot": { cpc: 48.93, lpc: 37.55, ndp: 7.48, bq: 0.0, gpc: 2.77, ppc: 2.46, oth: 0.8 },
    "Calgary East": { cpc: 49.06, lpc: 33.44, ndp: 8.71, bq: 0.0, gpc: 3.65, ppc: 3.97, oth: 1.17 },
    "Calgary Heritage": { cpc: 54.94, lpc: 29.64, ndp: 8.45, bq: 0.0, gpc: 2.49, ppc: 2.87, oth: 1.61 },
    "Calgary McKnight": { cpc: 25.76, lpc: 64.0, ndp: 6.32, bq: 0.0, gpc: 1.58, ppc: 1.77, oth: 0.58 },
    "Calgary Midnapore": { cpc: 59.34, lpc: 23.84, ndp: 9.47, bq: 0.0, gpc: 2.46, ppc: 3.57, oth: 1.31 },
    "Calgary Nose Hill": { cpc: 50.09, lpc: 35.6, ndp: 7.95, bq: 0.0, gpc: 2.72, ppc: 2.59, oth: 1.04 },
    "Calgary Shepard": { cpc: 58.51, lpc: 25.86, ndp: 7.96, bq: 0.0, gpc: 3.01, ppc: 3.27, oth: 1.38 },
    "Calgary Signal Hill": { cpc: 53.73, lpc: 33.84, ndp: 6.59, bq: 0.0, gpc: 2.83, ppc: 2.17, oth: 0.85 },
    "Calgary Skyview": { cpc: 36.68, lpc: 52.52, ndp: 7.0, bq: 0.0, gpc: 1.37, ppc: 1.82, oth: 0.6 },
    "Edmonton Centre": { cpc: 28.86, lpc: 53.69, ndp: 13.97, bq: 0.0, gpc: 0.18, ppc: 2.56, oth: 0.74 },
    "Edmonton Gateway": { cpc: 39.3, lpc: 45.03, ndp: 11.98, bq: 0.0, gpc: 0.36, ppc: 3.08, oth: 0.25 },
    "Edmonton Griesbach": { cpc: 38.84, lpc: 31.53, ndp: 22.41, bq: 0.0, gpc: 2.25, ppc: 3.79, oth: 1.18 },
    "Edmonton Manning": { cpc: 40.44, lpc: 39.32, ndp: 15.84, bq: 0.0, gpc: 0.0, ppc: 4.11, oth: 0.28 },
    "Edmonton Northwest": { cpc: 40.73, lpc: 42.01, ndp: 13.55, bq: 0.0, gpc: 0.05, ppc: 3.52, oth: 0.13 },
    "Edmonton Riverbend": { cpc: 40.89, lpc: 43.6, ndp: 11.41, bq: 0.0, gpc: 1.91, ppc: 2.15, oth: 0.04 },
    "Edmonton Southeast": { cpc: 31.66, lpc: 55.5, ndp: 9.74, bq: 0.0, gpc: 0.0, ppc: 2.85, oth: 0.25 },
    "Edmonton Strathcona": { cpc: 33.51, lpc: 21.95, ndp: 37.66, bq: 0.0, gpc: 2.89, ppc: 3.37, oth: 0.62 },
    "Edmonton West": { cpc: 41.75, lpc: 43.48, ndp: 11.65, bq: 0.0, gpc: 0.09, ppc: 2.78, oth: 0.25 },
    "Foothills": { cpc: 69.14, lpc: 13.62, ndp: 5.98, bq: 0.0, gpc: 2.48, ppc: 4.95, oth: 3.83 },
    "Fort McMurray—Cold Lake": { cpc: 69.52, lpc: 14.09, ndp: 5.38, bq: 0.0, gpc: 1.86, ppc: 7.77, oth: 1.37 },
    "Grande Prairie": { cpc: 73.16, lpc: 8.69, ndp: 6.53, bq: 0.0, gpc: 0.0, ppc: 6.46, oth: 5.17 },
    "Lakeland": { cpc: 72.3, lpc: 10.04, ndp: 5.68, bq: 0.0, gpc: 1.71, ppc: 6.87, oth: 3.39 },
    "Leduc—Wetaskiwin": { cpc: 67.6, lpc: 14.71, ndp: 9.75, bq: 0.0, gpc: 0.04, ppc: 7.13, oth: 0.78 },
    "Lethbridge": { cpc: 54.41, lpc: 28.77, ndp: 9.8, bq: 0.0, gpc: 0.0, ppc: 4.05, oth: 2.96 },
    "Medicine Hat—Cardston—Warner": { cpc: 67.51, lpc: 14.1, ndp: 7.4, bq: 0.0, gpc: 2.62, ppc: 5.7, oth: 2.68 },
    "Parkland": { cpc: 67.42, lpc: 12.96, ndp: 9.03, bq: 0.0, gpc: 0.0, ppc: 7.19, oth: 3.4 },
    "Peace River—Westlock": { cpc: 66.26, lpc: 11.27, ndp: 7.22, bq: 0.0, gpc: 1.48, ppc: 7.91, oth: 5.86 },
    "Ponoka—Didsbury": { cpc: 72.36, lpc: 9.64, ndp: 6.06, bq: 0.0, gpc: 0.0, ppc: 8.49, oth: 3.45 },
    "Red Deer": { cpc: 63.78, lpc: 16.73, ndp: 9.5, bq: 0.0, gpc: 0.0, ppc: 7.1, oth: 2.89 },
    "Sherwood Park—Fort Saskatchewan": { cpc: 57.75, lpc: 23.85, ndp: 10.76, bq: 0.0, gpc: 1.83, ppc: 4.2, oth: 1.62 },
    "St. Albert—Sturgeon River": { cpc: 58.18, lpc: 22.98, ndp: 12.7, bq: 0.0, gpc: 0.0, ppc: 4.83, oth: 1.31 },
    "Yellowhead": { cpc: 60.01, lpc: 20.55, ndp: 7.59, bq: 0.0, gpc: 2.3, ppc: 5.5, oth: 4.05 },
    "Abbotsford—South Langley": { cpc: 52.15, lpc: 34.38, ndp: 7.9, bq: 0.0, gpc: 1.34, ppc: 4.23, oth: 0.0 },
    "Burnaby Central": { cpc: 28.08, lpc: 45.69, ndp: 19.11, bq: 0.0, gpc: 1.38, ppc: 2.26, oth: 3.48 },
    "Burnaby North—Seymour": { cpc: 30.72, lpc: 54.56, ndp: 11.63, bq: 0.0, gpc: 1.46, ppc: 1.62, oth: 0.0 },
    "Cariboo—Prince George": { cpc: 59.69, lpc: 21.88, ndp: 9.02, bq: 0.0, gpc: 1.52, ppc: 5.06, oth: 2.82 },
    "Chilliwack—Hope": { cpc: 56.88, lpc: 24.43, ndp: 12.39, bq: 0.0, gpc: 1.3, ppc: 5.0, oth: 0.0 },
    "Cloverdale—Langley City": { cpc: 39.54, lpc: 49.39, ndp: 8.28, bq: 0.0, gpc: 0.0, ppc: 2.79, oth: 0.0 },
    "Columbia—Kootenay—Southern Rockies": { cpc: 59.78, lpc: 14.14, ndp: 19.04, bq: 0.0, gpc: 1.9, ppc: 5.14, oth: 0.0 },
    "Coquitlam—Port Coquitlam": { cpc: 34.77, lpc: 50.49, ndp: 12.07, bq: 0.0, gpc: 0.0, ppc: 2.67, oth: 0.0 },
    "Courtenay—Alberni": { cpc: 45.12, lpc: 22.64, ndp: 23.43, bq: 0.0, gpc: 3.79, ppc: 3.8, oth: 1.21 },
    "Cowichan—Malahat—Langford": { cpc: 41.03, lpc: 27.34, ndp: 23.47, bq: 0.0, gpc: 3.36, ppc: 4.79, oth: 0.0 },
    "Delta": { cpc: 35.02, lpc: 51.26, ndp: 7.3, bq: 0.0, gpc: 0.87, ppc: 1.37, oth: 4.18 },
    "Esquimalt—Saanich—Sooke": { cpc: 29.79, lpc: 35.87, ndp: 23.29, bq: 0.0, gpc: 4.72, ppc: 3.49, oth: 2.85 },
    "Fleetwood—Port Kells": { cpc: 30.49, lpc: 56.66, ndp: 8.24, bq: 0.0, gpc: 0.77, ppc: 1.64, oth: 2.2 },
    "Kamloops—Shuswap—Central Rockies": { cpc: 55.98, lpc: 23.83, ndp: 11.81, bq: 0.0, gpc: 2.36, ppc: 5.36, oth: 0.65 },
    "Kamloops—Thompson—Nicola": { cpc: 53.03, lpc: 24.89, ndp: 13.2, bq: 0.0, gpc: 1.71, ppc: 3.84, oth: 3.33 },
    "Kelowna": { cpc: 49.44, lpc: 35.38, ndp: 9.37, bq: 0.0, gpc: 1.32, ppc: 4.5, oth: 0.0 },
    "Langley Township—Fraser Heights": { cpc: 49.35, lpc: 38.34, ndp: 8.32, bq: 0.0, gpc: 1.01, ppc: 2.68, oth: 0.3 },
    "Mission—Matsqui—Abbotsford": { cpc: 54.2, lpc: 32.13, ndp: 7.84, bq: 0.0, gpc: 1.59, ppc: 4.23, oth: 0.0 },
    "Nanaimo—Ladysmith": { cpc: 40.76, lpc: 23.32, ndp: 17.07, bq: 0.0, gpc: 14.79, ppc: 4.06, oth: 0.0 },
    "New Westminster—Burnaby—Maillardville": { cpc: 30.12, lpc: 38.74, ndp: 26.07, bq: 0.0, gpc: 2.03, ppc: 2.83, oth: 0.23 },
    "North Island—Powell River": { cpc: 48.75, lpc: 20.67, ndp: 20.14, bq: 0.0, gpc: 2.94, ppc: 3.24, oth: 4.26 },
    "North Vancouver—Capilano": { cpc: 32.18, lpc: 56.49, ndp: 7.91, bq: 0.0, gpc: 1.74, ppc: 1.49, oth: 0.17 },
    "Okanagan Lake West—South Kelowna": { cpc: 55.63, lpc: 30.82, ndp: 8.24, bq: 0.0, gpc: 1.18, ppc: 4.13, oth: 0.0 },
    "Pitt Meadows—Maple Ridge": { cpc: 43.08, lpc: 33.0, ndp: 13.76, bq: 0.0, gpc: 0.13, ppc: 3.39, oth: 6.65 },
    "Port Moody—Coquitlam": { cpc: 38.94, lpc: 41.45, ndp: 16.19, bq: 0.0, gpc: 0.0, ppc: 2.14, oth: 1.29 },
    "Prince George—Peace River—Northern Rockies": { cpc: 60.04, lpc: 10.8, ndp: 5.51, bq: 0.0, gpc: 1.31, ppc: 5.56, oth: 16.78 },
    "Richmond Centre—Marpole": { cpc: 39.32, lpc: 49.37, ndp: 8.57, bq: 0.0, gpc: 1.3, ppc: 1.44, oth: 0.0 },
    "Richmond East—Steveston": { cpc: 37.02, lpc: 52.66, ndp: 8.0, bq: 0.0, gpc: 0.95, ppc: 1.36, oth: 0.0 },
    "Saanich—Gulf Islands": { cpc: 33.38, lpc: 31.98, ndp: 10.92, bq: 0.0, gpc: 19.67, ppc: 2.34, oth: 1.71 },
    "Similkameen—South Okanagan—West Kootenay": { cpc: 51.83, lpc: 21.06, ndp: 20.38, bq: 0.0, gpc: 1.73, ppc: 5.01, oth: 0.0 },
    "Skeena—Bulkley Valley": { cpc: 46.47, lpc: 11.38, ndp: 20.76, bq: 0.0, gpc: 1.8, ppc: 5.25, oth: 14.34 },
    "South Surrey—White Rock": { cpc: 44.69, lpc: 47.26, ndp: 5.91, bq: 0.0, gpc: 0.0, ppc: 2.14, oth: 0.0 },
    "Surrey Centre": { cpc: 22.68, lpc: 56.53, ndp: 11.47, bq: 0.0, gpc: 0.9, ppc: 2.24, oth: 6.17 },
    "Surrey Newton": { cpc: 15.53, lpc: 64.06, ndp: 10.09, bq: 0.0, gpc: 0.0, ppc: 1.41, oth: 8.91 },
    "Vancouver Centre": { cpc: 26.23, lpc: 56.21, ndp: 13.78, bq: 0.0, gpc: 1.7, ppc: 2.08, oth: 0.0 },
    "Vancouver East": { cpc: 15.06, lpc: 31.54, ndp: 29.59, bq: 0.0, gpc: 3.98, ppc: 2.04, oth: 17.79 },
    "Vancouver Fraserview—South Burnaby": { cpc: 24.82, lpc: 55.39, ndp: 13.38, bq: 0.0, gpc: 0.43, ppc: 1.79, oth: 4.2 },
    "Vancouver Granville": { cpc: 29.77, lpc: 51.85, ndp: 15.06, bq: 0.0, gpc: 1.23, ppc: 1.52, oth: 0.57 },
    "Vancouver Kingsway": { cpc: 19.53, lpc: 46.23, ndp: 26.39, bq: 0.0, gpc: 1.87, ppc: 1.6, oth: 4.37 },
    "Vancouver Quadra": { cpc: 32.49, lpc: 55.67, ndp: 8.17, bq: 0.0, gpc: 2.48, ppc: 1.19, oth: 0.0 },
    "Vernon—Lake Country—Monashee": { cpc: 53.55, lpc: 27.88, ndp: 10.06, bq: 0.0, gpc: 2.36, ppc: 6.14, oth: 0.0 },
    "Victoria": { cpc: 19.04, lpc: 43.65, ndp: 23.1, bq: 0.0, gpc: 5.8, ppc: 2.27, oth: 6.15 },
    "West Vancouver—Sunshine Coast—Sea to Sky Country": { cpc: 34.74, lpc: 45.46, ndp: 12.15, bq: 0.0, gpc: 3.02, ppc: 2.37, oth: 2.26 },
    "Yukon": { cpc: 31.12, lpc: 37.86, ndp: 14.14, bq: 0.0, gpc: 4.82, ppc: 0.0, oth: 12.06 },
    "Northwest Territories": { cpc: 18.03, lpc: 45.83, ndp: 21.53, bq: 0.0, gpc: 2.71, ppc: 0.0, oth: 11.9 },
    "Nunavut": { cpc: 21.62, lpc: 45.1, ndp: 33.28, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 }
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
