import { ImageSourcePropType } from "react-native";
import monogram from "../assets/logo-styles/monogram.png";
import abstract from "../assets/logo-styles/abstract.png";
import mascot from "../assets/logo-styles/mascot.png";

export interface LogoType {
  name: string;
  logo: ImageSourcePropType;
  key: string;
}

export const LOGOS: LogoType[] = [
  {
    key: "monogram",
    name: "Monogram",
    logo: monogram,
  },
  {
    key: "abstract",
    name: "Abstract",
    logo: abstract,
  },
  {
    key: "mascot",
    name: "Mascot",
    logo: mascot,
  },
];
