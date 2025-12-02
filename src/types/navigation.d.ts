import { ImageSourcePropType } from "react-native";

export type RootStackParamList = {
  InputScreen: undefined;
  OutputScreen: {
    imageUrl: ImageSourcePropType;
    userPrompt: string;
    logoStyle?: string;
  };
};
