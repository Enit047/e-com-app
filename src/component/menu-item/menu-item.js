import React from "react"
import './menu-item.sass'

const MenuItem = ({title, img, size}) => {
    return (
        <div className={`${size} menu-item`}>
            <div className="background" style={{
                background: `url(${img}) center center/cover`
            }}></div>
            <div className="content">
                <h3 className="title">{title}</h3>
                <span className="subtitle">Shop now</span>
            </div>
        </div>
    )
}
export default MenuItem