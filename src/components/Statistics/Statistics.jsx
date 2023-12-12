import { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <p className={css.rate}>
          Good: <span className={css.value}>{good}</span>
        </p>
        <p className={css.rate}>
          Neutral: <span className={css.value}>{neutral}</span>
        </p>
        <p className={css.rate}>
          Bad: <span className={css.value}>{bad}</span>
        </p>
        <p className={`${css.rate} ${css['accent-rate']}`}>
          Total: <span className={css.value}>{total}</span>
        </p>
        <p className={`${css.rate} ${css['accent-rate']}`}>
          Positive feedback:{' '}
          <span className={css.value}>{positivePercentage}%</span>
        </p>
      </>
    );
  }
}

export default Statistics;
