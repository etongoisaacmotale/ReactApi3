import axios from 'axios'
import React, { Component } from 'react'

export default class Album extends Component {
<<<<<<< HEAD
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
                       <strong> {album.name}</strong>
                       <p>{album.email}</p>
                       <p>{album.body}</p>
    
                    </li>
                    
                ))}
                
            </ul>
          </div>
        )
      }
=======
  render() {
    return (
      <div>new Album</div>
    )
  }
>>>>>>> c8b65f9eecba361e03e1d0190876f38cc21abbd1
}
