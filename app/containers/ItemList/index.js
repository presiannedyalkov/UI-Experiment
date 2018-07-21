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
// import items from 'data/Items';
import items from 'data/ItemsDemo';
import buttonActionHierarchy from 'data/ButtonActionHierarchy';
import buttonVisualHierarchy from 'data/ButtonVisualHierarchy';

// Styles
import styles from './ItemList.css';

class ItemList extends React.PureComponent {
  constructor() {
    // We randomize and choose one color for each session
    const allColors = ['red', 'green', 'blue', 'orange', 'black'];
    const RandomizedColors = _.shuffle(allColors);
    const currentColor = RandomizedColors.slice(0, 1);

    // We randomize the items data for each session as well
    const RandomizedItems = _.shuffle(items);
    const RandomizedActionHierarchy = _.shuffle(buttonActionHierarchy);
    const RandomizedVisualHierarchy = _.shuffle(buttonVisualHierarchy);

    // Create the state object that holds the values throughout the experiment
    super();
    this.state = {
      color: currentColor[0],
      itemsList: RandomizedItems,
      currentItems: [],
      finishedItemsData: [],
      actionHierarchy: RandomizedActionHierarchy,
      visualHierarchy: RandomizedVisualHierarchy,
      currentActionHierarchy: '',
      currentVisualHierarchy: '',
      currentPage: 1,
      itemsPerPage: 1,
      isLastPage: false,
      buttonIsShown: false,
      itemsAreShown: true,
      finishedItems: 0,
      finishedItemsPerPage: 0,
    };

    // create action controllers bound to this object
    this.changePage = this.changePage.bind(this);
    this.handleFinishWithItem = this.handleFinishWithItem.bind(this);
    this.getCurrentItems = this.getCurrentItems.bind(this);
    this.getHierarchies = this.getHierarchies.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.showButton = this.showButton.bind(this);
  }

  /**
   * Lifecycles methods
   */
  // This should store the initial data after neceserry mutation is done
  componentWillMount() {
    const hierarchies = this.getHierarchies(this.state.currentPage, this.state.actionHierarchy, this.state.visualHierarchy);
    this.setState({
      currentItems: this.getCurrentItems(this.state.currentPage, this.state.itemsPerPage, this.state.itemsList),
      currentActionHierarchy: hierarchies.currentActionHierarchy[0],
      currentVisualHierarchy: hierarchies.currentVisualHierarchy[0],
    });
  }

  // This should update the page state
  componentDidUpdate(prevProps, prevState) {
    if (prevState.finishedItemsPerPage !== this.state.finishedItemsPerPage) {
      const { currentPage, itemsPerPage, itemsList, finishedItemsPerPage } = this.state;
      this.updatePage(itemsList, itemsPerPage, currentPage);
      this.showButton(itemsPerPage, finishedItemsPerPage);
    }
    if (prevState.currentPage !== this.state.currentPage) {
      const hierarchies = this.getHierarchies(this.state.currentPage, this.state.actionHierarchy, this.state.visualHierarchy);
      this.setState({ // eslint-disable-line react/no-did-update-set-state
        currentItems: this.getCurrentItems(this.state.currentPage, this.state.itemsPerPage, this.state.itemsList),
        currentActionHierarchy: hierarchies.currentActionHierarchy[0],
        currentVisualHierarchy: hierarchies.currentVisualHierarchy[0],
      });
    }
  }

  /**
   * UI Methods
   */

  // Logic for displaying items
  getCurrentItems(currentPage, itemsPerPage, itemsList) {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = itemsList.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems;
  }

  // Logic for displaying button action and visual hierarchy
  getHierarchies(currentPage, actionHierarchy, visualHierarchy) {
    const current = currentPage - 1;
    const next = currentPage;
    const currentActionHierarchy = actionHierarchy.slice(current, next);
    const currentVisualHierarchy = visualHierarchy.slice(current, next);
    return {
      currentActionHierarchy,
      currentVisualHierarchy,
    };
  }

  // logic for displaying pages
  updatePage(itemsList, itemsPerPage, currentPage) {
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
  }

  // Logic for changing the items on page
  showButton(itemsPerPage, finishedItemsPerPage) {
    const remainingItemsPerPage = itemsPerPage - finishedItemsPerPage;
    if (remainingItemsPerPage === 0) {
      this.setState({
        buttonIsShown: true,
      });
    }
  }

  // This changes the items on the page and controls the button
  changePage() {
    this.setState({
      buttonIsShown: false,
      finishedItemsPerPage: 0,
      currentPage: this.state.currentPage + 1,
    });
  }

  // this fetches the data after the user has finished with an item
  handleFinishWithItem(finishedItem) {
    const lastFinishedItem = {
      id: finishedItem.id,
      text: finishedItem.text,
      category: finishedItem.category,
      visualTypeValue: finishedItem.visualTypeValue,
      actionTypeValue: finishedItem.actionTypeValue,
      scaleValue: finishedItem.scaleValue,
    };
    this.setState({
      finishedItems: this.state.finishedItems + 1,
      finishedItemsPerPage: this.state.finishedItemsPerPage + 1,
      finishedItemsData: this.state.finishedItemsData.concat([lastFinishedItem]),
    });
  }

  render() {
    const { currentItems, currentActionHierarchy, currentVisualHierarchy, currentPage, isLastPage, buttonIsShown, color } = this.state;
    const handleChangeStep = this.props.handleChangeStep;

    const renderItems = currentItems.map((item) => <Item handleFinishWithItem={this.handleFinishWithItem} key={item.id} id={item.id} text={item.text} category={item.category} buttonColor={color} currentActionHierarchy={currentActionHierarchy} currentVisualHierarchy={currentVisualHierarchy} page={currentPage} />);

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
