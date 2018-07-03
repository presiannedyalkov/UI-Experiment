/**
*
* ItemList Container
*
*/

// Libraries
import React from 'react';
import _ from 'lodash';

// Components
import { Button, Grid, Row } from 'react-bootstrap';
import Item from 'containers/Item';
import Statistics from 'components/Statistics';

// Data objects
// import items from 'components/Items';
import items from 'components/ItemsDemo';
import buttonActionHierarchy from 'components/ButtonActionHierarchy';
import buttonVisualHierarchy from 'components/ButtonVisualHierarchy';

// Styles
import styles from './ItemList.css';

class ItemList extends React.PureComponent {
  constructor() {
    const allColors = ['red', 'green', 'blue', 'orange', 'black'];
    const RandomizedColors = _.shuffle(allColors);
    const currentColor = RandomizedColors.slice(0, 1);

    const RandomizedItems = _.shuffle(items);
    const RandomizedActionHierarchy = _.shuffle(buttonActionHierarchy);
    const RandomizedVisualHierarchy = _.shuffle(buttonVisualHierarchy);

    super();
    this.state = {
      itemsList: RandomizedItems,
      actionHierarchy: RandomizedActionHierarchy,
      visualHierarchy: RandomizedVisualHierarchy,
      colors: allColors,
      color: currentColor[0],
      currentPage: 1,
      itemsPerPage: 2,
      href: '',
      isLastPage: false,
      finishedItems: 0,
      finishedItemsPerPage: 0,
      buttonIsShown: false,
      itemsAreShown: true,
    };
    this.changePage = this.changePage.bind(this);
    this.handleFinishWithItem = this.handleFinishWithItem.bind(this);
    this.showButton = this.showButton.bind(this);
  }

  changePage() {
    this.setState({
      buttonIsShown: false,
      finishedItemsPerPage: 0,
      currentPage: this.state.currentPage + 1,
    });
  }

  handleFinishWithItem() {
    this.setState({
      finishedItems: this.state.finishedItems + 1,
      finishedItemsPerPage: this.state.finishedItemsPerPage + 1,
    });
  }

  showButton() {
    this.setState({
      buttonIsShown: true,
    });
  }


  render() {
    const { itemsList, actionHierarchy, visualHierarchy, currentPage, itemsPerPage, isLastPage, href, colors, color, finishedItems, finishedItemsPerPage, buttonIsShown, itemsAreShown } = this.state;

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
        href: '/survey',
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

    const renderItems = currentItems.map((item) => <Item handleFinishWithItem={this.handleFinishWithItem} key={item.id} id={item.id} text={item.content} buttonColor={color} actionHierarchy={currentActionHierarchy} visualHierarchy={currentVisualHierarchy} page={currentPage} />);

    return (
      <Grid className={`${styles.container} ${!itemsAreShown ? 'hidden' : null}`}>
        <Statistics currentPage={currentPage} allPages={allPages} finishedItemsPerPage={finishedItemsPerPage} itemsPerPage={itemsPerPage} finishedItems={finishedItems} allItems={allItems} color={color} colors={colors} />
        <Row className={styles.row}>
          {renderItems}
        </Row>
        <div className="clearfix">
          <Button className={`btn-secondary ${styles.button} ${!buttonIsShown ? 'invisible' : null}`} onClick={this.changePage} href={href}>{isLastPage ? 'Finish' : 'Next'}</Button>
        </div>

      </Grid>
    );
  }
}

export default ItemList;
