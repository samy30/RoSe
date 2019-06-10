import React, { Component } from "react";
import {Col, Row} from "react-bootstrap";
import Background from "../assets/images/robot.front.jpg";

export default class Help extends Component {
    render() {
        return (
            <div style={{height: "100vh", paddingTop: "5%"}}>
                <h1 className="title" style={{color: "#8d1b3d"}}> What is RoSe ?</h1>
                <Row  >
                    <Col xs={6} >
                        <div className="padding-10">
                            <img src={Background} alt=" background" className="img-raised"/>
                        </div>
                    </Col>
                    <Col xs={6} className={"container section text-center"} style={{height:"100%"}}>
                        <p className="padding-10"> Lorem ipsum dolor sit amet, eu eam tota perpetua,pidis.</p>
                    </Col>
                </Row>
            </div>

        );
    }
}
