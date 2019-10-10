import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../Components/collections-overview/collections-overview.component';
import CollectionPage from '../Collection/Collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import WithSpinner from '../../Components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {

  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    })
  }, [updateCollections]);

  return (
    <div>
      <Route exact path={ match.path } render={ (props) => <CollectionsOverviewWithSpinner { ...props } isLoading={ isLoading } /> } />
      <Route
        path={ `${match.path}/:collectionId` }
        render={ (props) => <CollectionPageWithSpinner { ...props } isLoading={ isLoading } />}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);