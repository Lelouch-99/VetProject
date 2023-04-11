import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import image2 from '../../../IMG/image2.jpg'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'El nombre es obligatorio.';
    }

    if (!formData.email) {
      errors.email = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El correo electrónico no es válido.';
    }

    if (!formData.phone) {
      errors.phone = 'El teléfono es obligatorio.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'El teléfono debe tener 10 dígitos.';
    }

    if (!formData.message) {
      errors.message = 'El mensaje es obligatorio.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);
  
    if (!validateForm()) {
      return;
    }
  
    try {
      const response = await axios.post('https://https:/vetback-production.up.railway.app/api/contact',formData);
  
      if (response.data.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setShowSuccess(true);
      }
    } catch (error) {

      setShowSuccess(true);
    }
  };
  
  

  return (
    <section id='contact'>
     <Container className="contact-container">
     {showSuccess && (
            <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
              <Alert.Heading>¡Mensaje enviado con éxito!</Alert.Heading>
              <p>
                Hemos recibido tu mensaje y nos pondremos en contacto contigo lo más pronto posible.
              </p>
            </Alert>
          )}
          {showError && (
            <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
              <Alert.Heading>Error al enviar el mensaje</Alert.Heading>
              <p>
                Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.
              </p>
            </Alert>
          )}
      <div className="contact-form">
          <Row>
            <Col md={20}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className='form-control'>
                  <Form.Label className='form-label'>Nombre</Form.Label>
                  <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                  {validationErrors.name && <p className="text-danger">{validationErrors.name}</p>}
                </Form.Group>

                <Form.Group className='form-control'>
                  <Form.Label className='form-label' >Correo electrónico</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email"/>
                  {validationErrors.email && <p className="text-danger">{validationErrors.email}</p>}
                </Form.Group>

                <Form.Group className='form-control'>
                  <Form.Label className='form-label'>Teléfono</Form.Label>
                  <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="telefono" />
                  {validationErrors.phone && <p className="text-danger">{validationErrors.phone}</p>}
                </Form.Group>

                <Form.Group className='form-control'>
                  <Form.Label className='form-label'>Mensaje</Form.Label>
                  <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje" />
                  {validationErrors.message && <p className="text-danger">{validationErrors.message}</p>}
                </Form.Group>

                <Button type="submit">Send</Button>
              </Form>
            </Col>
            <Col md={6}>
              {/* Aquí se puede agregar la imagen a la derecha del formulario */}
            </Col>
          </Row>
          <div className="contact-image">
              <img src={image2} alt="Descripción de la imagen" className="contact-image" />
          </div>
        </div>
     </Container>
    </section>
   
    );
  };

export default Contact;

