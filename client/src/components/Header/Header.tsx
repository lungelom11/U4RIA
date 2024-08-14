import Logo from "../Logo/Logo";
import "./header.css"
import { FaCartShopping } from "react-icons/fa6";


const Header = () => {
  return (
    <nav>
      <Logo />
      <div className="menu">
        <ul>
          <li className="menu-item active">Home</li>
          <li className="menu-item">Our Story</li>
          <li className="menu-item">Our Mission</li>
          <li className="menu-item">Our Product</li>
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