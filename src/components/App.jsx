import { useState } from 'react';
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

  const countTotalFeedback = () => {
    setTotal(feedback.good + feedback.neutral + feedback.bad);
  };

  const countPositiveFeedbackPercentage = () => {
    setPositivePercentage(Math.floor((feedback.good / total) * 100) || 0);
  };

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
    countTotalFeedback();
    countPositiveFeedbackPercentage();
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
