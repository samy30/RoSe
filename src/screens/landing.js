import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {Button} from "react-bootstrap"
import uuidv4 from "uuid";
import { config } from "react-spring";
import map from "../assets/images/map2.png"

let slides = [
  {
    key: uuidv4(),
    content: <div><img src={map} width={300} height={300} alt="1" /><h1>Maps</h1></div>
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/400/402/?random" alt="2" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/400/403/?random" alt="3" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/400/400/?random" alt="4" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/400/404/?random" alt="5" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/400/400/?random" alt="6" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/600/?random" alt="7" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/805/800/?random" alt="8" />
  }
];

export default class Landing extends Component {
  constructor(props, context) {
    super(props, context);

    this.testing = this.testing.bind(this);
  }
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  testing() {
    this.setState({goToSlide : (this.state.goToSlide-1)%8 })
  }

 

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <Button onClick={this.testing}>test</Button>
        </div>
    );
  }
}
