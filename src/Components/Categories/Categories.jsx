import React from "react";
import { categories } from "../../data.js";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import { Container } from "./Style";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoriesItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
