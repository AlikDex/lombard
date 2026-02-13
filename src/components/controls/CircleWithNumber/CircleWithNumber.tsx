import { FunctionComponent } from "react";
import "./CircleWithNumber.css";

export interface ICircleWithNumber {
  number: number;
}
export const CircleWithNumber: FunctionComponent<ICircleWithNumber> = (
  props
) => {
  return <div className="circle">{props.number}</div>;
};
