import * as React from "react";

import StyledFooter from "../../ui/footer/Footer";
import FooterLink from "../../ui/footer/FooterLink";
import FooterTitle from "../../ui/footer/FooterTitle";
import FooterLinks from "../../ui/footer/FooterLinks";

import { ReactComponent as Meetup } from "../../ui/svg/meetup.svg";
import { ReactComponent as Twitter } from "../../ui/svg/twitter.svg";
import { ReactComponent as Youtube } from "../../ui/svg/youtube.svg";
import { ReactComponent as Medium } from "../../ui/svg/medium.svg";
import { ReactComponent as GDG } from "../../ui/svg/gdg.svg";

const Footer = () => (
  <StyledFooter>
    <div />
    <FooterLinks>
      <FooterTitle>Retrouvez-nous !</FooterTitle>
      <FooterLink url="https://www.meetup.com/fr-FR/GDG-Bordeaux/" label="Meetup Bordeaux">
        <Meetup />
      </FooterLink>
      <FooterLink url="https://twitter.com/gdgbordeaux" label="@gdgbordeaux">
        <Twitter />
      </FooterLink>
      <FooterLink
        url="https://www.youtube.com/channel/UCACWwpy_BkcvWJA3Qu-m1dQ"
        label="GDG Bordeaux"
      >
        <Youtube />
      </FooterLink>
    </FooterLinks>

    <FooterLinks>
      <FooterTitle>A Paris</FooterTitle>
      <FooterLink url="https://www.meetup.com/fr-FR/gdg-paris/" label="Meetup Paris">
        <Meetup />
      </FooterLink>
      <FooterLink url="https://twitter.com/GDGParis" label="@GDGParis">
        <Twitter />
      </FooterLink>
      <FooterLink url="https://www.youtube.com/user/GDGParis/" label="GDG-Paris">
        <Youtube />
      </FooterLink>
    </FooterLinks>

    <FooterLinks>
      <FooterTitle>A Toulouse</FooterTitle>
      <FooterLink url="https://www.meetup.com/fr-FR/GDG-Toulouse/" label="Meetup GDG Toulouse">
        <Meetup />
      </FooterLink>
      <FooterLink url="https://twitter.com/gdgtoulouse" label="@GDGToulouse">
        <Twitter />
      </FooterLink>
      <FooterLink url="https://www.youtube.com/user/ToulouseAUG" label="GDG Toulouse">
        <Youtube />
      </FooterLink>
    </FooterLinks>

    <FooterLinks>
      <FooterTitle>A l'Ouest</FooterTitle>
      <FooterLink url="https://www.meetup.com/fr-FR/GDG-Nantes/" label="Meetup Nantes">
        <Meetup />
      </FooterLink>
      <FooterLink url="https://twitter.com/gdgnantes" label="@gdgnantes">
        <Twitter />
      </FooterLink>
      <FooterLink
        url="https://www.meetup.com/fr-FR/GDG-Code-dArmor/"
        label="Meetup GDG Code d'Amor"
      >
        <Meetup />
      </FooterLink>
      <FooterLink url="https://twitter.com/codedarmor" label="@codedarmor">
        <Twitter />
      </FooterLink>
      <FooterLink
        url="https://www.youtube.com/channel/UC3MIXkWlQAvzQLa3ALbSqhg"
        label="Code d'Armor"
      >
        <Youtube />
      </FooterLink>
    </FooterLinks>

    <FooterLinks>
      <FooterTitle>Et dans le monde entier</FooterTitle>
      <FooterLink url="https://developers.google.com/community/gdg/" label="Find your group">
        <GDG />
      </FooterLink>
      <FooterLink url="https://www.meetup.com/fr-FR/pro/gdg" label="Meetups autour du monde">
        <Meetup />
      </FooterLink>
      <FooterLink url="https://twitter.com/gdg" label="@gdg">
        <Twitter />
      </FooterLink>
      <FooterLink
        url="https://www.youtube.com/channel/UC_x5XG1OV2P6uZZ5FSM9Ttw"
        label="Google Developers"
      >
        <Youtube />
      </FooterLink>
      <FooterLink
        url="https://www.youtube.com/channel/UCXDc-ckqru8BgppXbCt0APw"
        label="Google Developers Groups"
      >
        <Youtube />
      </FooterLink>
      <FooterLink url="https://developers.google.com/" label="Google Developers">
        <GDG />
      </FooterLink>
      <FooterLink url="https://developers.googleblog.com/" label="Google Developers Blog">
        <GDG />
      </FooterLink>
      <FooterLink url="https://medium.com/google-developers" label="Medium Google Developers">
        <Medium />
      </FooterLink>
      <FooterLink url="http://www.gdgtoulouse.fr/" label="Toulouse">
        <GDG />
      </FooterLink>
      <FooterLink url="https://codedarmor.fr/" label="Code d'Amor">
        <GDG />
      </FooterLink>
      <FooterLink url="https://www.youtube.com/user/francegdg/" label="GDG-France">
        <Youtube />
      </FooterLink>
    </FooterLinks>
    <div />
  </StyledFooter>
);

export default Footer;
