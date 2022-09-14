import {Link} from 'react-router-dom'
const Nav = () => {
    return(
        <div>
            <Link to = '/'>Home</Link>
            <Link to ='/games'>Games</Link>
            <Link to = '/reviews'>Reviews</Link>
            <Link to ='/account'>Account</Link>
        </div>
    )
}
export default Nav