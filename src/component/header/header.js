import React, {useState} from "react"
import './header.sass'
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {Link} from "react-router-dom"
import { auth } from "../../firebase/firebase"
import {connect, useSelector} from "react-redux";
import IconBas from "../icon-card/icon-card";
import CardDropout from "../cart-dropout/cart-dropout";


const Header = ({currentUser}) => {
    const stateCartDrop = useSelector(state => state.otherReducer.dropCart)

    return (
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
                <IconBas />
            </div>
            {stateCartDrop ? <CardDropout/> : null}
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.sthReducer.currentUser
})

export default connect(mapStateToProps, null)(Header)