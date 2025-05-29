import { ReactNode } from "react";

export interface ICell {
  row: number;
  col: number;
  children?: ReactNode;
}