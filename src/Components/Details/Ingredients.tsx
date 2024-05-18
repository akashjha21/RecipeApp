import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Octicons } from '@expo/vector-icons';
const {width, height} = Dimensions.get('window');

const Ingredients = ({foodDetails}:any) => {

  const capitalizeFirstLetter = (string:any) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const uniqueIngredients = Array.from(
    new Map(foodDetails.extendedIngredients.map(ingredient => [ingredient.name, ingredient])).values()
  );
  return (
    <ScrollView style={styles.container}>
      {uniqueIngredients.map((ingredient:any) => (
        <View key={ingredient.id} style={{display:'flex', flexDirection:'row', alignItems:'center', marginTop:10, maxWidth:width}}>
          <Octicons name="dot-fill" size={24} color="black" />
          <View style={{display:'flex', flexDirection:'row', maxWidth:width}}>
          <Text  style={{fontSize:18, fontWeight:'600', marginTop:-5, marginLeft:16}}>
        {capitalizeFirstLetter(ingredient.name)}
      </Text>
      <Text style={{ marginTop:-3, marginLeft:5}}>{'('}{ingredient.amount}{" "}{ingredient.unit}{')'}</Text>
          </View>
      </View>
      ))}
    </ScrollView>
  )
}

export default Ingredients

const styles = StyleSheet.create({
  container: {
    marginHorizontal:16,
    marginTop:16,
    width:width

  }
})