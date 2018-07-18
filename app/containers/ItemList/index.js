/**
*
* ItemList Container
*
*/

// Libraries
import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

// Components
import { Button, Panel } from 'react-bootstrap';
import Item from 'containers/Item';

// Data objects
// import items from 'components/Items';
import items from 'components/ItemsDemo';
import buttonActionHierarchy from 'components/ButtonActionHierarchy';
import buttonVisualHierarchy from 'components/ButtonVisualHierarchy';

// Styles
import styles from './ItemList.css';

class ItemList extends React.Component {
  constructor() {
    // We randomize and choose one color for each session
    const allColors = ['red', 'green', 'blue', 'orange', 'black'];
    const RandomizedColors = _.shuffle(allColors);
    const currentColor = RandomizedColors.slice(0, 1);

    // We randomize the items data for each session as well
    const RandomizedItems = _.shuffle(items);
    const RandomizedActionHierarchy = _.shuffle(buttonActionHierarchy);
    const RandomizedVisualHierarchy = _.shuffle(buttonVisualHierarchy);

    super();
    this.state = {
      color: currentColor[0],
      itemsList: RandomizedItems,
      items: [],
      item: {
        actionHierarchy: RandomizedActionHierarchy,
        visualHierarchy: RandomizedVisualHierarchy,
      },
      pageControl: {
        currentPage: 1,
        itemsPerPage: 1,
        isLastPage: false,
        finishedItems: 0,
        finishedItemsPerPage: 0,
        buttonIsShown: false,
        itemsAreShown: true,
      },
    };
    this.changePage = this.changePage.bind(this);
    this.handleFinishWithItem = this.handleFinishWithItem.bind(this);
    this.showButton = this.showButton.bind(this);
  }

  changePage() {
    this.setState((prevState) => ({
      ...prevState.pageControl,
      buttonIsShown: false,
      finishedItemsPerPage: 0,
      currentPage: this.state.currentPage + 1,
    }));
  }

  handleFinishWithItem(finishedItem) {
    const item = {
      id: finishedItem.id,
      text: finishedItem.text,
      category: finishedItem.category,
      visualTypeValue: finishedItem.visualTypeValue,
      actionTypeValue: finishedItem.actionTypeValue,
      scaleValue: finishedItem.scaleValue,
    };
    this.setState((prevState) => ({
      ...prevState.pageControl,
      finishedItems: this.state.finishedItems + 1,
      finishedItemsPerPage: this.state.finishedItemsPerPage + 1,
      ...prevState.items,
      items: this.state.items.concat([item]),
    }));
    console.log(item);
  }

  showButton() {
    this.setState((prevState) => ({
      ...prevState.pageControl,
      buttonIsShown: true,
    }));
  }


  render() {
    const { itemsList, color } = this.state;
    const { actionHierarchy, visualHierarchy } = this.state.item;
    const { currentPage, itemsPerPage, isLastPage, finishedItemsPerPage, buttonIsShown } = this.state.pageControl;
    const handleChangeStep = this.props.handleChangeStep;

    // Logic for displaying items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = itemsList.slice(indexOfFirstItem, indexOfLastItem);

    // Logic for displaying button action and visual hierarchy
    const current = currentPage - 1;
    const next = currentPage;
    const currentActionHierarchy = actionHierarchy.slice(current, next);
    const currentVisualHierarchy = visualHierarchy.slice(current, next);

    // logic for displaying pages
    const allItems = itemsList.length;
    const allPages = (allItems / itemsPerPage);

    if (currentPage === allPages) {
      this.setState({
        isLastPage: true,
      });
    } else if (currentPage > allPages) {
      this.setState({
        itemsAreShown: false,
      });
    }

    // Logic for changing the items on page
    const remainingItemsPerPage = itemsPerPage - finishedItemsPerPage;
    if (remainingItemsPerPage === 0) {
      this.showButton();
    }

    const renderItems = currentItems.map((item) => <Item handleFinishWithItem={this.handleFinishWithItem} key={item.id} id={item.id} text={item.text} category={item.category} buttonColor={color} actionHierarchy={currentActionHierarchy} visualHierarchy={currentVisualHierarchy} page={currentPage} />);

    return (
      <Panel className={styles.panel}>
        <Panel.Body className={styles.panelBody}>
          {renderItems}
        </Panel.Body>
        <Panel.Body>
          <div className="clearfix">
            <Button className={`btn-secondary pull-right ${styles.button} ${!buttonIsShown ? 'invisible' : ''}`} onClick={isLastPage ? handleChangeStep : this.changePage} href="">Next</Button>
          </div>
        </Panel.Body>
      </Panel>
    );
  }
}

ItemList.propTypes = {
  handleChangeStep: PropTypes.func,
};

export default ItemList;
