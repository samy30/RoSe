import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "video-react/dist/video-react.css";
import img1 from '../assets/images/corniche.jpg';
import {Col, Row} from "react-bootstrap";
import vid1 from '../assets/videos/BabyShark.mp4'
import vid2 from '../assets/videos/Qatar World Cup 2022 - Official Trailer [HD].mp4'
import vid3 from '../assets/videos/Wheels on the Bus  CoCoMelon Nursery Rhymes  Kids Songs.mp4'
import vid4 from '../assets/videos/Yes Yes Vegetables Song  CoCoMelon Nursery Rhymes  Kids Songs.mp4'
import { Player, BigPlayButton } from 'video-react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

export default class Leisure extends Component {

    _renderVideo(item) {
        return (
            <div className='image-gallery-image'>
                <Player
                    playsInline
                    poster={img1}
                    src={item.embedUrl}
                >
                    <BigPlayButton position="center" />
                </Player>
            </div>
        )
    }
    render() {
        const images = [
            {
                thumbnail: img1,
                original: img1,
                embedUrl: vid2,
                description: 'Render custom slides within the gallery',
                renderItem: this._renderVideo.bind(this)
            },
            {
                thumbnail: img1,
                original: img1,
                embedUrl: vid2,
                description: 'Render custom slides within the gallery',
                renderItem: this._renderVideo.bind(this)
            },
            {
                thumbnail: img1,
                original: img1,
                embedUrl: vid3,
                description: 'Render custom slides within the gallery',
                renderItem: this._renderVideo.bind(this)
            },
            {
                thumbnail: img1,
                original: img1,
                embedUrl: vid4,
                description: 'Render custom slides within the gallery',
                renderItem: this._renderVideo.bind(this)
            },
            {
                thumbnail: img1,
                original: img1,
                embedUrl: vid2,
                description: 'Render custom slides within the gallery',
                renderItem: this._renderVideo.bind(this)
            },
            {
                thumbnail: img1,
                original: img1,
                embedUrl: vid1,
                description: 'Render custom slides within the gallery',
                renderItem: this._renderVideo.bind(this)
            },
        ];
        return (
            <div className={"section"}>
                <div className={"container"}>
            <Row>
                <Col md={8}>
                    <ImageGallery
                        items={images}
                        showPlayButton={false}
                        showFullscreenButton={false}
                    />
                </Col>
            </Row>
                    <Row>
                        <div>
                            <h4>Games</h4>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="category">Raised</p>
                                    <img src={img1} alt="Raised" className="rounded img-raised"/>
                                </div>
                                <div className="col-sm-3">
                                    <p className="category">Raised</p>
                                    <img src={img1} alt="Raised" className="rounded img-raised"/>
                                </div>
                                <div className="col-sm-3">
                                    <p className="category">Raised</p>
                                    <img src={img1} alt="Raised" className="rounded img-raised"/>
                                </div>
                                <div className="col-sm-3">
                                    <p className="category">Raised</p>
                                    <img src={img1} alt="Raised" className="rounded img-raised"/>
                                </div>
                                <div className="col-sm-3">
                                    <p className="category">Raised</p>
                                    <img src={img1} alt="Raised" className="rounded img-raised"/>
                                </div>
                                <div className="col-sm-3">
                                    <p className="category">Raised</p>
                                    <img src={img1} alt="Raised" className="rounded img-raised"/>
                                </div>
                                <div className="col-sm-3">
                                    <p className="category">Raised</p>
                                    <img src={img1} alt="Raised" className="rounded img-raised"/>
                                </div>
                                <div className="col-sm-3">
                                    <p className="category">Raised</p>
                                    <img src={img1} alt="Raised" className="rounded img-raised"/>
                                </div>
                                <div className="col-sm-3">
                                    <p className="category">Raised</p>
                                    <img src={img1} alt="Raised" className="rounded img-raised"/>
                                </div>
                                <div className="col-sm-3">
                                    <p className="category">Raised</p>
                                    <img src={img1} alt="Raised" className="rounded img-raised"/>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </div>

        );
    }
}
