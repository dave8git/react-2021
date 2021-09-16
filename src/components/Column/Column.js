import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore';

class Column extends React.Component {
    static defualtProps = {
      icon: settings.defaultColumnIcon,
    }
    static propTypes = {
      title: PropTypes.node.isRequired, 
      description: PropTypes.node,
      columns: PropTypes.array, 
      image: PropTypes.node,
      children: PropTypes.node,
      cards: PropTypes.array,
      icon: PropTypes.node,
    }
    render() {
      const {title, icon, cards} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{title}<span className={styles.icon}><Icon name={icon}/></span></h3>
          <div className={styles.cards}>
            {cards.map(cardData => ( 
              <Card key={cardData.id} {...cardData} />
            ))}
          </div> 
        </section>
      );
    }
}

export default Column; 