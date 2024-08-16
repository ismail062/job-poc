import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../../components";
import { useLocalSearchParams } from "expo-router";

const JobDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-4">
          <Text className="text-xl font-pbold text-gray-800">
            Software Engineer { id }
          </Text>
          <CustomButton
            title="Apply Now"
            handlePress={() => alert("Applied")}
            containerStyles="min-w-24 mt-2"
          />
          <Text className="text-sm font-pregular text-gray-400 mt-1">
            Google
          </Text>
          <Text className="text-sm font-pregular text-gray-400 mt-1">
            Remote
          </Text>
          <Text className="text-sm font-pregular text-gray-400 mt-1">
            $120,000
          </Text>
          <Text className="text-sm font-pregular text-gray-400 mt-1">
            1d ago
          </Text>
          <Text className="text-sm font-pregular text-gray-400 mt-1">Open</Text>
        </View>
        <View className="p-4">
          <Text className="text-lg font-pbold text-gray-800">Description</Text>
          <Text className="text-sm font-pregular text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            dui sed mi ultricies aliquet. Nulla facilisi. In hac habitasse
            platea dictumst. Nullam nec ultricies nunc. Donec euismod, nunc non
            aliquam tincidunt, odio turpis ultricies metus, vitae luctus turpis
            erat at nunc. Donec euismod, nunc non aliquam tincidunt, odio turpis
            ultricies metus, vitae luctus turpis erat at nunc.
          </Text>
        </View>
        <View className="p-4">
          <Text className="text-lg font-pbold text-gray-800">
            Responsibilities
          </Text>
          <Text className="text-sm font-pregular text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            dui sed mi ultricies aliquet. Nulla facilisi. In hac habitasse
            platea dictumst. Nullam nec ultricies nunc. Donec euismod, nunc non
            aliquam tincidunt, odio turpis ultricies metus, vitae luctus turpis
            erat at nunc. Donec euismod, nunc non aliquam tincidunt, odio turpis
            ultricies metus, vitae luctus turpis erat at nunc.
          </Text>
        </View>
        <View className="p-4">
          <Text className="text-lg font-pbold text-gray-800">Requirements</Text>
          <Text className="text-sm font-pregular text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            dui sed mi ultricies aliquet. Nulla facilisi. In hac habitasse
            platea dictumst. Nullam nec ultricies nunc. Donec euismod, nunc non
            aliquam tincidunt, odio turpis ultricies metus, vitae luctus turpis
            erat at nunc. Donec euismod, nunc non aliquam tincidunt, odio turpis
            ultricies metus, vitae luctus turpis erat at nunc.
          </Text>
        </View>
        <View className="p-4">
          <Text className="text-lg font-pbold text-gray-800">Benefits</Text>
          <Text className="text-sm font-pregular text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            dui sed mi ultricies aliquet. Nulla facilisi. In hac habitasse
            platea dictumst. Nullam nec ultricies nunc. Donec euismod, nunc non
            aliquam tincidunt, odio turpis ultricies metus, vitae luctus turpis
            erat at nunc. Donec euismod, nunc non aliquam tincidunt, odio turpis
            ultricies metus, vitae luctus turpis erat at nunc.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobDetails;
