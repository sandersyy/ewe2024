export const getQuestions = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    question: "Quel est le capital de la France ?",
                    answers: ["Paris", "Lyon", "Marseille"],
                    correctAnswer: "Paris",
                    difficulty: "facile"
                },
                {
                    question: "Combien de continents y a-t-il ?",
                    answers: ["5", "6", "7"],
                    correctAnswer: "7",
                    difficulty: "facile"
                },
                {
                    question: "En quelle année a eu lieu la Révolution française ?",
                    answers: ["1776", "1789", "1812"],
                    correctAnswer: "1789",
                    difficulty: "moyen"
                },
                {
                    question: "Qui est connu comme le père de la physique moderne ?",
                    answers: ["Isaac Newton", "Albert Einstein", "Galilée"],
                    correctAnswer: "Albert Einstein",
                    difficulty: "difficile"
                }
            ]);
        }, 2000); // Simule un délai de 2 secondes
    });
};
