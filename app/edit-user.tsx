import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { Link } from "expo-router";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const createUser = () => {
    // if (!email || !password || !name) {
    //   // setError(true);
    //   return Alert.alert("Please fill the form");
    // }
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
        <View style={{ paddingLeft: 10, marginTop: 10 }}>
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
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>Edit User</Text>
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
              // value={email}
              // onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 250,
                height: 30,
                fontSize: 16,
                // padding: 10,
              }}
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
              // value={email}
              // onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 250,
                height: 30,
                fontSize: 16,
                // padding: 10,
              }}
              keyboardType="email-address"
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
            <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />

            <TextInput
              // value={email}
              // onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 250,
                height: 30,
                fontSize: 16,
                // padding: 10,
              }}
              secureTextEntry={true}
            />
          </View>
        </View>

        <View style={{ marginTop: 50 }} />

        <Pressable
          onPress={createUser}
          style={{
            width: 150,
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
            Confirm
          </Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
