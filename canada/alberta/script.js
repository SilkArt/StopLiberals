// Electoral data from the CSV

const electoralData = {
    "Calgary-Acadia": { ucp: 60.15, ndp: 39.85 },
    "Calgary-Beddington": { ucp: 58.86, ndp: 41.14 },
    "Calgary-Bow": { ucp: 61.34, ndp: 38.66 },
    "Calgary-Buffalo": { ucp: 45.47, ndp: 54.53 },
    "Calgary-Cross": { ucp: 61.89, ndp: 38.11 },
    "Calgary-Currie": { ucp: 53.1, ndp: 46.9 },
    "Calgary-East": { ucp: 62.66, ndp: 37.34 },
    "Calgary-Edgemont": { ucp: 59.62, ndp: 40.38 },
    "Calgary-Elbow": { ucp: 58.69, ndp: 41.31 },
    "Calgary-Falconridge": { ucp: 51.54, ndp: 48.46 },
    "Calgary-Fish Creek": { ucp: 64.86, ndp: 35.14 },
    "Calgary-Foothills": { ucp: 59.63, ndp: 40.37 },
    "Calgary-Glenmore": { ucp: 60.12, ndp: 39.88 },
    "Calgary-Hays": { ucp: 66.52, ndp: 33.48 },
    "Calgary-Klein": { ucp: 58.14, ndp: 41.86 },
    "Calgary-Lougheed": { ucp: 67.9, ndp: 32.1 },
    "Calgary-Bhullar-McCall": { ucp: 52.27, ndp: 47.73 },
    "Calgary-Mountain View": { ucp: 43.69, ndp: 56.31 },
    "Calgary-North": { ucp: 60.58, ndp: 39.42 },
    "Calgary-North East": { ucp: 55.27, ndp: 44.73 },
    "Calgary-North West": { ucp: 60.5, ndp: 39.5 },
    "Calgary-Peigan": { ucp: 66.41, ndp: 33.59 },
    "Calgary-Shaw": { ucp: 66.6, ndp: 33.4 },
    "Calgary-South East": { ucp: 69.29, ndp: 30.71 },
    "Calgary-Varsity": { ucp: 51.31, ndp: 48.69 },
    "Calgary-West": { ucp: 67.14, ndp: 32.86 },
    "Edmonton-Beverly-Clareview": { ucp: 65.82, ndp: 34.18 },
    "Edmonton-Castle Downs": { ucp: 67.62, ndp: 32.38 },
    "Edmonton-City Centre": { ucp: 46.09, ndp: 53.91 },
    "Edmonton-Decore": { ucp: 69.19, ndp: 30.81 },
    "Edmonton-Ellerslie": { ucp: 63.23, ndp: 36.77 },
    "Edmonton-Glenora": { ucp: 53.91, ndp: 46.09 },
    "Edmonton-Gold Bar": { ucp: 53.41, ndp: 46.59 },
    "Edmonton-Highlands-Norwood": { ucp: 50.41, ndp: 49.59 },
    "Edmonton-Manning": { ucp: 64.9, ndp: 35.1 },
    "Edmonton-McClung": { ucp: 64.39, ndp: 35.61 },
    "Edmonton-Meadows": { ucp: 62.52, ndp: 37.48 },
    "Edmonton-Mill Woods": { ucp: 64.12, ndp: 35.88 },
    "Edmonton-North West": { ucp: 64.83, ndp: 35.17 },
    "Edmonton-Riverview": { ucp: 55.45, ndp: 44.55 },
    "Edmonton-Rutherford": { ucp: 58.49, ndp: 41.51 },
    "Edmonton-South": { ucp: 65.86, ndp: 34.14 },
    "Edmonton-South West": { ucp: 68.26, ndp: 31.74 },
    "Edmonton-Strathcona": { ucp: 38.46, ndp: 61.54 },
    "Edmonton-West Henday": { ucp: 66.58, ndp: 33.42 },
    "Edmonton-Whitemud": { ucp: 63.69, ndp: 36.31 },
    "Airdrie-Cochrane": { ucp: 76.14, ndp: 23.86 },
    "Airdrie-East": { ucp: 77.62, ndp: 22.38 },
    "Chestermere-Strathmore": { ucp: 83.26, ndp: 16.74 },
    "Fort Saskatchewan-Vegreville": { ucp: 76.04, ndp: 23.96 },
    "Leduc-Beaumont": { ucp: 74.04, ndp: 25.96 },
    "Morinville-St. Albert": { ucp: 70.04, ndp: 29.96 },
    "Sherwood Park": { ucp: 64.0, ndp: 36.0 },
    "Spruce Grove-Stony Plain": { ucp: 74.14, ndp: 25.86 },
    "St. Albert": { ucp: 58.03, ndp: 41.97 },
    "Strathcona-Sherwood Park": { ucp: 70.79, ndp: 29.21 },
    "Athabasca-Barrhead-Westlock": { ucp: 85.28, ndp: 14.72 },
    "Banff-Kananaskis": { ucp: 66.1, ndp: 33.9 },
    "Bonnyville-Cold Lake-St. Paul": { ucp: 86.04, ndp: 13.96 },
    "Brooks-Medicine Hat": { ucp: 82.96, ndp: 17.04 },
    "Camrose": { ucp: 82.39, ndp: 17.61 },
    "Cardston-Siksika": { ucp: 89.31, ndp: 10.69 },
    "Central Peace-Notley": { ucp: 89.34, ndp: 10.66 },
    "Cypress-Medicine Hat": { ucp: 77.82, ndp: 22.18 },
    "Drayton Valley-Devon": { ucp: 86.85, ndp: 13.15 },
    "Drumheller-Stettler": { ucp: 91.93, ndp: 8.07 },
    "Fort McMurray-Lac La Biche": { ucp: 85.75, ndp: 14.25 },
    "Fort McMurray-Wood Buffalo": { ucp: 87.31, ndp: 12.69 },
    "Grande Prairie": { ucp: 80.36, ndp: 19.64 },
    "Grande Prairie-Wapiti": { ucp: 88.15, ndp: 11.85 },
    "Highwood": { ucp: 82.7, ndp: 17.3 },
    "Innisfail-Sylvan Lake": { ucp: 85.2, ndp: 14.8 },
    "Lac Ste. Anne-Parkland": { ucp: 83.59, ndp: 16.41 },
    "Lacombe-Ponoka": { ucp: 85.17, ndp: 14.83 },
    "Lesser Slave Lake": { ucp: 79.71, ndp: 20.29 },
    "Lethbridge-East": { ucp: 68.0, ndp: 32.0 },
    "Lethbridge-West": { ucp: 61.22, ndp: 38.78 },
    "Livingstone-Macleod": { ucp: 83.56, ndp: 16.44 },
    "Maskwacis-Wetaskiwin": { ucp: 82.92, ndp: 17.08 },
    "Olds-Didsbury-Three Hills": { ucp: 88.91, ndp: 11.09 },
    "Peace River": { ucp: 86.44, ndp: 13.56 },
    "Red Deer-North": { ucp: 74.88, ndp: 25.12 },
    "Red Deer-South": { ucp: 72.99, ndp: 27.01 },
    "Rimbey-Rocky Mountain House-Sundre": { ucp: 90.91, ndp: 9.09 },
    "Taber-Warner": { ucp: 89.79, ndp: 10.21 },
    "Vermilion-Lloydminster-Wainwright": { ucp: 89.5, ndp: 10.5 },
    "West Yellowhead": { ucp: 83.59, ndp: 16.41 }
};

// Party colors
const partyColors = {
    "United Conservatives (UCP)": "#15607a",
    "New Democrats (NDP)": "#fa8c00",
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
        { name: "United Conservatives (UCP)", votes: data.ucp },
        { name: "New Democrats (NDP)", votes: data.ndp }
    ];

    // Sort parties by vote share (descending)
    parties.sort((a, b) => b.votes - a.votes);

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
    return `${graphHtml}`;
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
        "United Conservatives (UCP)": 0,
        "New Democrats (NDP)": 0
    };

    Object.values(electoralData).forEach(riding => {
        const parties = [
            { name: "United Conservatives (UCP)", votes: riding.ucp },
            { name: "New Democrats (NDP)", votes: riding.ndp }
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
    const maxSeats = 87;
    const totalSeats = seatData.reduce((sum, party) => sum + party.count, 0); // Should be 343

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
