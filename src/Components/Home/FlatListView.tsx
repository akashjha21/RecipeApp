import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Pressable,
  Dimensions,
  Image
} from "react-native";
import React, { useEffect, useState } from "react";
import { RecipieCategories } from "../../../categories";
import TruncatedText from "../../../TruncatedText";
  const { height, width } = Dimensions.get("window");
  
  const FlatListView = ({ query, navigation }: any) => {
    const [recipieData, setRecipieData] = useState<RecipieCategories[]>([]);
    const [page, setPage] = useState<number>(1);
    const [numberofItems, setNumberOfItems] = useState<number>(10);
    const API_KEY = process.env.API_KEY
    // const API_KEY = '7e903777113f485aa7ecf2bc312b6747';
    const callFunc = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&number=${numberofItems}&offset=${(page - 1) * numberofItems}`);
        if (!response.ok) {
          throw new Error("Network error: " + response.status);
        }
        const data = await response.json();
        let newRecipieData: RecipieCategories[] = data.results.map((hit: any) => ({
            imageUrl: hit.image,
            name: hit.title,
            id: hit.id,
        }));
        console.log("New Recipe Data: ", newRecipieData);
        
        setRecipieData((prevData) => [...prevData, ...newRecipieData]);
      } catch (err) {
        console.log("Error: ", err);
      }
    };

    useEffect(() => {
      setRecipieData([]); // Clear previous data when query changes
      setPage(1);
    }, [query]);

    useEffect(() => {
      callFunc();
    }, [query,page]); // important to pass ab query ke respect m useeffect call hoga
  
    const handleLoadMore = () => {
      setPage((prevPage) => prevPage + 1);
    };

    return (
      <View style={{ marginTop: 20, alignItems: "center"}}>
        {recipieData?.length > 0 ? (
          <FlatList
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
            keyExtractor={(item) => item.id.toString()}
            style={{}}
            data={recipieData}
            contentContainerStyle={{paddingBottom:20}}
            renderItem={(recipie) => (
              <Pressable
                style={{
                  marginTop: 16,
                  marginHorizontal: 16,
                  marginBottom:15,
                  height: height * 0.255,
                  width: width * 0.5 - 32,
                  backgroundColor:'#505050',
                  borderRadius:16,
                  elevation:3,
                  shadowColor:'#000',
                  shadowOffset:{height:-1, width:1},
                  shadowRadius:10
                  
                  
                  
                }}
                onPress={() => {
                  navigation.navigate("DetailScreen", {
                    imageUrl: recipie.item.imageUrl,
                    id: recipie.item.id,
                  }); console.log("Image ID: " + recipie.item.id)
                } }
              >
                
                <Image
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 16,
                  }}
                  source={{ uri: recipie.item.imageUrl }}
                >
                </Image>
                <TruncatedText  text={recipie.item.name}></TruncatedText>
              </Pressable>
            )}
            numColumns={2}
          />
        ) : (
          <View>
            <Text>Loading...</Text>
          </View>
        )}
      </View>
    );
  };
  
  export default FlatListView;
  
  const styles = StyleSheet.create({});
  