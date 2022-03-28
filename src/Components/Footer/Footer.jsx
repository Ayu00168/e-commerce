import React from "react";
import {
  Center,
  ContactItem,
  Container,
  Desc,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from "./FooterStyle";

import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ShopCart</Logo>
        <Desc>
          Random Text Generator is a web application which provides true random
          text which you can use in your documents or web designs. How does it
          work? First we took many books available on project
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful List</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashions</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          203 , Adinath Apartment , Bhubneshwar
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +91 9358226453
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          iam13@gmail.com
        </ContactItem>
        <Payment src="https://tse4.mm.bing.net/th?id=OIP.Bf6VbmO_iGva4RK4v0NLSgHaCl&pid=Api&P=0&w=513&h=179" />
      </Right>
    </Container>
  );
};

export default Footer;
