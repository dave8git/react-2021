import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';

const SearchResults = (props) => {
  return (
    <div className={styles.component}>
      <div className={styles.item}>
        {props.cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  cards: PropTypes.array, 
};
export default SearchResults; 