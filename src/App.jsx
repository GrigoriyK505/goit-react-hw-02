import { useEffect, useState } from 'react'
import './App.css'

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [vote, setVote] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setVote(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1
    }));
  };

  const resetFeedBack = () => {
    setVote({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const btnOptions = Object.keys(vote);

  const totalFeedback = vote.good + vote.neutral + vote.bad;


  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        btnOptions={btnOptions}
        totalFeedback={totalFeedback}
        resetFeedBack={resetFeedBack}
      />
      {totalFeedback > 0 ? (
        <Feedback vote={vote} />
      ) : (
        <Notification message='No feedback yet' />)
      }
      
    </>
  );
}

export default App
