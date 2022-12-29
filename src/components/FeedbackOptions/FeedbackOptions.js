import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  const keys = Object.keys(options);
  return (
    <div className={css.set}>
      {keys.map(key => (
        <button
          className={css.btn}
          type="button"
          key={key}
          id={key}
          onClick={onLeaveFeedback}
        >
          {key}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
