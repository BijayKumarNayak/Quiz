import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App = () => {
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleQuizCompletion = (finalScore) => {
    setScore(finalScore);
    setShowResult(true);
  };

  return (
    <div className="App">
      {showResult ? (
        <Result score={score} />
      ) : (
        <Quiz onQuizCompletion={handleQuizCompletion} />
      )}
    </div>
  );
};

export default App;
