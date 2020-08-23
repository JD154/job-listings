import react, { createContext, useReducer } from 'react';
import Reducer from './AppReducer';
import Data from '../data/data.json';

const initialState = {
  rawList: Array.from(Data),
  filteredList: null,
  activeFilters: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function addActiveFilter(activeFilters) {
    dispatch({
      type: 'ADD_FILTER',
      payload: activeFilters,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction, addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
