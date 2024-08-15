import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import { images } from "../constants";
import { CustomButton } from "../components";
// import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Welcome to <Text className="text-secondary-200">Novuna</Text> Job
              Portal
            </Text>
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Make your job search easier with us.{"\n"} Sign up to get started
            and apply your dream job.{"\n"}
          </Text>
          <CustomButton title="Continue with Email"
            handlePress={() => router.push("/home")}
            containerStyles="w-full mt-7"/>
            
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
