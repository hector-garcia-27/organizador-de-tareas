import { useState } from 'react'
import './login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { ValidacionDataLogin } from '../../utils/funciones/funciones'
import { loginPost } from '../../utils/peticiones/peticion'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const validarCampos = ValidacionDataLogin(email, password, setEmail, setError, setPassword) //validacion de campos de login
        if (validarCampos === true) {

            setSuccess("Comprobando datos")
            const response = await loginPost(email, password)
            
            if (response.code !== 200) {
                setSuccess('')
                setError(response.message)
                return
            }
            if (response.code === 200) {
                const token = response.token
                sessionStorage.setItem('token', token);
                setEmail('')
                setPassword('')
                navigate('/task')
            }
        }
    }

    return (
        <div className="login-container">
            <form className='login-form' onSubmit={handleSubmit}>
                <input className='login-input' type="text" placeholder=' Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='login-input' type="text" placeholder=' Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className='login-text'>Aún no tienes cuenta? <NavLink to='/register'>Registrate</NavLink></p>
                <button className='' type='submit'>Login</button>
            </form>
            <div className='login-messages'>
                {error.length > 0 && <h3 className='login-error'>{error}</h3>}
                {success.length > 0 && <h3 className='login-success'>{success}</h3>}
            </div>
        </div>
    )
}

export default Login