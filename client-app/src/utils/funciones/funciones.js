// regex para validaciones
const regexName = /^[a-zA-Z]+(?: [a-zA-Z]+){0,20}$/
const regexEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
const regexPassword = /^[\S]{5,}$/
const regexTexto = /^[a-zA-Z0-9][a-zA-Z0-9\s]*$/
const regexNumero = /^\d+$/

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

export const ValidacionDataRegister = ({ name, email, password, confirmPas }, setError) => {
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
        return false
    }
    if (!regexPassword.test(password)) {
        setError("La contraseña no cumple con el formato, debe tener al menos 5 caracteres")
        return false
    }
    if (password !== confirmPas) {
        setError("Las contraseñas no coinciden")
        return false
    }
    setError("")
    return true
}

export const ValidacionDataTarea = ({ tittle, description, budget }, setError) => {
    if (tittle === '' ) {
        setError('El campo de titulo está vacio')
        return false
    }
    if(!regexTexto.test(tittle)) {
        setError('El titulo debe ser solo texto')
        return false
    }
    /* if(description !== "" && !regexTexto.test(description)){
        setError('la descripcion debe ser solo texto')
        return false
    } */
    if(!regexNumero.test(budget)) {
        setError('El presupuesto debe ser un número')
        return false
    }
    setError("")
    return true

} 

export const getToken = () => {
    const token = localStorage.getItem("token")
    return token
}