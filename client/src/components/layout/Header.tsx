import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/auth'

const fixNavigation = [
  { name: 'Home', href: '/' },
  { name: 'Problemset', href: '/problemset' },
]
const conditionalNavigation = [
  { name: 'Login', href: '/login' },
  { name: 'Register', href: '/register' }
]

const Header = () => {
  const [auth, setAuth] = useAuth()

  const navigation = (nav: { name: string, href: string }[]) => {
    return (
      nav.map((item) => (
        <NavLink
          to={item.href}
          key={item.name}
        >
          {item.name}
        </NavLink>
      ))
    )
  }

  const handleLogout = () => {
    setAuth({
      ...auth,
      username: null,
      token: ''
    })
    localStorage.removeItem('auth')
  }
  return (
    <div className='bg-gray-100 flex space-x-4 py-4'>
      {navigation(fixNavigation)}
      {auth?.token ? (
        <NavLink to='/' onClick={handleLogout}>Logout</NavLink>
      ) : navigation(conditionalNavigation)}
    </div >
  )
}
export default Header
