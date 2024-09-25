import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useLocalSearchParams } from "expo-router";
import { CustomButton } from "@/components";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

const apply = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerTitle: "", headerBackTitle: "back" }} />
      <> 
        <ScrollView>
          <Text className="text-xl font-pbold text-gray-800">
            Software Engineer Application Form
          </Text>
          <View className="flex flex-row items-center mt-2">
            <Text className="text-sm text-black-400 font-pregular ml-1">
              Google
            </Text>
          </View>
          <View className="flex flex-row flex-wrap mt-2">
            <View className="w-1/2 mb-2">
              <View className="flex flex-row items-center">
                <EvilIcons name="location" size={24} color="black" />
                <Text className="text-sm text-black-400 font-pregular ml-2">
                  Remote
                </Text>
              </View>
            </View>

            <View className="w-1/2 mb-2">
              <View className="flex flex-row items-center">
                <MaterialIcons
                  name="currency-exchange"
                  size={20}
                  color="black"
                />
                <Text className="text-sm text-black-400 font-pregular ml-2">
                  $120,000
                </Text>
              </View>
            </View>

            <View className="w-1/2 mb-2">
              <View className="flex flex-row items-center">
                <EvilIcons name="calendar" size={24} color="black" />
                <Text className="text-sm text-black-400 font-pregular ml-2">
                  1 day ago
                </Text>
              </View>
            </View>

            <View className="w-1/2 mb-2">
              <View className="flex flex-row items-center">
                <MaterialIcons
                  name="signal-wifi-statusbar-null"
                  size={24}
                  color="black"
                />
                <Text className="text-sm text-black-400 font-pregular ml-2">
                  Open
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <CustomButton title="Submit Application"
            handlePress={() => alert("Application Submitted Successfully")}
            containerStyles="w-full mt-7"/>
      </>
    </SafeAreaView>
  );
};

export default apply;
