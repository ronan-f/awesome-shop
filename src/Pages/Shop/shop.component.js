import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../Components/collections-overview/collections-overview.component';
import CollectionPage from '../Collection/Collection.component';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import WithSpinner from '../../Components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, isCollectionLoaded, fetchCollectionsStartAsync }) => {

  useEffect(() => fetchCollectionsStartAsync());

  return (
    <div>
      <Route exact path={ match.path } render={ (props) => <CollectionsOverviewWithSpinner { ...props } isLoading={ !isCollectionLoaded } /> } />
      <Route
        path={ `${match.path}/:collectionId` }
        render={ (props) => <CollectionPageWithSpinner { ...props } isLoading={ !isCollectionLoaded } />}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);