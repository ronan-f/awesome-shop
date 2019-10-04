import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import PreviewCollection from '../../Components/preview-collection/preview-collection.component';
import './Collection.styles.scss';

const CollectionPage = ({ collection }) => {
    return (
    <div className='category'>
      <PreviewCollection title={"Hats"} items={ collection } />
    </div>
  )
  }

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
