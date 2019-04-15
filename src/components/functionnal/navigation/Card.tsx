import * as React from "react";
import firebase from "../../../config/firebase";
import StyledCard from "../../ui/card/Card";
import Content from "../../ui/card/Content";
import StyledDate from "../../ui/card/Date";
import Favorite from "../../ui/card/Favorite";
import FavoriteBox from "../../ui/card/FavoriteBox";
import Footer from "../../ui/card/Footer";
import Header from "../../ui/card/Header";
import Paragraph from "../../ui/card/Paragraph";
import Title from "../../ui/card/Title";

type Props = {
  id: string;
  image: string;
  title: string;
  content: string[];
  date: Date | string;
  favorites?: { [s: string]: string };
};

const isActive = (favorites: { [s: string]: string }) => {
  const currentUser = firebase.auth().currentUser;

  if (currentUser === null) {
    return false;
  }

  return Object.values(favorites).indexOf(currentUser.uid) > -1;
};

const updateFavorite = (id: string) => () => {
  const favorites: firebase.database.Reference = firebase.database().ref(`/posts/${id}/favorites`);
  favorites.once("value").then(snapshot => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser === null) {
      return;
    }

    const userId: string = currentUser.uid;
    const favs: { [s: string]: string } = snapshot.val() || {};

    if (isActive(favs)) {
      if (Object.values(favs).length === 1) {
        favorites.remove();
      } else {
        favorites.child(userId).remove();
      }
    } else {
      favs[userId] = userId;
      favorites.update(favs);
    }
  });
};

const Card = ({ content, date, favorites = {}, id, image, title }: Props) => (
  <StyledCard>
    <Header image={image} />
    <Content>
      <Title>{title}</Title>
      {content.map((paragraph: string) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
    </Content>
    <Footer>
      <StyledDate>{date}</StyledDate>
      <FavoriteBox onClick={updateFavorite(id)}>
        <Favorite active={isActive(favorites)} />
        {Object.values(favorites).length}
      </FavoriteBox>
    </Footer>
  </StyledCard>
);

Card.defaultProps = {
  favorites: {}
};

export default Card;
