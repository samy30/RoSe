import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import maps from "../assets/images/icons/maps.png"
import leisure from "../assets/images/icons/leisure.png"
import qatar from "../assets/images/icons/qatar.png"
import about from "../assets/images/icons/about.png"
import contacts from "../assets/images/icons/contacts.png"
import Background1 from "../assets/images/qatar/img22.jpg"
import Background2 from "../assets/images/qatar/img23.jpg"
import Background3 from "../assets/images/qatar/img19.jpg"
import Background4 from "../assets/images/qatar/img5.jpg"
import Background5 from "../assets/images/qatar/img6.jpg"
import {Link} from "react-router-dom";
import ReactTouchEvents from "react-touch-events";

let slides = [
  {
    key: uuidv4(),
    content: <div><Link to="/maps"><img src={maps} width={200} height={200} alt="1" /><h1 className={"names"}>Maps</h1></Link></div>
  },
  {
    key: uuidv4(),
    content: <div><Link to="/leisure"><img src={leisure} width={200} height={200} alt="1" /><h1 className={"names"}>Leisure</h1></Link></div>
  },
  {
    key: uuidv4(),
    content: <div><Link to="/contacts"><img src={contacts} width={200} height={200} alt="1" /><h1 className={"names"}>Contacts</h1></Link></div>
  },
  {
    key: uuidv4(),
    content: <div><Link to="/help"><img src={about} width={200} height={200} alt="1" /><h1 className={"names"}>Help</h1></Link></div>
  },
  {
    key: uuidv4(),
    content: <div><Link to="/about"><img src={qatar} width={200} height={200} alt="1" /><h2 className={"names"}>About Qatar</h2></Link></div>
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
    this.scrollToLeft = this.scrollToLeft.bind(this);
    this.scrollToRight = this.scrollToRight.bind(this);
    this.fadeout = this.fadeout.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
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
  }

  testing() {
    this.setState({  BackgroundImage : (Backgrounds[(this.state.goToSlide+1+5)%5]), goToSlide : (this.state.goToSlide+1)%5, fade: !this.state.fade})
  }
  fadeout() {
    this.setState({fade: !this.state.fade})
  }
  handleScroll(event) {
    alert("doooone");
  }
  handleSwipe (direction) {

    switch (direction) {
      case "top":
        alert("top");
        break;
      case "bottom":
        alert("bottom");
        break;
      case "left":
        this.scrollToLeft();
        break ;
      case "right":
        this.scrollToRight();
        break ;
      default:
        console.log(`you swiped ${direction}`)
        break ;

    }
  }

  scrollToLeft () {
    this.setState({  BackgroundImage : (Backgrounds[(this.state.goToSlide+1+5)%5]), goToSlide : (this.state.goToSlide+1)%5, fade: !this.state.fade})
  }

  scrollToRight () {
    this.setState({  BackgroundImage : (Backgrounds[(this.state.goToSlide-1+5)%5]), goToSlide : (this.state.goToSlide-1)%5, fade: !this.state.fade})
  }



  render() {
    const fade = this.state.fade;
    // const swipe = defineSwipe({swipeDistance: 50});
    return (
        <ReactTouchEvents
            onSwipe={ this.handleSwipe.bind(this) }
        >
      <div className={"App " + (fade ? 'fade-in2' : 'fade-in')} style={{ paddingTop: "5%", backgroundImage: "url(" + this.state.BackgroundImage + ")"}} >
        <div style={{ width: "80%", height: "400px", margin: "0 auto" }} onScroll={this.testing}>

        <Carousel
          slides={slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />

        </div>


        {/*<Button onClick={this.testing}>test</Button>*/}

      </div>
        </ReactTouchEvents>


    );
  }
}
