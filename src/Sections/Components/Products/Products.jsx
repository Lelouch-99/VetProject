// Products.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Products.css';
import alimentos from '../../../IMG/alimentos.jpg'
import accesorios from '../../../IMG/accesorios.jpg'

const Products = () => {
  return (
    <section id='products'>
        <div className="products-container">
      <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          autoPlay={false}
          infiniteLoop={true}
          swipeable={true}
      >
        <div>
          <div className='ProductsDescription'>
            <a href="#" className="ProductsDescriptionLink">
             <h3>ALIMENTOS PARA MASCOTAS</h3>
            </a>
          </div>
          <img src={alimentos} alt="Producto 1" className='image'/>
        </div>
        <div>
          <div className='ProductsDescription'>
            <a href="#" className="ProductsDescriptionLink">
             <h3>ACCESORIOS PARA MASCOTAS</h3>
            </a>
          </div>
          <img src={accesorios} alt="Producto 2" className='image' />
        </div>
      </Carousel>
    </div>
    </section>
   
  );
};

export default Products;



