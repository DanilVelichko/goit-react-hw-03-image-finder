import React from 'react';
import css from './Button.module.css';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button className={css.button}>Load more</button>
      </div>
    );
  }
}

export default Button;
