import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFount from './pages/NotFount';
import Index from './pages/Index';

class Routes extends React.Component {
    public render(){
        return (
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/404' component={NotFount}/>
                <Route component={Index}/>
            </Switch>
        )
    }
}

export default Routes