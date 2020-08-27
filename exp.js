const area = (a) => 'XXX';
const surface = (a) => 'YYY';

//exports.area = area;
//exports.surface = surface;

exports.weight = (a) => 'ZZZ';

//module.exports = { area, surface };

//the exports below requires webpack & babel
/*
export const CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
};

export default {
  primaryColor: '#4a148c',
  accentColor: '#ff6f00',
};

*/

exports.CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
};
