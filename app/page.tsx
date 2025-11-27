'use client'

import Frame from '@/components/custom/Frame'
import ProgressBar from '@/components/custom/ProgressBar'
import QuestionNavigation from '@/components/custom/QuestionNavigation'
import QuizBox from '@/components/custom/QuizBox'
import { QUESTION_LIST } from '@/lib/constants'
import type { Quiz } from '@/lib/constants'
import { useState } from 'react'
import QuizCompletion from '@/components/QuizCompletion'

const page = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const currentQuiz: Quiz = QUESTION_LIST[currentQuestionIndex];

  const isQuizCompleted = currentQuestionIndex > QUESTION_LIST.length - 1;

  const currentQuestion = currentQuiz?.question ?? "";
  const currentOptions = currentQuiz?.options ?? [];
  const correctOptionIndex = currentQuiz?.correctOptionIndex ?? -1;
  // const correctOptionIndex = currentQuiz.correctOptionIndex;

  return (
    <>
        {!isQuizCompleted && (
    <main className='w-screen h-screen flex flex-col justify-center items-center'>
      <Frame>
          <div className='w-[70%]'>
            <div className='flex flex-col w-full text-center'>
              <h1 className='text-6xl text-blue-400 font-bold' style={{ fontFamily: "cookie" }}>Test Your Knowledge</h1>
              <span style={{ fontFamily: "Inter" }}>Answer all questions to see results</span>
            </div>
            <ProgressBar currentQuestionIndex={currentQuestionIndex} />
            <QuizBox
              currentQuestion={currentQuestion}
              currentOptions={currentOptions}
              currentQuestionNumber={currentQuestionIndex + 1}
              setScore={setScore}
              correctOptionIndex={correctOptionIndex}
            />
            <QuestionNavigation currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex} />
          </div>
        {/* {isQuizCompleted && (
          <div className='w-[70%] flex flex-col gap-4 items-center'>
          <span className='text-3xl text-blue-400 font-bold'>Quiz Completed!</span>
          <span className='text-xl'>Your Score: {score} / {QUESTION_LIST.length}</span>
          </div>
          )} */}
      </Frame>
    </main>
          )}
      {isQuizCompleted && (
            <QuizCompletion score={score} totalQuestions={QUESTION_LIST.length} onRestart={() => {
            setCurrentQuestionIndex(0);
            setScore(0);
          }} />
      )}
    </>
  )
}

export default page