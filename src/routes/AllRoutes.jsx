import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "../components/Product Details/ProductDetails";
import HomePage from "./HomePage";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}
