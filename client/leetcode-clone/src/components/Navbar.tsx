import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id='navbar-main' className='flex-row'>
            <Link to={'/'}>
                <div className="flex-row">
                    <p>LeetCode</p>
                </div>
            </Link>
            <div className="flex-row">
                <Link to={'/problemlist'} >Problems</Link>
            </div>
        </div>
    )
}

export default Navbar