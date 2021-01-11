import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/withSpinner.component";
import CollectionOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);
