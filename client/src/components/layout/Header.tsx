import { useAuth } from '../../context/auth'
import '../../styles/Header.css'
import { useLocation, useNavigate } from 'react-router-dom'
const Header = () => {
  // @ts-ignore
  const [auth, setAuth] = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const handleLogout = () => {
    setAuth({
      ...auth,
      username: null,
      token: ''
    })
    localStorage.removeItem('auth');
    navigate(location.pathname || '/')
  }

  return (
    <div className='nav'>
      <button className='nav-button' onClick={() => { navigate('/') }}>ByteCode</button>
      <div className='auth'>
        {auth?.token ? (
          <div>
            <button className='username-button'>{auth?.username}</button>
            <button className='logout-button' onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <button className='login-button' onClick={() => { navigate('/login') }}>Login</button>
            <button className='register-button' onClick={() => { navigate('/register') }}>Register</button>
          </div>
        )}
      </div>
    </div >
  )
}
export default Header
