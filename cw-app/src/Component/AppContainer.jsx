import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import StarWarsCharacters from "./StarWarsCharacters";
import AddCharacter from "./AddCharacter";
 
class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    // looks like you don't have path's for your routes - a path is what associates a route and a link
    // also you should only have one Router element
    render() {
        return (
            <div>

                <h1>React Routes CW</h1>
                <Router>
                    <Link to='/'>StarWars</Link>
                    <Route>
                        <StarWarsCharacters />
                    </Route>
                </Router>
                <Router>
                    <Link to='/'>Add Character</Link>
                    <Route>
                        <AddCharacter/>
                    </Route>
                </Router>





            </div>
        )
    }
}
export default AppContainer