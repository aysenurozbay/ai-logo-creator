import React, { useState } from "react";
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
import Icon from "../Icon";

type Props = {
  onSelect?: (logoStyle: string) => void;
};

export default function LogoSelector({ onSelect }: Props) {
  const [selected, setSelected] = useState<string>("No Style");

  const handleSelect = (logoName: string) => {
    setSelected(logoName);
    onSelect && onSelect(logoName);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          key={"noStyle"}
          style={[styles.styleContainer]}
          onPress={() => handleSelect("No Style")}
        >
          <View
            style={[
              styles.noStyleContainer,
              selected === "No Style" && styles.selectedBorder,
            ]}
          >
            <Icon name="ban-outline" size={50} color={colors.white} />
          </View>
          <Text style={styles.styleName}>No Style</Text>
        </TouchableOpacity>

        {LOGOS.map((item: LogoType) => (
          <TouchableOpacity
            key={item.key}
            style={[styles.styleContainer]}
            onPress={() => handleSelect(item.name)}
          >
            <Image
              key={item.name}
              source={item.logo}
              style={[
                styles.image,
                selected === item.name && styles.selectedBorder,
              ]}
            />
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

    marginRight: 10,
  },
  styleContainer: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedBorder: {
    borderWidth: 2,
    borderColor: colors.dark300,
    borderRadius: 13,
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
