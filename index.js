import {validateLetter, times, currentWord, win} from "./functions/functions.js"
import { question } from "readline-sync";

console.log("------------JOGO DA FORCA------------")
console.log(`Dica:Nome da fruta com ${currentWord.length} letras`)
while ((times > 0 && !win) || !win) {
    console.log(`\nPalavra: ${currentWord}`);
    const kick = question("Digite uma letra: ")
    validateLetter(kick);
}