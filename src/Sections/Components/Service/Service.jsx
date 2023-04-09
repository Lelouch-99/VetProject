// Service.js
import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Service.css';
import atencion from '../../../IMG/atencion.jpg'

const Service = () => {
  return (
    <section id='service'>
        <div className="service-container">
          <Accordion className='accordion-item' defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Atencion Clinica</Accordion.Header>
              <Accordion.Body className='lista'>
                  <ul>
                    <li>Consulta general para perros: ₲ 120,000</li>
                    <li>Consulta general para gatos: ₲ 100,000</li>
                    <li>Consulta de emergencia para perros: ₲ 200,000</li>
                    <li>Consulta de emergencia para gatos: ₲ 180,000</li>
                  </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Castración</Accordion.Header>
              <Accordion.Body className='lista'>
                <ul>
                    <li>Castración de perro macho: ₲ 300,000</li>
                    <li>Castración de perro hembra: ₲ 350,000</li>
                    <li>Castración de gato macho: ₲ 250,000</li>
                    <li>Castración de gato hembra: ₲ 280,000</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Baños</Accordion.Header>
              <Accordion.Body className='lista'>
                  <ul>
                    <li>Baño básico para perros pequeños: ₲ 80,000</li>
                    <li>Baño básico para perros medianos: ₲ 100,000</li>
                    <li>Baño básico para perros grandes: ₲ 120,000</li>
                    <li>Baño básico para gatos: ₲ 90,000</li>
                    <li>Baño antipulgas para perros pequeños: ₲ 100,000</li>
                    <li>Baño antipulgas para perros medianos: ₲ 120,000</li>
                    <li>Baño antipulgas para perros grandes: ₲ 140,000</li>
                    <li>Baño antipulgas para gatos: ₲ 110,000</li>
                 </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="image-container">
            <img src={atencion} alt="Descripción de la imagen" className="service-image" />
          </div>
        </div>
    </section>
    
  );
};

export default Service;

