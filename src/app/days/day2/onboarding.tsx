import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons';

export default function OnboardingScreen() {
    return (
        <SafeAreaView style={style.page}>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={style.pageContent}>


                <FontAwesome5
                    style={style.image}
                    name="exchange-alt"
                    size={100}
                    color="#CEF205"
                />
                <View style={style.footer}>
                    <Text style={style.title}>Track every transaction</Text>
                    <Text style={style.description}>
                        Monitor your spending and contribution,
                        ensuring every penny aligns with your family's
                        aspirations
                    </Text>

                    <View style={style.buttonsRow}>
                        <Text style={style.buttonText}>Skip</Text>
                        <Pressable style={style.button}>
                            <Text style={style.buttonText}>Continue</Text>
                        </Pressable>

                    </View>

                </View>

            </View>



        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    page: {
        //alignItems:'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#15141A',

    },
    pageContent: {
        padding: 20,
        flex: 1,

    },
    image: {
        alignSelf: 'center',
        margin: 20,
    },
    title: {
        color: '#FDFDFD',
        fontSize: 50,
        fontFamily: 'InterBlack',
        letterSpacing: 1.3,
        marginVertical: 10,
    },
    description: {
        color: 'gray',
        fontSize: 20,
        fontFamily: 'Inter',
        lineHeight: 28,
    },
    footer: {
        marginTop: 'auto'
    },
    button:{
        backgroundColor:'#302E38',
        //padding:15,
        borderRadius:50,
        alignItems:'center',
        flex:1

    },
    buttonsRow:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        gap:20
        

    },
    buttonText:{
        color:'#FDFDFD',
        fontFamily:'InterSemi',
        fontSize: 16,
        
        padding:15,
        paddingHorizontal: 25,

    }

})

