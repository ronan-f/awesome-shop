import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../Components/collections-overview/collections-overview.component';
import CollectionPage from '../Collection/Collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const ShopPage = ({ match }) => {

  // let unsubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      convertCollectionsSnapshotToMap(snapshot);
    })
  });

  return (
    <div>
      <Route exact path={ match.path } component={ CollectionsOverview } />
      <Route path={ `${match.path}/:collectionId` } component={ CollectionPage} />
    </div>
  );
};

export default (ShopPage);