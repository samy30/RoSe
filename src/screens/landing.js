import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {Button} from "react-bootstrap"
import uuidv4 from "uuid";
import { config } from "react-spring";
import map from "../assets/images/122.png"
import Background1 from "../assets/images/qatar/img22.jpg"
import Background2 from "../assets/images/qatar/img23.jpg"
import Background3 from "../assets/images/qatar/img19.jpg"
import Background4 from "../assets/images/qatar/img5.jpg"
import Background5 from "../assets/images/qatar/img6.jpg"
import Background6 from "../assets/images/qatar/img7.jpg"
import Background7 from "../assets/images/qatar/img8.jpg"
import Background8 from "../assets/images/qatar/img9.jpg"

let slides = [
  {
    key: uuidv4(),
    content: <div><img src={map} width={200} height={200} alt="1" /><h1>Maps</h1></div>
  },
  {
    key: uuidv4(),
    content: <div><img src={map} width={200} height={200} alt="1" /><h1>Maps</h1></div>
  },
  {
    key: uuidv4(),
    content: <div><img src={map} width={200} height={200} alt="1" /><h1>Maps</h1></div>
  },
  {
    key: uuidv4(),
    content: <div><img src={map} width={200} height={200} alt="1" /><h1>Maps</h1></div>
  },
  {
    key: uuidv4(),
    content: <div><img src={map} width={200} height={200} alt="1" /><h1>Maps</h1></div>
  },
  {
    key: uuidv4(),
    content: <div><img src={map} width={200} height={200} alt="1" /><h1>Maps</h1></div>
  },
  {
    key: uuidv4(),
    content: <div><img src={map} width={200} height={200} alt="1" /><h1>Maps</h1></div>
  },
  {
    key: uuidv4(),
    // content: <img src="https://picsum.photos/805/800/?random" alt="8" />
    content: <div><img src={map} width={200} height={200} alt="1" /><h1>Maps</h1></div>
  }
];

let Backgrounds = [
    Background1,
    Background2,
    Background3,
    Background4,
    Background5,
    Background6,
    Background7,
    Background8,
];

export default class Landing extends Component {
  constructor(props, context) {
    super(props, context);

    this.testing = this.testing.bind(this);
    this.fadeout = this.fadeout.bind(this);
  }
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
    BackgroundImage: Backgrounds[0],
    fade: true
  };
  testing() {
    this.setState({  BackgroundImage : (Backgrounds[(this.state.goToSlide-1+8)%8]), goToSlide : (this.state.goToSlide-1)%8, fade: !this.state.fade})
  }
  fadeout() {
    this.setState({fade: !this.state.fade})
  }



  render() {
    const fade = this.state.fade;
    return (
      <div className={"App " + (fade ? 'fade-in2' : 'fade-in')} style={{ paddingTop: "5%", backgroundImage: "url(" + this.state.BackgroundImage + ")"}} >
        <div style={{ width: "80%", height: "400px", margin: "0 auto" }}>
        <Carousel
          slides={slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          // showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        </div>
        <Button onClick={this.testing}>test</Button>
      </div>

    );
  }
}
