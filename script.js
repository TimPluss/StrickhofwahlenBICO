// Dummy-Kandidatenliste
let kandidaten = [
    { name: "Max Mustermann", stimmen: 0 },
    { name: "Anna Beispiel", stimmen: 0 },
    { name: "Lisa Meier", stimmen: 0 }
];

// Dummy-Bewerberliste
let bewerber = [];

// Variable, um abzustimmen nur einmal zu erlauben
let hatAbgestimmt = false;

// Anmeldeformular abfangen
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById('username').value;

    if (username) {
        document.getElementById('loginDiv').style.display = 'none';
        document.getElementById('mainDiv').style.display = 'block';
        renderBewerber();
    }
});

// Abstimmen
document.getElementById('voteButton').addEventListener('click', function() {
    if (!hatAbgestimmt) {
        document.getElementById('voteDiv').style.display = 'block';
        document.getElementById('bewerbungDiv').style.display = 'none';
        renderKandidaten();
    } else {
        alert('Du hast bereits abgestimmt!');
    }
});

// Bewerben
document.getElementById('bewerbenButton').addEventListener('click', function() {
    document.getElementById('voteDiv').style.display = 'none';
    document.getElementById('bewerbungDiv').style.display = 'block';
});

// Bewerbungsformular abfangen
document.getElementById('bewerbungForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('bewerberName').value;
    let begruendung = document.getElementById('begruendung').value;
    let foto = document.getElementById('bewerberFoto').files[0];

    if (name && begruendung && foto) {
        let reader = new FileReader();
        reader.onload = function(e) {
            bewerber.push({
                name: name,
                begruendung: begruendung,
                foto: e.target.result
            });
            renderBewerber();
        };
        reader.readAsDataURL(foto);

        // Formular leeren
        document.getElementById('bewerberName').value = '';
        document.getElementById('begruendung').value = '';
        document.getElementById('bewerberFoto').value = '';
    }
});

// Zeige die Kandidatenliste
function renderKandidaten() {
    let kandidatenListe = document.getElementById('kandidatenListe');
    kandidatenListe.innerHTML = ''; // Liste leeren

    kandidaten.forEach((kandidat, index) => {
        let kandidatDiv = document.createElement('div');
        kandidatDiv.innerHTML = `<strong>${kandidat.name}</strong> <button onclick="vote(${index})">Stimme ab</button>`;
        kandidatenListe.appendChild(kandidatDiv);
    });
}

// Abstimmfunktion
function vote(index) {
    if (!hatAbgestimmt) {
        kandidaten[index].stimmen += 1;
        alert(`Du hast für ${kandidaten[index].name} gestimmt!`);
        hatAbgestimmt = true;
        document.getElementById('voteDiv').style.display = 'none'; // Abstimmungsbereich nach Abstimmung verstecken
        renderErgebnisse();
    } else {
        alert('Du kannst nur einmal abstimmen!');
    }
}

// Zeige die aktuellen Ergebnisse
function renderErgebnisse() {
    let ergebnisseDiv = document.getElementById('ergebnisse');
    ergebnisseDiv.innerHTML = '<h3>Aktuelle Ergebnisse:</h3>';

    kandidaten.forEach(kandidat => {
        let p = document.createElement('p');
        p.textContent = `${kandidat.name}: ${kandidat.stimmen} Stimmen`;
        ergebnisseDiv.appendChild(p);
    });
}

// Zeige die Bewerberübersicht
function renderBewerber() {
    let bewerberListe = document.getElementById('bewerberListe');
    bewerberListe.innerHTML = ''; // Liste leeren

    bewerber.forEach(b => {
        let bewerberDiv = document.createElement('div');
        bewerberDiv.classList.add('bewerberCard');
        bewerberDiv.innerHTML = `
            <img src="${b.foto}" alt="${b.name}">
            <div>
                <strong>${b.name}</strong>
                <p>${b.begruendung}</p>
            </div>
        `;
        bewerberListe.appendChild(bewerberDiv);
    });
}
