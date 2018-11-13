import React, {Component} from 'react'
import Posts from '../components/postcomponents/Posts'
import axios from 'axios'
import {postUrl} from '../config/constants'
import update from 'react-addons-update';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

class PostsContainer extends Component{
    constructor(){
        super();
        this.state = {
            posts: null,
        }

        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
    }

    fetchData(){
        axios.get(`${postUrl}all`)
        .then((res)=>{
            console.log(res.data)
            this.setState({
                posts: res.data
            })
            console.log(this.state.posts.length)
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    componentDidMount(){
        this.fetchData();
    }

    upvote(post_id){
        let index = null;
        for(let i = 0; i < this.state.posts.length; i++){
            console.log(i)       
            if (this.state.posts[i].id === post_id) {
                console.log('found')
                index = i;
            }
        }
        if(index !== null){
            
            console.log(`${postUrl}${post_id}/upvote`);
            axios.get(`${postUrl}${post_id}/upvote`)
            .then((res)=>{
                console.log(res.data);
                let posts = this.state.posts;
                posts.append(res.data)
                // This call technically works but it won't refresh the components. Help me???
                this.setState({
                    posts: update(this.state.posts, {index: res.data})
                });      
            });
        }
        
    };

    downvote(post_id){
        let index = null;
        for(let i = 0; i < this.state.posts.length; i++){
            console.log(i)       
            if (this.state.posts[i].id === post_id) {
                console.log('found')
                index = i;
            }
        }
        if(index !== null){
            
            console.log(`${postUrl}${post_id}/downvote`);
            axios.get(`${postUrl}${post_id}/downvote`)
            .then((res)=>{
                console.log(res.data);
                let posts = this.state.posts;
                posts.append(res.data)
                // This call technically works but it won't refresh the components. Help me???
                this.setState({
                    posts: update(this.state.posts, {index: res.data})
                });      
            });
        }
        
    };

    render(){
        return(
            <main className="posts">
            {this.state.posts && 
            <Posts 
            upvote={this.upvote}
            downvote={this.downvote} 
            posts={this.state.posts}/>}
            
            </main>           
        )
    }
}

export default PostsContainer