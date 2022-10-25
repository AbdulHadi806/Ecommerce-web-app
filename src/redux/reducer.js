import {GETDATA, COUNTADD, CARTITEMS, COUNTREMOVE, REMOVEITEM, PRODUCTDETAILS, USERLOGIN} from "../redux/type.js"

const initialState = {
  ShopItems: [],
  CartItems: [],
  ProductDetails: [],
  UserLogin: [],
};

export default function Reducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case GETDATA:
      return {
        ...state,
        ShopItems: action.payload,
      };
    case CARTITEMS:
      console.log({...state,CartItems: [...state.CartItems, {...action.payload, count: (action.payload.count || 0) + 1}]})
      return {
        ...state,
        CartItems: [...state.CartItems, {...action.payload, count: (action.payload.count || 0) + 1}]
      }
      
    case REMOVEITEM:
      return ({
        ...state,
        CartItems: state.CartItems.filter((obj) => obj.id !== action.payload),
      })
    
    case PRODUCTDETAILS:
      return {
        ...state,
        ProductDetails: 
          state.ShopItems.filter((obj) => obj.id == action.payload),
      };
    case USERLOGIN:
      return {
        ...state,
        UserLogin: [...state.UserLogin, action.payload],
      };
    default:
      return state;
  }
}
