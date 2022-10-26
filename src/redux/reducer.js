import { GETDATA, COUNTADD, ADDCARTITEMS, COUNTREMOVE, REMOVEITEM, PRODUCTDETAILS, USERLOGIN } from "../redux/type.js"

const initialState = {
  ShopItems: [],
  CartItems: [],
  ProductDetails: [],
  UserLogin: [],
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case GETDATA:
      return {   
        ...state,
        ShopItems: action.payload,
      };      
    case ADDCARTITEMS:
      // adding items to cart and removing duplicates while counting them
      const isItem = state.CartItems.find(ci => ci.id === action.payload.id)
      if(isItem){
        return {
          ...state,
          CartItems: state.CartItems.map(item => {
          if(item.id === action.payload.id){
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
