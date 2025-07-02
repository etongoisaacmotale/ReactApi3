import axios from 'axios';
import React, { Component } from 'react';

export default class Photos extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response => {
        this.setState({
          photos: response.data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          loading: false
        });
      });
  }

  render() {
    const { photos, error, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h1>Photos</h1>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {photos.map(photo => (
            <li key={photo.id} style={{ border: '1px solid #ccc', padding: '0.5rem', width: '150px' }}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <p>{photo.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
