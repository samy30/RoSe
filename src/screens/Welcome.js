import React, { Component } from "react";
import BackgroundImage from "../assets/images/logo.png"
import BackgroundImage2 from "../assets/images/qatar/img0.jpg"
import {MovingWord} from "../Components/MovingWord"
import {LanguagesButton} from "../Components/LanguagesButton"
import { CSSTransition } from 'react-transition-group';
import { Container} from "react-bootstrap";
import "animate.css/animate.min.css";



export default class Welcome extends Component {


    constructor(props, context) {
        super(props, context);

        this.state = {
            showWelcome: true,
            showMessage: false,
            visible: true,
        };
    }

    setShowWelcome(bool){
    this.setState({showWelcome: bool})
    }

    setShowMessage(bool){
    this.setState({showMessage: bool})
    }





    componentDidMount() {
        setTimeout(()=>{
            this.setState({showMessage: true, visible: false})
        },1000)
    }

    componentWillUnmount() {
        setTimeout(()=>{},300)
    }


    render() {
        return (
            <Container>

                {/*<div className=" bounceIn">*/}
                {/*    <h1>Stuff to move</h1>*/}
                {/*</div>*/}

                    <div style={{ height:"100vh", overflow: "hidden", display: this.state.visible?"inline":"none"}}>
                        {this.state.showWelcome && (
                        <section style={{ height:"100%"}}>
                            <span className="blur" style={{backgroundImage: "url(" + BackgroundImage + ")"}}></span>
                            <div style={{ height:"100vh", textAlign: "center"}}>
                                <h2 className="text-white centered2"  style={{ fontWeight: "900" }}>Welcome to RoSe (Robot Service)</h2>
                            </div>

                        </section>
                        )}
                    </div>
                <CSSTransition
                    in={this.state.showMessage}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => this.setShowWelcome(false)}
                    onExited={() => this.setShowWelcome(true)}
                >
                    <div style={{ height:"100vh"}} data-animation="scaleDown">
                        <section style={{ height:"100%"}}>
                            <span className="blur" style={{backgroundImage: "url(" + BackgroundImage2 + ")"}}></span>
                            <div style={{ height:"100vh"}} className="vertical-center">
                                    <LanguagesButton/>
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
                </CSSTransition>
            </Container>
        );
    }
}
