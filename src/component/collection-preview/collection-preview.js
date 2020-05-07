import React from "react"
import './coll-preview.sass'
import {CollItem} from "../collection-item/collection-item";

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h2 className="title">{title}</h2>
        <div className="preview">
            {
                items.filter((i, ind) => ind < 4).map(({id, ...otherProps}) => (
                        <CollItem key={id} {...otherProps}/>
                    )
                )
            }
        </div>
    </div>
)
export default CollectionPreview