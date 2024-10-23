// regex para validaciones
const regexName = /^[a-zA-Z]+(?: [a-zA-Z]+){0,20}$/
const regexEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
const regexPassword = /^[\S]{5,}$/

// funcion para validar datos de login

export const ValidacionDataLogin = (email, password, setEmail, setError, setPassword) => {
    // regex para validacion de email y password

    if (email === "") {
        setError("El campo de Email está vacio")
        return false
    }
    if (!regexEmail.test(email)) {
        setError("El Email no cumple con el formato")
        setEmail("")
        return false
    }
    if (password === "") {
        setError("El campo de contraseña está vacio")
        return false
    }
    if (!regexPassword.test(password)) {
        setPassword("")
        setError("La contraseña no cumple con el formato, debe tener al menos 5 caracteres")
        return false
    }
    setError("")
    return true
}

// funcion para vlidar datos de registro

export const ValidacionDataRegister = ({ name, email, password, confirmPas }, setData, setError) => {
    if (name === "") {
        setError("El campo de name está vacio")
        return false
    }
    if (!regexName.test(name)) {
        setError("El Nombre no cumple con el formato")
        return false
    }
    if (email === "") {
        setError("El campo de Email está vacio")
        return false
    }
    if (!regexEmail.test(email)) {
        setError("El Email no cumple con el formato")
        return false
    }
    if (password === "") {
        setError("El campo de contraseña está vacio")
        return
    }
    if (!regexPassword.test(password)) {
        setError("La contraseña no cumple con el formato, debe tener al menos 5 caracteres")
        return
    }
    if (password !== confirmPas) {
        setError("Las contraseñas no coinciden")
        return false
    }
    setError("")
    return true
}
