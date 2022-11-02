import { GETDATA, ADDCARTITEMS,  REMOVEITEM, PRODUCTDETAILS, ADDUSERSIGNIN,userLogin, REMOVEITEMCOUNT } from "../redux/type.js"

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
      return {
        ...state, CartItems: state.CartItems.filter((item) => item.id !== action.payload.id)
      }
    case REMOVEITEMCOUNT:
      const removeItem = state.CartItems.find((obj) => obj.id === action.payload.id)
      if(removeItem){
        return {
          ...state,
          CartItems: state.CartItems.map(item => {
          if(item.id === action.payload.id && item.count > 1){
              return {...item, count: item.count - 1}
          } else {
            return  item
          }
          })
      }
     }
  // case ADDUSERSIGNIN:      
  //   return {                                                      // [0 = emai, 1 = password]
  //     ...state, currentUser: auth.createUserWithEmailAndPassword(action.payload[0], action.payload[1])
  //   }
  // case userLogin:
  //   return {
  //     ...state, currentUser: auth.signInWithEmailAndPassword(action.payload[0], action.payload[1])
  //   }
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
