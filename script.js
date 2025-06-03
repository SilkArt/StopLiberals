// Electoral data from the CSV

const electoralData = {
    "Avalon": { cpc: 28.42, lpc: 68.52, ndp: 3.05, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Cape Spear": { cpc: 19.54, lpc: 76.81, ndp: 3.21, bq: 0.0, gpc: 0.44, oth: 0.0 },
    "Central Newfoundland": { cpc: 44.86, lpc: 53.57, ndp: 1.57, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Labrador": { cpc: 33.79, lpc: 61.84, ndp: 4.37, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Long Range Mountains": { cpc: 42.96, lpc: 54.08, ndp: 2.96, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "St. John's East": { cpc: 20.27, lpc: 72.21, ndp: 6.99, bq: 0.0, gpc: 0.52, oth: 0.0 },
    "Terra Nova--The Peninsulas": { cpc: 39.19, lpc: 58.15, ndp: 2.66, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Cardigan": { cpc: 29.67, lpc: 67.11, ndp: 1.26, bq: 0.0, gpc: 1.96, oth: 0.0 },
    "Charlottetown": { cpc: 22.24, lpc: 73.36, ndp: 2.62, bq: 0.0, gpc: 1.78, oth: 0.0 },
    "Egmont": { cpc: 34.28, lpc: 60.81, ndp: 1.53, bq: 0.0, gpc: 3.38, oth: 0.0 },
    "Malpeque": { cpc: 28.05, lpc: 65.4, ndp: 0.84, bq: 0.0, gpc: 5.71, oth: 0.0 },
    "Acadie--Annapolis": { cpc: 39.09, lpc: 56.62, ndp: 2.39, bq: 0.0, gpc: 1.9, oth: 0.0 },
    "Cape Breton--Canso--Antigonish": { cpc: 35.17, lpc: 62.24, ndp: 2.59, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Central Nova": { cpc: 34.45, lpc: 62.05, ndp: 2.1, bq: 0.0, gpc: 1.4, oth: 0.0 },
    "Cumberland--Colchester": { cpc: 37.21, lpc: 58.17, ndp: 2.44, bq: 0.0, gpc: 2.17, oth: 0.0 },
    "Dartmouth--Cole Harbour": { cpc: 17.39, lpc: 76.79, ndp: 4.29, bq: 0.0, gpc: 1.54, oth: 0.0 },
    "Halifax": { cpc: 14.97, lpc: 73.45, ndp: 10.37, bq: 0.0, gpc: 1.22, oth: 0.0 },
    "Halifax West": { cpc: 20.83, lpc: 74.45, ndp: 3.41, bq: 0.0, gpc: 1.32, oth: 0.0 },
    "Kings--Hants": { cpc: 25.95, lpc: 69.74, ndp: 2.25, bq: 0.0, gpc: 2.06, oth: 0.0 },
    "Sackville--Bedford--Preston": { cpc: 25.09, lpc: 71.12, ndp: 2.46, bq: 0.0, gpc: 1.33, oth: 0.0 },
    "South Shore--St. Margarets": { cpc: 32.76, lpc: 64.79, ndp: 0.0, bq: 0.0, gpc: 2.45, oth: 0.0 },
    "Sydney--Glace Bay": { cpc: 31.21, lpc: 66.32, ndp: 2.47, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Acadie--Bathurst": { cpc: 20.06, lpc: 77.25, ndp: 2.69, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Beauséjour": { cpc: 25.78, lpc: 69.53, ndp: 1.5, bq: 0.0, gpc: 3.19, oth: 0.0 },
    "Fredericton--Oromocto": { cpc: 24.73, lpc: 69.59, ndp: 1.1, bq: 0.0, gpc: 4.58, oth: 0.0 },
    "Fundy Royal": { cpc: 44.76, lpc: 49.89, ndp: 2.12, bq: 0.0, gpc: 3.24, oth: 0.0 },
    "Madawaska--Restigouche": { cpc: 31.99, lpc: 66.05, ndp: 1.95, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Miramichi--Grand Lake": { cpc: 38.76, lpc: 56.28, ndp: 1.62, bq: 0.0, gpc: 3.34, oth: 0.0 },
    "Moncton--Dieppe": { cpc: 23.73, lpc: 71.02, ndp: 2.24, bq: 0.0, gpc: 3.01, oth: 0.0 },
    "Saint John--Kennebecasis": { cpc: 28.99, lpc: 66.92, ndp: 1.66, bq: 0.0, gpc: 2.43, oth: 0.0 },
    "Saint John--St. Croix": { cpc: 44.14, lpc: 51.16, ndp: 2.17, bq: 0.0, gpc: 2.53, oth: 0.0 },
    "Tobique--Mactaquac": { cpc: 50.04, lpc: 45.26, ndp: 1.39, bq: 0.0, gpc: 3.3, oth: 0.0 },
    "Abitibi--Baie-James--Nunavik--Eeyou": { cpc: 14.83, lpc: 44.89, ndp: 5.51, bq: 34.77, gpc: 0.0, oth: 0.0 },
    "Abitibi--Témiscamingue": { cpc: 12.79, lpc: 28.96, ndp: 6.49, bq: 49.69, gpc: 0.0, oth: 2.08 },
    "Ahuntsic-Cartierville": { cpc: 9.07, lpc: 60.58, ndp: 13.45, bq: 15.75, gpc: 0.0, oth: 1.16 },
    "Alfred-Pellan": { cpc: 13.43, lpc: 57.54, ndp: 7.34, bq: 20.1, gpc: 0.0, oth: 1.59 },
    "Argenteuil--La Petite-Nation": { cpc: 15.02, lpc: 47.35, ndp: 5.18, bq: 21.37, gpc: 8.96, oth: 2.13 },
    "Beauce": { cpc: 43.04, lpc: 22.73, ndp: 4.27, bq: 15.22, gpc: 0.0, oth: 14.74 },
    "Beauharnois--Salaberry--Soulanges--Huntingdon": { cpc: 11.76, lpc: 32.13, ndp: 4.99, bq: 41.25, gpc: 7.73, oth: 2.13 },
    "Beauport--Limoilou": { cpc: 18.4, lpc: 35.83, ndp: 7.05, bq: 27.02, gpc: 9.98, oth: 1.73 },
    "Bécancour--Nicolet--Saurel--Alnôbak": { cpc: 13.18, lpc: 27.45, ndp: 4.24, bq: 44.36, gpc: 9.04, oth: 1.73 },
    "Bellechasse--Les Etchemins--Lévis": { cpc: 35.65, lpc: 34.11, ndp: 6.09, bq: 21.03, gpc: 0.0, oth: 3.12 },
    "Beloeil--Chambly": { cpc: 8.53, lpc: 35.33, ndp: 7.49, bq: 47.07, gpc: 0.0, oth: 1.59 },
    "Berthier--Maskinongé": { cpc: 8.69, lpc: 20.24, ndp: 37.15, bq: 27.36, gpc: 4.9, oth: 1.67 },
    "Bourassa": { cpc: 9.79, lpc: 57.88, ndp: 11.98, bq: 15.91, gpc: 0.0, oth: 4.45 },
    "Brome--Missisquoi": { cpc: 11.27, lpc: 46.92, ndp: 4.43, bq: 25.6, gpc: 10.15, oth: 1.63 },
    "Brossard--Saint-Lambert": { cpc: 10.97, lpc: 59.59, ndp: 6.86, bq: 12.0, gpc: 9.24, oth: 1.34 },
    "Charlesbourg--Haute-Saint-Charles": { cpc: 29.77, lpc: 40.01, ndp: 6.36, bq: 20.53, gpc: 0.0, oth: 3.34 },
    "Châteauguay--Les Jardins-de-Napierville": { cpc: 13.18, lpc: 45.26, ndp: 4.53, bq: 27.34, gpc: 8.21, oth: 1.49 },
    "Chicoutimi--Le Fjord": { cpc: 22.33, lpc: 33.54, ndp: 4.32, bq: 31.56, gpc: 6.69, oth: 1.56 },
    "Compton--Stanstead": { cpc: 12.64, lpc: 43.66, ndp: 6.36, bq: 23.68, gpc: 11.19, oth: 2.47 },
    "Côte-du-Sud-Rivière-du-Loup-Kataskomiq-Témiscouata": { cpc: 30.97, lpc: 33.75, ndp: 3.89, bq: 20.9, gpc: 7.94, oth: 2.54 },
    "Côte-Nord--Kawawachikamach--Nitassinan": { cpc: 16.7, lpc: 29.91, ndp: 3.86, bq: 44.78, gpc: 0.0, oth: 4.75 },
    "Dorval--Lachine--LaSalle": { cpc: 11.79, lpc: 55.75, ndp: 8.04, bq: 11.08, gpc: 10.12, oth: 3.22 },
    "Drummond": { cpc: 14.54, lpc: 29.98, ndp: 10.04, bq: 42.33, gpc: 0.0, oth: 3.11 },
    "Gaspésie--Les Îles-de-la-Madeleine--Listuguj": { cpc: 7.8, lpc: 39.77, ndp: 3.75, bq: 44.65, gpc: 0.0, oth: 4.03 },
    "Gatineau": { cpc: 12.12, lpc: 63.2, ndp: 6.02, bq: 16.0, gpc: 0.0, oth: 2.65 },
    "Hochelaga--Rosemont-Est": { cpc: 5.21, lpc: 37.5, ndp: 21.76, bq: 20.74, gpc: 13.96, oth: 0.82 },
    "Honoré-Mercier": { cpc: 12.81, lpc: 59.11, ndp: 7.24, bq: 11.93, gpc: 7.4, oth: 1.5 },
    "Hull--Aylmer": { cpc: 9.19, lpc: 55.47, ndp: 10.18, bq: 10.18, gpc: 12.92, oth: 2.06 },
    "Joliette--Manawan": { cpc: 8.94, lpc: 30.2, ndp: 4.88, bq: 44.68, gpc: 11.3, oth: 0.0 },
    "Jonquière": { cpc: 19.59, lpc: 27.77, ndp: 4.03, bq: 40.06, gpc: 6.2, oth: 2.34 },
    "La Pointe-de-l'Île": { cpc: 7.19, lpc: 35.03, ndp: 8.17, bq: 37.62, gpc: 11.3, oth: 0.68 },
    "La Prairie--Atateken": { cpc: 10.49, lpc: 44.19, ndp: 4.9, bq: 32.76, gpc: 6.49, oth: 1.17 },
    "Lac-Saint-Jean": { cpc: 16.55, lpc: 28.99, ndp: 3.88, bq: 47.9, gpc: 0.0, oth: 2.69 },
    "Lac-Saint-Louis": { cpc: 14.04, lpc: 66.07, ndp: 5.86, bq: 3.33, gpc: 9.17, oth: 1.54 },
    "LaSalle--Émard--Verdun": { cpc: 7.04, lpc: 42.66, ndp: 17.84, bq: 16.73, gpc: 13.36, oth: 2.37 },
    "Laurentides--Labelle": { cpc: 8.63, lpc: 33.33, ndp: 4.96, bq: 39.91, gpc: 10.27, oth: 2.9 },
    "Laurier--Sainte-Marie": { cpc: 4.18, lpc: 39.19, ndp: 29.07, bq: 10.89, gpc: 13.78, oth: 2.89 },
    "Laval--Les Îles": { cpc: 21.73, lpc: 55.21, ndp: 7.86, bq: 15.19, gpc: 0.0, oth: 0.0 },
    "Les Pays-d'en-Haut": { cpc: 10.59, lpc: 39.81, ndp: 4.52, bq: 32.92, gpc: 10.13, oth: 2.03 },
    "Lévis--Lotbinière": { cpc: 34.61, lpc: 35.17, ndp: 5.74, bq: 21.9, gpc: 0.0, oth: 2.57 },
    "Longueuil--Charles-LeMoyne": { cpc: 10.25, lpc: 49.67, ndp: 11.48, bq: 25.2, gpc: 0.0, oth: 3.4 },
    "Longueuil--Saint-Hubert": { cpc: 8.91, lpc: 42.13, ndp: 10.66, bq: 38.3, gpc: 0.0, oth: 0.0 },
    "Louis-Hébert": { cpc: 12.98, lpc: 58.91, ndp: 5.56, bq: 21.29, gpc: 0.0, oth: 1.26 },
    "Louis-Saint-Laurent--Akiawenhrahk": { cpc: 32.15, lpc: 38.91, ndp: 5.92, bq: 20.99, gpc: 0.0, oth: 2.03 },
    "Marc-Aurèle-Fortin": { cpc: 13.33, lpc: 55.13, ndp: 8.06, bq: 23.49, gpc: 0.0, oth: 0.0 },
    "Mégantic--L'Érable--Lotbinière": { cpc: 44.84, lpc: 26.99, ndp: 4.7, bq: 19.32, gpc: 0.0, oth: 4.14 },
    "Mirabel": { cpc: 13.51, lpc: 33.34, ndp: 4.86, bq: 37.45, gpc: 9.31, oth: 1.53 },
    "Mount Royal": { cpc: 27.5, lpc: 57.16, ndp: 10.8, bq: 3.51, gpc: 0.0, oth: 1.04 },
    "Mont-Saint-Bruno--L'Acadie": { cpc: 8.11, lpc: 45.98, ndp: 4.67, bq: 32.16, gpc: 7.87, oth: 1.22 },
    "Montcalm": { cpc: 15.42, lpc: 29.48, ndp: 7.25, bq: 47.85, gpc: 0.0, oth: 0.0 },
    "Montmorency--Charlevoix": { cpc: 22.72, lpc: 31.23, ndp: 3.39, bq: 34.24, gpc: 7.02, oth: 1.4 },
    "Notre-Dame-de-Grâce--Westmount": { cpc: 10.33, lpc: 55.41, ndp: 13.16, bq: 4.03, gpc: 14.25, oth: 2.82 },
    "Outremont": { cpc: 4.77, lpc: 34.59, ndp: 13.72, bq: 7.04, gpc: 39.88, oth: 0.0 },
    "Papineau": { cpc: 5.52, lpc: 45.62, ndp: 28.86, bq: 13.39, gpc: 0.0, oth: 6.6 },
    "Pierre-Boucher--Les Patriotes--Verchères": { cpc: 7.46, lpc: 40.36, ndp: 5.28, bq: 45.0, gpc: 0.0, oth: 1.9 },
    "Pierrefonds--Dollard": { cpc: 20.17, lpc: 65.35, ndp: 6.3, bq: 5.53, gpc: 0.0, oth: 2.65 },
    "Pontiac--Kitigan Zibi": { cpc: 16.37, lpc: 53.37, ndp: 10.16, bq: 9.48, gpc: 8.2, oth: 2.42 },
    "Portneuf--Jacques-Cartier": { cpc: 34.06, lpc: 32.89, ndp: 3.7, bq: 18.99, gpc: 8.38, oth: 1.98 },
    "Québec Centre": { cpc: 0.0, lpc: 43.47, ndp: 14.08, bq: 29.57, gpc: 0.0, oth: 12.88 },
    "Repentigny": { cpc: 9.66, lpc: 40.54, ndp: 5.86, bq: 41.44, gpc: 0.0, oth: 2.5 },
    "Richmond--Arthabaska": { cpc: 24.21, lpc: 37.05, ndp: 4.61, bq: 28.82, gpc: 0.0, oth: 5.3 },
    "Rimouski--La Matapédia": { cpc: 8.47, lpc: 36.58, ndp: 3.81, bq: 44.61, gpc: 0.0, oth: 6.54 },
    "Rivière-des-Mille-Îles": { cpc: 10.41, lpc: 45.07, ndp: 4.3, bq: 30.45, gpc: 8.03, oth: 1.74 },
    "Rivière-du-Nord": { cpc: 13.76, lpc: 34.1, ndp: 7.75, bq: 44.39, gpc: 0.0, oth: 0.0 },
    "Rosemont--La Petite-Patrie": { cpc: 2.73, lpc: 20.74, ndp: 55.28, bq: 11.27, gpc: 9.98, oth: 0.0 },
    "Saint-Hyacinthe--Bagot--Acton": { cpc: 10.78, lpc: 33.2, ndp: 4.8, bq: 40.65, gpc: 9.0, oth: 1.57 },
    "Saint-Jean": { cpc: 9.59, lpc: 33.16, ndp: 5.11, bq: 40.28, gpc: 9.85, oth: 2.02 },
    "Saint-Laurent": { cpc: 16.58, lpc: 56.98, ndp: 8.92, bq: 5.19, gpc: 10.04, oth: 2.29 },
    "Saint-Léonard--Saint-Michel": { cpc: 12.64, lpc: 66.11, ndp: 12.4, bq: 6.79, gpc: 0.0, oth: 2.05 },
    "Saint-Maurice--Champlain": { cpc: 15.13, lpc: 50.6, ndp: 4.1, bq: 20.14, gpc: 7.56, oth: 2.47 },
    "Shefford": { cpc: 10.98, lpc: 41.47, ndp: 5.08, bq: 39.78, gpc: 0.0, oth: 2.69 },
    "Sherbrooke": { cpc: 7.03, lpc: 45.34, ndp: 10.47, bq: 22.1, gpc: 13.26, oth: 1.81 },
    "Terrebonne": { cpc: 10.89, lpc: 38.16, ndp: 5.22, bq: 35.89, gpc: 6.83, oth: 3.02 },
    "Thérèse-De Blainville": { cpc: 12.04, lpc: 48.73, ndp: 5.37, bq: 32.27, gpc: 0.0, oth: 1.58 },
    "Trois-Rivières": { cpc: 17.18, lpc: 42.59, ndp: 4.99, bq: 26.91, gpc: 6.38, oth: 1.95 },
    "Vaudreuil": { cpc: 13.74, lpc: 57.35, ndp: 4.6, bq: 13.89, gpc: 8.84, oth: 1.58 },
    "Ville-Marie--Le Sud-Ouest--Île-des-Soeurs": { cpc: 10.32, lpc: 57.69, ndp: 11.23, bq: 7.64, gpc: 12.27, oth: 0.84 },
    "Vimy": { cpc: 15.93, lpc: 56.7, ndp: 10.27, bq: 17.1, gpc: 0.0, oth: 0.0 },
    "Ajax": { cpc: 41.6, lpc: 49.85, ndp: 5.74, bq: 0.0, gpc: 2.05, oth: 0.76 },
    "Algonquin--Renfrew--Pembroke": { cpc: 56.94, lpc: 32.14, ndp: 7.57, bq: 0.0, gpc: 1.95, oth: 1.4 },
    "Aurora--Oak Ridges--Richmond Hill": { cpc: 57.7, lpc: 37.5, ndp: 2.84, bq: 0.0, gpc: 1.64, oth: 0.32 },
    "Barrie South--Innisfil": { cpc: 59.93, lpc: 32.71, ndp: 6.59, bq: 0.0, gpc: 0.0, oth: 0.78 },
    "Barrie--Springwater--Oro-Medonte": { cpc: 53.64, lpc: 38.3, ndp: 4.95, bq: 0.0, gpc: 2.93, oth: 0.18 },
    "Bay of Quinte": { cpc: 46.28, lpc: 43.39, ndp: 7.58, bq: 0.0, gpc: 2.75, oth: 0.0 },
    "Beaches--East York": { cpc: 24.34, lpc: 58.25, ndp: 14.24, bq: 0.0, gpc: 2.72, oth: 0.44 },
    "Bowmanville--Oshawa North": { cpc: 51.97, lpc: 39.52, ndp: 6.03, bq: 0.0, gpc: 1.67, oth: 0.82 },
    "Brampton Centre": { cpc: 49.07, lpc: 42.11, ndp: 5.6, bq: 0.0, gpc: 2.49, oth: 0.72 },
    "Brampton--Chinguacousy Park": { cpc: 46.8, lpc: 42.78, ndp: 5.63, bq: 0.0, gpc: 2.57, oth: 2.2 },
    "Brampton East": { cpc: 48.51, lpc: 43.84, ndp: 3.69, bq: 0.0, gpc: 0.0, oth: 3.96 },
    "Brampton North--Caledon": { cpc: 50.71, lpc: 43.58, ndp: 4.64, bq: 0.0, gpc: 0.0, oth: 1.06 },
    "Brampton South": { cpc: 51.05, lpc: 44.08, ndp: 3.76, bq: 0.0, gpc: 0.0, oth: 1.11 },
    "Brampton West": { cpc: 52.81, lpc: 42.01, ndp: 3.56, bq: 0.0, gpc: 1.45, oth: 0.17 },
    "Brantford--Brant South--Six Nations": { cpc: 53.35, lpc: 34.77, ndp: 7.49, bq: 0.0, gpc: 3.56, oth: 0.83 },
    "Bruce--Grey--Owen Sound": { cpc: 53.97, lpc: 33.95, ndp: 6.33, bq: 0.0, gpc: 4.55, oth: 1.2 },
    "Burlington": { cpc: 43.53, lpc: 49.8, ndp: 4.27, bq: 0.0, gpc: 1.69, oth: 0.7 },
    "Burlington North--Milton West": { cpc: 47.56, lpc: 47.14, ndp: 4.63, bq: 0.0, gpc: 0.0, oth: 0.67 },
    "Cambridge": { cpc: 49.92, lpc: 39.61, ndp: 6.91, bq: 0.0, gpc: 3.43, oth: 0.13 },
    "Carleton": { cpc: 49.03, lpc: 45.46, ndp: 3.06, bq: 0.0, gpc: 1.44, oth: 1.0 },
    "Chatham-Kent--Leamington": { cpc: 58.2, lpc: 30.22, ndp: 8.29, bq: 0.0, gpc: 2.2, oth: 1.09 },
    "Davenport": { cpc: 21.32, lpc: 44.21, ndp: 31.61, bq: 0.0, gpc: 2.44, oth: 0.42 },
    "Don Valley North": { cpc: 44.94, lpc: 46.97, ndp: 5.23, bq: 0.0, gpc: 2.02, oth: 0.83 },
    "Don Valley West": { cpc: 35.8, lpc: 56.15, ndp: 5.12, bq: 0.0, gpc: 2.35, oth: 0.59 },
    "Dufferin--Caledon": { cpc: 61.96, lpc: 30.13, ndp: 4.04, bq: 0.0, gpc: 2.8, oth: 1.07 },
    "Eglinton--Lawrence": { cpc: 50.89, lpc: 43.61, ndp: 3.51, bq: 0.0, gpc: 1.57, oth: 0.42 },
    "Elgin--St. Thomas--London South": { cpc: 51.65, lpc: 36.95, ndp: 9.95, bq: 0.0, gpc: 0.0, oth: 1.45 },
    "Essex": { cpc: 58.48, lpc: 30.99, ndp: 9.75, bq: 0.0, gpc: 0.0, oth: 0.78 },
    "Etobicoke Centre": { cpc: 47.12, lpc: 47.73, ndp: 5.15, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Etobicoke--Lakeshore": { cpc: 41.91, lpc: 51.57, ndp: 5.54, bq: 0.0, gpc: 0.0, oth: 0.98 },
    "Etobicoke North": { cpc: 43.25, lpc: 46.15, ndp: 6.79, bq: 0.0, gpc: 2.03, oth: 1.78 },
    "Flamborough--Glanbrook--Brant North": { cpc: 54.92, lpc: 37.47, ndp: 5.11, bq: 0.0, gpc: 1.92, oth: 0.57 },
    "Guelph": { cpc: 29.38, lpc: 43.46, ndp: 6.15, bq: 0.0, gpc: 20.16, oth: 0.84 },
    "Haldimand--Norfolk": { cpc: 58.75, lpc: 30.87, ndp: 6.92, bq: 0.0, gpc: 2.22, oth: 1.24 },
    "Haliburton--Kawartha Lakes": { cpc: 58.51, lpc: 33.29, ndp: 7.24, bq: 0.0, gpc: 0.0, oth: 0.95 },
    "Hamilton Centre": { cpc: 24.16, lpc: 25.15, ndp: 47.16, bq: 0.0, gpc: 2.4, oth: 1.12 },
    "Hamilton East--Stoney Creek": { cpc: 50.96, lpc: 40.47, ndp: 7.7, bq: 0.0, gpc: 0.0, oth: 0.86 },
    "Hamilton Mountain": { cpc: 39.94, lpc: 36.48, ndp: 22.77, bq: 0.0, gpc: 0.0, oth: 0.81 },
    "Hamilton West--Ancaster--Dundas": { cpc: 37.94, lpc: 48.12, ndp: 10.89, bq: 0.0, gpc: 2.54, oth: 0.51 },
    "Hastings--Lennox and Addington--Tyendinaga": { cpc: 55.46, lpc: 34.26, ndp: 7.29, bq: 0.0, gpc: 2.56, oth: 0.42 },
    "Humber River--Black Creek": { cpc: 37.1, lpc: 47.93, ndp: 13.3, bq: 0.0, gpc: 0.0, oth: 1.67 },
    "Huron--Bruce": { cpc: 54.47, lpc: 35.4, ndp: 6.8, bq: 0.0, gpc: 2.82, oth: 0.5 },
    "Kanata": { cpc: 38.26, lpc: 54.19, ndp: 4.94, bq: 0.0, gpc: 2.49, oth: 0.13 },
    "Kapuskasing--Timmins--Mushkegowuk": { cpc: 47.29, lpc: 31.31, ndp: 20.18, bq: 0.0, gpc: 0.0, oth: 1.22 },
    "Kenora--Kiiwetinoong": { cpc: 44.82, lpc: 26.88, ndp: 25.42, bq: 0.0, gpc: 2.02, oth: 0.86 },
    "Kingston and the Islands": { cpc: 32.04, lpc: 54.98, ndp: 9.97, bq: 0.0, gpc: 3.01, oth: 0.0 },
    "King--Vaughan": { cpc: 64.18, lpc: 31.18, ndp: 2.39, bq: 0.0, gpc: 1.84, oth: 0.41 },
    "Kitchener Centre": { cpc: 25.78, lpc: 18.32, ndp: 2.97, bq: 0.0, gpc: 52.42, oth: 0.51 },
    "Kitchener--Conestoga": { cpc: 50.25, lpc: 42.53, ndp: 6.24, bq: 0.0, gpc: 0.0, oth: 0.98 },
    "Kitchener South--Hespeler": { cpc: 49.32, lpc: 39.56, ndp: 6.25, bq: 0.0, gpc: 4.26, oth: 0.6 },
    "Lanark--Frontenac": { cpc: 52.26, lpc: 39.29, ndp: 6.11, bq: 0.0, gpc: 2.34, oth: 0.0 },
    "Leeds--Grenville--Thousand Islands--Rideau Lakes": { cpc: 51.56, lpc: 38.03, ndp: 7.25, bq: 0.0, gpc: 2.5, oth: 0.67 },
    "London Centre": { cpc: 30.63, lpc: 46.48, ndp: 19.14, bq: 0.0, gpc: 3.0, oth: 0.75 },
    "London--Fanshawe": { cpc: 33.16, lpc: 20.74, ndp: 45.31, bq: 0.0, gpc: 0.0, oth: 0.79 },
    "London West": { cpc: 38.27, lpc: 48.36, ndp: 11.46, bq: 0.0, gpc: 1.46, oth: 0.45 },
    "Markham--Stouffville": { cpc: 48.29, lpc: 45.57, ndp: 3.91, bq: 0.0, gpc: 1.55, oth: 0.68 },
    "Markham--Thornhill": { cpc: 45.08, lpc: 49.09, ndp: 4.42, bq: 0.0, gpc: 0.0, oth: 1.41 },
    "Markham--Unionville": { cpc: 53.63, lpc: 41.43, ndp: 2.88, bq: 0.0, gpc: 2.06, oth: 0.0 },
    "Middlesex--London": { cpc: 52.8, lpc: 35.77, ndp: 8.49, bq: 0.0, gpc: 2.12, oth: 0.82 },
    "Milton East--Halton Hills South": { cpc: 50.76, lpc: 42.25, ndp: 3.29, bq: 0.0, gpc: 2.2, oth: 1.5 },
    "Mississauga Centre": { cpc: 44.87, lpc: 48.02, ndp: 5.89, bq: 0.0, gpc: 0.0, oth: 1.22 },
    "Mississauga East--Cooksville": { cpc: 47.6, lpc: 44.54, ndp: 5.99, bq: 0.0, gpc: 0.0, oth: 1.87 },
    "Mississauga--Erin Mills": { cpc: 42.95, lpc: 49.79, ndp: 4.71, bq: 0.0, gpc: 1.36, oth: 1.19 },
    "Mississauga--Lakeshore": { cpc: 46.95, lpc: 46.41, ndp: 4.03, bq: 0.0, gpc: 1.94, oth: 0.66 },
    "Mississauga--Malton": { cpc: 45.3, lpc: 47.61, ndp: 5.55, bq: 0.0, gpc: 0.0, oth: 1.54 },
    "Mississauga--Streetsville": { cpc: 47.6, lpc: 45.47, ndp: 4.89, bq: 0.0, gpc: 1.58, oth: 0.46 },
    "Nepean": { cpc: 36.2, lpc: 57.75, ndp: 4.31, bq: 0.0, gpc: 1.44, oth: 0.29 },
    "Newmarket--Aurora": { cpc: 53.58, lpc: 41.39, ndp: 5.02, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "New Tecumseth--Gwillimbury": { cpc: 61.44, lpc: 31.83, ndp: 3.85, bq: 0.0, gpc: 2.32, oth: 0.57 },
    "Niagara Falls--Niagara-on-the-Lake": { cpc: 50.71, lpc: 38.52, ndp: 7.99, bq: 0.0, gpc: 1.82, oth: 0.96 },
    "Niagara South": { cpc: 48.41, lpc: 36.98, ndp: 11.43, bq: 0.0, gpc: 1.87, oth: 1.31 },
    "Niagara West": { cpc: 54.18, lpc: 37.64, ndp: 6.76, bq: 0.0, gpc: 0.0, oth: 1.42 },
    "Nipissing--Timiskaming": { cpc: 45.07, lpc: 39.7, ndp: 12.32, bq: 0.0, gpc: 2.09, oth: 0.82 },
    "Northumberland--Clarke": { cpc: 51.1, lpc: 39.8, ndp: 6.17, bq: 0.0, gpc: 1.9, oth: 1.03 },
    "Oakville East": { cpc: 47.38, lpc: 44.92, ndp: 5.93, bq: 0.0, gpc: 1.27, oth: 0.5 },
    "Oakville West": { cpc: 47.78, lpc: 47.49, ndp: 2.99, bq: 0.0, gpc: 1.34, oth: 0.4 },
    "Orléans": { cpc: 30.48, lpc: 61.04, ndp: 5.74, bq: 0.0, gpc: 1.87, oth: 0.87 },
    "Oshawa": { cpc: 47.31, lpc: 35.09, ndp: 15.13, bq: 0.0, gpc: 2.46, oth: 0.0 },
    "Ottawa Centre": { cpc: 14.16, lpc: 47.34, ndp: 35.75, bq: 0.0, gpc: 2.12, oth: 0.63 },
    "Ottawa South": { cpc: 28.21, lpc: 56.5, ndp: 12.64, bq: 0.0, gpc: 2.07, oth: 0.58 },
    "Ottawa--Vanier--Gloucester": { cpc: 21.9, lpc: 57.18, ndp: 15.54, bq: 0.0, gpc: 4.17, oth: 1.21 },
    "Ottawa West--Nepean": { cpc: 27.78, lpc: 54.35, ndp: 14.62, bq: 0.0, gpc: 2.43, oth: 0.82 },
    "Oxford": { cpc: 54.23, lpc: 32.25, ndp: 8.71, bq: 0.0, gpc: 2.63, oth: 2.18 },
    "Parry Sound--Muskoka": { cpc: 54.37, lpc: 36.93, ndp: 7.46, bq: 0.0, gpc: 0.0, oth: 1.23 },
    "Perth--Wellington": { cpc: 54.49, lpc: 34.87, ndp: 9.39, bq: 0.0, gpc: 0.0, oth: 1.25 },
    "Peterborough": { cpc: 43.38, lpc: 47.69, ndp: 6.46, bq: 0.0, gpc: 1.82, oth: 0.65 },
    "Pickering--Brooklin": { cpc: 43.82, lpc: 47.95, ndp: 5.52, bq: 0.0, gpc: 1.65, oth: 1.05 },
    "Prescott--Russell--Cumberland": { cpc: 42.91, lpc: 48.44, ndp: 5.18, bq: 0.0, gpc: 2.42, oth: 1.05 },
    "Richmond Hill South": { cpc: 54.98, lpc: 38.84, ndp: 3.81, bq: 0.0, gpc: 1.83, oth: 0.54 },
    "Sarnia--Lambton--Bkejwanong": { cpc: 54.2, lpc: 32.13, ndp: 10.97, bq: 0.0, gpc: 0.0, oth: 2.69 },
    "Sault Ste. Marie--Algoma": { cpc: 44.95, lpc: 39.59, ndp: 13.38, bq: 0.0, gpc: 1.73, oth: 0.34 },
    "Scarborough--Agincourt": { cpc: 45.69, lpc: 48.17, ndp: 6.14, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Scarborough Centre--Don Valley East": { cpc: 40.82, lpc: 51.1, ndp: 7.01, bq: 0.0, gpc: 0.0, oth: 1.07 },
    "Scarborough--Guildwood--Rouge Park": { cpc: 33.81, lpc: 56.76, ndp: 6.89, bq: 0.0, gpc: 2.54, oth: 0.0 },
    "Scarborough North": { cpc: 35.5, lpc: 56.08, ndp: 8.42, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Scarborough Southwest": { cpc: 31.92, lpc: 53.39, ndp: 10.52, bq: 0.0, gpc: 2.99, oth: 1.18 },
    "Scarborough--Woburn": { cpc: 36.15, lpc: 53.18, ndp: 7.46, bq: 0.0, gpc: 2.61, oth: 0.61 },
    "Simcoe--Grey": { cpc: 54.02, lpc: 37.42, ndp: 4.84, bq: 0.0, gpc: 3.14, oth: 0.58 },
    "Simcoe North": { cpc: 49.41, lpc: 37.93, ndp: 7.74, bq: 0.0, gpc: 4.0, oth: 0.92 },
    "Spadina--Harbourfront": { cpc: 31.21, lpc: 50.73, ndp: 15.83, bq: 0.0, gpc: 1.79, oth: 0.44 },
    "St. Catharines": { cpc: 41.72, lpc: 44.63, ndp: 12.49, bq: 0.0, gpc: 0.0, oth: 1.16 },
    "Stormont--Dundas--Glengarry": { cpc: 58.19, lpc: 34.17, ndp: 5.17, bq: 0.0, gpc: 2.16, oth: 0.31 },
    "Sudbury": { cpc: 39.7, lpc: 43.69, ndp: 15.67, bq: 0.0, gpc: 0.0, oth: 0.94 },
    "Sudbury East--Manitoulin--Nickel Belt": { cpc: 47.6, lpc: 34.05, ndp: 15.83, bq: 0.0, gpc: 1.57, oth: 0.96 },
    "Taiaiako'n--Parkdale--High Park": { cpc: 16.89, lpc: 40.42, ndp: 40.25, bq: 0.0, gpc: 1.93, oth: 0.5 },
    "Thornhill": { cpc: 68.87, lpc: 26.91, ndp: 2.59, bq: 0.0, gpc: 1.14, oth: 0.5 },
    "Thunder Bay--Rainy River": { cpc: 43.24, lpc: 40.66, ndp: 13.76, bq: 0.0, gpc: 1.61, oth: 0.73 },
    "Thunder Bay--Superior North": { cpc: 36.25, lpc: 46.57, ndp: 14.5, bq: 0.0, gpc: 1.93, oth: 0.75 },
    "Toronto Centre": { cpc: 20.36, lpc: 52.09, ndp: 24.46, bq: 0.0, gpc: 2.28, oth: 0.81 },
    "Toronto--Danforth": { cpc: 18.46, lpc: 53.79, ndp: 25.31, bq: 0.0, gpc: 2.13, oth: 0.3 },
    "Toronto--St. Paul's": { cpc: 35.32, lpc: 54.92, ndp: 7.49, bq: 0.0, gpc: 1.7, oth: 0.57 },
    "University--Rosedale": { cpc: 23.29, lpc: 52.78, ndp: 19.77, bq: 0.0, gpc: 3.51, oth: 0.65 },
    "Vaughan--Woodbridge": { cpc: 63.33, lpc: 33.38, ndp: 2.8, bq: 0.0, gpc: 0.0, oth: 0.48 },
    "Waterloo": { cpc: 33.72, lpc: 51.23, ndp: 8.63, bq: 0.0, gpc: 5.43, oth: 0.99 },
    "Wellington--Halton Hills North": { cpc: 52.42, lpc: 38.26, ndp: 4.21, bq: 0.0, gpc: 4.46, oth: 0.64 },
    "Whitby": { cpc: 46.48, lpc: 46.48, ndp: 5.16, bq: 0.0, gpc: 1.65, oth: 0.23 },
    "Willowdale": { cpc: 46.99, lpc: 47.48, ndp: 5.52, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Windsor--Tecumseh--Lakeshore": { cpc: 45.81, lpc: 38.0, ndp: 12.19, bq: 0.0, gpc: 1.39, oth: 2.61 },
    "Windsor West": { cpc: 31.65, lpc: 20.88, ndp: 45.35, bq: 0.0, gpc: 1.21, oth: 0.9 },
    "York Centre": { cpc: 57.51, lpc: 37.22, ndp: 5.27, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "York--Durham": { cpc: 57.44, lpc: 34.03, ndp: 5.24, bq: 0.0, gpc: 2.36, oth: 0.93 },
    "York South--Weston--Etobicoke": { cpc: 41.6, lpc: 48.08, ndp: 10.32, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Brandon--Souris": { cpc: 50.3, lpc: 23.87, ndp: 25.83, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Churchill--Keewatinook Aski": { cpc: 16.28, lpc: 38.83, ndp: 43.02, bq: 0.0, gpc: 0.0, oth: 1.86 },
    "Elmwood--Transcona": { cpc: 27.94, lpc: 19.04, ndp: 51.29, bq: 0.0, gpc: 0.82, oth: 0.92 },
    "Kildonan--St. Paul": { cpc: 39.34, lpc: 46.72, ndp: 12.77, bq: 0.0, gpc: 0.0, oth: 1.17 },
    "Portage--Lisgar": { cpc: 61.08, lpc: 25.36, ndp: 8.54, bq: 0.0, gpc: 2.0, oth: 3.02 },
    "Provencher": { cpc: 57.92, lpc: 28.49, ndp: 8.95, bq: 0.0, gpc: 2.09, oth: 2.56 },
    "Riding Mountain": { cpc: 58.22, lpc: 23.99, ndp: 13.95, bq: 0.0, gpc: 1.98, oth: 1.87 },
    "St. Boniface--St. Vital": { cpc: 25.94, lpc: 60.53, ndp: 12.29, bq: 0.0, gpc: 0.0, oth: 1.24 },
    "Selkirk--Interlake--Eastman": { cpc: 51.08, lpc: 32.58, ndp: 12.2, bq: 0.0, gpc: 1.94, oth: 2.2 },
    "Winnipeg Centre": { cpc: 14.04, lpc: 28.09, ndp: 54.91, bq: 0.0, gpc: 1.25, oth: 1.71 },
    "Winnipeg North": { cpc: 27.79, lpc: 59.12, ndp: 10.8, bq: 0.0, gpc: 0.81, oth: 1.48 },
    "Winnipeg South": { cpc: 28.79, lpc: 61.11, ndp: 8.28, bq: 0.0, gpc: 0.72, oth: 1.1 },
    "Winnipeg South Centre": { cpc: 22.01, lpc: 63.72, ndp: 11.44, bq: 0.0, gpc: 1.19, oth: 1.64 },
    "Winnipeg West": { cpc: 34.05, lpc: 57.41, ndp: 7.38, bq: 0.0, gpc: 1.16, oth: 0.0 },
    "Battlefords--Lloydminster--Meadow Lake": { cpc: 68.16, lpc: 21.25, ndp: 9.58, bq: 0.0, gpc: 0.0, oth: 1.01 },
    "Carlton Trail--Eagle Creek": { cpc: 69.62, lpc: 19.31, ndp: 11.07, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Desnethé--Missinippi--Churchill River": { cpc: 19.84, lpc: 63.93, ndp: 16.23, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Moose Jaw--Lake Centre--Lanigan": { cpc: 61.98, lpc: 18.16, ndp: 14.39, bq: 0.0, gpc: 1.36, oth: 4.11 },
    "Prince Albert": { cpc: 61.41, lpc: 20.8, ndp: 17.79, bq: 0.0, gpc: 0.0, oth: 0.0 },
    "Regina--Lewvan": { cpc: 41.97, lpc: 45.5, ndp: 10.87, bq: 0.0, gpc: 0.92, oth: 0.74 },
    "Regina--Qu'Appelle": { cpc: 54.48, lpc: 28.97, ndp: 15.12, bq: 0.0, gpc: 0.0, oth: 1.43 },
    "Regina--Wascana": { cpc: 42.34, lpc: 46.6, ndp: 9.08, bq: 0.0, gpc: 0.98, oth: 1.01 },
    "Saskatoon South": { cpc: 40.24, lpc: 41.65, ndp: 16.4, bq: 0.0, gpc: 0.89, oth: 0.82 },
    "Saskatoon--University": { cpc: 40.06, lpc: 42.79, ndp: 15.45, bq: 0.0, gpc: 0.79, oth: 0.91 },
    "Saskatoon West": { cpc: 40.16, lpc: 26.23, ndp: 32.26, bq: 0.0, gpc: 1.34, oth: 0.0 },
    "Souris--Moose Mountain": { cpc: 76.9, lpc: 11.3, ndp: 9.25, bq: 0.0, gpc: 0.92, oth: 1.64 },
    "Swift Current--Grasslands--Kindersley": { cpc: 74.18, lpc: 12.81, ndp: 11.44, bq: 0.0, gpc: 0.0, oth: 1.57 },
    "Yorkton--Melville": { cpc: 69.06, lpc: 16.2, ndp: 10.84, bq: 0.0, gpc: 3.02, oth: 0.87 },
    "Airdrie--Cochrane": { cpc: 63.86, lpc: 26.8, ndp: 7.29, bq: 0.0, gpc: 0.0, oth: 2.05 },
    "Battle River--Crowfoot": { cpc: 76.4, lpc: 13.58, ndp: 6.49, bq: 0.0, gpc: 1.18, oth: 2.35 },
    "Bow River": { cpc: 72.48, lpc: 19.61, ndp: 6.08, bq: 0.0, gpc: 0.0, oth: 1.82 },
    "Calgary Centre": { cpc: 43.23, lpc: 49.75, ndp: 5.05, bq: 0.0, gpc: 0.88, oth: 1.08 },
    "Calgary Confederation": { cpc: 38.99, lpc: 51.17, ndp: 7.71, bq: 0.0, gpc: 0.86, oth: 1.28 },
    "Calgary Crowfoot": { cpc: 51.74, lpc: 41.47, ndp: 4.98, bq: 0.0, gpc: 0.79, oth: 1.02 },
    "Calgary East": { cpc: 52.38, lpc: 34.72, ndp: 7.47, bq: 0.0, gpc: 1.89, oth: 3.54 },
    "Calgary Heritage": { cpc: 54.34, lpc: 38.56, ndp: 4.84, bq: 0.0, gpc: 1.12, oth: 1.14 },
    "Calgary McKnight": { cpc: 42.05, lpc: 49.71, ndp: 5.36, bq: 0.0, gpc: 0.96, oth: 1.92 },
    "Calgary Midnapore": { cpc: 58.23, lpc: 33.56, ndp: 6.08, bq: 0.0, gpc: 1.05, oth: 1.09 },
    "Calgary Nose Hill": { cpc: 52.02, lpc: 39.96, ndp: 6.22, bq: 0.0, gpc: 1.08, oth: 0.72 },
    "Calgary Shepard": { cpc: 61.02, lpc: 31.97, ndp: 5.43, bq: 0.0, gpc: 0.73, oth: 0.85 },
    "Calgary Signal Hill": { cpc: 53.19, lpc: 40.58, ndp: 4.68, bq: 0.0, gpc: 0.0, oth: 1.55 },
    "Calgary Skyview": { cpc: 47.92, lpc: 40.97, ndp: 5.15, bq: 0.0, gpc: 0.0, oth: 5.97 },
    "Edmonton Centre": { cpc: 28.75, lpc: 42.45, ndp: 26.05, bq: 0.0, gpc: 0.0, oth: 2.75 },
    "Edmonton Gateway": { cpc: 42.11, lpc: 39.15, ndp: 9.07, bq: 0.0, gpc: 0.0, oth: 9.68 },
    "Edmonton Griesbach": { cpc: 30.79, lpc: 15.66, ndp: 51.21, bq: 0.0, gpc: 0.74, oth: 1.6 },
    "Edmonton Manning": { cpc: 43.42, lpc: 36.47, ndp: 17.94, bq: 0.0, gpc: 0.0, oth: 2.17 },
    "Edmonton Northwest": { cpc: 44.86, lpc: 40.54, ndp: 12.23, bq: 0.0, gpc: 0.9, oth: 1.47 },
    "Edmonton Riverbend": { cpc: 42.83, lpc: 48.23, ndp: 8.0, bq: 0.0, gpc: 0.0, oth: 0.93 },
    "Edmonton Southeast": { cpc: 44.64, lpc: 41.3, ndp: 9.95, bq: 0.0, gpc: 0.0, oth: 4.11 },
    "Edmonton Strathcona": { cpc: 20.32, lpc: 13.89, ndp: 63.78, bq: 0.0, gpc: 0.66, oth: 1.35 },
    "Edmonton West": { cpc: 44.87, lpc: 43.54, ndp: 10.07, bq: 0.0, gpc: 0.0, oth: 1.52 },
    "Foothills": { cpc: 69.69, lpc: 21.97, ndp: 5.4, bq: 0.0, gpc: 1.32, oth: 1.63 },
    "Fort McMurray--Cold Lake": { cpc: 73.69, lpc: 16.87, ndp: 5.5, bq: 0.0, gpc: 0.95, oth: 2.99 },
    "Grande Prairie": { cpc: 74.53, lpc: 13.63, ndp: 8.47, bq: 0.0, gpc: 0.0, oth: 3.37 },
    "Lakeland": { cpc: 73.76, lpc: 13.99, ndp: 7.66, bq: 0.0, gpc: 1.17, oth: 3.42 },
    "Leduc--Wetaskiwin": { cpc: 66.09, lpc: 19.37, ndp: 11.98, bq: 0.0, gpc: 0.0, oth: 2.55 },
    "Lethbridge": { cpc: 53.24, lpc: 36.01, ndp: 7.01, bq: 0.0, gpc: 1.04, oth: 2.7 },
    "Medicine Hat--Cardston--Warner": { cpc: 69.11, lpc: 20.07, ndp: 9.53, bq: 0.0, gpc: 1.28, oth: 0.0 },
    "Parkland": { cpc: 67.42, lpc: 20.2, ndp: 8.24, bq: 0.0, gpc: 0.99, oth: 3.15 },
    "Peace River--Westlock": { cpc: 68.09, lpc: 13.11, ndp: 10.68, bq: 0.0, gpc: 0.0, oth: 8.12 },
    "Ponoka--Didsbury": { cpc: 69.55, lpc: 0.0, ndp: 20.35, bq: 0.0, gpc: 0.0, oth: 10.1 },
    "Red Deer": { cpc: 63.78, lpc: 24.68, ndp: 7.58, bq: 0.0, gpc: 1.57, oth: 2.4 },
    "Sherwood Park--Fort Saskatchewan": { cpc: 58.05, lpc: 30.01, ndp: 9.83, bq: 0.0, gpc: 0.85, oth: 1.27 },
    "St. Albert--Sturgeon River": { cpc: 55.85, lpc: 32.91, ndp: 9.26, bq: 0.0, gpc: 0.0, oth: 1.98 },
    "Yellowhead": { cpc: 61.41, lpc: 28.28, ndp: 7.81, bq: 0.0, gpc: 0.0, oth: 2.49 },
    "Abbotsford--South Langley": { cpc: 36.67, lpc: 26.45, ndp: 3.49, bq: 0.0, gpc: 1.63, oth: 31.76 },
    "Burnaby Central": { cpc: 38.93, lpc: 39.05, ndp: 19.99, bq: 0.0, gpc: 0.0, oth: 2.02 },
    "Burnaby North--Seymour": { cpc: 35.25, lpc: 56.25, ndp: 7.29, bq: 0.0, gpc: 0.0, oth: 1.21 },
    "Cariboo--Prince George": { cpc: 59.75, lpc: 27.62, ndp: 6.66, bq: 0.0, gpc: 3.35, oth: 2.62 },
    "Chilliwack--Hope": { cpc: 54.71, lpc: 32.4, ndp: 7.93, bq: 0.0, gpc: 3.06, oth: 1.9 },
    "Cloverdale--Langley City": { cpc: 48.81, lpc: 43.41, ndp: 4.9, bq: 0.0, gpc: 1.75, oth: 1.13 },
    "Columbia--Kootenay--Southern Rockies": { cpc: 49.17, lpc: 25.23, ndp: 19.15, bq: 0.0, gpc: 2.7, oth: 3.75 },
    "Coquitlam--Port Coquitlam": { cpc: 43.46, lpc: 43.92, ndp: 8.16, bq: 0.0, gpc: 1.65, oth: 2.81 },
    "Courtenay--Alberni": { cpc: 33.74, lpc: 19.96, ndp: 41.57, bq: 0.0, gpc: 3.02, oth: 1.71 },
    "Cowichan--Malahat--Langford": { cpc: 36.38, lpc: 25.27, ndp: 34.77, bq: 0.0, gpc: 3.58, oth: 0.0 },
    "Delta": { cpc: 44.59, lpc: 49.13, ndp: 4.97, bq: 0.0, gpc: 0.0, oth: 1.31 },
    "Esquimalt--Saanich--Sooke": { cpc: 28.59, lpc: 45.0, ndp: 20.24, bq: 0.0, gpc: 4.94, oth: 1.24 },
    "Fleetwood--Port Kells": { cpc: 44.85, lpc: 44.62, ndp: 6.59, bq: 0.0, gpc: 1.79, oth: 2.14 },
    "Kamloops--Shuswap--Central Rockies": { cpc: 52.11, lpc: 35.66, ndp: 5.97, bq: 0.0, gpc: 4.47, oth: 1.8 },
    "Kamloops--Thompson--Nicola": { cpc: 51.86, lpc: 37.09, ndp: 6.52, bq: 0.0, gpc: 2.82, oth: 1.71 },
    "Kelowna": { cpc: 48.34, lpc: 46.07, ndp: 3.71, bq: 0.0, gpc: 1.88, oth: 0.0 },
    "Langley Township--Fraser Heights": { cpc: 52.16, lpc: 39.94, ndp: 4.42, bq: 0.0, gpc: 1.42, oth: 2.06 },
    "Mission--Matsqui--Abbotsford": { cpc: 57.09, lpc: 33.84, ndp: 5.07, bq: 0.0, gpc: 2.27, oth: 1.73 },
    "Nanaimo--Ladysmith": { cpc: 30.74, lpc: 22.07, ndp: 17.28, bq: 0.0, gpc: 29.22, oth: 0.69 },
    "New Westminster--Burnaby--Maillardville": { cpc: 30.88, lpc: 31.62, ndp: 33.85, bq: 0.0, gpc: 2.26, oth: 1.39 },
    "North Island--Powell River": { cpc: 37.59, lpc: 23.33, ndp: 34.51, bq: 0.0, gpc: 3.35, oth: 1.21 },
    "North Vancouver--Capilano": { cpc: 34.55, lpc: 56.28, ndp: 4.75, bq: 0.0, gpc: 3.24, oth: 1.18 },
    "Okanagan Lake West--South Kelowna": { cpc: 51.92, lpc: 41.33, ndp: 3.74, bq: 0.0, gpc: 1.74, oth: 1.27 },
    "Pitt Meadows--Maple Ridge": { cpc: 48.56, lpc: 42.88, ndp: 6.88, bq: 0.0, gpc: 0.0, oth: 1.68 },
    "Port Moody--Coquitlam": { cpc: 40.93, lpc: 40.46, ndp: 16.65, bq: 0.0, gpc: 1.56, oth: 0.39 },
    "Prince George--Peace River--Northern Rockies": { cpc: 69.74, lpc: 17.6, ndp: 6.43, bq: 0.0, gpc: 3.88, oth: 2.35 },
    "Richmond Centre--Marpole": { cpc: 50.63, lpc: 41.89, ndp: 4.95, bq: 0.0, gpc: 1.67, oth: 0.86 },
    "Richmond East--Steveston": { cpc: 47.73, lpc: 45.73, ndp: 4.76, bq: 0.0, gpc: 1.78, oth: 0.0 },
    "Saanich--Gulf Islands": { cpc: 19.11, lpc: 22.25, ndp: 3.29, bq: 0.0, gpc: 55.35, oth: 0.0 },
    "Similkameen--South Okanagan--West Kootenay": { cpc: 43.74, lpc: 33.95, ndp: 17.53, bq: 0.0, gpc: 2.82, oth: 1.95 },
    "Skeena--Bulkley Valley": { cpc: 44.88, lpc: 9.56, ndp: 40.86, bq: 0.0, gpc: 2.09, oth: 2.61 },
    "South Surrey--White Rock": { cpc: 46.99, lpc: 47.65, ndp: 2.8, bq: 0.0, gpc: 2.56, oth: 0.0 },
    "Surrey Centre": { cpc: 43.87, lpc: 44.69, ndp: 7.51, bq: 0.0, gpc: 1.79, oth: 2.14 },
    "Surrey Newton": { cpc: 45.34, lpc: 46.75, ndp: 6.78, bq: 0.0, gpc: 0.0, oth: 1.14 },
    "Vancouver Centre": { cpc: 30.8, lpc: 51.51, ndp: 13.98, bq: 0.0, gpc: 2.65, oth: 1.06 },
    "Vancouver East": { cpc: 17.11, lpc: 31.33, ndp: 45.86, bq: 0.0, gpc: 3.43, oth: 2.27 },
    "Vancouver Fraserview--South Burnaby": { cpc: 36.18, lpc: 48.64, ndp: 10.86, bq: 0.0, gpc: 2.39, oth: 1.93 },
    "Vancouver Granville": { cpc: 29.67, lpc: 58.79, ndp: 8.48, bq: 0.0, gpc: 3.05, oth: 0.0 },
    "Vancouver Kingsway": { cpc: 24.03, lpc: 32.98, ndp: 39.9, bq: 0.0, gpc: 1.81, oth: 1.29 },
    "Vancouver Quadra": { cpc: 31.28, lpc: 59.7, ndp: 4.8, bq: 0.0, gpc: 3.52, oth: 0.7 },
    "Vernon--Lake Country--Monashee": { cpc: 51.27, lpc: 39.96, ndp: 5.65, bq: 0.0, gpc: 3.12, oth: 0.0 },
    "Victoria": { cpc: 16.79, lpc: 49.19, ndp: 26.88, bq: 0.0, gpc: 5.69, oth: 1.46 },
    "West Vancouver--Sunshine Coast--Sea to Sky Country": { cpc: 33.32, lpc: 55.38, ndp: 3.55, bq: 0.0, gpc: 6.44, oth: 1.3 },
    "Yukon": { cpc: 40.54, lpc: 47.88, ndp: 7.29, bq: 0.0, gpc: 4.28, oth: 0.0 },
    "Northwest Territories": { cpc: 35.26, lpc: 48.57, ndp: 14.05, bq: 0.0, gpc: 2.12, oth: 0.0 },
    "Nunavut": { cpc: 26.49, lpc: 32.06, ndp: 41.45, bq: 0.0, gpc: 0.0, oth: 0.0 }
};

// Party colors
const partyColors = {
    "Conservatives (CPC)": "#1a4782", // Blue
    "Liberals (LPC)": "#d71920",      // Red
    "New Democrats (NDP)": "#f58220",                 // Orange
    "Bloc Québécois (BQ)": "#81d3eb", // Light Blue
    "Greens (GPC)": "#3c883e",   // Green
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
        "Others (OTH)": 0
    };

    Object.values(electoralData).forEach(riding => {
        const parties = [
            { name: "Conservatives (CPC)", votes: riding.cpc },
            { name: "Liberals (LPC)", votes: riding.lpc },
            { name: "New Democrats (NDP)", votes: riding.ndp },
            { name: "Bloc Québécois (BQ)", votes: riding.bq },
            { name: "Greens (GPC)", votes: riding.gpc },
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
