let myFavorites = []

const postFav = (request, response) => {
    myFavorites.push(request.body)
    response.status(200).json(myFavorites)
}

const deleteFav = (request, response) => {
    const { id } = request.params

    myFavorites = myFavorites.filter((favorites) => favorites.id !== Number(id)
    )

    response.status(200).json(myFavorites)
}

module.exports = {
    postFav, 
    deleteFav
}