// Electoral data from the CSV

const electoralData = {
    "Avalon": { cpc: 37.24, lpc: 55.18, ndp: 5.83, bq: 0.0, gpc: 0.0, ppc: 1.74, oth: 0.0 },
    "Cape Spear": { cpc: 24.57, lpc: 63.5, ndp: 10.12, bq: 0.0, gpc: 0.0, ppc: 1.81, oth: 0.0 },
    "Central Newfoundland": { cpc: 50.02, lpc: 47.23, ndp: 2.75, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 },
    "Labrador": { cpc: 36.68, lpc: 49.63, ndp: 10.44, bq: 0.0, gpc: 0.0, ppc: 3.26, oth: 0.0 },
    "Long Range Mountains": { cpc: 43.69, lpc: 47.43, ndp: 4.81, bq: 0.0, gpc: 0.0, ppc: 4.08, oth: 0.0 },
    "St. John's East": { cpc: 23.86, lpc: 57.3, ndp: 16.68, bq: 0.0, gpc: 0.0, ppc: 2.16, oth: 0.0 },
    "Terra Nova—The Peninsulas": { cpc: 43.82, lpc: 49.27, ndp: 3.27, bq: 0.0, gpc: 0.0, ppc: 3.64, oth: 0.0 },
    "Cardigan": { cpc: 34.02, lpc: 53.56, ndp: 3.9, bq: 0.0, gpc: 4.8, ppc: 3.06, oth: 0.65 },
    "Charlottetown": { cpc: 34.42, lpc: 49.81, ndp: 4.31, bq: 0.0, gpc: 9.64, ppc: 1.81, oth: 0.0 },
    "Egmont": { cpc: 34.05, lpc: 48.52, ndp: 3.44, bq: 0.0, gpc: 9.37, ppc: 4.61, oth: 0.0 },
    "Malpeque": { cpc: 36.18, lpc: 44.16, ndp: 3.18, bq: 0.0, gpc: 13.89, ppc: 2.58, oth: 0.01 },
    "Acadie—Annapolis": { cpc: 57.04, lpc: 32.84, ndp: 5.12, bq: 0.0, gpc: 0.0, ppc: 5.0, oth: 0.0 },
    "Cape Breton—Canso—Antigonish": { cpc: 39.79, lpc: 49.56, ndp: 6.07, bq: 0.0, gpc: 0.5, ppc: 3.8, oth: 0.28 },
    "Central Nova": { cpc: 37.68, lpc: 48.91, ndp: 6.72, bq: 0.0, gpc: 1.58, ppc: 3.88, oth: 1.23 },
    "Cumberland—Colchester": { cpc: 51.18, lpc: 36.6, ndp: 4.98, bq: 0.0, gpc: 2.61, ppc: 3.94, oth: 0.69 },
    "Dartmouth—Cole Harbour": { cpc: 3.82, lpc: 65.82, ndp: 15.9, bq: 0.0, gpc: 3.5, ppc: 10.96, oth: 0.0 },
    "Halifax": { cpc: 17.66, lpc: 56.31, ndp: 20.26, bq: 0.0, gpc: 2.78, ppc: 2.48, oth: 0.51 },
    "Halifax West": { cpc: 26.59, lpc: 56.46, ndp: 11.65, bq: 0.0, gpc: 2.74, ppc: 2.4, oth: 0.16 },
    "Kings—Hants": { cpc: 35.41, lpc: 50.02, ndp: 8.03, bq: 0.0, gpc: 2.05, ppc: 4.5, oth: 0.0 },
    "Sackville—Bedford—Preston": { cpc: 30.54, lpc: 52.53, ndp: 10.99, bq: 0.0, gpc: 2.27, ppc: 3.61, oth: 0.06 },
    "South Shore—St. Margarets": { cpc: 49.99, lpc: 39.44, ndp: 7.61, bq: 0.0, gpc: 2.96, ppc: 0.0, oth: 0.0 },
    "Sydney—Glace Bay": { cpc: 40.09, lpc: 47.33, ndp: 8.41, bq: 0.0, gpc: 0.68, ppc: 3.25, oth: 0.24 },
    "Acadie—Bathurst": { cpc: 15.54, lpc: 70.16, ndp: 4.58, bq: 0.0, gpc: 2.87, ppc: 5.58, oth: 1.27 },
    "Beauséjour": { cpc: 21.78, lpc: 59.94, ndp: 4.47, bq: 0.0, gpc: 5.79, ppc: 7.21, oth: 0.81 },
    "Fredericton—Oromocto": { cpc: 38.82, lpc: 40.9, ndp: 5.31, bq: 0.0, gpc: 13.14, ppc: 0.33, oth: 1.51 },
    "Fundy Royal": { cpc: 52.62, lpc: 27.98, ndp: 5.98, bq: 0.0, gpc: 5.16, ppc: 8.26, oth: 0.0 },
    "Madawaska—Restigouche": { cpc: 30.06, lpc: 54.17, ndp: 2.42, bq: 0.0, gpc: 2.67, ppc: 6.92, oth: 3.76 },
    "Miramichi—Grand Lake": { cpc: 49.08, lpc: 38.45, ndp: 2.9, bq: 0.0, gpc: 4.58, ppc: 4.92, oth: 0.08 },
    "Moncton—Dieppe": { cpc: 26.26, lpc: 55.96, ndp: 7.09, bq: 0.0, gpc: 4.49, ppc: 6.21, oth: 0.0 },
    "Saint John—Kennebecasis": { cpc: 40.9, lpc: 46.07, ndp: 5.38, bq: 0.0, gpc: 2.98, ppc: 4.67, oth: 0.0 },
    "Saint John—St. Croix": { cpc: 52.78, lpc: 30.34, ndp: 5.34, bq: 0.0, gpc: 4.12, ppc: 7.27, oth: 0.15 },
    "Tobique—Mactaquac": { cpc: 58.59, lpc: 24.18, ndp: 4.65, bq: 0.0, gpc: 4.93, ppc: 6.79, oth: 0.86 },
    "Abitibi—Baie-James—Nunavik—Eeyou": { cpc: 25.61, lpc: 30.63, ndp: 7.19, bq: 28.29, gpc: 1.96, ppc: 4.37, oth: 1.96 },
    "Abitibi—Témiscamingue": { cpc: 19.61, lpc: 29.53, ndp: 3.91, bq: 39.2, gpc: 2.15, ppc: 4.05, oth: 1.55 },
    "Ahuntsic-Cartierville": { cpc: 12.53, lpc: 58.16, ndp: 6.85, bq: 16.03, gpc: 3.58, ppc: 2.85, oth: 0.0 },
    "Alfred-Pellan": { cpc: 20.15, lpc: 52.88, ndp: 4.53, bq: 18.63, gpc: 1.97, ppc: 0.37, oth: 1.47 },
    "Argenteuil—La Petite-Nation": { cpc: 20.79, lpc: 44.09, ndp: 4.19, bq: 23.36, gpc: 0.45, ppc: 6.38, oth: 0.73 },
    "Beauce": { cpc: 60.4, lpc: 11.25, ndp: 1.38, bq: 8.76, gpc: 0.83, ppc: 16.3, oth: 1.07 },
    "Beauharnois—Salaberry—Soulanges—Huntingdon": { cpc: 19.73, lpc: 33.19, ndp: 4.71, bq: 37.16, gpc: 0.25, ppc: 3.96, oth: 1.0 },
    "Beauport—Limoilou": { cpc: 44.24, lpc: 26.06, ndp: 5.36, bq: 20.78, gpc: 2.3, ppc: 0.35, oth: 0.91 },
    "Bécancour—Nicolet—Saurel—Alnôbak": { cpc: 27.9, lpc: 20.48, ndp: 3.22, bq: 42.0, gpc: 2.0, ppc: 2.89, oth: 1.51 },
    "Bellechasse—Les Etchemins—Lévis": { cpc: 66.58, lpc: 14.53, ndp: 2.4, bq: 13.46, gpc: 1.43, ppc: 0.0, oth: 1.59 },
    "Beloeil—Chambly": { cpc: 14.66, lpc: 29.89, ndp: 5.67, bq: 43.17, gpc: 2.71, ppc: 2.52, oth: 1.38 },
    "Berthier—Maskinongé": { cpc: 20.07, lpc: 20.67, ndp: 22.9, bq: 30.5, gpc: 1.39, ppc: 3.48, oth: 0.99 },
    "Bourassa": { cpc: 10.45, lpc: 65.82, ndp: 4.56, bq: 12.89, gpc: 2.14, ppc: 3.91, oth: 0.23 },
    "Brome—Missisquoi": { cpc: 24.88, lpc: 39.17, ndp: 3.64, bq: 24.55, gpc: 2.85, ppc: 3.55, oth: 1.36 },
    "Brossard—Saint-Lambert": { cpc: 17.93, lpc: 59.1, ndp: 5.93, bq: 13.78, gpc: 0.0, ppc: 2.64, oth: 0.62 },
    "Charlesbourg—Haute-Saint-Charles": { cpc: 59.07, lpc: 18.83, ndp: 2.96, bq: 14.92, gpc: 1.71, ppc: 2.07, oth: 0.44 },
    "Châteauguay—Les Jardins-de-Napierville": { cpc: 19.26, lpc: 42.19, ndp: 4.71, bq: 26.74, gpc: 1.83, ppc: 4.28, oth: 0.98 },
    "Chicoutimi—Le Fjord": { cpc: 55.21, lpc: 18.19, ndp: 2.45, bq: 21.51, gpc: 1.25, ppc: 1.34, oth: 0.05 },
    "Compton—Stanstead": { cpc: 26.17, lpc: 40.24, ndp: 4.32, bq: 21.18, gpc: 3.29, ppc: 4.06, oth: 0.74 },
    "Côte-du-Sud—Rivière-du-Loup—Kataskomiq—Témiscouata": { cpc: 59.81, lpc: 18.53, ndp: 1.71, bq: 18.35, gpc: 0.0, ppc: 0.34, oth: 1.25 },
    "Côte-Nord—Kawawachikamach—Nitassinan": { cpc: 35.0, lpc: 21.89, ndp: 2.63, bq: 38.96, gpc: 0.0, ppc: 0.0, oth: 1.52 },
    "Dorval—Lachine—LaSalle": { cpc: 17.66, lpc: 56.49, ndp: 7.39, bq: 10.75, gpc: 3.26, ppc: 4.45, oth: 0.0 },
    "Drummond": { cpc: 30.14, lpc: 23.06, ndp: 7.15, bq: 36.2, gpc: 0.0, ppc: 0.0, oth: 3.46 },
    "Gaspésie—Les Îles-de-la-Madeleine—Listuguj": { cpc: 13.47, lpc: 47.33, ndp: 2.65, bq: 33.38, gpc: 0.0, ppc: 2.34, oth: 0.83 },
    "Gatineau": { cpc: 16.75, lpc: 55.11, ndp: 4.95, bq: 16.31, gpc: 1.84, ppc: 4.38, oth: 0.66 },
    "Hochelaga—Rosemont-Est": { cpc: 8.04, lpc: 47.96, ndp: 13.21, bq: 24.79, gpc: 2.66, ppc: 2.78, oth: 0.57 },
    "Honoré-Mercier": { cpc: 15.3, lpc: 63.59, ndp: 4.05, bq: 10.91, gpc: 1.7, ppc: 4.35, oth: 0.1 },
    "Hull—Aylmer": { cpc: 16.15, lpc: 57.4, ndp: 7.27, bq: 11.14, gpc: 3.29, ppc: 3.93, oth: 0.81 },
    "Joliette—Manawan": { cpc: 16.34, lpc: 28.07, ndp: 3.8, bq: 43.92, gpc: 2.63, ppc: 3.74, oth: 1.5 },
    "Jonquière": { cpc: 42.23, lpc: 22.65, ndp: 3.05, bq: 29.7, gpc: 1.97, ppc: 0.0, oth: 0.4 },
    "La Pointe-de-l'Île": { cpc: 11.53, lpc: 40.54, ndp: 6.35, bq: 37.02, gpc: 0.0, ppc: 3.37, oth: 1.2 },
    "La Prairie—Atateken": { cpc: 16.19, lpc: 41.16, ndp: 4.53, bq: 32.89, gpc: 2.11, ppc: 3.02, oth: 0.1 },
    "Lac-Saint-Jean": { cpc: 38.81, lpc: 21.27, ndp: 1.91, bq: 36.1, gpc: 1.91, ppc: 0.0, oth: 0.0 },
    "Lac-Saint-Louis": { cpc: 26.19, lpc: 56.93, ndp: 7.02, bq: 3.41, gpc: 3.5, ppc: 2.95, oth: 0.0 },
    "LaSalle—Émard—Verdun": { cpc: 12.29, lpc: 51.06, ndp: 11.67, bq: 16.23, gpc: 3.78, ppc: 3.94, oth: 1.02 },
    "Laurentides—Labelle": { cpc: 17.74, lpc: 28.95, ndp: 3.58, bq: 40.81, gpc: 3.19, ppc: 4.4, oth: 1.33 },
    "Laurier—Sainte-Marie": { cpc: 7.78, lpc: 49.94, ndp: 20.07, bq: 16.09, gpc: 3.01, ppc: 2.19, oth: 0.92 },
    "Laval—Les Îles": { cpc: 25.31, lpc: 51.04, ndp: 4.18, bq: 12.59, gpc: 1.68, ppc: 5.2, oth: 0.0 },
    "Les Pays-d'en-Haut": { cpc: 19.36, lpc: 31.37, ndp: 4.36, bq: 36.43, gpc: 1.98, ppc: 5.15, oth: 1.35 },
    "Lévis—Lotbinière": { cpc: 64.2, lpc: 14.5, ndp: 3.59, bq: 13.62, gpc: 1.36, ppc: 2.2, oth: 0.53 },
    "Longueuil—Charles-LeMoyne": { cpc: 13.36, lpc: 47.5, ndp: 6.33, bq: 26.21, gpc: 3.06, ppc: 3.39, oth: 0.15 },
    "Longueuil—Saint-Hubert": { cpc: 11.35, lpc: 45.86, ndp: 4.97, bq: 31.19, gpc: 3.57, ppc: 2.79, oth: 0.27 },
    "Louis-Hébert": { cpc: 34.87, lpc: 40.03, ndp: 3.95, bq: 17.89, gpc: 2.92, ppc: 0.0, oth: 0.34 },
    "Louis-Saint-Laurent—Akiawenhrahk": { cpc: 65.65, lpc: 15.97, ndp: 2.54, bq: 11.73, gpc: 1.4, ppc: 1.93, oth: 0.79 },
    "Marc-Aurèle-Fortin": { cpc: 18.28, lpc: 50.15, ndp: 5.08, bq: 22.15, gpc: 0.0, ppc: 3.23, oth: 1.11 },
    "Mégantic—L'Érable—Lotbinière": { cpc: 69.85, lpc: 12.14, ndp: 1.47, bq: 11.15, gpc: 1.26, ppc: 3.11, oth: 1.03 },
    "Mirabel": { cpc: 21.93, lpc: 29.35, ndp: 5.41, bq: 34.87, gpc: 2.78, ppc: 4.49, oth: 1.17 },
    "Mount Royal": { cpc: 31.94, lpc: 55.63, ndp: 4.46, bq: 2.5, gpc: 2.82, ppc: 2.52, oth: 0.12 },
    "Mont-Saint-Bruno—L'Acadie": { cpc: 16.04, lpc: 41.2, ndp: 5.24, bq: 34.74, gpc: 0.2, ppc: 2.5, oth: 0.08 },
    "Montcalm": { cpc: 19.78, lpc: 24.71, ndp: 4.05, bq: 41.62, gpc: 3.37, ppc: 5.19, oth: 1.28 },
    "Montmorency—Charlevoix": { cpc: 48.27, lpc: 21.02, ndp: 2.51, bq: 24.14, gpc: 1.32, ppc: 1.92, oth: 0.81 },
    "Notre-Dame-de-Grâce—Westmount": { cpc: 19.77, lpc: 56.69, ndp: 11.25, bq: 4.06, gpc: 4.58, ppc: 3.43, oth: 0.22 },
    "Outremont": { cpc: 11.93, lpc: 52.81, ndp: 16.96, bq: 11.63, gpc: 3.97, ppc: 2.5, oth: 0.2 },
    "Papineau": { cpc: 7.82, lpc: 59.31, ndp: 13.95, bq: 11.21, gpc: 4.02, ppc: 2.72, oth: 0.97 },
    "Pierre-Boucher—Les Patriotes—Verchères": { cpc: 15.29, lpc: 32.77, ndp: 5.1, bq: 43.49, gpc: 0.0, ppc: 2.43, oth: 0.91 },
    "Pierrefonds—Dollard": { cpc: 28.75, lpc: 56.46, ndp: 6.07, bq: 5.04, gpc: 0.0, ppc: 3.68, oth: 0.0 },
    "Pontiac—Kitigan Zibi": { cpc: 30.33, lpc: 45.4, ndp: 6.13, bq: 9.93, gpc: 3.21, ppc: 4.56, oth: 0.44 },
    "Portneuf—Jacques-Cartier": { cpc: 66.66, lpc: 14.08, ndp: 2.29, bq: 13.96, gpc: 0.0, ppc: 2.24, oth: 0.76 },
    "Québec Centre": { cpc: 27.49, lpc: 39.81, ndp: 7.38, bq: 20.45, gpc: 2.8, ppc: 1.73, oth: 0.34 },
    "Repentigny": { cpc: 15.38, lpc: 35.72, ndp: 4.94, bq: 41.24, gpc: 0.0, ppc: 0.0, oth: 2.73 },
    "Richmond—Arthabaska": { cpc: 64.45, lpc: 14.1, ndp: 2.2, bq: 14.77, gpc: 0.0, ppc: 3.33, oth: 1.14 },
    "Rimouski—La Matapédia": { cpc: 19.37, lpc: 27.9, ndp: 3.86, bq: 43.39, gpc: 0.0, ppc: 2.56, oth: 2.92 },
    "Rivière-des-Mille-Îles": { cpc: 16.62, lpc: 41.84, ndp: 4.45, bq: 30.35, gpc: 2.29, ppc: 3.19, oth: 1.26 },
    "Rivière-du-Nord": { cpc: 20.43, lpc: 27.84, ndp: 4.45, bq: 40.43, gpc: 0.38, ppc: 4.65, oth: 1.83 },
    "Rosemont—La Petite-Patrie": { cpc: 7.78, lpc: 32.95, ndp: 36.05, bq: 19.23, gpc: 3.61, ppc: 0.0, oth: 0.38 },
    "Saint-Hyacinthe—Bagot—Acton": { cpc: 22.86, lpc: 28.02, ndp: 7.5, bq: 37.06, gpc: 0.0, ppc: 3.3, oth: 1.26 },
    "Saint-Jean": { cpc: 21.11, lpc: 34.02, ndp: 4.59, bq: 35.21, gpc: 2.76, ppc: 0.0, oth: 2.31 },
    "Saint-Laurent": { cpc: 25.47, lpc: 60.27, ndp: 5.7, bq: 5.1, gpc: 0.12, ppc: 3.14, oth: 0.2 },
    "Saint-Léonard—Saint-Michel": { cpc: 14.79, lpc: 71.78, ndp: 4.41, bq: 5.21, gpc: 0.0, ppc: 3.81, oth: 0.0 },
    "Saint-Maurice—Champlain": { cpc: 26.87, lpc: 46.27, ndp: 2.88, bq: 20.73, gpc: 1.51, ppc: 0.0, oth: 1.74 },
    "Shefford": { cpc: 19.39, lpc: 39.09, ndp: 3.24, bq: 30.95, gpc: 2.22, ppc: 3.99, oth: 1.12 },
    "Sherbrooke": { cpc: 20.22, lpc: 43.19, ndp: 8.36, bq: 21.11, gpc: 3.53, ppc: 2.79, oth: 0.8 },
    "Terrebonne": { cpc: 17.55, lpc: 36.0, ndp: 4.25, bq: 32.08, gpc: 1.86, ppc: 3.23, oth: 5.03 },
    "Thérèse-De Blainville": { cpc: 17.75, lpc: 41.32, ndp: 4.46, bq: 30.39, gpc: 2.42, ppc: 3.1, oth: 0.56 },
    "Trois-Rivières": { cpc: 42.05, lpc: 29.94, ndp: 4.4, bq: 19.51, gpc: 1.45, ppc: 1.97, oth: 0.68 },
    "Vaudreuil": { cpc: 24.38, lpc: 51.3, ndp: 6.0, bq: 14.33, gpc: 2.92, ppc: 0.0, oth: 1.07 },
    "Ville-Marie—Le Sud-Ouest—Île-des-Sœurs": { cpc: 19.17, lpc: 56.09, ndp: 10.31, bq: 8.24, gpc: 3.11, ppc: 2.79, oth: 0.28 },
    "Vimy": { cpc: 20.53, lpc: 54.29, ndp: 5.27, bq: 15.29, gpc: 0.0, ppc: 4.62, oth: 0.0 },
    "Ajax": { cpc: 28.95, lpc: 62.45, ndp: 6.8, bq: 0.0, gpc: 1.8, ppc: 0.0, oth: 0.0 },
    "Algonquin—Renfrew—Pembroke": { cpc: 59.46, lpc: 23.49, ndp: 11.19, bq: 0.0, gpc: 1.5, ppc: 1.91, oth: 2.45 },
    "Aurora—Oak Ridges—Richmond Hill": { cpc: 44.29, lpc: 47.53, ndp: 3.76, bq: 0.0, gpc: 0.13, ppc: 0.85, oth: 3.45 },
    "Barrie South—Innisfil": { cpc: 55.79, lpc: 34.14, ndp: 8.21, bq: 0.0, gpc: 0.0, ppc: 1.87, oth: 0.0 },
    "Barrie—Springwater—Oro-Medonte": { cpc: 53.51, lpc: 35.89, ndp: 8.64, bq: 0.0, gpc: 0.16, ppc: 1.68, oth: 0.11 },
    "Bay of Quinte": { cpc: 46.53, lpc: 42.85, ndp: 7.77, bq: 0.0, gpc: 1.66, ppc: 1.18, oth: 0.0 },
    "Beaches—East York": { cpc: 16.67, lpc: 66.34, ndp: 11.63, bq: 0.0, gpc: 2.08, ppc: 0.76, oth: 2.52 },
    "Bowmanville—Oshawa North": { cpc: 51.27, lpc: 35.63, ndp: 9.36, bq: 0.0, gpc: 0.0, ppc: 1.29, oth: 2.45 },
    "Brampton Centre": { cpc: 34.59, lpc: 53.73, ndp: 7.73, bq: 0.0, gpc: 0.0, ppc: 0.83, oth: 3.12 },
    "Brampton—Chinguacousy Park": { cpc: 32.92, lpc: 54.47, ndp: 7.94, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 4.68 },
    "Brampton East": { cpc: 31.81, lpc: 59.84, ndp: 7.73, bq: 0.0, gpc: 0.0, ppc: 0.61, oth: 0.0 },
    "Brampton North—Caledon": { cpc: 36.09, lpc: 56.48, ndp: 6.75, bq: 0.0, gpc: 0.29, ppc: 0.22, oth: 0.18 },
    "Brampton South": { cpc: 32.27, lpc: 59.59, ndp: 6.59, bq: 0.0, gpc: 0.0, ppc: 0.65, oth: 0.89 },
    "Brampton West": { cpc: 29.77, lpc: 61.04, ndp: 6.09, bq: 0.0, gpc: 0.0, ppc: 0.55, oth: 2.54 },
    "Brantford—Brant South—Six Nations": { cpc: 48.75, lpc: 34.06, ndp: 10.97, bq: 0.0, gpc: 2.11, ppc: 2.22, oth: 1.89 },
    "Bruce—Grey—Owen Sound": { cpc: 56.35, lpc: 29.19, ndp: 6.92, bq: 0.0, gpc: 2.31, ppc: 1.92, oth: 3.3 },
    "Burlington": { cpc: 40.94, lpc: 50.76, ndp: 5.31, bq: 0.0, gpc: 1.43, ppc: 0.92, oth: 0.64 },
    "Burlington North—Milton West": { cpc: 40.07, lpc: 52.95, ndp: 4.67, bq: 0.0, gpc: 1.4, ppc: 0.9, oth: 0.0 },
    "Cambridge": { cpc: 40.61, lpc: 45.93, ndp: 9.04, bq: 0.0, gpc: 2.65, ppc: 1.77, oth: 0.0 },
    "Carleton": { cpc: 56.92, lpc: 35.32, ndp: 5.55, bq: 0.0, gpc: 1.55, ppc: 0.63, oth: 0.04 },
    "Chatham-Kent—Leamington": { cpc: 53.05, lpc: 33.76, ndp: 8.12, bq: 0.0, gpc: 1.24, ppc: 3.83, oth: 0.0 },
    "Davenport": { cpc: 14.33, lpc: 58.15, ndp: 23.24, bq: 0.0, gpc: 2.09, ppc: 0.9, oth: 1.29 },
    "Don Valley North": { cpc: 35.34, lpc: 57.87, ndp: 4.79, bq: 0.0, gpc: 1.29, ppc: 0.67, oth: 0.04 },
    "Don Valley West": { cpc: 32.04, lpc: 61.9, ndp: 4.37, bq: 0.0, gpc: 0.75, ppc: 0.56, oth: 0.38 },
    "Dufferin—Caledon": { cpc: 55.71, lpc: 32.83, ndp: 5.24, bq: 0.0, gpc: 3.37, ppc: 1.68, oth: 1.18 },
    "Eglinton—Lawrence": { cpc: 39.59, lpc: 53.18, ndp: 4.42, bq: 0.0, gpc: 2.14, ppc: 0.66, oth: 0.0 },
    "Elgin—St. Thomas—London South": { cpc: 60.07, lpc: 24.2, ndp: 8.77, bq: 0.0, gpc: 1.77, ppc: 3.09, oth: 2.09 },
    "Essex": { cpc: 54.5, lpc: 20.76, ndp: 18.72, bq: 0.0, gpc: 1.08, ppc: 2.82, oth: 2.11 },
    "Etobicoke Centre": { cpc: 38.13, lpc: 54.36, ndp: 5.35, bq: 0.0, gpc: 0.23, ppc: 1.53, oth: 0.4 },
    "Etobicoke—Lakeshore": { cpc: 36.24, lpc: 53.12, ndp: 6.7, bq: 0.0, gpc: 1.55, ppc: 1.02, oth: 1.37 },
    "Etobicoke North": { cpc: 27.33, lpc: 63.89, ndp: 5.04, bq: 0.0, gpc: 0.0, ppc: 0.97, oth: 2.77 },
    "Flamborough—Glanbrook—Brant North": { cpc: 50.68, lpc: 38.03, ndp: 7.52, bq: 0.0, gpc: 1.86, ppc: 1.57, oth: 0.34 },
    "Guelph": { cpc: 28.16, lpc: 50.15, ndp: 11.76, bq: 0.0, gpc: 6.2, ppc: 1.16, oth: 2.57 },
    "Haldimand—Norfolk": { cpc: 54.19, lpc: 31.77, ndp: 6.76, bq: 0.0, gpc: 0.0, ppc: 2.5, oth: 4.78 },
    "Haliburton—Kawartha Lakes": { cpc: 59.43, lpc: 27.56, ndp: 7.24, bq: 0.0, gpc: 1.85, ppc: 1.63, oth: 2.3 },
    "Hamilton Centre": { cpc: 23.82, lpc: 38.92, ndp: 30.1, bq: 0.0, gpc: 2.52, ppc: 1.97, oth: 2.67 },
    "Hamilton East—Stoney Creek": { cpc: 36.76, lpc: 48.15, ndp: 11.76, bq: 0.0, gpc: 1.49, ppc: 1.84, oth: 0.0 },
    "Hamilton Mountain": { cpc: 31.94, lpc: 44.42, ndp: 17.89, bq: 0.0, gpc: 1.68, ppc: 1.68, oth: 2.4 },
    "Hamilton West—Ancaster—Dundas": { cpc: 33.87, lpc: 52.13, ndp: 10.21, bq: 0.0, gpc: 2.0, ppc: 1.0, oth: 0.79 },
    "Hastings—Lennox and Addington—Tyendinaga": { cpc: 49.38, lpc: 37.71, ndp: 5.32, bq: 0.0, gpc: 1.27, ppc: 1.28, oth: 5.05 },
    "Humber River—Black Creek": { cpc: 19.58, lpc: 68.94, ndp: 8.21, bq: 0.0, gpc: 0.89, ppc: 0.91, oth: 1.47 },
    "Huron—Bruce": { cpc: 57.77, lpc: 29.97, ndp: 7.46, bq: 0.0, gpc: 0.0, ppc: 1.71, oth: 3.08 },
    "Kanata": { cpc: 41.31, lpc: 48.85, ndp: 7.32, bq: 0.0, gpc: 1.87, ppc: 0.64, oth: 0.0 },
    "Kapuskasing—Timmins—Mushkegowuk": { cpc: 35.54, lpc: 37.38, ndp: 22.47, bq: 0.0, gpc: 0.37, ppc: 3.61, oth: 0.64 },
    "Kenora—Kiiwetinoong": { cpc: 55.16, lpc: 25.52, ndp: 16.5, bq: 0.0, gpc: 1.16, ppc: 1.67, oth: 0.0 },
    "Kingston and the Islands": { cpc: 30.38, lpc: 50.84, ndp: 15.85, bq: 0.0, gpc: 2.0, ppc: 0.9, oth: 0.04 },
    "King—Vaughan": { cpc: 48.31, lpc: 46.65, ndp: 3.17, bq: 0.0, gpc: 0.9, ppc: 0.98, oth: 0.0 },
    "Kitchener Centre": { cpc: 33.39, lpc: 23.56, ndp: 10.46, bq: 0.0, gpc: 29.5, ppc: 1.86, oth: 1.22 },
    "Kitchener—Conestoga": { cpc: 43.58, lpc: 44.77, ndp: 6.14, bq: 0.0, gpc: 3.74, ppc: 1.74, oth: 0.04 },
    "Kitchener South—Hespeler": { cpc: 41.32, lpc: 43.96, ndp: 8.41, bq: 0.0, gpc: 2.63, ppc: 1.63, oth: 2.04 },
    "Lanark—Frontenac": { cpc: 57.3, lpc: 30.08, ndp: 7.82, bq: 0.0, gpc: 2.04, ppc: 1.49, oth: 1.27 },
    "Leeds—Grenville—Thousand Islands—Rideau Lakes": { cpc: 58.62, lpc: 29.53, ndp: 7.72, bq: 0.0, gpc: 2.75, ppc: 1.38, oth: 0.0 },
    "London Centre": { cpc: 31.36, lpc: 47.95, ndp: 17.08, bq: 0.0, gpc: 1.63, ppc: 1.36, oth: 0.62 },
    "London—Fanshawe": { cpc: 35.28, lpc: 33.83, ndp: 28.12, bq: 0.0, gpc: 0.0, ppc: 2.78, oth: 0.0 },
    "London West": { cpc: 39.64, lpc: 43.21, ndp: 11.81, bq: 0.0, gpc: 0.0, ppc: 1.21, oth: 4.14 },
    "Markham—Stouffville": { cpc: 37.52, lpc: 56.2, ndp: 4.22, bq: 0.0, gpc: 1.4, ppc: 0.66, oth: 0.0 },
    "Markham—Thornhill": { cpc: 28.1, lpc: 66.16, ndp: 3.96, bq: 0.0, gpc: 1.4, ppc: 0.38, oth: 0.0 },
    "Markham—Unionville": { cpc: 44.26, lpc: 50.79, ndp: 3.04, bq: 0.0, gpc: 1.91, ppc: 0.0, oth: 0.0 },
    "Middlesex—London": { cpc: 53.89, lpc: 32.65, ndp: 9.45, bq: 0.0, gpc: 1.42, ppc: 1.92, oth: 0.66 },
    "Milton East—Halton Hills South": { cpc: 45.66, lpc: 46.62, ndp: 4.71, bq: 0.0, gpc: 1.89, ppc: 1.12, oth: 0.0 },
    "Mississauga Centre": { cpc: 31.83, lpc: 60.01, ndp: 5.55, bq: 0.0, gpc: 1.18, ppc: 0.96, oth: 0.47 },
    "Mississauga East—Cooksville": { cpc: 34.61, lpc: 55.59, ndp: 5.11, bq: 0.0, gpc: 0.23, ppc: 1.47, oth: 2.99 },
    "Mississauga—Erin Mills": { cpc: 36.6, lpc: 56.46, ndp: 5.01, bq: 0.0, gpc: 1.17, ppc: 0.76, oth: 0.0 },
    "Mississauga—Lakeshore": { cpc: 42.27, lpc: 49.8, ndp: 4.76, bq: 0.0, gpc: 1.59, ppc: 0.97, oth: 0.61 },
    "Mississauga—Malton": { cpc: 32.95, lpc: 56.93, ndp: 6.54, bq: 0.0, gpc: 1.31, ppc: 0.07, oth: 2.19 },
    "Mississauga—Streetsville": { cpc: 37.74, lpc: 52.57, ndp: 5.91, bq: 0.0, gpc: 1.54, ppc: 0.85, oth: 1.39 },
    "Nepean": { cpc: 37.66, lpc: 52.12, ndp: 8.14, bq: 0.0, gpc: 1.44, ppc: 0.64, oth: 0.0 },
    "Newmarket—Aurora": { cpc: 41.88, lpc: 48.52, ndp: 5.64, bq: 0.0, gpc: 1.33, ppc: 0.96, oth: 1.67 },
    "New Tecumseth—Gwillimbury": { cpc: 54.59, lpc: 35.01, ndp: 6.64, bq: 0.0, gpc: 0.93, ppc: 1.79, oth: 1.04 },
    "Niagara Falls—Niagara-on-the-Lake": { cpc: 44.68, lpc: 42.43, ndp: 9.48, bq: 0.0, gpc: 1.53, ppc: 1.88, oth: 0.0 },
    "Niagara South": { cpc: 41.8, lpc: 41.63, ndp: 12.68, bq: 0.0, gpc: 1.57, ppc: 2.33, oth: 0.0 },
    "Niagara West": { cpc: 49.86, lpc: 35.51, ndp: 7.03, bq: 0.0, gpc: 2.09, ppc: 1.67, oth: 3.84 },
    "Nipissing—Timiskaming": { cpc: 39.3, lpc: 45.88, ndp: 12.79, bq: 0.0, gpc: 0.0, ppc: 2.03, oth: 0.0 },
    "Northumberland—Clarke": { cpc: 50.35, lpc: 39.32, ndp: 7.1, bq: 0.0, gpc: 1.93, ppc: 1.3, oth: 0.0 },
    "Oakville East": { cpc: 42.84, lpc: 50.7, ndp: 4.54, bq: 0.0, gpc: 1.17, ppc: 0.75, oth: 0.0 },
    "Oakville West": { cpc: 41.73, lpc: 52.02, ndp: 4.2, bq: 0.0, gpc: 1.23, ppc: 0.82, oth: 0.0 },
    "Orléans": { cpc: 31.69, lpc: 58.42, ndp: 7.1, bq: 0.0, gpc: 1.18, ppc: 0.61, oth: 1.0 },
    "Oshawa": { cpc: 50.77, lpc: 29.85, ndp: 16.2, bq: 0.0, gpc: 1.29, ppc: 1.9, oth: 0.0 },
    "Ottawa Centre": { cpc: 20.05, lpc: 56.25, ndp: 17.91, bq: 0.0, gpc: 2.27, ppc: 0.57, oth: 2.95 },
    "Ottawa South": { cpc: 30.75, lpc: 56.9, ndp: 9.19, bq: 0.0, gpc: 1.65, ppc: 0.73, oth: 0.78 },
    "Ottawa—Vanier—Gloucester": { cpc: 23.83, lpc: 57.44, ndp: 12.01, bq: 0.0, gpc: 2.33, ppc: 0.77, oth: 3.62 },
    "Ottawa West—Nepean": { cpc: 31.79, lpc: 52.7, ndp: 10.33, bq: 0.0, gpc: 2.18, ppc: 0.77, oth: 2.24 },
    "Oxford": { cpc: 56.86, lpc: 25.37, ndp: 9.97, bq: 0.0, gpc: 2.16, ppc: 2.69, oth: 2.95 },
    "Parry Sound—Muskoka": { cpc: 57.04, lpc: 26.01, ndp: 8.91, bq: 0.0, gpc: 4.37, ppc: 1.87, oth: 1.81 },
    "Perth—Wellington": { cpc: 58.46, lpc: 29.93, ndp: 9.2, bq: 0.0, gpc: 0.0, ppc: 2.41, oth: 0.0 },
    "Peterborough": { cpc: 45.49, lpc: 40.82, ndp: 9.89, bq: 0.0, gpc: 1.7, ppc: 1.04, oth: 1.05 },
    "Pickering—Brooklin": { cpc: 38.13, lpc: 54.13, ndp: 6.67, bq: 0.0, gpc: 0.18, ppc: 0.89, oth: 0.0 },
    "Prescott—Russell—Cumberland": { cpc: 35.55, lpc: 52.31, ndp: 5.27, bq: 0.0, gpc: 1.47, ppc: 1.47, oth: 3.94 },
    "Richmond Hill South": { cpc: 39.93, lpc: 49.76, ndp: 4.01, bq: 0.0, gpc: 0.0, ppc: 0.63, oth: 5.67 },
    "Sarnia—Lambton—Bkejwanong": { cpc: 57.64, lpc: 24.26, ndp: 11.57, bq: 0.0, gpc: 1.21, ppc: 2.84, oth: 2.49 },
    "Sault Ste. Marie—Algoma": { cpc: 43.32, lpc: 39.77, ndp: 14.01, bq: 0.0, gpc: 0.51, ppc: 1.33, oth: 1.06 },
    "Scarborough—Agincourt": { cpc: 31.65, lpc: 61.62, ndp: 4.86, bq: 0.0, gpc: 1.23, ppc: 0.63, oth: 0.0 },
    "Scarborough Centre—Don Valley East": { cpc: 28.03, lpc: 62.96, ndp: 6.76, bq: 0.0, gpc: 0.0, ppc: 0.98, oth: 1.26 },
    "Scarborough—Guildwood—Rouge Park": { cpc: 24.15, lpc: 67.73, ndp: 6.51, bq: 0.0, gpc: 0.0, ppc: 0.68, oth: 0.92 },
    "Scarborough North": { cpc: 19.19, lpc: 71.74, ndp: 5.46, bq: 0.0, gpc: 0.0, ppc: 0.54, oth: 3.07 },
    "Scarborough Southwest": { cpc: 23.05, lpc: 65.5, ndp: 7.95, bq: 0.0, gpc: 1.66, ppc: 0.67, oth: 1.16 },
    "Scarborough—Woburn": { cpc: 24.34, lpc: 65.84, ndp: 6.31, bq: 0.0, gpc: 0.0, ppc: 0.69, oth: 2.82 },
    "Simcoe—Grey": { cpc: 54.53, lpc: 32.37, ndp: 6.74, bq: 0.0, gpc: 3.14, ppc: 1.66, oth: 1.56 },
    "Simcoe North": { cpc: 49.58, lpc: 36.6, ndp: 8.34, bq: 0.0, gpc: 2.36, ppc: 1.87, oth: 1.25 },
    "Spadina—Harbourfront": { cpc: 27.79, lpc: 49.44, ndp: 19.26, bq: 0.0, gpc: 2.71, ppc: 0.8, oth: 0.0 },
    "St. Catharines": { cpc: 39.15, lpc: 46.25, ndp: 11.46, bq: 0.0, gpc: 1.48, ppc: 1.66, oth: 0.0 },
    "Stormont—Dundas—Glengarry": { cpc: 62.08, lpc: 28.52, ndp: 5.54, bq: 0.0, gpc: 1.74, ppc: 1.82, oth: 0.3 },
    "Sudbury": { cpc: 35.11, lpc: 44.59, ndp: 16.22, bq: 0.0, gpc: 1.65, ppc: 1.61, oth: 0.82 },
    "Sudbury East—Manitoulin—Nickel Belt": { cpc: 35.34, lpc: 42.42, ndp: 17.72, bq: 0.0, gpc: 1.5, ppc: 2.43, oth: 0.6 },
    "Taiaiako’n—Parkdale—High Park": { cpc: 17.37, lpc: 56.27, ndp: 22.23, bq: 0.0, gpc: 1.62, ppc: 0.87, oth: 1.64 },
    "Thornhill": { cpc: 55.71, lpc: 39.23, ndp: 2.86, bq: 0.0, gpc: 1.16, ppc: 1.03, oth: 0.0 },
    "Thunder Bay—Rainy River": { cpc: 37.15, lpc: 43.87, ndp: 16.05, bq: 0.0, gpc: 1.19, ppc: 1.74, oth: 0.0 },
    "Thunder Bay—Superior North": { cpc: 29.83, lpc: 50.8, ndp: 15.34, bq: 0.0, gpc: 1.45, ppc: 1.53, oth: 1.05 },
    "Toronto Centre": { cpc: 15.64, lpc: 60.91, ndp: 14.13, bq: 0.0, gpc: 6.41, ppc: 0.59, oth: 2.32 },
    "Toronto—Danforth": { cpc: 15.44, lpc: 60.01, ndp: 18.4, bq: 0.0, gpc: 1.59, ppc: 0.63, oth: 3.94 },
    "Toronto—St. Paul's": { cpc: 30.18, lpc: 56.91, ndp: 8.05, bq: 0.0, gpc: 4.17, ppc: 0.59, oth: 0.11 },
    "University—Rosedale": { cpc: 21.79, lpc: 57.0, ndp: 15.16, bq: 0.0, gpc: 3.55, ppc: 0.65, oth: 1.85 },
    "Vaughan—Woodbridge": { cpc: 43.43, lpc: 50.27, ndp: 3.32, bq: 0.0, gpc: 0.68, ppc: 1.21, oth: 1.09 },
    "Waterloo": { cpc: 32.26, lpc: 53.99, ndp: 9.99, bq: 0.0, gpc: 2.64, ppc: 1.11, oth: 0.0 },
    "Wellington—Halton Hills North": { cpc: 53.51, lpc: 34.95, ndp: 6.08, bq: 0.0, gpc: 3.54, ppc: 1.47, oth: 0.44 },
    "Whitby": { cpc: 39.01, lpc: 51.51, ndp: 7.25, bq: 0.0, gpc: 1.2, ppc: 1.04, oth: 0.0 },
    "Willowdale": { cpc: 36.8, lpc: 56.2, ndp: 4.98, bq: 0.0, gpc: 1.41, ppc: 0.61, oth: 0.0 },
    "Windsor—Tecumseh—Lakeshore": { cpc: 35.78, lpc: 41.26, ndp: 17.83, bq: 0.0, gpc: 1.05, ppc: 2.84, oth: 1.25 },
    "Windsor West": { cpc: 27.71, lpc: 40.18, ndp: 28.18, bq: 0.0, gpc: 0.0, ppc: 2.48, oth: 1.44 },
    "York Centre": { cpc: 41.54, lpc: 52.42, ndp: 4.97, bq: 0.0, gpc: 0.0, ppc: 1.07, oth: 0.0 },
    "York—Durham": { cpc: 58.37, lpc: 32.47, ndp: 6.31, bq: 0.0, gpc: 0.41, ppc: 1.5, oth: 0.95 },
    "York South—Weston—Etobicoke": { cpc: 25.65, lpc: 64.05, ndp: 7.66, bq: 0.0, gpc: 1.43, ppc: 1.17, oth: 0.04 },
    "Brandon—Souris": { cpc: 70.28, lpc: 21.91, ndp: 5.69, bq: 0.0, gpc: 0.05, ppc: 2.05, oth: 0.03 },
    "Churchill—Keewatinook Aski": { cpc: 29.9, lpc: 48.26, ndp: 12.41, bq: 0.0, gpc: 8.12, ppc: 1.31, oth: 0.0 },
    "Elmwood—Transcona": { cpc: 41.99, lpc: 34.04, ndp: 17.09, bq: 0.0, gpc: 5.02, ppc: 1.85, oth: 0.01 },
    "Kildonan—St. Paul": { cpc: 45.55, lpc: 46.42, ndp: 6.02, bq: 0.0, gpc: 0.72, ppc: 1.22, oth: 0.07 },
    "Portage—Lisgar": { cpc: 67.07, lpc: 21.86, ndp: 4.07, bq: 0.0, gpc: 0.0, ppc: 5.92, oth: 1.08 },
    "Provencher": { cpc: 55.25, lpc: 29.25, ndp: 3.29, bq: 0.0, gpc: 6.24, ppc: 4.21, oth: 1.76 },
    "Riding Mountain": { cpc: 66.09, lpc: 22.05, ndp: 3.82, bq: 0.0, gpc: 5.03, ppc: 2.48, oth: 0.53 },
    "St. Boniface—St. Vital": { cpc: 26.72, lpc: 64.27, ndp: 4.71, bq: 0.0, gpc: 3.03, ppc: 0.86, oth: 0.41 },
    "Selkirk—Interlake—Eastman": { cpc: 63.7, lpc: 22.96, ndp: 5.12, bq: 0.0, gpc: 6.42, ppc: 1.8, oth: 0.0 },
    "Winnipeg Centre": { cpc: 16.76, lpc: 58.74, ndp: 15.32, bq: 0.0, gpc: 6.68, ppc: 1.18, oth: 1.33 },
    "Winnipeg North": { cpc: 12.71, lpc: 77.71, ndp: 6.16, bq: 0.0, gpc: 2.48, ppc: 0.8, oth: 0.15 },
    "Winnipeg South": { cpc: 28.54, lpc: 65.14, ndp: 2.95, bq: 0.0, gpc: 2.76, ppc: 0.61, oth: 0.0 },
    "Winnipeg South Centre": { cpc: 25.63, lpc: 63.99, ndp: 4.44, bq: 0.0, gpc: 5.17, ppc: 0.54, oth: 0.22 },
    "Winnipeg West": { cpc: 36.74, lpc: 55.38, ndp: 3.2, bq: 0.0, gpc: 4.01, ppc: 0.66, oth: 0.01 },
    "Battlefords—Lloydminster—Meadow Lake": { cpc: 76.77, lpc: 12.96, ndp: 3.47, bq: 0.0, gpc: 1.89, ppc: 1.44, oth: 3.47 },
    "Carlton Trail—Eagle Creek": { cpc: 80.04, lpc: 9.99, ndp: 3.89, bq: 0.0, gpc: 2.35, ppc: 2.29, oth: 1.43 },
    "Desnethé—Missinippi—Churchill River": { cpc: 22.41, lpc: 68.32, ndp: 5.38, bq: 0.0, gpc: 2.37, ppc: 0.63, oth: 0.9 },
    "Moose Jaw—Lake Centre—Lanigan": { cpc: 75.96, lpc: 11.64, ndp: 5.56, bq: 0.0, gpc: 2.75, ppc: 2.97, oth: 1.12 },
    "Prince Albert": { cpc: 70.97, lpc: 20.26, ndp: 3.92, bq: 0.0, gpc: 2.59, ppc: 1.6, oth: 0.65 },
    "Regina—Lewvan": { cpc: 57.76, lpc: 27.72, ndp: 10.27, bq: 0.0, gpc: 3.32, ppc: 0.92, oth: 0.0 },
    "Regina—Qu'Appelle": { cpc: 69.63, lpc: 18.33, ndp: 6.17, bq: 0.0, gpc: 4.67, ppc: 1.2, oth: 0.0 },
    "Regina—Wascana": { cpc: 49.88, lpc: 41.69, ndp: 4.26, bq: 0.0, gpc: 3.44, ppc: 0.74, oth: 0.0 },
    "Saskatoon South": { cpc: 59.81, lpc: 27.06, ndp: 8.77, bq: 0.0, gpc: 3.21, ppc: 1.15, oth: 0.0 },
    "Saskatoon—University": { cpc: 62.76, lpc: 22.04, ndp: 10.93, bq: 0.0, gpc: 2.65, ppc: 1.15, oth: 0.47 },
    "Saskatoon West": { cpc: 64.03, lpc: 17.93, ndp: 13.07, bq: 0.0, gpc: 3.16, ppc: 1.81, oth: 0.0 },
    "Souris—Moose Mountain": { cpc: 86.57, lpc: 7.41, ndp: 2.16, bq: 0.0, gpc: 0.15, ppc: 2.2, oth: 1.51 },
    "Swift Current—Grasslands—Kindersley": { cpc: 83.13, lpc: 7.32, ndp: 2.78, bq: 0.0, gpc: 2.07, ppc: 1.83, oth: 2.88 },
    "Yorkton—Melville": { cpc: 78.12, lpc: 11.11, ndp: 3.24, bq: 0.0, gpc: 4.22, ppc: 2.2, oth: 1.11 },
    "Airdrie—Cochrane": { cpc: 73.42, lpc: 16.19, ndp: 4.53, bq: 0.0, gpc: 2.09, ppc: 1.74, oth: 2.03 },
    "Battle River—Crowfoot": { cpc: 85.5, lpc: 6.63, ndp: 2.88, bq: 0.0, gpc: 1.48, ppc: 1.92, oth: 1.59 },
    "Bow River": { cpc: 82.02, lpc: 12.06, ndp: 2.74, bq: 0.0, gpc: 0.0, ppc: 2.0, oth: 1.19 },
    "Calgary Centre": { cpc: 52.73, lpc: 40.47, ndp: 4.22, bq: 0.0, gpc: 2.28, ppc: 0.0, oth: 0.3 },
    "Calgary Confederation": { cpc: 49.54, lpc: 39.3, ndp: 4.76, bq: 0.0, gpc: 5.41, ppc: 0.87, oth: 0.12 },
    "Calgary Crowfoot": { cpc: 60.72, lpc: 31.16, ndp: 4.43, bq: 0.0, gpc: 2.51, ppc: 0.88, oth: 0.29 },
    "Calgary East": { cpc: 61.53, lpc: 28.05, ndp: 5.22, bq: 0.0, gpc: 3.34, ppc: 1.44, oth: 0.43 },
    "Calgary Heritage": { cpc: 67.07, lpc: 24.2, ndp: 4.92, bq: 0.0, gpc: 2.22, ppc: 1.01, oth: 0.58 },
    "Calgary McKnight": { cpc: 35.08, lpc: 58.31, ndp: 4.11, bq: 0.0, gpc: 1.57, ppc: 0.69, oth: 0.23 },
    "Calgary Midnapore": { cpc: 71.48, lpc: 19.21, ndp: 5.45, bq: 0.0, gpc: 2.16, ppc: 1.24, oth: 0.46 },
    "Calgary Nose Hill": { cpc: 62.04, lpc: 29.49, ndp: 4.7, bq: 0.0, gpc: 2.46, ppc: 0.93, oth: 0.38 },
    "Calgary Shepard": { cpc: 70.36, lpc: 20.8, ndp: 4.57, bq: 0.0, gpc: 2.65, ppc: 1.13, oth: 0.49 },
    "Calgary Signal Hill": { cpc: 65.16, lpc: 27.45, ndp: 3.82, bq: 0.0, gpc: 2.51, ppc: 0.76, oth: 0.3 },
    "Calgary Skyview": { cpc: 47.73, lpc: 45.71, ndp: 4.35, bq: 0.0, gpc: 1.31, ppc: 0.68, oth: 0.23 },
    "Edmonton Centre": { cpc: 39.79, lpc: 49.51, ndp: 9.2, bq: 0.0, gpc: 0.18, ppc: 1.02, oth: 0.3 },
    "Edmonton Gateway": { cpc: 51.47, lpc: 39.44, ndp: 7.49, bq: 0.0, gpc: 0.34, ppc: 1.16, oth: 0.1 },
    "Edmonton Griesbach": { cpc: 52.69, lpc: 28.61, ndp: 14.51, bq: 0.0, gpc: 2.23, ppc: 1.49, oth: 0.47 },
    "Edmonton Manning": { cpc: 53.51, lpc: 34.8, ndp: 10.0, bq: 0.0, gpc: 0.0, ppc: 1.57, oth: 0.11 },
    "Edmonton Northwest": { cpc: 53.31, lpc: 36.78, ndp: 8.47, bq: 0.0, gpc: 0.05, ppc: 1.33, oth: 0.05 },
    "Edmonton Riverbend": { cpc: 52.74, lpc: 37.61, ndp: 7.03, bq: 0.0, gpc: 1.8, ppc: 0.8, oth: 0.01 },
    "Edmonton Southeast": { cpc: 42.6, lpc: 49.94, ndp: 6.25, bq: 0.0, gpc: 0.0, ppc: 1.11, oth: 0.1 },
    "Edmonton Strathcona": { cpc: 48.26, lpc: 21.14, ndp: 25.89, bq: 0.0, gpc: 3.05, ppc: 1.4, oth: 0.26 },
    "Edmonton West": { cpc: 53.99, lpc: 37.61, ndp: 7.19, bq: 0.0, gpc: 0.08, ppc: 1.04, oth: 0.1 },
    "Foothills": { cpc: 80.89, lpc: 10.66, ndp: 3.34, bq: 0.0, gpc: 2.12, ppc: 1.67, oth: 1.32 },
    "Fort McMurray—Cold Lake": { cpc: 81.29, lpc: 11.02, ndp: 3.01, bq: 0.0, gpc: 1.59, ppc: 2.62, oth: 0.47 },
    "Grande Prairie": { cpc: 85.6, lpc: 6.8, ndp: 3.65, bq: 0.0, gpc: 0.0, ppc: 2.18, oth: 1.78 },
    "Lakeland": { cpc: 84.11, lpc: 7.82, ndp: 3.16, bq: 0.0, gpc: 1.45, ppc: 2.31, oth: 1.16 },
    "Leduc—Wetaskiwin": { cpc: 80.09, lpc: 11.66, ndp: 5.51, bq: 0.0, gpc: 0.03, ppc: 2.44, oth: 0.27 },
    "Lethbridge": { cpc: 67.7, lpc: 23.94, ndp: 5.82, bq: 0.0, gpc: 0.0, ppc: 1.45, oth: 1.08 },
    "Medicine Hat—Cardston—Warner": { cpc: 79.6, lpc: 11.12, ndp: 4.16, bq: 0.0, gpc: 2.26, ppc: 1.94, oth: 0.93 },
    "Parkland": { cpc: 80.77, lpc: 10.38, ndp: 5.17, bq: 0.0, gpc: 0.0, ppc: 2.49, oth: 1.2 },
    "Peace River—Westlock": { cpc: 80.48, lpc: 9.16, ndp: 4.19, bq: 0.0, gpc: 1.31, ppc: 2.77, oth: 2.09 },
    "Ponoka—Didsbury": { cpc: 84.96, lpc: 7.57, ndp: 3.4, bq: 0.0, gpc: 0.0, ppc: 2.88, oth: 1.19 },
    "Red Deer": { cpc: 77.4, lpc: 13.58, ndp: 5.5, bq: 0.0, gpc: 0.0, ppc: 2.49, oth: 1.03 },
    "Sherwood Park—Fort Saskatchewan": { cpc: 70.55, lpc: 19.49, ndp: 6.27, bq: 0.0, gpc: 1.63, ppc: 1.48, oth: 0.58 },
    "St. Albert—Sturgeon River": { cpc: 71.48, lpc: 18.88, ndp: 7.45, bq: 0.0, gpc: 0.0, ppc: 1.71, oth: 0.47 },
    "Yellowhead": { cpc: 73.33, lpc: 16.8, ndp: 4.43, bq: 0.0, gpc: 2.06, ppc: 1.94, oth: 1.46 },
    "Abbotsford—South Langley": { cpc: 52.3, lpc: 38.09, ndp: 6.16, bq: 0.0, gpc: 0.89, ppc: 2.56, oth: 0.0 },
    "Burnaby Central": { cpc: 29.24, lpc: 52.57, ndp: 15.47, bq: 0.0, gpc: 0.95, ppc: 1.42, oth: 0.35 },
    "Burnaby North—Seymour": { cpc: 30.12, lpc: 59.1, ndp: 8.86, bq: 0.0, gpc: 0.95, ppc: 0.96, oth: 0.0 },
    "Cariboo—Prince George": { cpc: 62.7, lpc: 25.39, ndp: 7.36, bq: 0.0, gpc: 1.06, ppc: 3.2, oth: 0.29 },
    "Chilliwack—Hope": { cpc: 58.41, lpc: 27.72, ndp: 9.88, bq: 0.0, gpc: 0.88, ppc: 3.09, oth: 0.0 },
    "Cloverdale—Langley City": { cpc: 38.68, lpc: 53.38, ndp: 6.29, bq: 0.0, gpc: 0.0, ppc: 1.64, oth: 0.0 },
    "Columbia—Kootenay—Southern Rockies": { cpc: 63.23, lpc: 16.52, ndp: 15.64, bq: 0.0, gpc: 1.33, ppc: 3.27, oth: 0.0 },
    "Coquitlam—Port Coquitlam": { cpc: 34.24, lpc: 54.94, ndp: 9.24, bq: 0.0, gpc: 0.0, ppc: 1.58, oth: 0.0 },
    "Courtenay—Alberni": { cpc: 48.38, lpc: 26.81, ndp: 19.52, bq: 0.0, gpc: 2.7, ppc: 2.46, oth: 0.12 },
    "Cowichan—Malahat—Langford": { cpc: 43.38, lpc: 31.94, ndp: 19.28, bq: 0.0, gpc: 2.36, ppc: 3.05, oth: 0.0 },
    "Delta": { cpc: 35.33, lpc: 57.13, ndp: 5.73, bq: 0.0, gpc: 0.58, ppc: 0.83, oth: 0.41 },
    "Esquimalt—Saanich—Sooke": { cpc: 32.02, lpc: 42.61, ndp: 19.45, bq: 0.0, gpc: 3.36, ppc: 2.26, oth: 0.29 },
    "Fleetwood—Port Kells": { cpc: 30.13, lpc: 61.85, ndp: 6.33, bq: 0.0, gpc: 0.5, ppc: 0.97, oth: 0.21 },
    "Kamloops—Shuswap—Central Rockies": { cpc: 58.11, lpc: 27.33, ndp: 9.52, bq: 0.0, gpc: 1.63, ppc: 3.35, oth: 0.07 },
    "Kamloops—Thompson—Nicola": { cpc: 56.08, lpc: 29.08, ndp: 10.85, bq: 0.0, gpc: 1.2, ppc: 2.45, oth: 0.34 },
    "Kelowna": { cpc: 49.74, lpc: 39.33, ndp: 7.33, bq: 0.0, gpc: 0.88, ppc: 2.73, oth: 0.0 },
    "Langley Township—Fraser Heights": { cpc: 49.11, lpc: 42.16, ndp: 6.43, bq: 0.0, gpc: 0.67, ppc: 1.6, oth: 0.03 },
    "Mission—Matsqui—Abbotsford": { cpc: 54.52, lpc: 35.72, ndp: 6.13, bq: 0.0, gpc: 1.06, ppc: 2.57, oth: 0.0 },
    "Nanaimo—Ladysmith": { cpc: 44.28, lpc: 27.99, ndp: 14.41, bq: 0.0, gpc: 10.66, ppc: 2.66, oth: 0.0 },
    "New Westminster—Burnaby—Maillardville": { cpc: 31.3, lpc: 44.47, ndp: 21.05, bq: 0.0, gpc: 1.4, ppc: 1.77, oth: 0.02 },
    "North Island—Powell River": { cpc: 53.25, lpc: 24.94, ndp: 17.09, bq: 0.0, gpc: 2.13, ppc: 2.13, oth: 0.45 },
    "North Vancouver—Capilano": { cpc: 31.3, lpc: 60.7, ndp: 5.98, bq: 0.0, gpc: 1.13, ppc: 0.87, oth: 0.02 },
    "Okanagan Lake West—South Kelowna": { cpc: 55.99, lpc: 34.27, ndp: 6.44, bq: 0.0, gpc: 0.79, ppc: 2.5, oth: 0.0 },
    "Pitt Meadows—Maple Ridge": { cpc: 46.33, lpc: 39.2, ndp: 11.5, bq: 0.0, gpc: 0.09, ppc: 2.19, oth: 0.69 },
    "Port Moody—Coquitlam": { cpc: 39.45, lpc: 46.38, ndp: 12.74, bq: 0.0, gpc: 0.0, ppc: 1.3, oth: 0.13 },
    "Prince George—Peace River—Northern Rockies": { cpc: 73.14, lpc: 14.53, ndp: 5.22, bq: 0.0, gpc: 1.06, ppc: 4.08, oth: 1.97 },
    "Richmond Centre—Marpole": { cpc: 38.45, lpc: 53.34, ndp: 6.51, bq: 0.0, gpc: 0.84, ppc: 0.85, oth: 0.0 },
    "Richmond East—Steveston": { cpc: 35.98, lpc: 56.56, ndp: 6.05, bq: 0.0, gpc: 0.61, ppc: 0.8, oth: 0.0 },
    "Saanich—Gulf Islands": { cpc: 36.35, lpc: 38.47, ndp: 9.24, bq: 0.0, gpc: 14.22, ppc: 1.54, oth: 0.18 },
    "Similkameen—South Okanagan—West Kootenay": { cpc: 54.5, lpc: 24.47, ndp: 16.65, bq: 0.0, gpc: 1.2, ppc: 3.17, oth: 0.0 },
    "Skeena—Bulkley Valley": { cpc: 57.43, lpc: 15.54, ndp: 19.94, bq: 0.0, gpc: 1.48, ppc: 3.9, oth: 1.71 },
    "South Surrey—White Rock": { cpc: 43.48, lpc: 50.8, ndp: 4.47, bq: 0.0, gpc: 0.0, ppc: 1.26, oth: 0.0 },
    "Surrey Centre": { cpc: 23.48, lpc: 64.66, ndp: 9.23, bq: 0.0, gpc: 0.62, ppc: 1.4, oth: 0.61 },
    "Surrey Newton": { cpc: 16.21, lpc: 73.84, ndp: 8.18, bq: 0.0, gpc: 0.0, ppc: 0.88, oth: 0.89 },
    "Vancouver Centre": { cpc: 25.86, lpc: 61.23, ndp: 10.56, bq: 0.0, gpc: 1.11, ppc: 1.24, oth: 0.0 },
    "Vancouver East": { cpc: 19.19, lpc: 44.4, ndp: 29.3, bq: 0.0, gpc: 3.37, ppc: 1.57, oth: 2.18 },
    "Vancouver Fraserview—South Burnaby": { cpc: 25.28, lpc: 62.33, ndp: 10.59, bq: 0.0, gpc: 0.29, ppc: 1.1, oth: 0.41 },
    "Vancouver Granville": { cpc: 29.61, lpc: 56.97, ndp: 11.64, bq: 0.0, gpc: 0.81, ppc: 0.91, oth: 0.05 },
    "Vancouver Kingsway": { cpc: 20.83, lpc: 54.49, ndp: 21.88, bq: 0.0, gpc: 1.32, ppc: 1.03, oth: 0.45 },
    "Vancouver Quadra": { cpc: 31.63, lpc: 59.88, ndp: 6.18, bq: 0.0, gpc: 1.6, ppc: 0.7, oth: 0.0 },
    "Vernon—Lake Country—Monashee": { cpc: 54.96, lpc: 31.61, ndp: 8.02, bq: 0.0, gpc: 1.61, ppc: 3.8, oth: 0.0 },
    "Victoria": { cpc: 20.91, lpc: 52.99, ndp: 19.72, bq: 0.0, gpc: 4.23, ppc: 1.5, oth: 0.65 },
    "West Vancouver—Sunshine Coast—Sea to Sky Country": { cpc: 35.43, lpc: 51.22, ndp: 9.63, bq: 0.0, gpc: 2.05, ppc: 1.45, oth: 0.22 },
    "Yukon": { cpc: 34.22, lpc: 37.42, ndp: 13.19, bq: 0.0, gpc: 3.36, ppc: 0.0, oth: 11.81 },
    "Northwest Territories": { cpc: 20.08, lpc: 45.87, ndp: 20.33, bq: 0.0, gpc: 1.92, ppc: 0.0, oth: 11.8 },
    "Nunavut": { cpc: 23.91, lpc: 44.86, ndp: 31.23, bq: 0.0, gpc: 0.0, ppc: 0.0, oth: 0.0 }
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
