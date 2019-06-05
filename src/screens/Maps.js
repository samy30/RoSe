import React, { Component } from "react";
import {Link} from "react-router-dom";
import imge1 from '../assets/images/map3.png'
import imge2 from '../assets/images/list.jpg'

export default class Maps extends Component {
    render() {
        return (
            <div style={{backgroundColor: "#2D2D2D" , height: "100vh"}}>
                <div className="section section-examples" data-background-color="black" >
                    <div className="container text-center" style={{ height: "10px", marginTop: "70px" }}>
                        <div className="row">
                            <div className="col">
                                <a href="" target="_blank">
                                    <img src={imge1} alt="Image" className="img-raised"/>
                                </a>
                                <a href=""
                                   className="btn btn-outline-default btn-primary btn-round">Map of the Mall</a>
                            </div>
                            <div className="col">
                                <a href="examples/profile-page.html" target="_blank">
                                    <img src={imge2} alt="Image" className="img-raised"/>
                                </a>
                                <a href="examples/profile-page.html"
                                   className="btn btn-outline-default btn-primary btn-round">List of Stores</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
