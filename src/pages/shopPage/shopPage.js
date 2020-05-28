import React from "react"
import CollectionOverview from "../../component/collectionOverview/collection-overview";
import { Route } from 'react-router-dom'
import CollectionPage from "../../component/collectionPage/collectionPage";

const ShopPage = ({match}) => {
    return (
        <div className='shop-page'>
            <Route path={`${match.path}`} exact component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}


export default ShopPage