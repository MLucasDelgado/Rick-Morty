import { useState, useEffect } from "react"
import validation from "../../../validation"

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const [errors, setErrors] = useState({})

    useEffect(() => {
        setErrors(validation(userData));
    }, [userData]);

    const [loginError, setLoginError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const success = login(userData); // Llamamos a login y guardamos su resultado

        if (!success) { // Si el login falla
            setUserData({ email: "", password: "" }); // Borramos los campos
            setLoginError("The username or password does not match."); // Mostramos error
        } else {
            setLoginError(""); // Limpiamos el error si el login es exitoso
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={userData.email} onChange={handleChange} />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange} />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

            {loginError && <p style={{ color: "red" }}>{loginError}</p>}
            <button type="submit" disabled={!userData.email || !userData.password || errors.email || errors.password}>Submit</button>
        </form>
    )
}

export default Form