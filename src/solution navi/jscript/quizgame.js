
import { getQuestions } from './questions.js';

// variable declaration
let filteredQuestions = []; // Tableau pour stocker les questions filtrées
let currentQuestionIndex = 0; // Index de la question actuelle
export let results = []; // Tableau pour stocker les résultats des réponses (vrai ou faux)

/**
 * Fonction principale pour démarrer le jeu
 * Elle récupère les questions de manière asynchrone et affiche la première question.
 */
export async function startGame() {
    try {
        // Appel de la fonction getQuestions pour récupérer les questions
        const questions = await getQuestions();
        filteredQuestions = questions; // Stocker les questions récupérées
        displayQuestion(); // Afficher la première question
    } catch (error) {
        // Gérer les erreurs éventuelles lors de la récupération des questions
        console.error("Erreur lors du chargement des questions :", error);
    }
}

/**
 * Affiche la question actuelle et ses réponses dans le DOM.
 * La fonction s'arrête lorsque toutes les questions ont été affichées.
 */
function displayQuestion() {
    // Vérifie si toutes les questions ont été affichées
    if (currentQuestionIndex >= filteredQuestions.length) {
        calculateFinalScore(); // Calculer le score final à la fin
        return;
    }

    // Récupérer les données de la question actuelle
    const questionData = filteredQuestions[currentQuestionIndex];

    // Afficher la question dans l'élément HTML avec l'ID "question"
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
 * Vérifie si la réponse sélectionnée par le joueur est correcte.
 * @param {string} selectedAnswer - La réponse sélectionnée par le joueur.
 * @param {string} correctAnswer - La réponse correcte.
 */
function checkAnswer(selectedAnswer, correctAnswer) {
    // verifie if answer is correct
    const isCorrect = selectedAnswer === correctAnswer;
    results.push(isCorrect); // add true or false to the result Table
    currentQuestionIndex++; // next question indexed
    displayQuestion(); // display next question
}

/**
 * Calcule et affiche le score final.
 * Appelle la fonction de sauvegarde des résultats après le calcul.
 */
function calculateFinalScore() {
    // calculate total correct answer with reduce on correct ones
    const totalCorrectAnswers = results.reduce((total, result) => total + (result ? 1 : 0), 0);

    // display final score
    alert(`du hast  ${totalCorrectAnswers} gute Antwort ausgewählt auf ${results.length} Fragen.`);

    endGame(); // Sauvegarder les résultats après calcul
}

/**
 * Fonction asynchrone pour sauvegarder les résultats et afficher un message.
 */
export async function endGame() {
    try {
        const message = await saveResults(results); // call saveresult
        alert(message); // display succes message
        resetGame();
    } catch (error) {

        alert("Erreur : " + error);
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
        }, 1000); // Simule un délai d'une seconde
    });
}
function resetGame() {
    // Réinitialiser les variables
    filteredQuestions = [];
    currentQuestionIndex = 0;
    results = [];

    // Réinitialiser l'affichage
    //document.getElementById('filters').style.display = 'block'; // Afficher le formulaire de sélection
    //document.getElementById('game-container').style.display = 'none'; // Masquer le jeu
    document.getElementById('answers').innerHTML = ''; // Effacer les réponses précédentes
    document.getElementById('question').textContent = ''; // Effacer la question précédente
}

// Ajouter un gestionnaire d'événement au bouton pour démarrer le jeu
//document.getElementById('start-game').addEventListener('click', startGame);
