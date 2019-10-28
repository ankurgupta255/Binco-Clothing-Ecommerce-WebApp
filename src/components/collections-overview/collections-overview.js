import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../preview-collection/preview-collection';
import {selectCategoryForPreview} from '../../redux/shop/shop.selectors';

import './collections-overview.scss';

const CollectionsOverview=({collections})=>{
    return(
        <div className='collections-overview'>
            {
            collections.map(({id, ...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
            }
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    collections: selectCategoryForPreview
  })

export default connect(mapStateToProps)(CollectionsOverview)