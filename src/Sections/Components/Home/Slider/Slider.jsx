import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';
import image4 from '../../../../IMG/image4.jpg';
import image6 from '../../../../IMG/image6.jpg';
import image3 from '../../../../IMG/image3.jpg';
import { Carousel } from 'react-bootstrap';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image4} alt="First slide" />
        <Carousel.Caption>
          <h3 className='eslogan'>"Salud y amor para tus amigos de cuatro patas"</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image6} alt="Second slide" />
        <Carousel.Caption>
          <h3 className='eslogan'>"Salud y amor para tus amigos de cuatro patas"</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
        <Carousel.Caption>
          <h3 className='eslogan'>"Salud y amor para tus amigos de cuatro patas"</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;