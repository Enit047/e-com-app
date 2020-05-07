import React from "react"
import './collection-item.sass'

export const CollItem = ({name, imageUrl, price}) => {

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
        </div>
    )
}