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
        for (let i = 0; i < this.props.posts.length; i++){
            posts.push(<PostThumb 
                key={i}
                tag_line={this.props.posts[i].tag_line} 
                thumbnail_image_url={this.props.posts[i].thumbnail_image_url}/>)
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