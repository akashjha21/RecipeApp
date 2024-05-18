import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Preparation = ({steps}:any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preparation Steps:</Text>
      {steps.map((step: any) => (
        <View key={step.number} style={styles.stepContainer}>
          <Text style={styles.stepNumber}>Step {step.number}:</Text>
          <Text style={styles.step}>{step.step}</Text>
        </View>
      ))}
    </View> 
  )
}

export default Preparation

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 20,
      },
      title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      stepContainer: {
        marginBottom: 10,
      },
      stepNumber: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
      },
      step: {
        fontSize: 18,
        fontWeight:'400'
      },
})