import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import colors from "../../constants/colors";
import Icon from "../../components/Icon";
import LogoSelector from "../../components/logo-selecter/LogoSelector";
import StatusChip, { Status } from "../../components/status-chip/StatusChip";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";
import { getRandom } from "../../utils/randomTime";
import Toast from "react-native-toast-message";
import { LinearGradient } from "expo-linear-gradient";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const MAX_INPUT_LENGTH = 500;

export default function InputScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [userInput, setUserInput] = useState("");
  const [selectedLogoStyle, setSelectedLogoStyle] = useState<
    string | undefined
  >();
  const [chipStatus, setChipStatus] = useState<Status | null>(null);

  const generateButtonHandler = () => {
    console.log("Generate button pressed with input:", userInput);
    if (!userInput.trim()) {
      Toast.show({
        type: "error",
        text1: "Input Required",
        text2: "Please enter a prompt to generate a logo. ",
      });
      return;
    }
    setChipStatus(Status.InProgress);
    const seconds = getRandom(1, 5);
    const isFailed = getRandom(1, 10) <= 2;

    setTimeout(() => {
      setChipStatus(isFailed ? Status.Failed : Status.Completed);
    }, seconds * 1000);
  };

  const handleStatusPress = () => {
    if (chipStatus === Status.Completed) {
      navigation.navigate("OutputScreen", {
        imageUrl: require("../../assets/logo.png"),
        userPrompt: userInput,
        logoStyle: selectedLogoStyle,
      });
    } else if (chipStatus === Status.Failed) {
      generateButtonHandler();
    }
  };

  return (
    <View style={styles.container}>
      {chipStatus && (
        <StatusChip
          status={chipStatus}
          onPress={
            chipStatus === Status.InProgress ? undefined : handleStatusPress
          }
        />
      )}

      <View style={styles.section}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Enter Your Prompt</Text>
          <View style={styles.surpriseMeContainer}>
            <Icon name="dice" size={20} color={colors.white} />
            <Text style={styles.surpriseMeText}>Surprise Me</Text>
          </View>
        </View>

        <View>
          <TextInput
            placeholder="e.g., A futuristic logo for a tech startup"
            style={styles.input}
            multiline
            maxLength={MAX_INPUT_LENGTH}
            placeholderTextColor="gray"
            onChangeText={setUserInput}
            value={userInput}
          />
          <Text style={styles.counter}>
            {userInput.length}/{MAX_INPUT_LENGTH}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.titleText}>Logo Styles</Text>
        <LogoSelector onSelect={(logoName) => setSelectedLogoStyle(logoName)} />
      </View>

      <LinearGradient
        colors={[colors.secondary, colors.primary]}
        locations={[0, 0.5]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.createButtonContainer,
          {
            opacity: chipStatus === Status.InProgress ? 0.6 : 1,
          },
        ]}
      >
        <TouchableOpacity
          onPress={generateButtonHandler}
          disabled={chipStatus === Status.InProgress}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Create</Text>
            <Icon name="sparkles" size={20} color={colors.white} />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 10 },
  section: { marginVertical: 15 },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  titleText: { fontSize: 20, fontWeight: "bold", color: colors.white },
  surpriseMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  surpriseMeText: { fontSize: 13, color: colors.white, paddingLeft: 5 },

  input: {
    height: 200,
    backgroundColor: colors.dark500,
    borderRadius: 16,
    color: colors.white,
    padding: 15,
    fontSize: 16,
  },
  counter: {
    position: "absolute",
    left: 15,
    bottom: 10,
    fontSize: 12,
    color: "#999",
  },

  createButtonContainer: {
    position: "absolute",
    bottom: 30,
    width: SCREEN_WIDTH - 20,
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonContent: { flexDirection: "row", alignItems: "center", gap: 10 },
  buttonText: { color: colors.white, fontWeight: "bold", fontSize: 16 },
});
