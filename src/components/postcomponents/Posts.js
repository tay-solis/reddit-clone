import React, {Component} from 'react'
import PostThumb from './PostThumb'

class Posts extends Component{
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount(){
        let posts = [];
        console.log(this.state.posts)
        for (let i = 0; i < this.props.posts.length; i++){
            posts.push(<PostThumb 
                upvote={this.props.upvote}
                downvote={this.props.downvote}
                key={i}
                id={this.props.posts[i].id}
                tag_line={this.props.posts[i].tag_line} 
                thumbnail_image_url={this.props.posts[i].thumbnail_image_url}
                subreddit={this.props.posts[i].subreddit}
                user={this.props.posts[i].user}
                votes={this.props.posts[i].votes}/>)
        }
        this.setState({
            posts
        })
    }
    render(){
        return(
            <section>
                {this.state.posts}
            </section>          
        )
    }
}

export default Posts