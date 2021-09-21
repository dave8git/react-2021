import React from 'react';
import { info } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
     
    <Hero titleText={info.title} image={info.image} />
    <h3>{info.subtitle}</h3>
    <p>{info.text}</p>
  </Container>
);

export default Info;