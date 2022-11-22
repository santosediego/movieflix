import PrivateRoute from 'components/PrivateRoute';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import Listing from './pages/Listing';

function Routes() {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default Routes;
