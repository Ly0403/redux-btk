import React, { Component } from "react";
import { ListGroupItem, ListGroup, Badge } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/category-actions";
import * as actionsProduct from "../../redux/actions/product-actions";

class CategoryList extends Component {
  componentDidMount() {
    this.props.action.getCategories();
  }

  onClickHandler = (category) => {
    this.props.action.setCurrentCategory(category);
    this.props.action.getProducts(category);
  };

  catColors = ["success", "info", "primary", "secondary", "warning", "danger"];

  render() {
    return (
      <div>
        <h3> <Badge color="info">Categories</Badge> </h3>
        <ListGroup>
          {this.props.categories.map((v) => (
            <ListGroupItem
              color={this.catColors[(v.id - 1) % this.catColors.length]}
              key={v.id}
              onClick={() => this.onClickHandler(v)}
              active={this.props.currentCategory === v}
            >
              {v.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.getCategoriesReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: {
      getCategories: bindActionCreators(actions.getCategories, dispatch),
      getProducts: bindActionCreators(actionsProduct.getProducts, dispatch),
      setCurrentCategory: bindActionCreators(
        actions.setCurrentCategory,
        dispatch
      ),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
