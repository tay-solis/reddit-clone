import React, {Component} from 'react'
import {postUrl} from '../../config/constants'
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

class PostForm extends Component{
    constructor(){
        super()
        //sets the initial state via the constructor! that's the constructor's job :)
        this.state = {
          tag_line: ' ',
          content: ' ',
          votes: 0,
          thumbnail_image_url:'#'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
      }
    
    onFormSubmit(e){
        e.preventDefault();
        let newPost  ={
            tag_line: this.state.tag_line,
            content: this.state.content,
            votes: this.state.votes,
            thumbnail_image_url: this.state.thumbnail_image_url
        }
        console.log(newPost)
        axios.post(`${postUrl}addpost?tag_line=${newPost.tag_line}&content=${newPost.content}&thumbnail_image_url=${newPost.thumbnail_image_url}&votes=${newPost.votes}`)
        // axios.post(`${postUrl}addpost`, JSON.stringify(newPost))
            .then((res)=>{
                
                console.log(res)
            })
    }
      
    
    handleInputChange(e){
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        

    }
    
      
    render(){
        return(
            <form className="postForm" onSubmit={ this.onFormSubmit }>
                <label htmlFor='tag_line'>Title</label>
                <input placeholder='Title' type='text' id="tag_line" name="tag_line"  onChange={this.handleInputChange}/>
                <label htmlFor='content'>Share Your Thoughts!</label>
                <textarea id="content" name="content" onChange={this.handleInputChange}></textarea>
                <label htmlFor='thumbnail_image_url'>Image Url</label>
                <textarea id="thumbnail_image_url" name="thumbnail_image_url" onChange={this.handleInputChange}></textarea>
                <button type='submit'>Create Post</button>
            </form>
        )
    }
}

export default PostForm;