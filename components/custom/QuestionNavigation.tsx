import { ArrowRight, ArrowLeft } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button"

const QuestionNavigation = (
    { currentQuestionIndex, setCurrentQuestionIndex }:
        {
        currentQuestionIndex: number;
        setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
        }
) => {
  return (
      <div className='w-full mt-4 flex flex-row justify-end'>
          <div className='h-10 w-22 flex flex-row justify-between items-center'>
              <Button
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}>
                  <ArrowLeft size={12} />
              </Button>
              <Button
                // disabled={currentQuestionIndex === 4}
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
              >
                  <ArrowRight size={12} />
            </Button>
        </div>
    </div>
  )
}

export default QuestionNavigation