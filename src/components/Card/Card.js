import React from 'react'; 
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = props => (
    <section class={styles.component}>
        <h3>{props.title}</h3>
    </section>
);

export default Card;