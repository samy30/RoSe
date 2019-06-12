import React, { Component } from "react";
import {CSSTransition} from "react-transition-group";
import {Alert, Button, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as ReactDOM from "react-dom";
import {update as TweenLite} from "react-spring";

export  class LanguagesButton extends Component {

    componentWillUnmount() {
        setTimeout(()=>{},300)
    }


    constructor(props, context) {
        super(props, context);

        this.state={
            showLanguages: false,
            showLanguageButton: true,
        }
    }

    setShowLanguages(bool){
        this.setState({showLanguages: bool})
    }

    setShowLanguageButton(bool){
        this.setState({showLanguageButton: bool})
    }

    render() {
        return (
            <Container>
                {this.state.showLanguageButton && (
                    <Button
                        onClick={() => this.setShowLanguages(true)}
                        size="lg"
                        style={{backgroundColor: "#8d1b3d"}}
                    >
                        Select Language
                    </Button>
                )}
                <CSSTransition
                    in={this.state.showLanguages}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => this.setShowLanguageButton(false)}
                    onExited={() => this.setShowLanguageButton(true)}
                >
                    <div>
                        <Row className="justify-content-md-center">
                            <Button style={{backgroundColor: "#8d1b3d"}}> العربية </Button>
                            <Button style={{backgroundColor: "#8d1b3d"}}> Francais</Button>
                            <Link to={"/landing"}><Button style={{backgroundColor: "#8d1b3d"}}> English</Button></Link>
                        </Row>
                    </div>
                </CSSTransition>
            {/*<div>*/}
            {/*    {this.state.showLanguageButton && (*/}
            {/*        <h2 className="text-white centered2">*/}
            {/*            <button className="btn btn-primary" onClick={this.setShowLanguages(true)}>Select Language</button>*/}
            {/*        </h2>*/}
            {/*    )}*/}
            {/*    <CSSTransition*/}
            {/*        in={this.state.showLanguages}*/}
            {/*        timeout={300}*/}
            {/*        classNames="alert"*/}
            {/*        unmountOnExit*/}
            {/*        onEnter={() => this.setShowLanguageButton(false)}*/}
            {/*        onExited={() => this.setShowLanguageButton(true)}*/}
            {/*    >*/}
            {/*        <h2 className="text-white centered2">*/}
            {/*            <button className="btn btn-primary" id="select_lang">22222222222</button>*/}
            {/*        </h2>*/}
            {/*    </CSSTransition>*/}
            {/*</div>*/}
            </Container>
        );
    }
}
