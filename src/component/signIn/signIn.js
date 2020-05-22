import React, {Component} from "react"
import './signIn.sass'
import FormItem from "../form-Item/form-item";
import CustomButt from "../customButt/customButt";
import {signInWithGoogle, auth} from "../../firebase/firebase"

export default class SignIn extends Component{
    state = {
        email: '',
        password: '',

        errWithEmail: '',
        errWithPass: '',
        errWithSignIn: ''
    }

    handlerInp = ({target}) => {
        const {name, value} = target
        this.setState({[name]: value})
    }

    handlerSub = async (eve) => {
        eve.preventDefault()
        const {email, password} = this.state

        const findEm = email.split('').findIndex(i => i === '@')
        const editEmail = email.slice(0 , findEm)
        const verification = email.split('').filter(i => i === '@').length == 1

        const checkerErr = (errElem, textMess) => {
            const arrWithErr =
                ['errWithEmail', 'errWithPass'].filter(i => i !== errElem)

            const objState = {
                [errElem]: textMess,
            }
            arrWithErr.map(i => objState[i] = '')
            this.setState(objState)
        }

        if(editEmail.length < 3){
            checkerErr('errWithEmail', 'Your email too short, you should try another :(')
        } else if(!verification){
            checkerErr('errWithEmail', 'Your email does not look right :(')
        } else if(password.length < 6){
            checkerErr('errWithPass', 'Your password too short :(')
        }

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: '', errWithEmail: '', errWithPass: '', errWithSignIn: ''})
        } catch (e) {
            this.setState({errWithSignIn: 'Your email or password is wrong'})
        }
    }

    render() {
        const {email, password, errWithEmail, errWithPass, errWithSignIn} = this.state
        return (
            <div className='sign-in'>
                <h2>Sign in {errWithSignIn ? <span>{errWithSignIn}</span> : ''}</h2>
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
                        <CustomButt type='submit'>Sign in</CustomButt>
                        <CustomButt onClick={() => signInWithGoogle()} isGoogleSignin>Sign in with Google</CustomButt>
                    </div>
                </form>
            </div>
        );
    }
}