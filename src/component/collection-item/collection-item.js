import React from "react"
import './collection-item.scss'
import CustomButt from "../customButt/customButt";
import {useDispatch} from "react-redux";
import {addToCard} from "../../redux/actionCreators";

export const CollItem = ({item}) => {
    const {name, imageUrl, price} = item
    const dispatch = useDispatch()
    return (
        <div className='collection-item'>
            <div className="image"
              style={{
                  background: `url(${imageUrl}) center center/cover`
              }}
            ></div>
            <div className="collection-footer">
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButt onClick={() => dispatch(addToCard(item))}>Add to cart</CustomButt>
        </div>
    )
}