/**
*
* List Container
*
*/

import React from 'react';
import { Button, Row } from 'reactstrap';
import SimpleCard from 'components/Card';
import items from 'components/Items';
import buttonHierarchy from 'components/ButtonHierarchy';
import _ from 'lodash';

import styles from './List.css';

class List extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    const colors = ['red', 'green', 'blue', 'orange', 'black'];
    const RandomizedColors = _.shuffle(colors);
    const currentColor = RandomizedColors.slice(0, 1);

    const RandomizedItems = _.shuffle(items);
    const RandomizedButtonHierarchy = _.shuffle(buttonHierarchy);

    super();
    this.state = {
      itemsList: RandomizedItems,
      hierarchy: RandomizedButtonHierarchy,
      color: currentColor[0],
      currentPage: 1,
      itemsPerPage: 6,
      href: '',
      isLastPage: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  }


  render() {
    const { itemsList, hierarchy, currentPage, itemsPerPage, isLastPage, href, color } = this.state;

    // Logic for displaying items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = itemsList.slice(indexOfFirstItem, indexOfLastItem);

    // Logic for displaying button hierarchy
    const current = currentPage - 1;
    const next = currentPage;
    const currentHierarchy = hierarchy.slice(current, next);

    // Logic for changing the 'Next' button text and action
    if (currentPage === (itemsList.length / itemsPerPage)) {
      this.setState({
        isLastPage: true,
        href: '/survey',
      });
    } else if (currentPage > (itemsList.length / itemsPerPage)) {
      this.setState({
        currentPage: (itemsList.length / itemsPerPage),
      });
    }

    const renderItems = currentItems.map((item) => <SimpleCard key={item.id} id={item.id} text={item.content} buttonColor={color} hierarchy={currentHierarchy} page={currentPage} />);

    return (
      <div className={`clearfix ${styles.container}`}>
        <Row className={styles.row}>
          {renderItems}
        </Row>
        <Button color="outline-secondary" className="float-right" size="lg" onClick={this.handleClick} href={href}>{isLastPage ? 'Finish' : 'Next'}</Button>

      </div>
    );
  }
}


export default List;
