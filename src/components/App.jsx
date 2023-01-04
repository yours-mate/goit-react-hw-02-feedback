import { Component } from 'react';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  
  onLeaveFeedback = (evt) => {
    const id = evt.target.getAttribute('id');
    this.setState(prevState => ({
      [id]: prevState[id] + 1,
    }))
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }


  countPositiveFeedbackPercentage = ()=> {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title='Please leave feedback'>
      <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title='Statistics'>
          {this.countTotalFeedback() === 0 ? <Notification message="There is no feedback"/> : <Statistics good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()} />}
          

        </Section>
      </div>
    )
  }
};
