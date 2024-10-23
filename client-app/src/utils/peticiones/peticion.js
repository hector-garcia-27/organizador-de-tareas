
const endpoint = "http://localhost:3000"

export const loginPost = async (email, password) => {
    try {
        const res = await fetch(`${endpoint}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })
        if (res.status === 404) {
            return { code: 1, message: "El usuario no existe" }
        }
        if (res.status === 401) {
            return { code: 2, message: "La contraseña es incorrecta" }
        }
        if (res.status === 200) {
            return { code: 3, message: "hagale papa" }
        }
    } catch (error) {
        console.log(error)
    }
}

export const registerPost = async ({username, email, password}) => {
    try {
        const res = await fetch(`${endpoint}/register`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify({username, email, password})
        })
        if (res.status === 201) {
            return {code: 1 , message: "Usuario registrado"}
        }   
    } catch (error) {
        console.log(error)
    }
}

export const AddTaskPost = async () => {
    try {
        const res = await fetch(`${endpoint}/addtask`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify({})
        })
    } catch (error) {
        console.log(error)
    }
}