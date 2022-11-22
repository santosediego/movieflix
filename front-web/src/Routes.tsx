import PrivateRoute from 'components/PrivateRoute';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import history from 'util/history';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import Listing from './pages/Listing';

function Routes() {
    return (
        <Router history={history}>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Auth />
                </Route>
                <PrivateRoute path='/movies'>
                    <Route path='/movies' exact>
                        <Listing />
                    </Route>
                    <Route path='/movies/:movieId'>
                        <div><p>em desenvolvimento</p></div>
                    </Route>
                </PrivateRoute>
                <Redirect from='*' to='/' exact />
            </Switch>
        </Router>
    );
}

export default Routes;
