import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useLocalSearchParams } from "expo-router";
import { JobFooter } from "@/components";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";


const JobDetails = () => {
  const { id } = useLocalSearchParams();
  const [job, setJob] = useState({
    title: "Software Engineer",
    companyName: "Google",
    location: "Remote",
    salary: "$120,000",
    publishedDate: "1d ago",
    status: "Open",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui sed mi ultricies aliquet. Nulla facilisi. In hac habitasse platea dictumst. Nullam nec ultricies nunc. Donec euismod, nunc non aliquam tincidunt, odio turpis ultricies metus, vitae luctus turpis erat at nunc. Donec euismod, nunc non aliquam tincidunt, odio turpis ultricies metus, vitae luctus turpis erat at nunc.",
    respnsibility: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui sed mi ultricies aliquet. Nulla facilisi. In hac habitasse platea dictumst. Nullam nec ultricies nunc. Donec euismod, nunc non aliquam tincidunt, odio turpis ultricies metus, vitae luctus turpis erat at nunc. Donec euismod, nunc non aliquam tincidunt, odio turpis ultricies metus, vitae luctus turpis erat at nunc.",
    requirement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui sed mi ultricies aliquet. Nulla facilisi. In hac habitasse platea dictumst. Nullam nec ultricies nunc. Donec euismod, nunc non aliquam tincidunt, odio turpis ultricies metus, vitae luctus turpis erat at nunc. Donec euismod, nunc non aliquam tincidunt, odio turpis ultricies metus, vitae luctus turpis erat at nunc.",
    benefits: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui sed mi ultricies aliquet. Nulla facilisi. In hac habitasse platea dictumst. Nullam nec ultricies nunc. Donec euismod, nunc non aliquam tincidunt, odio turpis ultricies metus, vitae luctus turpis erat at nunc. Donec euismod, nunc non aliquam tincidunt, odio turpis ultricies metus, vitae luctus turpis erat at nunc."
  });
  
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerTitle: "", headerBackTitle: "back" }} />
      <>
        <JobFooter url={id ? `/jobs/${id}/apply` : "/jobs/applications"} />
        <ScrollView>
          <Text className="text-xl font-pbold text-gray-800">
            {job.title}
          </Text>
          <View className="flex flex-row items-center mt-2">
            <Text className="text-sm text-black-400 font-pregular ml-1">
              {job.companyName}
            </Text>
          </View>
          <View className="flex flex-row flex-wrap mt-2">
            <View className="w-1/2 mb-2">
              <View className="flex flex-row items-center">
                <EvilIcons name="location" size={24} color="black" />
                <Text className="text-sm text-black-400 font-pregular ml-2">
                  {job.location}
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
                  {job.salary}
                </Text>
              </View>
            </View>

            <View className="w-1/2 mb-2">
              <View className="flex flex-row items-center">
                <EvilIcons name="calendar" size={24} color="black" />
                <Text className="text-sm text-black-400 font-pregular ml-2">
                  {job.publishedDate}
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
                  {job.status}
                </Text>
              </View>
            </View>
          </View>
          <View className="p-4">
            <Text className="text-lg font-pbold text-gray-800">
              Description
            </Text>
            <Text className="text-sm font-pregular text-gray-400 mt-1">
              {job.description}
            </Text>
          </View>
          <View className="p-4">
            <Text className="text-lg font-pbold text-gray-800">
              Responsibilities
            </Text>
            <Text className="text-sm font-pregular text-gray-400 mt-1">
              {job.respnsibility}
            </Text>
          </View>
          <View className="p-4">
            <Text className="text-lg font-pbold text-gray-800">
              Requirements
            </Text>
            <Text className="text-sm font-pregular text-gray-400 mt-1">
              {job.requirement}
            </Text>
          </View>
          <View className="p-4">
            <Text className="text-lg font-pbold text-gray-800">Benefits</Text>
            <Text className="text-sm font-pregular text-gray-400 mt-1">
              {job.benefits}
            </Text>
          </View>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
