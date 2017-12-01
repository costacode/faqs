import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import A1 from './components/A1';
import A2 from './components/A2';
import A3 from './components/A3';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Demo FAQs</h1>
                    <ul className="header">
                        <li>
                            <NavLink exact to="/a1">
                                Question 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/a2">
                                Question 2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/a3">
                                Question 3
                            </NavLink>
                        </li>
                    </ul>
                    <div className="content">
                        <Route exact path="/a1" component={A1} />
                        <Route exact path="/a2" component={A2} />
                        <Route exact path="/a3" component={A3} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
