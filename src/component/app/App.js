import React, {Component} from 'react'
import HomePage from "../../pages/homepage/homepage"
import './App.sass'
import {Link, Route} from 'react-router-dom'
import ShopPage from "../../pages/shopPage/shopPage";
import {Header} from "../header/header";
import SignInAndSignUp from "../../pages/signInAndSignUp/signInAndSignUp";
import { auth, createUserProfileDoc } from "../../firebase/firebase"
import {AlreadySignIn} from "../alreadySignIn/alreadySignIn";
import SignUp from "../signUp/signUp";

class App extends Component{
    state = {
        currentUser: null
    }

    unsubscribe = null

    componentDidMount() {
        this.unsubscribe = auth.onAuthStateChanged( async userAuth => {
            if(userAuth){
                const userRef = await createUserProfileDoc(userAuth)

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: userAuth.uid,
                            ...snapshot.data()
                        }
                    })
                })
            } else {
                this.setState({currentUser: null})
            }
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        const {currentUser} = this.state
        return (
            <>
                <Header currentUser={currentUser} />
                <Route path='/' exact component={HomePage}/>
                <Route path='/shop' exact component={ShopPage}/>
                <Route path='/signin' render={() => {
                    if(!currentUser){
                        return <SignInAndSignUp />
                    } else {
                        return <AlreadySignIn />
                    }
                }}/>
            </>
        )
    }
}

export default App;

