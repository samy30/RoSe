import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {Button} from "react-bootstrap"
import uuidv4 from "uuid";
import { config } from "react-spring";
import map from "../assets/images/122.png"
import dice from "../assets/images/dice.png"
import phone from "../assets/images/contact2.png"
import Background1 from "../assets/images/qatar/img22.jpg"
import Background2 from "../assets/images/qatar/img23.jpg"
import Background3 from "../assets/images/qatar/img19.jpg"
import Background4 from "../assets/images/qatar/img5.jpg"
import Background5 from "../assets/images/qatar/img6.jpg"
import {Link} from "react-router-dom";

let slides = [
  {
    key: uuidv4(),
    content: <div><Link to="/maps"><img src={map} width={200} height={200} alt="1" /><h1 className={"names"}>Maps</h1></Link></div>
  },
  {
    key: uuidv4(),
    content: <div><Link to="/leisure"><img src={dice} width={200} height={200} alt="1" /><h1 className={"names"}>Leisure</h1></Link></div>
  },
  {
    key: uuidv4(),
    content: <div><Link to="/contacts"><img src={phone} width={200} height={200} alt="1" /><h1 className={"names"}>Contacts</h1></Link></div>
  },
  {
    key: uuidv4(),
    content: <div><Link to="/help"><img src={map} width={200} height={200} alt="1" /><h1 className={"names"}>Help</h1></Link></div>
  },
  {
    key: uuidv4(),
    content: <div><Link to="/about"><img src={map} width={200} height={200} alt="1" /><h1 className={"names"}>About Qatar</h1></Link></div>
  }
];

let Backgrounds = [
    Background1,
    Background2,
    Background3,
    Background4,
    Background5,
];

export default class Landing extends Component {
  constructor(props, context) {
    super(props, context);

    this.testing = this.testing.bind(this);
    this.fadeout = this.fadeout.bind(this);
    // let  fromPage = 0
    // if(typeof props.location.state !== "undefined"){
    //   if(typeof props.location.state.fromPage !== "undefined")
    //   (fromPage) = props.location.state.fromPage;
    // }
    // alert(fromPage);

    this.state = {
      goToSlide: 0,
      offsetRadius: 2,
      showNavigation: false,
      config: config.gentle,
      BackgroundImage: Backgrounds[0],
      fade: true
    };
    console.log(this.state);
  }

  testing() {
    this.setState({  BackgroundImage : (Backgrounds[(this.state.goToSlide+1+5)%5]), goToSlide : (this.state.goToSlide+1)%5, fade: !this.state.fade})
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
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        </div>
        <Button onClick={this.testing}>test</Button>
      </div>

    );
  }
}
