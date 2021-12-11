export const partReducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "MIC_STATE":
      let newUser = state.map((c) =>
        {
            if(c.id === action.payload.id){
                if(c.micState === true){
                    c.micState = false
                }
                else {
                    c.micState = true
                }
            }
        }
      );
      return { newUser };
    default:
      return { ...state };
  }
};

export default partReducer;
