import React from "react";
import { Redirect, router } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "@/components";

function HomeScreen() {
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View>
          <Text> Welcome to Novuna Job Portal</Text>
        </View>
        <View>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/login")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
