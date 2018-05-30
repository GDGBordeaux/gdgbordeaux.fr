// @flow
import * as React from "react";
import firebase from "../../../config/firebase";
import type { Reference } from "firebase/database";

import Footer from "../../../components/functionnal/navigation/Footer";
import PageTitle from "../../../components/ui/layout/PageTitle";
import Container from "../../../components/ui/picture/Container";
import StyledTeam from "../../../components/ui/picture/Team";

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);

    counter--;

    const temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

type Member = {
  name: string,
  image: string,
  github?: string,
  twitter?: string
};

type Props = {};

type State = {
  data: { [string]: Member }
};

class Team extends React.PureComponent<Props, State> {
  firebaseRef: Reference;
  firebaseCallback: () => void;
  state = {
    data: []
  };

  componentDidMount() {
    this.firebaseRef = firebase.database().ref("/members");
    this.firebaseCallback = this.firebaseRef.on("value", snap => {
      this.setState({ data: snap.val() });
    });
  }

  componentWillUnmount() {
    this.firebaseRef.off("value", this.firebaseCallback);
  }

  render() {
    const data: string[] = Object.keys(this.state.data);

    return (
      <React.Fragment>
        <PageTitle>Découvrez l'équipe du GDG Bordeaux</PageTitle>
        <Container>
          {shuffle(data).map(member => (
            <StyledTeam key={this.state.data[member].name} image={this.state.data[member].image}>
              {this.state.data[member].name}
            </StyledTeam>
          ))}
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Team;
