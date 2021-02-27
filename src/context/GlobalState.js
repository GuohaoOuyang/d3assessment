import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
    gaugeDatas: [],
    areaDatas: [],
    error: null
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getDatas(){
      try {
        const res = await axios.get('data.json');
        dispatch({
          type: 'GET_DATAS',
          payload: res.data
        })
      } catch (err) {
        dispatch({
          type: 'GET_ERROR',
          payload: err
        });
    }
}

  return (<GlobalContext.Provider value={{
    gaugeDatas: state.gaugeDatas,
    areaDatas: state.areaDatas,
    error: state.error,
    getDatas
  }}>
    {children}
  </GlobalContext.Provider>);
}
