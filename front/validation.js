const validation = (inputs) => {
    let error = {};

    // Validación del email
    if (!inputs.email) {
        error.email = 'An email is required.';
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
        error.email = 'Invalid email.';
    } else if (inputs.email.length > 35) {
        error.email = 'The email cannot have more than 35 characters.';
    }

    // Validación de la contraseña
    if (!inputs.password) {
        error.password = 'A password is required.';
    } else if (!/\d/.test(inputs.password)) {
        error.password = 'The password must contain at least one number.';
    } else if (inputs.password.length < 6 || inputs.password.length > 10) {
        error.password = 'The password must be between 6 and 10 characters long.'
    }

    return error;
};

export default validation