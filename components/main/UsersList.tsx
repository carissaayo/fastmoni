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
import User from "./User";

export default function UsersList() {
  return (
    <>
      <View style={{ paddingLeft: 20, marginTop: 40 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Manage Users (2)
        </Text>
      </View>
      <ScrollView style={{ borderBlockColor: "black", borderWidth: 1 }}>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
