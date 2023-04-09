import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Slider from './Slider/Slider';

const Home = () => {
  return (
  <>
   <section id="home">
     <Header/>
     <Slider/>
   </section>
    
  </>
  );
};

export default Home