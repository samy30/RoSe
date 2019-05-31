import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <Link to={{pathname:"/", state: {fromPage: 2}}}>
                <h1>ContactsPage</h1>
                </Link>
            </div>

        );
    }
}
