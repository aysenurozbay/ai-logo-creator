import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

interface UseIconProps {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
}

export default function Icon({
  name,
  size = 20,
  color = colors.white,
}: UseIconProps) {
  return (
    <View style={styles.container}>
      <Ionicons name={name} size={size} color={color} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
