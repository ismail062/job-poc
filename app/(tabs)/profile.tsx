import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Text, View } from "react-native";
import {
  Avatar,
  List,
  Chip,
  Card,
  Divider,
  Tooltip,
  Button,
} from "react-native-paper";

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

  return (
    <SafeAreaView>
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
                <Button
                  onPress={() =>
                    alert("Profile has been updated successfully.")
                  }
                  icon="pencil"
                  mode="text"
                >
                  Edit
                </Button>
              </Tooltip>
              <Tooltip title="Logout">
                <Button
                  onPress={() => router.push("/login")}
                  icon="logout"
                  mode="text"
                >
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
      <ScrollView>
        <Card className="m-1">
          <Card.Title title="Bio" />
          <Card.Content>
            <Text variant="bodyMedium">{profile.bio}</Text>
          </Card.Content>
        </Card>
        <List.AccordionGroup>
          <List.Accordion title="Skills" id="1">
            <Card className="m-1">
              <Card.Content className="flex-row flex-wrap">
                {profile.skills.map((item, index) => (
                  <Chip className="m-1" key={index}>
                    {item}
                  </Chip>
                ))}
              </Card.Content>
            </Card>
          </List.Accordion>
          <List.Accordion title="Experience" id="2">
            <Card className="m-1">
              {profile.workExperience.map((item, index) => (
                <>
                  <Card.Title title={item.companyName} key={index} />
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
          </List.Accordion>
          <List.Accordion title="Education" id="3">
            {profile.education.map((item, index) => (
              <>
                <Card.Title title={item.schoolName} key={index} />
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
          </List.Accordion>
        </List.AccordionGroup>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
