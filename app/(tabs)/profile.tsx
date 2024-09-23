import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Chip, Card, Divider, IconButton, Tooltip, Button } from "react-native-paper";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";

import {
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";

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
        <View className="p-1">
          <Card className="m-1">
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 16,
              }}
            >
              <Card.Title title="Personal Info" style={{ flex: 1 }} />
              <View style={{ flexDirection: "row" }}>
                <Tooltip title="Edit Profile">
                  <Button onPress={() => router.push("/edit-profile")} icon="pencil" mode="text">
                    Edit
                  </Button>
                </Tooltip>
                <Tooltip title="Logout">
                <Button onPress={() => router.push("/edit-profile")} icon="logout" mode="text">
                    logout
                  </Button>
                </Tooltip>
              </View>
            </View>
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
        <View className="p-1">
          <Card className="m-1">
            <Card.Title title="Bio" />
            <Card.Content>
              <Text variant="bodyMedium">{profile.bio}</Text>
            </Card.Content>
          </Card>
        </View>
        <View className="p-1">
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
        </View>
        <View className="p-1">
          <Card className="m-1">
            <Card.Title title="Experience" />
            <Divider />
            {profile.workExperience.map((item, index) => (
              <>
                <Card.Title title={item.companyName} />
                <Card.Content>
                  <Text variant="bodyMedium">{item.role}</Text>
                  <Text variant="bodyMedium">
                    {item.startDate} - {item.endDate}
                  </Text>
                  <Text variant="bodyMedium">{item.location}</Text>
                  <Text variant="bodyMedium">{item.description}</Text>
                </Card.Content>
                <Divider />
              </>
            ))}
          </Card>
        </View>
        <View className="p-1">
          <Card className="m-1">
            <Card.Title title="Education" />
            <Divider />
            {profile.education.map((item, index) => (
              <>
                <Card.Title title={item.schoolName} />
                <Card.Content>
                  <Text variant="bodyMedium">{item.degree}</Text>
                  <Text variant="bodyMedium">
                    {item.startDate} - {item.endDate}
                  </Text>
                  <Text variant="bodyMedium">{item.location}</Text>
                </Card.Content>
                <Divider />
              </>
            ))}
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
