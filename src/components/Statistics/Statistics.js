import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      {total === 0 ? (
        <h3 className={css.notification}>There is no feedback</h3>
      ) : (
        <ul className={css.data_list}>
          <li className={css.data_list__item}>Good: {good}</li>
          <li className={css.data_list__item}>Neutral: {neutral}</li>
          <li className={css.data_list__item}>Negative: {bad}</li>
          <li className={css.data_list__item}>Total: {total}</li>
          <li className={css.data_list__item}>
            Positive feedback: {positivePercentage} %
          </li>
        </ul>
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
