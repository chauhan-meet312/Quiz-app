export const QUESTION_LIST : Quiz[] = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctOptionIndex: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctOptionIndex: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctOptionIndex: 3
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"],
        correctOptionIndex: 0
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        correctOptionIndex: 0
    }
]

export interface Quiz { 
    question: string;
    options: string[];
    correctOptionIndex: number;
}