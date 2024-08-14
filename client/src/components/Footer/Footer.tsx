import "./footer.css"
import Logo from "../Logo/Logo"
import { FaWhatsapp,FaInstagram,FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <Logo />
      <div className="links">
        <ul>
          <li>Our Story</li>
          <li>Our Product</li>
          <li>Our Team</li>
          <li>Our Mission</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="socials">
        <span className="whatsapp" ><FaWhatsapp /></span>
        <span className="instagram"><FaInstagram  /></span>
        <span className="facebook"><FaFacebook /></span>
      </div>

      <div className="subscribe-form">
        Form
      </div>
    </footer>
  )
}

export default Footer