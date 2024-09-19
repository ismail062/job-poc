import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Chip, Card } from "react-native-paper";

import {
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";
import { CustomButton, FormField } from "../../components";

const profile = () => {
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

  const LeftContent = (props) => <Avatar.Icon {...props} icon="image" />;

  return (
    <SafeAreaView className="bg-primary">
      <ScrollView>
        <View className="px-4 m-1">
          <Card className="m-1">
            <Card.Title title="Personal Information" />
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
          <Card className="m-1">
            <Card.Title title="Bio" />
            <Card.Content>
              <Text variant="bodyMedium">{profile.bio}</Text>
            </Card.Content>
          </Card>

          <Card className="m-1">
            <Card.Title title="Skills" />
            <Card.Content>
              <FlatList
                data={profile.skills}
                numColumns={3}
                renderItem={({ item }) => <Chip className="m-1">{item}</Chip>}
              />
            </Card.Content>
          </Card>
          <Card className="m-1">
            <Card.Title title="Work Experience" />
            <Card.Content>
              <FlatList
                data={profile.workExperience}
                renderItem={({ item }) => (
                  <Card className="m-1">
                    <Card.Title title={item.role} />
                    <Card.Content>
                      <Text variant="bodyMedium">{item.companyName}</Text>
                      <Text variant="bodyMedium">{item.location}</Text>
                      <Text variant="bodyMedium">
                        {item.startDate} - {item.endDate}
                      </Text>
                      <Text variant="bodyMedium">{item.description}</Text>
                    </Card.Content>
                  </Card>
                )}
              />
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
