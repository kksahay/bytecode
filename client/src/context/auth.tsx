import { createContext, useContext, useEffect, useState } from "react";
import { LayoutProps} from "../interfaces/BytecodeInterface";


const AuthContext = createContext({})

const AuthProvider = ({ children }: LayoutProps) => {
  const [auth, setAuth] = useState({})
  useEffect(() => {
    const data = localStorage.getItem('auth')
    if (data) {
      const parseData = JSON.parse(data)
      setAuth({
        ...auth,
        username: parseData.user.username,
        token: parseData.token
      })
    }
  }, [])
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  )
}
const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }