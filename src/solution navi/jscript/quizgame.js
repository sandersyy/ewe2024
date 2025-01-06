
import { getQuestions } from './questions.js';

// variable declaration
let filteredQuestions = []; // table to save imported question
let currentQuestionIndex = 0; // current question index
export let results = []; // table to save answers result true or false

/**
 * main function to start the gaame
 * fetch question in asynchronous way and display the first question.
 */
export async function startGame() {
    try {
        // calling getQuestions to fetch questions
        filteredQuestions = await getQuestions();
        displayQuestion(); // display first question
    } catch (error) {
        //
        console.error("Fehler beim Fragen Abruf :", error);
    }
}

/**  Zeigt die aktuelle Frage und ihre Antworten im DOM an.
 *  Die Funktion stoppt, wenn alle Fragen angezeigt wurden.
 */
function displayQuestion() {
    // check if all questions have been added
    if (currentQuestionIndex >= filteredQuestions.length) {
        calculateFinalScore(); // Calculer le score final à la fin
        return;
    }

    // get current question
    const questionData = filteredQuestions[currentQuestionIndex];

    // add text question  to the HTMLElement whith id 'question
    document.getElementById('question').textContent = questionData.question;

    // display answers in list Form
    const answersElem = document.getElementById('answers');
    answersElem.innerHTML = questionData.answers
        .map(answer => `<li>${answer}</li>`) // generate HTML listelement  for evry answer
        .join(''); // concat all answer in one list chain
    // add eventlistener for every answer
    const answerElements = answersElem.querySelectorAll('li');
    answerElements.forEach((elem, index) => {
        elem.addEventListener('click', () => checkAnswer(questionData.answers[index], questionData.correctAnswer));
    });
}

/**
 * check if selected answer is corrct
 * @param {string} selectedAnswer - .
 * @param {string} correctAnswer -
 */
function checkAnswer(selectedAnswer, correctAnswer) {
    // check if answer is correct
    const isCorrect = selectedAnswer === correctAnswer;
    results.push(isCorrect); // add true or false to the result Table
    currentQuestionIndex++; // next question indexed
    displayQuestion(); // display next question
}

/**
 * Berechnet das Endergebnis und zeigt es an.
 * Ruft die Funktion auf, um die Ergebnisse nach der Berechnung zu speichern.
 */
function calculateFinalScore() {
    // calculate total correct answer with reduce on correct ones
    const totalCorrectAnswers = results.reduce((total, result) => total + (result ? 1 : 0), 0);

    // display final score
    alert(`du hast  ${totalCorrectAnswers} richtige Antworte auf ${results.length} Fragen.`);

    endGame(); // save result after calcul
}

/**
 * Asynchrone Funktion zum Speichern von Ergebnissen und Anzeigen einer Meldung.
 */
export async function endGame() {
    try {
        const message = await saveResults(results); // call saveresult
        alert(message); // display succes message
        resetGame();
    } catch (error) {

        alert("Fehler : " + error);
    }
}

/**
 * Simule la sauvegarde asynchrone des résultats.
 * @param {Array} results - result Array.
 * @returns {Promise} Une promesse qui résout ou rejette selon la condition.
 */
function saveResults(results) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (results.length > 0) {
                // Promise resolve if there are results
                resolve("Ergebniss erfolgreich gespeichert !");
            } else {
                // reject if nothing
                reject("nix zu Speichern.");
            }
        }, 1000); // wait one second
    });
}
function resetGame() {
    // variable reinitialisation
    filteredQuestions = [];
    currentQuestionIndex = 0;
    results = [];

    // Réinitialiser l'affichage
    //document.getElementById('filters').style.display = 'block'; // Afficher le formulaire de sélection
    //document.getElementById('game-container').style.display = 'none'; // Masquer le jeu
    document.getElementById('answers').innerHTML = ''; // Effacer les réponses précédentes
    document.getElementById('question').textContent = ''; // Effacer la question précédente
}

