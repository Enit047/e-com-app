import React from "react"
import './header.sass'
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {Link} from "react-router-dom"
import { auth } from "../../firebase/firebase"
import {connect, useDispatch, useSelector} from "react-redux";
import IconBas from "../icon-card/icon-card";
import CardDropout from "../cart-dropout/cart-dropout";
import {signOut} from "../../redux/actionCreators";
import {currentUserr} from "../../redux/reselector";
import {createStructuredSelector} from "reselect";


const Header = ({currentUser}) => {
    const stateCartDrop = useSelector(state => state.otherReducer.dropCart)
    const dispatch = useDispatch()

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
                        <div className='option' onClick={() => {
                            auth.signOut()
                            dispatch(signOut())
                        }}>Sign out</div>
                        : <Link to='/signin' className='option'>Sign in</Link>
                }
                <IconBas />
            </div>
            {stateCartDrop ? <CardDropout/> : null}
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    currentUser: currentUserr
})

export default connect(mapStateToProps, null)(Header)