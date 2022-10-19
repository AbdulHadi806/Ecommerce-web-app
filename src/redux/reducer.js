const initialState = {
  Data: [],
  count: 0,
  FilterList: []
};


export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "get-Data":
      return {
        ...state,
        Data: action.payload
      }
    case "FilterList":
      return ({
        ...state, FilterList: [...state.FilterList, ...state.Data.filter(obj => obj.id == action.payload)]
      })
    case "REMOVEITEM":
      return ({ ...state, FilterList: state.FilterList.filter((obj) => obj.id !== action.payload)})
    case "CountAdd":
      return {
        ...state,
        count: state.count + 1
      }
    case "COUNTREMOVE":
      if(state.count > 0){
        return {
          ...state,
          count: state.count - 1
        }
      }
    default:
      return state;
  }
};