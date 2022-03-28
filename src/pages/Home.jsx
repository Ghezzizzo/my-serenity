import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import "../css/Home.css";
function Home() {
  
  return (
    <div>
      <Navbar/>
        <h1>Home page</h1>
        <Link to="/login">Login</Link> now.
        </div>
  )
}

export default Home