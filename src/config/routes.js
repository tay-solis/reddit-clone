import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home'
import PostForm from '../components/postcomponents/PostForm'


export default (
    <Switch>   
        <Route path='/newpost' component={PostForm}/> 
        <Route path="/" component={ Home }/>
             
    </Switch>
)