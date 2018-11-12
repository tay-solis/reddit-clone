import React, {Component} from 'react'
import Posts from '../components/postcomponents/Posts'
import axios from 'axios'
import {frontpageUrl} from '../config/constants'

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

class PostsContainer extends Component{
    constructor(){
        super();
        this.state = {
            data:"",
            posts: []
        }
    }
    componentDidMount(){
        axios.get(frontpageUrl)
        .then((res)=>{
            this.setState({
                posts: <Posts posts={res.data}/>
            })
            console.log(this.state.posts.length)
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render(){
        
        return(
            <main className="posts">
                {this.state.posts}
            </main>           
        )
    }
}

export default PostsContainer