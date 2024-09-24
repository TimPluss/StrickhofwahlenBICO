let candidates = []; // Liste der Kandidaten

function addCandidate(name, photo) {
    const candidate = {
        name: name,
        photo: photo,
        votes: 0
    };
    candidates.push(candidate);
}

function displayCandidates() {
    const candidatesList = document.getElementById('candidates-list');
    candidatesList.innerHTML = ''; // Vorherige Einträge löschen
    candidates.forEach((candidate, index) => {
        const candidateItem = document.createElement('div');
        candidateItem.innerHTML = `
            <img src="${candidate.photo}" alt="${candidate.name}" width="100">
            <h3>${candidate.name}</h3>
            <button onclick="voteForCandidate(${index})">Wählen</button>
            <p>Stimmen: ${candidate.votes}</p>
        `;
        candidatesList.appendChild(candidateItem);
    });
}

function voteForCandidate(index) {
    candidates[index].votes++;
    displayCandidates();
}

// Hier kannst du die Bewerber hinzufügen
// Ersetze die Pfade zu den Fotos mit den tatsächlichen Pfaden
addCandidate('Benedikt', 'path/to/benedikt.jpg');
addCandidate('Rubén', 'path/to/ruben.jpg');
addCandidate('Ennio', 'path/to/ennio.jpg');
addCandidate('Quentin', 'path/to/quentin.jpg');
addCandidate('Pierrick', 'path/to/pierrick.jpg');
addCandidate('Mirjam', 'path/to/mirjam.jpg');
addCandidate('Rafael', 'path/to/rafael.jpg');
addCandidate('Leona', 'path/to/leona.jpg');
addCandidate('Tim Plüss', 'path/to/tim_pluess.jpg');
addCandidate('Julian', 'path/to/julian.jpg');
addCandidate('Katalin Agnes', 'path/to/katalin_agnes.jpg');
addCandidate('Benjamin', 'path/to/benjamin.jpg');
addCandidate('Vaia', 'path/to/vaia.jpg');
addCandidate('Nevio', 'path/to/nevio.jpg');
addCandidate('Ellen Adinda', 'path/to/ellen_adinda.jpg');
addCandidate('Alia', 'path/to/alia.jpg');
addCandidate('Finn Bruno', 'path/to/finn_bruno.jpg');
addCandidate('Silvan', 'path/to/silvan.jpg');
addCandidate('Dardan', 'path/to/dardan.jpg');
addCandidate('Tim Eberhardt', 'path/to/tim_eberhardt.jpg');
addCandidate('Jan Philipp', 'path/to/jan_philipp.jpg');
addCandidate('Michalina', 'path/to/michalina.jpg');

displayCandidates(); // Kandidaten anzeigen
