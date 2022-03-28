import React from "react";
import { Button, Container, Image, Info, Title } from "./CategoriesStyle";
import { Link } from "react-router-dom";

const CategoriesItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoriesItem;
