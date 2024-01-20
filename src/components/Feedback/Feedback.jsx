import { Component } from 'react';
import { Wrapper } from './Feedback.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

class Feedback extends Component {
  static feedbackOptions = ['good', 'neutral', 'bad'];
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }

    const positivePercentage = ((good / total) * 100).toFixed(2);

    return positivePercentage;
  }

  onClickLeaveFeedback = keyName => {
    this.setState(prevState => {
      return {
        [keyName]: prevState[keyName] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Feedback.feedbackOptions}
            onLeaveFeedback={this.onClickLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      </Wrapper>
    );
  }
}

export default Feedback;
