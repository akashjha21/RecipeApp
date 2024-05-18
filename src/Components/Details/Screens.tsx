import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Preparation from './Preparation';
import Ingredients from './Ingredients';

const Screens = ({foodDetails, steps}:any) => {
    const [icolor, setIColor] = useState<boolean>(true);
    const [rcolor, setRColor] = useState<boolean>(false);
  
  
    return (
      <>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 17,
          }}
        >
          <View
            style={{
              width: "60%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              backgroundColor: "#B8B8B8",
              borderRadius: 6,
            }}
          >
            <Pressable onPress={() => (setRColor(false), setIColor(true))}>
              <Text
                style={[
                  { fontSize: 17, fontWeight: "600" },
                  icolor ? { color: "#f96163" } : { color: "#fff" },
                ]}
              >
                Ingridients
              </Text>
            </Pressable>
            <Text style={{ fontSize: 23, color: "#f96163", fontWeight: "200" }}>
              |
            </Text>
            <Pressable onPress={() => (setIColor(false), setRColor(true))}>
              <Text
                style={[
                  { fontSize: 17, fontWeight: "600" },
                  rcolor ? { color: "#f96163" } : { color: "#fff" },
                ]}
              >
                Instructions
              </Text>
            </Pressable>
          </View>
        </View>
  
        {icolor? (<Ingredients foodDetails={foodDetails} />) : (<Preparation steps={steps} />)}
      </>
    );
  };

export default Screens

const styles = StyleSheet.create({})