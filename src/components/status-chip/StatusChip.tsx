import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Icon from "../Icon";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors";

export enum Status {
  InProgress = "in_progress",
  Completed = "completed",
  Failed = "failed",
}

// Status’a göre konfigürasyon
const statusConfig: Record<
  Status,
  {
    label: string;
    icon?: keyof typeof Ionicons.glyphMap;
    bgColor: string;
    textColor: string;
    subtitleColor: string;
    iconColor?: string;
    subtitle: string;
    tappable: boolean; // pressable mi
    image?: any; // sadece Completed için
  }
> = {
  [Status.InProgress]: {
    label: "In Progress",
    icon: "refresh",
    bgColor: colors.dark500,
    textColor: "white",
    subtitleColor: "#F2F2F2",
    iconColor: "white",
    subtitle: "Currently working",
    tappable: false,
  },
  [Status.Completed]: {
    label: "Completed",
    bgColor: "#32CD32",
    textColor: "white",
    subtitleColor: "#E5FFE5",
    subtitle: "Task finished",
    tappable: true,
    image: require("../../assets/logo-styles/monogram.png"),
  },
  [Status.Failed]: {
    label: "Failed",
    icon: "close",
    bgColor: "#FF4500",
    textColor: "white",
    subtitleColor: "#FFE5E5",
    iconColor: "white",
    subtitle: "Task failed",
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
      {config.icon && (
        <Icon name={config.icon} size={30} color={config.iconColor} />
      )}
      {config.image && (
        <Image source={config.image} style={{ width: 30, height: 30 }} />
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
