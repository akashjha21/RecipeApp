import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const Header = ({headerText}:any) => {
  return (
    <SafeAreaView style={{ marginHorizontal: 16, flexDirection:'row'}}>
      <Text style={{flex: 1, fontSize:24, fontWeight:'bold' }}>{headerText}</Text>
      <Feather name="bell" size={24} color="black" style={{marginTop:5}}  />
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})