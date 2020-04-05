import * as types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
// khi localStorage trong rỗng thì data không có sản phẩm nào
// nên mới chạy lần đầu sẽ không có hàng
// sau khi bấm thêm sp vào cart thì sẽ chạy case types.ADD_TO_CART:
// lưu sp vào localStorage
// khi load lại trang thì data lúc này đã có sp
// trả ra default: return [...state]; các sp có trong localStorage
var initialState = data ? data : [];


const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch(action.type){
        case types.ADD_TO_CART:
            // state la ds pro trong cart, pro moi
            index = findProInCart(state, product);
            if(index !== -1)
            {
                state[index].quantity += quantity;
            }
            else
            {
                state.push({// them sp va so luong vao gio hang
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case types.DELETE_PRODUCT_IN_CART:
            index = findProInCart(state, product);
            if(index !== -1)
            {
                state.splice(index, 1)
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];


            case types.UPDATE_PRODUCT_IN_CART:
                index = findProInCart(state, product);
                if(index !== -1)
                {
                    state[index].quantity = quantity;
                }
                localStorage.setItem('CART', JSON.stringify(state));
                return [...state];

        default: return [...state];// trả ra state
    }
}

var findProInCart = (cart, product) =>{
    var index = -1;
    if(cart.length > 0)
    {
        for(var i = 0; i< cart.length; i++)
        {
            if(cart[i].product.id === product.id)
            {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default cart;