// @flow
import * as React from "react";
import type { Reference } from "firebase/database";
import firebase from "../../../config/firebase";

import Footer from "../../../components/functionnal/navigation/Footer";
import PageTitle from "../../../components/ui/layout/PageTitle";
import Container from "../../../components/ui/picture/Container";
import StyledTeam from "../../../components/ui/picture/Team";

const shuffle = array => array.sort(() => 0.5 - Math.random());

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
  state = {
    data: {}
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

  firebaseCallback: () => void;

  firebaseRef: Reference;

  render() {
    const { data } = this.state;
    const dataKeys: string[] = Object.keys(data);

    return (
      <React.Fragment>
        <PageTitle>Découvrez l&apos;équipe du GDG Bordeaux</PageTitle>
        <Container>
          {shuffle(dataKeys).map(member => (
            <StyledTeam key={data[member].name} image={data[member].image}>
              {data[member].name}
            </StyledTeam>
          ))}
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Team;
