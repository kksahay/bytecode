import { useState } from "react"
import Layout from "../../components/layout/Layout"
import axios from "axios"
import { useAuth } from "../../context/auth"
import { useNavigate, useLocation } from "react-router-dom"
import '../../styles/Auth.css'

const Login = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  // @ts-ignore
  const [auth, setAuth] = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/login`, {
        username,
        password
      })

      if (data && data.success) {
        setAuth({
          ...auth,
          username: data.user.username,
          token: data.token
        })
        localStorage.setItem('auth', JSON.stringify(data))
        navigate(location.state || '/')
      }
    } catch (error) {
      // @ts-ignore
      setError(error.response.data.message)
      setPassword('')
    }
  }
  return (
    <Layout>
      {
        !auth?.token && (
          <div className="auth-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Username*: </label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password*: </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
              </div>
              {error && <div style={{color: 'red'}}>{error}</div>}
              <div>
                <button type="submit" className="login-submit">Login</button>
              </div>
            </form>
          </div>
        )
      }
    </Layout >
  )
}
export default Login