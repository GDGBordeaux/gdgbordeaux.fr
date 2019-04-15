import * as React from "react";
import Footer from "../../../components/functionnal/navigation/Footer";
import PageTitle from "../../../components/ui/layout/PageTitle";
import Container from "../../../components/ui/picture/Container";
import StyledTeam from "../../../components/ui/picture/Team";
import firebase from "../../../config/firebase";

const shuffle = (array: Member[]) => array.sort(() => 0.5 - Math.random());

type Member = {
  name: string;
  image: string;
  github?: string;
  twitter?: string;
};

type Props = {};

type State = {
  data: { [s: string]: Member };
};

class Team extends React.PureComponent<Props, State> {
  state = {
    data: {}
  };

  constructor(props: Props) {
    super(props);

    this.firebaseCallback = () => {};
    this.firebaseRef = firebase.database().ref();
  }

  componentDidMount() {
    this.firebaseRef = firebase.database().ref("/members");
    this.firebaseCallback = this.firebaseRef.on("value", snap => {
      if (snap !== null) {
        this.setState({ data: snap.val() });
      }
    });
  }

  componentWillUnmount() {
    this.firebaseRef.off("value", this.firebaseCallback);
  }

  firebaseCallback: (a: firebase.database.DataSnapshot | null) => any;

  firebaseRef: firebase.database.Reference;

  render() {
    const { data } = this.state;
    const dataValues: Member[] = Object.values(data);

    return (
      <>
        <PageTitle>Découvrez l&apos;équipe du GDG Bordeaux</PageTitle>
        <Container>
          {shuffle(dataValues).map((member: Member) => (
            <StyledTeam key={member.name} image={member.image}>
              {member.name}
            </StyledTeam>
          ))}
        </Container>
        <Footer />
      </>
    );
  }
}

export default Team;
