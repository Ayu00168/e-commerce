import React, { useState } from "react";
import {
  Arrow,
  Container,
  ImgContainer,
  Wrapper,
  Info,
  Image,
  Slide,
  Title,
  Desc,
  Button,
} from "./sliderStyle";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 7);
    } else {
      setSlideIndex(slideIndex < 7 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <Slide bg={items.bg}>
            <ImgContainer>
              <Image src={items.img} key={items.id} />
            </ImgContainer>
            <Info>
              <Title>{items.title}</Title>
              <Desc>{items.desc}</Desc>
              <Button>Shop Now</Button>
            </Info>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
