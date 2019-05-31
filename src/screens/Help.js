import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Help extends Component {
    render() {
        return (
            <div>
                <Link to={{pathname:"/", state: {fromPage: 3}}}>
                <h1>HelpPage</h1>
                </Link>
            </div>

        );
    }
}
