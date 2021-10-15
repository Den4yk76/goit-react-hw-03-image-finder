import { Component } from 'react';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar/Searchbar';
import PixabayFetch from './components/utils/PixabayFetch';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

import './styles.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const newPixabayFetch = new PixabayFetch();

export default class App extends Component {
  state = {
    search: '',
    page: 1,
    responseData: [],
    modalIsOpen: false,
    // isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      newPixabayFetch.resetPage();
      newPixabayFetch.searchQuery = this.state.search;
      newPixabayFetch
        .searchPhotos()
        .then(res => {
          this.setState({ responseData: [...res.data.hits] });
        })
        .then(this.setState(prevState => ({ page: prevState.page + 1 })));
    }
  }

  onSearchFormSubmit = search => {
    this.setState({ search });
  };

  onClick = value => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    newPixabayFetch.searchPage = this.state.page;
    newPixabayFetch
      .searchPhotos()
      .then(res => {
        this.setState(prevState => ({
          responseData: [...prevState.responseData, ...res.data.hits],
        }));
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSearchFormSubmit} />
        <ImageGallery images={this.state.responseData} />
        {this.state.responseData.length > 0 && (
          <Button onClick={this.onClick} />
        )}
      </>
    );
  }
}
