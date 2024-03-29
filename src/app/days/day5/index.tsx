import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router';
import Markdown from 'react-native-markdown-display';
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# AirBNB Maps

Integrate Markdown content in **React Native**

`



const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{flex:1}}>
      <Stack.Screen options={{title: 'Projet 5: Maps'}} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      
      <Link href="days/day5/mapview" asChild>
       <Button  title="C'est parti!" />
      </Link>
    </SafeAreaView>
  )
}


export default DayDetailsScreen