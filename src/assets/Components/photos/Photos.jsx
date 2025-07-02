import axios from 'axios'
import React, { Component } from 'react'

export default class Photos extends Component {
    constructor() {
      super()
    
      this.state = {
         photos:[],
         loading: true,
         error: null  
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then(response=>{
            this.setState({
                photos:response.data,
                loading:false
            });
        })
        .catch(error =>{
            this.setState({
                error:error.message,
                loading:false
            });
        });
    }
  render() {
    const {photos, error, loading}= this.state;
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: fetching photos: {error}</div>;
    }
    
    return (
      <div>
        <h1>Photos</h1>
        <ul>
            {photos.slice(0,30).map((photo) =>(
                <li key={photo.id} style = {{marginBottom: '20px'}}>
                    <strong>{photo.title}</strong>
                    <strong>URL:</strong>{' '}

         <a href={photo.url} target="_blank" rel="noopener noreferrer">{photo.url}</a>

              <img src={photo.thumbnailUrl} alt={photo.title || "Photo"} />
                </li>
            )

            )}
        </ul>
      </div>
    )
  }
}
