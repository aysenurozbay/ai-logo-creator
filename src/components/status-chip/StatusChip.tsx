import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Icon from "../Icon";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors";

export enum Status {
  InProgress = "in_progress",
  Completed = "completed",
  Failed = "failed",
}

const statusConfig: Record<
  Status,
  {
    label: string;
    bgColor: string;
    textColor: string;
    subtitleColor: string;
    subtitle: string;
    tappable: boolean;
    image?: any;
  }
> = {
  [Status.InProgress]: {
    label: "In Progress",
    bgColor: colors.dark500,
    textColor: "white",
    subtitleColor: "#F2F2F2",
    subtitle: "Currently working",
    tappable: false,
  },
  [Status.Completed]: {
    label: "Your Design is Ready!",
    bgColor: "#32CD32",
    textColor: "white",
    subtitleColor: "#E5FFE5",
    subtitle: "Tap to see it.",
    tappable: true,
    image: require("../../assets/logo-styles/monogram.png"),
  },
  [Status.Failed]: {
    label: "Oops, something went wrong!",
    bgColor: "#FF4500",
    textColor: "white",
    subtitleColor: "#FFE5E5",
    subtitle: "Click to try again.",
    tappable: true,
  },
};

export default function StatusChip({
  status,
  onPress,
}: {
  status: Status;
  onPress?: () => void;
}) {
  const config = statusConfig[status];

  const Wrapper = config.tappable ? Pressable : View;

  return (
    <Wrapper
      style={[styles.chip, { backgroundColor: config.bgColor }]}
      {...(config.tappable && onPress ? { onPress } : {})}
    >
      {status === Status.InProgress && (
        <ActivityIndicator
          size="small"
          color="#ffffff"
          style={{ marginRight: 8 }}
        />
      )}

      {status === Status.Completed && config.image && (
        <Image
          source={config.image}
          style={{ width: 30, height: 30, marginRight: 8 }}
        />
      )}

      <View style={styles.textContainer}>
        <Text style={[styles.label, { color: config.textColor }]}>
          {config.label}
        </Text>
        <Text style={[styles.subtitle, { color: config.subtitleColor }]}>
          {config.subtitle}
        </Text>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginVertical: 5,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    fontSize: 10,
  },
  textContainer: {
    marginLeft: 8,
    paddingLeft: 8,
    gap: 2,
  },
});
