import * as React from "react";

import "./FooterLinks.css";

type Props = {
  children: React.ReactNode[];
};

type State = {
  active: boolean;
};

class FooterLinks extends React.PureComponent<Props, State> {
  state = {
    active: false
  };

  showMoreLinks = () => this.setState((state: State): State => ({ active: !state.active }));

  render() {
    const { children } = this.props;
    const { active } = this.state;
    const moreLinksActive = active ? "FooterLinks-button-hidden" : "FooterLinks-button-show";

    if (children.length > 4) {
      return (
        <div className="FooterLinks">
          {children.map((value, index) => {
            if (index <= 3) {
              return value;
            }
          })}
          <div className={moreLinksActive} onClick={this.showMoreLinks} role="button" />
          <div style={active ? { display: "block" } : { display: "none" }}>
            {children.map((value, index) => {
              if (index > 3) {
                return value;
              }
            })}
          </div>
        </div>
      );
    }
    return <div className="FooterLinks">{children}</div>;
  }
}

export default FooterLinks;
