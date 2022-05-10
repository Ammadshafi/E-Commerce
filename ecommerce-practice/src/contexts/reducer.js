export default (state, action) => {
  switch (action.type) {
    case "Delete":
      const filter = state.Products.filter(prod => (
         prod.id !== action.payload
      ));
      return { ...state, Products: filter };
    case "Add":
      return { ...state, state: state.Products.unshift(action.payload) };
    default:
      return state;
  }
};
