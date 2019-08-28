import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForpreview } from "../../redux/shop/shop.selectors";

import { CollectionOverviewContainer } from "./collection-overview.styles";

const CollectionOverview = ({ collections }) => (
  <CollectionOverviewContainer>
    {collections.map(({ id, ...otherProperties }) => (
      <CollectionPreview key={id} {...otherProperties} />
    ))}
  </CollectionOverviewContainer>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForpreview
});

export default connect(mapStateToProps)(CollectionOverview);
