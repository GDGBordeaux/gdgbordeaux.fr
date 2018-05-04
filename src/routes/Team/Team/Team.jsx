// @flow
import * as React from "react";

import Footer from "../../../components/functionnal/navigation/Footer";
import PageTitle from "../../../components/ui/layout/PageTitle";
import Container from "../../../components/ui/picture/Container";
import StyledTeam from "../../../components/ui/picture/Team";

const Team = (): React.Node => (
  <React.Fragment>
    <PageTitle>Découvrez l'équipe du GDG Bordeaux</PageTitle>
    <Container>
      <StyledTeam image="./asset/brunosabot.jpg">Bruno Sabot</StyledTeam>
      <StyledTeam image="./asset/sebastiendescamps.jpg">Sébastien Descamps</StyledTeam>
      <StyledTeam image="./asset/ludovicgouyou.jpg">Ludovic Gouyou</StyledTeam>
      <StyledTeam image="./asset/marcabouchacra.jpg">Marc Abou Chacra</StyledTeam>
      <StyledTeam image="./asset/etiennegrandiervazeille.jpg">Etienne Grandier-Vazeille</StyledTeam>
    </Container>
    <Footer />
  </React.Fragment>
);

export default Team;
