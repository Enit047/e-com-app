import React from "react"
import './signInAndSignUp.sass'
import SignIn from "../../component/signIn/signIn";
import SignUp from "../../component/signUp/signUp";

const SignInAndSignUp = () => {
    return (
        <div className='sign-up-and-sign-in'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}
export default SignInAndSignUp