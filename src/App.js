import React, { Component } from 'react';
import Section from './Сomponents/Section/Section';
import Statistics from './Сomponents/Statistics/Statistics';
import FeedbackOptions from './Сomponents/FeedbackOptions/FeedbackOptions';
import Notification from './Сomponents/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback() {
    const totalValue = Object.values(this.state);
    return totalValue.reduce((acc, value) => acc + value);
  }

  countPositiveFeedbackPercentage() {
    const value = this.countTotalFeedback();
    const percentage = Math.round((this.state.good / value) * 100);

    if (!percentage) return 0;
    return percentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const stateName = Object.keys(this.state);
    const value = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateName}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {value === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={value}
              positivePercentage={percent}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
