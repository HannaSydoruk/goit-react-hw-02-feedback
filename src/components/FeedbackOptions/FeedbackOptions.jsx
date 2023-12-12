import { Component } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        {options.map(option => {
          return (
            <button
              key={option}
              type="button"
              className={css.button}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          );
        })}
      </>
    );
  }
}

export default FeedbackOptions;
