// src/actions/dictionaryActions.js

import axios from 'axios';

export const fetchWord = (word) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_WORD_REQUEST' });
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      dispatch({ type: 'FETCH_WORD_SUCCESS', payload: response.data });
      dispatch(addToHistory(word));
    } catch (error) {
      dispatch({ type: 'FETCH_WORD_FAILURE' });
    }
  };
};

const addToHistory = (word) => {
  return { type: 'ADD_TO_HISTORY', payload: word };
};
