import axios from 'axios'
import React, { Component } from 'react'
import './Album.css';

export default class Album extends Component {
    constructor(props) {
      super()
    
      this.state = {
         album: [],
         loading: true,
         error: null
      }
    }
    
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/albums")
        .then(response=>{
            this.setState({
               album:response.data,
               loading:false 
            })
        }).catch(error =>{
            this.setState({
                error: error.message,
                loading:false
            })
        })
    }
    

    render() {
        const {album,error,loading}=this.state
        if(loading){
            return <div>loading.......</div>
        }
        if(error){
            return <div>Error: {error}</div>
        }
        return (
          <div>
            <h1>Albums</h1>
            <ul>
                {album.map(album =>(
                    <li key = {album.id}>
                       <strong> {album.title}</strong>
    
                    </li>
                    
                ))}
                
            </ul>
          </div>
        )
      }
}
