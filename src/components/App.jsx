import React from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar.jsx';
import Loader from './Loader/Loader';
import * as API from 'seervices/api';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends React.Component {
  state = {
    response: {},
    loading: false,
    pageNumber: 1,
  };

  formSubmitHandler = async input => {
    this.setState({ loading: true });
    const fotoObj = await API.addFotoObj(input, this.state.pageNumber);
    this.setState({
      response: fotoObj,
      loading: false,
    });
    setTimeout(() => {
      this.setState({
            loading: false,
    });
    }, 5000);
  };

  render() {
    return (
      <div className={css.App}>

        <Searchbar clickSubmit={this.formSubmitHandler} />

        <Loader
          color='#4578e9'
          loading={this.state.loading}
          size={150}
          
        />
        {this.state.response.length > 0 ? (
          <ImageGallery images={this.state.response} />
        ) : (
          ''
        )}
        
      </div>
    );
  }
}
