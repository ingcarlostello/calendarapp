import React from 'react';

//@ react router dom
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    Switch
} from "react-router-dom";

//@ components
import CalendarScreen from '../components/CalendarScreen';
import LoginScreen from '../components/LoginScreen';


const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/" component={CalendarScreen} />

                    <Redirect to="/" />

                   
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;