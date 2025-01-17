import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

export default function HomeScreeen() {
  return (
    <View>
      <Text>HomeScreeen</Text>
      <Redirect href={"login"} />
    </View>
  );
}
