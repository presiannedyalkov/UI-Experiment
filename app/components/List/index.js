/**
*
* List
*
*/

import React from 'react';
import { Button, Row } from 'reactstrap';
import SimpleCard from 'components/Card';
import items from 'components/Items';
import buttonHierarchy from 'components/ButtonHierarchy';
import _ from 'lodash';

class List extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    const RandomizedItems = _.shuffle(items);
    const RandomizedButtonHierarchy = _.shuffle(buttonHierarchy);
    super();
    this.state = {
      itemsList: RandomizedItems,
      hierarchy: RandomizedButtonHierarchy,
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
    const { itemsList, hierarchy, currentPage, itemsPerPage, isLastPage } = this.state;

    // Logic for displaying items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = itemsList.slice(indexOfFirstItem, indexOfLastItem);

    // Logic for displaying button hierarchy
    const current = currentPage - 1;
    const next = currentPage;
    const currentHierarchy = hierarchy.slice(current, next);

    if (currentPage === (itemsList.length / itemsPerPage)) {
      this.setState({
        isLastPage: true,
        href: '/survey',
      });
    }

    const renderItems = currentItems.map((item) => <SimpleCard key={item.id} id={item.id} text={item.content} hierarchy={currentHierarchy} page={currentPage} />);

    return (
      <div>
        <Row>
          {renderItems}
        </Row>
        <Button onClick={this.handleClick} next href={this.state.href}>{isLastPage ? 'Finish' : 'Next'}</Button>

      </div>
    );
  }
}


export default List;
