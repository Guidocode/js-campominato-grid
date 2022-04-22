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
function generateGridGame(numeroCelle){

    const grid = document.createElement('div');
    grid.className = 'gb-grid';

    for( let i = 1; i <= numeroCelle; i++ ){
        
        const cell = generateCell(i, numeroCelle);
        grid.append(cell);
    }

    main.append(grid);
}


// funzione per generare le celle della griglia
function generateCell(number, totCelle){

    const cell = document.createElement('div');
    cell.className = 'cell square' + totCelle;
    cell.innerHTML = `<span>${number}</span>`;

    cell.addEventListener('click', clickCell);

    return cell;
}


// funzione per aggiungere la classe clicked all'elemento cliccato
function clickCell(){
    
    this.classList.add('clicked');
}