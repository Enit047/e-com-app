import React, {Component} from "react"
import {SHOP_DATA} from "../../serverSide/shopingData";
import CollectionPreview from "../../component/collection-preview/collection-preview";

export default class ShopPage extends Component{
    state = {
        collection: SHOP_DATA
    }
    render() {
        return (
            <div className='shop-page'>
                {
                    this.state.collection.map(({id, ...otherProps}) => {
                        return <CollectionPreview key={id} {...otherProps} />
                    })
                }
            </div>
        );
    }
}