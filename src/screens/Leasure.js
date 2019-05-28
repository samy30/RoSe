import React from 'react';
import {Carousel} from '3d-react-carousal';

function Leasure() {
    let slides = [
        <img  src="https://picsum.photos/500/500/?random" alt="1" />,
        <img  src="https://picsum.photos/500/501/?random" alt="2" />  ,
        <img  src="https://picsum.photos/500/502/?random" alt="3" />  ,
        <img  src="https://picsum.photos/500/503/?random" alt="4" />  ,
        <img src="https://picsum.photos/500/504/?random" alt="5" />   ];

  return (
    <div className="App">
      <h3>Leasure Page</h3>
      <Carousel slides={slides}/>
    </div>
  );
}

export default Leasure;
