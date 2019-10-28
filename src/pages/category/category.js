import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item';
import {connect} from 'react-redux';
import {selectCategory} from '../../redux/shop/shop.selectors';

import './category.scss';

const CategoryPage=({category})=>{
    console.log(category)
    return(
        <div className='collection-page'>
            <h2 className='title'>{category.title}</h2>
            <div className='items'>
                {
                    category.items.map(item=><CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps=(state, ownProps)=>({
    category: selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);