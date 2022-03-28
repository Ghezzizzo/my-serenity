import { Link } from "react-router-dom"
function Navbar() {
    
  return (
    <div>
        <div className="logo">My serenity</div>
        <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </div>
    </div>
  )
}

export default Navbar