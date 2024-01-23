// Shuffle the letters
function shuffleLetters() {
    const letters = [];
    for (let letter = 'a'.charCodeAt(0); letter <= 'z'.charCodeAt(0); letter++) {
        letters.push(String.fromCharCode(letter));
    }
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters;
}

function generateTest() {
    const wordInput = document.getElementById("wordInput").value.toLowerCase();
    const wordList = document.getElementById("wordList");
    wordList.classList.add("grid");
    wordList.innerHTML = "";

    const vowels = ["a", "e", "i", "o", "u"];

    const shuffledLetters = shuffleLetters();

    for (let i = 0; i < shuffledLetters.length; i++) {
        const currentLetter = shuffledLetters[i];
        let newWord = currentLetter + wordInput;
        if (wordInput.length > 0 && vowels.includes(wordInput.charAt(0)) && vowels.includes(currentLetter)) {
            continue;
        }
        const listItem = document.createElement("li");
        listItem.textContent = newWord;
        listItem.classList.add("cell");
        wordList.appendChild(listItem);
    }


}



/* Function to generate random colors */
function getRandomColor() {
    const letters = '89ABCDEF'; // Use lighter color hex values
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}


/* Apply random background color to each card on button click */
document.querySelector("button.random-color").addEventListener("click", function () {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(function (cell) {
        cell.style.backgroundColor = getRandomColor();
    });
});
