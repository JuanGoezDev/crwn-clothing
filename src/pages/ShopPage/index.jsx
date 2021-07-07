import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/CollectionsOverview/container";
import CollectionPageContainer from "../Collection/container";
import { fetchCollectionsStartAsync } from "../../redux/shop/actions";
import WithSpinner from "../../hocs/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverviewContainer);
const CollectionWithSpinner = WithSpinner(CollectionPageContainer);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewWithSpinner}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionWithSpinner}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
