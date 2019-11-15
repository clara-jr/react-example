import { createStore } from 'redux';

const initialState = {
  all_characters: [],
  characters: []
}

// Actions

export const actions = {
  setChars: (characters) => {
    return {
      type: 'SET_CHARS',
      payload: {
        characters: characters,
        all_characters: characters,
        character: []
      }
    }
  },
  findChars(target_value) {
    return {
      type: 'FIND_CHARS',
      payload: {
        target_value: target_value
      }
    }
  },
  getChar(character_id) {
    return {
      type: 'GET_CHAR',
      payload: {
        character_id: character_id
      }
    }
  }
}

// Reducers

function reducer(state = {}, action) {
  switch (action.type) {
    case 'SET_CHARS': {
      return action.payload;
    }
    case 'FIND_CHARS': {
      let characters = state.all_characters.filter((v, i) => v.name.toLowerCase().includes(action.payload.target_value));
      let newstate = {
        characters: characters,
        all_characters: state.all_characters,
        character: []
      }
      return newstate;
    }
    case 'GET_CHAR': {
      let character = state.all_characters.filter((v, i) => v.id == action.payload.character_id)[0];
      let newstate = {
        characters: state.characters,
        all_characters: state.all_characters,
        character: character
      }
      return newstate;
    }
    default:
      return state;
  }
}

// Store

export const store = createStore(reducer, initialState);