import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../actions-type/actions-type"

const initialState = {
    allCharacters: [],
    myFavorites: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            const updatedFavorites = [...state.myFavorites, action.payload];
            return {
                ...state,
                myFavorites: updatedFavorites, // esta nos mostrara los cambios que hicimos
                allCharacters: updatedFavorites // guardamos esta copia para hacer los cambios
            };

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((character) => character.id != action.payload)
            }

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