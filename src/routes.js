import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Story from './components/Stories/stories';
import Message from './components/Stories/messagesent';
import Layout from './HOCs/layout';

class Routes extends Component{
    render(){
        return(
           
            <Layout>
                <Switch>
                    <Route path="/story_page" component={Story}/>
                    <Route path="/message_sent" component={Message}/>
                    <Route  exact path ="/" component={Home}/>
                </Switch>
            </Layout>
    
           
        )
    }
}
export default Routes;