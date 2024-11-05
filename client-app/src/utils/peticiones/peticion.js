const endpoint = "http://localhost:3000"

export const loginPost = async (email, password) => {
    try {
        const res = await fetch(`${endpoint}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })
        const data = await res.json()
        if (data.ok === false) {
            // console.log( { code: res.status, message: data.message })
            return { code: res.status, message: data.message }
        }
        if (data.ok === true) {
            const token = data.token
            //console.log({code: res.status, token})
            return { code: res.status, token }
        }
    } catch (error) {
        console.log(error)
    }
}

export const registerPost = async ({ username, email, password }) => {
    try {
        const res = await fetch(`${endpoint}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password })
        })
        const data = await res.json()
        if (data.ok === false) {

            return { code: res.status, message: data.message }
        }
        if (data.ok === true) {
            return { code: res.status, message: data.message }
        }
    } catch (error) {
        console.log({ mesagge: "Hay un error en la peticion registerPost", error })
    }
}

export const AddTaskPost = async ({ budget, description, state, priority, tittle }, token) => { // en backend tengo que hacer un middleware para recibir el Id del usuario
    try {
        const res = await fetch(`${endpoint}/addtask`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({ budget, description, state, priority, tittle })
        })
        console.log(res)
        const data = await res.json()
        return { code: res.status, message: data.message, task: data.task }

    } catch (error) {
        console.log(error)
    }
}