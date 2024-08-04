import React from 'react';
import "../../assets/css/HomeCarouselCard.css"
// import 'bootstrap/dist/css/bootstrap.css';  
import Carousel from 'react-bootstrap/Carousel';
import { Container, CardImgOverlay } from 'react-bootstrap';


export default function CarouselHomePage() {
    return (

        <div className="AppHome" style={{ display: 'block', padding: 20 }}>

            <Carousel>
                <Carousel.Item className="Carousel1" interval={1500}>
                    <img className="d-block w-100" src={require("../../assets/images/Homecard/CarouselProject1.jpg")} alt='CarouselProject1' />
                    <Carousel.Caption className="Caption">
                        <div> <h4 className="carouselCaption1">Welcome To Fashion</h4>
                            <h1 className="carouselCaption2">MEN FASHION</h1>
                            <div className="slider-contain">
                                <a className="btn btn-solid" href="/left-sidebar/collection">SHOP NOW </a>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="Carousel1" interval={1500}>
                    <img className="d-block w-100" src={require("../../assets/images/Homecard/CarouselProject2.jpg")} alt='CarouselProject1' />
                    <div className="Women">
                        <Carousel.Caption className="Caption">
                            <h4 className="carouselCaption3">Welcome To Fashion</h4>
                            <h1 className="carouselCaption4">WOMEN FASHION</h1>
                            <div className="slider-contain">
                                <a className="btn btn-solid" href="/left-sidebar/collection">SHOP NOW </a>
                            </div>
                        </Carousel.Caption>  </div>

                </Carousel.Item>
            </Carousel>
            <br />
            <br />
            <Container className='p-4'>
                <div className="partition2 row">
                    <div className="col-md-6">
                        <card className="cardhome">


                            <div className="collection-banner"><img src={require("../../assets/images/Homecard/sub-banner1.jpg")} alt="" class="img-fluid media" /><div class="contain-banner"><div>
                                <CardImgOverlay className="overlay1"> <h4 className='cardtext1'>10% OFF</h4>
                                    <h2 className='cardtext2'>MEN</h2></CardImgOverlay></div></div> </div> </card></div>


                    <div className="col-md-6"><div><img src={require("../../assets/images/Homecard/sub-banner2.jpg")} alt="" class="img-fluid media" /><div class="contain-banner"><div>
                        <CardImgOverlay className="overlay2">
                            <h4 className='cardtext3'>10% OFF</h4>
                            <h2 className='cardtext4'>WOMEN</h2></CardImgOverlay>
                    </div></div></div></div></div>

            </Container>
        </div>
    );
}













