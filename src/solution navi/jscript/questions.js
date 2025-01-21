export const getQuestions = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    question: "was ist Frankreich Hauptstadt ?",
                    answers: ["Paris", "Lyon", "Marseille"],
                    correctAnswer: "Paris",
                    difficulty: "easy"
                },
                {
                    question: "2+7-4= ?",
                    answers: ["5", "6", "7"],
                    correctAnswer: "5",
                    difficulty: "facile"
                },
                {
                    question: "welcher der fünfte Planet des Sonnensystems ist ?",
                    answers: ["Erde", "Jupiter", "Uranus"],
                    correctAnswer: "Jupiter",
                    difficulty: "moyen"
                },
                {
                    question: "wer ist der Vater des modernischen Physik ?",
                    answers: ["Isaac Newton", "Albert Einstein", "Galilée"],
                    correctAnswer: "Albert Einstein",
                    difficulty: "difficile"
                }
            ]);
        }, 2000); //
    });
};
