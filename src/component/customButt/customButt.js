import React from "react"
import './customButt.sass'

const CustomButt = ({isGoogleSignin, children, onClick}) => (
    <button className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} onClick={onClick}>{children}</button>
)

export default CustomButt