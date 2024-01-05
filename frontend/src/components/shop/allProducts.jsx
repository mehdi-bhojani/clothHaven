import React, { useState } from "react";
import ListView from "./ListView/ListView";
import ProductItem from "./productItem";
import GridView from "./GridView/GridView";

function AllProducts({ view }) {
  return (
    <>
      <div className="col-xl-9 col-lg-8">
        <div className="shop__product--wrapper">
          {view === "grid" ? <GridView /> : <ListView />}
        </div>
      </div>
    </>
  );
}

export default AllProducts;
