import { View, Text, Button } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/configs/firebaseConfig";
import { getLocalStorage, removeLocalStorage } from "@/services/LocalStorage";
import { useRouter } from "expo-router";

export default function HomeScreeen() {
  const router = useRouter();
  const handleSignOut = () => {
    removeLocalStorage();
    console.log("Success");
    router.push("/login");
    getLocalStorage("userDetail");
  };
  return (
    <View>
      <Text>HomeScreeen</Text>
      <Button
        title="Logout"
        onPress={() =>
          signOut(auth).then(() => {
            handleSignOut();
          })
        }
      />
    </View>
  );
}
