import * as React from "react";
import Footer from "../../../components/functionnal/navigation/Footer";
import PageContent from "../../../components/ui/layout/PageContent";
import PageTitle from "../../../components/ui/layout/PageTitle";

const Conduct = () => (
  <>
    <PageTitle>Code de conduite</PageTitle>
    <PageContent>
      <b>Objectif</b>
    </PageContent>
    <PageContent>
      Le GDG Bordeaux est dédié à fournir une expérience sans harcèlement pour tous, sans tenir
      compte du genre, de l&apos;expression, de l&apos;orientation sexuelle, des handicaps, de
      l&apos;apparence physique, du poids, de la couleur de peau, de l&apos;âge, de la religion ou
      l&apos;absence de religion. Nous ne tolérons le harcèlement des participants sous aucune
      forme. Les images et propos à caractères sexuels ne sont appropriés en aucun cas, y compris
      dans les talks. Les participants qui ne respectent pas ces règles seront exclus des évènements
      par les organisateurs.
    </PageContent>
    <PageContent>
      <b>Sans harcèlement</b>
    </PageContent>
    <PageContent>
      Le harcèlement correspond à la liste non-exaustive suivante :<br />
      <ul>
        <li>
          Les phrases et mots qui renforcent les positions de domination basées sur le genre,
          l&apos;expression, l&apos;orientation sexuelle, les handicaps, l&apos;apparence physique,
          le poids, la couleur de peau, l&apos;âge ou la religion
        </li>
        <li>Les images à caractère sexuel dans les espaces publics</li>
        <li>La volonté délibérée d&apos;intimider, espionner ou suivre</li>
        <li>La capture sans accord de photos ou de vidéos</li>
        <li>L&apos;interruption continue des talks ou des autres évènements</li>
        <li>Les contacts physiques innapropriés</li>
        <li>L&apos;invasion des espaces personnels de chacun</li>
        <li>L&apos;attention à caractère sexuelle innapropriée</li>
        <li>Soutenir ou encourager l&apos;un ou plusieurs des points ci-dessus</li>
      </ul>
    </PageContent>
    <PageContent>
      <b>Application</b>
    </PageContent>
    <PageContent>
      Il est attendu des participants à qui il est demandé d&apos;arrêter un caractère de
      harcèlement de le faire immédiatement. Si un participant adopte un tel comportement, les
      organisateurs se réservent le droit de faire ce qui sera nécessaire afin de conserver un
      environment accueillant pour tous les participants, ce qui inclus avertir le coupable ou
      l&apos;exclure de l&apos;évènement sans remboursements (si applicable). Les organisateurs
      peuvent agir pour corriger n&apos;importe quoi qui pourrait géner l&apos;évènement ou rendre
      l&apos;environment hostile pour n&apos;importe quel participant. Nous attendons des
      participants de suivre ces règles lors de chacun des évènements ou des rencontres liées. Nous
      pensons aussi que les gens devraient suivre ces règles en dehors de nos évènements.
    </PageContent>
    <PageContent>
      <a target="_blank" href="https://2018.jsconf.eu/code-of-conduct/" rel="noopener noreferrer">
        Basé sur le code de conduite de JSConf
      </a>
    </PageContent>

    <Footer />
  </>
);

export default Conduct;
