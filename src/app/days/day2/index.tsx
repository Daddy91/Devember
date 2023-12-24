import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router';


const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{title: 'Day 2: Onboarding'}} />
      <Text style={{fontFamily: 'AmaticBold', fontSize: 50}}>Découvrez qui je suis et ce que je fais.</Text>
      
      <Link href="days/day2/onboarding" asChild>
       <Button  title="C'est parti!" />
      </Link>
    </View>
  )
}

export default DayDetailsScreen