import React from 'react'
import './icon-card.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/basket.svg';
import {actionSetDropDown} from "../../redux/actionCreators";
import {connect, useDispatch, useSelector} from "react-redux";
import {dropDownCart, selectedCart} from "../../redux/reselector";

const IconBas = ({itemCount}) => {
    const dispatch = useDispatch()
    const stateCartDrop = useSelector(state => dropDownCart(state))

    return (
        <div className='cart-icon' onClick={() => dispatch(actionSetDropDown(!stateCartDrop))}>
            <ShoppingIcon className='shopping-icon'/>
            <div className='item-count'>{itemCount}</div>
        </div>
    )
}
const mapStateToProps = state => ({
    itemCount: selectedCart(state)
})

export default connect(mapStateToProps, null)(IconBas)