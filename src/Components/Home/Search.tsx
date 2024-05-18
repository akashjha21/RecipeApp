import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Search = ({
  placeholder,
  handleCityInput,
  setSearchQuery,
  setQuery,
  query,
  searchQuery,
}: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderRadius: 10,
        marginVertical: 16,
        marginHorizontal: 16,

        shadowColor: "#00000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 7,
        elevation: 3,
      }}
    >
      <AntDesign name="search1" size={24} color="#f96163" />
      <TextInput
        style={{
          paddingLeft: 18,
          fontSize: 16,
          color: "#808080",
        }}
        value={searchQuery}
        placeholder={placeholder}
        onChangeText={(text) => setSearchQuery(text)}
        onSubmitEditing={() => (setQuery(searchQuery))}
      ></TextInput>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
