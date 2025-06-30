
import { Link } from 'react-router-dom';
import './Header.css'
import React ,{ useState } from 'react';
function Header  () {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawer = () => {
          setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
       setIsDrawerOpen(false);
    };

    return (
        <div className="content">
          <div>
            <header className='main-header'>
                <div className='college-name'>
                        <Link to="/">Vivekanand College</Link>
                    </div>
                    <nav className="navbar desktop-nav">
                        <Link className="nav-item" to="/">Home</Link>
                        <Link className="nav-item" to="/about">About</Link>
                        <Link className="nav-item" to="/courses">Courses</Link>
                        <Link className="nav-item" to="/contact">Contact</Link>
                        <Link to="/admission" className="nav-item btn primary-btn">
                         Apply Now!
                        </Link>{" "}
                        </nav>
                    <button className="hamburger-menu" onClick={toggleDrawer }>
                      <span className="hamburger-icon"></span>
                      <span className="hamburger-icon"></span>
                      <span className="hamburger-icon"></span>
                    </button>
                     <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
                    <button className="close-drawer-btn" onClick={toggleDrawer}>
                      ✕
                    </button>
                    <Link to="/" className="nav-item" onClick={closeDrawer}>
                      Home
                    </Link>
                    <Link to="/about" className="nav-item" onClick={closeDrawer}>
                      About
                    </Link>
                    <Link to="/courses" className="nav-item" onClick={closeDrawer}>
                      Courses
                    </Link>
                    <Link to="/contact" className="nav-item" onClick={closeDrawer}>
                      Contact
                    </Link>
                    <Link to="/admissions"className="nav-item btn primary-btn" onClick={closeDrawer}>
                      Apply Now!
                    </Link>
                    </nav>
                  {isDrawerOpen && (
                    <div className="drawer-overlay" onClick={toggleDrawer}></div>
                    )}
                  </header>
           </div> 
           </div>
   
   )}
  

export default Header;