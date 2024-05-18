import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { categories, colors } from "../../../constants";

interface CategoryListProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
}
const FoodList: React.FC<CategoryListProps> = ({ query, setQuery }) => {
  const [isColor, setIsColor] = useState<number>(0);
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <Pressable
              style={[styles.buttons, query==category.category?{backgroundColor:colors.COLOR_PRIMARY,elevation:3}:{backgroundColor:colors.COLOR_LIGHT, elevation:3}]}
              key={index}
              onPress={() => {setQuery(category.category), setIsColor(index)}}
            >
              <Text
                style={{
                  color:  query === category.category ? colors.COLOR_LIGHT : colors.COLOR_DARK,
                  fontSize: 16,
                }}
              >
                {category.category}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({
  buttons: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 7,
    shadowOpacity: 0.1,
    marginVertical: 16,
    marginRight: 18,
    marginLeft:3
  },
});
