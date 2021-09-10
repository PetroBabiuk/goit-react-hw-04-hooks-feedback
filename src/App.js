import React, { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = e => {
    const value = e.target.textContent;
    if (value === 'good') {
      setGood((good) => good + 1);
    } else if (value === 'neutral') {
      setNeutral((neutral) => neutral + 1);
    } else if (value === 'bad') {
      setBad((bad) => bad + 1);
    }
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onClick={onButtonClick} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={good + neutral + bad}
          positivePercentage={(Math.round((good / (good + neutral + bad)) * 100 * 100) / 100)} />
      </Section>
    </>
  )
}

export default App;