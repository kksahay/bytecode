import { useState } from "react"
import Layout from "../../components/layout/Layout"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
const Register = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState<string>('')
  // @ts-ignore
  const [auth] = useAuth()
  const navigate = useNavigate()
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      setError("Password Mismatch")
      return;
    }
    try {
      const { username, password } = user
      const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/register`, {
        username,
        password
      })
      if (data && data.success) {
        navigate('/login')
      }
    } catch (error) {
      // @ts-ignore
      setError(error.response.data.message)
    }
  }

  return (
    <Layout>
      {
        !auth?.token && (
          <div className="auth-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Username: </label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={e => setUser({ ...user, username: e.target.value })}
                  required
                />
              </div>
              <div>
                <label>Password: </label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={e => setUser({ ...user, password: e.target.value })}
                  required />
              </div>
              <div>
                <label>Confirm Password: </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={e => setUser({ ...user, confirmPassword: e.target.value })}
                  required />
              </div>
              {<div style={{ color: 'red' }}>{error}</div>}
              <div>
                <button type="submit" className="login-button">Register</button>
              </div>
            </form>
          </div>
        )
      }
    </Layout>
  )
}
export default Register