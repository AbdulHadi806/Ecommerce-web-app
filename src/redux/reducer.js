import { GETDATA, ADDCARTITEMS,  REMOVEITEM, PRODUCTDETAILS, ADDUSERSIGNIN,userLogin } from "../redux/type.js"
import { auth } from "../firebase";

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
      
      // remove item code here
      /*return {
        ...state,
        CartItems: state.CartItems.map(item => {
          if(item.count > 1){
            return {...item, count:item.count - 1}
          }
          else {
            return {
              ...state, 
              CartItems: state.CartItems.filter((obj) => obj.id !== action.payload),
            }
          }
        })
      }*/


    case REMOVEITEM:
  return ({   // if count is greate than 1 remove count else remove item
    ...state, 
    CartItems: state.CartItems.filter((obj) => obj.id !== action.payload),
  })          
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
