export const partReducer = (state, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
      case "MIC_STATE":
          let newU = state.userDetails.filter((c) => c.id != action.payload.id)
        let newUser = [action.payload, ...newU]
        return { ...state, userDetails: newUser };
      default:
        return { ...state };
    }
  };
  
  export default partReducer;