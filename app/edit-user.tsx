import { editUser } from "@/redux/UserReducer";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";

export default function CreateUserScreen() {
  // const [editUserDetails, setEditUserDetails] = useState({})
  const currentUser = useSelector((state) => state.user.editUserDetails);
  const [firstName, setFirstName] = useState(currentUser?.first_name);
  const [lastName, setLastName] = useState(currentUser?.last_name);
  const [email, setEmail] = useState(currentUser?.email);

  const [error, setError] = useState(false);
  const { id } = useLocalSearchParams();
  const dispatch = useDispatch();

  const createUser = () => {};
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        // setUsers(response.data);
        dispatch(editUser(response.data.data));
        console.log(response.data.data);
      } catch (error) {
        console.log("error message", error);
      }
    };

    fetchData();
  }, []);

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
              Edit {currentUser.first_name} {currentUser.last_name}
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
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 250,
                height: 30,
                fontSize: 16,
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
                // padding: 10,
              }}
              keyboardType="email-address"
            />
          </View>
        </View>
        {/* <View style={{ marginTop: 5 }}>
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
        </View> */}

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
            <Link href="/">Confirm</Link>
          </Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
