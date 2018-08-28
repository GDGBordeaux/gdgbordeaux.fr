// @flow
import * as React from "react";

import PageContent from "../../../components/ui/layout/PageContent";
import Footer from "../../../components/functionnal/navigation/Footer";
import PageTitle from "../../../components/ui/layout/PageTitle";

const Conduct = (): React.Node => (
  <React.Fragment>
    <PageTitle>Code de conduite</PageTitle>
    <PageContent>
      <b>Objectif</b>
    </PageContent>
    <PageContent>
      Le GDG Bordeaux est dédié à fournir une expérience sans harcèlement pour tous, sans tenir
      compte du genre, de l'expression, de l'orientation sexuelle, des handicaps, de l'apparence
      physique, du poids, de la couleur de peau, de l'âge, de la religion ou l'absence de religion.
      Nous ne tolérons le harcèlement des participants sous aucune forme. Les images et propos à
      caractères sexuels ne sont appropriés en aucun cas, y compris dans les talks. Les participants
      qui ne respectent pas ces règles seront exclus des évènements par les organisateurs.
    </PageContent>
    <PageContent>
      <b>Sans harcèlement</b>
    </PageContent>
    <PageContent>
      Le harcèlement correspond à la liste non-exaustive suivante :<br />
      <ul>
        <li>
          Les phrases et mots qui renforcent les positions de domination basées sur le genre,
          l'expression, l'orientation sexuelle, les handicaps, l'apparence physique, le poids, la
          couleur de peau, l'âge ou la religion
        </li>
        <li>Les images à caractère sexuel dans les espaces publics</li>
        <li>La volonté délibérée d'intimider, espionner ou suivre</li>
        <li>La capture sans accord de photos ou de vidéos</li>
        <li>L'interruption continue des talks ou des autres évènements</li>
        <li>Les contacts physiques innapropriés</li>
        <li>L'invasion des espaces personnels de chacun</li>
        <li>L'attention à caractère sexuelle innapropriée</li>
        <li>Soutenir ou encourager l'un ou plusieurs des points ci-dessus</li>
      </ul>
    </PageContent>
    <PageContent>
      <b>Application</b>
    </PageContent>
    <PageContent>
      Il est attendu des participants à qui il est demandé d'arrêter un caractère de harcèlement le
      faire immédiatement. Si un participant adopte un tel comportement, les organisateurs se
      réservent le droit de faire ce qui sera nécessaire afin de conserver un environment
      accueillant pour tous les participants, ce qui inclus avertir le coupable ou l'exclure de
      l'évènement sans remboursements (si applicable). Les organisateurs peuvent agir pour corriger
      n'importe quoi qui pourrait géner l'évènement ou rendre l'environment hostile pour n'importe
      quel participant. Nous attendons des participantsde suivre ces règles lors de chacun des
      évènements ou des rencontres liées. Nous pensons aussi que les gens devraient suivre ces
      règles aussi en dehors de nos évènements.
    </PageContent>
    <PageContent>
      <a target="_blank" href="https://2018.jsconf.eu/code-of-conduct/">
        Basé sur le code de conduite de JSConf
      </a>
    </PageContent>

    <Footer />
  </React.Fragment>
);

export default Conduct;
