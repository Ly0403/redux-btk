import React, { Component } from "react";
import { Table, Button, Badge } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/product-actions";
import * as cartActions from "../../redux/actions/cart-actions";
import {Link}  from "react-router-dom";
import alertify from "alertifyjs";

class ProductList extends Component {
  componentDidMount() {
    this.props.action.getProducts();
  }

  addToCartHandler = (product) => {
    this.props.action.addToCart(product);
    alertify.warning(`The product ${product.productName} was added into the cart!`)
  };

  render() {
    return (
      <div>
        <h3>
          <Badge>Products</Badge>{" "}
          <Badge color="warning">
            {this.props.currentCategory.categoryName}
          </Badge>{" "}
        </h3>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Category Id</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
            {this.props.products.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td><Link to={"/saveProduct/"+v.id}>{v.productName}</Link> </td>
                <td>{v.categoryId}</td>
                <td>{v.quantityPerUnit}</td>
                <td>{v.unitPrice}</td>
                <td>{v.unitsInStock}</td>
                <td>
                  <Button color="primary" onClick={()=> this.addToCartHandler(v)}>Add to Cart</Button>
                </td>
              </tr>
            ))}
          </thead>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.getProductsReducer,
    currentCategory: state.changeCategoryReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addCartItem, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
