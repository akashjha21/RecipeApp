import { StyleSheet, Text, SafeAreaView, Image, Pressable, StatusBar, TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";
import Welcome from '../../assets/images/Welcome.png';

const WelcomeScreen = ({ navigation }: any) => {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Image source={Welcome} style={{ resizeMode: "contain" }} />
      <Text style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>
        30k+ Food Recipies
      </Text>
      <Text
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: 32,
          marginTop: "12%",
        }}
      >
        Cook Like A MasterChef
      </Text>

      <Pressable
        style={{
          backgroundColor: "#f96163",
          borderRadius: 16,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
          marginTop: "12%",
        }}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Let's Cook{" -->"}
        </Text>
      </Pressable>
      <StatusBar  backgroundColor='#f96163'/>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
