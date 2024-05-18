
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import DetailsHeader from "../Components/Details/DetailsHeader";
import Screens from "../Components/Details/Screens";

const DetailScreen = ({ route, navigation }: any) => {
  const { imageUrl, id } = route.params;
  const [foodDetails, setFoodDetails] = useState<any |null>(null);
  const [error, setError] = useState<string>("");
  const realImage = { uri: imageUrl };
  
  // const API_KEY = "7e903777113f485aa7ecf2bc312b6747";

  const API_KEY = process.env.API_KEY

  useEffect(() => {
    fetchDetails();
    console.log("ID: " + id)
  }, [id]);

  // console.log("mealDetails: " + JSON.stringify(foodDetails));

  const fetchDetails = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Error in fetching data : " + response.status);
      }
      const data = await response.json();
      console.log(data.vegetarian);
      setFoodDetails(data);
    } catch (error) {
      setError("Failed to load recipe details.");
    }
  };

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  if (!foodDetails) {
    return <Text style={styles.loading}>Loading...</Text>;
  }

  const calories = foodDetails.nutrition?.nutrients.find(
    nutrient => nutrient.name === "Calories"
  )?.amount;


  

  return (
    <ScrollView style={{}}>
      {foodDetails.extendedIngredients && foodDetails.extendedIngredients.length > 0 ? (
        <>
          <DetailsHeader img={realImage} foodDetails={foodDetails} calories={calories} navigation={navigation} />
          <Screens foodDetails={foodDetails} steps={foodDetails.analyzedInstructions[0].steps}  />
        </>
      ) : (
        <View style={{height:'100%', width:'100%', alignItems:'center', justifyContent:'center'}}>
          <Text>Oops! Something went Wrong</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 4,
  },
  instructions: {
    fontSize: 16,
    marginTop: 8,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  loading: {
    textAlign: "center",
    marginTop: 20,
  },
});

export default DetailScreen;
