const initialState : Number = 0;

const testReducer = ( state : Number = initialState, action : any ) => {
  switch (action.type) {
    case "TEST":
      return state + action.payload;
    default: return state;
  }
}

export { testReducer };