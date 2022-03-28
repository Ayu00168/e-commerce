import React from "react";
import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
} from "./RegisterStyle";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By, creating this account you are agree with our
            <b>Pricvcy Policy</b>
          </Agreement>
        </Form>
        <Button>Sign Up</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
