// Function to check if the mouse is over the popup
function isMouseOverPopup(map, layer) {
    const popup = layer.getPopup();

    if (popup) {
        const popupContainer = popup._container;
        const mousePos = map.mouseEventToContainerPoint(map._lastMouseMove);

        return (
            mousePos.x >= 0 &&
            mousePos.y >= 0 &&
            mousePos.x <= popupContainer.clientWidth &&
            mousePos.y <= popupContainer.clientHeight
        );
    }

    return false;
}

function titleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize the map
const map = L.map('map').setView([38.8, -96], 5);

// Add the base map layer (you can choose a different one if you prefer)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC'
}).addTo(map);

const visitedStates = {
    'Texas': {reasons: ['Home', 'UT Dallas', '2H Offshore', 'Sam Houston National Forest', 
                        'Guadalupe Peak', 'Enchanted Rock'], 
        links: [], categories: ['home', 'school', 'work', 'academia', 'vacation', 'hiking']},
	'Georgia': {reasons: ['Atlanta 2025'], links: [], categories: ['vacation']},
    'Louisiana': {reasons: ['Birthplace', 'Family'], links: [], categories: ['home', 'vacation']},
    'Mississippi': {reasons: ['Family'], links: [], categories: ['vacation']},
    'Florida': {reasons: ['Family', 'PLDI 2023', 'Novi Summit 2025'], links: [], categories: ['academia', 'vacation']},
    'New Mexico': {reasons: ['Pecos Wilderness', 'White Sands', 'California 2023'], links: [], categories: ['work', 'vacation', 'hiking']},
    'Arizona': {reasons: ['California 2023'], links: [], categories: ['vacation', 'work']},
    'California': {reasons: ['NVIDIA', 'Redwood Forest', 'San Francisco', 'SSFT'], links: ['https://ssft-sri.github.io/'], categories: ['home', 'work', 'vacation', 'hiking']},
    'Washington': {reasons: ['IEEE Quantum Week 2023'], links: [], categories: ['school', 'academia', 'vacation']},
    'Alaska': {reasons: ['Aurora Borealis 2024'], links: [], categories: ['vacation']},
    'Oklahoma': {reasons: ['Black Mesa', 'Camping Trips'], links: [], categories: ['vacation', 'hiking']},
    'Arkansas': {reasons: ['Camping Trips', 'Dartmouth 2024'], links: [], categories: ['vacation', 'hiking', 'work']},
    'Colorado': {reasons: ['Cabin Building', 'Camping Trips'], links: [], categories: ['vacation', 'hiking']},
    'Wyoming': {reasons: ['Gannett Peak'], links: [], categories: ['vacation', 'hiking']},
    'Virginia': {reasons: ['Family'], links: [], categories: ['vacation']},
    'West Virginia': {reasons: ['Dartmouth 2024', 'Dartmouth 2025'], links: [], categories: ['work']},
    'Alabama': {reasons: ['Dartmouth 2024', 'Dartmouth 2025', 'Huntsville 2025'], links: [], categories: ['work', 'vacation']},
    'Connecticut': {reasons: ['Dartmouth 2024'], links: [], categories: ['work']},
    'Maryland': {reasons: ['Family'], links: [], categories: ['vacation']},
    'Indiana': {reasons: ['Purdue 2023'], links: [], categories: ['vacation']},
    'Illinois': {reasons: ['Chicago 2024'], links: [], categories: ['vacation', 'work']},
	'Tennessee': {reasons: ['Dartmouth 2024', 'Dartmouth 2025'], links: [], categories: ['work']},
	'Kentucky': {reasons: ['Dartmouth 2024', 'Dartmouth 2025'], links: [], categories: ['work']},
	'Ohio': {reasons: ['Dartmouth 2024'], links: [], categories: ['work']},
	'Pennsylvania': {reasons: ['Dartmouth 2024', 'Dartmouth 2025'], links: [], categories: ['work']},
	'New York': {reasons: ['Dartmouth 2024', 'Dartmouth 2025', 'NYC 2025'], links: [], categories: ['work', 'vacation']},
	'Vermont':  {reasons: ['Dartmouth 2024', 'Dartmouth 2025'], links: [], categories: ['work']},
	'New Hampshire':  {reasons: ['Dartmouth 2024', 'Dartmouth 2025'], links: [], categories: ['work']},
	'Massachusetts':  {reasons: ['Dartmouth 2024', 'Boston 2025'], links: [], categories: ['work']}
    // 'California': { reasons: ['Vacation', 'Beach', 'Hiking'], links: ['https://example.com/california-vacation', 'https://example.com/california-beach', 'https://example.com/california-hiking'], category: 'vacation' },
    // 'New York': { reasons: ['Business trip', 'Meetings'], links: ['https://example.com/new-york-business', 'https://example.com/new-york-meetings'], category: 'business' },
    // Add more states as needed
};

const italyCities = {
	'Roma': {reasons: ['Mediterranean 2024'], links: [], categories: ['vacation', 'academia']},
	'Venezia': {reasons: ['Mediterranean 2024'], links: [], categories: ['vacation']},
	'Trieste': {reasons: ['Mediterranean 2024', 'Antico Spazzacamino'], links: [], categories: ['vacation']},
	'Firenze': {reasons: ['Mediterranean 2024'], links: [], categories: ['vacation']},
	'Napoli': {reasons: ['Mediterranean 2024', 'Pompeii Excavation', 'Herculaneum Excavation', 'Vesuvius Hike'], links: [], categories: ['vacation', 'hiking']},
	'Palermo': {reasons: ['Mediterranean 2024'], links: [], categories: ['vacation']},
	'Messina': {reasons: ['Mediterranean 2024', 'Taormina Hike'], links: [], categories: ['vacation', 'hiking']},
	'Brindisi': {reasons: ['Mediterranean 2024'], links: [], categories: ['vacation']}
};

const croatiaCities = {
	'Istarska': {reasons: ['Mediterranean 2024', 'Pula'], links: [], categories: ['vacation']},
	'Zadarska': {reasons: ['Mediterranean 2024', 'Silba, Ancestral Homeland'], links: [], categories: ['vacation', 'hiking']}
};

const greeceCities = {
	'Epirus': {reasons: ['Mediterranean 2024', 'Epirus Road Trip', 'Igoumenitsa', 'River Acheron', 'Mesopotamos', 'Necromanteion', 'Ioannina'], links: [], categories: ['vacation', 'hiking']},
	'Peloponnese': {reasons: ['Mediterranean 2024', 'Corinth', 'Paris Olympic Torch Reception'], links: [], categories: ['vacation']},
	'Attica': {reasons: ['Mediterranean 2024', 'Athens', 'Paris Olympic Torch Reception'], links: [], categories: ['vacation']},
	'Crete': {reasons: ['Mediterranean 2024', 'Crete Road Trip', 'Ida Hike', 'Heraklion', 'Chania', 'Palaiochora', 'Vai Beach'], links: [], categories: ['vacation', 'hiking']},
	'Central Greece': {reasons: ['Mediterranean 2024', 'Levadeia', 'Delphi', 'Lethe Spring', 'Temple of Apollo'], links: [], categories: ['vacation', 'hiking']},
	'Central Macedonia': {reasons: ['Mediterranean 2024', 'Thessaloniki'], links: [], categories: ['vacation']},
	'Thessaly': {reasons: ['Mediterranean 2024', 'Olympos Hike', 'River Styx', 'Styx Road Trip', 'Litochoro', 'Prionia', 'Larissa', 'Elassona'], links: [], categories: ['vacation', 'hiking']}
};

const europeCountries = {
	'Denmark': {reasons: ['PLDI 2024'], links: [['PLDI Submission', 'https://github.com/CharlesAverill/VOLPIC']], categories: ['academia']},
	'Sweden': {reasons: ['PLDI 2024'], links: [], categories: ['vacation']}
};

const asiaCountries = {
    'South Korea': {reasons: ['PLDI 2025'], links: [['PLDI Submission', 'https://www.charles.systems/publications/PTM_SRC.pdf']], categories: ['academia']}
};

const canadaProvinces = {
    'Quebec': {reasons: ['Montreal 2024', 'Montreal 2025'], links: [], categories: ['vacation']}
}

// Define different colors for each category
const colors = {
    'home': 'red',
    'school': 'orange',
    'work': 'yellow',
    'academia': 'green',
    'vacation': 'blue',
    'hiking': 'indigo',
    // 'not_visited': 'gray',
};

// Create an array to store unique colors
let uniqueColors = Array.from(new Set(Object.values(colors)));

// Create a linear gradient for each unique color
function createGradientString(colors) {
    const stops = colors.map((color, index) => {
        const offsetStart = index * (105 / colors.length);
        const offsetEnd = (index + 1) * (105 / colors.length);
        return `<stop offset="${offsetStart}%" stop-color="${color}" />
                <stop offset="${offsetEnd}%" stop-color="${color}" />`;
    });

    return stops.join('\n');
}

// Add the GeoJSON layers
const geoJsonStuff = [
	['/travel/us-states.json', visitedStates, 'name'],
	['/travel/limits_IT_provinces.geojson', italyCities, 'prov_name'],
	['/travel/hr.json', croatiaCities, 'name'],
	['/travel/gr.geojson', greeceCities, 'name'],
	['/travel/europe_countries.geojson', europeCountries, 'name'],
	['/travel/asia_countries.json', asiaCountries, 'name'],
	['/travel/canada_provinces.geo.json', canadaProvinces, 'name'],
];

var i = 0;
geoJsonStuff.forEach(stuff => {
	const geoJsonUrl = stuff[0];
	const geoJsonData = stuff[1];
	const geoJsonNameField = stuff[2];

	fetch(geoJsonUrl)
    .then(response => response.json())
    .then(data => {
        L.geoJson(data, {
            style: feature => {
                const stateName = feature.properties[geoJsonNameField];
                const visitData = geoJsonData[stateName] || { reasons: ['Not visited'], links: ['#'], categories: ['not_visited'] };
                const categories = visitData['categories'];

                // Set fillColor to 'transparent' for 'not_visited' category
                if (categories.includes('not_visited')) {
                    return {
                        fillColor: 'transparent',
                        fillOpacity: 0,
                        color: 'transparent',
                        weight: 0,
                    };
                }

                // Create a unique linear gradient ID for each state
                const gradientId = `gradient-${stateName.toLowerCase().replace(/\s/g, '-')}`;

                // Create the linear gradient and add it to the DOM
                let gradientDefs = document.createElementNS("http://www.w3.org/2000/svg", 'defs');
                gradientDefs.innerHTML = `<linearGradient id="${gradientId}" x1="12.5%" y1="12.5%" x2="87.5%" y2="87.5%">
                                            ${createGradientString(categories.map(cat => colors[cat]))}
                                        </linearGradient>`;
                document.getElementsByTagName('svg')[0].appendChild(gradientDefs);

                return {
                    fillColor: `url(#${gradientId})`,
                    fillOpacity: 0.7,
                    color: 'white',
                    weight: 1,
                };
            },
            onEachFeature: (feature, layer) => {
                const stateName = feature.properties[geoJsonNameField];
                const visitData = geoJsonData[stateName] || { reasons: ['Not visited'], links: ['#'], category: 'not_visited' };
                const { reasons, links } = visitData;
                if (visitData.category !== 'not_visited') {
                    layer.on({
                        mouseover: e => {
                            let popupContent = `<strong>${stateName}</strong><br>`;
                            
                            for (let i = 0; i < reasons.length; i++) {
                                popupContent += `${reasons[i]}`
                                if (links[i] && !links[i] == [])
                                    popupContent += ` - <a href="${links[i][1]}" target="_blank">${links[i][0]}</a>`;
                                popupContent += `<br>`;
                            }

                            layer.bindPopup(popupContent).openPopup();
                        },
                        mouseout: e => {
                            // Check if the mouse is over the popup before closing it
                            const isMouseOver = isMouseOverPopup(map, layer);

                            if (!isMouseOver) {
                                layer.closePopup();
                            }
                        },
                    });
                }
            },
        }).addTo(map);

        // Add legend
		if (i == 0) {
	        const legend = L.control({ position: 'bottomright' });

    	    legend.onAdd = () => {
        	    const div = L.DomUtil.create('div', 'info legend');
            	const categories = Object.keys(colors).filter(category => category !== 'not_visited');

	            categories.forEach(category => {
    	            div.innerHTML += `<i style="background:${colors[category]}"></i> ${titleCase(category)}<br>`;
       	    	});
   	        	return div;
        	};
	        legend.addTo(map);
		}

		i = i + 1;
	})}
);

//     let fillPalette = ['orange', 'green', 'blue'];

// let gradientString = `<linearGradient id="stripes" x1="0%" y1="0%" x2="100%" y2="100%">
//     <stop offset=0 stop-color=${fillPalette[0]} />
//     <stop offset=33% stop-color=${fillPalette[0]} />
//     <stop offset=33% stop-color=${fillPalette[1]} />
//     <stop offset=66% stop-color=${fillPalette[1]} />
//     <stop offset=66% stop-color=${fillPalette[2]} />
//     <stop offset=100% stop-color=${fillPalette[2]} />
// </linearGradient>`

// let svg = document.getElementsByTagName('svg')[0];
// let svgDefs = document.createElementNS("http://www.w3.org/2000/svg", 'defs');
// svgDefs.insertAdjacentHTML('afterbegin', gradientString);
// svg.appendChild(svgDefs);
