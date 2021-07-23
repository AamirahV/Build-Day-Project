
import React, {Component} from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Cat from './cat';
  import Dog from './dog';
  import Fox from './fox';

class Navigation extends Component {
    render() { 
        return(
            <HashRouter>
            <div>
              <ul className="header">
                <li href="#cats"><NavLink to="/cat">Cats</NavLink></li>
                <li href="#dogs"><NavLink to="/dog">Dogs</NavLink></li>
                <li href="#foxes"><NavLink to="/fox">Foxes</NavLink></li>
              </ul>
              <div className="content">
                <Route exact path="/cat" component={Cat}/>    
                <Route path="/dog" component={Dog}/>
                <Route path="/fox" component={Fox}/>
              </div>
            </div>
          </HashRouter>
        )
}
}

export default Navigation;