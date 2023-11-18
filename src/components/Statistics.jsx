import Notification from './Notification';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {good !== 0 || neutral !== 0 || bad !== 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>
            Positive feedback:
            {positivePercentage}
          </p>
        </div>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
