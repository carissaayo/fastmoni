import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { loginUser } from "@/redux/UserReducer";
import { useDispatch } from "react-redux";
export default function LoginScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!firstName || !lastName || !email) {
      setError(true);
      return Alert.alert("Login Error", "Please enter your credentials");
    }
    dispatch(loginUser({ firstName, lastName, email }));
    router.replace("/");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <SafeAreaView>
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Login In to your Account
          </Text>
        </View>

        <View style={{ marginTop: 90 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              paddingHorizontal: 15,
              borderRadius: 5,

              marginHorizontal: "auto",
              maxWidth: "100%",
            }}
          >
            <Ionicons name="person" size={24} color="gray" />

            <TextInput
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 250,
                height: 30,
                fontSize: 16,
              }}
              placeholder="Enter your first name"
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              paddingHorizontal: 15,
              borderRadius: 5,

              marginHorizontal: "auto",
              maxWidth: "100%",
            }}
          >
            <Ionicons name="person" size={24} color="gray" />

            <TextInput
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 250,
                height: 30,
                fontSize: 16,
              }}
              placeholder="Enter your last name"
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              paddingHorizontal: 15,
              borderRadius: 5,

              marginHorizontal: "auto",
              maxWidth: "100%",
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 250,
                height: 30,
                fontSize: 16,
                // padding: 10,
              }}
              placeholder="Enter your Email"
              keyboardType="email-address"
            />
          </View>
        </View>

        {error && (
          <View
            style={{
              marginTop: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "red" }}>
              Please provide your credentials
            </Text>
          </View>
        )}
        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Keep me logged in</Text>

          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Forgot Password
          </Text>
        </View>

        <View style={{ marginTop: 80 }} />

        <Pressable
          onPress={handleLogin}
          style={{
            width: 200,
            backgroundColor: "#FEBE10",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </Pressable>

        <Pressable
          // onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Don't have an account? Sign Up
          </Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
