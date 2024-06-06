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
  ScrollView,
} from "react-native";

export default function User() {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 30,
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        paddingVertical: 5,
        marginBottom: 10,
      }}
    >
      <View style={{}}>
        <Text style={{ fontSize: 16 }}> First Name</Text>
        <Text>john Doe</Text>
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 16 }}>Last Name</Text>
        <Text>john Doe</Text>
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 16 }}>Email</Text>
        <Text>ahjao@</Text>
      </View>
      <Pressable
        style={{
          borderWidth: 1,
          borderColor: "blue",
          padding: 5,
          borderRadius: 10,
          paddingHorizontal: 10,
          height: 30,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16 }}>
          <Link href="edit-user">Edit User</Link>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
