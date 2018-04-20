// @flow
import * as React from "react";

import PageContent from "../../../components/ui/layout/PageContent";
import Footer from "../../../components/ui/footer/Footer";
import PageTitle from "../../../components/ui/layout/PageTitle";
import Container from "../../../components/ui/picture/Container";
import StyledTeam from "../../../components/ui/picture/Team";

const Team = (): React.Node => (
  <React.Fragment>
    <PageTitle>Découvrez l'équipe du GDG Bordeaux</PageTitle>
    <PageContent>
      Ça sounds good, tu vois au passage qu'il n'y a rien de concret car on vit dans une réalité
      qu'on a créée et que j'appelle illusion et parfois c'est bon parfois c'est pas bon. Donc on
      n'est jamais seul spirituellement !
    </PageContent>
    <PageContent>
      Tu comprends, si vraiment tu veux te rappeler des souvenirs de ton perroquet, entre penser et
      dire, il y a un monde de différence et parfois c'est bon parfois c'est pas bon. Et tu as envie
      de le dire au monde entier, including yourself.
    </PageContent>
    <PageContent>
      Si je t'emmerde, tu me le dis, même si on frime comme on appelle ça en France... en vérité, la
      vérité, il n'y a pas de vérité et je ne cherche pas ici à mettre un point ! Donc on n'est
      jamais seul spirituellement !
    </PageContent>
    <PageContent>
      Je me souviens en fait, j'ai vraiment une grande mission car c'est un très, très gros travail
      et c'est très, très beau d'avoir son propre moi-même ! Et j'ai toujours grandi parmi les
      chiens.
    </PageContent>
    <PageContent>
      Même si on se ment, ce n'est pas un simple sport car on vit dans une réalité qu'on a créée et
      que j'appelle illusion et je ne cherche pas ici à mettre un point ! C'est cette année que j'ai
      eu la révélation !
    </PageContent>
    <Container>
      <StyledTeam image="./asset/brunosabot.jpg">Bruno Sabot</StyledTeam>
      <StyledTeam image="./asset/sebastiendescamps.jpg">Sébastien Descamp</StyledTeam>
      <StyledTeam image="./asset/ludovicgouyou.jpg">Ludovic Gouyou</StyledTeam>
      <StyledTeam image="./asset/marcabouchacra.jpg">Marc Abou Chacra</StyledTeam>
      <StyledTeam image="./asset/etiennegrandiervazeille.jpg">Etienne Grandier-Vazeille</StyledTeam>
    </Container>
    <Footer>
      <span />
      <span />
    </Footer>
  </React.Fragment>
);

export default Team;
