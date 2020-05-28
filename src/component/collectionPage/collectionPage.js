import React from 'react'
import './collectionPage.scss'
import {connect} from "react-redux";
import {selectCollection} from "../../redux/rootReducer/sthActionReducer/reselectorStatic";
import {CollItem} from "../collection-item/collection-item";

const CollectionPage = ({collection}) => {
    const {title, items} = collection
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps, null)(CollectionPage)