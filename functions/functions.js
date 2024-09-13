import fruitsList from '../data/data.js'
import { TypeMessage } from '../utils/enums.js'


const finished = (gameover) => gameover ? console.log("\n--------------VOCÊ PERDEU!!-------------") : console.log("\n--------------VOCÊ VENCEU!!-------------");

const handleShot = (type) => {
    times--;

    if (times == 0) {
        win = true;
        finished(true);
        return;
    }

    switch (type) {
        case 1:
            break
        case 2:
            console.log(`OPÇÃO ERRADA! Você ainda tem ${times} chance(s)!`);
            break
        case 3:
            console.log("Informação digitada é inválida, deve ser uma letra apenas!")
            break
        default:
            break
    }


}

const letterIntoWord = (letter, word) => {
    return word.includes(letter);
}

const drawWord = () => {
    const index = Math.floor(Math.random(0, 1) * fruitsList.length);
    return fruitsList[index];
};

const hiddenWord = (word, amount = 1) => {
    const newWord = word.substring(0, amount).toUpperCase();
    return newWord + "_".repeat(word.length - 1);
}

const updateWord = (letter) => {
    let arrayWordDrawed = wordDrawed.split('');
    let arrayCurrentWord = currentWord.split('');
    arrayWordDrawed.forEach((item, index) => {
        if (item == letter) {
            arrayCurrentWord[index] = letter;
        }
    })
    return arrayCurrentWord.join('');
}

const continuePlay = () => {
    if (currentWord == wordDrawed) {
        console.log(`\nPalavra: ${currentWord}`);
        finished(false);
        win = true;
    }
}

const validateLetter = (letter) => {
    letter = letter.toLowerCase();
    if (letter.length != 1) {
        handleShot(TypeMessage.LetterInvalid);
    } else if (!letterIntoWord(letter, wordDrawed)) {
        handleShot(TypeMessage.ShotWrong);
    } else if (letterIntoWord(letter, wordDrawed)) {
        currentWord = updateWord(letter);
        continuePlay();
    }
}


const wordDrawed = drawWord();
let times = 4;
let currentWord = hiddenWord(wordDrawed, 1);
let win = false;

export { hiddenWord, drawWord, validateLetter, wordDrawed, times, currentWord, win };