import { Component } from 'react';

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
