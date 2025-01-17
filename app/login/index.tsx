import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Image
          source={require("@/assets/images/login.png")}
          style={styles?.image}
        />
      </View>
      <View
        style={{
          padding: 25,
          backgroundColor: Colors.PRIMARY,
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Stay on Track, Stay Healthy !
        </Text>
        <Text
          style={{
            marginTop: 20,
            fontSize: 17,
            color: "white",
            textAlign: "center",
          }}
        >
          Track your meds, Take control of your health. Stay consistent, stay
          confident.
        </Text>
        <TouchableOpacity style={styles?.button} onPress={() => router.push('/login/signIn')}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            marginTop: 4,
          }}
        >
          Note: By clicking this button, you will agree with terms and
          conditions.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 210,
    height: 450,
    borderRadius: 23,
  },
  button: {
    marginTop: 25,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 99,
  },
});
