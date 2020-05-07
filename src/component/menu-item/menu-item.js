import React from "react"
import './menu-item.sass'
import { withRouter } from 'react-router-dom'

const MenuItem = ({name, imageUrl, size, history, linkUrl, match}) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background" style={{
                background: `url(${imageUrl}) center center/cover`
            }}></div>
            <div className="content">
                <h3 className="title">{name}</h3>
                <span className="subtitle">Shop now</span>
            </div>
        </div>
    )
}
export default withRouter(MenuItem)