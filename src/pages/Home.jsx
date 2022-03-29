import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import styles from "../css/Home.module.css";
function Home() {
  
  return (
    <div>
      <Navbar/>
        <h1>Home page</h1>
        <Link className={styles.link} to="/login">Login</Link> now.
        </div>
  )
}

export default Home