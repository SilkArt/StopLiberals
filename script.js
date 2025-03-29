// Electoral data from the CSV

const electoralData = {
    "Avalon": { cpc: 48.1, lpc: 47.71, ndp: 4.19, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Cape Spear": { cpc: 33.79, lpc: 58.47, ndp: 7.75, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Central Newfoundland": { cpc: 60.14, lpc: 38.02, ndp: 1.84, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Labrador": { cpc: 48.44, lpc: 43.88, ndp: 7.68, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Long Range Mountains": { cpc: 55.93, lpc: 40.65, ndp: 3.43, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "St. John's East": { cpc: 33.37, lpc: 53.64, ndp: 12.98, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Terra Nova—The Peninsulas": { cpc: 55.73, lpc: 41.95, ndp: 2.32, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Cardigan": { cpc: 44.56, lpc: 46.97, ndp: 2.85, bq: 0.0, gpc: 4.95, ppc: 0.0, oth: 0.67 },
    "Charlottetown": { cpc: 44.27, lpc: 42.89, ndp: 3.09, bq: 0.0, gpc: 9.75, ppc: 0.0, oth: 0.0 },
    "Egmont": { cpc: 44.91, lpc: 42.84, ndp: 2.53, bq: 0.0, gpc: 9.73, ppc: 0.0, oth: 0.0 },
    "Malpeque": { cpc: 46.11, lpc: 37.69, ndp: 2.26, bq: 0.0, gpc: 13.94, ppc: 0.0, oth: 0.01 },
    "Acadie—Annapolis": { cpc: 69.66, lpc: 26.85, ndp: 3.48, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Cape Breton—Canso—Antigonish": { cpc: 51.7, lpc: 43.11, ndp: 4.39, bq: 0.0, gpc: 0.51, ppc: 0.0, oth: 0.29 },
    "Central Nova": { cpc: 49.33, lpc: 42.87, ndp: 4.9, bq: 0.0, gpc: 1.63, ppc: 0.0, oth: 1.27 },
    "Cumberland—Colchester": { cpc: 63.15, lpc: 30.23, ndp: 3.42, bq: 0.0, gpc: 2.53, ppc: 0.0, oth: 0.67 },
    "Dartmouth—Cole Harbour": { cpc: 6.42, lpc: 74.07, ndp: 14.87, bq: 0.0, gpc: 4.63, ppc: 0.0, oth: 0.0 },
    "Halifax": { cpc: 25.51, lpc: 54.46, ndp: 16.29, bq: 0.0, gpc: 3.16, ppc: 0.0, oth: 0.57 },
    "Halifax West": { cpc: 36.34, lpc: 51.67, ndp: 8.86, bq: 0.0, gpc: 2.95, ppc: 0.0, oth: 0.17 },
    "Kings—Hants": { cpc: 47.22, lpc: 44.66, ndp: 5.96, bq: 0.0, gpc: 2.15, ppc: 0.0, oth: 0.0 },
    "Sackville—Bedford—Preston": { cpc: 41.46, lpc: 47.74, ndp: 8.31, bq: 0.0, gpc: 2.43, ppc: 0.0, oth: 0.06 },
    "South Shore—St. Margarets": { cpc: 60.26, lpc: 31.83, ndp: 5.11, bq: 0.0, gpc: 2.81, ppc: 0.0, oth: 0.0 },
    "Sydney—Glace Bay": { cpc: 51.94, lpc: 41.06, ndp: 6.07, bq: 0.0, gpc: 0.69, ppc: 0.0, oth: 0.24 },
    "Acadie—Bathurst": { cpc: 22.75, lpc: 68.75, ndp: 3.73, bq: 0.0, gpc: 3.31, ppc: 0.0, oth: 1.46 },
    "Beauséjour": { cpc: 31.3, lpc: 57.66, ndp: 3.57, bq: 0.0, gpc: 6.55, ppc: 0.0, oth: 0.91 },
    "Fredericton—Oromocto": { cpc: 48.11, lpc: 33.94, ndp: 3.66, bq: 0.0, gpc: 12.82, ppc: 0.0, oth: 1.47 },
    "Fundy Royal": { cpc: 66.83, lpc: 23.79, ndp: 4.23, bq: 0.0, gpc: 5.15, ppc: 0.0, oth: 0.0 },
    "Madawaska—Restigouche": { cpc: 41.33, lpc: 49.86, ndp: 1.85, bq: 0.0, gpc: 2.89, ppc: 0.0, oth: 4.07 },
    "Miramichi—Grand Lake": { cpc: 61.27, lpc: 32.14, ndp: 2.01, bq: 0.0, gpc: 4.5, ppc: 0.0, oth: 0.08 },
    "Moncton—Dieppe": { cpc: 36.88, lpc: 52.62, ndp: 5.54, bq: 0.0, gpc: 4.96, ppc: 0.0, oth: 0.0 },
    "Saint John—Kennebecasis": { cpc: 53.06, lpc: 40.02, ndp: 3.88, bq: 0.0, gpc: 3.05, ppc: 0.0, oth: 0.0 },
    "Saint John—St. Croix": { cpc: 66.45, lpc: 25.57, ndp: 3.74, bq: 0.0, gpc: 4.08, ppc: 0.0, oth: 0.15 },
    "Tobique—Mactaquac": { cpc: 71.52, lpc: 19.76, ndp: 3.16, bq: 0.0, gpc: 4.74, ppc: 0.0, oth: 0.83 },
    "Abitibi—Baie-James—Nunavik—Eeyou": { cpc: 21.64, lpc: 30.67, ndp: 7.33, bq: 32.16, gpc: 3.16, ppc: 2.9, oth: 2.14 },
    "Abitibi—Témiscamingue": { cpc: 16.16, lpc: 28.84, ndp: 3.89, bq: 43.46, gpc: 3.38, ppc: 2.62, oth: 1.66 },
    "Ahuntsic-Cartierville": { cpc: 10.42, lpc: 57.26, ndp: 6.87, bq: 17.92, gpc: 5.68, ppc: 1.86, oth: 0.0 },
    "Alfred-Pellan": { cpc: 16.9, lpc: 52.52, ndp: 4.57, bq: 21.01, gpc: 3.16, ppc: 0.24, oth: 1.6 },
    "Argenteuil—La Petite-Nation": { cpc: 17.87, lpc: 44.91, ndp: 4.34, bq: 27.02, gpc: 0.74, ppc: 4.3, oth: 0.82 },
    "Beauce": { cpc: 58.67, lpc: 12.95, ndp: 1.62, bq: 11.45, gpc: 1.54, ppc: 12.43, oth: 1.34 },
    "Beauharnois—Salaberry—Soulanges—Huntingdon": { cpc: 16.5, lpc: 32.88, ndp: 4.75, bq: 41.79, gpc: 0.4, ppc: 2.6, oth: 1.08 },
    "Beauport—Limoilou": { cpc: 38.35, lpc: 26.76, ndp: 5.6, bq: 24.22, gpc: 3.81, ppc: 0.24, oth: 1.02 },
    "Bécancour—Nicolet—Saurel—Alnôbak": { cpc: 23.14, lpc: 20.12, ndp: 3.22, bq: 46.85, gpc: 3.16, ppc: 1.88, oth: 1.62 },
    "Bellechasse—Les Etchemins—Lévis": { cpc: 60.76, lpc: 15.71, ndp: 2.64, bq: 16.52, gpc: 2.5, ppc: 0.0, oth: 1.88 },
    "Beloeil—Chambly": { cpc: 11.83, lpc: 28.57, ndp: 5.51, bq: 46.86, gpc: 4.19, ppc: 1.6, oth: 1.44 },
    "Berthier—Maskinongé": { cpc: 16.75, lpc: 20.43, ndp: 23.03, bq: 34.23, gpc: 2.21, ppc: 2.28, oth: 1.07 },
    "Bourassa": { cpc: 8.8, lpc: 65.68, ndp: 4.63, bq: 14.61, gpc: 3.45, ppc: 2.59, oth: 0.25 },
    "Brome—Missisquoi": { cpc: 20.96, lpc: 39.1, ndp: 3.7, bq: 27.82, gpc: 4.59, ppc: 2.35, oth: 1.48 },
    "Brossard—Saint-Lambert": { cpc: 15.4, lpc: 60.09, ndp: 6.13, bq: 15.9, gpc: 0.0, ppc: 1.78, oth: 0.69 },
    "Charlesbourg—Haute-Saint-Charles": { cpc: 53.47, lpc: 20.19, ndp: 3.23, bq: 18.17, gpc: 2.96, ppc: 1.47, oth: 0.52 },
    "Châteauguay—Les Jardins-de-Napierville": { cpc: 16.18, lpc: 42.0, ndp: 4.78, bq: 30.22, gpc: 2.93, ppc: 2.82, oth: 1.07 },
    "Chicoutimi—Le Fjord": { cpc: 49.24, lpc: 19.21, ndp: 2.63, bq: 25.8, gpc: 2.13, ppc: 0.94, oth: 0.05 },
    "Compton—Stanstead": { cpc: 22.19, lpc: 40.41, ndp: 4.41, bq: 24.14, gpc: 5.33, ppc: 2.7, oth: 0.81 },
    "Côte-du-Sud—Rivière-du-Loup—Kataskomiq—Témiscouata": { cpc: 54.18, lpc: 19.89, ndp: 1.87, bq: 22.35, gpc: 0.0, ppc: 0.24, oth: 1.47 },
    "Côte-Nord—Kawawachikamach—Nitassinan": { cpc: 29.54, lpc: 21.89, ndp: 2.68, bq: 44.23, gpc: 0.0, ppc: 0.0, oth: 1.66 },
    "Dorval—Lachine—LaSalle": { cpc: 15.01, lpc: 56.87, ndp: 7.58, bq: 12.28, gpc: 5.3, ppc: 2.97, oth: 0.0 },
    "Drummond": { cpc: 25.28, lpc: 22.91, ndp: 7.23, bq: 40.83, gpc: 0.0, ppc: 0.0, oth: 3.76 },
    "Gaspésie—Les Îles-de-la-Madeleine—Listuguj": { cpc: 11.17, lpc: 46.51, ndp: 2.65, bq: 37.25, gpc: 0.0, ppc: 1.52, oth: 0.9 },
    "Gatineau": { cpc: 14.22, lpc: 55.45, ndp: 5.07, bq: 18.63, gpc: 2.98, ppc: 2.92, oth: 0.73 },
    "Hochelaga—Rosemont-Est": { cpc: 6.58, lpc: 46.53, ndp: 13.04, bq: 27.3, gpc: 4.16, ppc: 1.79, oth: 0.6 },
    "Honoré-Mercier": { cpc: 13.08, lpc: 64.4, ndp: 4.17, bq: 12.55, gpc: 2.77, ppc: 2.92, oth: 0.11 },
    "Hull—Aylmer": { cpc: 13.65, lpc: 57.47, ndp: 7.41, bq: 12.66, gpc: 5.31, ppc: 2.61, oth: 0.89 },
    "Joliette—Manawan": { cpc: 13.27, lpc: 27.0, ndp: 3.72, bq: 47.96, gpc: 4.08, ppc: 2.38, oth: 1.58 },
    "Jonquière": { cpc: 36.1, lpc: 22.94, ndp: 3.14, bq: 34.15, gpc: 3.22, ppc: 0.0, oth: 0.44 },
    "La Pointe-de-l'Île": { cpc: 9.51, lpc: 39.62, ndp: 6.32, bq: 41.09, gpc: 0.0, ppc: 2.18, oth: 1.28 },
    "La Prairie—Atateken": { cpc: 13.36, lpc: 40.23, ndp: 4.51, bq: 36.5, gpc: 3.33, ppc: 1.96, oth: 0.11 },
    "Lac-Saint-Jean": { cpc: 32.75, lpc: 21.26, ndp: 1.94, bq: 40.97, gpc: 3.08, ppc: 0.0, oth: 0.0 },
    "Lac-Saint-Louis": { cpc: 22.64, lpc: 58.3, ndp: 7.32, bq: 3.96, gpc: 5.78, ppc: 2.0, oth: 0.0 },
    "LaSalle—Émard—Verdun": { cpc: 10.22, lpc: 50.27, ndp: 11.69, bq: 18.14, gpc: 6.01, ppc: 2.57, oth: 1.1 },
    "Laurentides—Labelle": { cpc: 14.48, lpc: 27.99, ndp: 3.52, bq: 44.81, gpc: 4.97, ppc: 2.82, oth: 1.4 },
    "Laurier—Sainte-Marie": { cpc: 6.41, lpc: 48.72, ndp: 19.93, bq: 17.82, gpc: 4.73, ppc: 1.41, oth: 0.98 },
    "Laval—Les Îles": { cpc: 22.0, lpc: 52.56, ndp: 4.38, bq: 14.72, gpc: 2.78, ppc: 3.55, oth: 0.0 },
    "Les Pays-d'en-Haut": { cpc: 16.09, lpc: 30.88, ndp: 4.36, bq: 40.72, gpc: 3.14, ppc: 3.36, oth: 1.45 },
    "Lévis—Lotbinière": { cpc: 58.89, lpc: 15.75, ndp: 3.97, bq: 16.8, gpc: 2.38, ppc: 1.58, oth: 0.63 },
    "Longueuil—Charles-LeMoyne": { cpc: 11.02, lpc: 46.42, ndp: 6.3, bq: 29.08, gpc: 4.82, ppc: 2.19, oth: 0.16 },
    "Longueuil—Saint-Hubert": { cpc: 9.23, lpc: 44.17, ndp: 4.87, bq: 34.11, gpc: 5.55, ppc: 1.78, oth: 0.28 },
    "Louis-Hébert": { cpc: 29.77, lpc: 40.48, ndp: 4.07, bq: 20.54, gpc: 4.76, ppc: 0.0, oth: 0.38 },
    "Louis-Saint-Laurent—Akiawenhrahk": { cpc: 60.44, lpc: 17.42, ndp: 2.82, bq: 14.52, gpc: 2.47, ppc: 1.39, oth: 0.94 },
    "Marc-Aurèle-Fortin": { cpc: 15.55, lpc: 50.53, ndp: 5.21, bq: 25.34, gpc: 0.0, ppc: 2.15, oth: 1.22 },
    "Mégantic—L'Érable—Lotbinière": { cpc: 65.18, lpc: 13.42, ndp: 1.65, bq: 14.0, gpc: 2.25, ppc: 2.28, oth: 1.24 },
    "Mirabel": { cpc: 18.2, lpc: 28.86, ndp: 5.42, bq: 38.93, gpc: 4.41, ppc: 2.92, oth: 1.26 },
    "Mount Royal": { cpc: 27.99, lpc: 57.75, ndp: 4.72, bq: 2.94, gpc: 4.73, ppc: 1.73, oth: 0.14 },
    "Mont-Saint-Bruno—L'Acadie": { cpc: 13.33, lpc: 40.56, ndp: 5.25, bq: 38.83, gpc: 0.31, ppc: 1.63, oth: 0.09 },
    "Montcalm": { cpc: 16.21, lpc: 23.97, ndp: 4.0, bq: 45.85, gpc: 5.28, ppc: 3.34, oth: 1.36 },
    "Montmorency—Charlevoix": { cpc: 42.43, lpc: 21.89, ndp: 2.66, bq: 28.55, gpc: 2.22, ppc: 1.33, oth: 0.92 },
    "Notre-Dame-de-Grâce—Westmount": { cpc: 16.8, lpc: 57.07, ndp: 11.52, bq: 4.64, gpc: 7.44, ppc: 2.29, oth: 0.24 },
    "Outremont": { cpc: 9.91, lpc: 51.96, ndp: 16.98, bq: 12.99, gpc: 6.31, ppc: 1.63, oth: 0.22 },
    "Papineau": { cpc: 6.46, lpc: 58.04, ndp: 13.9, bq: 12.46, gpc: 6.34, ppc: 1.76, oth: 1.04 },
    "Pierre-Boucher—Les Patriotes—Verchères": { cpc: 12.55, lpc: 31.86, ndp: 5.05, bq: 48.01, gpc: 0.0, ppc: 1.57, oth: 0.97 },
    "Pierrefonds—Dollard": { cpc: 25.53, lpc: 59.39, ndp: 6.5, bq: 6.02, gpc: 0.0, ppc: 2.56, oth: 0.0 },
    "Pontiac—Kitigan Zibi": { cpc: 26.35, lpc: 46.71, ndp: 6.42, bq: 11.6, gpc: 5.32, ppc: 3.1, oth: 0.5 },
    "Portneuf—Jacques-Cartier": { cpc: 61.94, lpc: 15.5, ndp: 2.57, bq: 17.45, gpc: 0.0, ppc: 1.63, oth: 0.92 },
    "Québec Centre": { cpc: 23.26, lpc: 39.89, ndp: 7.53, bq: 23.27, gpc: 4.53, ppc: 1.15, oth: 0.37 },
    "Repentigny": { cpc: 12.54, lpc: 34.5, ndp: 4.86, bq: 45.22, gpc: 0.0, ppc: 0.0, oth: 2.88 },
    "Richmond—Arthabaska": { cpc: 59.81, lpc: 15.5, ndp: 2.46, bq: 18.44, gpc: 0.0, ppc: 2.43, oth: 1.37 },
    "Rimouski—La Matapédia": { cpc: 15.98, lpc: 27.27, ndp: 3.84, bq: 48.14, gpc: 0.0, ppc: 1.66, oth: 3.12 },
    "Rivière-des-Mille-Îles": { cpc: 13.75, lpc: 41.0, ndp: 4.44, bq: 33.77, gpc: 3.63, ppc: 2.07, oth: 1.35 },
    "Rivière-du-Nord": { cpc: 17.04, lpc: 27.5, ndp: 4.47, bq: 45.36, gpc: 0.61, ppc: 3.05, oth: 1.97 },
    "Rosemont—La Petite-Patrie": { cpc: 6.3, lpc: 31.6, ndp: 35.19, bq: 20.93, gpc: 5.58, ppc: 0.0, oth: 0.4 },
    "Saint-Hyacinthe—Bagot—Acton": { cpc: 19.19, lpc: 27.85, ndp: 7.59, bq: 41.83, gpc: 0.0, ppc: 2.17, oth: 1.37 },
    "Saint-Jean": { cpc: 17.23, lpc: 32.88, ndp: 4.52, bq: 38.64, gpc: 4.3, ppc: 0.0, oth: 2.44 },
    "Saint-Laurent": { cpc: 22.43, lpc: 62.87, ndp: 6.05, bq: 6.04, gpc: 0.2, ppc: 2.17, oth: 0.22 },
    "Saint-Léonard—Saint-Michel": { cpc: 12.84, lpc: 73.86, ndp: 4.62, bq: 6.09, gpc: 0.0, ppc: 2.59, oth: 0.0 },
    "Saint-Maurice—Champlain": { cpc: 22.74, lpc: 46.38, ndp: 2.94, bq: 23.59, gpc: 2.45, ppc: 0.0, oth: 1.91 },
    "Shefford": { cpc: 16.15, lpc: 38.57, ndp: 3.26, bq: 34.67, gpc: 3.53, ppc: 2.61, oth: 1.21 },
    "Sherbrooke": { cpc: 16.88, lpc: 42.69, ndp: 8.41, bq: 23.69, gpc: 5.63, ppc: 1.82, oth: 0.87 },
    "Terrebonne": { cpc: 14.5, lpc: 35.22, ndp: 4.24, bq: 35.64, gpc: 2.94, ppc: 2.09, oth: 5.38 },
    "Thérèse-De Blainville": { cpc: 14.71, lpc: 40.54, ndp: 4.45, bq: 33.86, gpc: 3.84, ppc: 2.01, oth: 0.6 },
    "Trois-Rivières": { cpc: 36.8, lpc: 31.05, ndp: 4.64, bq: 22.97, gpc: 2.42, ppc: 1.35, oth: 0.77 },
    "Vaudreuil": { cpc: 20.56, lpc: 51.23, ndp: 6.1, bq: 16.25, gpc: 4.7, ppc: 0.0, oth: 1.17 },
    "Ville-Marie—Le Sud-Ouest—Île-des-Sœurs": { cpc: 16.3, lpc: 56.48, ndp: 10.56, bq: 9.43, gpc: 5.05, ppc: 1.86, oth: 0.31 },
    "Vimy": { cpc: 17.79, lpc: 55.73, ndp: 5.51, bq: 17.83, gpc: 0.0, ppc: 3.14, oth: 0.0 },
    "Ajax": { cpc: 27.41, lpc: 64.5, ndp: 5.9, bq: 0.0, gpc: 2.19, ppc: 0.0, oth: 0.0 },
    "Algonquin—Renfrew—Pembroke": { cpc: 58.0, lpc: 25.01, ndp: 10.01, bq: 0.0, gpc: 1.87, ppc: 3.07, oth: 2.04 },
    "Aurora—Oak Ridges—Richmond Hill": { cpc: 42.55, lpc: 49.82, ndp: 3.31, bq: 0.0, gpc: 0.16, ppc: 1.34, oth: 2.82 },
    "Barrie South—Innisfil": { cpc: 53.83, lpc: 35.94, ndp: 7.26, bq: 0.0, gpc: 0.0, ppc: 2.97, oth: 0.0 },
    "Barrie—Springwater—Oro-Medonte": { cpc: 51.61, lpc: 37.78, ndp: 7.64, bq: 0.0, gpc: 0.2, ppc: 2.68, oth: 0.09 },
    "Bay of Quinte": { cpc: 44.53, lpc: 44.75, ndp: 6.82, bq: 0.0, gpc: 2.04, ppc: 1.86, oth: 0.0 },
    "Beaches—East York": { cpc: 15.76, lpc: 68.43, ndp: 10.08, bq: 0.0, gpc: 2.52, ppc: 1.19, oth: 2.03 },
    "Bowmanville—Oshawa North": { cpc: 49.8, lpc: 37.77, ndp: 8.34, bq: 0.0, gpc: 0.0, ppc: 2.06, oth: 2.03 },
    "Brampton Centre": { cpc: 33.16, lpc: 56.2, ndp: 6.79, bq: 0.0, gpc: 0.0, ppc: 1.3, oth: 2.55 },
    "Brampton—Chinguacousy Park": { cpc: 31.77, lpc: 57.36, ndp: 7.03, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 3.84 },
    "Brampton East": { cpc: 30.24, lpc: 62.06, ndp: 6.74, bq: 0.0, gpc: 0.0, ppc: 0.96, oth: 0.0 },
    "Brampton North—Caledon": { cpc: 34.44, lpc: 58.81, ndp: 5.9, bq: 0.0, gpc: 0.35, ppc: 0.34, oth: 0.14 },
    "Brampton South": { cpc: 30.68, lpc: 61.82, ndp: 5.75, bq: 0.0, gpc: 0.0, ppc: 1.03, oth: 0.72 },
    "Brampton West": { cpc: 28.34, lpc: 63.41, ndp: 5.32, bq: 0.0, gpc: 0.0, ppc: 0.87, oth: 2.06 },
    "Brantford—Brant South—Six Nations": { cpc: 46.9, lpc: 35.75, ndp: 9.68, bq: 0.0, gpc: 2.6, ppc: 3.52, oth: 1.55 },
    "Bruce—Grey—Owen Sound": { cpc: 54.45, lpc: 30.78, ndp: 6.14, bq: 0.0, gpc: 2.86, ppc: 3.05, oth: 2.72 },
    "Burlington": { cpc: 38.96, lpc: 52.7, ndp: 4.63, bq: 0.0, gpc: 1.75, ppc: 1.44, oth: 0.52 },
    "Burlington North—Milton West": { cpc: 38.01, lpc: 54.8, ndp: 4.07, bq: 0.0, gpc: 1.7, ppc: 1.41, oth: 0.0 },
    "Cambridge": { cpc: 38.55, lpc: 47.57, ndp: 7.87, bq: 0.0, gpc: 3.23, ppc: 2.77, oth: 0.0 },
    "Carleton": { cpc: 54.94, lpc: 37.2, ndp: 4.91, bq: 0.0, gpc: 1.92, ppc: 1.0, oth: 0.03 },
    "Chatham-Kent—Leamington": { cpc: 50.41, lpc: 35.0, ndp: 7.08, bq: 0.0, gpc: 1.52, ppc: 5.99, oth: 0.0 },
    "Davenport": { cpc: 13.74, lpc: 60.81, ndp: 20.42, bq: 0.0, gpc: 2.57, ppc: 1.42, oth: 1.05 },
    "Don Valley North": { cpc: 33.45, lpc: 59.76, ndp: 4.16, bq: 0.0, gpc: 1.57, ppc: 1.04, oth: 0.03 },
    "Don Valley West": { cpc: 30.28, lpc: 63.84, ndp: 3.78, bq: 0.0, gpc: 0.91, ppc: 0.88, oth: 0.31 },
    "Dufferin—Caledon": { cpc: 53.34, lpc: 34.3, ndp: 4.6, bq: 0.0, gpc: 4.15, ppc: 2.65, oth: 0.96 },
    "Eglinton—Lawrence": { cpc: 37.53, lpc: 55.0, ndp: 3.84, bq: 0.0, gpc: 2.61, ppc: 1.03, oth: 0.0 },
    "Elgin—St. Thomas—London South": { cpc: 57.94, lpc: 25.47, ndp: 7.76, bq: 0.0, gpc: 2.2, ppc: 4.91, oth: 1.72 },
    "Essex": { cpc: 53.35, lpc: 22.17, ndp: 16.81, bq: 0.0, gpc: 1.36, ppc: 4.56, oth: 1.76 },
    "Etobicoke Centre": { cpc: 36.14, lpc: 56.21, ndp: 4.65, bq: 0.0, gpc: 0.28, ppc: 2.39, oth: 0.32 },
    "Etobicoke—Lakeshore": { cpc: 34.46, lpc: 55.1, ndp: 5.84, bq: 0.0, gpc: 1.89, ppc: 1.6, oth: 1.11 },
    "Etobicoke North": { cpc: 25.88, lpc: 66.0, ndp: 4.38, bq: 0.0, gpc: 0.0, ppc: 1.51, oth: 2.23 },
    "Flamborough—Glanbrook—Brant North": { cpc: 48.57, lpc: 39.77, ndp: 6.61, bq: 0.0, gpc: 2.29, ppc: 2.49, oth: 0.28 },
    "Guelph": { cpc: 26.63, lpc: 51.76, ndp: 10.2, bq: 0.0, gpc: 7.53, ppc: 1.81, oth: 2.07 },
    "Haldimand—Norfolk": { cpc: 52.49, lpc: 33.58, ndp: 6.0, bq: 0.0, gpc: 0.0, ppc: 3.99, oth: 3.94 },
    "Haliburton—Kawartha Lakes": { cpc: 57.61, lpc: 29.15, ndp: 6.44, bq: 0.0, gpc: 2.3, ppc: 2.6, oth: 1.9 },
    "Hamilton Centre": { cpc: 23.2, lpc: 41.37, ndp: 26.89, bq: 0.0, gpc: 3.16, ppc: 3.16, oth: 2.21 },
    "Hamilton East—Stoney Creek": { cpc: 35.0, lpc: 50.02, ndp: 10.27, bq: 0.0, gpc: 1.82, ppc: 2.89, oth: 0.0 },
    "Hamilton Mountain": { cpc: 30.78, lpc: 46.71, ndp: 15.81, bq: 0.0, gpc: 2.07, ppc: 2.66, oth: 1.97 },
    "Hamilton West—Ancaster—Dundas": { cpc: 32.26, lpc: 54.17, ndp: 8.92, bq: 0.0, gpc: 2.44, ppc: 1.56, oth: 0.64 },
    "Hastings—Lennox and Addington—Tyendinaga": { cpc: 47.74, lpc: 39.78, ndp: 4.71, bq: 0.0, gpc: 1.57, ppc: 2.04, oth: 4.15 },
    "Humber River—Black Creek": { cpc: 18.43, lpc: 70.81, ndp: 7.08, bq: 0.0, gpc: 1.07, ppc: 1.42, oth: 1.18 },
    "Huron—Bruce": { cpc: 56.22, lpc: 31.83, ndp: 6.66, bq: 0.0, gpc: 0.0, ppc: 2.75, oth: 2.55 },
    "Kanata": { cpc: 39.42, lpc: 50.87, ndp: 6.41, bq: 0.0, gpc: 2.29, ppc: 1.01, oth: 0.0 },
    "Kapuskasing—Timmins—Mushkegowuk": { cpc: 34.21, lpc: 39.26, ndp: 19.83, bq: 0.0, gpc: 0.45, ppc: 5.72, oth: 0.53 },
    "Kenora—Kiiwetinoong": { cpc: 53.88, lpc: 27.2, ndp: 14.78, bq: 0.0, gpc: 1.46, ppc: 2.69, oth: 0.0 },
    "Kingston and the Islands": { cpc: 29.08, lpc: 53.1, ndp: 13.91, bq: 0.0, gpc: 2.46, ppc: 1.41, oth: 0.03 },
    "King—Vaughan": { cpc: 46.06, lpc: 48.53, ndp: 2.77, bq: 0.0, gpc: 1.1, ppc: 1.53, oth: 0.0 },
    "Kitchener Centre": { cpc: 30.17, lpc: 23.23, ndp: 8.67, bq: 0.0, gpc: 34.22, ppc: 2.77, oth: 0.94 },
    "Kitchener—Conestoga": { cpc: 41.21, lpc: 46.19, ndp: 5.33, bq: 0.0, gpc: 4.54, ppc: 2.71, oth: 0.03 },
    "Kitchener South—Hespeler": { cpc: 39.43, lpc: 45.77, ndp: 7.36, bq: 0.0, gpc: 3.22, ppc: 2.57, oth: 1.66 },
    "Lanark—Frontenac": { cpc: 55.4, lpc: 31.72, ndp: 6.93, bq: 0.0, gpc: 2.53, ppc: 2.37, oth: 1.05 },
    "Leeds—Grenville—Thousand Islands—Rideau Lakes": { cpc: 56.52, lpc: 31.06, ndp: 6.82, bq: 0.0, gpc: 3.4, ppc: 2.2, oth: 0.0 },
    "London Centre": { cpc: 30.1, lpc: 50.21, ndp: 15.04, bq: 0.0, gpc: 2.01, ppc: 2.14, oth: 0.5 },
    "London—Fanshawe": { cpc: 34.4, lpc: 35.99, ndp: 25.15, bq: 0.0, gpc: 0.0, ppc: 4.46, oth: 0.0 },
    "London West": { cpc: 38.44, lpc: 45.72, ndp: 10.5, bq: 0.0, gpc: 0.0, ppc: 1.93, oth: 3.42 },
    "Markham—Stouffville": { cpc: 35.53, lpc: 58.07, ndp: 3.67, bq: 0.0, gpc: 1.71, ppc: 1.03, oth: 0.0 },
    "Markham—Thornhill": { cpc: 26.42, lpc: 67.88, ndp: 3.41, bq: 0.0, gpc: 1.69, ppc: 0.59, oth: 0.0 },
    "Markham—Unionville": { cpc: 42.19, lpc: 52.82, ndp: 2.65, bq: 0.0, gpc: 2.34, ppc: 0.0, oth: 0.0 },
    "Middlesex—London": { cpc: 51.95, lpc: 34.34, ndp: 8.35, bq: 0.0, gpc: 1.76, ppc: 3.06, oth: 0.54 },
    "Milton East—Halton Hills South": { cpc: 43.43, lpc: 48.39, ndp: 4.11, bq: 0.0, gpc: 2.31, ppc: 1.76, oth: 0.0 },
    "Mississauga Centre": { cpc: 30.06, lpc: 61.83, ndp: 4.81, bq: 0.0, gpc: 1.43, ppc: 1.5, oth: 0.37 },
    "Mississauga East—Cooksville": { cpc: 32.89, lpc: 57.65, ndp: 4.46, bq: 0.0, gpc: 0.28, ppc: 2.3, oth: 2.41 },
    "Mississauga—Erin Mills": { cpc: 34.67, lpc: 58.36, ndp: 4.35, bq: 0.0, gpc: 1.43, ppc: 1.19, oth: 0.0 },
    "Mississauga—Lakeshore": { cpc: 40.21, lpc: 51.69, ndp: 4.15, bq: 0.0, gpc: 1.94, ppc: 1.52, oth: 0.49 },
    "Mississauga—Malton": { cpc: 31.47, lpc: 59.31, ndp: 5.73, bq: 0.0, gpc: 1.6, ppc: 0.11, oth: 1.78 },
    "Mississauga—Streetsville": { cpc: 35.91, lpc: 54.58, ndp: 5.16, bq: 0.0, gpc: 1.88, ppc: 1.34, oth: 1.13 },
    "Nepean": { cpc: 35.9, lpc: 54.21, ndp: 7.12, bq: 0.0, gpc: 1.76, ppc: 1.01, oth: 0.0 },
    "Newmarket—Aurora": { cpc: 40.0, lpc: 50.56, ndp: 4.94, bq: 0.0, gpc: 1.63, ppc: 1.51, oth: 1.36 },
    "New Tecumseth—Gwillimbury": { cpc: 52.54, lpc: 36.76, ndp: 5.86, bq: 0.0, gpc: 1.15, ppc: 2.83, oth: 0.85 },
    "Niagara Falls—Niagara-on-the-Lake": { cpc: 42.66, lpc: 44.21, ndp: 8.3, bq: 0.0, gpc: 1.88, ppc: 2.96, oth: 0.0 },
    "Niagara South": { cpc: 39.92, lpc: 43.39, ndp: 11.1, bq: 0.0, gpc: 1.92, ppc: 3.67, oth: 0.0 },
    "Niagara West": { cpc: 48.05, lpc: 37.34, ndp: 6.22, bq: 0.0, gpc: 2.58, ppc: 2.65, oth: 3.15 },
    "Nipissing—Timiskaming": { cpc: 37.63, lpc: 47.94, ndp: 11.23, bq: 0.0, gpc: 0.0, ppc: 3.21, oth: 0.0 },
    "Northumberland—Clarke": { cpc: 48.23, lpc: 41.1, ndp: 6.23, bq: 0.0, gpc: 2.38, ppc: 2.06, oth: 0.0 },
    "Oakville East": { cpc: 40.78, lpc: 52.65, ndp: 3.96, bq: 0.0, gpc: 1.43, ppc: 1.17, oth: 0.0 },
    "Oakville West": { cpc: 39.64, lpc: 53.92, ndp: 3.66, bq: 0.0, gpc: 1.5, ppc: 1.28, oth: 0.0 },
    "Orléans": { cpc: 30.09, lpc: 60.53, ndp: 6.18, bq: 0.0, gpc: 1.44, ppc: 0.95, oth: 0.81 },
    "Oshawa": { cpc: 49.3, lpc: 31.62, ndp: 14.43, bq: 0.0, gpc: 1.61, ppc: 3.04, oth: 0.0 },
    "Ottawa Centre": { cpc: 19.24, lpc: 58.89, ndp: 15.76, bq: 0.0, gpc: 2.79, ppc: 0.91, oth: 2.41 },
    "Ottawa South": { cpc: 29.22, lpc: 58.98, ndp: 8.01, bq: 0.0, gpc: 2.01, ppc: 1.15, oth: 0.63 },
    "Ottawa—Vanier—Gloucester": { cpc: 22.73, lpc: 59.77, ndp: 10.5, bq: 0.0, gpc: 2.85, ppc: 1.21, oth: 2.94 },
    "Ottawa West—Nepean": { cpc: 30.35, lpc: 54.91, ndp: 9.04, bq: 0.0, gpc: 2.67, ppc: 1.21, oth: 1.82 },
    "Oxford": { cpc: 54.99, lpc: 26.78, ndp: 8.84, bq: 0.0, gpc: 2.68, ppc: 4.29, oth: 2.43 },
    "Parry Sound—Muskoka": { cpc: 54.94, lpc: 27.34, ndp: 7.87, bq: 0.0, gpc: 5.4, ppc: 2.96, oth: 1.48 },
    "Perth—Wellington": { cpc: 56.46, lpc: 31.54, ndp: 8.15, bq: 0.0, gpc: 0.0, ppc: 3.84, oth: 0.0 },
    "Peterborough": { cpc: 43.78, lpc: 42.87, ndp: 8.73, bq: 0.0, gpc: 2.11, ppc: 1.65, oth: 0.86 },
    "Pickering—Brooklin": { cpc: 36.31, lpc: 56.24, ndp: 5.83, bq: 0.0, gpc: 0.22, ppc: 1.4, oth: 0.0 },
    "Prescott—Russell—Cumberland": { cpc: 33.82, lpc: 54.3, ndp: 4.59, bq: 0.0, gpc: 1.8, ppc: 2.3, oth: 3.19 },
    "Richmond Hill South": { cpc: 38.48, lpc: 52.32, ndp: 3.54, bq: 0.0, gpc: 0.0, ppc: 1.01, oth: 4.65 },
    "Sarnia—Lambton—Bkejwanong": { cpc: 55.92, lpc: 25.68, ndp: 10.29, bq: 0.0, gpc: 1.51, ppc: 4.53, oth: 2.05 },
    "Sault Ste. Marie—Algoma": { cpc: 41.93, lpc: 42.0, ndp: 12.44, bq: 0.0, gpc: 0.63, ppc: 2.12, oth: 0.88 },
    "Scarborough—Agincourt": { cpc: 29.87, lpc: 63.45, ndp: 4.21, bq: 0.0, gpc: 1.49, ppc: 0.98, oth: 0.0 },
    "Scarborough Centre—Don Valley East": { cpc: 26.54, lpc: 65.04, ndp: 5.87, bq: 0.0, gpc: 0.0, ppc: 1.53, oth: 1.02 },
    "Scarborough—Guildwood—Rouge Park": { cpc: 22.8, lpc: 69.76, ndp: 5.64, bq: 0.0, gpc: 0.0, ppc: 1.07, oth: 0.74 },
    "Scarborough North": { cpc: 18.11, lpc: 73.86, ndp: 4.73, bq: 0.0, gpc: 0.0, ppc: 0.84, oth: 2.46 },
    "Scarborough Southwest": { cpc: 21.74, lpc: 67.4, ndp: 6.88, bq: 0.0, gpc: 2.01, ppc: 1.04, oth: 0.93 },
    "Scarborough—Woburn": { cpc: 23.07, lpc: 68.09, ndp: 5.49, bq: 0.0, gpc: 0.0, ppc: 1.08, oth: 2.27 },
    "Simcoe—Grey": { cpc: 52.37, lpc: 33.92, ndp: 5.93, bq: 0.0, gpc: 3.87, ppc: 2.63, oth: 1.28 },
    "Simcoe North": { cpc: 47.52, lpc: 38.27, ndp: 7.33, bq: 0.0, gpc: 2.91, ppc: 2.95, oth: 1.02 },
    "Spadina—Harbourfront": { cpc: 26.67, lpc: 51.77, ndp: 16.95, bq: 0.0, gpc: 3.33, ppc: 1.27, oth: 0.0 },
    "St. Catharines": { cpc: 37.37, lpc: 48.17, ndp: 10.03, bq: 0.0, gpc: 1.82, ppc: 2.61, oth: 0.0 },
    "Stormont—Dundas—Glengarry": { cpc: 59.83, lpc: 29.98, ndp: 4.9, bq: 0.0, gpc: 2.15, ppc: 2.9, oth: 0.24 },
    "Sudbury": { cpc: 33.73, lpc: 46.74, ndp: 14.29, bq: 0.0, gpc: 2.03, ppc: 2.55, oth: 0.67 },
    "Sudbury East—Manitoulin—Nickel Belt": { cpc: 33.88, lpc: 44.37, ndp: 15.58, bq: 0.0, gpc: 1.84, ppc: 3.84, oth: 0.49 },
    "Taiaiako’n—Parkdale—High Park": { cpc: 16.69, lpc: 59.01, ndp: 19.59, bq: 0.0, gpc: 2.0, ppc: 1.37, oth: 1.34 },
    "Thornhill": { cpc: 53.4, lpc: 41.03, ndp: 2.52, bq: 0.0, gpc: 1.43, ppc: 1.63, oth: 0.0 },
    "Thunder Bay—Rainy River": { cpc: 35.67, lpc: 45.97, ndp: 14.14, bq: 0.0, gpc: 1.47, ppc: 2.75, oth: 0.0 },
    "Thunder Bay—Superior North": { cpc: 28.52, lpc: 52.99, ndp: 13.45, bq: 0.0, gpc: 1.78, ppc: 2.41, oth: 0.85 },
    "Toronto Centre": { cpc: 14.72, lpc: 62.56, ndp: 12.19, bq: 0.0, gpc: 7.75, ppc: 0.92, oth: 1.86 },
    "Toronto—Danforth": { cpc: 14.81, lpc: 62.83, ndp: 16.19, bq: 0.0, gpc: 1.95, ppc: 0.99, oth: 3.22 },
    "Toronto—St. Paul's": { cpc: 28.45, lpc: 58.54, ndp: 6.96, bq: 0.0, gpc: 5.04, ppc: 0.92, oth: 0.09 },
    "University—Rosedale": { cpc: 20.73, lpc: 59.18, ndp: 13.23, bq: 0.0, gpc: 4.33, ppc: 1.02, oth: 1.5 },
    "Vaughan—Woodbridge": { cpc: 41.32, lpc: 52.18, ndp: 2.9, bq: 0.0, gpc: 0.83, ppc: 1.9, oth: 0.88 },
    "Waterloo": { cpc: 30.57, lpc: 55.81, ndp: 8.68, bq: 0.0, gpc: 3.21, ppc: 1.74, oth: 0.0 },
    "Wellington—Halton Hills North": { cpc: 51.17, lpc: 36.47, ndp: 5.33, bq: 0.0, gpc: 4.34, ppc: 2.32, oth: 0.36 },
    "Whitby": { cpc: 37.11, lpc: 53.47, ndp: 6.32, bq: 0.0, gpc: 1.46, ppc: 1.63, oth: 0.0 },
    "Willowdale": { cpc: 34.88, lpc: 58.12, ndp: 4.33, bq: 0.0, gpc: 1.72, ppc: 0.95, oth: 0.0 },
    "Windsor—Tecumseh—Lakeshore": { cpc: 34.33, lpc: 43.19, ndp: 15.68, bq: 0.0, gpc: 1.3, ppc: 4.48, oth: 1.02 },
    "Windsor West": { cpc: 26.97, lpc: 42.68, ndp: 25.16, bq: 0.0, gpc: 0.0, ppc: 3.99, oth: 1.2 },
    "York Centre": { cpc: 39.54, lpc: 54.44, ndp: 4.34, bq: 0.0, gpc: 0.0, ppc: 1.68, oth: 0.0 },
    "York—Durham": { cpc: 56.46, lpc: 34.27, ndp: 5.59, bq: 0.0, gpc: 0.51, ppc: 2.38, oth: 0.78 },
    "York South—Weston—Etobicoke": { cpc: 24.12, lpc: 65.71, ndp: 6.6, bq: 0.0, gpc: 1.73, ppc: 1.81, oth: 0.03 },
    "Brandon—Souris": { cpc: 64.05, lpc: 20.68, ndp: 11.41, bq: 0.0, gpc: 0.03, ppc: 3.8, oth: 0.04 },
    "Churchill—Keewatinook Aski": { cpc: 25.96, lpc: 43.4, ndp: 23.71, bq: 0.0, gpc: 4.63, ppc: 2.31, oth: 0.0 },
    "Elmwood—Transcona": { cpc: 34.44, lpc: 28.92, ndp: 30.84, bq: 0.0, gpc: 2.7, ppc: 3.09, oth: 0.01 },
    "Kildonan—St. Paul": { cpc: 41.43, lpc: 43.73, ndp: 12.05, bq: 0.0, gpc: 0.43, ppc: 2.26, oth: 0.1 },
    "Portage—Lisgar": { cpc: 59.63, lpc: 20.12, ndp: 7.96, bq: 0.0, gpc: 0.0, ppc: 10.71, oth: 1.58 },
    "Provencher": { cpc: 51.0, lpc: 27.96, ndp: 6.69, bq: 0.0, gpc: 3.78, ppc: 7.9, oth: 2.67 },
    "Riding Mountain": { cpc: 62.02, lpc: 21.44, ndp: 7.89, bq: 0.0, gpc: 3.1, ppc: 4.73, oth: 0.82 },
    "St. Boniface—St. Vital": { cpc: 24.72, lpc: 61.6, ndp: 9.59, bq: 0.0, gpc: 1.84, ppc: 1.62, oth: 0.63 },
    "Selkirk—Interlake—Eastman": { cpc: 59.74, lpc: 22.3, ndp: 10.57, bq: 0.0, gpc: 3.95, ppc: 3.44, oth: 0.0 },
    "Winnipeg Centre": { cpc: 13.94, lpc: 50.58, ndp: 28.02, bq: 0.0, gpc: 3.64, ppc: 2.0, oth: 1.82 },
    "Winnipeg North": { cpc: 11.53, lpc: 73.0, ndp: 12.3, bq: 0.0, gpc: 1.47, ppc: 1.48, oth: 0.22 },
    "Winnipeg South": { cpc: 27.04, lpc: 63.91, ndp: 6.15, bq: 0.0, gpc: 1.71, ppc: 1.18, oth: 0.0 },
    "Winnipeg South Centre": { cpc: 24.06, lpc: 62.21, ndp: 9.17, bq: 0.0, gpc: 3.19, ppc: 1.03, oth: 0.35 },
    "Winnipeg West": { cpc: 34.95, lpc: 54.56, ndp: 6.7, bq: 0.0, gpc: 2.5, ppc: 1.27, oth: 0.02 },
    "Battlefords—Lloydminster—Meadow Lake": { cpc: 71.26, lpc: 12.46, ndp: 7.09, bq: 0.0, gpc: 1.15, ppc: 2.72, oth: 5.32 },
    "Carlton Trail—Eagle Creek": { cpc: 74.44, lpc: 9.62, ndp: 7.97, bq: 0.0, gpc: 1.43, ppc: 4.34, oth: 2.19 },
    "Desnethé—Missinippi—Churchill River": { cpc: 20.5, lpc: 64.72, ndp: 10.84, bq: 0.0, gpc: 1.42, ppc: 1.16, oth: 1.35 },
    "Moose Jaw—Lake Centre—Lanigan": { cpc: 69.1, lpc: 10.97, ndp: 11.12, bq: 0.0, gpc: 1.64, ppc: 5.49, oth: 1.68 },
    "Prince Albert": { cpc: 66.57, lpc: 19.68, ndp: 8.09, bq: 0.0, gpc: 1.59, ppc: 3.06, oth: 1.0 },
    "Regina—Lewvan": { cpc: 51.07, lpc: 25.38, ndp: 19.97, bq: 0.0, gpc: 1.93, ppc: 1.65, oth: 0.0 },
    "Regina—Qu'Appelle": { cpc: 64.66, lpc: 17.63, ndp: 12.61, bq: 0.0, gpc: 2.85, ppc: 2.26, oth: 0.0 },
    "Regina—Wascana": { cpc: 46.98, lpc: 40.67, ndp: 8.82, bq: 0.0, gpc: 2.13, ppc: 1.41, oth: 0.0 },
    "Saskatoon South": { cpc: 53.6, lpc: 25.12, ndp: 17.29, bq: 0.0, gpc: 1.89, ppc: 2.11, oth: 0.0 },
    "Saskatoon—University": { cpc: 54.82, lpc: 19.93, ndp: 21.0, bq: 0.0, gpc: 1.52, ppc: 2.05, oth: 0.68 },
    "Saskatoon West": { cpc: 54.67, lpc: 15.86, ndp: 24.56, bq: 0.0, gpc: 1.77, ppc: 3.14, oth: 0.0 },
    "Souris—Moose Mountain": { cpc: 81.62, lpc: 7.24, ndp: 4.48, bq: 0.0, gpc: 0.09, ppc: 4.21, oth: 2.35 },
    "Swift Current—Grasslands—Kindersley": { cpc: 77.94, lpc: 7.11, ndp: 5.73, bq: 0.0, gpc: 1.27, ppc: 3.49, oth: 4.46 },
    "Yorkton—Melville": { cpc: 73.82, lpc: 10.87, ndp: 6.74, bq: 0.0, gpc: 2.61, ppc: 4.23, oth: 1.73 },
    "Airdrie—Cochrane": { cpc: 55.88, lpc: 22.86, ndp: 5.63, bq: 0.0, gpc: 5.93, ppc: 3.53, oth: 6.16 },
    "Battle River—Crowfoot": { cpc: 71.53, lpc: 10.29, ndp: 3.93, bq: 0.0, gpc: 4.64, ppc: 4.3, oth: 5.3 },
    "Bow River": { cpc: 68.96, lpc: 18.81, ndp: 3.76, bq: 0.0, gpc: 0.0, ppc: 4.49, oth: 3.98 },
    "Calgary Centre": { cpc: 36.51, lpc: 52.0, ndp: 4.76, bq: 0.0, gpc: 5.89, ppc: 0.0, oth: 0.83 },
    "Calgary Confederation": { cpc: 32.32, lpc: 47.58, ndp: 5.07, bq: 0.0, gpc: 13.19, ppc: 1.51, oth: 0.32 },
    "Calgary Crowfoot": { cpc: 43.78, lpc: 41.7, ndp: 5.22, bq: 0.0, gpc: 6.78, ppc: 1.7, oth: 0.83 },
    "Calgary East": { cpc: 43.9, lpc: 37.14, ndp: 6.08, bq: 0.0, gpc: 8.92, ppc: 2.74, oth: 1.23 },
    "Calgary Heritage": { cpc: 50.3, lpc: 33.68, ndp: 6.03, bq: 0.0, gpc: 6.23, ppc: 2.03, oth: 1.72 },
    "Calgary McKnight": { cpc: 22.11, lpc: 68.2, ndp: 4.23, bq: 0.0, gpc: 3.7, ppc: 1.17, oth: 0.59 },
    "Calgary Midnapore": { cpc: 55.29, lpc: 27.57, ndp: 6.88, bq: 0.0, gpc: 6.26, ppc: 2.57, oth: 1.43 },
    "Calgary Nose Hill": { cpc: 45.08, lpc: 39.76, ndp: 5.58, bq: 0.0, gpc: 6.68, ppc: 1.8, oth: 1.1 },
    "Calgary Shepard": { cpc: 53.59, lpc: 29.4, ndp: 5.68, bq: 0.0, gpc: 7.53, ppc: 2.31, oth: 1.49 },
    "Calgary Signal Hill": { cpc: 48.29, lpc: 37.75, ndp: 4.62, bq: 0.0, gpc: 6.95, ppc: 1.5, oth: 0.89 },
    "Calgary Skyview": { cpc: 32.41, lpc: 57.6, ndp: 4.82, bq: 0.0, gpc: 3.31, ppc: 1.24, oth: 0.62 },
    "Edmonton Centre": { cpc: 26.3, lpc: 60.73, ndp: 9.92, bq: 0.0, gpc: 0.45, ppc: 1.8, oth: 0.79 },
    "Edmonton Gateway": { cpc: 36.33, lpc: 51.66, ndp: 8.63, bq: 0.0, gpc: 0.9, ppc: 2.2, oth: 0.27 },
    "Edmonton Griesbach": { cpc: 36.68, lpc: 36.96, ndp: 16.49, bq: 0.0, gpc: 5.79, ppc: 2.76, oth: 1.31 },
    "Edmonton Manning": { cpc: 38.48, lpc: 46.44, ndp: 11.74, bq: 0.0, gpc: 0.0, ppc: 3.02, oth: 0.32 },
    "Edmonton Northwest": { cpc: 38.26, lpc: 48.99, ndp: 9.92, bq: 0.0, gpc: 0.14, ppc: 2.55, oth: 0.14 },
    "Edmonton Riverbend": { cpc: 36.89, lpc: 48.83, ndp: 8.02, bq: 0.0, gpc: 4.71, ppc: 1.5, oth: 0.04 },
    "Edmonton Southeast": { cpc: 28.62, lpc: 62.27, ndp: 6.86, bq: 0.0, gpc: 0.0, ppc: 1.99, oth: 0.27 },
    "Edmonton Strathcona": { cpc: 33.07, lpc: 26.89, ndp: 28.96, bq: 0.0, gpc: 7.8, ppc: 2.57, oth: 0.71 },
    "Edmonton West": { cpc: 38.85, lpc: 50.22, ndp: 8.45, bq: 0.0, gpc: 0.22, ppc: 2.0, oth: 0.28 },
    "Foothills": { cpc: 65.36, lpc: 15.98, ndp: 4.4, bq: 0.0, gpc: 6.41, ppc: 3.61, oth: 4.24 },
    "Fort McMurray—Cold Lake": { cpc: 66.92, lpc: 16.84, ndp: 4.04, bq: 0.0, gpc: 4.88, ppc: 5.77, oth: 1.55 },
    "Grande Prairie": { cpc: 73.11, lpc: 10.78, ndp: 5.08, bq: 0.0, gpc: 0.0, ppc: 4.98, oth: 6.05 },
    "Lakeland": { cpc: 70.11, lpc: 12.09, ndp: 4.29, bq: 0.0, gpc: 4.52, ppc: 5.14, oth: 3.85 },
    "Leduc—Wetaskiwin": { cpc: 67.62, lpc: 18.26, ndp: 7.6, bq: 0.0, gpc: 0.11, ppc: 5.5, oth: 0.91 },
    "Lethbridge": { cpc: 52.14, lpc: 34.22, ndp: 7.32, bq: 0.0, gpc: 0.0, ppc: 2.99, oth: 3.33 },
    "Medicine Hat—Cardston—Warner": { cpc: 64.01, lpc: 16.59, ndp: 5.47, bq: 0.0, gpc: 6.79, ppc: 4.17, oth: 2.98 },
    "Parkland": { cpc: 67.37, lpc: 16.07, ndp: 7.03, bq: 0.0, gpc: 0.0, ppc: 5.54, oth: 3.98 },
    "Peace River—Westlock": { cpc: 64.41, lpc: 13.6, ndp: 5.47, bq: 0.0, gpc: 3.92, ppc: 5.93, oth: 6.68 },
    "Ponoka—Didsbury": { cpc: 72.62, lpc: 12.01, ndp: 4.74, bq: 0.0, gpc: 0.0, ppc: 6.58, oth: 4.06 },
    "Red Deer": { cpc: 63.27, lpc: 20.59, ndp: 7.34, bq: 0.0, gpc: 0.0, ppc: 5.43, oth: 3.36 },
    "Sherwood Park—Fort Saskatchewan": { cpc: 54.55, lpc: 27.96, ndp: 7.92, bq: 0.0, gpc: 4.72, ppc: 3.06, oth: 1.79 },
    "St. Albert—Sturgeon River": { cpc: 57.12, lpc: 28.0, ndp: 9.72, bq: 0.0, gpc: 0.0, ppc: 3.66, oth: 1.51 },
    "Yellowhead": { cpc: 56.23, lpc: 23.91, ndp: 5.54, bq: 0.0, gpc: 5.89, ppc: 3.97, oth: 4.45 },
    "Abbotsford—South Langley": { cpc: 50.24, lpc: 37.94, ndp: 5.21, bq: 0.0, gpc: 1.2, ppc: 5.42, oth: 0.0 },
    "Burnaby Central": { cpc: 27.97, lpc: 52.13, ndp: 13.04, bq: 0.0, gpc: 1.28, ppc: 2.99, oth: 2.59 },
    "Burnaby North—Seymour": { cpc: 29.34, lpc: 59.69, ndp: 7.61, bq: 0.0, gpc: 1.3, ppc: 2.06, oth: 0.0 },
    "Cariboo—Prince George": { cpc: 59.0, lpc: 24.78, ndp: 6.11, bq: 0.0, gpc: 1.39, ppc: 6.65, oth: 2.08 },
    "Chilliwack—Hope": { cpc: 56.2, lpc: 27.66, ndp: 8.38, bq: 0.0, gpc: 1.19, ppc: 6.57, oth: 0.0 },
    "Cloverdale—Langley City": { cpc: 37.48, lpc: 53.64, ndp: 5.38, bq: 0.0, gpc: 0.0, ppc: 3.51, oth: 0.0 },
    "Columbia—Kootenay—Southern Rockies": { cpc: 61.25, lpc: 16.6, ndp: 13.36, bq: 0.0, gpc: 1.8, ppc: 6.99, oth: 0.0 },
    "Coquitlam—Port Coquitlam": { cpc: 33.29, lpc: 55.39, ndp: 7.92, bq: 0.0, gpc: 0.0, ppc: 3.39, oth: 0.0 },
    "Courtenay—Alberni": { cpc: 46.72, lpc: 26.85, ndp: 16.62, bq: 0.0, gpc: 3.64, ppc: 5.23, oth: 0.94 },
    "Cowichan—Malahat—Langford": { cpc: 41.9, lpc: 31.99, ndp: 16.42, bq: 0.0, gpc: 3.18, ppc: 6.51, oth: 0.0 },
    "Delta": { cpc: 33.52, lpc: 56.2, ndp: 4.79, bq: 0.0, gpc: 0.77, ppc: 1.74, oth: 2.99 },
    "Esquimalt—Saanich—Sooke": { cpc: 30.4, lpc: 41.94, ndp: 16.28, bq: 0.0, gpc: 4.46, ppc: 4.73, oth: 2.17 },
    "Fleetwood—Port Kells": { cpc: 28.89, lpc: 61.48, ndp: 5.35, bq: 0.0, gpc: 0.67, ppc: 2.06, oth: 1.56 },
    "Kamloops—Shuswap—Central Rockies": { cpc: 55.34, lpc: 26.99, ndp: 7.99, bq: 0.0, gpc: 2.17, ppc: 7.03, oth: 0.48 },
    "Kamloops—Thompson—Nicola": { cpc: 53.15, lpc: 28.58, ndp: 9.06, bq: 0.0, gpc: 1.59, ppc: 5.12, oth: 2.5 },
    "Kelowna": { cpc: 47.73, lpc: 39.13, ndp: 6.2, bq: 0.0, gpc: 1.18, ppc: 5.77, oth: 0.0 },
    "Langley Township—Fraser Heights": { cpc: 47.6, lpc: 42.36, ndp: 5.49, bq: 0.0, gpc: 0.91, ppc: 3.43, oth: 0.21 },
    "Mission—Matsqui—Abbotsford": { cpc: 52.37, lpc: 35.57, ndp: 5.19, bq: 0.0, gpc: 1.43, ppc: 5.44, oth: 0.0 },
    "Nanaimo—Ladysmith": { cpc: 41.48, lpc: 27.18, ndp: 11.9, bq: 0.0, gpc: 13.95, ppc: 5.49, oth: 0.0 },
    "New Westminster—Burnaby—Maillardville": { cpc: 30.69, lpc: 45.21, ndp: 18.19, bq: 0.0, gpc: 1.92, ppc: 3.83, oth: 0.17 },
    "North Island—Powell River": { cpc: 50.55, lpc: 24.55, ndp: 14.3, bq: 0.0, gpc: 2.83, ppc: 4.47, oth: 3.3 },
    "North Vancouver—Capilano": { cpc: 30.35, lpc: 61.03, ndp: 5.11, bq: 0.0, gpc: 1.53, ppc: 1.87, oth: 0.12 },
    "Okanagan Lake West—South Kelowna": { cpc: 53.92, lpc: 34.22, ndp: 5.47, bq: 0.0, gpc: 1.06, ppc: 5.32, oth: 0.0 },
    "Pitt Meadows—Maple Ridge": { cpc: 43.13, lpc: 37.84, ndp: 9.43, bq: 0.0, gpc: 0.12, ppc: 4.51, oth: 4.97 },
    "Port Moody—Coquitlam": { cpc: 38.44, lpc: 46.87, ndp: 10.94, bq: 0.0, gpc: 0.0, ppc: 2.8, oth: 0.95 },
    "Prince George—Peace River—Northern Rockies": { cpc: 61.69, lpc: 12.71, ndp: 3.88, bq: 0.0, gpc: 1.25, ppc: 7.59, oth: 12.88 },
    "Richmond Centre—Marpole": { cpc: 37.5, lpc: 53.93, ndp: 5.6, bq: 0.0, gpc: 1.15, ppc: 1.83, oth: 0.0 },
    "Richmond East—Steveston": { cpc: 35.08, lpc: 57.17, ndp: 5.2, bq: 0.0, gpc: 0.84, ppc: 1.72, oth: 0.0 },
    "Saanich—Gulf Islands": { cpc: 33.34, lpc: 36.59, ndp: 7.47, bq: 0.0, gpc: 18.22, ppc: 3.11, oth: 1.27 },
    "Similkameen—South Okanagan—West Kootenay": { cpc: 52.8, lpc: 24.57, ndp: 14.22, bq: 0.0, gpc: 1.63, ppc: 6.78, oth: 0.0 },
    "Skeena—Bulkley Valley": { cpc: 49.92, lpc: 14.0, ndp: 15.28, bq: 0.0, gpc: 1.8, ppc: 7.49, oth: 11.51 },
    "South Surrey—White Rock": { cpc: 42.27, lpc: 51.21, ndp: 3.83, bq: 0.0, gpc: 0.0, ppc: 2.69, oth: 0.0 },
    "Surrey Centre": { cpc: 21.87, lpc: 62.44, ndp: 7.58, bq: 0.0, gpc: 0.81, ppc: 2.87, oth: 4.44 },
    "Surrey Newton": { cpc: 14.89, lpc: 70.33, ndp: 6.62, bq: 0.0, gpc: 0.0, ppc: 1.79, oth: 6.38 },
    "Vancouver Centre": { cpc: 25.12, lpc: 61.67, ndp: 9.04, bq: 0.0, gpc: 1.51, ppc: 2.65, oth: 0.0 },
    "Vancouver East": { cpc: 16.52, lpc: 39.64, ndp: 22.23, bq: 0.0, gpc: 4.05, ppc: 2.97, oth: 14.58 },
    "Vancouver Fraserview—South Burnaby": { cpc: 24.01, lpc: 61.4, ndp: 8.87, bq: 0.0, gpc: 0.38, ppc: 2.31, oth: 3.04 },
    "Vancouver Granville": { cpc: 28.88, lpc: 57.63, ndp: 10.01, bq: 0.0, gpc: 1.11, ppc: 1.96, oth: 0.42 },
    "Vancouver Kingsway": { cpc: 19.99, lpc: 54.21, ndp: 18.5, bq: 0.0, gpc: 1.78, ppc: 2.18, oth: 3.34 },
    "Vancouver Quadra": { cpc: 30.72, lpc: 60.31, ndp: 5.29, bq: 0.0, gpc: 2.17, ppc: 1.5, oth: 0.0 },
    "Vernon—Lake Country—Monashee": { cpc: 52.13, lpc: 31.09, ndp: 6.71, bq: 0.0, gpc: 2.13, ppc: 7.95, oth: 0.0 },
    "Victoria": { cpc: 19.46, lpc: 51.11, ndp: 16.17, bq: 0.0, gpc: 5.5, ppc: 3.08, oth: 4.69 },
    "West Vancouver—Sunshine Coast—Sea to Sky Country": { cpc: 33.81, lpc: 50.67, ndp: 8.1, bq: 0.0, gpc: 2.73, ppc: 3.06, oth: 1.64 },
    "Yukon": { cpc: 30.96, lpc: 37.87, ndp: 13.44, bq: 0.0, gpc: 5.78, ppc: 0.0, oth: 11.94 },
    "Northwest Territories": { cpc: 18.07, lpc: 46.17, ndp: 20.61, bq: 0.0, gpc: 3.28, ppc: 0.0, oth: 11.87 },
    "Nunavut": { cpc: 21.89, lpc: 45.91, ndp: 32.2, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 }
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