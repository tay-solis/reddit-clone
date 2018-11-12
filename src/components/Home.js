import React, {Component} from 'react'
import PostsContainer from '../containers/PostsContainer'


class Home extends Component{
    render(){
        return(
            <main className="home">
                <h1>This is Home</h1>
                <PostsContainer/>
            </main>
        )
    }
}

export default Home;