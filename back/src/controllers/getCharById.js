const axios = require("axios")

const getCharById = (request, response) => {
    const { id } = request.params
    const url = `https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`
    
    axios.get(url)
    .then(({ data }) => {
        if (data.name) {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin.name,
                image: data.image,
                status: data.status
            }
            response.json(character)
        } else {
            response.status(404).send("Not found")
        }
    })
    .catch((error) => {
        response.status(500).send(error.message);
    });
}

module.exports = getCharById
