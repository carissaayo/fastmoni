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
export default function HomeScreen() {
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
            Welcome John Doe
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "space-between",
            width: "80%",
            marginHorizontal: "auto",
          }}
        >
          <Text style={{ fontSize: 24 }}>No user yet </Text>
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
