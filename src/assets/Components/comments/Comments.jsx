import axios from 'axios'
import React, { Component } from 'react'

export default class Comments extends Component {
    constructor() {
      super()
    
      this.state = {
         comments:[],
         loading: true,
         error:null
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(response=>{
            this.setState({
               comments:response.data,
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
    const {comments,error,loading}=this.state
    if(loading){
        return <div>loading.........</div>
    }
    if(error){
        return <div>Error: {error}</div>
    }
    return (
      <div>
        <h1>Comments</h1>
        <ul>
            {comments.map(comment =>(
                <li key = {comment.id}>
                   <strong> {comment.name}</strong>
                   <p>{comment.email}</p>
                   <p>{comment.body}</p>

                </li>
                
            ))}
            
        </ul>
      </div>
    )
  }
}
