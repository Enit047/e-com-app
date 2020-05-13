import React from "react"
import './header.sass'
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {Link} from "react-router-dom"
import { auth } from "../../firebase/firebase"


export const Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link to='/shop' className='option'>
                Shop
            </Link>
            <Link to='/contact' className='option'>
                Contact
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>Sign out</div>
                    : <Link to='/signin' className='option'>Sign in</Link>
            }
        </div>
    </div>
)