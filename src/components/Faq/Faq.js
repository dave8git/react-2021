import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero'; 
import { faq } from '../../data/datastore';

const Faq = props => (
  <Container>
    <Hero titleText={faq.title} image={faq.image} />
    <h3>{faq.subtitle}</h3>
  </Container>
);

export default Faq;