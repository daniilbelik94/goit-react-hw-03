import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  function initFeedback() {
    const feedbackLocal = localStorage.getItem('feedback');
    return feedbackLocal ? JSON.parse(feedbackLocal) : { good: 0, neutral: 0, bad: 0 };
  }

  const [feedback, setFeedback] = useState(initFeedback());

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivPercent = total > 0 ? Math.round((feedback.good / total) * 100) : 0;

  const onUpdateFeedback = (type) => {
    setFeedback((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const reset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem('feedback'); // Очищаем данные из localStorage
  };

  return (
    <>
      <Description />
      <Options onUpdateFeedback={onUpdateFeedback} onReset={reset} totalFeedback={total} />
      {total > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          percent={positivPercent}
        />
      ) : (
      <Notification />
      )}
    </>
  );
}

export default App;
