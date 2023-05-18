import { Link } from "react-router-dom"
import './header.css'
import {FaBlogger, FaHome, FaInfoCircle} from "react-icons/fa"

function Header() {
  return (
    <div className="header">
      <div className="logoTitle">
      <h2>Jelys Blogify</h2>

      </div>
      <div className="linksNav">
      <Link className="navlink"  to= "/"> <FaHome/>Home</Link>
        <Link className="navlink" to="/about"> <FaInfoCircle/>About</Link>
        <Link className="navlink" to= "/blogs"> <FaBlogger/>Blogs</Link>
      </div>
       

       
       


      
    </div>
  )
}

export default Header
