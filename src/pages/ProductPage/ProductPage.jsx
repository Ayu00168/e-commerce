import React, { useEffect, useState } from "react";
import {
  AddContainer,
  Amount,
  AmountContainer,
  Container,
  Desc,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Img,
  ImgContainer,
  InfoContainer,
  Price,
  Purchase,
  Title,
  Wrapper,
} from "./ProPageStyle";
import Navbar from "./../../Components/NavBar/Navbar";
import Announcement from "./../../Components/Accouncement/Announcement";
import Newsletter from "./../../Components/Newsletter/Newsletter";
import Footer from "./../../Components/Footer/Footer";
import { Remove, Add } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const handleClick = (type) => {
    if (type === "des") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/find/" + id
        );
        setProduct(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [id]);

  const handleCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Img src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onClick={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleClick("des")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleClick("asc")} />
            </AmountContainer>
            <Purchase onClick={handleCart}>Add to Cart</Purchase>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductPage;
