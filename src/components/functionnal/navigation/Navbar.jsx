import React from "react";
import StyledNavbar from "../../ui/navigation/Navbar";
import Burger from "../../ui/navigation/Burger";
import Link from "../../ui/navigation/Link";
import Separator from "../../ui/navigation/Separator";

type Props = {};

type State = {
  active: boolean,
  scrolled: boolean
};

class Navbar extends React.PureComponent<Props, State> {
  state = {
    active: false,
    scrolled: false
  };

  handleActive = () => {
    this.setState((state: State): State => ({ active: !state.active }));
  };

  render() {
    const wrapperClassName = `Navbar-Links-Container-Wrapper ${
      this.state.active ? "Navbar-Links-Container-Wrapper--active" : ""
    }`;

    return (
      <StyledNavbar>
        <img src="asset/gdg-transparent-white.png" className="Navbar-Logo-White" />
        <img src="asset/gdg-transparent.png" className="Navbar-Logo" />
        <div className="Navbar-Links">
          <Burger onClick={this.handleActive} />
          <div className={wrapperClassName} onClick={this.handleActive}>
            <div className="Navbar-Links-Container">
              <img className="Navbar-Links-Logo" src="./asset/gdg.png" />
              <Separator />
              <Link to="/" exact>
                Accueil
              </Link>
              <Link to="/team">L'équipe</Link>
              <Link to="/about">A propos</Link>
              <Link to="https://www.meetup.com/fr-FR/GDG-Bordeaux/">Évènements</Link>
            </div>
          </div>
        </div>
      </StyledNavbar>
    );
  }
}

export default Navbar;
