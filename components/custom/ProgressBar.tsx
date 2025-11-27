import React from 'react'
import { Progress } from "@/components/ui/progress"

const ProgressBar = ({currentQuestionIndex} : {currentQuestionIndex: number}) => {
  return (
      <div className='w-full flex flex-row gap-2 justify-between'>
          <Progress value={currentQuestionIndex > 0 ? 100 : 0} className="w-64 h-1 rounded-full mt-4" />
          <Progress value={currentQuestionIndex > 1 ? 100 : 0} className="w-64 h-1 rounded-full mt-4" />
          <Progress value={currentQuestionIndex > 2 ? 100 : 0} className="w-64 h-1 rounded-full mt-4" />
          <Progress value={currentQuestionIndex > 3 ? 100 : 0} className="w-64 h-1 rounded-full mt-4" />
          <Progress value={currentQuestionIndex > 4 ? 100 : 0} className="w-64 h-1 rounded-full mt-4" />
    </div>
  )
}

export default ProgressBar