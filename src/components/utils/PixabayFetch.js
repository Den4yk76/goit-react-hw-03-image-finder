import axios from 'axios';

export default class PixabayFetch {
  constructor() {
    this._searchQuery = '';
    this.page = 1;
  }

  get searchQuery() {
    return this._searchQuery;
  }
  set searchQuery(value) {
    return (this._searchQuery = value);
  }

  searchPhotos() {
    const base_url = 'https://pixabay.com/api/';
    const api_key = '23081749-b9f3d38fc4718cbd45a8beed9';

    const params = `?q=${this.searchQuery}&page=${this.page}&perPage=12&image_type=photo&orientation=horizontal&key=${api_key}`;
    const url = base_url + params;

    axios
      .get(url)
      .then(result => console.log(result))
      .catch(err => {
        console.log(err);
      });
  }
}

// key 23081749-b9f3d38fc4718cbd45a8beed9
// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
