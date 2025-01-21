import { View, Text, Button } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/configs/firebaseConfig";

export default function HomeScreeen() {
  return (
    <View>
      <Text>HomeScreeen</Text>
      <Button title="Logout" onPress={() => signOut(auth)} />
    </View>
  );
}
