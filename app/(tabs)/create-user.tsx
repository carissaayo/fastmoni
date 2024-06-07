import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { Link, router } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  Text,
  Pressable,
  TextInput,
  Alert,
} from "react-native";

export default function CreateUserScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState(false);

  const createUser = () => {
    if (!email || !firstName || !lastName) {
      // setError(true);
      return Alert.alert("Please fill the form");
    }
    router.push("/");
  };

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
          // alignItems: "center",
          paddingTop: Platform.OS === "android" ? 40 : 0,
        }}
      >
        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            alignContent: "center",
            gap: 30,
          }}
        >
          <View
            style={{
              paddingLeft: 10,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Link href="/">
              <Ionicons name="chevron-back" size={24} color="black" />
            </Link>
          </View>
          <View
            style={{
              marginTop: 10,
              marginBottom: 0,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: "bold" }}>
              Add New User
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              paddingHorizontal: 15,
              borderRadius: 5,
              marginTop: 30,

              marginHorizontal: "auto",
              maxWidth: "100%",
            }}
          >
            <Ionicons name="person" size={24} color="gray" />

            <TextInput
              style={{
                color: "gray",
                marginVertical: 10,
                width: 250,
                height: 30,
                fontSize: 16,
              }}
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              placeholder="Enter First Name"
            />
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              paddingHorizontal: 15,
              borderRadius: 5,
              marginTop: 30,

              marginHorizontal: "auto",
              maxWidth: "100%",
            }}
          >
            <Ionicons name="person" size={24} color="gray" />

            <TextInput
              style={{
                color: "gray",
                marginVertical: 10,
                width: 250,
                height: 30,
                fontSize: 16,
              }}
              placeholder="Enter Last Name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              paddingHorizontal: 15,
              borderRadius: 5,
              marginTop: 30,

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
              }}
              placeholder="Enter Email"
              keyboardType="email-address"
            />
          </View>
        </View>

        <View style={{ marginTop: 50 }} />

        <Pressable
          onPress={createUser}
          style={{
            width: 200,
            backgroundColor: "blue",
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
            Add User
          </Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
