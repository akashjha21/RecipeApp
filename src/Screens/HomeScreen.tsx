import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../Components/Home/Header";
import Search from "../Components/Home/Search";
import FoodList from "../Components/Home/FoodList";
import FlatListView from "../Components/Home/FlatListView";

const RecipieScreen = ({navigation}:any) => {
  const [query, setquery] = useState<string|null>("Indian");
  const [searchQuery, setSearchQuery] = useState<string|null>('');


  const handleCityInput = (text: string) => {
    setSearchQuery(text);
  };
  return (
    <>
      <View
        style={{ flex: 1,marginTop:5 }}
      >
        <Header headerText={"Hi John"} />
        <Search placeholder={"Search Your Favourite Recipie"} setQuery={setquery} setSearchQuery={setSearchQuery} handleCityInput={handleCityInput} searchQuery={searchQuery}  />
        {/* Categories */}
        <View style={{ marginHorizontal: 16, marginTop: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
          <FoodList setQuery={setquery} query={query} />
        </View>

        {/* FlatList */}
        
          <Text style={{ fontSize: 22, marginHorizontal: 16, fontWeight: "bold", marginTop:20 }}>
            Popular Recipies
          </Text>
          <View style={{flex:1}}>
          <FlatListView navigation={navigation} query={query} searchQuery={searchQuery} />
          </View>
      </View>
    </>
  );
};

export default RecipieScreen;

const styles = StyleSheet.create({});
