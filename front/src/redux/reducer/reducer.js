import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../actions-type/actions-type"

const initialState = {
    allCharacters: [],
    myFavorites: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload, allCharacters: action.payload
            };

        case REMOVE_FAV:
            return { ...state, 
                myFavorites: action.payload 
            };

        case FILTER:
            let charactersFiltered;

            if (action.payload === 'All') {
                charactersFiltered = state.allCharacters; // Mostrar todos los personajes
            } else {
                charactersFiltered = state.allCharacters.filter(
                    (character) => character.gender === action.payload
                );
            }

            return {
                ...state,
                myFavorites: charactersFiltered
            }

        case ORDER:
            let orderCharacters = [...state.allCharacters]
            if (action.payload === 'Ascendente') {
                orderCharacters.sort((charater1, character2) => charater1.id - character2.id) // accedo a la propiedad id del character
            }
            if (action.payload === 'Descendente') {
                orderCharacters.sort((charater1, charater2) => charater2.id - charater1.id)
            }
            return {
                ...state,
                myFavorites: orderCharacters
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer