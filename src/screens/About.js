import React, { Component } from "react";
import {Link} from "react-router-dom";
import {Row, Col, Container} from "react-bootstrap";
import Background1 from "../assets/images/qatar/img22.jpg"
import Background2 from "../assets/images/qatarAirways.jpg"
import Background3 from "../assets/images/worldCup.jpg"
import Background4 from "../assets/images/corniche.jpg"
import Background5 from "../assets/images/http___cdn.cnn.com_cnnnext_dam_assets_171207104643-best-of-qatar-katara-landmark.jpg"
import Background6 from "../assets/images/museum.jpg"
import {FaExpandArrowsAlt} from 'react-icons/fa';
// https://www.templatemonster.com/demo/53764.html
//https://edition.cnn.com/travel/article/qatar-things-to-do/index.html?gallery=4

export default class About extends Component {
    render() {
        return (
            <div style={{ marginLeft: 0, marginRight: 0, overflow: "hidden", height:"100vh" }}>
                <Row style={{height:"45%"}} >
                    <Col xs={6} className={"padding-0 hover12"}>
                        <div className={"backEnd fullScreen"}>
                            <div style={{backgroundImage: "url("+Background3+")"}} className={"backgroundImage frontEnd"}>
                            </div>
                            <FaExpandArrowsAlt size={40} color={ "white"} className={"centered icon"} />
                            <h4 className={"centered70"}>World's Cup 2022</h4>
                        </div>
                    </Col>
                    <Col xs={6} className={"padding-0 hover12"}>
                        <div className={"backEnd fullScreen"}>
                        <div style={{backgroundImage: "url("+Background2+")"}} className={"backgroundImage frontEnd"}>
                        </div>
                            <FaExpandArrowsAlt size={40} color={ "white"} className={"centered icon"} />
                            <h2 className={"centered70"}>Qatar Airways</h2>
                        </div>
                    </Col>
                </Row>
                <Row style={{height:"26%"}}>
                    <Col xs={4} className={"padding-0 hover12"}>
                        <div className={"backEnd fullScreen"}>
                            <div style={{backgroundImage: "url("+Background4+")"}} className={"backgroundImage frontEnd"}>
                            </div>
                            <FaExpandArrowsAlt size={40} color={ "white"} className={"centered icon"} />
                            <h6 className={"centered70"}>Doha Corniche</h6>
                        </div>
                    </Col>
                    <Col xs={4} className={"padding-0 hover12"}>
                        <div className={"backEnd fullScreen"}>
                            <div style={{backgroundImage: "url("+Background5+")"}} className={"backgroundImage frontEnd"}>
                            </div>
                            <FaExpandArrowsAlt size={40} color={ "white"} className={"centered icon"} />
                            <h6 className={"centered70"}>Katara Cultural Village</h6>
                        </div>
                    </Col>
                    <Col xs={4} className={"padding-0 hover12"}>
                        <div className={"backEnd fullScreen"}>
                            <div style={{backgroundImage: "url("+Background6+")"}} className={"backgroundImage frontEnd"}>
                            </div>
                            <FaExpandArrowsAlt size={40} color={ "white"} className={"centered icon"} />
                            <h6 className={"centered70"}>Museum of Islamic Art</h6>
                        </div>
                    </Col>
                </Row>
                <Row style={{height:"29%"}}>
                    <Col xs={12} className={"padding-0 hover12"}>
                        <div className={"backEnd fullScreen"}>
                            <div style={{backgroundImage: "url("+Background2+")"}} className={"backgroundImage frontEnd"}>
                            </div>
                            <FaExpandArrowsAlt size={40} color={ "white"} className={"centered icon"} />
                            <h2 className={"centered70"}>Qatar Airways</h2>
                        </div>
                    </Col>
                </Row>
                {/*<Link to={{pathname:"/", state: {fromPage: 4}}}>*/}
                {/*    <h1 style={{position: "absolute", top:0, right:0}}>AboutPage</h1>*/}
                {/*</Link>*/}
            </div>

        );
    }
}
