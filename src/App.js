import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () => {
    return (this.state.good + this.state.neutral + this.state.bad)
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / total);
  };

  onButtonClick = (e) => {
    this.setState(prevState => ({
      [e.target.textContent.toLowerCase()]: prevState[e.target.textContent.toLowerCase()] + 1,
    }))};

  render() {
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
        <>
          <Section title="Please leave feedback">
            <FeedbackOptions options={Object.keys(this.state)} onClick={this.onButtonClick} />
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
          </Section>
        </>
    )}
}

export default App;