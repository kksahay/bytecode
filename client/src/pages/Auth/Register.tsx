import { useState } from "react"
import Layout from "../../components/layout/Layout"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
  const navigate = useNavigate()
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      console.log("Password Mismatch")
      return;
    }
    try {
      const { username, password } = user
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/register`, {
        username,
        password
      })
      if (res && res.data.success) {
        console.log(res.data.message)
        navigate('/login')
      } else {
        console.log(res.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
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
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </Layout>
  )
}
export default Register