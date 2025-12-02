import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import colors from "../../constants/colors";
import Icon from "../../hooks/useIcon";
import { useState } from "react";
import LogoSelector from "../../components/logo-selecter/LogoSelector";
import { LinearGradient } from "expo-linear-gradient";

import { Dimensions } from "react-native";
import StatusChip, { Status } from "../../components/status-chip/StatusChip";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function InputScreen() {
  const [userInput, setUserInput] = useState("");
  const maxInputLength = 500;

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const showResult = () => {
    navigation.navigate("OutputScreen");
  };

  return (
    <View style={styles.container}>
      <StatusChip status={Status.Completed} onPress={showResult} />
      <StatusChip status={Status.Failed} />
      <StatusChip status={Status.InProgress} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Enter Your Prompt</Text>
        <View style={styles.surpriseMeContainer}>
          <Icon name="dice" size={20} color={colors.white} />
          <Text style={styles.surpriseMeText}>Surprise Me </Text>
        </View>
      </View>
      <View>
        <TextInput
          placeholder="e.g., A futuristic logo for a tech startup"
          style={styles.input}
          multiline
          maxLength={maxInputLength}
          placeholderTextColor="gray"
          onChangeText={setUserInput}
          value={userInput}
        />
        <Text style={styles.counter}>
          {userInput.length}/{maxInputLength}
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View>
          <Text style={styles.titleText}> Logo Styles </Text>
        </View>
        <LogoSelector />

        <View style={{ marginTop: 10 }}></View>
      </View>

      <TouchableOpacity style={styles.createButtonContainer}>
        {/* <LinearGradient
          colors={["#2938DC", "#943DFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
            start: { x: 0, y: 0 },
            end: { x: 1, y: 0 },
      
        > */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text
            style={{ color: colors.white, fontWeight: "bold", fontSize: 16 }}
          >
            Create
          </Text>
          <Icon name="sparkles" size={20} color={colors.white} />
        </View>
        {/* </LinearGradient> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
  surpriseMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  surpriseMeText: {
    fontSize: 13,
    color: colors.white,
    paddingLeft: 5,
  },
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
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 20,
    width: SCREEN_WIDTH - 20,
    backgroundColor: "#943DFF",
  },
});
