import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import "./shoppage.styles.scss";
import { fetchCollectonsStart } from "../../redux/shop/shop.actions";

const ShopPage = ({ match, fetchCollectonsStart }) => {
  useEffect(() => {
    fetchCollectonsStart();
  }, [fetchCollectonsStart]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectonsStart: () => dispatch(fetchCollectonsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
