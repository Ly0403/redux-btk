import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cart-actions";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";

class Navi extends Component {
  state = {
    isOpen: true,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  removeCartHandler = (product) => {
    this.props.removeCart(product);
    alertify.error(
      `The product ${product.productName} was removed from the cart!`
    );
  };
  render() {
    return (
      <div>
        <Navbar>
          <NavbarBrand href="/">
            <h3>
              <Badge color="danger">LYOFFICIAL</Badge>
            </h3>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/saveProduct">Add Product</Link>
              </NavItem>
              <NavItem>
                <Link to="/cart">Go to Cart</Link>
              </NavItem>
              <UncontrolledDropdown
                nav
                inNavbar
                hidden={this.props.items.length === 0}
              >
                <DropdownToggle nav caret>
                  Cart - <Badge color="danger">{this.props.items.length}</Badge>
                </DropdownToggle>
                <DropdownMenu end>
                  {this.props.items.map((v) => (
                    <DropdownItem key={v.product.id}>
                      <Badge
                        color="danger"
                        onClick={() => this.removeCartHandler(v.product)}
                      >
                        X
                      </Badge>
                      {v.product.productName}-<Badge>{v.quantity} </Badge>{" "}
                    </DropdownItem>
                  ))}
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="cart">Go to Cart</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
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
    removeCart: bindActionCreators(cartActions.removeCartItem, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navi);
