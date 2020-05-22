import React from "react"
import './customButt.scss'

const CustomButt = ({type = 'button' ,isGoogleSignin, children, onClick}) => (
    <button type={type}  className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} onClick={onClick}>{children}</button>
)

export default CustomButt