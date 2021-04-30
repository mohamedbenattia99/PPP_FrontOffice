import { combineReducers } from 'redux';
import product from './product/reducer';
import setting from './setting/reducer';
import cart from './cart/reducer';
import compare from './compare/reducer';
import auth from './auth/reducer';
import wishlist from './wishlist/reducer';
import collection from './collection/reducer';
import media from './media/reducer';


export default combineReducers({
    auth,
    product,
    setting,
    cart,
    compare,
    wishlist,
    collection,
    media,
});
