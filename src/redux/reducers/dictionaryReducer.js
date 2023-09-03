// src/reducers/dictionaryReducer.js

const initialState = {
    word: '',
    definitions: [],
    loading: false,
  };
  
  const dictionaryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_WORD_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_WORD_SUCCESS':
        return {
          ...state,
          word: action.payload.word,
          definitions: action.payload.definitions,
          loading: false,
        };
      case 'FETCH_WORD_FAILURE':
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default dictionaryReducer;
  
