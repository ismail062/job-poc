import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome6';

const TabIcon = ({ icon, color, name, focused }) => {

  return (
    <View className="flex items-center justify-center gap-2">
      <FontAwesome
        name={icon}
        size={24}
        color={color} 
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="home"
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="view"
          options={{
            title: "Find",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="search-plus"
                color={color}
                name="Find"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="application"
          options={{
            title: "My Jobs",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="briefcase"
                color={color}
                name="My Jobs"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="user"
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabLayout;