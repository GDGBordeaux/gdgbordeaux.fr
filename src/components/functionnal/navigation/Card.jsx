// @flow
import * as React from "react";
import Header from "../../ui/card/Header";
import Title from "../../ui/card/Title";
import Paragraph from "../../ui/card/Paragraph";
import Content from "../../ui/card/Content";
import Footer from "../../ui/card/Footer";
import StyledDate from "../../ui/card/Date";
import StyledCard from "../../ui/card/Card";
import Favorite from "../../ui/card/Favorite";
import FavoriteBox from "../../ui/card/FavoriteBox";

type Props = {
  image: string,
  title: string,
  content: string[],
  date: Date,
  favorites: number
};

const Card = (props: Props): React.Node => {
  return (
    <StyledCard>
      <Header image={props.image} />
      <Content>
        <Title>{props.title}</Title>
        {props.content.map((paragraph: string): React.Node => <Paragraph>{paragraph}</Paragraph>)}
      </Content>
      <Footer>
        <StyledDate>{props.date}</StyledDate>
        <FavoriteBox>
          <Favorite /> {props.favorites}
        </FavoriteBox>
      </Footer>
    </StyledCard>
  );
};

export default Card;
