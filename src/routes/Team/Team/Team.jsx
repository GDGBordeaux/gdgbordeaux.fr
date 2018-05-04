// @flow
import * as React from "react";

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

const team = [
  { image: "./asset/brunosabot.jpg", name: "Bruno Sabot" },
  { image: "./asset/sebastiendescamps.jpg", name: "Sébastien Descamps" },
  { image: "./asset/ludovicgouyou.jpg", name: "Ludovic Gouyou" },
  { image: "./asset/marcabouchacra.jpg", name: "Marc Abou Chacra" },
  { image: "./asset/etiennegrandiervazeille.jpg", name: "Etienne Grandier-Vazeille" },
];

const Team = (): React.Node => (
  <React.Fragment>
    <PageTitle>Découvrez l'équipe du GDG Bordeaux</PageTitle>
    <Container>
      {shuffle(team).map(
        member => <StyledTeam key={member.name} image={member.image}>{member.name}</StyledTeam>
      )}
    </Container>
    <Footer />
  </React.Fragment>
);

export default Team;
