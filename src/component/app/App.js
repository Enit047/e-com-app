import React, {Component} from 'react'
import HomePage from "../../pages/homepage/homepage"
import './App.sass'
import {Route, Redirect} from 'react-router-dom'
import ShopPage from "../../pages/shopPage/shopPage";
import Header from "../header/header";
import SignInAndSignUp from "../../pages/signInAndSignUp/signInAndSignUp";
import { auth, createUserProfileDoc } from "../../firebase/firebase"
import {actionSetCurrentUser} from "../../redux/actionCreators";
import {connect} from "react-redux";
import CheckOut from "../checkOut/checkOut";

class App extends Component{
    unsubscribe = null

    componentDidMount() {
        this.unsubscribe = auth.onAuthStateChanged( async userAuth => {
            if(userAuth){
                const userRef = await createUserProfileDoc(userAuth)

                userRef.onSnapshot(snapshot => {
                    this.props.setUser({
                        id: userAuth.uid,
                        ...snapshot.data()
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
        const {currentUser} = this.props
        return (
            <>
                <Header/>
                <Route path='/' exact component={HomePage}/>
                <Route path='/shop'  component={ShopPage}/>
                <Route path='/checkout' exact component={CheckOut}/>
                <Route path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUp />}/>
            </>
        )
    }
}

const mapDispatchToProps = {
    setUser: actionSetCurrentUser
}
const mapStateToProps = state => ({currentUser: state.sthReducer.currentUser})
export default connect(mapStateToProps, mapDispatchToProps)(App);

