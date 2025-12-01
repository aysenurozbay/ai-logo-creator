import {
  View,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface HeaderProps {
  title?: string;
  textStyle: StyleProp<TextStyle>;
  style: StyleProp<ViewStyle>;
}

export default function Header({
  title = "AI Logo",
  textStyle,
  style,
}: HeaderProps) {
  return (
    <SafeAreaView style={[style, styles.container]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
