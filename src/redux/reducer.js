const initialState = {
  Data: [],
  count: 0,
  FilterList: [],
  MoreDescriptionList: [],
  UserLogin: [],
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "GETDATA":
      return {
        ...state,
        Data: action.payload,
      };
    case "FILTERLIST":
      return {
        ...state,
        FilterList: [
          ...state.FilterList,
          ...state.Data.filter((obj) => obj.id == action.payload),
        ],
      };
    case "REMOVEITEM":
      return ({
        ...state,
          FilterList: state.FilterList.filter((obj) => obj.id !== action.payload),
      })
    case "COUNTADD":
      return {
        ...state,
        count: state.count + 1,
      };
    case "COUNTREMOVE":
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - 1,
        };
      }
    case "SHOWDESCRIPTION":
      return {
        ...state,
        MoreDescriptionList: [
          ...state.Data.filter((obj) => obj.id == action.payload),
        ],
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
