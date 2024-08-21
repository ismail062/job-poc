import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, RefreshControl, Text, TouchableOpacity, View } from "react-native";

import { EmptyState, JobCard } from "../../components";
import { router } from "expo-router";

const Home = () => {
  const [jobs, setJobs] = useState([
    {
      $id: "1",
      title: "Software Engineer",
      companyName: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      location: "Remote",
      salary: "$120,000",
      publishedDate: "1d ago",
      status: "Open",
    },
    {
      $id: "2",
      title: "Software Engineer",
      companyName: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      location: "Remote",
      salary: "$120,000",
      publishedDate: "1d ago",
      status: "Open",
    },
    {
      $id: "3",
      title: "Software Engineer",
      companyName: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      location: "Remote",
      salary: "$120,000",
      publishedDate: "1d ago",
      status: "Open",
    },
    {
      $id: "4",
      title: "Software Engineer",
      companyName: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      location: "Remote",
      salary: "$120,000",
      publishedDate: "1d ago",
      status: "Open",
    },
  ]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary">

      <FlatList
        data={jobs}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => router.push(`/jobs/${item.$id}`)}
          >
          <JobCard
            title={item.title}
            companyName={item.companyName}
            logo={item.logo}
            location={item.location}
            salary={item.salary}
            date={item.publishedDate}
            status={item.status}
          />
          </TouchableOpacity>
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">Ismail</Text>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No Videos Found" subtitle="No videos created yet" />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
  
    </SafeAreaView>
  );
};

export default Home;