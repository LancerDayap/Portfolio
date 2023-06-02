
import { Link, animateScroll as scroll } from "react-scroll";



const Navbar = () => {
  return (
    <div className="navbar" style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
      <div className="container">
        <span className="logo">lancer.dev</span>
        <nav>
          
            <Link className="link" activeClass="active" to="hero" spy={true} smooth={true} offset={-150} duration={100}>
              Home
            </Link>
            <Link className="link" activeClass="active" to="about" spy={true} smooth={true} offset={-150} duration={100}>
              About Me
            </Link>
            <Link className="link" activeClass="active" to="projects" spy={true} smooth={true} offset={-150} duration={100}>
              Projects
            </Link>
            <Link className="link" activeClass="active" to="footer" spy={true} smooth={true} offset={-150} duration={100}>
              Contacts
            </Link>
          {/* <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects" end>Projects</NavLink>
          <NavLink to="/contact" end>Contact</NavLink> */}
        </nav>
      </div>
    </div>
  )
}

export default Navbar