import { Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { router } from 'expo-router'

const JobFooter = ({url}) => {

  const handleApplication = () => {
    router.push(url)
  };

  return (
    <View className="flex flex-row align-middle items-center ">
      <TouchableOpacity
        onPress={handleApplication}
        activeOpacity={0.7}
        className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center w-full `}
      >
        <Text className={`text-black font-psemibold text-lg`}>
          Apply Now
        </Text>

        
      </TouchableOpacity>
    </View>
  );
};

export default JobFooter;
