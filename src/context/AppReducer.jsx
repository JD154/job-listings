export default (state, action) => {
  switch (action.type) {
    case 'ADD_FILTER':
      return {
        ...state,
        activeFilters: state
          .activeFilters.push(action.payload),
      };
    default:
      return state;
  }
};
