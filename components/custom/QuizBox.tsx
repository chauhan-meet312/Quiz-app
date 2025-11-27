

'use client'

import { Item, ItemContent, ItemDescription } from "../ui/item"
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Label } from "@/components/ui/label"

const QuizBox = (
    { currentQuestion, currentOptions, currentQuestionNumber, setScore, correctOptionIndex }: {
    currentQuestion: string;
    currentOptions: string[];
    currentQuestionNumber: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    correctOptionIndex: number;
    }
) => {
    const [selectedOption, setSelectedOption] = useState<string>("");

    const handleValueChange = (value: string) => {
        const selectedIndex = parseInt(value);
        setSelectedOption(value);
        
        if (selectedIndex === correctOptionIndex) {
            setScore(prevScore => prevScore + 1);
            console.log(`Correct answer: ${selectedIndex}`);
        }
    };

    return (
        <div className="flex flex-col gap-3 w-full my-8" style={{ fontFamily: "Inter" }}>
            {/* Question */}
            <div className="bg-blue-200/50 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-center text-gray-800">
                    {currentQuestionNumber}. {currentQuestion}
                </h3>
            </div>
          
            {/* Options */}
            <RadioGroup value={selectedOption} onValueChange={handleValueChange}>
                {currentOptions.map((option, index) => (
                    <div 
                        key={index}
                        className={`flex items-center justify-center border rounded-xl p-4 cursor-pointer transition-all ${
                            selectedOption == index.toString() 
                                ? 'bg-blue-50 border-blue-400 shadow-sm' 
                                : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                        }`}
                    >
                        <RadioGroupItem value={index.toString()} id={`option-${index}`} className="sr-only" />
                        <Label 
                            htmlFor={`option-${index}`} 
                            className="text-base items-center justify-center font-medium cursor-pointer w-full text-center"
                        >
                            {option}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default QuizBox