// script.js
let name1, name2;

function startGame() {
    name1 = document.getElementById('name1').value;
    name2 = document.getElementById('name2').value;

    if (name1 && name2) {
        document.getElementById('dice').innerText = 'Ready to roll!';
    } else {
        alert('First Name hako Ley!');
    }
}

function rollDice() {
    if (name1 && name2) {
        const result = Math.random() < 0.5 ? name1 : name2;
        document.getElementById('dice').innerText = result;
    } else {
        alert('Please start the game first!');
    }
}
