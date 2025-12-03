import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Icon from "../Icon";
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
    label: "Creating Your Design...",
    bgColor: colors.dark500,
    textColor: colors.white,
    subtitleColor: "#F2F2F2",
    subtitle: "Ready in 2 minutes",
    tappable: false,
  },
  [Status.Completed]: {
    label: "Your Design is Ready!",
    bgColor: "#32CD32",
    textColor: colors.white,
    subtitleColor: "#E5FFE5",
    subtitle: "Tap to view it",
    tappable: true,
    image: require("../../assets/logo-styles/monogram.png"),
  },
  [Status.Failed]: {
    label: "Oops, something went wrong!",
    bgColor: colors.error,
    textColor: colors.white,
    subtitleColor: "#FFE5E5",
    subtitle: "Tap to try again",
    tappable: true,
  },
};

interface StatusChipProps {
  status: Status;
  onPress?: () => void;
}

export default function StatusChip({ status, onPress }: StatusChipProps) {
  const config = statusConfig[status];
  const Wrapper = config.tappable ? TouchableOpacity : View;

  return (
    <Wrapper
      style={[styles.chip, { backgroundColor: config.bgColor }]}
      {...(config.tappable && onPress ? { onPress } : {})}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        {status === Status.InProgress && (
          <ActivityIndicator size="small" color={colors.white} />
        )}

        {status === Status.Completed && config.image && (
          <Image source={config.image} style={styles.image} />
        )}

        {status === Status.Failed && (
          <Icon name="alert-circle-outline" size={24} color={colors.white} />
        )}
      </View>

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
    borderRadius: 12,
    marginVertical: 5,
    height: 60,
  },
  iconContainer: {
    width: 60,
    height: 60,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // soldaki view'ı tamamen kaplasın
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
  },
});
