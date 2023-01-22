import React from 'react';
import css from './Searchbar.module.css';



class Searchbar extends React.Component {
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchform}>
          <button type="submit" className={css.searchform_button}>
            <span className={css.searchform_button_label}>Search</span>
          </button>

          <input
            className={css.searchform_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
                />
                
        </form>
      </header>
    );
  }
}

export default Searchbar;
