// @flow
import * as React from "react";
import type { Reference } from "firebase/database";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import FakeCard from "../../../components/ui/card/FakeCard";
import Card from "../../../components/functionnal/navigation/Card";
import CardContainer from "../../../components/ui/card/CardContainer";
import Hero from "../../../components/ui/layout/Hero";
import Footer from "../../../components/functionnal/navigation/Footer";

type Post = {
  content: string[],
  date: string,
  image: string,
  title: string,
  favorites?: { [string]: string }
};
type FakePost = {
  fakeCard: boolean,
  date?: string
};

type Props = {};

type State = {
  data: { [string]: Post | FakePost }
};

class Home extends React.PureComponent<Props, State> {
  state = {
    data: {
      "0": { fakeCard: true },
      "1": { fakeCard: true },
      "2": { fakeCard: true },
      "3": { fakeCard: true }
    }
  };

  componentDidMount() {
    this.firebaseRef = firebase.database().ref("/posts");
    this.firebaseCallback = this.firebaseRef.on("value", snap => {
      this.setState({ data: snap.val() });
    });
  }

  componentWillUnmount() {
    this.firebaseRef.off("value", this.firebaseCallback);
  }

  firebaseCallback: () => void;

  firebaseRef: Reference;

  render(): React.Node {
    const { data } = this.state;
    const dataKeys: string[] = Object.keys(data);

    return (
      <React.Fragment>
        <Hero>Google Developer Group Bordeaux</Hero>
        <CardContainer>
          {dataKeys
            .sort((a, b) => {
              if (!data[a].date) {
                return -1;
              }
              if (!data[b].date) {
                return 1;
              }

              return new Date(data[a].date) < new Date(data[b].date) ? 1 : -1;
            })
            .map(key =>
              data[key].fakeCard === true ? (
                <FakeCard key={key} />
              ) : (
                <Card key={key} id={key} {...data[key]} />
              )
            )}
        </CardContainer>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
