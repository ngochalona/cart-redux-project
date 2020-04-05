import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from './../actions/index';
import message from '../reducers/message';

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;//lay tu mapTo
        return (  
            <Products>
                {this.showProducts(products)}
            </Products>
        );
      }

      showProducts(products){
        var result = null;
        var { onAddToCart, onChangMessage } = this.props;// lay duoi dispatch
        if(products.length > 0)
        {
          result = products.map((product, index) => {
              return <Product key={index} product={product}
                              AddToCart = {onAddToCart}
                              changeMessage = {onChangMessage}
              />
          });
        }
        return result;
    };
}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
      PropTypes.shape({
          id : PropTypes.number.isRequired,
          name : PropTypes.string.isRequired,
          image : PropTypes.string.isRequired,
          description : PropTypes.string.isRequired,
          price : PropTypes.number.isRequired,
          inventory : PropTypes.number.isRequired,
          rating : PropTypes.number.isRequired,
      })
    ).isRequired, // products bắt buộc phải có để hiện thị sp
    onChangMessage : PropTypes.func.isRequired,
    onAddToCart : PropTypes.func.isRequired,

}

const mapStateToProps = state => {
    return{
      products: state.products   // lay tu index reducer
    }
}

const mapDispatchToProps = (dispatch, product) => {
  return {
    onAddToCart: (product) =>{
        dispatch(actAddToCart(product, 1));// di vao action-> cart reducer
    },
    onChangMessage: (message) =>{
      dispatch(actChangeMessage(message));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);