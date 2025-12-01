import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import { LOGOS, LogoType } from "../../constants/logos";
import colors from "../../constants/colors";
import Icon from "../../hooks/useIcon";

export default function LogoSelector() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity key={"noStyle"} style={[styles.styleContainer]}>
          <View style={styles.noStyleContainer}>
            <Icon name="ban-outline" size={50} color={colors.white} />
          </View>

          <Text style={styles.styleName}>No Style</Text>
        </TouchableOpacity>
        {LOGOS.map((item: LogoType) => (
          <TouchableOpacity key={item.key} style={styles.styleContainer}>
            <Image key={item.name} source={item.logo} style={styles.image} />
            <Text style={styles.styleName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: "row",
  },
  noStyleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 90,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 13,
    marginRight: 10,
  },
  styleContainer: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 10,
    borderRadius: 13,
  },
  styleName: {
    color: colors.gray,
    fontSize: 13,
    marginTop: 5,
    fontWeight: "500",
  },
});
