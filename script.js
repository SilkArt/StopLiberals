// Electoral data from the CSV

const electoralData = {
    "Avalon": { cpc: 35.0, lpc: 58.57, ndp: 5.83, bq: 0.0, gpc: 0.0, ppc: 0.59, oth: 0.0 },
    "Cape Spear": { cpc: 22.81, lpc: 66.58, ndp: 10.0, bq: 0.0, gpc: 0.0, ppc: 0.6, oth: 0.0 },
    "Central Newfoundland": { cpc: 47.06, lpc: 50.18, ndp: 2.75, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Labrador": { cpc: 34.93, lpc: 53.37, ndp: 10.58, bq: 0.0, gpc: 0.0, ppc: 1.12, oth: 0.0 },
    "Long Range Mountains": { cpc: 42.07, lpc: 51.58, ndp: 4.93, bq: 0.0, gpc: 0.0, ppc: 1.42, oth: 0.0 },
    "St. John's East": { cpc: 22.28, lpc: 60.42, ndp: 16.57, bq: 0.0, gpc: 0.0, ppc: 0.73, oth: 0.0 },
    "Terra Nova—The Peninsulas": { cpc: 42.03, lpc: 53.37, ndp: 3.34, bq: 0.0, gpc: 0.0, ppc: 1.26, oth: 0.0 },
    "Cardigan": { cpc: 32.25, lpc: 57.34, ndp: 3.94, bq: 0.0, gpc: 4.78, ppc: 1.05, oth: 0.65 },
    "Charlottetown": { cpc: 32.46, lpc: 53.06, ndp: 4.33, bq: 0.0, gpc: 9.54, ppc: 0.62, oth: 0.0 },
    "Egmont": { cpc: 32.74, lpc: 52.68, ndp: 3.52, bq: 0.0, gpc: 9.45, ppc: 1.6, oth: 0.0 },
    "Malpeque": { cpc: 34.47, lpc: 47.52, ndp: 3.23, bq: 0.0, gpc: 13.89, ppc: 0.89, oth: 0.01 },
    "Acadie—Annapolis": { cpc: 56.26, lpc: 36.58, ndp: 5.38, bq: 0.0, gpc: 0.0, ppc: 1.78, oth: 0.0 },
    "Cape Breton—Canso—Antigonish": { cpc: 38.11, lpc: 53.61, ndp: 6.19, bq: 0.0, gpc: 0.5, ppc: 1.31, oth: 0.28 },
    "Central Nova": { cpc: 36.08, lpc: 52.9, ndp: 6.85, bq: 0.0, gpc: 1.59, ppc: 1.34, oth: 1.24 },
    "Cumberland—Colchester": { cpc: 49.84, lpc: 40.25, ndp: 5.16, bq: 0.0, gpc: 2.67, ppc: 1.38, oth: 0.71 },
    "Dartmouth—Cole Harbour": { cpc: 3.72, lpc: 72.38, ndp: 16.47, bq: 0.0, gpc: 3.58, ppc: 3.85, oth: 0.0 },
    "Halifax": { cpc: 16.48, lpc: 59.34, ndp: 20.12, bq: 0.0, gpc: 2.72, ppc: 0.83, oth: 0.5 },
    "Halifax West": { cpc: 24.93, lpc: 59.79, ndp: 11.62, bq: 0.0, gpc: 2.7, ppc: 0.81, oth: 0.15 },
    "Kings—Hants": { cpc: 33.98, lpc: 54.21, ndp: 8.2, bq: 0.0, gpc: 2.06, ppc: 1.56, oth: 0.0 },
    "Sackville—Bedford—Preston": { cpc: 29.0, lpc: 56.33, ndp: 11.11, bq: 0.0, gpc: 2.26, ppc: 1.24, oth: 0.06 },
    "South Shore—St. Margarets": { cpc: 47.28, lpc: 42.13, ndp: 7.66, bq: 0.0, gpc: 2.94, ppc: 0.0, oth: 0.0 },
    "Sydney—Glace Bay": { cpc: 38.31, lpc: 51.09, ndp: 8.56, bq: 0.0, gpc: 0.68, ppc: 1.12, oth: 0.24 },
    "Acadie—Bathurst": { cpc: 14.66, lpc: 74.74, ndp: 4.6, bq: 0.0, gpc: 2.84, ppc: 1.9, oth: 1.25 },
    "Beauséjour": { cpc: 20.99, lpc: 65.25, ndp: 4.58, bq: 0.0, gpc: 5.86, ppc: 2.5, oth: 0.82 },
    "Fredericton—Oromocto": { cpc: 36.57, lpc: 43.52, ndp: 5.32, bq: 0.0, gpc: 12.99, ppc: 0.11, oth: 1.49 },
    "Fundy Royal": { cpc: 53.17, lpc: 31.92, ndp: 6.43, bq: 0.0, gpc: 5.47, ppc: 3.01, oth: 0.0 },
    "Madawaska—Restigouche": { cpc: 29.17, lpc: 59.36, ndp: 2.5, bq: 0.0, gpc: 2.72, ppc: 2.42, oth: 3.83 },
    "Miramichi—Grand Lake": { cpc: 48.0, lpc: 42.47, ndp: 3.01, bq: 0.0, gpc: 4.7, ppc: 1.73, oth: 0.08 },
    "Moncton—Dieppe": { cpc: 25.26, lpc: 60.8, ndp: 7.26, bq: 0.0, gpc: 4.53, ppc: 2.15, oth: 0.0 },
    "Saint John—Kennebecasis": { cpc: 39.53, lpc: 50.29, ndp: 5.53, bq: 0.0, gpc: 3.02, ppc: 1.63, oth: 0.0 },
    "Saint John—St. Croix": { cpc: 52.87, lpc: 34.32, ndp: 5.69, bq: 0.0, gpc: 4.33, ppc: 2.63, oth: 0.16 },
    "Tobique—Mactaquac": { cpc: 58.96, lpc: 27.48, ndp: 4.98, bq: 0.0, gpc: 5.21, ppc: 2.46, oth: 0.91 },
    "Abitibi—Baie-James—Nunavik—Eeyou": { cpc: 22.61, lpc: 34.81, ndp: 7.96, bq: 28.83, gpc: 2.07, ppc: 1.38, oth: 2.33 },
    "Abitibi—Témiscamingue": { cpc: 17.21, lpc: 33.38, ndp: 4.31, bq: 39.73, gpc: 2.26, ppc: 1.27, oth: 1.84 },
    "Ahuntsic-Cartierville": { cpc: 10.46, lpc: 62.49, ndp: 7.17, bq: 15.44, gpc: 3.58, ppc: 0.85, oth: 0.0 },
    "Alfred-Pellan": { cpc: 16.81, lpc: 56.78, ndp: 4.74, bq: 17.94, gpc: 1.97, ppc: 0.11, oth: 1.66 },
    "Argenteuil—La Petite-Nation": { cpc: 18.3, lpc: 49.97, ndp: 4.63, bq: 23.74, gpc: 0.48, ppc: 2.01, oth: 0.87 },
    "Beauce": { cpc: 63.57, lpc: 15.25, ndp: 1.83, bq: 10.65, gpc: 1.05, ppc: 6.14, oth: 1.51 },
    "Beauharnois—Salaberry—Soulanges—Huntingdon": { cpc: 17.26, lpc: 37.37, ndp: 5.17, bq: 37.52, gpc: 0.26, ppc: 1.24, oth: 1.18 },
    "Beauport—Limoilou": { cpc: 39.29, lpc: 29.79, ndp: 5.97, bq: 21.3, gpc: 2.45, ppc: 0.11, oth: 1.09 },
    "Bécancour—Nicolet—Saurel—Alnôbak": { cpc: 24.85, lpc: 23.49, ndp: 3.6, bq: 43.19, gpc: 2.13, ppc: 0.92, oth: 1.81 },
    "Bellechasse—Les Etchemins—Lévis": { cpc: 61.82, lpc: 17.37, ndp: 2.79, bq: 14.43, gpc: 1.6, ppc: 0.0, oth: 1.99 },
    "Beloeil—Chambly": { cpc: 12.63, lpc: 33.14, ndp: 6.12, bq: 42.93, gpc: 2.8, ppc: 0.78, oth: 1.6 },
    "Berthier—Maskinongé": { cpc: 17.48, lpc: 23.17, ndp: 25.01, bq: 30.66, gpc: 1.45, ppc: 1.08, oth: 1.17 },
    "Bourassa": { cpc: 8.7, lpc: 70.57, ndp: 4.76, bq: 12.4, gpc: 2.14, ppc: 1.17, oth: 0.26 },
    "Brome—Missisquoi": { cpc: 21.68, lpc: 43.95, ndp: 3.98, bq: 24.7, gpc: 2.98, ppc: 1.11, oth: 1.6 },
    "Brossard—Saint-Lambert": { cpc: 15.06, lpc: 63.86, ndp: 6.24, bq: 13.35, gpc: 0.0, ppc: 0.79, oth: 0.71 },
    "Charlesbourg—Haute-Saint-Charles": { cpc: 54.88, lpc: 22.52, ndp: 3.45, bq: 16.01, gpc: 1.91, ppc: 0.69, oth: 0.55 },
    "Châteauguay—Les Jardins-de-Napierville": { cpc: 16.69, lpc: 47.07, ndp: 5.12, bq: 26.75, gpc: 1.9, ppc: 1.33, oth: 1.14 },
    "Chicoutimi—Le Fjord": { cpc: 50.86, lpc: 21.56, ndp: 2.83, bq: 22.87, gpc: 1.38, ppc: 0.44, oth: 0.06 },
    "Compton—Stanstead": { cpc: 22.91, lpc: 45.35, ndp: 4.74, bq: 21.4, gpc: 3.45, ppc: 1.27, oth: 0.87 },
    "Côte-du-Sud—Rivière-du-Loup—Kataskomiq—Témiscouata": { cpc: 54.97, lpc: 21.93, ndp: 1.98, bq: 19.46, gpc: 0.0, ppc: 0.11, oth: 1.55 },
    "Côte-Nord—Kawawachikamach—Nitassinan": { cpc: 30.84, lpc: 24.83, ndp: 2.91, bq: 39.62, gpc: 0.0, ppc: 0.0, oth: 1.8 },
    "Dorval—Lachine—LaSalle": { cpc: 15.02, lpc: 61.85, ndp: 7.89, bq: 10.55, gpc: 3.33, ppc: 1.35, oth: 0.0 },
    "Drummond": { cpc: 26.16, lpc: 25.76, ndp: 7.78, bq: 36.26, gpc: 0.0, ppc: 0.0, oth: 4.04 },
    "Gaspésie—Les Îles-de-la-Madeleine—Listuguj": { cpc: 11.39, lpc: 51.54, ndp: 2.81, bq: 32.6, gpc: 0.0, ppc: 0.71, oth: 0.95 },
    "Gatineau": { cpc: 14.27, lpc: 60.44, ndp: 5.29, bq: 16.03, gpc: 1.88, ppc: 1.33, oth: 0.76 },
    "Hochelaga—Rosemont-Est": { cpc: 6.7, lpc: 51.49, ndp: 13.82, bq: 23.86, gpc: 2.66, ppc: 0.83, oth: 0.64 },
    "Honoré-Mercier": { cpc: 12.9, lpc: 69.05, ndp: 4.28, bq: 10.63, gpc: 1.72, ppc: 1.31, oth: 0.11 },
    "Hull—Aylmer": { cpc: 13.64, lpc: 62.37, ndp: 7.7, bq: 10.85, gpc: 3.33, ppc: 1.19, oth: 0.92 },
    "Joliette—Manawan": { cpc: 14.28, lpc: 31.57, ndp: 4.17, bq: 44.29, gpc: 2.76, ppc: 1.17, oth: 1.77 },
    "Jonquière": { cpc: 37.57, lpc: 25.94, ndp: 3.4, bq: 30.5, gpc: 2.1, ppc: 0.0, oth: 0.48 },
    "La Pointe-de-l'Île": { cpc: 9.83, lpc: 44.51, ndp: 6.8, bq: 36.45, gpc: 0.0, ppc: 1.03, oth: 1.38 },
    "La Prairie—Atateken": { cpc: 13.89, lpc: 45.45, ndp: 4.88, bq: 32.57, gpc: 2.17, ppc: 0.93, oth: 0.11 },
    "Lac-Saint-Jean": { cpc: 34.48, lpc: 24.32, ndp: 2.13, bq: 37.02, gpc: 2.04, ppc: 0.0, oth: 0.0 },
    "Lac-Saint-Louis": { cpc: 22.3, lpc: 62.39, ndp: 7.5, bq: 3.35, gpc: 3.57, ppc: 0.9, oth: 0.0 },
    "LaSalle—Émard—Verdun": { cpc: 10.35, lpc: 55.37, ndp: 12.33, bq: 15.78, gpc: 3.82, ppc: 1.19, oth: 1.16 },
    "Laurentides—Labelle": { cpc: 15.59, lpc: 32.75, ndp: 3.94, bq: 41.4, gpc: 3.36, ppc: 1.38, oth: 1.57 },
    "Laurier—Sainte-Marie": { cpc: 6.41, lpc: 52.93, ndp: 20.73, bq: 15.29, gpc: 2.97, ppc: 0.64, oth: 1.02 },
    "Laval—Les Îles": { cpc: 22.07, lpc: 57.3, ndp: 4.58, bq: 12.68, gpc: 1.75, ppc: 1.62, oth: 0.0 },
    "Les Pays-d'en-Haut": { cpc: 17.09, lpc: 35.65, ndp: 4.82, bq: 37.12, gpc: 2.09, ppc: 1.63, oth: 1.6 },
    "Lévis—Lotbinière": { cpc: 60.45, lpc: 17.57, ndp: 4.23, bq: 14.8, gpc: 1.54, ppc: 0.74, oth: 0.67 },
    "Longueuil—Charles-LeMoyne": { cpc: 11.34, lpc: 51.91, ndp: 6.74, bq: 25.68, gpc: 3.11, ppc: 1.03, oth: 0.18 },
    "Longueuil—Saint-Hubert": { cpc: 9.6, lpc: 49.92, ndp: 5.27, bq: 30.44, gpc: 3.62, ppc: 0.84, oth: 0.31 },
    "Louis-Hébert": { cpc: 30.07, lpc: 44.43, ndp: 4.28, bq: 17.81, gpc: 3.01, ppc: 0.0, oth: 0.4 },
    "Louis-Saint-Laurent—Akiawenhrahk": { cpc: 61.72, lpc: 19.33, ndp: 2.99, bq: 12.73, gpc: 1.58, ppc: 0.65, oth: 1.0 },
    "Marc-Aurèle-Fortin": { cpc: 15.57, lpc: 54.98, ndp: 5.43, bq: 21.77, gpc: 0.0, ppc: 0.98, oth: 1.27 },
    "Mégantic—L'Érable—Lotbinière": { cpc: 67.04, lpc: 15.0, ndp: 1.76, bq: 12.36, gpc: 1.45, ppc: 1.07, oth: 1.33 },
    "Mirabel": { cpc: 19.36, lpc: 33.35, ndp: 5.99, bq: 35.54, gpc: 2.94, ppc: 1.42, oth: 1.39 },
    "Mount Royal": { cpc: 27.42, lpc: 61.48, ndp: 4.81, bq: 2.47, gpc: 2.91, ppc: 0.77, oth: 0.14 },
    "Mont-Saint-Bruno—L'Acadie": { cpc: 13.71, lpc: 45.34, ndp: 5.62, bq: 34.28, gpc: 0.2, ppc: 0.76, oth: 0.09 },
    "Montcalm": { cpc: 17.61, lpc: 28.31, ndp: 4.52, bq: 42.77, gpc: 3.6, ppc: 1.65, oth: 1.53 },
    "Montmorency—Charlevoix": { cpc: 44.0, lpc: 24.66, ndp: 2.87, bq: 25.4, gpc: 1.44, ppc: 0.63, oth: 0.99 },
    "Notre-Dame-de-Grâce—Westmount": { cpc: 16.68, lpc: 61.56, ndp: 11.9, bq: 3.95, gpc: 4.63, ppc: 1.03, oth: 0.25 },
    "Outremont": { cpc: 9.9, lpc: 56.4, ndp: 17.65, bq: 11.14, gpc: 3.95, ppc: 0.74, oth: 0.23 },
    "Papineau": { cpc: 6.43, lpc: 62.72, ndp: 14.38, bq: 10.64, gpc: 3.96, ppc: 0.8, oth: 1.08 },
    "Pierre-Boucher—Les Patriotes—Verchères": { cpc: 13.17, lpc: 36.31, ndp: 5.51, bq: 43.21, gpc: 0.0, ppc: 0.75, oth: 1.06 },
    "Pierrefonds—Dollard": { cpc: 24.74, lpc: 62.56, ndp: 6.55, bq: 5.01, gpc: 0.0, ppc: 1.13, oth: 0.0 },
    "Pontiac—Kitigan Zibi": { cpc: 26.61, lpc: 51.26, ndp: 6.74, bq: 10.06, gpc: 3.37, ppc: 1.43, oth: 0.53 },
    "Portneuf—Jacques-Cartier": { cpc: 63.12, lpc: 17.17, ndp: 2.72, bq: 15.26, gpc: 0.0, ppc: 0.76, oth: 0.97 },
    "Québec Centre": { cpc: 23.69, lpc: 44.16, ndp: 7.98, bq: 20.35, gpc: 2.9, ppc: 0.53, oth: 0.39 },
    "Repentigny": { cpc: 12.94, lpc: 38.69, ndp: 5.22, bq: 40.06, gpc: 0.0, ppc: 0.0, oth: 3.09 },
    "Richmond—Arthabaska": { cpc: 61.3, lpc: 17.27, ndp: 2.62, bq: 16.22, gpc: 0.0, ppc: 1.13, oth: 1.46 },
    "Rimouski—La Matapédia": { cpc: 16.84, lpc: 31.22, ndp: 4.21, bq: 43.53, gpc: 0.0, ppc: 0.8, oth: 3.41 },
    "Rivière-des-Mille-Îles": { cpc: 14.24, lpc: 46.16, ndp: 4.78, bq: 30.02, gpc: 2.36, ppc: 0.98, oth: 1.46 },
    "Rivière-du-Nord": { cpc: 18.06, lpc: 31.68, ndp: 4.93, bq: 41.27, gpc: 0.4, ppc: 1.47, oth: 2.18 },
    "Rosemont—La Petite-Patrie": { cpc: 6.36, lpc: 34.64, ndp: 36.93, bq: 18.12, gpc: 3.53, ppc: 0.0, oth: 0.42 },
    "Saint-Hyacinthe—Bagot—Acton": { cpc: 20.05, lpc: 31.64, ndp: 8.25, bq: 37.53, gpc: 0.0, ppc: 1.04, oth: 1.49 },
    "Saint-Jean": { cpc: 17.93, lpc: 37.2, ndp: 4.89, bq: 34.52, gpc: 2.81, ppc: 0.0, oth: 2.64 },
    "Saint-Laurent": { cpc: 21.65, lpc: 65.96, ndp: 6.08, bq: 5.01, gpc: 0.12, ppc: 0.96, oth: 0.22 },
    "Saint-Léonard—Saint-Michel": { cpc: 12.31, lpc: 76.94, ndp: 4.61, bq: 5.01, gpc: 0.0, ppc: 1.13, oth: 0.0 },
    "Saint-Maurice—Champlain": { cpc: 22.75, lpc: 50.42, ndp: 3.06, bq: 20.25, gpc: 1.54, ppc: 0.0, oth: 1.99 },
    "Shefford": { cpc: 16.84, lpc: 43.72, ndp: 3.53, bq: 31.04, gpc: 2.31, ppc: 1.24, oth: 1.32 },
    "Sherbrooke": { cpc: 17.29, lpc: 47.52, ndp: 8.97, bq: 20.83, gpc: 3.62, ppc: 0.85, oth: 0.92 },
    "Terrebonne": { cpc: 15.07, lpc: 39.8, ndp: 4.58, bq: 31.81, gpc: 1.92, ppc: 0.99, oth: 5.82 },
    "Thérèse-De Blainville": { cpc: 15.26, lpc: 45.7, ndp: 4.81, bq: 30.14, gpc: 2.5, ppc: 0.95, oth: 0.64 },
    "Trois-Rivières": { cpc: 37.55, lpc: 34.42, ndp: 4.93, bq: 20.11, gpc: 1.55, ppc: 0.63, oth: 0.82 },
    "Vaudreuil": { cpc: 20.42, lpc: 55.29, ndp: 6.3, bq: 13.85, gpc: 2.93, ppc: 0.0, oth: 1.21 },
    "Ville-Marie—Le Sud-Ouest—Île-des-Sœurs": { cpc: 16.12, lpc: 60.71, ndp: 10.87, bq: 8.0, gpc: 3.14, ppc: 0.84, oth: 0.32 },
    "Vimy": { cpc: 17.65, lpc: 60.07, ndp: 5.68, bq: 15.17, gpc: 0.0, ppc: 1.42, oth: 0.0 },
    "Ajax": { cpc: 29.71, lpc: 62.71, ndp: 5.54, bq: 0.0, gpc: 2.03, ppc: 0.0, oth: 0.0 },
    "Algonquin—Renfrew—Pembroke": { cpc: 60.91, lpc: 23.55, ndp: 9.11, bq: 0.0, gpc: 1.69, ppc: 2.19, oth: 2.55 },
    "Aurora—Oak Ridges—Richmond Hill": { cpc: 45.02, lpc: 47.27, ndp: 3.03, bq: 0.0, gpc: 0.14, ppc: 0.96, oth: 3.56 },
    "Barrie South—Innisfil": { cpc: 57.04, lpc: 34.15, ndp: 6.67, bq: 0.0, gpc: 0.0, ppc: 2.14, oth: 0.0 },
    "Barrie—Springwater—Oro-Medonte": { cpc: 54.78, lpc: 35.96, ndp: 7.03, bq: 0.0, gpc: 0.18, ppc: 1.93, oth: 0.12 },
    "Bay of Quinte": { cpc: 47.58, lpc: 42.88, ndp: 6.32, bq: 0.0, gpc: 1.87, ppc: 1.35, oth: 0.0 },
    "Beaches—East York": { cpc: 17.27, lpc: 67.25, ndp: 9.57, bq: 0.0, gpc: 2.37, ppc: 0.88, oth: 2.65 },
    "Bowmanville—Oshawa North": { cpc: 52.58, lpc: 35.76, ndp: 7.63, bq: 0.0, gpc: 0.0, ppc: 1.48, oth: 2.55 },
    "Brampton Centre": { cpc: 35.51, lpc: 53.98, ndp: 6.3, bq: 0.0, gpc: 0.0, ppc: 0.95, oth: 3.25 },
    "Brampton—Chinguacousy Park": { cpc: 33.84, lpc: 54.79, ndp: 6.49, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 4.88 },
    "Brampton East": { cpc: 32.73, lpc: 60.24, ndp: 6.32, bq: 0.0, gpc: 0.0, ppc: 0.71, oth: 0.0 },
    "Brampton North—Caledon": { cpc: 37.03, lpc: 56.71, ndp: 5.5, bq: 0.0, gpc: 0.33, ppc: 0.25, oth: 0.18 },
    "Brampton South": { cpc: 33.11, lpc: 59.83, ndp: 5.38, bq: 0.0, gpc: 0.0, ppc: 0.75, oth: 0.93 },
    "Brampton West": { cpc: 30.52, lpc: 61.23, ndp: 4.97, bq: 0.0, gpc: 0.0, ppc: 0.64, oth: 2.64 },
    "Brantford—Brant South—Six Nations": { cpc: 49.99, lpc: 34.17, ndp: 8.94, bq: 0.0, gpc: 2.38, ppc: 2.55, oth: 1.97 },
    "Bruce—Grey—Owen Sound": { cpc: 57.23, lpc: 29.01, ndp: 5.59, bq: 0.0, gpc: 2.58, ppc: 2.18, oth: 3.41 },
    "Burlington": { cpc: 41.74, lpc: 50.64, ndp: 4.3, bq: 0.0, gpc: 1.61, ppc: 1.05, oth: 0.66 },
    "Burlington North—Milton West": { cpc: 40.83, lpc: 52.79, ndp: 3.79, bq: 0.0, gpc: 1.57, ppc: 1.03, oth: 0.0 },
    "Cambridge": { cpc: 41.59, lpc: 46.03, ndp: 7.36, bq: 0.0, gpc: 2.99, ppc: 2.03, oth: 0.0 },
    "Carleton": { cpc: 57.88, lpc: 35.15, ndp: 4.49, bq: 0.0, gpc: 1.73, ppc: 0.72, oth: 0.04 },
    "Chatham-Kent—Leamington": { cpc: 54.03, lpc: 33.64, ndp: 6.57, bq: 0.0, gpc: 1.39, ppc: 4.37, oth: 0.0 },
    "Davenport": { cpc: 15.2, lpc: 60.33, ndp: 19.58, bq: 0.0, gpc: 2.44, ppc: 1.07, oth: 1.39 },
    "Don Valley North": { cpc: 36.07, lpc: 57.8, ndp: 3.89, bq: 0.0, gpc: 1.45, ppc: 0.76, oth: 0.04 },
    "Don Valley West": { cpc: 32.71, lpc: 61.86, ndp: 3.54, bq: 0.0, gpc: 0.84, ppc: 0.65, oth: 0.4 },
    "Dufferin—Caledon": { cpc: 56.39, lpc: 32.52, ndp: 4.21, bq: 0.0, gpc: 3.76, ppc: 1.91, oth: 1.21 },
    "Eglinton—Lawrence": { cpc: 40.3, lpc: 52.97, ndp: 3.58, bq: 0.0, gpc: 2.4, ppc: 0.75, oth: 0.0 },
    "Elgin—St. Thomas—London South": { cpc: 61.13, lpc: 24.1, ndp: 7.09, bq: 0.0, gpc: 1.99, ppc: 3.53, oth: 2.16 },
    "Essex": { cpc: 56.66, lpc: 21.11, ndp: 15.47, bq: 0.0, gpc: 1.24, ppc: 3.29, oth: 2.23 },
    "Etobicoke Centre": { cpc: 38.92, lpc: 54.31, ndp: 4.34, bq: 0.0, gpc: 0.26, ppc: 1.75, oth: 0.41 },
    "Etobicoke—Lakeshore": { cpc: 37.06, lpc: 53.15, ndp: 5.44, bq: 0.0, gpc: 1.75, ppc: 1.17, oth: 1.43 },
    "Etobicoke North": { cpc: 27.96, lpc: 63.96, ndp: 4.1, bq: 0.0, gpc: 0.0, ppc: 1.11, oth: 2.88 },
    "Flamborough—Glanbrook—Brant North": { cpc: 51.7, lpc: 37.97, ndp: 6.1, bq: 0.0, gpc: 2.09, ppc: 1.8, oth: 0.35 },
    "Guelph": { cpc: 28.93, lpc: 50.43, ndp: 9.6, bq: 0.0, gpc: 7.01, ppc: 1.34, oth: 2.68 },
    "Haldimand—Norfolk": { cpc: 55.13, lpc: 31.63, ndp: 5.46, bq: 0.0, gpc: 0.0, ppc: 2.85, oth: 4.93 },
    "Haliburton—Kawartha Lakes": { cpc: 60.43, lpc: 27.42, ndp: 5.85, bq: 0.0, gpc: 2.07, ppc: 1.86, oth: 2.37 },
    "Hamilton Centre": { cpc: 25.47, lpc: 40.73, ndp: 25.58, bq: 0.0, gpc: 2.97, ppc: 2.36, oth: 2.89 },
    "Hamilton East—Stoney Creek": { cpc: 37.92, lpc: 48.61, ndp: 9.64, bq: 0.0, gpc: 1.69, ppc: 2.13, oth: 0.0 },
    "Hamilton Mountain": { cpc: 33.34, lpc: 45.38, ndp: 14.84, bq: 0.0, gpc: 1.93, ppc: 1.96, oth: 2.54 },
    "Hamilton West—Ancaster—Dundas": { cpc: 34.88, lpc: 52.52, ndp: 8.36, bq: 0.0, gpc: 2.26, ppc: 1.15, oth: 0.83 },
    "Hastings—Lennox and Addington—Tyendinaga": { cpc: 50.15, lpc: 37.48, ndp: 4.29, bq: 0.0, gpc: 1.42, ppc: 1.46, oth: 5.2 },
    "Humber River—Black Creek": { cpc: 20.17, lpc: 69.51, ndp: 6.72, bq: 0.0, gpc: 1.01, ppc: 1.06, oth: 1.54 },
    "Huron—Bruce": { cpc: 58.9, lpc: 29.91, ndp: 6.05, bq: 0.0, gpc: 0.0, ppc: 1.96, oth: 3.19 },
    "Kanata": { cpc: 42.27, lpc: 48.92, ndp: 5.96, bq: 0.0, gpc: 2.11, ppc: 0.74, oth: 0.0 },
    "Kapuskasing—Timmins—Mushkegowuk": { cpc: 37.38, lpc: 38.48, ndp: 18.78, bq: 0.0, gpc: 0.42, ppc: 4.25, oth: 0.69 },
    "Kenora—Kiiwetinoong": { cpc: 57.22, lpc: 25.91, ndp: 13.6, bq: 0.0, gpc: 1.33, ppc: 1.94, oth: 0.0 },
    "Kingston and the Islands": { cpc: 31.66, lpc: 51.84, ndp: 13.12, bq: 0.0, gpc: 2.29, ppc: 1.05, oth: 0.04 },
    "King—Vaughan": { cpc: 49.02, lpc: 46.31, ndp: 2.56, bq: 0.0, gpc: 1.0, ppc: 1.11, oth: 0.0 },
    "Kitchener Centre": { cpc: 33.21, lpc: 22.93, ndp: 8.27, bq: 0.0, gpc: 32.29, ppc: 2.07, oth: 1.23 },
    "Kitchener—Conestoga": { cpc: 44.3, lpc: 44.53, ndp: 4.96, bq: 0.0, gpc: 4.18, ppc: 1.98, oth: 0.04 },
    "Kitchener South—Hespeler": { cpc: 42.24, lpc: 43.98, ndp: 6.83, bq: 0.0, gpc: 2.96, ppc: 1.87, oth: 2.12 },
    "Lanark—Frontenac": { cpc: 58.38, lpc: 29.98, ndp: 6.33, bq: 0.0, gpc: 2.29, ppc: 1.7, oth: 1.31 },
    "Leeds—Grenville—Thousand Islands—Rideau Lakes": { cpc: 59.68, lpc: 29.42, ndp: 6.24, bq: 0.0, gpc: 3.08, ppc: 1.58, oth: 0.0 },
    "London Centre": { cpc: 32.74, lpc: 48.98, ndp: 14.17, bq: 0.0, gpc: 1.88, ppc: 1.59, oth: 0.65 },
    "London—Fanshawe": { cpc: 37.59, lpc: 35.28, ndp: 23.81, bq: 0.0, gpc: 0.0, ppc: 3.32, oth: 0.0 },
    "London West": { cpc: 40.92, lpc: 43.66, ndp: 9.69, bq: 0.0, gpc: 0.0, ppc: 1.4, oth: 4.34 },
    "Markham—Stouffville": { cpc: 38.22, lpc: 56.03, ndp: 3.42, bq: 0.0, gpc: 1.57, ppc: 0.76, oth: 0.0 },
    "Markham—Thornhill": { cpc: 28.68, lpc: 66.1, ndp: 3.21, bq: 0.0, gpc: 1.57, ppc: 0.44, oth: 0.0 },
    "Markham—Unionville": { cpc: 44.94, lpc: 50.47, ndp: 2.45, bq: 0.0, gpc: 2.14, ppc: 0.0, oth: 0.0 },
    "Middlesex—London": { cpc: 55.14, lpc: 32.69, ndp: 7.68, bq: 0.0, gpc: 1.6, ppc: 2.21, oth: 0.68 },
    "Milton East—Halton Hills South": { cpc: 46.42, lpc: 46.38, ndp: 3.81, bq: 0.0, gpc: 2.12, ppc: 1.28, oth: 0.0 },
    "Mississauga Centre": { cpc: 32.54, lpc: 60.04, ndp: 4.51, bq: 0.0, gpc: 1.33, ppc: 1.1, oth: 0.48 },
    "Mississauga East—Cooksville": { cpc: 35.31, lpc: 55.51, ndp: 4.15, bq: 0.0, gpc: 0.26, ppc: 1.68, oth: 3.09 },
    "Mississauga—Erin Mills": { cpc: 37.36, lpc: 56.39, ndp: 4.06, bq: 0.0, gpc: 1.32, ppc: 0.88, oth: 0.0 },
    "Mississauga—Lakeshore": { cpc: 43.03, lpc: 49.61, ndp: 3.85, bq: 0.0, gpc: 1.78, ppc: 1.11, oth: 0.63 },
    "Mississauga—Malton": { cpc: 33.76, lpc: 57.08, ndp: 5.33, bq: 0.0, gpc: 1.48, ppc: 0.08, oth: 2.28 },
    "Mississauga—Streetsville": { cpc: 38.53, lpc: 52.52, ndp: 4.8, bq: 0.0, gpc: 1.73, ppc: 0.98, oth: 1.44 },
    "Nepean": { cpc: 38.65, lpc: 52.35, ndp: 6.64, bq: 0.0, gpc: 1.63, ppc: 0.74, oth: 0.0 },
    "Newmarket—Aurora": { cpc: 42.71, lpc: 48.41, ndp: 4.57, bq: 0.0, gpc: 1.49, ppc: 1.09, oth: 1.73 },
    "New Tecumseth—Gwillimbury": { cpc: 55.58, lpc: 34.88, ndp: 5.38, bq: 0.0, gpc: 1.05, ppc: 2.04, oth: 1.08 },
    "Niagara Falls—Niagara-on-the-Lake": { cpc: 45.81, lpc: 42.58, ndp: 7.72, bq: 0.0, gpc: 1.73, ppc: 2.17, oth: 0.0 },
    "Niagara South": { cpc: 43.11, lpc: 42.02, ndp: 10.39, bq: 0.0, gpc: 1.78, ppc: 2.69, oth: 0.0 },
    "Niagara West": { cpc: 50.74, lpc: 35.36, ndp: 5.69, bq: 0.0, gpc: 2.34, ppc: 1.91, oth: 3.97 },
    "Nipissing—Timiskaming": { cpc: 40.66, lpc: 46.46, ndp: 10.52, bq: 0.0, gpc: 0.0, ppc: 2.36, oth: 0.0 },
    "Northumberland—Clarke": { cpc: 51.35, lpc: 39.24, ndp: 5.75, bq: 0.0, gpc: 2.17, ppc: 1.49, oth: 0.0 },
    "Oakville East": { cpc: 43.63, lpc: 50.53, ndp: 3.68, bq: 0.0, gpc: 1.31, ppc: 0.85, oth: 0.0 },
    "Oakville West": { cpc: 42.48, lpc: 51.82, ndp: 3.4, bq: 0.0, gpc: 1.38, ppc: 0.93, oth: 0.0 },
    "Orléans": { cpc: 32.5, lpc: 58.64, ndp: 5.79, bq: 0.0, gpc: 1.33, ppc: 0.7, oth: 1.05 },
    "Oshawa": { cpc: 52.67, lpc: 30.3, ndp: 13.36, bq: 0.0, gpc: 1.47, ppc: 2.21, oth: 0.0 },
    "Ottawa Centre": { cpc: 21.0, lpc: 57.66, ndp: 14.91, bq: 0.0, gpc: 2.61, ppc: 0.67, oth: 3.14 },
    "Ottawa South": { cpc: 31.65, lpc: 57.3, ndp: 7.52, bq: 0.0, gpc: 1.87, ppc: 0.85, oth: 0.81 },
    "Ottawa—Vanier—Gloucester": { cpc: 24.65, lpc: 58.13, ndp: 9.87, bq: 0.0, gpc: 2.65, ppc: 0.89, oth: 3.8 },
    "Ottawa West—Nepean": { cpc: 32.74, lpc: 53.12, ndp: 8.45, bq: 0.0, gpc: 2.47, ppc: 0.88, oth: 2.34 },
    "Oxford": { cpc: 58.02, lpc: 25.34, ndp: 8.08, bq: 0.0, gpc: 2.42, ppc: 3.08, oth: 3.06 },
    "Parry Sound—Muskoka": { cpc: 58.02, lpc: 25.89, ndp: 7.2, bq: 0.0, gpc: 4.89, ppc: 2.13, oth: 1.87 },
    "Perth—Wellington": { cpc: 59.79, lpc: 29.96, ndp: 7.48, bq: 0.0, gpc: 0.0, ppc: 2.77, oth: 0.0 },
    "Peterborough": { cpc: 46.7, lpc: 41.01, ndp: 8.07, bq: 0.0, gpc: 1.93, ppc: 1.2, oth: 1.1 },
    "Pickering—Brooklin": { cpc: 39.07, lpc: 54.27, ndp: 5.43, bq: 0.0, gpc: 0.21, ppc: 1.02, oth: 0.0 },
    "Prescott—Russell—Cumberland": { cpc: 36.21, lpc: 52.14, ndp: 4.26, bq: 0.0, gpc: 1.65, ppc: 1.68, oth: 4.07 },
    "Richmond Hill South": { cpc: 40.63, lpc: 49.55, ndp: 3.24, bq: 0.0, gpc: 0.0, ppc: 0.72, oth: 5.86 },
    "Sarnia—Lambton—Bkejwanong": { cpc: 59.05, lpc: 24.32, ndp: 9.42, bq: 0.0, gpc: 1.37, ppc: 3.26, oth: 2.59 },
    "Sault Ste. Marie—Algoma": { cpc: 44.89, lpc: 40.33, ndp: 11.54, bq: 0.0, gpc: 0.58, ppc: 1.54, oth: 1.12 },
    "Scarborough—Agincourt": { cpc: 32.34, lpc: 61.61, ndp: 3.95, bq: 0.0, gpc: 1.38, ppc: 0.72, oth: 0.0 },
    "Scarborough Centre—Don Valley East": { cpc: 28.78, lpc: 63.26, ndp: 5.52, bq: 0.0, gpc: 0.0, ppc: 1.13, oth: 1.31 },
    "Scarborough—Guildwood—Rouge Park": { cpc: 24.82, lpc: 68.11, ndp: 5.32, bq: 0.0, gpc: 0.0, ppc: 0.79, oth: 0.96 },
    "Scarborough North": { cpc: 19.69, lpc: 72.04, ndp: 4.46, bq: 0.0, gpc: 0.0, ppc: 0.62, oth: 3.2 },
    "Scarborough Southwest": { cpc: 23.71, lpc: 65.92, ndp: 6.5, bq: 0.0, gpc: 1.88, ppc: 0.77, oth: 1.21 },
    "Scarborough—Woburn": { cpc: 24.98, lpc: 66.14, ndp: 5.15, bq: 0.0, gpc: 0.0, ppc: 0.8, oth: 2.93 },
    "Simcoe—Grey": { cpc: 55.38, lpc: 32.17, ndp: 5.44, bq: 0.0, gpc: 3.51, ppc: 1.89, oth: 1.61 },
    "Simcoe North": { cpc: 50.6, lpc: 36.55, ndp: 6.76, bq: 0.0, gpc: 2.65, ppc: 2.14, oth: 1.3 },
    "Spadina—Harbourfront": { cpc: 29.14, lpc: 50.73, ndp: 16.06, bq: 0.0, gpc: 3.12, ppc: 0.95, oth: 0.0 },
    "St. Catharines": { cpc: 40.36, lpc: 46.65, ndp: 9.39, bq: 0.0, gpc: 1.68, ppc: 1.92, oth: 0.0 },
    "Stormont—Dundas—Glengarry": { cpc: 62.93, lpc: 28.29, ndp: 4.46, bq: 0.0, gpc: 1.94, ppc: 2.07, oth: 0.31 },
    "Sudbury": { cpc: 36.54, lpc: 45.41, ndp: 13.42, bq: 0.0, gpc: 1.89, ppc: 1.88, oth: 0.86 },
    "Sudbury East—Manitoulin—Nickel Belt": { cpc: 36.85, lpc: 43.28, ndp: 14.68, bq: 0.0, gpc: 1.72, ppc: 2.84, oth: 0.63 },
    "Taiaiako’n—Parkdale—High Park": { cpc: 18.37, lpc: 58.26, ndp: 18.69, bq: 0.0, gpc: 1.89, ppc: 1.03, oth: 1.77 },
    "Thornhill": { cpc: 56.38, lpc: 38.85, ndp: 2.3, bq: 0.0, gpc: 1.3, ppc: 1.17, oth: 0.0 },
    "Thunder Bay—Rainy River": { cpc: 38.66, lpc: 44.68, ndp: 13.27, bq: 0.0, gpc: 1.37, ppc: 2.03, oth: 0.0 },
    "Thunder Bay—Superior North": { cpc: 31.04, lpc: 51.72, ndp: 12.68, bq: 0.0, gpc: 1.66, ppc: 1.78, oth: 1.11 },
    "Toronto Centre": { cpc: 16.2, lpc: 61.74, ndp: 11.63, bq: 0.0, gpc: 7.31, ppc: 0.69, oth: 2.44 },
    "Toronto—Danforth": { cpc: 16.21, lpc: 61.67, ndp: 15.35, bq: 0.0, gpc: 1.83, ppc: 0.74, oth: 4.2 },
    "Toronto—St. Paul's": { cpc: 30.91, lpc: 57.04, ndp: 6.55, bq: 0.0, gpc: 4.7, ppc: 0.68, oth: 0.12 },
    "University—Rosedale": { cpc: 22.66, lpc: 58.02, ndp: 12.53, bq: 0.0, gpc: 4.06, ppc: 0.76, oth: 1.96 },
    "Vaughan—Woodbridge": { cpc: 44.11, lpc: 49.95, ndp: 2.68, bq: 0.0, gpc: 0.76, ppc: 1.38, oth: 1.12 },
    "Waterloo": { cpc: 33.2, lpc: 54.36, ndp: 8.17, bq: 0.0, gpc: 2.99, ppc: 1.28, oth: 0.0 },
    "Wellington—Halton Hills North": { cpc: 54.31, lpc: 34.71, ndp: 4.9, bq: 0.0, gpc: 3.95, ppc: 1.68, oth: 0.46 },
    "Whitby": { cpc: 39.95, lpc: 51.62, ndp: 5.9, bq: 0.0, gpc: 1.35, ppc: 1.19, oth: 0.0 },
    "Willowdale": { cpc: 37.56, lpc: 56.12, ndp: 4.04, bq: 0.0, gpc: 1.59, ppc: 0.69, oth: 0.0 },
    "Windsor—Tecumseh—Lakeshore": { cpc: 37.3, lpc: 42.09, ndp: 14.77, bq: 0.0, gpc: 1.21, ppc: 3.31, oth: 1.32 },
    "Windsor West": { cpc: 29.58, lpc: 41.97, ndp: 23.91, bq: 0.0, gpc: 0.0, ppc: 2.97, oth: 1.56 },
    "York Centre": { cpc: 42.4, lpc: 52.35, ndp: 4.03, bq: 0.0, gpc: 0.0, ppc: 1.22, oth: 0.0 },
    "York—Durham": { cpc: 59.41, lpc: 32.34, ndp: 5.1, bq: 0.0, gpc: 0.46, ppc: 1.71, oth: 0.98 },
    "York South—Weston—Etobicoke": { cpc: 26.35, lpc: 64.39, ndp: 6.25, bq: 0.0, gpc: 1.62, ppc: 1.35, oth: 0.04 },
    "Brandon—Souris": { cpc: 64.87, lpc: 23.7, ndp: 9.76, bq: 0.0, gpc: 0.02, ppc: 1.57, oth: 0.08 },
    "Churchill—Keewatinook Aski": { cpc: 26.17, lpc: 49.52, ndp: 20.2, bq: 0.0, gpc: 3.16, ppc: 0.95, oth: 0.0 },
    "Elmwood—Transcona": { cpc: 35.75, lpc: 33.97, ndp: 27.05, bq: 0.0, gpc: 1.9, ppc: 1.31, oth: 0.02 },
    "Kildonan—St. Paul": { cpc: 40.41, lpc: 48.27, ndp: 9.93, bq: 0.0, gpc: 0.28, ppc: 0.9, oth: 0.22 },
    "Portage—Lisgar": { cpc: 61.54, lpc: 23.5, ndp: 6.94, bq: 0.0, gpc: 0.0, ppc: 4.5, oth: 3.51 },
    "Provencher": { cpc: 51.09, lpc: 31.7, ndp: 5.66, bq: 0.0, gpc: 2.56, ppc: 3.22, oth: 5.77 },
    "Riding Mountain": { cpc: 62.81, lpc: 24.57, ndp: 6.75, bq: 0.0, gpc: 2.12, ppc: 1.95, oth: 1.79 },
    "St. Boniface—St. Vital": { cpc: 23.37, lpc: 65.89, ndp: 7.66, bq: 0.0, gpc: 1.18, ppc: 0.62, oth: 1.29 },
    "Selkirk—Interlake—Eastman": { cpc: 60.97, lpc: 25.75, ndp: 9.11, bq: 0.0, gpc: 2.73, ppc: 1.43, oth: 0.0 },
    "Winnipeg Centre": { cpc: 13.66, lpc: 56.09, ndp: 23.2, bq: 0.0, gpc: 2.41, ppc: 0.8, oth: 3.84 },
    "Winnipeg North": { cpc: 10.81, lpc: 77.5, ndp: 9.75, bq: 0.0, gpc: 0.93, ppc: 0.57, oth: 0.44 },
    "Winnipeg South": { cpc: 25.46, lpc: 68.1, ndp: 4.89, bq: 0.0, gpc: 1.09, ppc: 0.45, oth: 0.0 },
    "Winnipeg South Centre": { cpc: 22.8, lpc: 66.71, ndp: 7.34, bq: 0.0, gpc: 2.04, ppc: 0.4, oth: 0.71 },
    "Winnipeg West": { cpc: 33.41, lpc: 59.03, ndp: 5.41, bq: 0.0, gpc: 1.62, ppc: 0.49, oth: 0.03 },
    "Battlefords—Lloydminster—Meadow Lake": { cpc: 68.06, lpc: 13.47, ndp: 5.73, bq: 0.0, gpc: 0.74, ppc: 1.06, oth: 10.95 },
    "Carlton Trail—Eagle Creek": { cpc: 74.8, lpc: 10.94, ndp: 6.77, bq: 0.0, gpc: 0.97, ppc: 1.78, oth: 4.74 },
    "Desnethé—Missinippi—Churchill River": { cpc: 19.11, lpc: 68.29, ndp: 8.54, bq: 0.0, gpc: 0.9, ppc: 0.44, oth: 2.72 },
    "Moose Jaw—Lake Centre—Lanigan": { cpc: 70.59, lpc: 12.68, ndp: 9.6, bq: 0.0, gpc: 1.14, ppc: 2.29, oth: 3.7 },
    "Prince Albert": { cpc: 66.46, lpc: 22.24, ndp: 6.83, bq: 0.0, gpc: 1.08, ppc: 1.24, oth: 2.16 },
    "Regina—Lewvan": { cpc: 51.77, lpc: 29.12, ndp: 17.11, bq: 0.0, gpc: 1.32, ppc: 0.68, oth: 0.0 },
    "Regina—Qu'Appelle": { cpc: 65.9, lpc: 20.33, ndp: 10.86, bq: 0.0, gpc: 1.96, ppc: 0.94, oth: 0.0 },
    "Regina—Wascana": { cpc: 45.85, lpc: 44.92, ndp: 7.27, bq: 0.0, gpc: 1.4, ppc: 0.56, oth: 0.0 },
    "Saskatoon South": { cpc: 54.27, lpc: 28.78, ndp: 14.79, bq: 0.0, gpc: 1.29, ppc: 0.87, oth: 0.0 },
    "Saskatoon—University": { cpc: 55.68, lpc: 22.91, ndp: 18.02, bq: 0.0, gpc: 1.04, ppc: 0.85, oth: 1.5 },
    "Saskatoon West": { cpc: 57.04, lpc: 18.73, ndp: 21.65, bq: 0.0, gpc: 1.25, ppc: 1.34, oth: 0.0 },
    "Souris—Moose Mountain": { cpc: 81.26, lpc: 8.16, ndp: 3.77, bq: 0.0, gpc: 0.06, ppc: 1.71, oth: 5.05 },
    "Swift Current—Grasslands—Kindersley": { cpc: 75.88, lpc: 7.83, ndp: 4.71, bq: 0.0, gpc: 0.84, ppc: 1.39, oth: 9.35 },
    "Yorkton—Melville": { cpc: 74.54, lpc: 12.43, ndp: 5.75, bq: 0.0, gpc: 1.79, ppc: 1.74, oth: 3.75 },
    "Airdrie—Cochrane": { cpc: 68.54, lpc: 17.43, ndp: 7.52, bq: 0.0, gpc: 3.17, ppc: 0.91, oth: 2.42 },
    "Battle River—Crowfoot": { cpc: 82.38, lpc: 7.37, ndp: 4.93, bq: 0.0, gpc: 2.32, ppc: 1.04, oth: 1.96 },
    "Bow River": { cpc: 79.3, lpc: 13.45, ndp: 4.7, bq: 0.0, gpc: 0.0, ppc: 1.09, oth: 1.46 },
    "Calgary Centre": { cpc: 47.51, lpc: 42.06, ndp: 6.75, bq: 0.0, gpc: 3.34, ppc: 0.0, oth: 0.35 },
    "Calgary Confederation": { cpc: 43.93, lpc: 40.2, ndp: 7.5, bq: 0.0, gpc: 7.8, ppc: 0.43, oth: 0.14 },
    "Calgary Crowfoot": { cpc: 55.45, lpc: 32.83, ndp: 7.19, bq: 0.0, gpc: 3.73, ppc: 0.45, oth: 0.34 },
    "Calgary East": { cpc: 55.96, lpc: 29.43, ndp: 8.43, bq: 0.0, gpc: 4.94, ppc: 0.74, oth: 0.5 },
    "Calgary Heritage": { cpc: 61.73, lpc: 25.69, ndp: 8.05, bq: 0.0, gpc: 3.33, ppc: 0.52, oth: 0.68 },
    "Calgary McKnight": { cpc: 31.08, lpc: 59.58, ndp: 6.47, bq: 0.0, gpc: 2.27, ppc: 0.35, oth: 0.26 },
    "Calgary Midnapore": { cpc: 66.11, lpc: 20.49, ndp: 8.95, bq: 0.0, gpc: 3.26, ppc: 0.65, oth: 0.55 },
    "Calgary Nose Hill": { cpc: 56.7, lpc: 31.09, ndp: 7.64, bq: 0.0, gpc: 3.66, ppc: 0.48, oth: 0.44 },
    "Calgary Shepard": { cpc: 65.13, lpc: 22.21, ndp: 7.51, bq: 0.0, gpc: 3.98, ppc: 0.59, oth: 0.58 },
    "Calgary Signal Hill": { cpc: 60.06, lpc: 29.18, ndp: 6.25, bq: 0.0, gpc: 3.76, ppc: 0.39, oth: 0.36 },
    "Calgary Skyview": { cpc: 43.01, lpc: 47.51, ndp: 6.96, bq: 0.0, gpc: 1.91, ppc: 0.35, oth: 0.26 },
    "Edmonton Centre": { cpc: 34.75, lpc: 49.88, ndp: 14.27, bq: 0.0, gpc: 0.26, ppc: 0.5, oth: 0.33 },
    "Edmonton Gateway": { cpc: 46.11, lpc: 40.76, ndp: 11.92, bq: 0.0, gpc: 0.5, ppc: 0.59, oth: 0.11 },
    "Edmonton Griesbach": { cpc: 45.21, lpc: 28.32, ndp: 22.13, bq: 0.0, gpc: 3.11, ppc: 0.72, oth: 0.52 },
    "Edmonton Manning": { cpc: 47.58, lpc: 35.7, ndp: 15.8, bq: 0.0, gpc: 0.0, ppc: 0.79, oth: 0.13 },
    "Edmonton Northwest": { cpc: 47.73, lpc: 37.99, ndp: 13.47, bq: 0.0, gpc: 0.07, ppc: 0.67, oth: 0.06 },
    "Edmonton Riverbend": { cpc: 47.08, lpc: 38.74, ndp: 11.15, bq: 0.0, gpc: 2.62, ppc: 0.4, oth: 0.02 },
    "Edmonton Southeast": { cpc: 38.01, lpc: 51.41, ndp: 9.91, bq: 0.0, gpc: 0.0, ppc: 0.56, oth: 0.11 },
    "Edmonton Strathcona": { cpc: 38.69, lpc: 19.56, ndp: 36.88, bq: 0.0, gpc: 3.97, ppc: 0.63, oth: 0.27 },
    "Edmonton West": { cpc: 48.64, lpc: 39.09, ndp: 11.51, bq: 0.0, gpc: 0.12, ppc: 0.53, oth: 0.11 },
    "Foothills": { cpc: 76.9, lpc: 11.69, ndp: 5.64, bq: 0.0, gpc: 3.28, ppc: 0.9, oth: 1.6 },
    "Fort McMurray—Cold Lake": { cpc: 78.16, lpc: 12.22, ndp: 5.13, bq: 0.0, gpc: 2.48, ppc: 1.42, oth: 0.58 },
    "Grande Prairie": { cpc: 82.77, lpc: 7.58, ndp: 6.26, bq: 0.0, gpc: 0.0, ppc: 1.19, oth: 2.19 },
    "Lakeland": { cpc: 80.97, lpc: 8.68, ndp: 5.4, bq: 0.0, gpc: 2.27, ppc: 1.25, oth: 1.42 },
    "Leduc—Wetaskiwin": { cpc: 76.2, lpc: 12.79, ndp: 9.32, bq: 0.0, gpc: 0.05, ppc: 1.31, oth: 0.33 },
    "Lethbridge": { cpc: 62.76, lpc: 25.61, ndp: 9.59, bq: 0.0, gpc: 0.0, ppc: 0.76, oth: 1.28 },
    "Medicine Hat—Cardston—Warner": { cpc: 75.26, lpc: 12.12, ndp: 6.99, bq: 0.0, gpc: 3.47, ppc: 1.03, oth: 1.12 },
    "Parkland": { cpc: 77.03, lpc: 11.42, ndp: 8.75, bq: 0.0, gpc: 0.0, ppc: 1.34, oth: 1.46 },
    "Peace River—Westlock": { cpc: 76.76, lpc: 10.07, ndp: 7.1, bq: 0.0, gpc: 2.03, ppc: 1.49, oth: 2.55 },
    "Ponoka—Didsbury": { cpc: 82.59, lpc: 8.49, ndp: 5.87, bq: 0.0, gpc: 0.0, ppc: 1.58, oth: 1.48 },
    "Red Deer": { cpc: 73.33, lpc: 14.84, ndp: 9.26, bq: 0.0, gpc: 0.0, ppc: 1.33, oth: 1.25 },
    "Sherwood Park—Fort Saskatchewan": { cpc: 65.08, lpc: 20.74, ndp: 10.28, bq: 0.0, gpc: 2.45, ppc: 0.77, oth: 0.68 },
    "St. Albert—Sturgeon River": { cpc: 66.15, lpc: 20.16, ndp: 12.25, bq: 0.0, gpc: 0.0, ppc: 0.89, oth: 0.56 },
    "Yellowhead": { cpc: 68.62, lpc: 18.14, ndp: 7.36, bq: 0.0, gpc: 3.13, ppc: 1.02, oth: 1.74 },
    "Abbotsford—South Langley": { cpc: 51.6, lpc: 35.85, ndp: 8.69, bq: 0.0, gpc: 1.42, ppc: 2.44, oth: 0.0 },
    "Burnaby Central": { cpc: 27.76, lpc: 47.61, ndp: 20.99, bq: 0.0, gpc: 1.46, ppc: 1.3, oth: 0.87 },
    "Burnaby North—Seymour": { cpc: 29.64, lpc: 55.48, ndp: 12.46, bq: 0.0, gpc: 1.51, ppc: 0.91, oth: 0.0 },
    "Cariboo—Prince George": { cpc: 60.87, lpc: 23.52, ndp: 10.22, bq: 0.0, gpc: 1.66, ppc: 3.01, oth: 0.72 },
    "Chilliwack—Hope": { cpc: 56.48, lpc: 25.57, ndp: 13.66, bq: 0.0, gpc: 1.38, ppc: 2.9, oth: 0.0 },
    "Cloverdale—Langley City": { cpc: 38.6, lpc: 50.83, ndp: 8.98, bq: 0.0, gpc: 0.0, ppc: 1.59, oth: 0.0 },
    "Columbia—Kootenay—Southern Rockies": { cpc: 59.27, lpc: 14.78, ndp: 20.97, bq: 0.0, gpc: 2.01, ppc: 2.97, oth: 0.0 },
    "Coquitlam—Port Coquitlam": { cpc: 33.77, lpc: 51.69, ndp: 13.03, bq: 0.0, gpc: 0.0, ppc: 1.51, oth: 0.0 },
    "Courtenay—Alberni": { cpc: 44.41, lpc: 23.48, ndp: 25.62, bq: 0.0, gpc: 4.0, ppc: 2.18, oth: 0.3 },
    "Cowichan—Malahat—Langford": { cpc: 40.1, lpc: 28.17, ndp: 25.48, bq: 0.0, gpc: 3.52, ppc: 2.73, oth: 0.0 },
    "Delta": { cpc: 35.04, lpc: 54.06, ndp: 8.12, bq: 0.0, gpc: 0.93, ppc: 0.8, oth: 1.05 },
    "Esquimalt—Saanich—Sooke": { cpc: 29.41, lpc: 37.34, ndp: 25.54, bq: 0.0, gpc: 4.99, ppc: 2.01, oth: 0.71 },
    "Fleetwood—Port Kells": { cpc: 29.99, lpc: 58.72, ndp: 9.0, bq: 0.0, gpc: 0.81, ppc: 0.94, oth: 0.55 },
    "Kamloops—Shuswap—Central Rockies": { cpc: 55.96, lpc: 25.11, ndp: 13.11, bq: 0.0, gpc: 2.53, ppc: 3.12, oth: 0.16 },
    "Kamloops—Thompson—Nicola": { cpc: 53.65, lpc: 26.54, ndp: 14.83, bq: 0.0, gpc: 1.85, ppc: 2.27, oth: 0.85 },
    "Kelowna": { cpc: 48.87, lpc: 36.86, ndp: 10.29, bq: 0.0, gpc: 1.39, ppc: 2.59, oth: 0.0 },
    "Langley Township—Fraser Heights": { cpc: 48.51, lpc: 39.73, ndp: 9.08, bq: 0.0, gpc: 1.07, ppc: 1.53, oth: 0.07 },
    "Mission—Matsqui—Abbotsford": { cpc: 53.68, lpc: 33.55, ndp: 8.63, bq: 0.0, gpc: 1.69, ppc: 2.45, oth: 0.0 },
    "Nanaimo—Ladysmith": { cpc: 39.76, lpc: 23.98, ndp: 18.5, bq: 0.0, gpc: 15.45, ppc: 2.31, oth: 0.0 },
    "New Westminster—Burnaby—Maillardville": { cpc: 29.02, lpc: 39.34, ndp: 27.9, bq: 0.0, gpc: 2.09, ppc: 1.59, oth: 0.06 },
    "North Island—Powell River": { cpc: 49.23, lpc: 22.0, ndp: 22.59, bq: 0.0, gpc: 3.18, ppc: 1.91, oth: 1.08 },
    "North Vancouver—Capilano": { cpc: 31.15, lpc: 57.64, ndp: 8.51, bq: 0.0, gpc: 1.81, ppc: 0.84, oth: 0.04 },
    "Okanagan Lake West—South Kelowna": { cpc: 55.11, lpc: 32.19, ndp: 9.07, bq: 0.0, gpc: 1.25, ppc: 2.39, oth: 0.0 },
    "Pitt Meadows—Maple Ridge": { cpc: 44.44, lpc: 35.88, ndp: 15.77, bq: 0.0, gpc: 0.14, ppc: 2.04, oth: 1.73 },
    "Port Moody—Coquitlam": { cpc: 38.11, lpc: 42.76, ndp: 17.6, bq: 0.0, gpc: 0.0, ppc: 1.22, oth: 0.32 },
    "Prince George—Peace River—Northern Rockies": { cpc: 69.47, lpc: 13.17, ndp: 7.09, bq: 0.0, gpc: 1.63, ppc: 3.75, oth: 4.89 },
    "Richmond Centre—Marpole": { cpc: 38.13, lpc: 50.47, ndp: 9.23, bq: 0.0, gpc: 1.35, ppc: 0.82, oth: 0.0 },
    "Richmond East—Steveston": { cpc: 35.86, lpc: 53.77, ndp: 8.61, bq: 0.0, gpc: 0.99, ppc: 0.77, oth: 0.0 },
    "Saanich—Gulf Islands": { cpc: 32.7, lpc: 33.02, ndp: 11.89, bq: 0.0, gpc: 20.64, ppc: 1.34, oth: 0.42 },
    "Similkameen—South Okanagan—West Kootenay": { cpc: 51.1, lpc: 21.88, ndp: 22.32, bq: 0.0, gpc: 1.82, ppc: 2.88, oth: 0.0 },
    "Skeena—Bulkley Valley": { cpc: 51.56, lpc: 13.31, ndp: 25.59, bq: 0.0, gpc: 2.14, ppc: 3.39, oth: 4.01 },
    "South Surrey—White Rock": { cpc: 43.68, lpc: 48.69, ndp: 6.42, bq: 0.0, gpc: 0.0, ppc: 1.22, oth: 0.0 },
    "Surrey Centre": { cpc: 22.95, lpc: 60.29, ndp: 12.89, bq: 0.0, gpc: 0.98, ppc: 1.32, oth: 1.57 },
    "Surrey Newton": { cpc: 15.96, lpc: 69.38, ndp: 11.51, bq: 0.0, gpc: 0.0, ppc: 0.84, oth: 2.31 },
    "Vancouver Centre": { cpc: 25.26, lpc: 57.07, ndp: 14.75, bq: 0.0, gpc: 1.76, ppc: 1.17, oth: 0.0 },
    "Vancouver East": { cpc: 16.53, lpc: 36.49, ndp: 36.07, bq: 0.0, gpc: 4.68, ppc: 1.31, oth: 4.92 },
    "Vancouver Fraserview—South Burnaby": { cpc: 24.66, lpc: 58.02, ndp: 14.77, bq: 0.0, gpc: 0.46, ppc: 1.04, oth: 1.05 },
    "Vancouver Granville": { cpc: 28.76, lpc: 52.8, ndp: 16.17, bq: 0.0, gpc: 1.27, ppc: 0.85, oth: 0.14 },
    "Vancouver Kingsway": { cpc: 19.22, lpc: 47.96, ndp: 28.85, bq: 0.0, gpc: 1.97, ppc: 0.92, oth: 1.08 },
    "Vancouver Quadra": { cpc: 31.36, lpc: 56.64, ndp: 8.76, bq: 0.0, gpc: 2.56, ppc: 0.67, oth: 0.0 },
    "Vernon—Lake Country—Monashee": { cpc: 53.43, lpc: 29.32, ndp: 11.15, bq: 0.0, gpc: 2.52, ppc: 3.57, oth: 0.0 },
    "Victoria": { cpc: 19.08, lpc: 46.11, ndp: 25.71, bq: 0.0, gpc: 6.23, ppc: 1.32, oth: 1.55 },
    "West Vancouver—Sunshine Coast—Sea to Sky Country": { cpc: 34.28, lpc: 47.28, ndp: 13.32, bq: 0.0, gpc: 3.2, ppc: 1.36, oth: 0.56 },
    "Yukon": { cpc: 37.86, lpc: 33.63, ndp: 13.53, bq: 0.0, gpc: 3.21, ppc: 0.0, oth: 11.77 },
    "Northwest Territories": { cpc: 22.69, lpc: 42.11, ndp: 21.31, bq: 0.0, gpc: 1.87, ppc: 0.0, oth: 12.02 },
    "Nunavut": { cpc: 26.78, lpc: 40.8, ndp: 32.42, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 }
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
