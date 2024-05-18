import { StyleSheet, View, Dimensions, Image, Text, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

const DetailsHeader = ({ img, foodDetails, calories, navigation }: any) => {
  return (
    <View style={{ width: "100%" }}>
      <Image
        source={img}
        style={{
          width: width,
          height: height * 0.37,
        }}
      />
      <Pressable
        style={{
          position: "absolute",
          left: 15,
          top: 18,
          alignItems: "center",
          justifyContent: "center",
          width: 32,
          height: 32,
          borderRadius: 40,
          backgroundColor: "#f96163",
        }}
        onPress={()=>navigation.navigate("HomeScreen")}
      >
        <AntDesign style={{}} name="arrowleft" size={22} color="white" />
      </Pressable>

      <View style={{ marginTop: 10, marginHorizontal: 16 }}>
          <Text style={{ fontSize: 26, fontWeight: "700", color:'#f96163' }}>{foodDetails.title}</Text>
        
          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'96%', marginTop:16}}>
            <View style={styles.dabba}><Text style={styles.heading}>Servings</Text><Text style={styles.infoText}>{foodDetails.servings}</Text></View>
            <View style={styles.dabba}><Text style={styles.heading}>Prep. Time</Text><Text style={styles.infoText}>{foodDetails.readyInMinutes} min</Text></View>
            <View style={styles.dabba}><Text style={styles.heading}>Calories</Text><Text style={styles.infoText}>{calories} kcal</Text></View>
          </View>
        
      </View>
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
    dabba: {
        alignItems: 'center',

    },
    heading : {
        fontSize: 14,
        fontWeight:'700',
        color:'gray',
    },
    infoText: {
        fontSize: 18,
        fontWeight:'700',
    }
});
