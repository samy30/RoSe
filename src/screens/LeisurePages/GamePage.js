import React, { Component } from "react";
export default class GamePage extends Component {
    render() {
        return (
            <div>
                <iframe
                    style={{width: "100%", height: "550px", overflow: "hidden"}}
                    src="https://cdn.htmlgames.com/DailyKaodoku/"
                    scrolling="no">
                </iframe>
            </div>

        );
    }
}
