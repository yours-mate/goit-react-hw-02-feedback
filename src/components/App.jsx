import { Component } from 'react';
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
    return (
      <div>
        <Section title='Please leave feedback'>
        <FeedbackOptions options={ this.state } onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title='Statistics'>
<Statistics good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>
      </div>
    )
  }
};
