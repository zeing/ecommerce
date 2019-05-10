import React, { Component } from 'react';
import { Grommet, Box } from 'grommet'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from './components/AppBar'
import ProductListPage from './pages/ProductListPage'
import CheckoutPage from './pages/CheckoutPage'
import ProfilePage from './pages/ProfilePage'
import './App.css';
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute"

class App extends Component {
  render() {
    return (
        <Grommet plain full>
          <Box direction="column" fill>
            <Router>
              <>
                <AppBar />
                <Switch>
                  <Route path="/" exact component={ProductListPage} />
                  <Route path="/checkout" exact component={CheckoutPage} />
                  <Route path="/login" exact component={LoginPage} />
                  <PrivateRoute path="/profile" exact component={ProfilePage} />
                  <Route patch="**" component={() => <h1>Not Found</h1>} />
              </Switch>
              </>
            </Router>
          </Box>
        </Grommet>
    );
  }
}

export default App;
