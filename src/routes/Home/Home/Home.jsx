// @flow
import * as React from "react";

import Card from "../../../components/functionnal/navigation/Card";
import CardContainer from "../../../components/ui/card/CardContainer";
import Hero from "../../../components/ui/layout/Hero";
import Footer from "../../../components/ui/footer/Footer";

const date: Date = new Date();

const Home = (): React.Node => (
  <React.Fragment>
    <Hero>Google Developer Group Bordeaux</Hero>
    <CardContainer>
      <Card
        image="./asset/io-social-banner.png"
        title="Google I/O 201"
        date={date}
        favorites={42}
        content={[
          "I/O features hands-on learning, Google's latest developer products, and technical talks given by the engineers who are developing our latest APIs and tools–plus a few surprises along the way.",
          "I/O features hands-on learning, Google's latest developer products, and technical talks given by the engineers who are developing our latest APIs and tools–plus a few surprises along the way."
        ]}
      />
    </CardContainer>
    <Footer>
      <span />
      <span />
    </Footer>
  </React.Fragment>
);

export default Home;
