import React from 'react';
import PreviewCollection from '../../Components/preview-collection/preview-collection.component';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import {createStructuredSelector  } from 'reselect';

const ShopPage = ({ collections }) => (
  <div>
    {
      collections.map(({id, ...otherProps}) => (
        <PreviewCollection key={id} {...otherProps}/>
      ))
    }
  </div>
);

const mapStateToProps = () => createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);