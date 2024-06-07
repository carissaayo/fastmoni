import { Link } from "expo-router";
import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  Text,
  Pressable,
} from "react-native";
import UsersList from "../../components/main/UsersList";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "@/redux/UserReducer";

export default function HomeScreen() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const totalUsers = useSelector((state) => state.user.users);
  const LoggedInUser = useSelector((state) => state.user.loggedInUser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users");
        setUsers(response.data);
        dispatch(addUser(response.data.data));
        // console.log(users);
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

          paddingTop: Platform.OS === "android" ? 40 : 0,
        }}
      >
        <View style={{ marginTop: 10, marginBottom: 30, alignItems: "center" }}>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>
            Welcome {LoggedInUser.firstName} {LoggedInUser.lastName}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: totalUsers > 0 ? "space-between" : "flex-end",

            width: "80%",
            marginHorizontal: "auto",
          }}
        >
          {totalUsers > 0 && <Text style={{ fontSize: 24 }}>No user yet </Text>}
          <Pressable
            style={{
              backgroundColor: "blue",
              padding: 5,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: "white" }}>
              <Link href="create-user">Add User</Link>
            </Text>
          </Pressable>
        </View>

        <UsersList />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
