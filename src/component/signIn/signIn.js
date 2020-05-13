import React, {Component} from "react"
import './signIn.sass'
import FormItem from "../form-Item/form-item";
import CustomButt from "../customButt/customButt";
import {signInWithGoogle} from "../../firebase/firebase";

export default class SignIn extends Component{
    state = {
        email: '',
        password: '',
        errWithEmail: '',
        errWithPass: ''
    }

    handlerInp = ({target}) => {
        const {name, value} = target
        this.setState({[name]: value})
    }

    handlerSub = (eve) => {
        eve.preventDefault()
        const {email, password} = this.state

        const editEmail = email.slice(0 ,email.split('').findIndex(i => i === '@'))
        const editPass = password.length < 6 ? false : true
        const eEmail = editEmail.length < 3
        const ePass = !editPass
        if(eEmail && ePass){
            this.setState({errWithEmail: 'Your email too short, you should try another.', errWithPass: 'Your password too short'})
        } else if(eEmail){
            this.setState({errWithEmail: 'Your email too short, you should try another.', errWithPass: ''})
        } else if(ePass){
            this.setState({errWithPass: 'Your password too short', errWithEmail: ''})
        } else {

            this.setState({email: '', password: '', errWithEmail: '', errWithPass: ''})
        }
    }

    render() {
        const {email, password, errWithEmail, errWithPass} = this.state
        return (
            <div className='sign-in'>
                <h2>Sign in</h2>
                <form onSubmit={this.handlerSub}>
                    {errWithEmail ? <span className='errWith'>{errWithEmail}</span> : ''}

                    <FormItem
                        required
                        type="text"
                        name='email'
                        value={email}
                        label='email'
                        handlerChange={this.handlerInp}/>

                    {errWithPass ? <span className='errWith'>{errWithPass}</span> : ''}
                    <FormItem
                        required
                        type="password"
                        name='password'
                        value={password}
                        label='password'
                        handlerChange={this.handlerInp}/>
                    <div className="wrapper-button">
                        <CustomButt>Sign in</CustomButt>
                        <CustomButt onClick={() => signInWithGoogle()} isGoogleSignin>Sign in with Google</CustomButt>
                    </div>
                </form>
            </div>
        );
    }
}