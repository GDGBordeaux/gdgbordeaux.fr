// @flow
import * as React from "react";

import PageContent from "../../../components/ui/layout/PageContent";
import Footer from "../../../components/functionnal/navigation/Footer";
import PageTitle from "../../../components/ui/layout/PageTitle";

const About = (): React.Node => (
  <React.Fragment>
    <PageTitle>A propos du GDG Bordeaux</PageTitle>
    <PageContent>
      Google Developer Group (GDG) Bordeaux est un regroupement de développeurs passionnés par les
      technologies et plateformes de Google : Android, Chrome, Google Apps, GWT, AppEngine, etc.
      partout dans le monde.
    </PageContent>

    <PageContent>
      Le groupe a pour vocation de se réunir régulièrement autour des thèmes suivants:
      <ul>
        <li>Conférences sur les technologies Google et autres</li>
        <li>
          Des apéros autour de sujets centraux afin de se rencontrer et boire un verre ensemble
        </li>
        <li>Des concours tels que le Hackathon</li>
        <li>La retransmission d&apos;évènements majeurs Google I/O, Keynotes, etc.</li>
      </ul>
    </PageContent>
    <PageContent>
      <b>Attention :</b> le GDG Bordeaux est un groupe indépendant. Nos activités et nos opinions
      exprimées ici ne doivent en aucun cas être affilié à Google, l&apos;entreprise.
      <br />
    </PageContent>
    <PageContent>
      En revanche, vous pouvez retrouver la liste complète des GDG à l&apos;adresse suivante :{" "}
      <a href="http://developpers.google.com/groups" target="_blank" rel="noopener noreferrer">
        http://developpers.google.com/groups
      </a>
    </PageContent>
    <Footer />
  </React.Fragment>
);

export default About;
