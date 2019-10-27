import React from 'react';
import CollectionPreview from '../../components/preview-collection/preview-collection.js';
import {selectShopItems} from '../../redux/shop/shop.selectors';
import {createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';

const ShopPage=({ collections })=>{
  return(
    <div className='shop-page'>
    {
      collections.map(({id, ...otherCollectionProps})=>(
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
    </div>
  )
}

const mapStateToProps=createStructuredSelector({
  collections: selectShopItems
})

export default connect(mapStateToProps)(ShopPage);
