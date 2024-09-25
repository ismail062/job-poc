import React from "react";
import { View } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";

const SearchBar = ({ searchValue, setSearchValue, onSearch }) => {
  return (
    <View className="p-1">
      <Card className="m-1 bg-white">
        <Card.Content className="flex-row items-center">
          <TextInput
            mode="outlined"
            value={searchValue}
            onChangeText={setSearchValue}
            activeOutlineColor="#2db587"
            className="flex-1 mr-2"
            style={{ height: 40, borderRadius: 20 }}
            outlineStyle={{ borderRadius: 20 }}
            placeholder="Search jobs..."
          />
          <Button
            icon="magnify"
            mode="contained"
            buttonColor="#2db587"
            onPress={() => onSearch(searchValue)}
            className="h-10 w-20 flex items-center justify-center"
            labelStyle={{ fontSize: 12 }}
          >
            Find
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default SearchBar;
