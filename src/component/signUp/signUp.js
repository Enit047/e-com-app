import React, {Component} from "react"
import './signUp.sass'
import FormItem from "../form-Item/form-item"
import CustomButt from "../customButt/customButt";
import {auth, createUserProfileDoc} from "../../firebase/firebase"

class SignUp extends Component{
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPass: '',

        errWithDisplay: '',
        errWithEmail: '',
        errWithPass: '',
        errWithConfirmPass: '',
        errWithExitsAcc: ''
    }

    handlerSubmit = async (eve) => {
        eve.preventDefault()

        const {email, password, confirmPass, displayName} = this.state
        const sliceEm = email.slice(0, email.split('').findIndex(i => i === '@'))
        const passwordCont = password.replace(/\D/g, '').length > 2

        const checkerErr = (errElem, textMess) => {
            const arrWithErr =
                ['errWithDisplay', 'errWithEmail', 'errWithPass',
                    'errWithConfirmPass', 'errWithExitsAcc'].filter(i => i !== errElem)
            const objState = {
                [errElem]: textMess,
            }
            arrWithErr.map(i => objState[i] = '')
            this.setState(objState)
        }

        if(sliceEm.length <= 2){
            checkerErr('errWithEmail', 'Your email is too short')
        } else if(displayName.length < 2){
            checkerErr('errWithDisplay', 'Your name is too short')
        } else if(password.length < 6){
            checkerErr('errWithPass', 'Your password is too short')
        } else if(!passwordCont){
            checkerErr('errWithPass', 'Your password is must contain 3 digits ')
        } else if(password !== confirmPass) {
            checkerErr('errWithConfirmPass', 'Your passwords is does not match')
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDoc(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPass: '',

                errWithDisplay: '',
                errWithEmail: '',
                errWithPass: '',
                errWithConfirmPass: '',
                errWithExitsAcc: ''
            })
        } catch (e) {
            this.setState({errWithExitsAcc: 'This email is already registered'})
        }
    }

    handlerChange = ({target}) => {
        const {name, value} = target
        this.setState({
            [name]: value
        })
    }


    render() {
        const {email, password, confirmPass, displayName, errWithExitsAcc, errWithConfirmPass, errWithDisplay, errWithEmail, errWithPass} = this.state
        return (
            <div className='sign-up'>
                <h2 className="title">I don't have an account {errWithExitsAcc ? <span className='already-exists'>{errWithExitsAcc}</span> : '' }</h2>

                <form onSubmit={this.handlerSubmit} className='sign-up-form create'>
                    <FormItem
                        required
                        type="text"
                        name='displayName'
                        value={displayName}
                        label='Display name'
                        handlerChange={this.handlerChange}
                    />
                    {errWithDisplay ? <span className='errWith'>{errWithDisplay}</span> : ''}

                    <FormItem
                        required
                        type="email"
                        name='email'
                        value={email}
                        label='Email'
                        handlerChange={this.handlerChange}
                    />
                    {errWithEmail ? <span className='errWith'>{errWithEmail}</span> : ''}

                    <FormItem
                        required
                        type="password"
                        name='password'
                        value={password}
                        label='Password'
                        handlerChange={this.handlerChange}
                    />
                    {errWithPass ? <span className='errWith'>{errWithPass}</span> : ''}

                    <FormItem
                        required
                        type="password"
                        name='confirmPass'
                        value={confirmPass}
                        label='Confirm password'
                        handlerChange={this.handlerChange}
                    />
                    {errWithConfirmPass ? <span className='errWith'>{errWithConfirmPass}</span> : ''}

                    <CustomButt type='submit'>Sign up</CustomButt>
                </form>
            </div>
        );
    }
}

export default SignUp