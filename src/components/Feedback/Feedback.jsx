import React from 'react';
import css from './Feedback.module.css';

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

    const positive = Math.round((good / total) * 100);
    return positive;
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
        <p className={css.rate}>
          Good: <span className={css.value}>{this.state.good}</span>
        </p>
        <p className={css.rate}>
          Neutral: <span className={css.value}>{this.state.neutral}</span>
        </p>
        <p className={css.rate}>
          Bad: <span className={css.value}>{this.state.bad}</span>
        </p>
        <p className={css.rate}>
          Total: <span className={css.value}>{this.countTotalFeedback()}</span>
        </p>
        <p className={css.rate}>
          Positive feedback:{' '}
          <span className={css.value}>
            {this.countPositiveFeedbackPercentage()}%
          </span>
        </p>
      </div>
    );
  }
}

export default FeedbackButtons;
