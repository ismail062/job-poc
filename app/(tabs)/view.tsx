import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, RefreshControl } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { EmptyState, JobCard, SearchBar } from "../../components";
import { router } from "expo-router";

const view = () => {
  const [searchValue, setSearchValue] = React.useState("");
  
  const [jobSearchResult, setJobSearchResult] = useState([
    {
      $id: "1",
      title: "Software Engineer",
      companyName: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      location: "Remote",
      salary: "$120,000",
      publishedDate: "1d ago",
      status: "Open",
      jobType: "Full-Time"
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
      jobType: "Full-Time"
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
      jobType: "Full-Time"
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
      jobType: "Part-Time"
    },
    {
      $id: "5",
      title: "Software Engineer",
      companyName: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      location: "Remote",
      salary: "$120,000",
      publishedDate: "1d ago",
      status: "Open",
      jobType: "Full-Time"
    },
    {
      $id: "6",
      title: "Software Engineer",
      companyName: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      location: "Remote",
      salary: "$120,000",
      publishedDate: "1d ago",
      status: "Open",
      jobType: "Contract"
    },
    {
      $id: "7",
      title: "Software Engineer",
      companyName: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      location: "Remote",
      salary: "$120,000",
      publishedDate: "1d ago",
      status: "Open",
      jobType: "Part-Time"
    },
    
  ]);
  const [filteredJobsResult, setfilteredJobsResult] = useState<typeof jobSearchResult>(jobSearchResult)
  const jobTypes = ["All", "Full-Time", "Part-Time", "Contract"];
  const [activeJobType, setActiveJobType] = useState(jobTypes[0]);
  const renderItem = ({ item }) => (
    <Button
      mode={activeJobType === item ? "contained" : "outlined"}
      onPress={() => {
        console.log('onpress', item);
        setActiveJobType(item)
        handleSearch(searchValue, item)
      }}
      className={`mx-1 ${
        activeJobType === item ? "bg-[#2db587]" : "bg-gray-300"
      }`}
      labelStyle={{
        fontSize: 10,
        color: activeJobType === item ? "white" : "gray",
        alignContent: "center",
      }}
      contentStyle={{ height: 35 }}
      style={{ minWidth: 60 }}
    >
      {item}
    </Button>
  );

  const handleSearch = (value: string, item: string) => {
    //Set Job Search Result
    // Perform search operation here
    if(!item) item = activeJobType
    let filteredJobs = [];
    if(item === "All" && value === ""){
      setfilteredJobsResult(jobSearchResult);
      return;
    } else if(item === "All" && value !== ""){
      filteredJobs = jobSearchResult.filter(
        (job) => job.title.toLowerCase().includes(value.toLowerCase())
      );
      setfilteredJobsResult(filteredJobs);
      return;
    } else {
      filteredJobs = jobSearchResult.filter(
        (job) => job.jobType.toLowerCase() === item?.toLowerCase() && job.title.toLowerCase().includes(value.toLowerCase()) 
      );
      setfilteredJobsResult(filteredJobs);
    }
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  return (
    <SafeAreaView>
      <View className="p-1">
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSearch={handleSearch}
        />
      </View>

      <FlatList
        data={filteredJobsResult}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(`/jobs/${item.$id}`)}>
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
          <View className="flex items-center w-full">
            <Card className="w-full bg-white">
              <Card.Content>
                <FlatList
                  data={jobTypes}
                  renderItem={renderItem}
                  keyExtractor={(item) => item}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "space-between",
                  }}
                />
              </Card.Content>
            </Card>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No Jobs Found" subtitle="No job available yet" />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default view;
