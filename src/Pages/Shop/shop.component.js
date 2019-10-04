import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../Components/collections-overview/collections-overview.component';
import CollectionPage from '../Collection/Collection.component';

const ShopPage = ({ match }) => (
  <div>
    <Route exact path={ match.path } component={ CollectionsOverview } />
    <Route path={ `${match.path}/:collectionId` } component={ CollectionPage} />
  </div>
);

export default (ShopPage);