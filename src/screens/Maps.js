import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Maps extends Component {
    render() {
        return (
            <div>
                <Link to={{pathname:"/", state: {fromPage: 0}}}>
                <h1>MapsPage</h1>
                </Link>
            </div>

        );
    }
}
