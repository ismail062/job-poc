import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
const reactlogo = require("../assets/images/react-logo.png");
const JobCard = ({
  title,
  companyName,
  logo,
  location,
  salary,
  date,
  status,
}) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <View className="flex flex-col bg-white p-2 rounded-lg shadow-md mb-1">
      <View className="flex flex-row items-center mt-2">
        <Text className="text-2xl text-black-400 font-pregular ml-2">
          {title}
        </Text>

        <TouchableOpacity
          onPress={handleLike}
          className="flex flex-row items-center ml-auto"
        >
          <MaterialIcons
            name={liked ? "favorite" : "favorite-border"}
            size={24}
            color={liked ? "red" : "black"}
          />
          <Text className="text-xs text-gray-400 font-pregular ml-1">
            {liked ? "Liked" : "Like"}
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row items-center mt-2">
        <Text className="text-sm text-black-400 font-pregular ml-1">
          {companyName}
        </Text>
        <Image source={logo} className="w-10 h-10 ml-4" resizeMode="contain" />
      </View>
      <View className="flex flex-row flex-wrap mt-2">
        <View className="w-1/2 mb-2">
          <View className="flex flex-row items-center">
            <EvilIcons name="location" size={24} color="black" />
            <Text className="text-sm text-black-400 font-pregular ml-2">
              {location}
            </Text>
          </View>
        </View>

        <View className="w-1/2 mb-2">
          <View className="flex flex-row items-center">
            <MaterialIcons name="currency-exchange" size={20} color="black" />
            <Text className="text-sm text-black-400 font-pregular ml-2">
              {salary}
            </Text>
          </View>
        </View>

        <View className="w-1/2 mb-2">
          <View className="flex flex-row items-center">
            <EvilIcons name="calendar" size={24} color="black" />
            <Text className="text-sm text-black-400 font-pregular ml-2">
              {date}
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
              {status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default JobCard;
