import React from 'react'
import './icon-card.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/basket.svg';
import {actionSetDropDown} from "../../redux/actionCreators";
import {useDispatch, useSelector} from "react-redux";

const IconBas = () => {
    const dispatch = useDispatch()
    const stateCartDrop = useSelector(state => state.otherReducer.dropCart)

    return (
        <div className='cart-icon' onClick={() => dispatch(actionSetDropDown(!stateCartDrop))}>
            <ShoppingIcon className='shopping-icon'/>
            <div className='item-count'>0</div>
        </div>
    )
}

export default IconBas