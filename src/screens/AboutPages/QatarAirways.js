import React, { Component } from "react";
import "../../assets/css/now-ui-kit.css"
import BackgroundImage from "../../assets/images/qatarAirways2.jpg"
import BackgroundImage3 from "../../assets/images/qatarAirways3.jpg"
import BackgroundImage4 from "../../assets/images/qatarAirways4.jpg"

export default class QatarAirways extends Component {
    render() {
        return (
            <div className="wrapper">
                    <div className="page-header page-header-small">
                        <div className="page-header-image" data-parallax="true"
                             style={{backgroundImage: "url(" + BackgroundImage + ")"}}>
                        </div>
                        <div className="content-center">
                            <div className="container">
                                <h1 className="title" style={{color: "#DADADA"}}>Quatar Airways.</h1>
                            </div>
                        </div>
                    </div>
                <div className="section section-about-us" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 ml-auto mr-auto text-center">
                                <h2 className="title" style={{color: "#8d1b3d"}}>Who we are?</h2>
                                <h5 className="description" style={{color: "black"}}>Qatar Airways is proud to be one of the youngest global airlines to serve all six continents and also the world’s fastest-growing airline. It connects more than 160 destinations on the map every day, with a fleet of the latest-generation aircraft, and an unrivalled level of service from our home and hub, the Five-star airport, Hamad International Airport in Doha, the State of Qatar.</h5>
                            </div>
                        </div>
                        <div className="separator separator-primary"></div>
                        <div className="section-story-overview">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="image-container image-left"
                                         style={{backgroundImage: "url(" + BackgroundImage3 + ")"}}>
                                        {/*First image on the left side*/}
                                        {/*<p className="blockquote blockquote-primary">"Over the span of the satellite*/}
                                        {/*    record, Arctic sea ice has been declining significantly, while sea ice in*/}
                                        {/*    the Antarctichas increased very slightly"*/}
                                        {/*    <br />*/}
                                        {/*    <br />*/}
                                        {/*    <small>-NOAA</small>*/}
                                        {/*</p>*/}
                                    </div>
                                    {/*Second image on the left side of the article*/}
                                    {/*<div className="image-container" style={{backgroundImage: "url(" + BackgroundImage2 + ")"}}></div>*/}
                                </div>
                                <div className="col-md-5">
                                    {/*First image on the right side, above the article*/}
                                    <div className="image-container image-right"
                                         style={{backgroundImage: "url(" + BackgroundImage4 + ")"}}></div>
                                    {/*<h3>So what does the new record for the lowest level of winter ice actually*/}
                                    {/*    mean</h3>*/}
                                    {/*<p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every*/}
                                    {/*    summer, and that process will continue whatever happens with climate change.*/}
                                    {/*    Even if the Arctic continues to be one of the fastest-warming regions of the*/}
                                    {/*    world, it will always be plunged into bitterly cold polar dark every winter. And*/}
                                    {/*    year-by-year, for all kinds of natural reasons, there’s huge variety of the*/}
                                    {/*    state of the ice.*/}
                                    {/*</p>*/}
                                    {/*<p>*/}
                                    {/*    For a start, it does not automatically follow that a record amount of ice will*/}
                                    {/*    melt this summer. More important for determining the size of the annual thaw is*/}
                                    {/*    the state of the weather as the midnight sun approaches and temperatures rise.*/}
                                    {/*    But over the more than 30 years of satellite records, scientists have observed a*/}
                                    {/*    clear pattern of decline, decade-by-decade.*/}
                                    {/*</p>*/}
                                    {/*<p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every*/}
                                    {/*    summer, and that process will continue whatever happens with climate change.*/}
                                    {/*    Even if the Arctic continues to be one of the fastest-warming regions of the*/}
                                    {/*    world, it will always be plunged into bitterly cold polar dark every winter. And*/}
                                    {/*    year-by-year, for all kinds of natural reasons, there’s huge variety of the*/}
                                    {/*    state of the ice.*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
