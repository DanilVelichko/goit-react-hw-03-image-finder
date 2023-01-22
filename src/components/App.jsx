import React from "react";
import css from './App.module.css'
import Searchbar from './Searchbar/Searchbar.jsx'
import PropagateLoader from "react-spinners/PropagateLoader";


export class App extends React.Component {
  state = {
  loading: false,
}

  render() {
    return (
      <div className={css.App}>
        <Searchbar />

        <PropagateLoader 
         color="#4578e9" 
          loading={this.state.loading}
          aria-label="Loading Spinner"
          data-testid="loader" />
        
      </div>
    );
  }
};
