import './register.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ValidacionDataRegister } from '../../utils/funciones/funciones'
import { registerPost } from '../../utils/peticiones/peticion'
import { initialStateRegister } from '../../utils/funciones/initialStates'

const Register = () => {

    const navigate = useNavigate()

    const [data, setData] = useState(initialStateRegister)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleChange = (event) => {
        const { name, value } = event.target
        setData({ ...data, [name]: value })
    }
    //console.log(data)

    const handleSubmit = async (event) => {
        event.preventDefault()
        // setSuccess("")
        const validarCampos = ValidacionDataRegister(data, setError)
        if (validarCampos === true) {
            setSuccess("Registrando")
            const response = await registerPost(data)
            if (response.code !== 201) { // falta desglosar los codigos de error que se manda desde el back
                setSuccess("")
                setError(response.message)
            }
            if (response.code === 201) {
                setError("")
                setData(initialStateRegister)
                navigate('/login')
            }
        }
    }

    return (
        <div className="register-container">
            <form className='register-form' onSubmit={handleSubmit}>
                <input type="text" name='username' value={data.username} onChange={handleChange} placeholder=' Nombre' />
                <input type="text" name='email' value={data.email} onChange={handleChange} placeholder=' Email' />
                <input type="text" name='password' value={data.password} onChange={handleChange} placeholder=' Contraseña' />
                <input type="text" name='confirmPas' value={data.confirmPas} onChange={handleChange} placeholder=' Confirmar contraseña' />
                <p className='register-text'>Ya tenes cuenta?<NavLink to='/login'>ingresa aquí</NavLink></p>
                <button type='submit'>Registrarse</button>
            </form>
            <div className='register-messages'>
                {error.length > 0 && <h3 className='register-error'>{error}</h3>}
                {success.length > 0 && <h3 className='register-success'>{success}</h3>}
            </div>
        </div>
    )
}

export default Register