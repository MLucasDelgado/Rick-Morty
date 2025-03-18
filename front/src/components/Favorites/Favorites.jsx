import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { filterCards, orderCards } from "../../redux/actions/actions"
import Card from "../Card/Card"

const Favorites = ({onClose}) => {
    const myFavorites = useSelector((state) => state.myFavorites)
    const likedCharacter = myFavorites.map((favorite) => {
        return (
            <Card key={favorite.id}
                id={favorite.id}
                name={favorite.name}
                status={favorite.status}
                species={favorite.species}
                gender={favorite.gender}
                origin={favorite.origin.name}
                image={favorite.image}
                onClose={onClose}
            />
        )
    })

    const dispatch = useDispatch()

    // creamos este estado para que cuando utilicemos el metodo sort en el reducer el componente se re-renderice y nos muestre el filtrado
    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <select name="orden" onChange={handleOrder}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>

            <select name="generos" onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            {likedCharacter}
        </div>
    )
}

export default Favorites