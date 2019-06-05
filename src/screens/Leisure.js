import React, { Component } from "react";
import {Link} from "react-router-dom";
import imge1 from '../assets/images/corniche.jpg'
import imge2 from '../assets/images/corniche.jpg'
import imge3 from '../assets/images/corniche.jpg'
import {Row , Col } from 'react-bootstrap'
import "../assets/css/now-ui-kit.css"

export default class Leisure extends Component {
    render() {
        return (
            <div>
                <div id="images">
                    <h4>Images</h4>
                    <div className="row">
                        <div className="col-sm-2">
                            <p className="category">Image</p>
                            <img src={imge1} alt="Rounded Image" className="rounded"/>
                        </div>
                        <div className="col-sm-2">
                            <p className="category">Circle Image</p>
                            <img src={imge2} alt="Circle Image" className="rounded-circle"/>
                        </div>
                        <div className="col-sm-2">
                            <p className="category">Raised</p>
                            <img src={imge3} alt="Raised Image" className="rounded img-raised"/>
                        </div>
                        <div className="col-sm-2">
                            <p className="category">Circle Raised</p>
                            <img src={imge3} alt="Thumbnail Image"
                                 className="rounded-circle img-raised"/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
