import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { EvilIcons, Foundation, MaterialIcons } from "@expo/vector-icons";

const VideoCard = ({
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
      <View className="pt-2">
        <Image source={logo} className="w-5 h-5" resizeMode="contain" />
      </View>

      <View className="flex flex-row items-center mt-2">
        <Text className="text-2xl text-black-400 font-pregular ml-1">
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
      </View>
      <View className="flex flex-row items-center mt-2">
        <EvilIcons name="location" size={24} color="black" />
        <Text className="text-sm text-black-400 font-pregular ml-1">
          {location}
        </Text>
      </View>

      <View className="flex flex-row items-center mt-2">
      <MaterialIcons name="currency-exchange" size={20} color="black" />
        <Text className="text-sm text-black-400 font-pregular ml-1">
          {salary}
        </Text>
      </View>

      <View className="flex flex-row items-center mt-2">
        <EvilIcons name="calendar" size={24} color="black" />
        <Text className="text-sm text-black-400 font-pregular ml-1">{date}</Text>
      </View>

      <View className="flex flex-row items-center mt-2">
      <MaterialIcons name="signal-wifi-statusbar-null" size={24} color="black" />
        <Text className="text-sm text-black-400 font-pregular ml-1">
          {status}
        </Text>
      </View>

    </View>
  );
};

export default VideoCard;
