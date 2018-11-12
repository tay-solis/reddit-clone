import React, {Component} from 'react'

class PostThumb extends Component{
    render(){
        console.log(this.props.tag_line)
        return(
            <div className="postThumb">
                <img src={this.props.thumbnail_image_url}/>
                <h2 className="post-title">{this.props.tag_line}</h2>
            </div>     
        )
    }
}

export default PostThumb