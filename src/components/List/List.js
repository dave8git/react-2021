import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Container from '../Container/Container';

class List extends React.Component {
  static propTypes = {
    addColumn: PropTypes.func,
    title: PropTypes.node.isRequired, 
    description: PropTypes.node,
    columns: PropTypes.array, 
    image: PropTypes.node,
    children: PropTypes.node,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }
  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <Hero titleText={title} image={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)} 
          </div>
          <div className={styles.columns}>
            {columns.map(columnData => ( 
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn} />
          </div>
        </section>
      </Container>
    );
  }
}

export default List;