import { Component } from 'react';
import css from '../feedback/Feedback.module.css';

export class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      negative: 0,
    };
  }

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementNegative = () => {
    this.setState(prevState => ({
      negative: prevState.negative + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, negative } = this.state;
    return good + neutral + negative;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, negative } = this.state;
    const total = good + neutral + negative;
    return Math.round((good / total) * 100);
  }

  render() {
    const { good, neutral, negative } = this.state;
    return (
      <div className="feedback">
        <p className="title">Leave your feedback</p>
        <ul className="choise-list">
          <li className="choise-list__item">
            <button
              className="choise-list__btn"
              type="button"
              onClick={this.handleIncrementGood}
            >
              Good
            </button>
          </li>
          <li className="choise-list__item">
            <button
              className="choise-list__btn"
              type="button"
              onClick={this.handleIncrementNeutral}
            >
              Neutral
            </button>
          </li>
          <li className="choise-list__item">
            <button
              className="choise-list__btn"
              type="button"
              onClick={this.handleIncrementNegative}
            >
              Negative
            </button>
          </li>
        </ul>
        <p className="title">Statistics</p>
        {this.countTotalFeedback() === 0 ? (
          <p className="title">There is no feedback</p>
        ) : (
          <ul className="data-list">
            <li className="data-list__item">Good: {good}</li>
            <li className="data-list__item">Neutral: {neutral}</li>
            <li className="data-list__item">Negative: {negative}</li>
            <li className="data-list__item">
              Total: {this.countTotalFeedback()}
            </li>
            <li className="data-list__item">
              Positive feedback: {this.countPositiveFeedbackPercentage()} %
            </li>
          </ul>
        )}
      </div>
    );
  }
}
