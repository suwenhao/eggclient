import * as React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import Main from './Main'
import Cart from './Cart'
import ProductInfo from './ProductInfo'
import ProductList from './ProductList'

class Index extends React.Component{
    public render() {
        return (
          <Switch>
              <Route exact path="/" component={Main}></Route>
              <Route exact path="/index" render={()=><Redirect to="/"/>}></Route>
              {/* <Route path="/order" component={Order}></Route> */}
              <Route exact path="/product" component={ProductInfo}></Route>
              <Route exact path="/list" component={ProductList}></Route>
              <Route exact path="/cart" component={Cart}></Route>
              {/* <Route component={My}></Route> */}
          </Switch>
        )
    }
}
export default Index