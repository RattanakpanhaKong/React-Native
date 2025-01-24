import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getLocalStorage, removeLocalStorage } from "@/services/LocalStorage";
import { UserInfo } from "@/types/common";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/constants/Colors";

export default function Header() {
  const [user, setUser] = useState<UserInfo | null>();

  const getUserDetail = async () => {
    const userInfo: UserInfo = await getLocalStorage("userDetail");
    setUser(userInfo);
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={require("@/assets/images/smiley.png")}
            style={{
              width: 45,
              height: 45,
            }}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Hello, {user?.displayName} 👋
          </Text>
        </View>
        <Ionicons name="settings-outline" size={34} color={Colors.DARK_GRAY} />
      </View>
    </View>
  );
}
