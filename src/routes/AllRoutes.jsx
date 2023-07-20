import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "../components/Product Details/ProductDetails";
import HomePage from "./HomePage";
import Auth from "./Auth";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:id" element={<ProductDetails />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </div>
  );
}
