import React from 'react';
import css from './App.module.css';
import Loader from './Loader/Loader';
import * as API from 'seervices/api';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends React.Component {
  state = {
    inputSearch: '',
    response: [],
    loading: false,
    pageNumber: 1,
    button: false,
    modal: false,
    largeImageUrl: '',
  };

  formSubmitHandler = async input => {
    await this.cleanState();

    this.setState({ loading: true });

    await this.getFotos(input);

    this.setState({
      inputSearch: input,
      loading: false,
    });
  };

  getFotos = async input => {
    try {
      const fotoObj = await API.addFotoObj(input, this.state.pageNumber);

      // Проверка на первую загрузку галереи
      if (this.state.response.length === 0) {
        await this.setState({
          response: fotoObj,
        });
      }
      // Добавляем новые обьекты к уже находящимся в State
      else {
        this.setState(prevState => ({
          response: [...prevState.response, ...fotoObj],
        }));
      }
      // Проверка на конец галереи
      if (fotoObj.length === 12) {
        this.setState({
          button: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  loadMore = async () => {
    //кнопка Load More
    this.setState({ loading: true });

    // добавляем +1 страницу к запросу
    await this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
    // Снова забираем фото с сервера
    await this.getFotos(this.state.inputSearch);

    this.setState({ loading: false });
  };

  handleModal = event => {
    if (event === 'Escape' || event === undefined) {
      this.setState({ modal: false });
    }
  };

  onImageClick = largeImage => {
    this.setState({
      modal: true,
      largeImageUrl: largeImage,
    });
  };

  cleanState = async () => {
    await this.setState({
      response: [],
      pageNumber: 1,
      button: false,
    });
  };
  render() {
    const { loading, response, largeImageUrl, button, modal } = this.state;
    return (
      <div className={css.App}>
        <Searchbar clickSubmit={this.formSubmitHandler} />

        <Loader color="#4578e9" loading={loading} size={150} />

        {response.length > 0 ? (
          <ImageGallery images={response} clickImage={this.onImageClick} />
        ) : (
          ''
        )}

        {button && <Button clickMore={this.loadMore} />}

        {modal && (
          <Modal clickModal={this.handleModal} imgUrl={largeImageUrl} />
        )}
      </div>
    );
  }
}
