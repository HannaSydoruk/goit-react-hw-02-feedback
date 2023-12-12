import { Component } from 'react';
import css from './Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <>
        <h2 className={css.title}>{title}</h2>
        <div className={css.children}>{children}</div>
      </>
    );
  }
}

export default Section;
