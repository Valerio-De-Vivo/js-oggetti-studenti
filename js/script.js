var studente = {
    nome : 'Valerio',
    cognome : 'De Vivo',
    eta : 30
};

console.log(studente);


for (var k in studente) {
    console.log(k + ' ' + studente[k]);
}


var studenti = [
    {
        nome : 'Valerio',
        cognome : 'De Vivo',
        eta : 30
    },
    {
        nome : 'Fabio',
        cognome : 'Gerardi',
        eta : 32
    },
    {
        nome : 'Sara',
        cognome : 'Salvia',
        eta : 24
    },
]

for (var i = 0; i < studenti.length ; i++) {
    console.log(studenti[i].nome);
    console.log(studenti[i].cognome);
}

var nomeUtente = prompt('nome');
var cognomeUtente = prompt('cognome');
var etaUtente = parseInt(prompt('eta')) ;

var nuovoStudente = {
    nome : nomeUtente,
    cognome : cognomeUtente,
    eta : etaUtente
};

studenti.push(nuovoStudente);

console.log(studenti);
