import { Link } from 'react-router-dom'
import './index.scss'
import LogoF from '../../assets/images/logo_f.png'
import LogoSubtitle from '../../assets/images/fulodev_sub.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faHome, faRocket } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoF} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="fulodev" />
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink> 
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>  
    </nav>
    <ul>
      <li>
          <a target="_blank" rel="noreferer" href="https://github.com/emmanueluwa">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
          </a>
      </li>
      <li>
          <a target="_blank" rel="noreferer" href="https://twitter.com/fulodev">
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"/>
          </a>
      </li>
      <li>
          <a target="_blank" rel="noreferer" href="https://www.fulodev.com/blog">
            <FontAwesomeIcon icon={faRocket} color="#4d4d4e"/>
          </a>
      </li>
    </ul>
  </div>
)
 

export default Sidebar