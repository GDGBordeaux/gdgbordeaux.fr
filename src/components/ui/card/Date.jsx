// @flow
import * as React from "react";

import "./Date.css";

type Props = {
  children: Date | string
};

const dateLang: string = "fr-FR";
// Known default from flow
// eslint-disable-next-line no-undef
const dateOption: Intl$DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric"
};
const dateToString = (date: Date): string => date.toLocaleDateString(dateLang, dateOption);

const DateComponent = ({ children }: Props): React.Node => (
  <div>{dateToString(new Date(children))}</div>
);

export default DateComponent;
