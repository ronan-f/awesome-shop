import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../Components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../Collection/Collection.container';

const ShopPage = ({ match, isCollectionLoaded, fetchCollectionsStartAsync }) => {

  useEffect(() => fetchCollectionsStartAsync());

  return (
    <div>
      <Route exact path={ match.path } component={ CollectionsOverviewContainer } />
      <Route path={ `${match.path}/:collectionId` } component={ CollectionPageContainer } />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);