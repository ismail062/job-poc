import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { Button, Card, Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { EmptyState, JobCard } from "../../components";
import { router } from "expo-router";

const application = () => {
  const [active, setActive] = useState(true);
  const [showList, setShowList] = useState(false);
  const [profile, setProfile] = useState({
    personalInfo: {
      fullName: "Ismail",
      email: "ismail062@gmail.com",
      phone: "08012345678",
      location: "Lagos, Nigeria",
      avatar: "https://picsum.photos/700",
    },
    bio: "Software Engineer with 5 years of experience in building web and mobile applications.",
    workExperience: [
      {
        companyName: "Google",
        role: "Software Engineer",
        startDate: "2016",
        endDate: "Present",
        location: "Remote",
        description: "Building web and mobile applications.",
      },
      {
        companyName: "Facebook",
        role: "Software Engineer",
        startDate: "2014",
        endDate: "2016",
        location: "Remote",
        description: "Building web and mobile applications.",
      },
    ],
    education: [
      {
        schoolName: "University of Lagos",
        degree: "BSc. Computer Science",
        startDate: "2010",
        endDate: "2014",
        location: "Lagos, Nigeria",
      },
    ],
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
  });

  const [savedJobs, setSavedJobs] = useState([
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
  const [appliedJobs, setAppliedJobs] = useState([
    {
      $id: "1",
      title: "Software Engineer",
      companyName: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      location: "Remote",
      salary: "$120,000",
      publishedDate: "1d ago",
      status: "applied",
    },
    {
      $id: "2",
      title: "Software Engineer",
      companyName: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      location: "Remote",
      salary: "$120,000",
      publishedDate: "1d ago",
      status: "applied",
    },
  ]);
  const [value, setValue] = React.useState('');

  return (
    <SafeAreaView>
      <View className="p-1">
        <Card className="m-1">
          <Card.Content>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Avatar.Image
                  size={100}
                  source={{ uri: profile.personalInfo.avatar }}
                />
              </View>
              <View style={{ flex: 2, marginLeft: 16 }}>
                <Text variant="titleLarge">
                  {profile.personalInfo.fullName}
                </Text>
                <Text variant="bodyMedium">{profile.personalInfo.email}</Text>
                <Text variant="bodyMedium">{profile.personalInfo.phone}</Text>
                <Text variant="bodyMedium">
                  {profile.personalInfo.location}
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
      <Card className="m-1">
        <Card.Content>
          <View className="flex-row justify-evenly ">
            <Button
              icon="application"
              mode="contained"
              buttonColor={active ? "#2db587" : "grey"}
              onPress={() => setActive(true)}
            >
              Applied
            </Button>
            <Button
              icon="lock"
              mode="contained"
              buttonColor={!active ? "#2db587" : "grey"}
              onPress={() => setActive(false)}
            >
              Saved
            </Button>
          </View>
        </Card.Content>
      </Card>
      <FlatList
        data={active ? appliedJobs : savedJobs}
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
          <View className="flex items-center">
            <Card className="w-full bg-white">
              <Card.Title
                title={active ? "Applied Application" : "Saved"}
                titleStyle={{ textAlign: "center", fontWeight: "bold" }} // Make title bold
                className="flex justify-center items-center"
              />
            </Card>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default application;
