import { ImageSourcePropType } from "react-native";
import logo1 from "../assets/logo-styles/monogram.png";

export interface LogoType {
  name: string;
  logo: ImageSourcePropType;
  key: string;
}

export const LOGOS: LogoType[] = [
  {
    key: "monogram",
    name: "Monogram",
    logo: logo1,
  },
  {
    key: "monogram2",
    name: "Monogram2",
    logo: logo1,
  },
  {
    key: "monogram3",
    name: "Monogram3",
    logo: logo1,
  },
  {
    key: "monogram4",
    name: "Monogram4",
    logo: logo1,
  },
];
