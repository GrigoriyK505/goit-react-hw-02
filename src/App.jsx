import { useState, useEffect } from 'react'
import './App.css'

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [vote, setVote] = useState(() => {
    const savedVotes = localStorage.getItem('feedback');
    return savedVotes ? JSON.parse(savedVotes) : {good: 0, neutral: 0, bad: 0,}
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(vote));
  }, [vote])

  const updateFeedback = feedbackType => {
    setVote(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setVote({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const btnOptions = Object.keys(vote);

  const totalFeedback = vote.good + vote.neutral + vote.bad;
  const positiveFeedback = vote.good + vote.bad;

  const percent = totalFeedback > 0
    ? Math.max(100 - Math.round((vote.bad / positiveFeedback) * 100), 0)
    : 100;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        btnOptions={btnOptions}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          vote={vote}
          totalFeedback={totalFeedback}
          percent={percent} />
      ) : (
        <Notification message='No feedback yet' />)
      }
      
    </>
  );
}

export default App
