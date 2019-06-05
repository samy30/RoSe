import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Leisure extends Component {
    render() {
        return (
            <div>
                <Link to={{pathname:"/", state: {fromPage: 1}}}>
                <h1>LeisurePage</h1>
                </Link>
            </div>

        );
    }
}
