import React from 'react';
import styles from './Column.scss';
import List from '../List/List.js';

const Column = props => (
  <section className={styles.component}>
    <h3 className={styles.title}>{props.title}</h3>
  </section>
);

export default Column;