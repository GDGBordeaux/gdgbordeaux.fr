// @flow
import * as React from "react";
import firebase from "../../../config/firebase";
import type { Reference } from "firebase/database";
// import type { Reference } from "../../../../flow-typed/firebase/database";

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

type Props = {};

type State = {
  data: { [string]: Post }
};

class Home extends React.PureComponent<Props, State> {
  firebaseRef: Reference;
  firebaseCallback: () => void;
  state = {
    data: {
      0: { fakeCard: true },
      1: { fakeCard: true },
      2: { fakeCard: true },
      3: { fakeCard: true },
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

  render(): React.Node {
    const data: string[] = Object.keys(this.state.data);

    return <React.Fragment>
        <Hero>Google Developer Group Bordeaux</Hero>
        <CardContainer>
          {data.map(key => this.state.data[key].fakeCard === true
            ? <FakeCard />
            : <Card key={key} id={key} {...this.state.data[key]} />
          )}
        </CardContainer>
        <Footer />
      </React.Fragment>;
  }
}

export default Home;
