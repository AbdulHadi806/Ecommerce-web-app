const initialState = {
  ShopItems: [],
  count: 0,
  CartItems: [],
  ProductDetails: [],
  UserLogin: [],
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "GETDATA":
      return {
        ...state,
        ShopItems: action.payload,
      };
    case "CARTITEMS":
      return {
        ...state,
        CartItems: [
          ...state.CartItems,
          ...state.ShopItems.filter((obj) => obj.id == action.payload)
        ]
      };
    case "COUNTADD":
        return {
          ...state, 
          count: state.count + 1
        }
      case "COUNTREMOVE":
        if(state.count >= 0){
          return {
            ...state, 
            count: state.count - 1
          }
        }
    case "REMOVEITEM":
      return ({
        ...state,
        CartItems: state.CartItems.filter((obj) => obj.id !== action.payload),
      })
    case "PRODUCTDETAILS":
      return {
        ...state,
        ProductDetails: 
          state.ShopItems.filter((obj) => obj.id == action.payload),
      };
    case "USERLOGIN":
      return {
        ...state,
        UserLogin: [...state.UserLogin, action.payload],
      };
    default:
      return state;
  }
}
