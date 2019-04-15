import React from "react";
import Burger from "../../ui/navigation/Burger";
import Link from "../../ui/navigation/Link";
import StyledNavbar from "../../ui/navigation/Navbar";
import Separator from "../../ui/navigation/Separator";
import Share from "./Share";

type Props = {};

type State = {
  active: boolean;
};

class Navbar extends React.PureComponent<Props, State> {
  state = {
    active: false
  };

  handleActive = () => {
    this.setState((state: State): State => ({ active: !state.active }));
  };

  handleActiveEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      this.handleActive();
    }
  };

  render() {
    const { active } = this.state;
    const wrapperClassName = `Navbar-Links-Container-Wrapper ${
      active ? "Navbar-Links-Container-Wrapper--active" : ""
    }`;

    return (
      <StyledNavbar>
        <img src="asset/banner-white.svg" className="Navbar-Logo-White" alt="Logo GDG Bordeaux" />
        <img src="asset/banner-grey.svg" className="Navbar-Logo" alt="" />
        <div className="Navbar-Links">
          <Burger onClick={this.handleActive} />
          <div
            className={wrapperClassName}
            onClick={this.handleActive}
            onKeyPress={this.handleActiveEnter}
            role="button"
            tabIndex={-1}
          >
            <div className="Navbar-Links-Container">
              <img className="Navbar-Links-Logo" src="./asset/gdg.png" alt="" />
              <Separator />
              <Link to="/" exact>
                Accueil
              </Link>
              <Link to="/team">L&apos;équipe</Link>
              <Link to="/about">A propos</Link>
              <Link to="/codeofconduct">Code de conduite</Link>
              <Link to="https://www.meetup.com/fr-FR/GDG-Bordeaux/">Évènements</Link>
              <Share />
            </div>
          </div>
        </div>
      </StyledNavbar>
    );
  }
}

export default Navbar;
