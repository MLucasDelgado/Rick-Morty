import { useSelector } from "react-redux"
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
    return (
        <div>
            {likedCharacter}
        </div>
    )
}

export default Favorites