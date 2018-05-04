// @flow
import * as React from "react";
import firebase from "firebase";

import Header from "../../ui/card/Header";
import Title from "../../ui/card/Title";
import Paragraph from "../../ui/card/Paragraph";
import Content from "../../ui/card/Content";
import Footer from "../../ui/card/Footer";
import StyledDate from "../../ui/card/Date";
import StyledCard from "../../ui/card/Card";
import Favorite from "../../ui/card/Favorite";
import FavoriteBox from "../../ui/card/FavoriteBox";
import type { Reference } from "firebase/database";

type Props = {
  id: string,
  image: string,
  title: string,
  content: string[],
  date: Date | string,
  favorites: { [string]: string }
};

const updateFavorite = id => () => {
  const favorites: Reference = firebase.database().ref(`/posts/${id}/favorites`);
  favorites.once("value").then(snapshot => {
    if (firebase.auth().currentUser === null) {
      return;
    }

    const userId: string = firebase.auth().currentUser.uid;
    const favs: { [string]: string } = snapshot.val() || {};

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

const isActive = favorites => {
  if (firebase.auth().currentUser === null) {
    return false;
  }

  return Object.values(favorites).indexOf(firebase.auth().currentUser.uid) > -1;
};

const Card = (props: Props): React.Node => {
  return (
    <StyledCard>
      <Header image={props.image} />
      <Content>
        <Title>{props.title}</Title>
        {props.content.map((paragraph: string): React.Node => (
          <Paragraph key={paragraph}>{paragraph}</Paragraph>
        ))}
      </Content>
      <Footer>
        <StyledDate>{props.date}</StyledDate>
        <FavoriteBox onClick={updateFavorite(props.id)}>
          <Favorite active={isActive(props.favorites)} /> {Object.values(props.favorites).length}
        </FavoriteBox>
      </Footer>
    </StyledCard>
  );
};

Card.defaultProps = {
  favorites: {}
};

export default Card;
