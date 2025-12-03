import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as Clipboard from "expo-clipboard";

import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";
import Icon from "../../components/Icon";
import colors from "../../constants/colors";
import { Toast } from "react-native-toast-message/lib/src/Toast";
const { width: SCREEN_WIDTH } = Dimensions.get("window");

type OutputScreenRouteProp = RouteProp<RootStackParamList, "OutputScreen">;

type Props = {
  route: OutputScreenRouteProp;
};

export default function OutputScreen({ route }: Props) {
  const { imageUrl, userPrompt, logoStyle } = route.params;
  const navigation = useNavigation();

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(userPrompt);
    Toast.show({
      type: "success",
      text1: "Copied to Clipboard",
      text2: "Your prompt has been copied successfully.",
    });
  };

  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your Design</Text>
        <TouchableOpacity onPress={goBackHandler}>
          <Icon name="close-outline" size={25} color={colors.white} />
        </TouchableOpacity>
      </View>

      <Image source={imageUrl} style={styles.image} resizeMode="contain" />

      <View style={styles.promptContainer}>
        <TouchableOpacity style={styles.headerContainer}>
          <Text style={{ color: colors.white, marginBottom: 5 }}>Prompt:</Text>
          <TouchableOpacity
            onPress={copyToClipboard}
            style={{ flexDirection: "row", alignItems: "baseline", gap: 5 }}
          >
            <Icon name="copy-outline" size={15} color={colors.dark300} />
            <Text style={styles.copyText}>Copy</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <Text style={styles.promptText}>{userPrompt}</Text>

        <View style={styles.logoStyleContainer}>
          <Text style={styles.logoStyleText}>{logoStyle || "No Style"}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "700",
  },
  image: {
    width: SCREEN_WIDTH - 20,
    height: SCREEN_WIDTH - 20,
    marginTop: 20,
    borderRadius: 16,
  },
  promptContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: colors.dark500,
    borderRadius: 16,
  },
  promptText: {
    color: colors.white,
    fontSize: 16,
  },
  copyText: {
    color: colors.dark300,
    fontSize: 14,
    marginBottom: 5,
  },
  logoStyleContainer: {
    marginTop: 10,
    alignSelf: "flex-start",
    backgroundColor: colors.dark400,
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  logoStyleText: {
    color: colors.white,
    fontSize: 12,
  },
});
