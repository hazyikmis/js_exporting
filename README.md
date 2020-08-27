## EXPORTING IN JS / NODE

# method 1

`
const area = (a) => 'XXX';
const surface = (a) => 'YYY';

exports.area = area;
exports.surface = surface;
`

# method 2

`exports.weight = (a) => 'ZZZ';`

# method 3

`module.exports = { area, surface };`

# method 4

`exports.CartActionTypes = {TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN', ADD_ITEM: 'ADD_ITEM', `};`

//the export below requires webpack & babel

`export const CartActionTypes = { TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN', ADD_ITEM: 'ADD_ITEM', };`
