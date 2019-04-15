import * as React from "react";
import Card from "../../../components/functionnal/navigation/Card";
import Footer from "../../../components/functionnal/navigation/Footer";
import CardContainer from "../../../components/ui/card/CardContainer";
import FakeCard from "../../../components/ui/card/FakeCard";
import Hero from "../../../components/ui/layout/Hero";
import firebase from "../../../config/firebase";

type Post = {
  content: string[];
  date: string;
  image: string;
  title: string;
  favorites?: { [s: string]: string };
};
type Props = {};

type State = {
  data: { [s: string]: Post };
  loaded: Boolean;
};

class Home extends React.PureComponent<Props, State> {
  state: State = {
    data: {},
    loaded: false
  };

  constructor(props: Props) {
    super(props);

    this.firebaseCallback = () => {};
    this.firebaseRef = firebase.database().ref();
  }

  componentDidMount() {
    this.firebaseRef = firebase.database().ref("/posts");
    this.firebaseCallback = this.firebaseRef.on("value", snap => {
      if (snap !== null) {
        this.setState({ data: snap.val(), loaded: true });
      }
    });
  }

  componentWillUnmount() {
    this.firebaseRef.off("value", this.firebaseCallback);
  }

  firebaseCallback: (a: firebase.database.DataSnapshot | null) => any;

  firebaseRef: firebase.database.Reference;

  render() {
    const { data, loaded } = this.state;
    const dataKeys: string[] = Object.keys(data);

    return (
      <>
        <Hero>Google Developer Group Bordeaux</Hero>
        <CardContainer>
          {loaded ? (
            dataKeys
              .sort((a, b) => {
                const aDate = data[a].date;
                const bDate = data[b].date;

                if (aDate === undefined) {
                  return -1;
                }
                if (bDate === undefined) {
                  return 1;
                }

                return new Date(aDate) < new Date(bDate) ? 1 : -1;
              })
              .map(key => (
                <Card
                  key={key}
                  id={key}
                  content={data[key].content}
                  date={data[key].date}
                  image={data[key].image}
                  title={data[key].title}
                  favorites={data[key].favorites}
                />
              ))
          ) : (
            <>
              <FakeCard />
              <FakeCard />
              <FakeCard />
              <FakeCard />
            </>
          )}
        </CardContainer>
        <Footer />
      </>
    );
  }
}

export default Home;
