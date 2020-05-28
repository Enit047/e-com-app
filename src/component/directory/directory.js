import React from "react"
import './directory.sass'
import MenuItem from "../menu-item/menu-item"
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {reselectorStatic} from "../../redux/rootReducer/reducerForStaticData/reselectorReducer";

const Direct = ({section}) => {
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

const mapStateToProps = createStructuredSelector({
    section: reselectorStatic
})

export default connect(mapStateToProps, null)(Direct)