import React, { Component } from "react";
import BackgroundImage from "../assets/images/logo.png"
import {MovingWord} from "../Components/MovingWord"

export default class Welcome extends Component {


    render() {
        return (
            <div>
            <div style={{ height:"100vh", overflow: "hidden"}} data-animation="scaleDown" className="hidden">
                <section style={{ height:"100%"}}>
                    <span className="blur" style={{backgroundImage: "url(" + BackgroundImage + ")"}}></span>
                    <div style={{ height:"100vh", textAlign: "center"}}>
                        <h2 className="text-white centered2"  style={{ fontWeight: "900" }}>Welcome to RoSe (Robot Service)</h2>
                    </div>
                </section>
            </div>
                <div style={{ height:"100vh"}} data-animation="scaleDown">
                    <section style={{ height:"100%"}}>
                        <span className="blur" style={{backgroundImage: "url(" + BackgroundImage + ")"}}></span>
                        <div style={{ height:"100vh", textAlign: "center"}}>
                            <h2 className="text-white centered2">
                                <button className="btn btn-primary" id="select_lang">Select Language</button>
                            </h2>
                            <div>
                                <MovingWord
                                title={"Salut"}
                                />
                                <MovingWord
                                    title={"Hola"}
                                />
                                <MovingWord
                                    title={"Привет"}
                                />
                                <MovingWord
                                    title={"Nǐn hǎo"}
                                />
                                <MovingWord
                                    title={"Ciao"}
                                />
                                <MovingWord
                                    title={"Yā"}
                                />
                                <MovingWord
                                    title={"Hallo"}
                                />
                                <MovingWord
                                    title={"Oi"}
                                />
                                <MovingWord
                                    title={"Anyoung"}
                                />
                                <MovingWord
                                    title={"مرحبا"}
                                />
                                <MovingWord
                                    title={"Hello"}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
