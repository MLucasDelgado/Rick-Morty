const axios = require("axios")

const getCharById = (response, id) => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`)
    .then(({ data }) => {
        const character = {
            id: id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin.name,
            image: data.image,
            status: data.status
        }
        
        response.writeHead(200, {"Content-type": "application/json"})
        response.end(JSON.stringify(character))
    })

    .catch((error) => {
        response.writeHead(500, {"Content-type": "text/plain"})
        response.end(error.message)
    })
}

module.exports = getCharById
