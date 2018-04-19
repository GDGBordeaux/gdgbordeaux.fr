// @flow
import * as React from "react";

import "./Date.css";

type Props = {
  children: Date
};

const dateLang: string = "fr-FR";
const dateOption: Date$LocaleOptions = {
  day: "numeric",
  month: "long",
  year: "numeric"
};
const dateToString = (date: Date): string => date.toLocaleDateString(dateLang, dateOption);

const DateComponent = (props: Props): React.Node => <div>{dateToString(props.children)}</div>;

export default DateComponent;
