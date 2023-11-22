import { useState, useEffect } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    setTotal(totalFeedback);
  }, [feedback.good, feedback.neutral, feedback.bad]);

  useEffect(() => {
    const positiveFeedback = Math.floor((feedback.good / total) * 100);
    setPositivePercentage(positiveFeedback);
  }, [feedback.good, total]);

  const handleFeedback = e => {
    const key = e.target.name;
    switch (key) {
      case 'good':
        setFeedback({ ...feedback, good: feedback.good + 1 });

        break;
      case 'neutral':
        setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
        break;
      case 'bad':
        setFeedback({ ...feedback, bad: feedback.bad + 1 });
        break;
      default:
        return;
    }
  };

  const options = ['Good', 'Neutral', 'Bad'];
  return (
    <section>
      <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      <Statistics
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={total}
        positivePercentage={` ${positivePercentage}%`}
      />
    </section>
  );
};
