import { GETDATA, ADDCARTITEMS,  REMOVEITEM, PRODUCTDETAILS, REMOVEITEMCOUNT } from "../redux/type.js"

const initialState = {
  ShopItems: [],
  CartItems: [],
  ProductDetails: [],
  currentUser: null,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case GETDATA:
      return {   
        ...state,
        ShopItems: action.payload,
      };      
    case ADDCARTITEMS:
      const isItem = state.CartItems.find(ci => ci.id === action.payload.id)
      if(isItem){
        return {
          ...state,
          CartItems: state.CartItems.map(item => {
          if(item.id === action.payload.id && item.count < 5 ){
            return {...item, count: item.count + 1}
          } else {
            return item
          }
          })
        }
      }
      else { 
        return {
          ...state,
          CartItems: [...state.CartItems, {...action.payload, count: 1}]
        }
      }
    case REMOVEITEM:
      return {
        ...state, CartItems: state.CartItems.filter((item) => item.id !== action.payload.id)
      }
    case REMOVEITEMCOUNT:
        return {
          ...state,
          CartItems: state.CartItems.map(item => {
          if(item.id === action.payload.id && item.count > 1){
              return {...item, count: item.count - 1}
          } else {
            return item
           }
          })
      }
    case PRODUCTDETAILS:
  return {
    ...state,
    ProductDetails:
      state.ShopItems.filter((obj) => obj.id == action.payload),
  };
    default:
  return state;
 }
}
