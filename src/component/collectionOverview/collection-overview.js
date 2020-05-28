import CollectionPreview from "../collection-preview/collection-preview";
import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {
    createSelectorForPreview
} from "../../redux/rootReducer/reducerForStaticData/reselectorReducer";
import './collection-overview.scss'

const CollectionOverview = ({collection}) => {
    console.log(collection)
    return (

        <div className='collection-overview'>
            {
                collection.map(({id, ...otherProps}) => {
                    return <CollectionPreview key={id} {...otherProps} />
                })
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collection: createSelectorForPreview
})

export default connect(mapStateToProps, null)(CollectionOverview)