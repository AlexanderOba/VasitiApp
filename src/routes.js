import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './HOCs/layout';

class Routes extends Component{
    render(){
        return(
           
            <Layout>
                <Switch>
                    <Route  exact path ="/" component={Home}/>
                </Switch>
            </Layout>
    
           
        )
    }
}
export default Routes;