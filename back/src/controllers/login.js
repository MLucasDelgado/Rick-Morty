const users = require("../utils/users")


const login = (request, response) => {
    const { email, password } = request.query

    const userFound = users.find(
        (user) => user.email === email && user.password === password
    );

    if (userFound) {
        response.status(200).json({ access: true });
    } else {
        response.status(400).json({ access: false });
    }
}

module.exports = login