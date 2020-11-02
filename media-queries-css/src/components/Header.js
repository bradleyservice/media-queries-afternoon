import React, {Component} from 'react';
import logo from '../images/logo.svg'

class Header extends Component {
    constructor(){
        super();
        this.state = {
            toggleSwitch: false
        }
    }

    toggleSwitchFunc = () => {
        this.setState( (prevState) => {
            return {
                toggleSwitch: !prevState.toggleSwitch
            }
        })
    }

    render(){
        return(   
            <nav className="nav-bar">
                <div className='container'>
                    <a href="">
                        <img className="logo" alt="logo" src={logo} />
                    </a>
                    <div role="full-horizontal" className={`menu-bar ${this.state.toggleSwitch ? "show" : ""}`}>
                        <ul className='menu-items'>
                            <li className='nav-item'>SERVICES</li>
                            <li className='nav-item'>PORTFOLIO</li>
                            <li className='nav-item'>ABOUT</li>
                            <li className='nav-item'>TEAM</li>
                            <li className='nav-item'>CONTACT</li>
                        </ul>
                        <button className="hamburger-btn" onClick={this.toggleSwitchFunc} id='nav-btn'>MENU =</button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header