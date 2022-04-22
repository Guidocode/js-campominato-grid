/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/


const main = document.querySelector('main');

// Creo un evento di click sul bottone play
document.getElementById('play').addEventListener('click', play);


// Qui scrivo cosa accade quando clicco su play 
function play(){

    reset();

    const level = document.getElementById('level').value;
    const gridLevels = [100, 81, 49];

    const cellNumbers = gridLevels[level];
    console.log('quantità celle', cellNumbers);

    generateGridGame(cellNumbers);
}


// funzione per resettare il contenuto del main
function reset(){
    main.innerHTML = '';
}


// funzione per generare la griglia di gioco
function generateGridGame(cellNumbers){

    const grid = document.createElement('div');
    grid.className = 'gb-grid';

    for( let i = 1; i <= cellNumbers; i++ ){
        
        const cell = generateCell(i, cellNumbers);
        grid.append(cell);
    }

}


// funzione per generare le celle della griglia
function generateCell(n, cellNumbers){

    const cell = document.createElement('div');
    cell.className = 'cell' + cellNumbers;
    cell.innerHTML = `<span>${n}</span>`;

}