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
  FlatList,
} from "react-native";
import User from "./User";
import { useSelector } from "react-redux";

export default function UsersList() {
  const users = useSelector((state) => state.user.users);

  return (
    <SafeAreaView>
      <View style={{ paddingLeft: 20, marginTop: 40 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Manage Users ({users.length})
        </Text>
      </View>
      {/* <ScrollView style={{ borderBlockColor: "black", borderWidth: 1 }}> */}
      <FlatList
        style={{
          borderBlockColor: "black",
          borderWidth: 1,
          width: "100%",
        }}
        data={users}
        renderItem={({ item }) => <User user={item} />}
        keyExtractor={(item) => item.id}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
