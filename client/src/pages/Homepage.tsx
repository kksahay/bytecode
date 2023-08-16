import Layout from "../components/layout/Layout"
import { useAuth } from "../context/auth"

const Homepage = () => {
  const [auth, setAuth] = useAuth()
  return (
    <Layout>
      <div>Homepage</div>
    </Layout>
  )
}
export default Homepage