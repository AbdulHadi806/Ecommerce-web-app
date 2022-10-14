// Api data main reducer content is here

const initialStateMain = {
    Cases: [],
};


export default function mainReducer(state = initialStateMain, action) {
  switch (action.type) {
    case "get-Data":
      return {
        ...state,
        Cases: action.payload
      }
    default:
      return state;
  }
};

// counter reducer content is here

const initialCountState = {
    count: 0
}


export function CountReducer(state = initialCountState.count, action) {
    switch (action.type) {
        case "CountAdd":
            return  state + 1;
        default:
          return state;
      }
}
