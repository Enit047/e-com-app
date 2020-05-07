import React, {Component} from "react"
import './directory.sass'
import MenuItem from "../menu-item/menu-item"
import {sections} from "./original";

export default class Direct extends Component{
    state = {
        section: sections
    }
    render() {
        const {section} = this.state
        const content = section.map(({id,title , ...sectionValues}) => {
            const name = title.split('').map((i, e) => e === 0 ? i.toUpperCase() : i).join('')
            return <MenuItem name={name} key={id} {...sectionValues}/>
        })

        return (
            <div className='directory-menu'>
                {content}
            </div>
        )
    }
}