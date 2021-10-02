import React from "react";
import { Route } from "react-router-dom";

import CategoryPage from "../category/category";
import CollectionOverview from "../../components/collections-overview/collections-overview";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};

export default ShopPage;
