import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  TopButton,
  TopTexts,
  TopText,
  Info,
  Summary,
  Product,
  ProductDetails,
  PriceDetails,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  ProductAmoutContainer,
  ProductAmout,
  ProductPrice,
  Hr,
  SummaryTile,
  SummaryItem,
  SummaryItemText,
  Button,
  SummaryPrice,
} from "./CartStyle";
import Navbar from "./../../Components/NavBar/Navbar";
import Announcement from "./../../Components/Accouncement/Announcement";
import Footer from "./../../Components/Footer/Footer";
import { Add, Remove } from "@material-ui/icons";
import StripeCheckout from "react-stripe-checkout";
import { userReguest } from "../../ReguestMethod";
import { useHistory } from "react-router-dom";

const Key = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userReguest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success", { data: res.data });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shoppig</TopButton>
          <TopTexts>
            <TopText>Continue Shoppig</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products?.map((product) => (
              <Product>
                <ProductDetails>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product?.color} />
                    <ProductSize>
                      <b>Size:</b> {product?.size}
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmoutContainer>
                    <Add />
                    <ProductAmout>{product.quantity}</ProductAmout>
                    <Remove />
                  </ProductAmoutContainer>
                  <ProductPrice>{product.price}</ProductPrice>
                </PriceDetails>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTile>Order Summary</SummaryTile>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryPrice> RS.{cart.total}</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shippping</SummaryItemText>
              <SummaryPrice>rs. 40 </SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryPrice> Rs.- 50</SummaryPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryPrice>RS.{cart.total}</SummaryPrice>
            </SummaryItem>
            <StripeCheckout
              name="ShopCart"
              image="https://tse4.mm.bing.net/th?id=OIP.thrxbljxhv6pFkEmg1HWgwHaDt&pid=Api&P=0&w=316&h=158"
              billingAddress
              shippingAddress
              description={`Your total is $Rs.{cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={Key}
            />
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
