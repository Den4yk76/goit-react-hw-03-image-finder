import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import PixabayFetch from './components/utils/PixabayFetch';

const newPixabayFetch = new PixabayFetch();

export default class App extends Component {
  state = {
    search: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      newPixabayFetch.searchQuery = this.state.search;
      newPixabayFetch.searchPhotos();
    }
  }
  onSearchFormSubmit = search => {
    this.setState({ search });
  };
  render() {
    return <Searchbar onSubmit={this.onSearchFormSubmit} />;
  }
}
