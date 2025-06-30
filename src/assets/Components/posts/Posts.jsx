import axios from 'axios'
import React, { Component } from 'react'

export default class Posts extends Component {
  constructor() {
    super()
  
    this.state = {
       posts: [],
       loading: true,
       error: null
    }
  }
  
  componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response=>{
          this.setState({
             posts:response.data,
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
    const {posts,error,loading}=this.state
    if(loading){
        return <div>loading.......</div>
    }
    if(error){
        return <div>Error: {error}</div>
    }
    return (
      <div> 
        <h1>Posts</h1>
      <ul>
                {posts.map(posts =>(
                    <li key = {posts.id}>
                       <strong> {posts.title}</strong>
                       <p>{posts.body}</p>
                    </li>
                    
                ))}
                
            </ul>
          </div>
    )
  }
}
