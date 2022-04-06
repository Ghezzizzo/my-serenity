import { Link } from "react-router-dom"
import styled from 'styled-components'
function Navbar() {
    
  return (
    <Nav>
        <Link to="/" className="logo">My serenity</Link>
        <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </div>
    </Nav>
  )
}

const Nav = styled.div`
  display: flex;
  max-width: 100%;
  height: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .logo {
    font-size: 22px;
    color: #f9f9f9;
  }

  a {
    padding: 1rem;
  }
`

export default Navbar