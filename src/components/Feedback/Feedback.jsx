import React from 'react';
import css from './Feedback.module.css';
import Statistics from 'components/Statistics/Statistics';

class FeedbackButtons extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    if (total === 0) {
      return 0;
    }

    const positivePercentage = Math.round((good / total) * 100);
    return positivePercentage;
  };

  render() {
    return (
      <div className={css.feedback}>
        <h1 className={css['feedback-title']}>Feedback</h1>
        <button type="button" onClick={() => this.handleIncrement('good')}>
          Good
        </button>
        <button type="button" onClick={() => this.handleIncrement('neutral')}>
          Neutral
        </button>
        <button type="button" onClick={() => this.handleIncrement('bad')}>
          Bad
        </button>
        <h2 className={css.statistics}>Statistics</h2>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default FeedbackButtons;
