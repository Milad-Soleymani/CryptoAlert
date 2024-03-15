// ! Styles
import '../styles/Nav.css'

// ! images

import Logo from '../images/Logo.png'


export const Navbar = () => {
    return (
        <div className='navBar'>
                <a href='/Coins' style={{color: 'white'}}> Coins </a>

            <div className='left-div'>
                <img className='Logo' src={Logo} />
            </div>
        </div>
    )
}