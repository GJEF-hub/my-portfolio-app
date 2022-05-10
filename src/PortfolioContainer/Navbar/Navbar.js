import React, { Component } from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

class Navbar extends Component {

    state = { active: false}

    handleClick = () => {
        this.setState({ active: !this.state.active })
    }

    render () {
        return(
            <nav className="NavbarItems">
                <h2 className='navbar-logo'><Link to="/"><span>GJ</span>EF</Link></h2>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.active ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>
                <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-link'><Link to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
                    <li className='nav-link'><Link to="/summary"><i className="fa-regular fa-circle-check"></i> Summary</Link></li>
                    <li className='nav-link'><Link to="/resume"><i className="fa-solid fa-user-gear"></i> Skillset</Link></li>
                    <li className='nav-link'><Link to="/works"><i className="fa-solid fa-person-digging"></i> Works</Link></li>
                    <li className='nav-link'><Link to="/career"><i className="fa-solid fa-graduation-cap"></i> Career</Link></li>
                    <li className='nav-link'><Link to="/contact"><i className="fa-solid fa-address-book"></i> Contact</Link></li>

                </ul>
            </nav>
        )
    }
}

export default Navbar