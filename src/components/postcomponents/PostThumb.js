import React, {Component} from 'react'

class PostThumb extends Component{
    constructor(){
        super()
        this.state={
            id: null,
            votes: null,
            subreddit: null,
            user:null,
            tag_line: "",
            thumbnail_image_url: ""
        }
        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this)
    }

    componentDidMount(){
        this.setState({
            id: this.props.id,
            votes: this.props.votes,
            subreddit: this.props.subreddit,
            user: this.props.user,
            tag_line: this.props.tag_line,
            thumbnail_image_url: this.props.thumbnail_image_url
        })
    }
    //Couldn't get PostsContainer to auto-rerender with ajax call, so this is kind of bullshit
    upvote(){
        let votes = this.state.votes+1;
        this.setState({votes})
        this.props.upvote(this.state.id)
    }

    downvote(){
        let votes = this.state.votes-1;
        this.setState({votes})
        this.props.downvote(this.state.id)
    }

    render(){
        return(
            <div className="postThumb">
              <div className="voteBox">
                <span onClick={this.upvote}><i  className="fas fa-arrow-up"></i></span> 
                <span className="voteCount">{this.state.votes}</span>
                <span onClick={this.downvote}><i className="fas fa-arrow-down"></i></span>
              </div>
              <div className="postThumbText">
                <span className="subredditName">r/{this.state.subreddit && this.state.subreddit.slug}</span>
                <span className="postUser"> posted by u/{this.state.user && this.state.user[0]}</span>
                <h2 className="post-title">{this.state.tag_line}</h2>
                
              </div>
                <img src={this.state.thumbnail_image_url}/>
                  
            </div>     
        )
    }
}

export default PostThumb