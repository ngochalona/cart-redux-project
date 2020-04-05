import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as Message from './../constants/Message';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import { actRemoveProInCart, actChangeMessage, actUpdateProInCart } from '../actions';

class CartContainer extends Component {
    render() {

      var { cart } = this.props;
      
      console.log(cart);
        return (  
            <Cart>
                { this.showCartItem(cart) }
                { this.showTotalAmount(cart) }
            </Cart>
        );
      }
      // cart nay tu store
      showCartItem = (cart) =>{
      var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr> ;
        if(cart.length > 0)
        {
          result = cart.map((item, index) => {
              return (
                  <CartItem 
                      key={ index }
                      item={item}
                      index={index}
                      deleteProInCart = {this.props.onDeleteProInCart}
                      changeMessage={this.props.onChangeMessage}
                      updateProInCart={ this.props.onUpdateProInCart}
                      //cha nhan duoc se tra cho dispatch thuc hien
                      />
              );
          });
        }
        return result;
      }

      showTotalAmount = (cart) =>{
        var result = null;
        if(cart.length > 0)
        {
          result = <CartResult cart={cart}/>
        }
        return result;
      }
}

CartContainer.propTypes = {
    cart : PropTypes.arrayOf(
      PropTypes.shape({
        product : PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired,
        }).isRequired,
        quantity : PropTypes.number.isRequired
      })

    ).isRequired,
    onDeleteProInCart : PropTypes.func.isRequired,
    onUpdateProInCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired,
}

const mapStateToProps = state =>{
    return{
      cart : state.cart// lay tu index.js reducers
    }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    onDeleteProInCart : (product)=>{
      dispatch(actRemoveProInCart(product));
    },
    onChangeMessage : (message) =>{
      dispatch(actChangeMessage(message));
    },
    onUpdateProInCart : (product, quantity) =>{
      dispatch(actUpdateProInCart(product, quantity));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);