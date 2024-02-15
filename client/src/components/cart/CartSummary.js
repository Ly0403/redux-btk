import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cart-actions";
import alertify from "alertifyjs";

class CartSummary extends Component {
  removeFromCart = (product) => {
    this.props.removeFromCart(product);
    alertify.error(`The product ${product.productName} was removed from cart!`);
  };
  renderNoItem = () => {
    return <h2>No product in the cart!</h2>;
  };
  renderWithItem = () => {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantitye</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map((v) => (
            <tr key={v.product.id}>
              <td>{v.product.id}</td>
              <td>{v.product.productName}</td>
              <td>{v.product.unitPrice}</td>
              <td>{v.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.removeFromCart(v.product)}
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  render() {
    return (
      <div>
        {this.props.items.length === 0
          ? this.renderNoItem()
          : this.renderWithItem()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cartItemReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: bindActionCreators(cartActions.removeCartItem, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
