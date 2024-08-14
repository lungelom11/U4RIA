import Logo from "../Logo/Logo";
import "./header.css"
import { FaCartShopping } from "react-icons/fa6";
import { CiMenuFries  } from "react-icons/ci";
import {Link} from "react-router-dom";

interface HeaderProps {
  toggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggle }) => {
  return (
    <nav>
      <div className="burger-menu">
        <CiMenuFries onClick={toggle}  />
      </div>

      
       <Logo />
      
      <div className="menu">
        <ul>
          <Link to="/"><li className="menu-item active">Home</li></Link>
          <Link to="/our-story"><li className="menu-item">Our Story</li></Link>
          <Link to="/our-mission"><li className="menu-item">Our Mission</li></Link>
          <Link to="/our-products"><li className="menu-item">Our Products</li></Link>
        </ul>
      </div>

      <div className="cart">
        <span className="items-count">0</span>
        <span style={{fontSize:"1.7rem",marginTop:".5rem"}}><FaCartShopping /></span>
      </div>

    </nav>
  )
}

export default Header