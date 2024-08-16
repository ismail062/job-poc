import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../../components";

const profile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>profile</Text>
        </View>
          <View>
            <Text>User Profile</Text>
            <Text>Name: John Doe</Text>
            <Text>Email: john.doe@example.com</Text>
            <Text>Age: 30</Text>
          </View>
          <CustomButton
            title="Edit Profile"
            handlePress={() => router.push("/edit-profile")}
            containerStyles="min-w-24 mt-2"
          />
          <CustomButton
            title="Logout"
            handlePress={() => router.push("/")}
            containerStyles="min-w-24 mt-2"
          />

          


      </ScrollView>
    
  </SafeAreaView>
  )
}

export default profile

