import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";
import Background2 from "../assets/images/qatarAirways.jpg"
import Background3 from "../assets/images/worldCup.jpg"
import Background4 from "../assets/images/corniche.jpg"
import Background7 from "../assets/images/Souq.jpg"
import Background5 from "../assets/images/http___cdn.cnn.com_cnnnext_dam_assets_171207104643-best-of-qatar-katara-landmark.jpg"
import Background6 from "../assets/images/museum.jpg"
// import {FaExpandArrowsAlt} from 'react-icons/fa';
// import imge1 from "../assets/images/map3.png";
// import imge2 from "../assets/images/list.jpg";
// https://www.templatemonster.com/demo/53764.html
//https://edition.cnn.com/travel/article/qatar-things-to-do/index.html?gallery=4

export default class About extends Component {
    render() {
        return (

            <div style={{ marginLeft: 0, marginRight: 0, height:"100vh" }}>
                <Row style={{height:"60%"}} >
                    <Col xs={6} className={"padding-0"} style={{height:"100%"}}>
                        <div className={"fullScreen"}>
                            <div style={{backgroundImage: "url("+Background3+")"}} className={"backgroundImage"}>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} className={"container section text-center"} style={{height:"100%"}}>
                        <h2 style={{color: "#8d1b3d"}}>World's Cup 2022</h2>
                        <p className="padding-10"> Lorem ipsum dolor sit amet, eu eam tota perpetua,pidis.</p>
                        <a href="/worldcup"
                           className="btn btn-outline-default btn-round" style={{color: "#8d1b3d"}}>Read More</a>
                    </Col>
                </Row>
                <Row style={{height:"60%"}} >
                    <Col xs={6} style={{height:"100%"}} className={"container section text-center"}>
                        <h2 style={{color: "#8d1b3d"}}>Doha's Corniche</h2>
                        <p className="padding-10"> Lorem ipsum dolor sit amet, eu eam tota perpetua, vis .</p>
                        <a href="/corniche"
                           className="btn btn-outline-default btn-round" style={{color: "#8d1b3d"}}>Read More</a>
                    </Col>
                    <Col xs={6} style={{height:"100%"}} className={"padding-0"}>
                        <div className={"fullScreen"}>
                            <div style={{backgroundImage: "url("+Background4+")"}} className={"backgroundImage"}>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{height:"60%"}} >
                    <Col xs={6} className={"padding-0"} style={{height:"100%"}}>
                        <div className={"fullScreen"}>
                            <div style={{backgroundImage: "url("+Background7+")"}} className={"backgroundImage"}>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} className={"container section text-center"} style={{height:"100%"}}>
                        <h2 style={{color: "#8d1b3d"}}>Souq Waqif</h2>
                        <p className="padding-10"> Lorem ipsum dolor sit amet, eu eam tota perpetua,pidis.</p>
                        <a href="/souqwaqef"
                           className="btn btn-outline-default btn-round" style={{color: "#8d1b3d"}}>Read More</a>
                    </Col>
                </Row>
                <Row style={{height:"60%"}} >
                    <Col xs={6} style={{height:"100%"}} className={"container section text-center"}>
                        <h3 style={{color: "#8d1b3d"}}>Museum of Islamic Art</h3>
                        <p className="padding-10"> Lorem ipsum dolor sit amet, eu eam tota perpetua, vis .</p>
                        <a href="/museum"
                           className="btn btn-outline-default btn-round" style={{color: "#8d1b3d"}}>Read More</a>
                    </Col>
                    <Col xs={6} style={{height:"100%"}} className={"padding-0"}>
                        <div className={"fullScreen"}>
                            <div style={{backgroundImage: "url("+Background6+")"}} className={"backgroundImage"}>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{height:"60%"}} >
                    <Col xs={6} className={"padding-0"} style={{height:"100%"}}>
                        <div className={"fullScreen"}>
                            <div style={{backgroundImage: "url("+Background2+")"}} className={"backgroundImage"}>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} className={"container section text-center"} style={{height:"100%"}}>
                        <h2 style={{color: "#8d1b3d"}}>Qatar Airways</h2>
                        <p className="padding-10"> Lorem ipsum dolor sit amet, eu eam tota perpetua,pidis.</p>
                        <a href="/qatarairways"
                           className="btn btn-outline-default btn-round" style={{color: "#8d1b3d"}}>Read More</a>
                    </Col>
                </Row>
                <Row style={{height:"60%"}} >
                    <Col xs={6} style={{height:"100%"}} className={"container section text-center"}>
                        <h2 style={{color: "#8d1b3d"}}>Katara</h2>
                        <p className="padding-10"> Lorem ipsum dolor sit amet, eu eam tota perpetua, vis .</p>
                        <a href="/katara"
                           className="btn btn-outline-default btn-round" style={{color: "#8d1b3d"}}>Read More</a>
                    </Col>
                    <Col xs={6} style={{height:"100%"}} className={"padding-0"}>
                        <div className={"fullScreen"}>
                            <div style={{backgroundImage: "url("+Background5+")"}} className={"backgroundImage"}>
                            </div>
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
